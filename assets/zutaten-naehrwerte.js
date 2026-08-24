/**
 * Julia's Rezepte-Sammlung  Copyright (C) 2026 heino17
 * https://github.com/heino17/Rezepte-Sammlung
 *
 * ZUTATEN_NAEHRWERTE – Nährwerte je Zutat pro 100 g / 100 ml
 * Generiert aus zutaten-naehrwerte.json (Stammdatei, im Editor/Hand gepflegt).
 * Wird von rezepte.html per <script> geladen (file://-tauglich) und im
 * Modal "Zutaten-Nährwerte" unter den Nährwert-Karten angezeigt.
 * kh=Kohlenhydrate, ew=Eiweiss, bs=Ballaststoffe, fe=Fette.
 */
const ZUTATEN_NAEHRWERTE = {
  "_hinweis": "Werte pro 100 g bzw. 100 ml (Fluessigkeiten). Quelle: Standard-Naehrwerttabellen (vergleichbar USDA/Bundeslebensmittelschluessel), gerundet. kh=Kohlenhydrate, ew=Eiweiss, bs=Ballaststoffe, fe=Fette.",
  "Asafötida": {
    "kcal": 297,
    "kh": 67,
    "ew": 4,
    "bs": 4,
    "fe": 1.1
  },
  "Avocado": {
    "kcal": 160,
    "kh": 2,
    "ew": 2,
    "bs": 6.7,
    "fe": 14.7
  },
  "Backpulver": {
    "kcal": 53,
    "kh": 27,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Baguette": {
    "kcal": 274,
    "kh": 55,
    "ew": 9,
    "bs": 2.5,
    "fe": 1.5
  },
  "Balsamico Essig": {
    "kcal": 88,
    "kh": 17,
    "ew": 0.5,
    "bs": 0,
    "fe": 0
  },
  "Basilikum": {
    "kcal": 23,
    "kh": 2.7,
    "ew": 3.2,
    "bs": 1.6,
    "fe": 0.6
  },
  "Brot": {
    "kcal": 250,
    "kh": 47,
    "ew": 8,
    "bs": 5,
    "fe": 2.5
  },
  "Butter": {
    "kcal": 741,
    "kh": 0.6,
    "ew": 0.7,
    "bs": 0,
    "fe": 83
  },
  "Chat Masala": {
    "kcal": 280,
    "kh": 50,
    "ew": 8,
    "bs": 15,
    "fe": 8
  },
  "Chilipulver": {
    "kcal": 282,
    "kh": 50,
    "ew": 12,
    "bs": 27,
    "fe": 14
  },
  "Chilischoten": {
    "kcal": 40,
    "kh": 7.3,
    "ew": 1.9,
    "bs": 1.5,
    "fe": 0.4
  },
  "Creme fraiche": {
    "kcal": 292,
    "kh": 3.3,
    "ew": 2.2,
    "bs": 0,
    "fe": 30
  },
  "Dill": {
    "kcal": 43,
    "kh": 7,
    "ew": 3.5,
    "bs": 2.1,
    "fe": 1.1
  },
  "Dunkle Raspelschokolade": {
    "kcal": 546,
    "kh": 47,
    "ew": 5.5,
    "bs": 10,
    "fe": 33
  },
  "Eier": {
    "kcal": 155,
    "kh": 1.1,
    "ew": 13,
    "bs": 0,
    "fe": 11
  },
  "Erdbeeren": {
    "kcal": 32,
    "kh": 5.7,
    "ew": 0.8,
    "bs": 2,
    "fe": 0.3
  },
  "Essig": {
    "kcal": 21,
    "kh": 0.9,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Feigen": {
    "kcal": 74,
    "kh": 16.3,
    "ew": 0.8,
    "bs": 2.9,
    "fe": 0.3
  },
  "Fertigblätterteig": {
    "kcal": 384,
    "kh": 34,
    "ew": 5.9,
    "bs": 1.5,
    "fe": 25
  },
  "Festkochende Kartoffeln": {
    "kcal": 70,
    "kh": 15,
    "ew": 2,
    "bs": 1.8,
    "fe": 0.1
  },
  "Fischfilet": {
    "kcal": 100,
    "kh": 0,
    "ew": 20,
    "bs": 0,
    "fe": 2
  },
  "frischer Ingwer": {
    "kcal": 80,
    "kh": 17.8,
    "ew": 1.8,
    "bs": 2,
    "fe": 0.8
  },
  "Garam Masala": {
    "kcal": 379,
    "kh": 44,
    "ew": 15,
    "bs": 22,
    "fe": 15
  },
  "Gehackte Kräuter": {
    "kcal": 30,
    "kh": 4,
    "ew": 2.8,
    "bs": 2,
    "fe": 0.5
  },
  "gehacktes Basilikum": {
    "kcal": 23,
    "kh": 2.7,
    "ew": 3.2,
    "bs": 1.6,
    "fe": 0.6
  },
  "Gehobelten Mandeln": {
    "kcal": 579,
    "kh": 9,
    "ew": 21,
    "bs": 12,
    "fe": 50
  },
  "Gemahlene Mandeln": {
    "kcal": 579,
    "kh": 9,
    "ew": 21,
    "bs": 12,
    "fe": 50
  },
  "Geriebene Zitronenschale": {
    "kcal": 47,
    "kh": 16,
    "ew": 1.5,
    "bs": 10,
    "fe": 0.3
  },
  "Ghee": {
    "kcal": 900,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 100
  },
  "Gouda (gerieben)": {
    "kcal": 356,
    "kh": 2.2,
    "ew": 25,
    "bs": 0,
    "fe": 27.4
  },
  "Hackfleisch": {
    "kcal": 250,
    "kh": 0,
    "ew": 18,
    "bs": 0,
    "fe": 20
  },
  "Hähnchenbrustfilet": {
    "kcal": 110,
    "kh": 0,
    "ew": 23,
    "bs": 0,
    "fe": 1.6
  },
  "Hähnchenteile": {
    "kcal": 200,
    "kh": 0,
    "ew": 19,
    "bs": 0,
    "fe": 14
  },
  "Halbbittere Schokolade": {
    "kcal": 540,
    "kh": 55,
    "ew": 5,
    "bs": 6,
    "fe": 32
  },
  "Hartkäse": {
    "kcal": 400,
    "kh": 1,
    "ew": 28,
    "bs": 0,
    "fe": 32
  },
  "Haselnüsse": {
    "kcal": 628,
    "kh": 7,
    "ew": 15,
    "bs": 9.7,
    "fe": 61
  },
  "Hefe": {
    "kcal": 105,
    "kh": 3,
    "ew": 12,
    "bs": 6,
    "fe": 1.9
  },
  "Heidelbeeren": {
    "kcal": 42,
    "kh": 9.7,
    "ew": 0.7,
    "bs": 2.4,
    "fe": 0.3
  },
  "Honig": {
    "kcal": 304,
    "kh": 82,
    "ew": 0.3,
    "bs": 0.2,
    "fe": 0
  },
  "Hühnerbrühe": {
    "kcal": 8,
    "kh": 0.5,
    "ew": 1,
    "bs": 0,
    "fe": 0.3
  },
  "Ingwer": {
    "kcal": 80,
    "kh": 17.8,
    "ew": 1.8,
    "bs": 2,
    "fe": 0.8
  },
  "Joghurt": {
    "kcal": 61,
    "kh": 4.7,
    "ew": 3.5,
    "bs": 0,
    "fe": 3.3
  },
  "Kakao": {
    "kcal": 350,
    "kh": 12,
    "ew": 20,
    "bs": 33,
    "fe": 22
  },
  "Kakaopulver": {
    "kcal": 350,
    "kh": 12,
    "ew": 20,
    "bs": 33,
    "fe": 22
  },
  "Kardamom": {
    "kcal": 311,
    "kh": 68,
    "ew": 11,
    "bs": 28,
    "fe": 6.7
  },
  "Kartoffelmehl": {
    "kcal": 330,
    "kh": 83,
    "ew": 0.1,
    "bs": 0.5,
    "fe": 0.1
  },
  "Kartoffeln": {
    "kcal": 70,
    "kh": 15,
    "ew": 2,
    "bs": 1.8,
    "fe": 0.1
  },
  "Kichererbsenmehl": {
    "kcal": 356,
    "kh": 55,
    "ew": 22,
    "bs": 11,
    "fe": 6
  },
  "Kirschkonfitüre": {
    "kcal": 260,
    "kh": 64,
    "ew": 0.4,
    "bs": 1,
    "fe": 0.1
  },
  "Kirschwasser": {
    "kcal": 227,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Knoblauch": {
    "kcal": 149,
    "kh": 33,
    "ew": 6.4,
    "bs": 2.1,
    "fe": 0.5
  },
  "Kokosfett": {
    "kcal": 862,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 100
  },
  "Kokosmilch": {
    "kcal": 197,
    "kh": 3,
    "ew": 2,
    "bs": 0,
    "fe": 20
  },
  "Koriander": {
    "kcal": 23,
    "kh": 3.7,
    "ew": 2.1,
    "bs": 2.8,
    "fe": 0.5
  },
  "Kreuzkümmel": {
    "kcal": 375,
    "kh": 44,
    "ew": 18,
    "bs": 11,
    "fe": 22
  },
  "Kümmel": {
    "kcal": 333,
    "kh": 50,
    "ew": 20,
    "bs": 38,
    "fe": 15
  },
  "Kurkuma": {
    "kcal": 354,
    "kh": 65,
    "ew": 8,
    "bs": 21,
    "fe": 10
  },
  "Kuvertüre": {
    "kcal": 530,
    "kh": 55,
    "ew": 5.5,
    "bs": 4,
    "fe": 31
  },
  "Lauchzwiebeln": {
    "kcal": 32,
    "kh": 4.7,
    "ew": 1.8,
    "bs": 2.6,
    "fe": 0.2
  },
  "Lorbeerblätter": {
    "kcal": 313,
    "kh": 75,
    "ew": 7.6,
    "bs": 26,
    "fe": 8.4
  },
  "Maismehl": {
    "kcal": 361,
    "kh": 76,
    "ew": 8,
    "bs": 7,
    "fe": 3.5
  },
  "Mandelblättchen": {
    "kcal": 579,
    "kh": 9,
    "ew": 21,
    "bs": 12,
    "fe": 50
  },
  "Mandeln": {
    "kcal": 579,
    "kh": 9,
    "ew": 21,
    "bs": 12,
    "fe": 50
  },
  "Mango": {
    "kcal": 60,
    "kh": 15,
    "ew": 0.8,
    "bs": 1.6,
    "fe": 0.4
  },
  "Margarine": {
    "kcal": 717,
    "kh": 0.6,
    "ew": 0.3,
    "bs": 0,
    "fe": 80
  },
  "Marzipian Rohmasse": {
    "kcal": 460,
    "kh": 41,
    "ew": 9,
    "bs": 5,
    "fe": 27
  },
  "Mayonaise": {
    "kcal": 680,
    "kh": 1.5,
    "ew": 1.1,
    "bs": 0,
    "fe": 75
  },
  "Mehl": {
    "kcal": 348,
    "kh": 71,
    "ew": 10,
    "bs": 3.5,
    "fe": 1
  },
  "Milch": {
    "kcal": 64,
    "kh": 4.8,
    "ew": 3.3,
    "bs": 0,
    "fe": 3.6
  },
  "mittelgroße Tomaten": {
    "kcal": 18,
    "kh": 2.9,
    "ew": 0.9,
    "bs": 1.2,
    "fe": 0.2
  },
  "Möhren": {
    "kcal": 41,
    "kh": 8,
    "ew": 0.9,
    "bs": 2.8,
    "fe": 0.2
  },
  "Mozarella": {
    "kcal": 280,
    "kh": 2.2,
    "ew": 22,
    "bs": 0,
    "fe": 20
  },
  "Natron": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Nelken": {
    "kcal": 274,
    "kh": 65,
    "ew": 6,
    "bs": 34,
    "fe": 13
  },
  "Nüsse (gemahlen)": {
    "kcal": 620,
    "kh": 12,
    "ew": 16,
    "bs": 8,
    "fe": 58
  },
  "Okras": {
    "kcal": 33,
    "kh": 7,
    "ew": 1.9,
    "bs": 3.2,
    "fe": 0.2
  },
  "Öl": {
    "kcal": 884,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 100
  },
  "Oliven": {
    "kcal": 145,
    "kh": 3.8,
    "ew": 1,
    "bs": 3.2,
    "fe": 15
  },
  "Olivenöl": {
    "kcal": 884,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 100
  },
  "Osmose Wasser": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Paprikapulver": {
    "kcal": 282,
    "kh": 50,
    "ew": 14,
    "bs": 35,
    "fe": 13
  },
  "Parmaschinken": {
    "kcal": 268,
    "kh": 0,
    "ew": 28,
    "bs": 0,
    "fe": 18
  },
  "Parmesan": {
    "kcal": 392,
    "kh": 3.2,
    "ew": 35,
    "bs": 0,
    "fe": 26
  },
  "Petersilie": {
    "kcal": 36,
    "kh": 6.3,
    "ew": 3,
    "bs": 3.3,
    "fe": 0.8
  },
  "Pfeffer": {
    "kcal": 251,
    "kh": 64,
    "ew": 10,
    "bs": 25,
    "fe": 3.3
  },
  "Pickles und Chutneys": {
    "kcal": 120,
    "kh": 27,
    "ew": 1,
    "bs": 1.5,
    "fe": 0.3
  },
  "Pinienkerne": {
    "kcal": 673,
    "kh": 13,
    "ew": 14,
    "bs": 3.7,
    "fe": 68
  },
  "Pistazien": {
    "kcal": 562,
    "kh": 28,
    "ew": 20,
    "bs": 10,
    "fe": 45
  },
  "Puderzucker": {
    "kcal": 389,
    "kh": 100,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Quark": {
    "kcal": 145,
    "kh": 4,
    "ew": 12,
    "bs": 0,
    "fe": 9
  },
  "Reis": {
    "kcal": 130,
    "kh": 28,
    "ew": 2.7,
    "bs": 0.4,
    "fe": 0.3
  },
  "Rhabarber": {
    "kcal": 21,
    "kh": 3.4,
    "ew": 0.9,
    "bs": 1.8,
    "fe": 0.2
  },
  "Roggenmehl": {
    "kcal": 320,
    "kh": 65,
    "ew": 8.5,
    "bs": 12,
    "fe": 1.5
  },
  "Rohrzucker": {
    "kcal": 380,
    "kh": 98,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Romana Salatherzen": {
    "kcal": 17,
    "kh": 3.3,
    "ew": 1.2,
    "bs": 2.1,
    "fe": 0.3
  },
  "Rosinen": {
    "kcal": 299,
    "kh": 79,
    "ew": 3.1,
    "bs": 3.7,
    "fe": 0.5
  },
  "Rucola": {
    "kcal": 25,
    "kh": 2.1,
    "ew": 2.6,
    "bs": 1.6,
    "fe": 0.7
  },
  "Rum": {
    "kcal": 231,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Sahnequark": {
    "kcal": 176,
    "kh": 3.4,
    "ew": 8,
    "bs": 0,
    "fe": 15
  },
  "Salami": {
    "kcal": 380,
    "kh": 1.5,
    "ew": 20,
    "bs": 0,
    "fe": 32
  },
  "Salz": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "San apart": {
    "kcal": 267,
    "kh": 66,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Sauerkirschen": {
    "kcal": 63,
    "kh": 12.5,
    "ew": 1,
    "bs": 1.5,
    "fe": 0.3
  },
  "Saure Sahne": {
    "kcal": 165,
    "kh": 3.6,
    "ew": 2.7,
    "bs": 0,
    "fe": 15
  },
  "Schlag Sahne": {
    "kcal": 292,
    "kh": 3.4,
    "ew": 2.4,
    "bs": 0,
    "fe": 30
  },
  "Schmand": {
    "kcal": 233,
    "kh": 3.4,
    "ew": 2.9,
    "bs": 0,
    "fe": 24
  },
  "Schnittlauch": {
    "kcal": 30,
    "kh": 4.4,
    "ew": 3.3,
    "bs": 2.5,
    "fe": 0.5
  },
  "Schwarze Senfkörner": {
    "kcal": 508,
    "kh": 28,
    "ew": 26,
    "bs": 12,
    "fe": 36
  },
  "Schwarzkümmelsamen": {
    "kcal": 345,
    "kh": 32,
    "ew": 21,
    "bs": 12,
    "fe": 22
  },
  "Senf": {
    "kcal": 66,
    "kh": 5,
    "ew": 4,
    "bs": 3.5,
    "fe": 4
  },
  "Senfmehl": {
    "kcal": 469,
    "kh": 29,
    "ew": 27,
    "bs": 12,
    "fe": 28
  },
  "Sonnenblumenöl": {
    "kcal": 884,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 100
  },
  "Stärke": {
    "kcal": 355,
    "kh": 87,
    "ew": 0.5,
    "bs": 0.5,
    "fe": 0.5
  },
  "Staudensellerie": {
    "kcal": 16,
    "kh": 3,
    "ew": 0.7,
    "bs": 1.6,
    "fe": 0.2
  },
  "Tamarinde": {
    "kcal": 239,
    "kh": 63,
    "ew": 2.8,
    "bs": 5.1,
    "fe": 0.6
  },
  "Thymiansamen": {
    "kcal": 350,
    "kh": 45,
    "ew": 10,
    "bs": 25,
    "fe": 15
  },
  "Toast": {
    "kcal": 265,
    "kh": 49,
    "ew": 9,
    "bs": 2.7,
    "fe": 3.2
  },
  "Tomaten": {
    "kcal": 18,
    "kh": 2.9,
    "ew": 0.9,
    "bs": 1.2,
    "fe": 0.2
  },
  "Tomaten (Dose)": {
    "kcal": 20,
    "kh": 3.5,
    "ew": 1,
    "bs": 1.2,
    "fe": 0.2
  },
  "Tomatenmark": {
    "kcal": 82,
    "kh": 15,
    "ew": 4.3,
    "bs": 4,
    "fe": 0.5
  },
  "Tortenguss": {
    "kcal": 350,
    "kh": 87,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Trockenhefe": {
    "kcal": 325,
    "kh": 30,
    "ew": 40,
    "bs": 27,
    "fe": 6.5
  },
  "Vanillepudding Pulver": {
    "kcal": 355,
    "kh": 87,
    "ew": 0.5,
    "bs": 0.2,
    "fe": 0.5
  },
  "Vanillesoßenpulver": {
    "kcal": 355,
    "kh": 87,
    "ew": 0.5,
    "bs": 0.2,
    "fe": 0.5
  },
  "Vanillezucker": {
    "kcal": 393,
    "kh": 98,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Walnüsse (gemahlen)": {
    "kcal": 654,
    "kh": 14,
    "ew": 15,
    "bs": 6.7,
    "fe": 65
  },
  "warmes Osmose-Wasser": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "warmes Wasser": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Wasser": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "kaltes osmose Wasser": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Weißbrot": {
    "kcal": 265,
    "kh": 49,
    "ew": 9,
    "bs": 2.7,
    "fe": 3.2
  },
  "Weißweinessig": {
    "kcal": 21,
    "kh": 0.9,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Worchestersauce": {
    "kcal": 78,
    "kh": 19,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Zimt": {
    "kcal": 247,
    "kh": 81,
    "ew": 4,
    "bs": 53,
    "fe": 1.2
  },
  "Zimtrinde": {
    "kcal": 247,
    "kh": 81,
    "ew": 4,
    "bs": 53,
    "fe": 1.2
  },
  "Zitrone": {
    "kcal": 29,
    "kh": 9.3,
    "ew": 1.1,
    "bs": 2.8,
    "fe": 0.3
  },
  "Zitronenaroma": {
    "kcal": 0,
    "kh": 0,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Zitronensaft": {
    "kcal": 22,
    "kh": 6.9,
    "ew": 0.4,
    "bs": 0.1,
    "fe": 0.2
  },
  "Zucker": {
    "kcal": 400,
    "kh": 100,
    "ew": 0,
    "bs": 0,
    "fe": 0
  },
  "Zwiebeln": {
    "kcal": 40,
    "kh": 9,
    "ew": 1.1,
    "bs": 1.7,
    "fe": 0.1
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = ZUTATEN_NAEHRWERTE;
}
