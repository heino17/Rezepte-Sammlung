/*
 * Julia's Rezepte-Sammlung  Copyright (C) 2026 heino17
 * https://github.com/heino17/Rezepte-Sammlung
 */
"use strict";
const fs = require("fs");
const vm = require("vm");

const FILE = require("path").join(__dirname, "sprachen.js");

/* ---- Browser-Mocks ---- */
function baueContext(urlSearch, gespeichert, navLang) {
  const store = {};
  Object.assign(store, gespeichert || {});
  return {
    location: new URL("https://example.test/index.html" + urlSearch),
    localStorage: {
      getItem: k => (k in store ? store[k] : null),
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: k => { delete store[k]; }
    },
    navigator: { language: navLang || "de-DE" },
    document: {
      documentElement: {},
      getElementById: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {}, removeEventListener: () => {}
    },
    Intl, URL, URLSearchParams, console
  };
}

function lade(ctx, standardSprache) {
  let code = fs.readFileSync(FILE, "utf8");
  if (standardSprache !== undefined) {
    code = code.replace(/var STANDARD_SPRACHE = "[^"]*";/,
      'var STANDARD_SPRACHE = "' + standardSprache + '";');
  }
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx;
}

let ok = 0, fail = 0;
function prufe(name, bedingung, extra) {
  if (bedingung) { ok++; console.log("  PASS  " + name); }
  else { fail++; console.log("  FAIL  " + name + (extra ? "  -> " + extra : "")); }
}

console.log("== aktuelleSprache(): Prioritaet URL > localStorage > Standard > Browser ==");

let c = lade(baueContext("?lang=fr", { rezept_lang_v1: "ru" }));
pruve(c, "fr", "?lang=fr schlaegt localStorage");

c = lade(baueContext("", { rezept_lang_v1: "ru" }));
pruve(c, "ru", "localStorage ohne URL-Parameter");

c = lade(baueContext("?lang=xx", {}));
pruve(c, "de", "ungueltiger ?lang-Code -> Standard de");

c = lade(baueContext("", {}, "ja"));
pruve(c, "de", "Browser 'ja' wird ignoriert, solange STANDARD_SPRACHE=de gilt (dokumentiertes Verhalten)");

c = lade(baueContext("", { rezept_lang_v1: null }, "zh-TW"));
pruve(c, "de", "kein Storage + Browser zh*: STANDARD_SPRACHE=de gewinnt bewusst vor Browsersprache");

c = lade(baueContext("", { rezept_lang_v1: null }, "de-DE"));
pruve(c, "de", "Regionale Variante de-DE -> de");

console.log("\n== STANDARD_SPRACHE=\"auto\": Browsersprache als opt-in ==");
c = lade(baueContext("", { rezept_lang_v1: null }, "ja"), "auto");
pruve(c, "ja", "auto + Browser ja -> ja");
c = lade(baueContext("", { rezept_lang_v1: null }, "en-US"), "auto");
pruve(c, "en", "auto + Browser en-US -> en (Regionalvariante, vorher nicht erkennbar)");
c = lade(baueContext("", { rezept_lang_v1: null }, "zh-TW"), "auto");
pruve(c, "zh_CN", "auto + Browser zh-TW -> zh_CN");
c = lade(baueContext("", { rezept_lang_v1: null }, "de_at"), "auto");
pruve(c, "de", "auto + Browser de_AT -> de");
c = lade(baueContext("", { rezept_lang_v1: null }, "pt-BR"), "auto");
pruve(c, "de", "auto + nicht unterstuetzte Sprache pt-BR -> Rueckfall de");
c = lade(baueContext("", { rezept_lang_v1: null }, ""), "auto");
pruve(c, "de", "auto + leere Browsersprache -> Rueckfall de");
c = lade(baueContext("?lang=ru", { rezept_lang_v1: null }, "ja"), "auto");
pruve(c, "ru", "auto: URL-Parameter hat weiterhin Vorrang vor Browsersprache");
c = lade(baueContext("", { rezept_lang_v1: "es" }, "ja"), "auto");
pruve(c, "es", "auto: gespeicherte Wahl hat weiterhin Vorrang vor Browsersprache");

function pruve(ctx, erwartet, name) {
  prufe(name, ctx.sprache === erwartet, "ist \"" + ctx.sprache + "\", erwartet \"" + erwartet + "\"");
}

console.log("\n== tr(): Uebersetzung, Fallback, Platzhalter ==");

c = lade(baueContext("?lang=en"));
prufe("en: Speichern -> Save", c.tr("Speichern") === "Save");
prufe("en: fehlender Key -> deutscher Text", c.tr("GIBT_ES_NICHT_XYZ") === "GIBT_ES_NICHT_XYZ");
prufe("en: Platzhalter {anzahl}",
  c.tr("{anzahl} Rezepte", { anzahl: 3 }) === "3 recipes");
prufe("en: nicht uebergebener Platzhalter bleibt stehen",
  c.tr("Gesamt {summe}", { anzahl: 3 }) === "Total {summe}");

c = lade(baueContext("?lang=de"));
prufe("de: tr liefert Schluessel selbst", c.tr("Speichern") === "Speichern");

console.log("\n== pluralKategorie() / trPlural() ==");

c = lade(baueContext("?lang=ru"));
prufe("ru: 1 -> one", c.pluralKategorie(1) === "one");
prufe("ru: 21 -> one", c.pluralKategorie(21) === "one");
prufe("ru: 2 -> few", c.pluralKategorie(2) === "few");
prufe("ru: 4 -> few", c.pluralKategorie(4) === "few");
prufe("ru: 12 -> many", c.pluralKategorie(12) === "many");
prufe("ru: 11 -> many", c.pluralKategorie(11) === "many");
prufe("ru: 5 -> many", c.pluralKategorie(5) === "many");
prufe("ru: 25 -> many (endet auf 5)", c.pluralKategorie(25) === "many");
prufe("ru: 111 -> many", c.pluralKategorie(111) === "many");
prufe("ru: -3 -> few (Abs)", c.pluralKategorie(-3) === "few");
prufe("ru: 2.9 -> floor 2 -> few", c.pluralKategorie(2.9) === "few");

prufe("ru: trPlural(1) Einzahl",
  c.trPlural(1, "{anzahl} Rezept", "{anzahl} Rezepte") === "1 рецепт");
prufe("ru: trPlural(3) -> few-Form vorhanden?",
  (() => { const d = c.sprachen.ru; return !!(d.PLURAL_FEW && d.PLURAL_FEW["{anzahl} Rezepte"]); })(),
  "PLURAL_FEW fehlt oder Key nicht drin -> faellt auf 'many' zurueck");
prufe("ru: trPlural(5) Mehrzahl",
  c.trPlural(5, "{anzahl} Rezept", "{anzahl} Rezepte") === "5 рецептов");

c = lade(baueContext("?lang=en"));
prufe("en: trPlural(1)/(2)",
  c.trPlural(1, "{anzahl} Rezept", "{anzahl} Rezepte") === "1 recipe" &&
  c.trPlural(2, "{anzahl} Rezept", "{anzahl} Rezepte") === "2 recipes");
prufe("en: 0 -> many", c.trPlural(0, "{anzahl} Rezept", "{anzahl} Rezepte") === "0 recipes");

console.log("\n== Einheiten: Hin- und rueck-Uebersetzung ==");
for (const lang of ["en", "ru", "es", "fr", "ja", "ko", "zh_CN"]) {
  c = lade(baueContext("?lang=" + lang));
  /* FIX: mit Original-Anker ist der Roundtrip fuer JEDE Einheit verlustfrei */
  let verluste = [];
  const alle = Object.keys(c.EINHEITEN_ANZEIGE[lang]).concat(["g", "ml", "", "XYZ"]);
  for (const u of alle) {
    const back = c.einheitKanonisch(c.einheitAnzeige(u), u);
    if (back !== u) verluste.push(JSON.stringify(u) + "->" + JSON.stringify(back));
  }
  prufe(lang + ": Roundtrip MIT Original-Anker verlustfrei", verluste.length === 0,
    verluste.join(", "));
}

