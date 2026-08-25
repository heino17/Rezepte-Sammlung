# 🇩🇪 Julia's Rezept-Sammlung

Eine browserbasierte Rezeptverwaltung mit Einkaufsliste, Bildergalerie, Wochenplan und Export-Funktionen – läuft komplett offline, ohne Server, ohne Installation. Einfach `rezepte.html` im Browser öffnen und loslegen.  

Entstanden für den praktischen Einsatz in der Küche: Rezepte ansehen und kochen, Einkaufsliste führen, Rezepte auf die Woche verteilen, eigene Notizen ergänzen.  

**8 Sprachen: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Schalter im Kopfbereich**  
Die Standard-Sprache kann über `STANDARD_SPRACHE` in Datei [assets/sprachen.js](assets/sprachen.js) festgelegt werden (Vorrang: `?lang=xx` und gespeicherte Wahl)  

## Nutzung

1. `rezepte.html`, `rezepte_bearbeiten.html`, `wochenplan.html` und den Ordner `assets/` (mit `rezepte.js`, `sprachen.js` und den Hintergrundbildern) im selben Ordner speichern.  
2. `rezepte.html` per Doppelklick im Browser öffnen.  
3. Fertig – alles läuft lokal im Browser, es wird nichts an einen Server übertragen.  

## Funktionen

**Rezept-Ansicht (`rezepte.html`)**  
- **17 Rezepte** in 5 Kategorien: Sandwich & Wraps, Dessert, Kuchen & Gebäck, Italienisch, Indisch  
- **Suche** nach Name und Zutaten, **Kategorien-Filter** über ein Dropdown  
- **Sticky Sidebar** – die Rezeptliste bleibt beim Scrollen fixiert und ist unabhängig scrollbar  
- **Dark Mode** – per Button umschaltbar, wird gespeichert  
- **Responsive** – passt sich an Mobilgeräte an (Stapel-Layout unter 800px)  
- **Nährwerte** – Kalorien, Kohlenhydrate, Eiweiß, Ballaststoffe, Fette (pro Portion)  
- **Bilder-Galerie** – Vorschaubilder (300×150px) unter den Nährwerten; Klick-Zoom zeigt das ganze Bild in Original-Seitenverhältnis (Extreme wie Hochkant/Panorama werden gekappt bzw. ganz gehalten)  
- **Portionen live umrechnen** – der Stepper (−/+) skaliert alle Zutatenmengen live mit; erkennt Zahlen, Brüche (`1/2 TL`) und Bereiche (`1-2 EL`); unklare Angaben (`etwas`, `? ml`) bleiben unangetastet; „↺ Original“ setzt zurück  
- **Zutaten-Tabelle** mit Häkchen zum Hinzufügen zur Einkaufsliste (übernimmt die aktuell skalierte Menge)  
- **Zubereitungsschritte** – nummeriert  
- **📝 Eigene Notizen** – freier Text pro Rezept, speichert automatisch beim Tippen; die Rezept-Notiz aus den Daten (Editor, z. B. Quelle bei TheMealDB-Importen) wird angezeigt, solange keine eigene Notiz besteht – diese hat Vorrang; der Editor übernimmt vorhandene eigene Notizen beim Bearbeiten als Formular-Startwert (eigene zuerst, Rezept-Notiz darunter) und räumt den lokalen Eintrag beim Sichern weg; ein Hinweis unter dem Feld erklärt die Reichweite (nur dieser Browser – keine Rezeptdaten)  
- **🥘 Küchenmodus** – Großansicht zum Kochen: einstellbare Schriftgröße (A−/A+), Screen-Wake-Lock-API hält den Bildschirm wach  
- **📧 Als HTML exportieren** – Export des Rezepts als eigenständige, E-Mail-taugliche HTML-Datei (inline CSS, Nährwerte, Bilder, Zutaten, Zubereitung, Notiz)  
- **🌿 5 Elemente (TCM)** – aufklappbares Panel „🌿 5 Elemente“ unter den Nährwerten mit Zuordnung der Zutaten (Element, Geschmack, Thermik); standardmäßig eingeklappt, einmal geöffnet bleibt es dauerhaft offen; Filter über das Dropdown „Nach 5 Elementen filtern (TCM)“, Chips sind klickbar (Details im Abschnitt weiter unten)  
- **Vorheriges/Nächstes** – Navigation zwischen Rezepten (←/→)  
**Einkaufsliste**  
- **Zwei Ansichten** – „👥 Nach Rezept“ (Abschnitte pro Rezept) oder „🧺 Nach Zutat“ (Zutaten mit Summen)  
- **Summenbildung** – gleiche Einheiten automatisch summiert (`275 g + 3 EL + 1/2 TL`), Bereiche als Intervall (`1 EL` + `1-2 EL` → `2-3 EL`), Einheiten normalisiert (`St.`/`Stk.`/`Stück` → `St.`)  
- **Export** – 📋 Text kopieren oder 📧 als eigenständige HTML-Datei (mit Abhak-Checkboxen, druckfreundlich)  
- Manuelle Einträge, **Erledigt-Status** (abgehakt = grau) und **Leeren**  
**Tastaturkürzel**  
| Taste | Aktion |  
|---|---|  
| `←` `→` | Vorheriges/Nächstes Rezept |  
| `Esc` | Einkaufsliste bzw. Küchenmodus schließen |  

**Rezept-Editor (`rezepte_bearbeiten.html`)**  
- **Rezeptliste** mit Kategorie-Anzeige, Suche & Filter wie in der Ansicht  
- **Drag & Drop** – Rezepte per Ziehen umsortieren (▲/▼-Buttons als Fallback)  
- **Schnelle Kategorie-Änderung** – 🏷 pro Rezept öffnet ein Popover mit allen Kategorien (inkl. „Ohne Kategorie“); ein Klick verschiebt das Rezept, gesichert wird wie üblich beim Export  
- **Formular** – Name, Kategorie, Portionen; Zutaten (Menge, Einheit, Name, per Drag & Drop sortierbar); Zubereitungsschritte; Nährwerte  
  - Einheiten sind im Dropdown vorausgewählt, lassen sich aber frei eingeben (Sonderfälle wie `ml + 6 EL`)  