/* Editor-Handler-Semantik (rezepte_bearbeiten.html .zEinheit input-Listener) */
function editorHandler(ctx, input) {
  if (input.dataset.kanonisch != null && input.dataset.kanonisch !== "") {
    const v = input.dataset.kanonisch;
    delete input.dataset.kanonisch;
    return v;
  }
  const orig = input.dataset.orig || "";
  if (orig && input.value === ctx.einheitAnzeige(orig)) return orig;
  return ctx.einheitKanonisch(input.value);
}
c = lade(baueContext("?lang=en"));
prufe("EN Dropdown waehlt 'Stk.' -> Stk. gespeichert (vorher still St.)",
  editorHandler(c, { value: "pcs.", dataset: { orig: "Stk.", kanonisch: "Stk." } }) === "Stk.");
prufe("EN unveranderte Anzeige -> Original bleibt",
  editorHandler(c, { value: "pcs.", dataset: { orig: "Stk." } }) === "Stk.");
prufe("EN echte Neueingabe -> Normalisierung greift weiter",
  editorHandler(c, { value: "tbsp", dataset: { orig: "Stk." } }) === "EL");
prufe("EN leere Eingabe -> leer",
  editorHandler(c, { value: "", dataset: { orig: "Stk." } }) === "");
c = lade(baueContext("?lang=ja"));
prufe("JA Tasse bleibt Tasse trotz Becher-Kollision (カップ)",
  editorHandler(c, { value: "カップ", dataset: { orig: "Tasse" } }) === "Tasse");
prufe("JA Neueingabe 大さじ -> EL",
  editorHandler(c, { value: "大さじ", dataset: { orig: "Tasse" } }) === "EL");
c = lade(baueContext("?lang=es"));
prufe("ES Becher bleibt Becher trotz Glas-Kollision (vaso)",
  editorHandler(c, { value: "vaso", dataset: { orig: "Becher" } }) === "Becher");

c = lade(baueContext("?lang=en"));
prufe("ohne Anker: Ersttreffer-Verhalten unveraendert",
  c.einheitKanonisch("pcs.") === "St." && c.einheitKanonisch("tbsp") === "EL");
c = lade(baueContext("?lang=ja"));
{
  const einmal = c.einheitKanonisch(c.einheitAnzeige("Tasse"));
  prufe("ohne Anker: konvergiert stabil, keine Oszillation",
    c.einheitKanonisch(c.einheitAnzeige(einmal)) === einmal);
}
c = lade(baueContext("?lang=de"));
prufe("de: einheitAnzeige identisch", c.einheitAnzeige("EL") === "EL");
prufe("unbekannte Einheit bleibt erhalten", c.einheitAnzeige("Stern") === "Stern");

console.log("\n== wochenplan.html: Naehrwert-Summen & Pro-Portion-Umschalter ==");
{
  const wpSrc = fs.readFileSync(require("path").join(__dirname, "..", "wochenplan.html"), "utf8");
  const anfang = wpSrc.indexOf("var NAHR_FELDER");
  const ende = wpSrc.indexOf("function formatiereNahrWert");
  if (anfang < 0 || ende < 0 || ende <= anfang) throw new Error("Naehrwert-Block nicht gefunden");
  const nahrCode = wpSrc.slice(anfang, ende);

  const ctx = baueContext("?lang=de");
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(FILE, "utf8"), ctx); /* sprachen.js: tr/trPlural */
  /* Gespeicherte Werte sind je 1 PORTION: Salat 400 kcal x4, Kuchen 100 x2 */
  ctx.DB = [
    { id: "a", name: "Salat", portionen: 4, nahrwerte: { kcal: 400, kohlenhydrate: 10 } },
    { id: "b", name: "Kuchen", portionen: 2, nahrwerte: { kcal: 100, fette: 5 } },
    { id: "c", name: "OhneAngabe", portionen: 3 }
  ];
  vm.runInContext(nahrCode, ctx);

  /* Modus Gesamt (Voreinstellung): jede Planung = ganzes Rezept (x portionen) */
  let s = ctx.nahrSummeFuer(["a", "a"]);
  prufe("Gesamt: Salat 2x geplant -> 400*4*2 = 3200", s.kcal === 3200, "ist " + s.kcal);
  prufe("Gesamt: + Kuchen 100*2 -> 3400 gesamt",
    ctx.nahrSummeFuer(["a", "a", "b", "c", "x"]).kcal === 3400);
  prufe("Gesamt: Kohlenhydrate 10*4*2 = 80", ctx.nahrSummeFuer(["a", "a"]).kohlenhydrate === 80);
  prufe("fehlend zaehlt Rezepte ohne Werte je Vorkommen",
    ctx.nahrSummeFuer(["a", "c", "c"]).fehlend === 2);
  prufe("geloeschte/unbekannte IDs werden uebersprungen",
    ctx.nahrSummeFuer(["x"]).fehlend === 0 && ctx.nahrSummeFuer(["x"]).kcal === 0);

  /* Modus Pro Portion: jede Planung = genau 1 Portion (Wert unveraendert) */
  ctx.nahrProPortion = true;
  s = ctx.nahrSummeFuer(["a", "a", "b", "c", "x"]);
  prufe("Pro Portion: 400+400+100 = 900 (KEIN Teilen durch portionen)", s.kcal === 900, "ist " + s.kcal);
  prufe("Pro Portion: Fette 5", s.fette === 5);
  ctx.nahrProPortion = false;

  prufe("nahrFaktor: Gesamt=portionen, ProPortion=1, ohne Angabe=1",
    ctx.nahrFaktor(ctx.DB[0]) === 4 && (() => { ctx.nahrProPortion = true; const f = ctx.nahrFaktor(ctx.DB[0]); ctx.nahrProPortion = false; return f; })() === 1 && ctx.nahrFaktor({ id: "z" }) === 1);
  prufe("rezeptHatNahr: Objekt-Guard greift",
    ctx.rezeptHatNahr(null) === false && ctx.rezeptHatNahr({ id: "c" }) === false);
}