- **Bilder** – mehrere Bilder pro Rezept, als **Data-URL** eingebettet (max. 300px, JPEG 85%, PNG mit Transparenz), funktioniert offline und beim Export  
- **💾 Speichern & Laden** – Menü in zwei Gruppen, jede Aktion mit Wirkungs-Erklärzeile: **Speichern** (aus der App heraus): „Rezepte speichern“ (App-Datei `rezepte.js` im Ordner `assets/` erneuern), „Rezepte als Kopie sichern“ (`.json`-Datensicherung zum Austauschen), „5 Elemente speichern“ (App-Datei `zutaten-tcm.js` erneuern); **Laden** (in die App hinein): „Rezepte dazuladen“ (fügt hinzu, fragt bei identischen Rezepten: ersetzen/umbenennen/überspringen), „Andere Sammlung öffnen“ (**ersetzt ALLE aktuellen Rezepte**, Export-Name folgt künftig der geladenen Datei); dazu „Auf Original zurücksetzen“  
- **🌿 TCM-Zuordnung pflegen** – jede Zutatenzeile über ⚙️ öffnen: Element/Geschmack/Thermik ergänzen oder korrigieren; eigene Änderungen erst mit „💾 5 Elemente speichern“ dauerhaft übernehmen (Details im Abschnitt weiter unten)  
- **Tastaturkürzel** – `Strg+S` speichert das aktuelle Rezept  
- **🌐 Von TheMealDB importieren** – Rezepte online bei themealdb.com suchen (nach Name), Treffer als Vorschau ansehen und ins eigene Format umwandelt übernehmen: Mengen werden geparst und Einheiten übersetzt bzw. umgerechnet (`tbsp`→EL, `tsp`→TL, `oz`/`lb`/`fl oz`→g/ml, `cup`→Tasse, `clove`→Zehe …), Qualifizierer wie „chopped“ wandern als Klammer-Zusatz in den Zutatennamen, die Freitext-Anleitung wird in nummerierte Schritte zerlegt (Aufzählungszeichen/„STEP n“ fallen weg), das Bild wird als Data-URL eingebettet (Rückfallebene: Online-Link), die Quelle landet als Notiz im Rezept; Kategorien werden ins Deutsche übersetzt (Beef→Rind …). Inhalte sind Englisch, Nährwerte liefert TheMealDB nicht, Portionen werden mit 4 angenommen – alles danach wie gewohnt bearbeitbar. Nur auf Knopfdruck online (API & Bildserver erlauben CORS, funktioniert auch von `file://` aus)  
- **📂 Rezepte-Datei ins Fenster ziehen** – eine `.json`- oder `.js`-Datenbank (z. B. `database_demos/rezepte_demo_zh_CN.js`) einfach ins Browserfenster ziehen: ein Overlay zeigt „Loslassen zum Importieren“, nach dem Drop wählt eine kleine Modal-Box, was mit den gefundenen Rezepten geschieht – „📂 Als Datenbank öffnen (ersetzt die aktuelle)“ (wie der 📂-Menüpunkt „Andere Datenbank öffnen“ inkl. Quellen-Anzeige), „➕ Der aktuellen Datenbank hinzufügen“ (Merge mit Kollisionsdialog) oder Abbrechen. Andere Dateitypen werden freundlich abgewiesen  
- **📚 Aus dem Wikibooks-Kochbuch importieren** – zweite Online-Quelle neben TheMealDB: deutsche, frei lizenzierte Rezepte (CC BY-SA) aus dem Kochbuch auf de.wikibooks.org; im Import-Modal per Reiter umschaltbar (eigenständiger Menü-Eintrag vorhanden). Suche über die MediaWiki-API (nur `Kochbuch/`-Seiten, 📖-Platzhalter statt Vorschaubild), Konvertierung des Wikitexts: Vorlage `_RezeptBox` liefert Kategorie (schon deutsch), Portionen und – falls eingetragen – Nährwerte (kcal/Kohlenhydrate/Eiweiß/Fett), `== Zutaten ==`-Zeilen werden mit deutschem Mengen-Parser zerlegt (`ca.`/`etwa`-Präfixe weg, Wikilinks wie `[[Kochbuch/ Milch|Milch]]` aufgelöst, „2–3 St.“ → Menge 2-3 + Stück-Mehrzahl, mengenlose Zeilen wie „etwas Salz“ bleiben beim Namen), `== Zubereitung ==` wird in Schritte zerlegt inkl. 💡-Tipps-Abschnitt, Fußnoten („Erfasst von:“, Wikipedia-Kredite) fliegen raus; Bild optional: Vorlagenfeld `Bild` oder erster Foto-Link (jpg/png/webp, keine svg-Deko), Existenzprüfung per imageinfo (330px-Thumbnail), Einbettung als Data-URL – bei ~84 % der Rezepte ohne Foto greift der gewohnte Platzhalter. Die CC-BY-SA-Pflichtangabe landet automatisch als Quellen-Notiz im Rezept; die Hinweise oben im Modal verlinken direkt zur jeweiligen Sammlung (`themealdb.com` bzw. `de.wikibooks.org/wiki/Kochbuch`, Klick/Rechtsklick → neuer Tab) und „↩ Zurück zur Suche“ füllt den letzten Suchbegriff wieder ein und startet die Suche automatisch erneut (je Quelle gemerkt, auch über Modal-Neustart). Nur auf Knopfdruck online (API & upload.wikimedia.org erlauben CORS via `origin=*`, funktioniert auch von `file://` aus)  