console.log("\n== rezepte.html: Modal „Zutaten-Naehrwerte“ ==");
{
  const rzSrc = fs.readFileSync(require("path").join(__dirname, "..", "rezepte.html"), "utf8");
  const start = rzSrc.indexOf("/* ===== Modal");
  const ende = rzSrc.indexOf("</script>", start);
  if (start < 0 || ende < 0) throw new Error("Modal-Block nicht gefunden");
  const modalCode = rzSrc.slice(start, ende);

  const ctx = baueContext("?lang=de");
  ctx.escapeHtml = function (s) { return String(s); };
  ctx.document._el = {};
  const origGetElementById = ctx.document.getElementById;
  ctx.document.getElementById = function (id) {
    return this._el[id] || origGetElementById.call(this, id);
  };
  ["nahrQuelleModal", "btnNahrQuelleZu", "nahrSuche", "nahrTabelle", "nahrQuelleHinweis"]
    .forEach(function (id) {
      ctx.document._el[id] = {
        id: id, innerHTML: "", textContent: "", value: "", hidden: true,
        focus: function () {},
        addEventListener: function () {}
      };
    });
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(FILE, "utf8"), ctx); /* sprachen.js */
  const tcmCode = fs.readFileSync(require("path").join(__dirname, "zutaten-tcm.js"), "utf8");
  ctx.ZUTATEN_TCM = new Function(
    tcmCode.replace(/if \(typeof module[\s\S]*$/, "") + "; return ZUTATEN_TCM;")();
  const nwCode = fs.readFileSync(require("path").join(__dirname, "zutaten-naehrwerte.js"), "utf8");
  ctx.ZUTATEN_NAEHRWERTE = new Function(
    nwCode.replace(/if \(typeof module[\s\S]*$/, "") + "; return ZUTATEN_NAEHRWERTE;")();
  vm.runInContext(modalCode, ctx);

  prufe("140 Zutaten + _hinweis geladen", Object.keys(ctx.ZUTATEN_NAEHRWERTE).length === 141);
  prufe("Filter ohne Begriff -> alle 140", ctx.nahrQuelleZeilen("").length === 140);
  prufe("Filter 'avocado' -> genau Avocado",
    JSON.stringify(ctx.nahrQuelleZeilen("avocado")) === JSON.stringify(["Avocado"]));
  prufe("_hinweis taucht nie als Zeile auf", ctx.nahrQuelleZeilen("werte").length === 0);
  const alle = ctx.nahrQuelleZeilen("");
  prufe("Sortierung aufsteigend (localeCompare de)",
    alle.every(function (n, i) { return i === 0 || alle[i - 1].localeCompare(n, "de") <= 0; }));

  ctx.oeffneNahrQuelle();
  prufe("oeffnen zeigt Modal", ctx.document._el.nahrQuelleModal.hidden === false);
  const tab = ctx.document._el.nahrTabelle;
  prufe("Tabelle enthaelt Avocado mit 160 kcal", tab.innerHTML.includes("Avocado") && tab.innerHTML.includes("160"));
  prufe("Hinweissatz gesetzt", ctx.document._el.nahrQuelleHinweis.textContent.includes("100 g"));

  ctx.document._el.nahrSuche.value = "xyzkeintreffer";
  ctx.rendereNahrQuelleTabelle();
  prufe("Suche ohne Treffer -> Hinweistext", tab.innerHTML.includes("Keine Treffer"));

  /* Anzeigesprache der Zutatennamen (ZUTATEN_TCM "namen") */
  prufe("de: Anzeigename bleibt kanonisch", ctx.nahrQuelleAnzeigeName("Salz") === "Salz");
  ctx.location.search = "?lang=ru";
  prufe("ru: Salz -> Соль (volle Liste, Position)", ctx.nahrQuelleAnzeigeName("Salz") === "Соль");
  prufe("ru: Avocado -> Авокадо",
    ctx.nahrQuelleAnzeigeName("Avocado") === "Авокадо");
  prufe("ru: Suche 'авокадо' findet Avocado",
    ctx.nahrQuelleZeilen("авокадо").indexOf("Avocado") !== -1);
  ctx.location.search = "?lang=fr";
  prufe("fr: Avocado -> Avocat (Liste inzwischen vollstaendig)",
    ctx.nahrQuelleAnzeigeName("Avocado") === "Avocat");
  ctx.location.search = "?lang=ja";
  prufe("ja: Avocado -> アボカド", ctx.nahrQuelleAnzeigeName("Avocado") === "アボカド");
  prufe("ja: Salz -> 塩 (Kana-los, volle Liste per Position)", ctx.nahrQuelleAnzeigeName("Salz") === "塩");
  ctx.location.search = "?lang=ko";
  prufe("ko: Milch -> 우유", ctx.nahrQuelleAnzeigeName("Milch") === "우유");
  ctx.location.search = "?lang=zh_CN";
  prufe("zh_CN: Salz -> 盐 (kein Kana-Missverstaendnis)", ctx.nahrQuelleAnzeigeName("Salz") === "盐");
  var zhSorteOk = false;
  try {
    zhSorteOk = ctx.nahrQuelleZeilen("").length === 140 &&
      ctx.nahrQuelleZeilen("盐").indexOf("Salz") !== -1;
  } catch (e) { /* RangeError "invalid language tag" -> Test faellt */ }
  prufe("zh_CN: Suche + Sortierung ohne RangeError (sprachTag statt Roh-Code)", zhSorteOk);
  ctx.location.search = "?lang=en";
  prufe("en: Avocado -> Avocado (Position EN)",
    ctx.nahrQuelleAnzeigeName("Avocado") === "Avocado");

  ctx.schliesseNahrQuelle();
  prufe("schliessen versteckt Modal", ctx.document._el.nahrQuelleModal.hidden === true);
}

console.log("\n== zutaten-tcm.js: Vollstaendigkeit & Integritaet ==");
{
  const tcmCode = fs.readFileSync(require("path").join(__dirname, "zutaten-tcm.js"), "utf8");
  const tcm = new Function(
    tcmCode.replace(/if \(typeof module[\s\S]*$/, "") + "; return ZUTATEN_TCM;")();
  const nwCode = fs.readFileSync(require("path").join(__dirname, "zutaten-naehrwerte.js"), "utf8");
  const nw = new Function(
    nwCode.replace(/if \(typeof module[\s\S]*$/, "") + "; return ZUTATEN_NAEHRWERTE;")();
  const cyr = /[\u0400-\u04FF]/, hang = /[\uAC00-\uD7AF]/, kana = /[\u3040-\u30FF]/;

  prufe("Mayonaise vorhanden, Mayonnaise-Doppel-Eintrag entfernt",
    !!tcm["Mayonaise"] && !tcm["Mayonnaise"] &&
    Array.isArray(tcm["Mayonaise"].namen) && tcm["Mayonaise"].namen.length === 7);

  const unvoll = [], slotFehler = [];
  let voll = 0, leer = 0;
  for (const [k, e] of Object.entries(tcm)) {
    const n = e.namen || [];
    if (!n.length) { leer++; continue; }
    if (n.length !== 7) { unvoll.push(k); continue; }
    voll++;
    if (!cyr.test(n[1])) slotFehler.push(k + ":RU");
    if (!hang.test(n[5])) slotFehler.push(k + ":KO");
    if (kana.test(n[6])) slotFehler.push(k + ":ZH-Kana");
  }
  prufe("Alle nicht-leeren namen haben genau 7 Varianten", unvoll.length === 0,
    unvoll.slice(0, 5).join("; "));
  prufe("Slots korrekt (RU kyrillisch, KO Hangul, ZH ohne Kana)", slotFehler.length === 0,
    slotFehler.slice(0, 5).join("; "));
  prufe("ALLE Eintraege vollstaendig (" + Object.keys(tcm).length + "/" +
    Object.keys(tcm).length + "), keine leeren namen",
    voll === Object.keys(tcm).length && leer === 0, "voll: " + voll + ", leer: " + leer);

  /* Modal-Abdeckung: jede Nährwert-Zutat braucht volle Varianten */
  const fehlen = Object.keys(nw).filter(function (k) {
    if (k.charAt(0) === "_") return false;
    return !(tcm[k] && Array.isArray(tcm[k].namen) && tcm[k].namen.length === 7);
  });
  prufe("Alle Naehrwert-Zutaten mit vollen Varianten (Modal-Anzeige)",
    fehlen.length === 0, fehlen.slice(0, 5).join("; "));
}

console.log("\n== Schritt-Wecker: Marker & Zeiterkennung ==");
{
  const w = lade(baueContext("?lang=de"));
  const beispiel = "Bei 150° C ca. 15-20 min backen.";

  prufe("Zeit-Erkennung: Bereich -> Mittelwert (15-20 -> 18)",
    w.minutenAusSchrittText(beispiel) === 18);
  prufe("Zeit-Erkennung: Halbgeviertstrich-Bereich (40–50 -> 45)",
    w.minutenAusSchrittText("ca. 40–50 min ziehen lassen") === 45);
  prufe("Zeit-Erkennung: 'bis'-Bereich (10 bis 12 -> 11)",
    w.minutenAusSchrittText("10 bis 12 min kochen") === 11);
  prufe("Zeit-Erkennung: Einzelwert '20 min'", w.minutenAusSchrittText("20 min quellen lassen.") === 20);
  prufe("Zeit-Erkennung: '1 Std 15 min' -> 75", w.minutenAusSchrittText("1 Std 15 min backen") === 75);
  prufe("Zeit-Erkennung: '2 Stunden' -> 120", w.minutenAusSchrittText("Ca. 2 Stunden ziehen lassen.") === 120);
  prufe("Zeit-Erkennung: ohne Zeitangabe -> null",
    w.minutenAusSchrittText("Zwiebeln goldbraun dünsten.") === null);

  let x = w.setzeWeckerMarker("Teig backen.", 17.6);
  prufe("Marker setzen (rundet auf 18)", x === "Teig backen. [⏰18]");
  x = w.setzeWeckerMarker(x, 22);
  prufe("Marker ersetzen statt verdoppeln",
    x === "Teig backen. [⏰22]" && (x.match(/\[⏰/g) || []).length === 1);
  prufe("Marker lesen", w.leseWeckerMinuten(x) === 22);
  prufe("Anzeige-Text ohne Marker", w.ohneWeckerMarker(x) === "Teig backen.");
  prufe("Entfernen via null", w.setzeWeckerMarker(x, null) === "Teig backen.");
  prufe("Klemmen auf max. 180 Minuten", w.leseWeckerMinuten(w.setzeWeckerMarker("x", 300)) === 180);

  /* Verdrahtung (statisch): Chips, Editor-Knopf, Export ohne Marker */
  const rz = fs.readFileSync(require("path").join(__dirname, "..", "rezepte.html"), "utf8");
  prufe("rezepte.html: Detail-Chip + Küchen-Chip vorhanden",
    rz.includes('schritt-wecker-start') && rz.includes('kueche-schritt-wecker'));
  prufe("rezepte.html: Chip-Klick startet Timer sofort",
    rz.includes('if (!starteKuecheTimer(Number(b.dataset.min), r.name, b.dataset.key)) {\n        zeigeKuecheTimerHinweis();'));
  prufe("rezepte.html: Hinweis-Element + Einblendfunktion vorhanden",
    rz.includes('id="kuecheTimerHinweis"') && rz.includes("function zeigeKuecheTimerHinweis"));
  prufe("rezepte.html: laufender Schritt-Chip wird ignoriert statt ersetzt",
    rz.includes("if (kuecheTimerLaeuft(schluessel)) return false;"));
  prufe("rezepte.html: Alarm-Blinken am Kuechenmodus-Knopf verdrahtet",
    rz.includes("function setzeKuecheAlarm") &&
    rz.includes('classList.toggle("alarm-blinkt"') &&
    rz.includes("@keyframes kuecheAlarmBlinken") &&
    rz.includes("setzeKuecheAlarm();"));
  prufe("rezepte.html: Farbtakt mit Kappen (Orange max. 5 min / Rot max. 2 min)",
    rz.includes("Math.min(t.dauerSek * 0.29, 120)") &&
    rz.includes("Math.min(t.dauerSek * 0.5, 300)"));
  prufe("rezepte.html: Kuechen-Schriftstufe bleibt gemerkt",
    rz.includes("localStorage.setItem(KUECHE_SCHRIFT_KEY") &&
    rz.includes("setzeKuecheSchrift(kuecheSchriftStufe);") &&
    !rz.includes("setzeKuecheSchrift(1);"));
  prufe("rezepte.html: Chips tragen Kennung (data-key)",
    rz.indexOf('data-key="\' + escapeHtml(r.id)') !== -1);

  /* Verhaltenstest: Küchen-Timer-Block isoliert ausführen */
  const rzSrc = fs.readFileSync(require("path").join(__dirname, "..", "rezepte.html"), "utf8");
  const tAnfang = rzSrc.indexOf("var kuecheTimerListe");
  const tEnde = rzSrc.indexOf("function kuecheTimerSignal");
  if (tAnfang < 0 || tEnde < 0) throw new Error("Kuechen-Timer-Block nicht gefunden");
  const tctx = baueContext("?lang=de");
  tctx.escapeHtml = function (s) { return String(s); };
  const elCache = {};
  const klZustand = {};
  tctx.document.querySelectorAll = function (sel) {
    return sel === "#btnKuecheAn" && elCache.btnKuecheAn ? [elCache.btnKuecheAn] : [];
  };
  tctx.document.getElementById = function (id) {
    if (!elCache[id]) {
      elCache[id] = { value: "", textContent: "", innerHTML: "", hidden: false, title: "",
        classList: {
          add: function (c) { klZustand[id] = klZustand[id] || {}; klZustand[id][c] = true; },
          remove: function (c) { if (klZustand[id]) delete klZustand[id][c]; },
          toggle: function (c, v) {
            klZustand[id] = klZustand[id] || {};
            if (v === undefined) { klZustand[id][c] ? delete klZustand[id][c] : klZustand[id][c] = true; }
            else { v ? klZustand[id][c] = true : delete klZustand[id][c]; }
            return v !== false;
          },
          contains: function (c) { return !!(klZustand[id] && klZustand[id][c]); }
        },
        style: { setProperty: function () {} }, focus: function () {}, addEventListener: function () {} };
    }
    return elCache[id];
  };
  tctx.setInterval = function () { return 0; };   /* keine echten Timer im Test */
  tctx.clearInterval = function () {};
  tctx.setTimeout = function () { return 7; };    /* Hinweis-Ausblendung nicht feuern */
  tctx.clearTimeout = function () {};
  vm.createContext(tctx);
  vm.runInContext(fs.readFileSync(FILE, "utf8"), tctx);
  vm.runInContext(rzSrc.slice(tAnfang, tEnde), tctx);

  const ersteStart = tctx.starteKuecheTimer(18, "Apfelkuchen", "kuchen:2");
  prufe("Chip startet genau einen Timer (Rueckgabe true)", ersteStart === true && tctx.kuecheTimerListe.length === 1);
  const ersteEnde = tctx.kuecheTimerListe[0].endeZeit;
  const nochmal = tctx.starteKuecheTimer(18, "Apfelkuchen", "kuchen:2");
  prufe("Erneuter Klick wird ignoriert (Rueckgabe false)", nochmal === false);
  prufe("Laufender Timer bleibt unangetastet",
    tctx.kuecheTimerListe.length === 1 && tctx.kuecheTimerListe[0].endeZeit === ersteEnde);
  prufe("kuecheTimerLaeuft erkennt laufenden Schritt",
    tctx.kuecheTimerLaeuft("kuchen:2") === true && tctx.kuecheTimerLaeuft("x:9") === false);
  tctx.starteKuecheTimer(5, "Nudeln", "kuchen:0");
  prufe("Anderer Schritt bekommt eigenen Timer", tctx.kuecheTimerListe.length === 2);

  /* Alarm-Blinken am Küchenmodus-Knopf bei abgelaufenem Wecker */
  tctx.document.getElementById("btnKuecheAn");   /* Knopf existiert (Detailansicht offen) */
  tctx.rendereKuecheTimer();
  prufe("Ohne abgelaufenen Timer blinkt der Knopf nicht",
    !elCache.btnKuecheAn.classList.contains("alarm-blinkt"));
  tctx.kuecheTimerListe[0].abgelaufen = true;   /* Apfelkuchen-Wecker abgelaufen */
  tctx.rendereKuecheTimer();
  prufe("Abgelaufener Timer: Kuechenmodus-Knopf blinkt rot",
    elCache.btnKuecheAn.classList.contains("alarm-blinkt"));
  tctx.entferneKuecheTimer(tctx.kuecheTimerListe[0].id);
  prufe("Wegklicken des abgelaufenen Timers beendet das Blinken",
    !elCache.btnKuecheAn.classList.contains("alarm-blinkt"));

  /* Farbtakt: kurze Timer prozentual wie bisher, lange Timer gekappt
   * auf max. 5 min Orange / max. 2 min Rot Restzeit */
  function stufeFuer(dauerSek, restSek) {
    const alt = tctx.kuecheTimerListe;
    tctx.kuecheTimerListe = [{ id: 999, name: "T", dauerSek: dauerSek,
      endeZeit: Date.now() + restSek * 1000, abgelaufen: false, schluessel: null }];
    tctx.rendereKuecheTimer();
    const html = elCache.kuecheTimerListe.innerHTML;
    tctx.kuecheTimerListe = alt;
    return html.indexOf("stufe-gruen") !== -1 ? "gruen"
         : html.indexOf("stufe-orange") !== -1 ? "orange" : "rot";
  }
  prufe("Farbtakt 1 min wie bisher (0:30 Orange / 0:17 Rot)",
    stufeFuer(60, 31) === "gruen" && stufeFuer(60, 29) === "orange" && stufeFuer(60, 16) === "rot");
  prufe("Farbtakt 10 min -> Rot ab 2:00 (Rot-Kappe greift)",
    stufeFuer(600, 125) === "orange" && stufeFuer(600, 115) === "rot");
  prufe("Farbtakt 30 min -> Orange erst ab 5:00",
    stufeFuer(1800, 310) === "gruen" && stufeFuer(1800, 290) === "orange");
  prufe("Farbtakt 180 min -> Orange 5:00 / Rot 2:00",
    stufeFuer(10800, 290) === "orange" && stufeFuer(10800, 110) === "rot");

  /* Schriftstufe im Kuechenmodus bleibt gemerkt (localStorage) */
  const sAnfang = rzSrc.indexOf("var KUECHE_SCHRIFT_KEY");
  const sEnde = rzSrc.indexOf("function oeffneKueche(r)");
  if (sAnfang < 0 || sEnde < 0) throw new Error("Kueche-Schrift-Block nicht gefunden");
  const schriftCode = rzSrc.slice(sAnfang, sEnde);
  const lager = {};
  const lagerStub = {
    getItem: function (k) { return k in lager ? lager[k] : null; },
    setItem: function (k, v) { lager[k] = String(v); },
    removeItem: function (k) { delete lager[k]; }
  };
  function baueSchriftCtx() {
    const sc = baueContext("?lang=de");
    sc.localStorage = lagerStub;
    sc.kuecheSchriftStufe = 1;   /* Seiteninitialisierung */
    sc.document.getElementById = function (id) {
      if (!elCache[id]) elCache[id] = { style: { setProperty: function () {} },
        classList: { add: function () {}, remove: function () {}, toggle: function () {}, contains: function () { return false; } } };
      return elCache[id];
    };
    vm.createContext(sc);
    return sc;
  }
  const scA = baueSchriftCtx();
  vm.runInContext(schriftCode, scA);
  scA.setzeKuecheSchrift(1.3);
  prufe("Schriftstufe wird beim Verstellen gespeichert", lager["rezepte.kuecheSchrift"] === "1.3");
  scA.setzeKuecheSchrift(99);
  prufe("Schriftstufe wird bei 1.6 begrenzt",
    lager["rezepte.kuecheSchrift"] === "1.6" && scA.kuecheSchriftStufe === 1.6);
  const scB = baueSchriftCtx();   /* "Neuladen": neue Umgebung, gleicher Speicher */
  vm.runInContext(schriftCode, scB);
  prufe("Nach Neuladen wird 1.6 wiederhergestellt", scB.kuecheSchriftStufe === 1.6);
  lager["rezepte.kuecheSchrift"] = "Bananen";
  const scC = baueSchriftCtx();
  vm.runInContext(schriftCode, scC);
  prufe("Ungueltiger Speicherwert -> Standard 1", scC.kuecheSchriftStufe === 1);

  tctx.starteKuecheTimer(10);
  const vorManual = tctx.kuecheTimerListe.length;
  tctx.starteKuecheTimer(10);
  prufe("Manuelle Popover-Timer stapeln weiter (unveraendertes Verhalten)",
    tctx.kuecheTimerListe.length === vorManual + 1 &&
    tctx.kuecheTimerListe.filter(function (t) { return t.schluessel === null; }).length === 2);

  prufe("Exporte streifen Marker heraus",
    rz.includes('+ ". " + ohneWeckerMarker(s));') &&
    rz.includes('escapeHtml(ohneWeckerMarker(s))'));
  const ed = fs.readFileSync(require("path").join(__dirname, "..", "rezepte_bearbeiten.html"), "utf8");
  prufe("Editor: Wecker-Knopf mit Vorbelegung & Marker-Sync",
    ed.includes('data-s="wecker"') &&
    ed.includes("minutenAusSchrittText(r.zubereitung[i])") &&
    ed.includes("setzeWeckerMarker(r.zubereitung[i]"));
  prufe("Editor: Wecker-Minutenfeld hat Dunkel-Modus-Hintergrund",
    ed.includes('html[data-theme="dunkel"] .schritt .wecker-min'));
  prufe("Editor: Schritt-Hoehe erst nach DOM-Einbau gemessen", (function () {
    const a = ed.indexOf("function fuegeSchrittZeile");
    if (a < 0) return false;
    const block = ed.slice(a, ed.indexOf("\nfunction ", a + 10));
    return block.split("schrittAutoHoehe(ta)").length - 1 === 2 &&
      block.lastIndexOf("schrittAutoHoehe(ta)") > block.indexOf("liste.appendChild(div)");
  })());
  prufe("Editor: Wecker wird selbst uebernommen (input+blur, kein natives change noetig)",
    ed.includes('feld.addEventListener("input", weckerUebernehmen)') &&
    ed.includes('feld.addEventListener("blur", weckerUebernehmen)'));
  prufe("Editor: Zutat-Aktionen mit veraltetem Bezug loeschen nichts Falsches", (function () {
    const a = ed.indexOf('btn.dataset.z === "hoch"');
    if (a < 0) return false;
    const start = ed.lastIndexOf("var idx = r.zutaten.indexOf(z)", a);
    if (start < 0) return false;
    return /if \(idx < 0\) \{ rendereZutaten\(r\); return; \}/.test(ed.slice(start, a));
  })());
  prufe("Editor: Offene ⚙️-Aktionen wandern beim ▲▼ mit ihrer Reihe", (function () {
    const a = ed.indexOf("function rendereZutaten");
    if (a < 0) return false;
    const b = ed.slice(a, ed.indexOf("\nfunction ", a + 10));
    return ed.includes("var zuletztGerenderteZutaten") &&
      /zuletztGerenderteZutaten\[row\.dataset\.key\]/.test(b) &&
      b.includes('classList.contains("offen")') &&
      b.includes("tb.innerHTML") &&
      b.includes(".slice()") &&
      b.includes('classList.add("offen")');
  })());
  prufe("Editor: Reset warnt scharf, solange unexportierte Aenderungen vorliegen",
    ed.includes("var resetFrage = unexportiert") &&
    ed.includes("die noch NICHT in rezepte.js exportiert sind") &&
    ed.includes("confirm(resetFrage)") &&
    ed.includes('tr("Alle eigenen Änderungen verwerfen'));
  prufe("Editor: Reset laedt ohne zweite beforeunload-Frage neu", (function () {
    const a = ed.indexOf('getElementById("btnReset").onclick');
    if (a < 0) return false;
    const block = ed.slice(a, ed.indexOf('getElementById("btnHilfe").onclick'));
    return block.includes("unexportiert = false") &&
      block.indexOf("unexportiert = false") < block.indexOf("location.reload()");
  })());

  /* Regression: Bloßes Ansehen eines Rezepts durfte die Datenbank nie veraendern
   * (frueher schrieb rendereFormular Defaults wie notiz:"" ins Rezept - der
   * Export-Alarm sprang dann beim naechsten Rezeptwechsel ohne echte Aenderung an). */
  const rfA = ed.indexOf("function rendereFormular");
  const rfBlock = ed.slice(rfA, ed.indexOf("\nfunction ", rfA));
  prufe("Editor: rendereFormular schreibt keine Defaults mehr ins Rezept",
    !rfBlock.includes("r.portionen = r.portionen || 1") &&
    !rfBlock.includes("r.notiz = r.notiz") &&
    !rfBlock.includes("r.nahrwerte = r.nahrwerte") &&
    !rfBlock.includes("r.zutaten = r.zutaten ||") &&
    !rfBlock.includes("r.zubereitung = r.zubereitung ||") &&
    rfBlock.includes("var nw = r.nahrwerte || {};") &&
    rfBlock.includes("nw.kcal") && rfBlock.includes('escapeHtml(r.notiz || "")'));
  const leseCode = ed.slice(ed.indexOf("function leseAktuelles"),
    ed.indexOf("function speichereAktuelles"));
  function baueLeseCtx(domWerte) {
    const ec = baueContext("?lang=de");
    ec.document = { getElementById: function (fid) {
      return { value: domWerte[fid] === undefined ? "" : String(domWerte[fid]) };
    } };
    vm.createContext(ec);
    return ec;
  }
  function EchoDom(rez) {
    return { fName: rez.name, fKat: rez.kategorie, fPortionen: rez.portionen, fNotiz: "",
      nKcal: rez.nahrwerte.kcal, nKh: rez.nahrwerte.kohlenhydrate, nEw: rez.nahrwerte.eiweiss,
      nBal: rez.nahrwerte.ballaststoffe, nFett: rez.nahrwerte.fette };
  }
  const basisRezept = { id: "test-rezept", name: "Testrezept", kategorie: "Dessert",
    portionen: 2, bilder: ["bild.png"],
    zutaten: [{ menge: "200", einheit: "g", name: "Mehl" }],
    zubereitung: ["Teig mischen."],
    nahrwerte: { kcal: 100, kohlenhydrate: 10, eiweiss: 5, ballaststoffe: 1, fette: 4 } };
  const eco = baueLeseCtx(EchoDom(basisRezept));
  eco.DB = [JSON.parse(JSON.stringify(basisRezept))];
  eco.aktuellerId = "test-rezept";
  vm.runInContext(leseCode, eco);
  eco.leseAktuelles();
  prufe("Editor: Ansehen+Speichern ohne Eingabe laesst Rezept byte-identisch",
    JSON.stringify(eco.DB[0]) === JSON.stringify(basisRezept));
  const eco2 = baueLeseCtx(Object.assign(EchoDom(basisRezept), { fNotiz: "Eigene Notiz" }));
  eco2.DB = [JSON.parse(JSON.stringify(basisRezept))];
  eco2.aktuellerId = "test-rezept";
  vm.runInContext(leseCode, eco2);
  eco2.leseAktuelles();
  prufe("Editor: Notiz wird beim Speichern ins Rezept uebernommen",
    eco2.DB[0].notiz === "Eigene Notiz");
  const eco3 = baueLeseCtx(Object.assign(EchoDom(basisRezept), { fNotiz: "   " }));
  eco3.DB = [JSON.parse(JSON.stringify(Object.assign({}, basisRezept, { notiz: "Alt" })))];
  eco3.aktuellerId = "test-rezept";
  vm.runInContext(leseCode, eco3);
  eco3.leseAktuelles();
  prufe("Editor: Leere Notiz entfernt das Feld vollstaendig",
    !("notiz" in eco3.DB[0]));
  function editorBlock(fname) {
    const fa = ed.indexOf("function " + fname);
    return ed.slice(fa, ed.indexOf("\nfunction ", fa));
  }
  const tastenBlock = editorBlock("verschieben");
  const dragBlock = editorBlock("verschiebeZu");
  prufe("Editor: Umsortieren per Tasten setzt den Export-Alarm",
    tastenBlock.indexOf("speichernLocal()") !== -1 &&
    tastenBlock.indexOf("markiereUnexportiert()") > tastenBlock.indexOf("speichernLocal()"));
  prufe("Editor: Drag&Drop-Sortieren setzt den Export-Alarm",
    dragBlock.indexOf("speichernLocal()") !== -1 &&
    dragBlock.indexOf("markiereUnexportiert()") > dragBlock.indexOf("speichernLocal()"));

  /* Speichern-Knopf alarmiert bei ungespeicherten Formular-Eingaben */
  prufe("Editor: 💾-Alarm Struktur (Funktionen, zentraler input-Listener, CSS)",
    ed.includes("function markiereFormularGeaendert") &&
    ed.includes("function vergissFormularAenderung") &&
    ed.includes('document.addEventListener("input"') &&
    ed.includes("main.contains(ev.target)") &&
    ed.includes("#btnSpeichern.alarm, #btnObenSpeichern.alarm") &&
    ed.includes("animation: exportAlarm 1.4s ease-in-out infinite"));
  const spBlock = ed.slice(ed.indexOf("function speichereAktuelles"),
    ed.indexOf("function dupliziereAktuelles"));
  prufe("Editor: Sichern nimmt die 💾-Alarmaufforderung zurueck",
    spBlock.indexOf("vergissFormularAenderung()") > spBlock.indexOf("markiereUnexportiert()"));
  prufe("Editor: Neuaufbau des Formulars setzt die 💾-Alarmaufforderung zurueck",
    rfBlock.includes("vergissFormularAenderung();"));
  const fgCode = ed.slice(ed.indexOf("var formularGeaendert"),
    ed.indexOf("function anzahlAusgewaehlt"));
  const fk = baueContext("?lang=de");
  fk.tr = function (s) { return s; };
  fk.aktuellerId = "test-rezept";
  const knopfe = {};
  fk.document = { getElementById: function (fid) {
    if (!knopfe[fid]) {
      knopfe[fid] = { addAlarm: 0, wegAlarm: 0,
        classList: {
          add: function (c) { if (c === "alarm") this._k.addAlarm++; },
          remove: function (c) { if (c === "alarm") this._k.wegAlarm++; },
          toggle: function () {}, contains: function () { return false; }
        },
        removeAttribute: function () { this.title = null; }
      };
      knopfe[fid].classList._k = knopfe[fid];
    }
    return knopfe[fid];
  } };
  vm.createContext(fk);
  vm.runInContext(fgCode, fk);
  prufe("Editor: 💾-Alarm startet aus",
    fk.formularGeaendert === false && !knopfe.btnSpeichern);
  fk.markiereFormularGeaendert();
  prufe("Editor: Eingabe alarmiert beide 💾-Knöpfe mit Hinweistitel",
    fk.formularGeaendert === true &&
    knopfe.btnSpeichern.addAlarm === 1 && knopfe.btnObenSpeichern.addAlarm === 1 &&
    typeof knopfe.btnSpeichern.title === "string" && knopfe.btnSpeichern.title.length > 0);
  fk.markiereFormularGeaendert();
  prufe("Editor: Weitere Eingaben veraendern den Zustand nicht (idempotent)",
    knopfe.btnSpeichern.addAlarm === 1);
  fk.vergissFormularAenderung();
  prufe("Editor: Sichern/Neuaufbau nimmt Alarm und Titel vollstaendig zurueck",
    fk.formularGeaendert === false &&
    knopfe.btnSpeichern.wegAlarm === 1 && knopfe.btnObenSpeichern.wegAlarm === 1);

  /* „＋ Neu“ / „⧉ Duplizieren“ fragen bei ungespeicherten Eingaben zuerst */
  function editorFn(fname) {
    const fa = ed.indexOf("function " + fname);
    return ed.slice(fa, ed.indexOf("\nfunction ", fa));
  }
  const nrBlock = editorFn("neuesRezept");
  const daBlock = editorFn("dupliziereAktuelles");
  prufe("Editor: Neu/Duplizieren fragen zuerst nach ungespeicherten Eingaben",
    nrBlock.indexOf("uebernehmeUngespeicherte()") > -1 &&
    nrBlock.indexOf("uebernehmeUngespeicherte()") < nrBlock.indexOf("leerRezept()") &&
    daBlock.indexOf("uebernehmeUngespeicherte()") < daBlock.indexOf("leseAktuelles()"));
  prufe("Editor: Loeschen bewusst ohne 💾-Vorfrage (Rezept stirbt mit Eingaben)",
    editorFn("loescheAktuelles").indexOf("uebernehmeUngespeicherte") === -1);
  prufe("Editor: Neue Hinweistexte in allen Sprachdateien",
    (() => {
      try {
        const spSrc = fs.readFileSync(require("path").join(__dirname, "sprachen.js"), "utf8");
        return ["Änderungen noch nicht gespeichert!",
          "Es gibt ungespeicherte Änderungen. Zuerst speichern?",
          "<b>💡 Es ist ausreichend die rezepte.js zu exportieren, wenn sämtliches Bearbeiten der Rezepte abgeschlossen ist.</b>",
          "Verwirft alle Änderungen (Browser-Speicher) und lädt den Stand von rezepte.js neu",
          "Alle eigenen Änderungen verwerfen (auch TCM-Zuordnungen) und auf den Inhalt von rezepte.js zurücksetzen?",
          "<b>💡 Reset: Der Button 🗘 verwirft alle Änderungen (Browser-Speicher) und lädt den Stand von rezepte.js neu</b>",
          "⬅️ Rezepte",
          "Zurück zur Rezepte-Sammlung"].every(k => {
          let n = 0, p = 0;
          while ((p = spSrc.indexOf('"' + k + '":', p)) !== -1) { n++; p += 10; }
          return n === 7;
        });
      } catch (e) { return false; }
    })());
  const akCode =
    editorFn("uebernehmeUngespeicherte") +
    editorFn("neuesRezept") +
    editorFn("dupliziereAktuelles");
  function baueAktionCtx(antwort, sichernErfolgreich) {
    const ac = baueContext("?lang=de");
    ac.tr = function (s) { return s; };
    ac.formularGeaendert = false;
    ac._gefragt = 0; ac._antwort = antwort;
    ac.confirm = function () { ac._gefragt++; return ac._antwort; };
    ac._gespeichert = 0;
    ac.speichereAktuelles = function () {
      ac._gespeichert++;
      if (sichernErfolgreich) ac.formularGeaendert = false;
    };
    ac.DB = [];
    ac.aktuellerId = null;
    ac.speichernLocal = function () {};
    ac.markiereUnexportiert = function () {};
    ac.leerRezept = function () { return { id: "neu-1", name: "Neues Rezept" }; };
    ac.kopieren = function (r) { return JSON.parse(JSON.stringify(r)); };
    ac.neuerId = function (n) { return String(n).toLowerCase().replace(/\s+/g, "-"); };
    ac.leseAktuales = undefined;   /* Tippfehler-Schutz: darf nicht existieren */
    ac.leseAktuelles = function () {
      return ac.DB.find(function (x) { return x.id === ac.aktuellerId; }) || null;
    };
    ac.rendereListe = function () {};
    ac.waehle = function (id) { ac.aktuellerId = id; };
    ac.melden = function () {};
    vm.createContext(ac);
    vm.runInContext(akCode, ac);
    return ac;
  }
  const a1 = baueAktionCtx(true, true);
  a1.neuesRezept();
  prufe("Editor: Neu ohne Eingaben fragt nicht und legt sofort an",
    a1._gefragt === 0 && a1.DB.length === 1);
  const a2 = baueAktionCtx(true, true);
  a2.formularGeaendert = true;
  a2.neuesRezept();
  prufe("Editor: Neu mit Eingaben+OK sichert erst und legt dann an",
    a2._gefragt === 1 && a2._gespeichert === 1 && a2.DB.length === 1 &&
    a2.formularGeaendert === false);
  const a3 = baueAktionCtx(false, true);
  a3.formularGeaendert = true;
  a3.neuesRezept();
  prufe("Editor: Neu mit Abbrechen tut nichts",
    a3._gefragt === 1 && a3._gespeichert === 0 && a3.DB.length === 0);
  const a4 = baueAktionCtx(true, true);
  a4.DB = [{ id: "r1", name: "Suppe" }];
  a4.aktuellerId = "r1";
  a4.formularGeaendert = true;
  a4.dupliziereAktuelles();
  prufe("Editor: Duplizieren mit Eingaben+OK sichert Original und kopiert",
    a4._gefragt === 1 && a4._gespeichert === 1 && a4.DB.length === 2 &&
    String(a4.DB[1].name).indexOf("(Kopie)") !== -1);
  const a5 = baueAktionCtx(false, true);
  a5.DB = [{ id: "r1", name: "Suppe" }];
  a5.aktuellerId = "r1";
  a5.formularGeaendert = true;
  a5.dupliziereAktuelles();
  prufe("Editor: Duplizieren mit Abbrechen laesst alles unberuehrt",
    a5.DB.length === 1 && a5._gespeichert === 0);
  const a6 = baueAktionCtx(true, false);   /* Sichern schlaegt fehl (z.B. leerer Name) */
  a6.formularGeaendert = true;
  a6.neuesRezept();
  prufe("Editor: Misslingt das Sichern, wird die Aktion abgebrochen",
    a6._gefragt === 1 && a6.DB.length === 0);
  const lrBlock = ed.slice(ed.indexOf("function leerRezept"),
    ed.indexOf("\nfunction ", ed.indexOf("function leerRezept")));
  function ohneKommentare(s) {
    return s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
  }
  prufe("Editor: Neu/Duplizieren loesen den Export-Alarm erst beim 💾 aus",
    !ohneKommentare(nrBlock).includes("markiereUnexportiert") &&
    !ohneKommentare(daBlock).includes("markiereUnexportiert"));
  prufe("Editor: Frisches Rezept hat kein notiz-Feld (bleibt byte-stabil)",
    !/\bnotiz\s*:/.test(lrBlock));
  const rsBlock = ed.slice(ed.indexOf('getElementById("btnReset").onclick'),
    ed.indexOf('getElementById("btnHilfe").onclick'));
  prufe("Editor: Reset wirft auch eigene TCM-Zuordnungen aus dem Browser-Speicher",
    rsBlock.includes("removeItem(TCM_OVERLAY_KEY)") &&
    rsBlock.includes("removeItem(TCM_NAMEN_KEY)"));
}

console.log("\n== Hilfsfunktionen ==");
c = lade(baueContext("?lang=zh_CN"));
prufe("sprachTag zh_CN -> zh-CN", c.sprachTag() === "zh-CN");
prufe("html lang gesetzt", c.document.documentElement.lang === "zh-CN");
prufe("urlMitSprache haengt lang an",
  c.urlMitSprache("wochenplan.html") === "wochenplan.html?lang=zh_CN" &&
  c.urlMitSprache("x.html?a=1") === "x.html?a=1&lang=zh_CN");
c = lade(baueContext("?lang=en"));
prufe("formatiereDatumKurz en: MM/TT",
  c.formatiereDatumKurz(new Date(2026, 0, 7)) === "01/07");
c = lade(baueContext("?lang=de"));
prufe("formatiereDatumKurz de: TT.MM.",
  c.formatiereDatumKurz(new Date(2026, 0, 7)) === "07.01.");
prufe("formatiereZahlLocale de Komma", c.formatiereZahlLocale(1234.5) === "1.234,5");

console.log("\n== Woerterbuch-Integritaet (statisch, aus Quelltext) ==");
const src = fs.readFileSync(FILE, "utf8");
function keyOf(z) {
  const m = z.match(/^\s*"((?:[^"\\]|\\.)*)"\s*:/);
  return m ? m[1] : null;
}
let block = null; const keys = {};
let drin = false;
for (const z of src.split(/\r?\n/)) {
  if (/^var sprachen = \{/.test(z)) { drin = true; continue; }
  if (!drin) continue;
  if (/^\};/.test(z)) break; /* Ende des sprachen-Objekts – danach kommt EINHEITEN_ANZEIGE mit gleichen Blockmustern */
  const bs = z.match(/^ {2}([A-Za-z_]+): \{/);
  if (bs && ["en", "ru", "es", "fr", "ja", "ko", "zh_CN"].includes(bs[1])) { block = bs[1]; keys[block] = {}; continue; }
  if (/^ {2}\}/.test(z)) { block = null; continue; }
  if (!block) continue;
  const k = keyOf(z);
  if (k != null && z.startsWith('    "')) keys[block][k] = (keys[block][k] || 0) + 1;
}
for (const b of Object.keys(keys)) {
  const dups = Object.entries(keys[b]).filter(([, n]) => n > 1);
  prufe(b.toUpperCase() + ": keine doppelten Schluessel", dups.length === 0,
    dups.map(([k, n]) => '"' + k.slice(0, 60) + '" x' + n).join("; ") || "");
}
// Schluesselmengen aller Sprachen gegen en abgleichen
const mengen = {};
for (const b of Object.keys(keys)) mengen[b] = new Set(Object.keys(keys[b]));
for (const b of ["ru", "es", "fr", "ja", "ko", "zh_CN"]) {
  const fehlen = [...mengen.en].filter(k => !mengen[b].has(k));
  const extra = [...mengen[b]].filter(k => !mengen.en.has(k));
  prufe(b.toUpperCase() + ": Schluesselbestand deckungsgleich mit EN",
    fehlen.length === 0 && extra.length === 0,
    (fehlen.length ? "fehlt: " + fehlen.length + " (z.B. \"" + fehlen[0].slice(0, 50) + "\") " : "") +
    (extra.length ? "nur hier: " + extra.length + " (z.B. \"" + extra[0].slice(0, 50) + "\")" : ""));
}

/* 🗘 Reset-Knopf im Wochenplan: wirft alle eigenen Inhalte aus dem
 * Browser-Speicher (Ansichts-Einstellungen bleiben). */
(function () {
  const wpSrc = fs.readFileSync(require("path").join(__dirname, "..", "wochenplan.html"), "utf8");
  const a = wpSrc.indexOf('id="btnReset"');
  prufe("Wochenplan: Reset-Knopf sitzt rechts neben der Sprachwahl",
    a !== -1 &&
    wpSrc.indexOf('data-i18n-title="Verwirft alle Änderungen (Browser-Speicher) und lädt den Stand von rezepte.js neu"', a) !== -1);
  const rsBlock = wpSrc.slice(wpSrc.indexOf('getElementById("btnReset").onclick'),
    wpSrc.indexOf('getElementById("btnKwZurueck").onclick'));
  prufe("Wochenplan: Reset wirft DB, Pläne, 🎲-Optionen, Einkaufsliste & TCM aus dem Browser-Speicher",
    ["STORAGE_KEY", "WOCHENPLAN_KEY", "ZUFALL_OPT_KEY", "EK_REFS", "EK_EXTRAS",
     '"zutaten_tcm_v1"', '"zutaten_tcm_namen_v1"'].every(k => rsBlock.includes("removeItem(" + k + ")")) &&
    rsBlock.includes("var resetFrage = wpUnexportiert") &&
    rsBlock.includes("ansicht === \"monat\"") &&
    rsBlock.includes("Es gibt Monatsplan-Änderungen") &&
    rsBlock.includes("Wochenplan-Änderungen, die noch nicht als Datei gesichert sind") &&
    rsBlock.includes('tr("Alle eigenen Änderungen verwerfen') &&
    rsBlock.includes("confirm(resetFrage)") &&
    rsBlock.includes("location.reload()"));
  prufe("Wochenplan: Reset laedt ohne zweite beforeunload-Frage neu",
    rsBlock.includes("erlaubeNavigation()") &&
    rsBlock.indexOf("erlaubeNavigation()") < rsBlock.indexOf("location.reload()"));
  prufe("Wochenplan: Ansicht (Woche/Monat) bleibt ueber Neuladen und Reset erhalten",
    wpSrc.includes('var ANSICHT_KEY = "wp_ansicht_v1"') &&
    /ansicht = ziel;\s*\n\s*try \{ localStorage\.setItem\(ANSICHT_KEY, ziel\);/.test(wpSrc) &&
    /localStorage\.getItem\(ANSICHT_KEY\)/.test(wpSrc) &&
    wpSrc.indexOf("getItem(ANSICHT_KEY)") < wpSrc.lastIndexOf("rendereAnsicht();") &&
    !rsBlock.includes("removeItem(ANSICHT_KEY)"));
  prufe("Wochenplan: Angezeigte Woche/Monat bleibt erhalten (absolut gemerkt, Reset-fest)", (function () {
    const a = wpSrc.indexOf("function rendereAnsicht");
    if (a < 0) return false;
    const block = wpSrc.slice(a, wpSrc.indexOf("\nfunction ", a + 10));
    return wpSrc.includes('var POSITION_KEY = "wp_position_v1"') &&
      block.includes("merkePosition();") &&
      /12 \* d\.getMonth\(\)|\* 12 \+ d\.getMonth/.test(wpSrc) &&
      wpSrc.includes("Math.round((zMontag - heuteM) / (7 * 86400000))") &&
      wpSrc.includes("stellePositionWiederHer();\nrendereAnsicht();") &&
      !rsBlock.includes("removeItem(POSITION_KEY)");
  })());
})();

/* Monatsansicht: die Ecke über der KW-Spalte bleibt Zellenfüller, aber unsichtbar. */
(function () {
  const wpSrc = fs.readFileSync(require("path").join(__dirname, "..", "wochenplan.html"), "utf8");
  const css = wpSrc.slice(wpSrc.indexOf(".monat-kopf {"), wpSrc.indexOf("</style>"));
  prufe("Wochenplan: Leere Monatsecke unsichtbar (Grid-Zelle bleibt besetzt)",
    /\.monat-kopf-leer\s*{\s*visibility:\s*hidden;?\s*}/.test(css) &&
    /leerKopf\.className = "monat-kopf monat-kopf-leer"/.test(wpSrc));
})();

/* Schmale Fenster (<880px): Header-Knöpfe nur als Icons, Beschriftung im Tooltip. */
(function () {
  const wpSrc = fs.readFileSync(require("path").join(__dirname, "..", "wochenplan.html"), "utf8");
  const mq = wpSrc.indexOf("@media (max-width: 879px)");
  const btnText = mq === -1 ? -1 : wpSrc.indexOf(".actions .btn-text", mq);
  prufe("Wochenplan: Unter 880px nur Header-Icons (Text ausblendbar, Tooltip bleibt)",
    /function formeHeaderKnoepfe\(/.test(wpSrc) &&
    /formeHeaderKnoepfe\(\);/.test(wpSrc) &&
    /\.btn-icon\s*{\s*margin-right:\s*5px;\s*}/.test(wpSrc) &&
    mq !== -1 && btnText !== -1 &&
    wpSrc.slice(btnText, wpSrc.indexOf("}", btnText)).includes("display: none"));
  prufe("Wochenplan: Zurueck-Link sitzt ganz links und heisst '⬅️ Rezepte'",
    wpSrc.indexOf('id="linkZurueck"') !== -1 &&
    wpSrc.indexOf('id="linkZurueck"') < wpSrc.indexOf('id="btnWpSpeichern"') &&
    /id="linkZurueck"[^>]*data-i18n-title="Zurück zur Rezepte-Sammlung"[^>]*data-i18n="⬅️ Rezepte"/.test(wpSrc));
})();

/* Klick-Zoom für Rezeptbilder: +50%, nach vorne, Klick daneben macht zu. */
(function () {
  const rpSrc = fs.readFileSync(require("path").join(__dirname, "..", "rezepte.html"), "utf8");
  prufe("Rezepte: Bild-Klick zoomt 1.5x nach vorne (Klick daneben schließt)",
    /\.rezept-bild\.gross\s*{[^}]*transform:\s*scale\(1\.\d+\);[^}]*z-index:\s*\d+;/.test(rpSrc) &&
    /querySelector\("\.rezept-bilder"\)/.test(rpSrc) &&
    /classList\.add\("gross"\)/.test(rpSrc) &&
    /closest\("\.rezept-bilder"\)\s*\) return;/.test(rpSrc));
})();

/* Copyright-Header: jede Quelldatei muss ihn tragen (ausgenommen generierte
 * Daten im JSON-Format, da JSON keine Kommentare erlaubt). */
prufe("Projekt: Alle Quelldateien tragen den Copyright-Header",
  ["index.html", "rezepte.html", "rezepte_bearbeiten.html", "wochenplan.html",
   "assets/sprachen.js", "assets/test-sprachen.js", "assets/rezepte.js",
   "assets/zutaten-tcm.js", "assets/zutaten-naehrwerte.js",
   ...fs.readdirSync(require("path").join(__dirname, "..", "database_demos"))
     .filter(f => f.endsWith(".js"))
     .map(f => require("path").join("database_demos", f))
  ].every(f => {
    const s = fs.readFileSync(require("path").join(__dirname, "..", f), "utf8");
    return s.includes("Julia's Rezepte-Sammlung  Copyright (C) 2026 heino17") &&
           s.includes("https://github.com/heino17/Rezepte-Sammlung");
  }));

console.log("\nErgebnis: " + ok + " PASS, " + fail + " FAIL");
process.exit(fail ? 1 : 0);