**Wochenplan (`wochenplan.html`)**  
- **Echte Kalenderwochen** – Navigation ←/→, „Heute“-Sprung, Anzeige nach ISO-8601 (`KW 33 · 2026 · 10.08. – 16.08.`), heutiger Tag hervorgehoben  
- **7 Tages-Spalten** (Mo–So), beliebig viele Rezepte pro Tag – auch dasselbe Rezept mehrfach  
- **Drag & Drop** – Rezepte aus der durchsuchbaren Liste einplanen, zwischen Tagen verschieben, per ✕ entfernen  
- **🛒 Einkaufsliste für diese Woche erzeugen** – übernimmt alle Zutaten (mehrfach eingeplante Rezepte werden mehrfach eingerechnet), ersetzt die bestehende Liste  
- **🥗 Nährwerte-Summe pro Tag/Woche/Monat** – unter jedem Tag steht die kcal-Summe, darunter eine Gesamtübersicht mit Kalorien, Kohlenhydraten, Eiweiß, Ballaststoffen und Fetten; per Kippschalter „Pro Portion“ (rechts im Box-Titel) umschaltbar zwischen **„Gesamt der geplanten Rezepte“** (Voreinstellung – jede Planung zählt als ganzes Rezept: Wert × Portionszahl, wie in der Einkaufsliste zählt eine Mehrfach-Planung mehrfach) und **„Pro Portion – je 1 Portion pro geplantem Rezept“** (jede Planung zählt als genau 1 Portion); die Einstellung bleibt gespeichert und wirkt auch auf die Tages-Zeilen sowie den 📧 Text-/HTML-Export (dort ist der Modus genannt, der Schalter selbst wird nicht mit exportiert); Rezepte ohne Nährwerte werden mit ⚠ markiert  
- **🌿 5 Elemente-Balance pro Woche/Monat** – aufklappbare Box „🌿 5 Elemente dieser Woche“ bzw. „… dieses Monats“ unter der Nährwert-Übersicht: fasst alle eingeplanten Rezepte zusammen (Elemente/Geschmack/Thermik als farbige Chips mit ×Anzahl, sortiert nach Häufigkeit), dazu Trefferquote über alle Zutaten und ⚠-Hinweis bei Rezepten ohne Zuordnung; standardmäßig eingeklappt, einmal geöffnet bleibt es dauerhaft offen (gleiche Einstellung wie das Panel in der Rezept-Ansicht)  
- **💾 Wochenplan speichern / 📂 Wochenplan öffnen** – sichert je nach Ansicht die sichtbare Woche (Wochenansicht) bzw. den gesamten Monat (Monatsansicht) als `.json`, Laden mit Sicherheitsabfrage  
- **📧 Wochenplan als HTML** – exportiert je nach Ansicht den Wochen- oder Monatsplan als eigenständige, E-Mail-taugliche HTML-Datei im **A4-Querformat** (Anzeige als Querformat-Blatt, Druckvorschau über `@page{size:A4 landscape}`); enthält die Nährwerte und die 🌿 5-Elemente-Balance; Dateiname mit Zeitraum und Erstellungszeit, z. B. `Wochenplan_KW31_27.07.2026-02.08.2026_erstellt-18.08.2026_23-07-09.html`  
- **🎲 Zufällig befüllen** (im ⚙️-Werkzeugmenü) – füllt die sichtbare Woche bzw. den sichtbaren Monat automatisch mit Rezepten aus der aktuell gefilterten Quellliste; drei Modi: „Nur leere Tage füllen“, „Zusätzlich“ (hängt weitere Rezepte an, z. B. Indisch-Daten zuerst, Desserts danach) und „Alles ersetzen“ (mit Nachfrage); Optionen „1/1–2 pro Tag“ und „Ohne Wiederholungen / Wiederholen erlaubt“, Optionen werden gespeichert; eine **↩ Rückgängig**-Sicherung stellt den Zustand vor der letzten Befüllung wieder her  
- **Dark Mode** – folgt dem in der Rezept-Ansicht gewählten Theme  

**Sprachen / Mehrsprachigkeit**  
- **8 Sprachen** – Deutsch (Basis), Englisch, Russisch, Spanisch, Französisch, Japanisch, Koreanisch, Chinesisch (vereinfacht)  
- **Auswahl** – über das 🌐-Dropdown im Kopfbereich aller drei Seiten, wird gespeichert und als `?lang=xx` im URL mitgegeben (`rezepte.html?lang=en`)  
- **Deutsch ist die Quellsprache** – die Wörterbuch-Schlüssel in `sprachen.js` sind die deutschen Texte selbst; `tr("Speichern")` liefert den passenden Eintrag, sonst Deutsch  
- **„Julia's“ bleibt als Eigenname** in allen Sprachen erhalten (z. B. „Julia's 週間プラン“, „Julia's 주간 플랜“)  
- **Übersetzungs-Helfer** – `tr()` für dynamische Texte, `trPlural()` für die Pluralwahl, `data-i18n`-Attribute für statische Texte, `sprachTag()`/`formatiereZahlLocale()` für regionale Formatierung  
- **Gespeicherte Daten bleiben deutsch** – nur die Anzeige wird übersetzt (Einheiten via `EINHEITEN_ANZEIGE`)  
- **Kategorien sind freie Texte** – keine vorgegebenen Namen, jede eigene Bezeichnung wird unverändert gespeichert und angezeigt (Dropdowns zeigen nur die tatsächlich verwendeten Kategorien)  
- **Stand** – alle 8 Sprachen vollständig (je über 320 Wörterbuch-Einträge); Russisch nutzt zusätzlich `PLURAL_FEW` für die 3-Form-Bildung  

**Demo-Datenbanken (`database_demos/`)**  
- **8 Sprachversionen** einer Beispiel-Datenbank mit je **17 Rezepten** (10 Hauptgerichte + 7 Desserts, kombinierbar zu Menüs): 🇩🇪 DE, 🇺🇸 EN, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN  
- **Inhalt** – `id`, `name` und `einheit` bleiben deutsch; `kategorie`, Zutaten-Namen und Zubereitungsschritte sind übersetzt; `menge`, `portionen`, `bilder` und `nahrwerte` bleiben in allen Sprachen identisch  
- **Einspielen** – im Editor (`rezepte_bearbeiten.html`) über „📂 Andere Sammlung öffnen“ eine der Dateien (`rezepte_demo_*.js`) auswählen; sie ersetzt die aktuelle Arbeits-Datenbank  
- **Als Hauptdatenbank speichern** - die geladene `rezepte_demo_*.js` als `rezepte.js` im Ordner `assets/` speichern, Browser neu laden (F5), die vorherige Demo ist damit die Hauptdatenbank, kannst loslegen :)  

**🌿 TCM / 5 Elemente (Zutaten-Zuordnung)**  
- **Prinzip** – die Zuordnung ist zutatenweit (pro Zutat, nicht pro Rezept); eine Änderung gilt also in allen Rezepten mit dieser Zutat  
- **Anzeige** – in der Rezept-Ansicht zeigt jedes Rezept im aufklappbaren Panel „🌿 5 Elemente“ unter den Nährwerten seine Zuordnung als farbige Chips (Element, Geschmack, Thermik); das Dropdown „Nach 5 Elementen filtern (TCM)“ filtert die Liste danach, die Chips sind klickbar  
- **Pflege** – im Editor (`rezepte_bearbeiten.html`) jede Zutatenzeile über ⚙️ öffnen: Element/Geschmack/Thermik ergänzen oder korrigieren, Status zeigt „Aus der Datenbank“ / „Eigene Änderung“ (grün) / „Keine TCM-Daten“  
- **Speicherung** – eigene Änderungen liegen zunächst nur lokal (localStorage `zutaten_tcm_v1`); dauerhaft werden sie erst mit „💾 5 Elemente speichern“ in die App-Datendatei `assets/zutaten-tcm.js` übernommen (nie in die Rezepte selbst)  
- **Daten** – alle drei Seiten lesen nur `assets/zutaten-tcm.js` (per `<script>`, Datei im Ordner `assets/` überschreiben); `zutaten-tcm.json` ist die „Mutter“/Vorlage zum Importieren, da liegen die Schlüssel = Zutatname, Werte: `element` (holz/feuer/erde/metall/wasser), `geschmack` (Array: sauer/bitter/suess/scharf/salzig), `thermik` (heiss/warm/neutral/kuehl/kalt) und optional `namen` (Liste weiterer Schreibweisen, z. B. andere Sprachen)  
- **Mehrsprachig (Aliase)** – alle drei Seiten suchen auch über die `namen`-Varianten: „소금“, „salt“, „соль“ … finden denselben Eintrag wie „Salz“; die 803 Aliase der Demo-Datenbanken (7 Sprachen) sind bereits in Mutter und App-Datei eingetragen. Im Editor gilt: trifft eine eigene Änderung einen Eintrag über eine seiner Varianten, landen die Werte im kanonischen Eintrag und die neue Schreibweise wird automatisch als Variante aufgenommen; unbekannte Zutaten legen einen neuen Eintrag an  
- **Mutter laden** – im Editor über „📂 Andere 5-Elemente-Liste laden“ eine andere `zutaten-tcm.json` als Basis laden (ersetzt die aktuellen Basisdaten für diese Sitzung); der Export „💾 5 Elemente speichern“ bietet danach automatisch den Namen der geladenen Mutter an (aus `weitere-zutaten-tcm.json` wird so `weitere-zutaten-tcm.js`)  
- **Wochenplan-Balance** – der Wochenplan (`wochenplan.html`) fasst alle eingeplanten Rezepte in der aufklappbaren Box „🌿 5 Elemente dieser Woche/dieses Monats“ zusammen und weist sie auch im 📧 HTML-Export aus  
- **Stand** – 236 Zutaten klassifiziert; bewusst ohne Zuordnung („Keine TCM-Daten“): Asafötida, Pickles und Chutneys, San apart  

## Technik

Reines HTML, CSS und JavaScript (Vanilla JS, keine Frameworks, kein Build-Schritt, keine externen Abhängigkeiten – kein CDN, keine Fonts). Die Seiten funktionieren sogar von `file://` aus, also ohne jeglichen Webserver, in allen modernen Browsern (Chrome, Firefox, Safari, Edge). Durch `window.name` kann der Editor `rezepte.html` in einem neuen Tab öffnen, ohne dass der Browser die Referenz verliert. Die App bleibt damit offline-fähig; die einzigen optionalen Online-Funktionen sind der 🌐 TheMealDB-Import und der 📚 Wikibooks-Kochbuch-Import im Editor (nur auf Knopfdruck, API und Bildserver erlauben CORS via `access-control-allow-origin: *`). Hinweis zu Firefox: Öffnet man die Seiten direkt als lokale Dateien (`file://`), hält Firefox seit Version 68 jede Datei für eine eigene Origin mit getrenntem localStorage – eigene Notizen aus `rezepte.html` sieht der Editor dann nicht (Chrome teilt den Speicher über alle lokalen Dateien). Abhilfe: die App über einen kleinen lokalen Webserver nutzen (z. B. `python3 -m http.server` im Programmordner, danach `http://localhost:8000/rezepte.html`) oder in `about:config` die Einstellung `privacy.file_unique_origin` auf `false` stellen.  

### Dateien
- `rezepte.html` – Rezept-Ansicht (inkl. CSS & JS)  
- `rezepte_bearbeiten.html` – Rezept-Editor  
- `wochenplan.html` – Wochenplan  
- `assets/` – `rezepte.js` (Datenbank, 17 Demo-Rezepte als JavaScript-Konstante, inkl. Bilder als Data-URL, deckungsgleich mit `database_demos/rezepte_demo_de.js`), `sprachen.js` (Sprachdatei, 8 Sprachen, Übersetzungs-Helfer), `zutaten-tcm.js` (TCM-Zuordnungen, generiert aus einer importierten JSON-Mutter), `test-sprachen.js` (Testsuite, siehe Abschnitt „Tests"), `Nährwerte_Herkunft.md` (Rechenmethode & Annahmen hinter den Nährwert-Schätzwerten), `zutaten-naehrwerte.json` (Zutaten-Nährtabelle pro 100 g als Berechnungsgrundlage; als `zutaten-naehrwerte.js` per `<script>` geladen und im Modal unter den Nährwert-Karten angezeigt) und Hintergrundbilder (hell & dunkel)  
- `database_demos/` – Beispiel-Datenbanken (je 17 Rezepte) in 8 Sprachen (DE, EN, RU, ES, FR, JP, KR, zh-CN)

## Tests

`test-sprachen.js` prüft die zentrale Logik ohne Browser (223 Prüfungen): Sprach-Priorität & `STANDARD_SPRACHE="auto"`, Übersetzungs-Fallback & Plural-Regeln, Einheiten-Roundtrip in allen 7 Fremdsprachen, Wörterbuch-Integrität (doppelte/fehlende Keys), die Wochenplan-Nährwert-Summen beider Umschalter-Modi, das Modal „Zutaten-Nährwerte“ (inkl. mehrsprachiger Zutatennamen) und die Integrität der TCM-Daten sowie den Schritt-Wecker mit Küchen-Timern (Marker-Erkennung, Schutz vor Doppel-Start, Alarm-Blinken, Farbtakt-Kappen) und die gemerkte Küchen-Schriftgröße sowie das Editor-Formular (bloßes Ansehen verändert die Datenbank nicht, leere Notizen hinterlassen kein Feld, Umsortieren per Tasten oder Drag&Drop setzt den Export-Alarm, ungespeicherte Eingaben lassen die 💾-Knöpfe alarmieren; „＋ Neu“ und „⧉ Duplizieren“ fragen vorher, ob gesichert werden soll, lösen den Export-Alarm aber erst beim Sichern aus (Löschen alarmiert sofort); Zutat-Aktionen mit veraltetem Bezug löschen nichts Falsches, offene ⚙️-Aktionen bleiben offen und wandern beim ▲▼ mit ihrer Reihe mit; der 🗘-Reset warnt scharf, solange unexportierte Änderungen vorliegen (im Wochenplan je Ansicht Wochen- oder Monatsplan) und lädt anschließend ohne erneute Rückfrage neu; die gewählte Ansicht (Woche/Monat) und die angezeigte Woche bzw. der angezeigte Monat werden absolut gemerkt und überstehen Neuladen und Reset; der Drag & Drop-Import nimmt .json/.js-Rezeptdatenbanken direkt im Browserfenster entgegen (Overlay-Hinweis, Wahl-Modal: als Datenbank öffnen/ersetzen oder hinzufügen/Merge, Abbrechen ändert nichts, fremde Typen werden abgewiesen); der Wikibooks-Import ist mit Menü-Eintrag, Quellen-Umschalter, Übersetzungen und dem kompletten Wikitext-Konverter (Mengen-Parser, WikiLinks, Vorlagenwerte, Nährwerte-Filter, Erfasst-von-Schnitt, 💡-Tipps, CC-BY-SA-Notiz) abgedeckt). Ausführen mit:  

```
node assets/test-sprachen.js
```

## Lizenz

Dieses Projekt steht unter der [GNU General Public License v3.0](LICENSE). Der Quellcode darf frei verwendet, verändert und weitergegeben werden – Weiterentwicklungen müssen ebenfalls unter der GPLv3 offen bleiben.  

Copyright (C) 2026 heino17 https://github.com/heino17/Rezepte-Sammlung  

---

# 🇺🇸 Julia's Recipe Collection

A browser-based recipe manager with shopping list, photo gallery, weekly plan and export functions – runs completely offline, without a server or installation. Just open `rezepte.html` in your browser and start.  

Made for everyday use in the kitchen: view and cook recipes, keep a shopping list, plan recipes for the week, add your own notes.  

**8 languages: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Switch in the header**  
The default language can be set via `STANDARD_SPRACHE` in the file [assets/sprachen.js](assets/sprachen.js) (priority: `?lang=xx` and the saved selection)  

## **Usage**

1. Save `rezepte.html`, `rezepte_bearbeiten.html`, `wochenplan.html` and the `assets/` folder (with `rezepte.js`, `sprachen.js` and the background images) all in the same folder.  
2. Open `rezepte.html` by double-clicking it in your browser.  
3. Done – everything runs locally in your browser, nothing is transmitted to a server.  

## **Features**

**Recipe View (`rezepte.html`)**  
- **17 recipes** in 5 categories: Sandwiches & Wraps, Dessert, Cakes & Pastries, Italian, Indian  
- **Search** by name and ingredients, **category filter** via a dropdown  
- **Sticky sidebar** – the recipe list stays fixed while scrolling and scrolls independently  
- **Dark mode** – toggleable via button, remembered  
- **Responsive** – adapts to mobile devices (stacked layout below 800px)  
- **Nutritional values** – calories, carbohydrates, protein, fiber, fat (per serving)  
- **Photo gallery** – thumbnails (300×150px) below the nutritional values; click-zoom shows the whole image at its original aspect ratio (extremes like portrait/panorama are capped or kept whole)  
- **Live portion scaling** – the stepper (−/+) scales all ingredient quantities live; recognizes numbers, fractions (`1/2 tsp`) and ranges (`1-2 tbsp`); unclear amounts (`some`, `? ml`) stay untouched; "↺ Original" resets  
- **Ingredients table** with checkboxes to add to the shopping list (takes over the currently scaled quantity)  
- **Numbered preparation steps**  
- **📝 Custom notes** – free text per recipe, saves automatically while typing; the recipe's own note from the data (editor, e.g. the source of TheMealDB imports) is shown until a personal note exists – the personal one takes precedence; when editing, the editor adopts an existing personal note as the form's starting value (personal first, recipe note below) and removes the local entry on save; a hint below the field explains the scope (this browser only – not recipe data)  
- **🥘 Kitchen mode** – large view for cooking: adjustable font size (A−/A+), Screen Wake Lock API keeps the screen awake  
- **📧 Export as HTML** – exports the recipe as a standalone, email-friendly HTML file (inline CSS, nutritional values, images, ingredients, preparation, notes)  
- **🌿 5 Elements (TCM)** – collapsible panel "🌿 5 Elements" below the nutritional values with the ingredients' assignment (element, flavor, thermal nature); collapsed by default, once opened it stays open permanently; filter via the dropdown "Filter by 5 elements (TCM)", chips are clickable (details in the section below)  
- **Previous/Next** – navigation between recipes (←/→)  
**Shopping list**  
- **Two views** – "👥 By recipe" (sections per recipe) or "🧺 By ingredient" (ingredients with totals)  
- **Summing** – same units are summed automatically (`275 g + 3 tbsp + 1/2 tsp`), ranges as intervals (`1 tbsp` + `1-2 tbsp` → `2-3 tbsp`), units normalized (`pcs.`/`pieces` → `pcs.`)  
- **Export** – 📋 copy text or 📧 as a standalone HTML file (with check-off checkboxes, print-friendly)  
- Manual entries, **done status** (checked = gray) and **clear**  
**Keyboard shortcuts**  
| Key | Action |  
|---|---|  
| `←` `→` | Previous/next recipe |  
| `Esc` | Close shopping list or kitchen mode |  

**Recipe Editor (`rezepte_bearbeiten.html`)**  
- **Recipe list** with category display, search & filter like in the view  
- **Drag & drop** – reorder recipes by dragging (▲/▼ buttons as fallback)  
- **Quick category change** – 🏷 per recipe opens a popover with all categories (incl. "No category"); one click moves the recipe, saved as usual on export  
- **Form** – name, category, servings; ingredients (quantity, unit, name, sortable via drag & drop); preparation steps; nutritional values  
  - Units are preselected in the dropdown but can be entered freely (special cases like `ml + 6 tbsp`)  
- **Images** – multiple images per recipe, embedded as **data URLs** (max 300px, JPEG 85%, PNG with transparency), works offline and for export  
- **💾 Save & Load** – menu in two groups, each action with an effect sub-line: **Save** (out of the app): "Save recipes" (renews the app file `rezepte.js` in the `assets/` folder), "Back up recipes as a copy" (`.json` backup for exchanging), "Save Five Elements" (renews `zutaten-tcm.js`); **Load** (into the app): "Add recipes" (adds them, asks when recipes are identical: replace/rename/skip), "Open another collection" (**replaces ALL current recipes**, the export name follows the loaded file from then on); plus "Reset to original"  
- **🌿 Maintain TCM assignments** – open any ingredient row with ⚙️: add or correct element/flavor/thermal nature; own edits become permanent only via "💾 Save Five Elements" (details in the section below)  
- **Keyboard shortcut** – `Ctrl+S` saves the current recipe  
- **🌐 Import from TheMealDB** – search recipes online at themealdb.com (by name), preview matches and take them over converted into our own format: amounts are parsed and units are translated or converted (`tbsp`→EL, `tsp`→TL, `oz`/`lb`/`fl oz`→g/ml, `cup`→Tasse, `clove`→Zehe …), qualifiers like "chopped" move into the ingredient name as a bracketed suffix, the free-text instructions are split into numbered steps (bullets/"STEP n" removed), the image is embedded as a data URL (fallback: online link) and the source is stored as a note on the recipe; categories are translated into German (Beef→Rind …). Content is English, TheMealDB provides no nutritional values, servings are assumed to be 4 – everything stays editable afterwards as usual. Online only on button press (API & image server allow CORS, works even from `file://`)  
- **📂 Drag a recipe file into the window** – simply drag a `.json` or `.js` database (e.g. `database_demos/rezepte_demo_zh_CN.js`) into the browser window: an overlay shows “Drop to import”, then a small modal box chooses what to do with the found recipes – “📂 Open as database (replaces the current one)” (like the “Open other database” menu entry incl. source display), “➕ Add to the current database” (merge with collision dialog) or cancel. Other file types are politely rejected  
- **📚 Import from the Wikibooks cookbook** – a second online source next to TheMealDB: German, freely licensed recipes (CC BY-SA) from the cookbook on de.wikibooks.org; switchable via a tab in the import modal (own menu entry available). Search through the MediaWiki API (`Kochbuch/` pages only, 📖 placeholder instead of thumbnails), conversion of the wikitext: the `_RezeptBox` template provides category (already German), servings and – if entered – nutritional values (kcal/carbs/protein/fat); `== Zutaten ==` lines are split by a German amount parser (`ca.`/`etwa` prefixes removed, wiki links like `[[Kochbuch/ Milch|Milch]]` resolved, “2–3 St.” → amount 2-3 + plural Stück, lines without amounts like “etwas Salz” stay with the name); `== Zubereitung ==` is split into steps including a 💡 tips section, footnotes (“Erfasst von:”, Wikipedia credits) are dropped; image optional: template field `Bild` or first photo link (jpg/png/webp, no svg decoration), existence check via imageinfo (330px thumbnail), embedded as data URL – for the ~84 % of recipes without a photo the usual placeholder kicks in. The mandatory CC BY-SA attribution is stored automatically as the recipe's source note; the hints at the top of the modal link straight to the respective collection (`themealdb.com` or `de.wikibooks.org/wiki/Kochbuch`, click/right-click → new tab) and “↩ Back to search” refills the last search term and automatically reruns the search (remembered per source, even across reopening the modal). Online only on button press (API & upload.wikimedia.org allow CORS via `origin=*`, works even from `file://`)  

**Weekly Plan (`wochenplan.html`)**  
- **Real calendar weeks** – ←/→ navigation, "Today" jump, display per ISO-8601 (`Week 33 · 2026 · 10.08. – 16.08.`), today highlighted  
- **7 day columns** (Mon–Sun), any number of recipes per day – including the same recipe multiple times  
- **Drag & drop** – plan recipes from the searchable list, move them between days, remove with ✕  
- **🛒 Create shopping list for this week** – takes over all ingredients (recipes planned multiple times are counted multiple times), replaces the existing list  
- **🥗 Nutritional total per day/week/month** – each day shows its kcal total, plus an overall overview with calories, carbohydrates, protein, fiber and fats; the rocker switch "Per portion" (right in the box title) toggles between **"Totals of planned recipes"** (default – each planning counts as the whole recipe: value × portion count; like the shopping list, a recipe planned several times counts several times) and **"per portion – 1 serving of each planned recipe"** (each planning counts as exactly 1 serving); the setting is remembered and also affects the day lines and the 📧 text/HTML export (the export names the mode, the switch itself is not exported); recipes without nutritional values are marked with ⚠  
- **🌿 5 Elements balance per week/month** – collapsible box "🌿 Five Elements this week" / "… this month" below the nutritional overview: aggregates all planned recipes (elements/flavor/thermal nature as colored chips with ×count, sorted by frequency), plus the hit rate across all ingredients and a ⚠ note for recipes without assignment; collapsed by default, once opened it stays open permanently (same setting as the panel in the recipe view)  
- **💾 Save weekly plan / 📂 Open weekly plan** – saves all plans as `.json`, loading with confirmation  
- **📧 Export week plan as HTML** – exports the currently visible week or month as a standalone, email-friendly HTML file in **A4 landscape** (rendered as a landscape sheet, `@page{size:A4 landscape}` for print); includes the nutritional values and the 🌿 5 Elements balance; filename includes the date range and creation time, e.g. `Wochenplan_KW31_27.07.2026-02.08.2026_erstellt-18.08.2026_23-07-09.html`  
- **🎲 Fill randomly** (in the ⚙️ tools menu) – fills the visible week or month automatically with recipes from the currently filtered source list; three modes: "Fill empty days only", "Additionally" (appends more recipes, e.g. fill with Indian dishes first, then add desserts) and "Replace everything" (with confirmation); options "1 / 1–2 per day" and "No repeats / Repeats allowed", options are remembered; a **↩ Undo** snapshot restores the state before the last fill  
- **Dark mode** – follows the theme chosen in the recipe view  

**Languages / Multilingual**  
- **8 languages** – German (base), English, Russian, Spanish, French, Japanese, Korean, Chinese (simplified)  
- **Selection** – via the 🌐 dropdown in the header of all three pages, saved and passed as `?lang=xx` in the URL (`rezepte.html?lang=en`)  
- **German is the source language** – the dictionary keys in `sprachen.js` are the German texts themselves; `tr("Speichern")` returns the matching entry, otherwise German  
- **"Julia's" is kept as a proper name** in all languages (e.g., "Julia's 週間プラン", "Julia's 주간 플랜")  
- **Translation helpers** – `tr()` for dynamic texts, `trPlural()` for plural selection, `data-i18n` attributes for static texts, `sprachTag()`/`formatiereZahlLocale()` for regional formatting  
- **Stored data stays German** – only the display is translated (units via `EINHEITEN_ANZEIGE`)  
- **Categories are free text** – no preset names, any custom label is stored and shown unchanged (dropdowns only list the categories actually in use)  
- **Status** – all 8 languages fully covered (over 320 dictionary entries each); Russian additionally uses `PLURAL_FEW` for its three-form plural  

**Demo databases (`database_demos/`)**  
- **8 language versions** of a sample database with **17 recipes each** (10 main dishes + 7 desserts, combinable into menus): 🇩🇪 DE, 🇺🇸 EN, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN  
- **Content** – `id`, `name` and `einheit` stay German; `kategorie`, ingredient names and preparation steps are translated; `menge`, `portionen`, `bilder` and `nahrwerte` remain identical across all languages  
- **Import** – in the editor (`rezepte_bearbeiten.html`) use "📂 Open another collection" and pick one of the files (`rezepte_demo_*.js`); it replaces the current working database  
- **Save as the main database** - Save the loaded `rezepte_demo_*.js` as `rezepte.js` in the `assets/` folder, reload the browser (F5), and the previous demo will now be the main database—you're ready to go :)

**🌿 TCM / 5 Elements (ingredient assignment)**  
- **Principle** – the assignment covers an ingredient as a whole (not per recipe); a change therefore applies to every recipe using that ingredient  
- **Display** – in the recipe view, each recipe shows its ingredients' assignment in the collapsible "🌿 5 Elements" panel below the nutritional values as colored chips (element, flavor, thermal nature); the dropdown "Filter by 5 elements (TCM)" filters the list, the chips are clickable  
- **Maintenance** – in the editor (`rezepte_bearbeiten.html`) open any ingredient row with ⚙️: add or correct element/flavor/thermal nature; a status shows "From the database" / "Own edit" (green) / "No TCM data"  
- **Storage** – own edits initially live only locally (localStorage `zutaten_tcm_v1`); they become permanent only via "💾 Save Five Elements" into the app data file `assets/zutaten-tcm.js` (never into the recipes themselves)  
- **Data** – all three pages read only `assets/zutaten-tcm.js` (via a `<script>`; overwrite the file in the `assets/` folder); `zutaten-tcm.json` is the "mother"/template for importing, keys = ingredient names, values: `element` (holz/feuer/erde/metall/wasser), `geschmack` (array: sauer/bitter/suess/scharf/salzig), `thermik` (heiss/warm/neutral/kuehl/kalt) and optional `namen` (list of alternative spellings, e.g. other languages)  
- **Multilingual (aliases)** – all three pages also look up the `namen` variants: "소금", "salt", "соль" … find the same entry as "Salz"; the 803 aliases from the demo databases (7 languages) are already included in mother and app file. In the editor: if an own edit hits an entry via one of its variants, the values go into the canonical entry and the new spelling is automatically added as a variant; unknown ingredients create a new entry  
- **Load a mother** – in the editor use "📂 Load another Five Elements list" to load a different `zutaten-tcm.json` as the basis (replaces the current base data for this session); afterwards the export "💾 Save Five Elements" automatically offers the loaded mother's name (from `weitere-zutaten-tcm.json` it becomes `weitere-zutaten-tcm.js`)  
- **Weekly plan balance** – the weekly plan (`wochenplan.html`) aggregates all planned recipes in the collapsible box "🌿 Five Elements this week/this month" and also shows it in the 📧 HTML export  
- **Status** – 236 ingredients classified; deliberately unassigned ("No TCM data"): Asafötida, Pickles and Chutneys, San apart  

## **Technology**

Pure HTML, CSS, and JavaScript (vanilla JS, no frameworks, no build step, no external dependencies – no CDN, no fonts). The pages even work from `file://`, i.e. without any web server, in all modern browsers (Chrome, Firefox, Safari, Edge). Via `window.name`, the editor can open `rezepte.html` in a new tab without the browser losing the reference. The app therefore stays offline-capable; the only optional online features are the 🌐 TheMealDB import and the 📚 Wikibooks cookbook import in the editor (on button press only, API and image server allow CORS via `access-control-allow-origin: *`). Note on Firefox: when opening the pages directly as local files (`file://`), since version 68 Firefox treats every file as its own origin with separate localStorage – personal notes from `rezepte.html` are then invisible to the editor (Chrome shares storage across all local files). Fix: serve the app through a small local web server (e.g. run `python3 -m http.server` in the program folder, then open `http://localhost:8000/rezepte.html`) or set `privacy.file_unique_origin` to `false` in `about:config`.  

### **Files**
- `rezepte.html` – recipe view (incl. CSS & JS)  
- `rezepte_bearbeiten.html` – recipe editor  
- `wochenplan.html` – weekly plan  
- `assets/` – `rezepte.js` (database, the 17 demo recipes as a JavaScript constant, including images as data URLs, identical to `database_demos/rezepte_demo_de.js`), `sprachen.js` (languages file, 8 languages, translation helpers), `zutaten-tcm.js` (TCM assignments, generated from an imported JSON mother file), `test-sprachen.js` (test suite, see "Usage" section), `Nährwerte_Herkunft.md` (calculation method & assumptions behind the nutrition estimates), `zutaten-naehrwerte.json` (per-100 g ingredient nutrition table used as calculation basis; loaded as `zutaten-naehrwerte.js` via `<script>` and shown in the modal below the nutrition cards) and background images (light & dark)  
- `database_demos/` – sample databases (17 recipes each) in 8 languages (DE, EN, RU, ES, FR, JP, KR, zh-CN)

## Tests

`test-sprachen.js` verifies the core logic without a browser (223 checks): language priority & `STANDARD_SPRACHE="auto"`, translation fallback & plural rules, unit round-trip in all 7 foreign languages, dictionary integrity (duplicate/missing keys), the week-planner nutrition sums of both toggle modes, the “Ingredient nutrition values” modal (incl. multilingual ingredient names) and the integrity of the TCM data, plus the step timer with kitchen timers (marker detection, duplicate-start protection, alarm blink, colour-stage caps) and the remembered kitchen font size, plus the editor form (merely viewing a recipe no longer modifies the database; empty notes leave no field behind; reordering via buttons or drag&drop triggers the export alarm; unsaved form input makes the 💾 buttons pulse red until saved; “＋ New” and “⧉ Duplicate” ask first whether to save, but only saving triggers the export alarm (deleting alarms immediately); ingredient actions with a stale reference delete nothing by mistake, open ⚙️ panels stay open and travel with their row when moved; the 🗘 reset gives a sharp warning while unexported changes exist (in the week planner naming week or month plan per view) and then reloads without asking again; the chosen view (week/month) and the displayed week or month are remembered absolutely and survive reloads and the reset; drag & drop import accepts .json/.js recipe databases straight in the browser window (overlay hint, choice modal: open as database/replace or add/merge, cancelling changes nothing, foreign types are politely rejected); the Wikibooks import is covered including menu entry, source toggle, translations and the complete wikitext converter (amount parser, wiki links, template values, nutrition filter, “Erfasst von” cutoff, 💡 tips, CC BY-SA note)). Run with:

```
node assets/test-sprachen.js
```

## **License**

This project is licensed under the GNU General Public License v3.0. The source code may be freely used, modified, and distributed - any derivative works must also remain open under the GPLv3.

Copyright (C) 2026 heino17 https://github.com/heino17/Rezepte-Sammlung  
