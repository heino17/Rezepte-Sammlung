/* ---------------------------------------------------------------------------
 * Julia's Rezepte-Sammlung  Copyright (C) 2026 heino17
 * https://github.com/heino17/Rezepte-Sammlung
 *
 * Zutaten nach den 5 Elementen (Traditionelle Chinesische Medizin, TCM)
 * Stand 22.8.2026: 235 Zutaten – Doppel-Eintrag „Mayonnaise"/„Mayonaise" zusammengeführt
 * Stammdaten werden direkt in dieser Datei gepflegt (die frühere
 * zutaten-tcm.json war nur ein Export und wurde gelöscht).
 * Werte:
 *   element    "" | holz | feuer | erde | metall | wasser
 *   geschmack  [] | ["sauer","bitter","suess","scharf","salzig"]
 *   thermik    "" | heiss | warm | neutral | kuehl | kalt
 *   namen      [] | weitere Schreibweisen des Namens (z. B. andere
 *                 Sprachen); alle Seiten suchen auch über diese Varianten.
 * WICHTIG: ohne Therapie-Anspruch – nur zur Orientierung.
 * Leere Werte (z. B. Wasser nur "thermik": "neutral") sind Absicht.
 * Stand 22.8.2026: namen-Varianten ALLER Zutaten vervollständigt
 * (feste Reihenfolge: EN, RU, ES, FR, JA, KO, ZH_CN);
 * Schlüssel "Mayonnaise" zu "Mayonaise" (Schreibweise der Nährtabelle).
 * ------------------------------------------------------------------------- */
var ZUTATEN_TCM = {
  "Äpfel, rot": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Red apples",
      "Красные яблоки",
      "Manzanas rojas",
      "Pommes rouges",
      "赤りんご",
      "빨간 사과",
      "红苹果"
    ]
  },
  "Amaretto": {
    "element": "",
    "geschmack": [],
    "thermik": "warm",
    "namen": [
      "Amaretto",
      "Амаретто",
      "Amaretto",
      "Amaretto",
      "アマレット",
      "아마레토",
      "意大利杏仁酒"
    ]
  },
  "Ananas": {
    "element": "erde",
    "geschmack": [
      "suess",
      "sauer"
    ],
    "thermik": "neutral",
    "namen": [
      "Pineapple",
      "Ананас",
      "Piña",
      "Ananas",
      "パイナップル",
      "파인애플",
      "菠萝"
    ]
  },
  "Ananassaft": {
    "element": "erde",
    "geschmack": [
      "suess",
      "sauer"
    ],
    "thermik": "neutral",
    "namen": [
      "Pineapple juice",
      "Ананасовый сок",
      "Jugo de piña",
      "Jus d'ananas",
      "パイナップルジュース",
      "파인애플 주스",
      "菠萝汁"
    ]
  },
  "Asafötida": {
    "element": "",
    "geschmack": [],
    "thermik": "",
    "namen": [
      "Asafoetida",
      "Асафетида",
      "Asafétida",
      "Asa-fœtida",
      "アサフェティダ",
      "아사페티다",
      "阿魏粉"
    ]
  },
  "Avocado": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Avocado",
      "Авокадо",
      "Aguacate",
      "Avocat",
      "アボカド",
      "아보카도",
      "牛油果"
    ]
  },
  "Backoblaten": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Wafer discs",
      "Вафельные облатки",
      "Obleas",
      "Hosties",
      "ウエハース台",
      "베이스 웨이퍼",
      "威化饼底"
    ]
  },
  "Backpulver": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Baking powder",
      "Разрыхлитель",
      "Levadura en polvo",
      "Levure chimique",
      "ベーキングパウダー",
      "베이킹파우더",
      "泡打粉"
    ]
  },
  "Bacon": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "warm",
    "namen": [
      "Bacon",
      "Бекон",
      "Tocino",
      "Lard",
      "ベーコン",
      "베이컨",
      "培根"
    ]
  },
  "Baguette": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Baguette",
      "Багет",
      "Baguette",
      "Baguette",
      "バゲット",
      "바게트",
      "法棍"
    ]
  },
  "Balsamico Essig": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Balsamic vinegar",
      "Бальзамический уксус",
      "Vinagre balsámico",
      "Vinaigre balsamique",
      "バルサミコ酢",
      "발사믹 식초",
      "意大利黑醋"
    ]
  },
  "Balsamicoessig, hell": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Balsamic vinegar, light",
      "Бальзамический уксус, светлый",
      "Vinagre balsámico claro",
      "Vinaigre balsamique clair",
      "バルサミコ酢（ライト）",
      "발사믹식초(연한 것)",
      "香醋（浅色）"
    ]
  },
  "Basilikum": {
    "element": "metall",
    "geschmack": [
      "suess",
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Basil",
      "Базилик",
      "Albahaca",
      "Basilic",
      "バジル",
      "바질",
      "罗勒"
    ]
  },
  "Basilikum, frisch": {
    "element": "metall",
    "geschmack": [
      "suess",
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Basil, fresh",
      "Базилик, свежий",
      "Albahaca fresca",
      "Basilic frais",
      "バジル（生）",
      "바질(신선한 것)",
      "新鲜罗勒"
    ]
  },
  "Bauernbrot": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Farmer's bread",
      "Деревенский хлеб",
      "Pan de campo",
      "Pain de campagne",
      "田舎パン",
      "시골빵",
      "乡村面包"
    ]
  },
  "Bio-Zitronen": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Organic lemons",
      "Органические лимоны",
      "Limones ecológicos",
      "Citrons bio",
      "有機レモン",
      "유기농 레몬",
      "有机柠檬"
    ]
  },
  "Blattgelatine": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Leaf gelatin",
      "Листовой желатин",
      "Gelatina en hojas",
      "Gélatine en feuilles",
      "板ゼラチン",
      "판 젤라틴",
      "吉利丁片"
    ]
  },
  "Brie": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Brie",
      "Бри",
      "Brie",
      "Brie",
      "ブリー",
      "브리 치즈",
      "布里奶酪"
    ]
  },
  "Brot": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Bread",
      "Хлеб",
      "Pan",
      "Pain",
      "パン",
      "빵",
      "面包"
    ]
  },
  "bunter Blattsalat": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Mixed leaf salad",
      "Смешанный листовой салат",
      "Ensalada de hojas variadas",
      "Salade de feuilles variées",
      "ミックスリーフサラダ",
      "믹스 리프 샐러드",
      "混合生菜"
    ]
  },
  "Butter": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Butter",
      "Сливочное масло",
      "Mantequilla",
      "Beurre",
      "バター",
      "버터",
      "黄油"
    ]
  },
  "Butterkäse Aufschnitt": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Butter cheese (sliced)",
      "Сливочный сыр (нарезка)",
      "Queso mantequilla en lonchas",
      "Fromage au beurre (tranches)",
      "バターチーズ（スライス）",
      "버터치즈(슬라이스)",
      "奶油奶酪片"
    ]
  },
  "Chat Masala": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Chaat masala",
      "Чат масала",
      "Chaat masala",
      "Chaat masala",
      "チャートマサラ",
      "차트 마살라",
      "印度恰特香料"
    ]
  },
  "Cherrytomaten": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Cherry tomatoes",
      "Помидоры черри",
      "Tomates cherry",
      "Tomates cerises",
      "ミニトマト",
      "방울토마토",
      "樱桃番茄"
    ]
  },
  "Chili, gemahlen": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "heiss",
    "namen": [
      "Ground chili",
      "Молотый чили",
      "Chile molido",
      "Piment en poudre",
      "チリパウダー",
      "칠리 가루",
      "辣椒粉"
    ]
  },
  "Chilipulver": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "heiss",
    "namen": [
      "Chili powder",
      "Порошок чили",
      "Chile en polvo",
      "Piment en poudre",
      "チリパウダー",
      "칠리 파우더",
      "辣椒粉"
    ]
  },
  "Chilischoten": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "heiss",
    "namen": [
      "Chili peppers",
      "Стручки чили",
      "Chiles",
      "Piments",
      "チリ唐辛子",
      "청양고추",
      "辣椒"
    ]
  },
  "Ciabatta-Brot": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Ciabatta bread",
      "Хлеб чиабатта",
      "Pan ciabatta",
      "Pain ciabatta",
      "チャバタパン",
      "치아바타 빵",
      "恰巴塔面包"
    ]
  },
  "Cornichons": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Cornichons",
      "Корнишоны",
      "Pepinillos",
      "Cornichons",
      "コルニッション",
      "코르니숑(작은 피클 오이)",
      "小酸黄瓜"
    ]
  },
  "Creme fraiche": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Crème fraîche",
      "Крем-фреш",
      "Crema agria",
      "Crème fraîche",
      "クレームフレッシュ",
      "크렘 프레슈",
      "法式酸奶油"
    ]
  },
  "Crème fraîche": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Crème fraîche",
      "Крем-фреш",
      "Crema agria",
      "Crème fraîche",
      "クレームフレッシュ",
      "크렘 프레슈",
      "法式酸奶油"
    ]
  },
  "Currypulver": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Curry powder",
      "Порошок карри",
      "Curry en polvo",
      "Curry en poudre",
      "カレー粉",
      "카레 가루",
      "咖喱粉"
    ]
  },
  "Dill": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Dill",
      "Укроп",
      "Eneldo",
      "Aneth",
      "ディル",
      "딜",
      "莳萝"
    ]
  },
  "Dill, frisch": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Fresh dill",
      "Свежий укроп",
      "Eneldo fresco",
      "Aneth frais",
      "生ディル",
      "생 딜",
      "新鲜莳萝"
    ]
  },
  "Dinkelmehl, Type 630": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Spelt flour (type 630)",
      "Полбяная мука (тип 630)",
      "Harina de espelta (tipo 630)",
      "Farine d'épeautre (T630)",
      "スペルト小麦粉（タイプ630）",
      "스펠트 밀가루(630)",
      "斯佩尔特小麦粉（630型）"
    ]
  },
  "Dunkle Raspelschokolade": {
    "element": "feuer",
    "geschmack": [
      "bitter",
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Grated dark chocolate",
      "Тёртый тёмный шоколад",
      "Chocolate negro rallado",
      "Chocolat noir râpé",
      "ダークチョコレート削り",
      "다크 초콜릿 간 것",
      "黑巧克力碎"
    ]
  },
  "Eier": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Eggs",
      "Яйца",
      "Huevos",
      "Œufs",
      "卵",
      "달걀",
      "鸡蛋"
    ]
  },
  "Eierlikör": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Eggnog liqueur",
      "Яичный ликёр",
      "Licor de huevo",
      "Liqueur d'œufs",
      "卵リキュール",
      "달걀 리큐르",
      "蛋黄利口酒"
    ]
  },
  "Erdbeeren": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Strawberries",
      "Клубника",
      "Fresas",
      "Fraises",
      "イチゴ",
      "딸기",
      "草莓"
    ]
  },
  "Essig": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Vinegar",
      "Уксус",
      "Vinagre",
      "Vinaigre",
      "酢",
      "식초",
      "醋"
    ]
  },
  "Feigen": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Figs",
      "Инжир",
      "Higos",
      "Figues",
      "イチジク",
      "무화과",
      "无花果"
    ]
  },
  "Fertigblätterteig": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Ready-made puff pastry",
      "Готовое слоёное тесто",
      "Hojaldre listo",
      "Pâte feuilletée prête",
      "市販のパイ生地",
      "시판 퍼프 페이스트리",
      "现成酥皮面团"
    ]
  },
  "Festkochende Kartoffeln": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Waxy potatoes",
      "Восковой картофель",
      "Patatas cerosas",
      "Pommes de terre fermes",
      "煮くずれしにくいジャガイモ",
      "찰지 않은 감자",
      "蜡质土豆"
    ]
  },
  "Fischfilet": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "neutral",
    "namen": [
      "Fish fillet",
      "Рыбное филе",
      "Filete de pescado",
      "Filet de poisson",
      "魚のフィレ",
      "생선 필레",
      "鱼片"
    ]
  },
  "frischer Ingwer": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Fresh ginger",
      "Свежий имбирь",
      "Jengibre fresco",
      "Gingembre frais",
      "生しょうが",
      "생강",
      "生姜"
    ]
  },
  "Frischkäse, körnig": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Cottage cheese",
      "Зернистый творожный сыр",
      "Queso fresco granulado",
      "Fromage frais à grains",
      "粒状フレッシュチーズ",
      "커티지 치즈",
      "颗粒状奶油奶酪"
    ]
  },
  "Frischkäse, natur": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Cream cheese, plain",
      "Творожный сыр, натуральный",
      "Queso crema natural",
      "Fromage frais nature",
      "フレッシュチーズ（プレーン）",
      "크림치즈(플레인)",
      "原味奶油奶酪"
    ]
  },
  "Frühlingszwiebeln": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Spring onions",
      "Зелёный лук",
      "Cebollino",
      "Oignons nouveaux",
      "青ネギ",
      "쪽파",
      "小葱"
    ]
  },
  "Garam Masala": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Garam masala",
      "Гарам масала",
      "Garam masala",
      "Garam masala",
      "ガラムマサラ",
      "가람 마살라",
      "印度综合香料"
    ]
  },
  "Gehackte Kräuter": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Chopped herbs",
      "Измельчённая зелень",
      "Hierbas picadas",
      "Herbes ciselées",
      "刻みハーブ",
      "다진 허브",
      "切碎的香草"
    ]
  },
  "gehacktes Basilikum": {
    "element": "metall",
    "geschmack": [
      "suess",
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Chopped basil",
      "Измельчённый базилик",
      "Albahaca picada",
      "Basilic ciselé",
      "刻みバジル",
      "다진 바질",
      "切碎的罗勒"
    ]
  },
  "Gehobelten Mandeln": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Flaked almonds",
      "Миндальные лепестки",
      "Almendras laminadas",
      "Amandes effilées",
      "スライスアーモンド",
      "슬라이스 아몬드",
      "杏仁片"
    ]
  },
  "Gemahlene Mandeln": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Ground almonds",
      "Молотый миндаль",
      "Almendras molidas",
      "Amandes moulues",
      "アーモンドパウダー",
      "아몬드 가루",
      "杏仁粉"
    ]
  },
  "Gemüsebrühe": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Vegetable stock",
      "Овощной бульон",
      "Caldo de verduras",
      "Bouillon de légumes",
      "野菜だし",
      "야채 육수",
      "蔬菜高汤"
    ]
  },
  "Geriebene Zitronenschale": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Grated lemon zest",
      "Тёртая цедра лимона",
      "Ralladura de limón",
      "Zeste de citron râpé",
      "すりおろしレモンの皮",
      "레몬 제스트",
      "柠檬皮屑"
    ]
  },
  "Gewürzgurken": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kalt",
    "namen": [
      "Pickled gherkins",
      "Маринованные огурцы",
      "Pepinillos encurtidos",
      "Cornichons marinés",
      "ピクルス（ガーキン）",
      "피클 오이",
      "酸黄瓜"
    ]
  },
  "Ghee": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Ghee",
      "Топлёное масло гхи",
      "Ghee",
      "Ghee",
      "ギー",
      "기(ghee)",
      "印度酥油"
    ]
  },
  "Gouda (gerieben)": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Gouda (grated)",
      "Гауда (тёртый)",
      "Gouda (rallado)",
      "Gouda (râpé)",
      "ゴーダチーズ（おろし）",
      "고다 치즈(간 것)",
      "高达奶酪（擦丝）"
    ]
  },
  "Gouda Aufschnitt": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Gouda (sliced)",
      "Гауда (нарезка)",
      "Gouda en lonchas",
      "Gouda en tranches",
      "ゴーダチーズ（スライス）",
      "고다 치즈(슬라이스)",
      "高达奶酪片"
    ]
  },
  "Gouda, gerieben": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Gouda, grated",
      "Гауда, тёртая",
      "Gouda rallado",
      "Gouda râpé",
      "粉チーズ（ゴーダ）",
      "강판에 간 고다 치즈",
      "擦丝高达奶酪"
    ]
  },
  "Gouda, jung am Stück": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Young Gouda (block)",
      "Молодой гауда (кусок)",
      "Gouda joven (pieza)",
      "Gouda jeune (bloc)",
      "若ゴーダ（ブロック）",
      "숙성 짧은 고다(블록)",
      "未熟成高达奶酪（块）"
    ]
  },
  "Hackfleisch": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Minced meat",
      "Мясной фарш",
      "Carne picada",
      "Viande hachée",
      "ひき肉",
      "다진 고기",
      "肉馅"
    ]
  },
  "Hackfleisch (Rind oder gemischt)": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Minced meat (beef or mixed)",
      "Фарш (говяжий или смешанный)",
      "Carne picada (ternera o mixta)",
      "Viande hachée (bœuf ou mélangée)",
      "ひき肉（牛または合いびき）",
      "다진 고기(소고기 또는 반반)",
      "肉末（牛肉或混合）"
    ]
  },
  "Hackfleisch, gemischt": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Minced meat, mixed",
      "Фарш, смешанный",
      "Carne picada mixta",
      "Viande hachée mélangée",
      "合いびき肉",
      "다진 고기(반반)",
      "混合肉末"
    ]
  },
  "Hähnchenbrustfilet": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Chicken breast fillet",
      "Филе куриной грудки",
      "Filete de pechuga de pollo",
      "Filet de blanc de poulet",
      "鶏むね肉",
      "닭가슴살",
      "鸡胸肉"
    ]
  },
  "Hähnchenbrustfilet (à 150 g)": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Chicken breast fillet (150 g each)",
      "Куриное филе (по 150 г)",
      "Filete de pechuga (150 g ud.)",
      "Filet de blanc de poulet (150 g pièce)",
      "鶏むね肉（1枚150g）",
      "닭가슴살(150g씩)",
      "鸡胸肉（每块150克）"
    ]
  },
  "Hähnchenbrustfilet, mariniert mit Rosmarin": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Chicken breast fillet, marinated with rosemary",
      "Куриное филе, маринованное с розмарином",
      "Filete de pechuga de pollo marinado con romero",
      "Filet de poulet mariné au romarin",
      "ローズマリー味付け鶏胸肉フィレ",
      "로즈마리로 양념한 닭가슴살 필레",
      "迷迭香腌鸡胸肉片"
    ]
  },
  "Hähnchenbrustfilets": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Chicken breast fillets",
      "Куриное филе",
      "Filetes de pechuga de pollo",
      "Filets de poulet",
      "鶏胸肉フィレ",
      "닭가슴살 필레",
      "鸡胸肉片"
    ]
  },
  "Hähnchenteile": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Chicken pieces",
      "Куски курицы",
      "Trozos de pollo",
      "Morceaux de poulet",
      "鶏肉（ぶつ切り）",
      "닭고기(뼈 있는 부위)",
      "鸡块"
    ]
  },
  "Halbbittere Schokolade": {
    "element": "feuer",
    "geschmack": [
      "bitter",
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Bittersweet chocolate",
      "Горько-сладкий шоколад",
      "Chocolate amargo",
      "Chocolat mi-amère",
      "ビターチョコレート",
      "비터 초콜릿",
      "半苦甜巧克力"
    ]
  },
  "Hamburgerbrötchen": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Hamburger buns",
      "Булочки для гамбургеров",
      "Panes de hamburguesa",
      "Pains à hamburger",
      "ハンバーガーバンズ",
      "햄버거 번",
      "汉堡面包"
    ]
  },
  "Hartkäse": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Hard cheese",
      "Твёрдый сыр",
      "Queso curado",
      "Fromage à pâte dure",
      "ハードチーズ",
      "숙성 치즈",
      "硬质奶酪"
    ]
  },
  "Haselnüsse": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Hazelnuts",
      "Фундук",
      "Avellanas",
      "Noisettes",
      "ヘーゼルナッツ",
      "헤이즐넛",
      "榛子"
    ]
  },
  "Haselnusskerne, gemahlen": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Ground hazelnuts",
      "Молотый фундук",
      "Avellanas molidas",
      "Noisettes moulues",
      "ヘーゼルナッツパウダー",
      "헤이즐넛 가루",
      "榛子粉"
    ]
  },
  "Hefe": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Yeast",
      "Дрожжи",
      "Levadura",
      "Levure",
      "イースト",
      "이스트",
      "酵母"
    ]
  },
  "Heidelbeeren": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Blueberries",
      "Черника",
      "Arándanos",
      "Myrtilles",
      "ブルーベリー",
      "블루베리",
      "蓝莓"
    ]
  },
  "Honig": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Honey",
      "Мёд",
      "Miel",
      "Miel",
      "はちみつ",
      "꿀",
      "蜂蜜"
    ]
  },
  "Hühnerbrühe": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Chicken broth",
      "Куриный бульон",
      "Caldo de pollo",
      "Bouillon de volaille",
      "チキンスープ",
      "닭 육수",
      "鸡汤"
    ]
  },
  "Ingwer": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Ginger",
      "Имбирь",
      "Jengibre",
      "Gingembre",
      "生姜",
      "생강",
      "姜"
    ]
  },
  "Joghurt": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Yogurt",
      "Йогурт",
      "Yogur",
      "Yaourt",
      "ヨーグルト",
      "요거트",
      "酸奶"
    ]
  },
  "Joghurt, natur": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Plain yogurt",
      "Натуральный йогурт",
      "Yogur natural",
      "Yaourt nature",
      "プレーンヨーグルト",
      "플레인 요거트",
      "原味酸奶"
    ]
  },
  "Kakao": {
    "element": "feuer",
    "geschmack": [
      "bitter",
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Cocoa powder",
      "Какао",
      "Cacao en polvo",
      "Cacao en poudre",
      "ココアパウダー",
      "코코아 가루",
      "可可粉"
    ]
  },
  "Kakaopulver": {
    "element": "feuer",
    "geschmack": [
      "bitter",
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Cocoa powder",
      "Какао-порошок",
      "Cacao en polvo",
      "Cacao en poudre",
      "ココアパウダー",
      "코코아 파우더",
      "可可粉"
    ]
  },
  "kaltes osmose Wasser": {
    "element": "",
    "geschmack": [],
    "thermik": "kalt",
    "namen": [
      "cold osmosis water",
      "холодная вода осмос",
      "agua de ósmosis fría",
      "eau d'osmose froide",
      "冷たいオスモス水",
      "차가운 오스모스 물",
      "冷水（净水）"
    ]
  },
  "Kapern": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "salzig"
    ],
    "thermik": "warm",
    "namen": [
      "Capers",
      "Каперсы",
      "Alcaparras",
      "Câpres",
      "ケッパー",
      "케이퍼",
      "刺山柑"
    ]
  },
  "Kardamom": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Cardamom",
      "Кардамон",
      "Cardamomo",
      "Cardamome",
      "カルダモン",
      "카다몬",
      "小豆蔻"
    ]
  },
  "Karotten": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Carrots",
      "Морковь",
      "Zanahorias",
      "Carottes",
      "にんじん",
      "당근",
      "胡萝卜"
    ]
  },
  "Kartoffelmehl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Potato starch",
      "Картофельный крахмал",
      "Fécula de patata",
      "Fécule de pomme de terre",
      "片栗粉",
      "감자 전분",
      "土豆淀粉"
    ]
  },
  "Kartoffeln": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Potatoes",
      "Картофель",
      "Patatas",
      "Pommes de terre",
      "じゃがいも",
      "감자",
      "土豆"
    ]
  },
  "Kichererbsenmehl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Chickpea flour",
      "Нутовая мука",
      "Harina de garbanzos",
      "Farine de pois chiches",
      "ひよこ豆粉",
      "병아리콩 가루",
      "鹰嘴豆粉"
    ]
  },
  "Kirschkonfitüre": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Cherry jam",
      "Вишнёвый джем",
      "Mermelada de cereza",
      "Confiture de cerises",
      "チェリージャム",
      "체리 잼",
      "樱桃果酱"
    ]
  },
  "Kirschwasser": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Kirsch (cherry brandy)",
      "Киршвассер",
      "Kirsch",
      "Kirsch",
      "キルシュヴァッサー",
      "키르슈",
      "樱桃白兰地"
    ]
  },
  "Knoblauch": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Garlic",
      "Чеснок",
      "Ajo",
      "Ail",
      "にんにく",
      "마늘",
      "大蒜"
    ]
  },
  "Knoblauchzehen": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Garlic cloves",
      "Зубчики чеснока",
      "Dientes de ajo",
      "Gousses d'ail",
      "にんにく（ひとかけ）",
      "마늘 쪽",
      "蒜瓣"
    ]
  },
  "Kochschinken": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "neutral",
    "namen": [
      "Cooked ham",
      "Варёная ветчина",
      "Jamón cocido",
      "Jambon cuit",
      "ハム（ボイル）",
      "햄(가열용)",
      "熟火腿"
    ]
  },
  "Kokosfett": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Coconut fat",
      "Кокосовый жир",
      "Grasa de coco",
      "Graisse de coco",
      "ココナッツファット",
      "코코넛 오일(고형)",
      "椰子脂"
    ]
  },
  "Kokosmilch": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Coconut milk",
      "Кокосовое молоко",
      "Leche de coco",
      "Lait de coco",
      "ココナッツミルク",
      "코코넛 밀크",
      "椰浆"
    ]
  },
  "Kokosraspel": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Shredded coconut",
      "Кокосовая стружка",
      "Coco rallado",
      "Noix de coco râpée",
      "ココナッツフレーク",
      "코코넛 후레이크",
      "椰蓉"
    ]
  },
  "Kopfsalat": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Head lettuce",
      "Латук",
      "Lechuga",
      "Laitue pommée",
      "リーフレタス",
      "양상추",
      "生菜"
    ]
  },
  "Koriander": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Coriander",
      "Кориандр",
      "Cilantro",
      "Coriandre",
      "コリアンダー",
      "고수",
      "香菜"
    ]
  },
  "Koriander, frisch": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Fresh coriander",
      "Свежая кинза",
      "Cilantro fresco",
      "Coriandre frais",
      "パクチー",
      "고수",
      "香菜"
    ]
  },
  "Kresse": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "kuehl",
    "namen": [
      "Cress",
      "Кресс-салат",
      "Berro",
      "Cresson",
      "クレス",
      "크레스(냉이)",
      "西洋菜苗"
    ]
  },
  "Kreuzkümmel": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Cumin",
      "Зира (кумин)",
      "Comino",
      "Cumin",
      "クミン",
      "커민",
      "孜然"
    ]
  },
  "Kümmel": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Caraway",
      "Тмин",
      "Alcaravea",
      "Carvi",
      "キャラウェイ",
      "카라웨이",
      "葛缕子"
    ]
  },
  "Kurkuma": {
    "element": "feuer",
    "geschmack": [
      "bitter",
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Turmeric",
      "Куркума",
      "Cúrcuma",
      "Curcuma",
      "ターメリック",
      "강황",
      "姜黄"
    ]
  },
  "Kuvertüre": {
    "element": "feuer",
    "geschmack": [
      "bitter",
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Couverture chocolate",
      "Кувертюра",
      "Cobertura de chocolate",
      "Couverture",
      "クーベルチュール",
      "쿠베르튀르",
      "库维图尔巧克力"
    ]
  },
  "Lachs, gebeizt": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Cured salmon",
      "Слабосолёный лосось",
      "Salmón marinado",
      "Saumon mariné",
      "グラブラックス",
      "그라브락스",
      "腌渍三文鱼"
    ]
  },
  "Langkornreis": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Long-grain rice",
      "Длиннозёрный рис",
      "Arroz de grano largo",
      "Riz long",
      "長粒米",
      "장립종 쌀",
      "长粒米"
    ]
  },
  "Lauchzwiebeln": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Spring onions",
      "Зелёный лук",
      "Cebolletas",
      "Oignons nouveaux",
      "青ねぎ",
      "대파",
      "香葱"
    ]
  },
  "Lorbeerblätter": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Bay leaves",
      "Лавровые листья",
      "Hojas de laurel",
      "Feuilles de laurier",
      "ローリエ",
      "월계수 잎",
      "香叶"
    ]
  },
  "Maismehl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Cornmeal",
      "Кукурузная мука",
      "Harina de maíz",
      "Farine de maïs",
      "コーンミール",
      "옥수수가루",
      "玉米粉"
    ]
  },
  "Mandelblättchen": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Almond flakes",
      "Миндальные лепестки",
      "Hojuelas de almendra",
      "Amandes effilées",
      "スライスアーモンド",
      "슬라이스 아몬드",
      "杏仁片"
    ]
  },
  "Mandeldrink": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Almond milk",
      "Миндальное молоко",
      "Bebida de almendras",
      "Lait d'amande",
      "アーモンドミルク",
      "아몬드밀크",
      "杏仁奶"
    ]
  },
  "Mandeln": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Almonds",
      "Миндаль",
      "Almendras",
      "Amandes",
      "アーモンド",
      "아몬드",
      "杏仁"
    ]
  },
  "Mandeln, ganz": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Whole almonds",
      "Целый миндаль",
      "Almendras enteras",
      "Amandes entières",
      "アーモンド（ホール）",
      "아몬드(통)",
      "杏仁（整颗）"
    ]
  },
  "Mandeln, gemahlen": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Ground almonds",
      "Молотый миндаль",
      "Almendras molidas",
      "Poudre d'amandes",
      "アーモンドプードル",
      "아몬드 가루",
      "杏仁粉"
    ]
  },
  "Mango": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Mango",
      "Манго",
      "Mango",
      "Mangue",
      "マンゴー",
      "망고",
      "芒果"
    ]
  },
  "Margarine": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Margarine",
      "Маргарин",
      "Margarina",
      "Margarine",
      "マーガリン",
      "마가린",
      "人造黄油"
    ]
  },
  "Marzipian Rohmasse": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Raw marzipan",
      "Марципановая масса",
      "Masa de mazapán cruda",
      "Pâte de massepain brute",
      "マジパン生地",
      "마지팬 반죽",
      "杏仁膏坯"
    ]
  },
  "Mayonaise": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Mayonnaise",
      "Майонез",
      "Mayonesa",
      "Mayonnaise",
      "マヨネーズ",
      "마요네즈",
      "蛋黄酱"
    ]
  },
  "Meersalz": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "kalt",
    "namen": [
      "Sea salt",
      "Морская соль",
      "Sal marina",
      "Sel de mer",
      "海塩",
      "바다소금",
      "海盐"
    ]
  },
  "Mehl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Flour",
      "Мука",
      "Harina",
      "Farine",
      "小麦粉",
      "밀가루",
      "面粉"
    ]
  },
  "Milch": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Milk",
      "Молоко",
      "Leche",
      "Lait",
      "牛乳",
      "우유",
      "牛奶"
    ]
  },
  "Mini Romana": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Mini romaine lettuce",
      "Мини-салат романо",
      "Lechuga romana mini",
      "Laitue romaine mini",
      "ミニロメインレタス",
      "미니 로메인",
      "迷你罗马生菜"
    ]
  },
  "Minze, frisch": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "kuehl",
    "namen": [
      "Mint, fresh",
      "Мята, свежая",
      "Menta fresca",
      "Menthe fraîche",
      "ミント（生）",
      "민트(신선한 것)",
      "新鲜薄荷"
    ]
  },
  "mittelgroße Tomaten": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Medium tomatoes",
      "Помидоры среднего размера",
      "Tomates medianas",
      "Tomates moyennes",
      "中くらいのトマト",
      "중간 크기 토마토",
      "中等大小番茄"
    ]
  },
  "Möhren": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Carrots",
      "Морковь",
      "Zanahorias",
      "Carottes",
      "にんじん",
      "당근",
      "胡萝卜"
    ]
  },
  "Mozarella": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Mozzarella",
      "Моцарелла",
      "Mozzarella",
      "Mozzarella",
      "モッツァレラ",
      "모차렐라",
      "马苏里拉奶酪"
    ]
  },
  "Mozzarella": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Mozzarella",
      "Моцарелла",
      "Mozzarella",
      "Mozzarella",
      "モッツァレラ",
      "모차렐라",
      "马苏里拉奶酪"
    ]
  },
  "Muskatnuss, gemahlen": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Ground nutmeg",
      "Молотый мускатный орех",
      "Nuez moscada molida",
      "Muscade moulue",
      "ナツメグパウダー",
      "육두구 가루",
      "肉豆蔻粉"
    ]
  },
  "Natron": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Baking soda",
      "Пищевая сода",
      "Bicarbonato",
      "Bicarbonate de soude",
      "重曹",
      "베이킹 소다",
      "小苏打"
    ]
  },
  "Natron (15g)": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Baking soda (15 g)",
      "Пищевая сода (15 г)",
      "Bicarbonato (15 g)",
      "Bicarbonate de soude (15 g)",
      "重曹（15g）",
      "베이킹 소다(15g)",
      "小苏打（15克）"
    ]
  },
  "Nelken": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "heiss",
    "namen": [
      "Cloves",
      "Гвоздика",
      "Clavos de olor",
      "Clous de girofle",
      "クローブ",
      "정향(클로브)",
      "丁香"
    ]
  },
  "Nüsse (gemahlen)": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Ground nuts",
      "Молотые орехи",
      "Frutos secos molidos",
      "Noix moulues",
      "ナッツ（挽き割り）",
      "갈은 견과류",
      "磨碎的坚果"
    ]
  },
  "Öl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Oil",
      "Масло",
      "Aceite",
      "Huile",
      "油",
      "식용유",
      "油"
    ]
  },
  "Okras": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Okra",
      "Окра",
      "Okra",
      "Gombo",
      "オクラ",
      "오크라",
      "秋葵"
    ]
  },
  "Oliven": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "kuehl",
    "namen": [
      "Olives",
      "Оливки",
      "Aceitunas",
      "Olives",
      "オリーブ",
      "올리브",
      "橄榄"
    ]
  },
  "Oliven, grün": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "kuehl",
    "namen": [
      "Green olives",
      "Зелёные оливки",
      "Aceitunas verdes",
      "Olives vertes",
      "グリーンオリーブ",
      "그린 올리브",
      "绿橄榄"
    ]
  },
  "Oliven, schwarz": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "kuehl",
    "namen": [
      "Black olives",
      "Чёрные оливки",
      "Aceitunas negras",
      "Olives noires",
      "ブラックオリーブ",
      "블랙 올리브",
      "黑橄榄"
    ]
  },
  "Olivenöl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Olive oil",
      "Оливковое масло",
      "Aceite de oliva",
      "Huile d'olive",
      "オリーブオイル",
      "올리브오일",
      "橄榄油"
    ]
  },
  "Orangen": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Oranges",
      "Апельсины",
      "Naranjas",
      "Oranges",
      "オレンジ",
      "오렌지",
      "橙子"
    ]
  },
  "Osmose Wasser": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Osmosis water",
      "Вода осмос",
      "Agua de ósmosis",
      "Eau d'osmose",
      "オスモス水",
      "오스모스 물",
      "净水"
    ]
  },
  "Paprika, edelsüß": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Paprika, sweet",
      "Сладкая паприка",
      "Pimentón dulce",
      "Paprika doux",
      "パプリカパウダー（甘口）",
      "파프리카 가루(단맛)",
      "甜椒粉"
    ]
  },
  "Paprikapulver": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Paprika powder",
      "Паприка (молотая)",
      "Pimentón dulce",
      "Paprika moulu",
      "パプリカパウダー",
      "파프리카 가루",
      "红椒粉"
    ]
  },
  "Parmaschinken": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "neutral",
    "namen": [
      "Parma ham",
      "Пармская ветчина",
      "Jamón de Parma",
      "Jambon de Parme",
      "パルマハム",
      "파르마 햄",
      "帕尔玛火腿"
    ]
  },
  "Parmesan": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Parmesan",
      "Пармезан",
      "Parmesano",
      "Parmesan",
      "パルメザンチーズ",
      "파르메산 치즈",
      "帕玛森奶酪"
    ]
  },
  "Pesto alla Genovese": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Genovese basil pesto",
      "Песто генуэзский",
      "Pesto genovés",
      "Pesto génois",
      "ジェノベーゼペースト",
      "제노베제 페스토",
      "热那亚青酱"
    ]
  },
  "Petersilie": {
    "element": "metall",
    "geschmack": [
      "suess",
      "scharf"
    ],
    "thermik": "neutral",
    "namen": [
      "Parsley",
      "Петрушка",
      "Perejil",
      "Persil",
      "パセリ",
      "파슬리",
      "欧芹"
    ]
  },
  "Petersilie, frisch": {
    "element": "metall",
    "geschmack": [
      "suess",
      "scharf"
    ],
    "thermik": "neutral",
    "namen": [
      "Parsley, fresh",
      "Петрушка, свежая",
      "Perejil fresco",
      "Persil frais",
      "パセリ（生）",
      "파슬리(신선한 것)",
      "新鲜欧芹"
    ]
  },
  "Pfeffer": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "heiss",
    "namen": [
      "Pepper",
      "Перец",
      "Pimienta",
      "Poivre",
      "こしょう",
      "후추",
      "胡椒"
    ]
  },
  "Pfeffer, schwarz": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "heiss",
    "namen": [
      "Black pepper",
      "Перец чёрный",
      "Pimienta negra",
      "Poivre noir",
      "黒こしょう",
      "후추(검은 것)",
      "黑胡椒"
    ]
  },
  "Pfeffer, weiß": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "heiss",
    "namen": [
      "White pepper",
      "Белый перец",
      "Pimienta blanca",
      "Poivre blanc",
      "白こしょう",
      "흰 후추",
      "白胡椒"
    ]
  },
  "Pickles und Chutneys": {
    "element": "",
    "geschmack": [],
    "thermik": "",
    "namen": [
      "Pickles and chutneys",
      "Соленья и чатни",
      "Encurtidos y chutneys",
      "Pickles et chutneys",
      "ピクルスとチャツネ",
      "피클과 처트니",
      "腌菜与酸辣酱"
    ]
  },
  "Pinienkerne": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Pine nuts",
      "Кедровые орехи",
      "Piñones",
      "Pignons",
      "松の実",
      "잣",
      "松子"
    ]
  },
  "Pistazien": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Pistachios",
      "Фисташки",
      "Pistachos",
      "Pistaches",
      "ピスタチオ",
      "피스타치오",
      "开心果"
    ]
  },
  "Pistazien, gehackt": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Chopped pistachios",
      "Фисташки, рубленые",
      "Pistachos picados",
      "Pistaches hachées",
      "ピスタチオ（刻み）",
      "피스타치오(다진 것)",
      "切碎的开心果"
    ]
  },
  "Puderzucker": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Powdered sugar",
      "Сахарная пудра",
      "Azúcar glas",
      "Sucre glace",
      "粉砂糖",
      "슈가파우더",
      "糖粉"
    ]
  },
  "Quark": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Quark",
      "Творог",
      "Quark (requesón)",
      "Quark (fromage blanc)",
      "クォーク",
      "크바르크(독일식 코티지치즈)",
      "夸克奶酪（德式酸凝乳酪）"
    ]
  },
  "Quark 40 % Fett i.Tr.": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Quark 40 % fat in dry matter",
      "Творог 40 % жирности в сухом веществе",
      "Quark 40 % de grasa en extracto seco",
      "Quark 40 % de matière grasse sur extrait sec",
      "クォーク（乾燥物中脂肪40%）",
      "크바르크(건조물 기준 지방 40%)",
      "夸克奶酪（干物质脂肪含量40%）"
    ]
  },
  "Räucherlachs": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "warm",
    "namen": [
      "Smoked salmon",
      "Копчёный лосось",
      "Salmón ahumado",
      "Saumon fumé",
      "スモークサーモン",
      "훈제 연어",
      "烟熏三文鱼"
    ]
  },
  "Reis": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Rice",
      "Рис",
      "Arroz",
      "Riz",
      "米",
      "쌀",
      "大米"
    ]
  },
  "Rhabarber": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Rhubarb",
      "Ревень",
      "Ruibarbo",
      "Rhubarbe",
      "ルバーブ",
      "루바브",
      "大黄"
    ]
  },
  "Roggenmehl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Rye flour",
      "Ржаная мука",
      "Harina de centeno",
      "Farine de seigle",
      "ライ麦粉",
      "호밀가루",
      "黑麦粉"
    ]
  },
  "Rohrzucker": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Cane sugar",
      "Тростниковый сахар",
      "Azúcar de caña",
      "Sucre de canne",
      "きび糖",
      "사탕수수설탕",
      "蔗糖"
    ]
  },
  "Romana Salatherzen": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Romaine lettuce hearts",
      "Сердца салата ромэн",
      "Corazones de lechuga romana",
      "Cœurs de romaine",
      "ロメインレタスの芯",
      "로메인 심부",
      "罗马生菜心"
    ]
  },
  "Romatomaten": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Roma tomatoes",
      "Помидоры «рома»",
      "Tomates Roma",
      "Tomates Roma",
      "ロマトマト",
      "로마토마토",
      "罗马番茄"
    ]
  },
  "Rosenpaprika": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Sweet paprika",
      "Сладкая молотая паприка",
      "Pimentón dulce molido",
      "Paprika doux moulu",
      "甘口パプリカパウダー",
      "파프리카 가루(단맛)",
      "甜椒粉"
    ]
  },
  "Rosinen": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "warm",
    "namen": [
      "Raisins",
      "Изюм",
      "Pasas",
      "Raisins secs",
      "レーズン",
      "건포도",
      "葡萄干"
    ]
  },
  "Rosmarin, frisch": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Fresh rosemary",
      "Свежий розмарин",
      "Romero fresco",
      "Romarin frais",
      "生ローズマリー",
      "생 로즈마리",
      "新鲜迷迭香"
    ]
  },
  "Rucola": {
    "element": "feuer",
    "geschmack": [
      "bitter"
    ],
    "thermik": "kuehl",
    "namen": [
      "Rocket",
      "Руккола",
      "Rúcula",
      "Roquette",
      "ルッコラ",
      "루콜라",
      "芝麻菜"
    ]
  },
  "Rum": {
    "element": "",
    "geschmack": [],
    "thermik": "warm",
    "namen": [
      "Rum",
      "Ром",
      "Ron",
      "Rhum",
      "ラム酒",
      "럼주",
      "朗姆酒"
    ]
  },
  "Sahnequark": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Cream quark",
      "Творог со сливками",
      "Quark con nata",
      "Quark à la crème",
      "クリーム入りクォーク",
      "크림 크바르크",
      "奶油夸克"
    ]
  },
  "Salami": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "warm",
    "namen": [
      "Salami",
      "Салами",
      "Salami",
      "Salami",
      "サラミ",
      "살라미",
      "萨拉米香肠"
    ]
  },
  "Salat-Mix": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Mixed salad greens",
      "Салатная смесь",
      "Mezclum de ensalada",
      "Mesclun",
      "サラダミックス",
      "샐러드 믹스",
      "混合沙拉菜"
    ]
  },
  "Salatgurken": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kalt",
    "namen": [
      "Salad cucumbers",
      "Огурцы",
      "Pepinos",
      "Concombres",
      "きゅうり",
      "오이",
      "黄瓜"
    ]
  },
  "Salz": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "kalt",
    "namen": [
      "Salt",
      "Соль",
      "Sal",
      "Sel",
      "塩",
      "소금",
      "盐"
    ]
  },
  "San apart": {
    "element": "",
    "geschmack": [],
    "thermik": "",
    "namen": [
      "Whipped-cream stabilizer (San apart)",
      "Стабилизатор для сливок (San apart)",
      "Estabilizante para nata (San apart)",
      "Stabilisant pour chantilly (San apart)",
      "泡立て安定剤（サンアパート）",
      "샌어파트(휘핑 안정제)",
      "打发稳定剂"
    ]
  },
  "Sauerkirschen": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Sour cherries",
      "Вишня",
      "Cerezas ácidas",
      "Griottes",
      "サワーチェリー",
      "신체리",
      "酸樱桃"
    ]
  },
  "Sauerkirschen (à 720 g)": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Sour cherries (720 g jar)",
      "Кислая вишня (банка 720 г)",
      "Cerezas ácidas (720 g)",
      "Cerises acides (bocal 720 g)",
      "サワーチェリー（瓶720g）",
      "새콤한 체리(720g)",
      "酸樱桃（罐装720克）"
    ]
  },
  "Saure Sahne": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Sour cream",
      "Сметана (кислая)",
      "Nata agria",
      "Crème aigre",
      "サワークリーム",
      "사워 크림",
      "酸奶油"
    ]
  },
  "Schalotten": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Shallots",
      "Шалот",
      "Chalotas",
      "Échalotes",
      "エシャロット",
      "샬롯",
      "红葱头"
    ]
  },
  "Schlag Sahne": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Whipping cream",
      "Сливки для взбивания",
      "Nata para montar",
      "Crème à fouetter",
      "生クリーム",
      "휘핑 크림",
      "鲜奶油"
    ]
  },
  "Schlagsahne": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Whipping cream",
      "Сливки для взбивания",
      "Nata para montar",
      "Crème à fouetter",
      "生クリーム（ホイップ用）",
      "휘핑크림",
      "淡奶油"
    ]
  },
  "Schmand": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Schmand (sour cream)",
      "Сметана",
      "Crema agria espesa",
      "Crème fraîche épaisse",
      "スメタナ",
      "스메타나",
      "斯美塔那"
    ]
  },
  "Schnittlauch": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Chives",
      "Лук-резанец",
      "Cebollino",
      "Ciboulette",
      "チャイブ",
      "차이브",
      "细香葱"
    ]
  },
  "Schnittlauch, frisch": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Fresh chives",
      "Свежий лук-резанец",
      "Cebollino fresco",
      "Ciboulette fraîche",
      "生チャイブ",
      "생 차이브",
      "新鲜细香葱"
    ]
  },
  "Schwarze Senfkörner": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Black mustard seeds",
      "Семена чёрной горчицы",
      "Semillas de mostaza negra",
      "Graines de moutarde noire",
      "ブラックマスタードシード",
      "검은 머스터드 씨",
      "黑芥末籽"
    ]
  },
  "Schwarzkümmelsamen": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Nigella seeds",
      "Семена чернушки",
      "Semillas de niguela",
      "Graines de nigelle",
      "ニゲラシード",
      "니겔라 씨",
      "黑种草籽"
    ]
  },
  "Senf": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Mustard",
      "Горчица",
      "Mostaza",
      "Moutarde",
      "マスタード",
      "머스터드",
      "芥末酱"
    ]
  },
  "Senfmehl": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Mustard flour",
      "Горчичная мука",
      "Harina de mostaza",
      "Farine de moutarde",
      "マスタードパウダー",
      "머스터드 가루",
      "芥末粉"
    ]
  },
  "Serranoschinken": {
    "element": "wasser",
    "geschmack": [
      "salzig"
    ],
    "thermik": "neutral",
    "namen": [
      "Serrano ham",
      "Ветчина серрано",
      "Jamón serrano",
      "Jambon serrano",
      "セラーノハム",
      "세라노 햄",
      "塞拉诺火腿"
    ]
  },
  "Sonnenblumenöl": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Sunflower oil",
      "Подсолнечное масло",
      "Aceite de girasol",
      "Huile de tournesol",
      "ひまわり油",
      "해바라기씨유",
      "葵花籽油"
    ]
  },
  "Speisestärke": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Cornstarch",
      "Кукурузный крахмал",
      "Maicena",
      "Maïzena",
      "片栗粉",
      "감자전분",
      "土豆淀粉"
    ]
  },
  "Stärke": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Starch",
      "Крахмал",
      "Almidón",
      "Fécule",
      "でんぷん",
      "전분",
      "淀粉"
    ]
  },
  "Staudensellerie": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Celery",
      "Черешковый сельдерей",
      "Apio en rama",
      "Céleri branche",
      "セロリ",
      "샐러리",
      "芹菜"
    ]
  },
  "Strauchtomaten": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Vine tomatoes",
      "Помидоры на ветке",
      "Tomates en rama",
      "Tomates en grappe",
      "房付きトマト",
      "송이토마토",
      "串番茄"
    ]
  },
  "Süßer Senf": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Sweet mustard",
      "Сладкая горчица",
      "Mostaza dulce",
      "Moutarde douce",
      "スイートマスタード",
      "스위트 머스터드",
      "甜味芥末"
    ]
  },
  "Süßkartoffeln": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Sweet potatoes",
      "Батат",
      "Boniatos",
      "Patates douces",
      "さつまいも",
      "고구마",
      "红薯"
    ]
  },
  "Tamarinde": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Tamarind",
      "Тамаринд",
      "Tamarindo",
      "Tamarin",
      "タマリンド",
      "타마린드",
      "酸角"
    ]
  },
  "Thunfisch im eigenen Saft": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Tuna in its own juice",
      "Тунец в собственном соку",
      "Atún al natural",
      "Thon au naturel",
      "ツナ（水煮）",
      "참치 통조림(물)",
      "水浸金枪鱼"
    ]
  },
  "Thymiansamen": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Thyme seeds",
      "Семена тимьяна",
      "Semillas de tomillo",
      "Graines de thym",
      "タイムシード",
      "타임 씨",
      "百里香籽"
    ]
  },
  "Toast": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Toast bread",
      "Тостовый хлеб",
      "Pan de molde",
      "Pain de mie",
      "食パン",
      "식빵",
      "吐司面包"
    ]
  },
  "Toastbrot": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Sandwich bread",
      "Хлеб для тостов",
      "Pan de molde",
      "Pain de mie",
      "トースト用食パン",
      "식빵",
      "吐司面包"
    ]
  },
  "Tomaten": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Tomatoes",
      "Помидоры",
      "Tomates",
      "Tomates",
      "トマト",
      "토마토",
      "番茄"
    ]
  },
  "Tomaten (Dose)": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Tomatoes (canned)",
      "Помидоры (консервированные)",
      "Tomates (en lata)",
      "Tomates (en conserve)",
      "トマト（缶詰）",
      "토마토(통조림)",
      "番茄（罐头）"
    ]
  },
  "Tomaten, getrocknet": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Sun-dried tomatoes",
      "Вяленые помидоры",
      "Tomates secos",
      "Tomates séchées",
      "ドライトマト",
      "말린 토마토",
      "干番茄"
    ]
  },
  "Tomatenmark": {
    "element": "holz",
    "geschmack": [
      "sauer",
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Tomato paste",
      "Томатная паста",
      "Pasta de tomate",
      "Concentré de tomates",
      "トマトペースト",
      "토마토 페이스트",
      "番茄膏"
    ]
  },
  "Tortenguss": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Cake glaze",
      "Глазурь для торта",
      "Brillante para tarta",
      "Nappage pour gâteau",
      "ケーキのつやだれ",
      "케이크 글레이즈",
      "蛋糕淋面"
    ]
  },
  "Trockenhefe": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Dry yeast",
      "Сухие дрожжи",
      "Levadura seca",
      "Levure sèche",
      "ドライイースト",
      "드라이 이스트",
      "干酵母"
    ]
  },
  "Vanillepudding Pulver": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Vanilla pudding mix",
      "Порошок для ванильного пудинга",
      "Polvo para pudin de vainilla",
      "Poudre pour flan à la vanille",
      "バニラプリン粉",
      "바닐라 푸딩 가루",
      "香草布丁粉"
    ]
  },
  "Vanillesoßenpulver": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Vanilla sauce powder",
      "Порошок ванильного соуса",
      "Polvo para salsa de vainilla",
      "Préparation pour sauce vanille",
      "バニラソースミックス",
      "바닐라소스 파우더",
      "香草酱粉"
    ]
  },
  "Vanillezucker": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Vanilla sugar",
      "Ванильный сахар",
      "Azúcar de vainilla",
      "Sucre vanillé",
      "バニラシュガー",
      "바닐라 슈가",
      "香草糖"
    ]
  },
  "Vanillinzucker": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Vanillin sugar",
      "Ванильный сахар",
      "Azúcar de vainillina",
      "Sucre vanillé",
      "バニリンシュガー",
      "바닐린 슈가",
      "香兰素糖"
    ]
  },
  "Walnüsse": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Walnuts",
      "Грецкие орехи",
      "Nueces",
      "Noix",
      "クルミ",
      "호두",
      "核桃"
    ]
  },
  "Walnüsse (gemahlen)": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Ground walnuts",
      "Молотые грецкие орехи",
      "Nueces molidas",
      "Noix moulues",
      "クルミ（挽き割り）",
      "갈은 호두",
      "磨碎的核桃"
    ]
  },
  "warmes Osmose-Wasser": {
    "element": "",
    "geschmack": [],
    "thermik": "warm",
    "namen": [
      "warm osmosis water",
      "тёплая вода осмос",
      "agua de ósmosis templada",
      "eau d'osmose tiède",
      "温かいオスモス水",
      "미지근한 오스모스 물",
      "温水（净水）"
    ]
  },
  "warmes Wasser": {
    "element": "",
    "geschmack": [],
    "thermik": "warm",
    "namen": [
      "Warm water",
      "Тёплая вода",
      "Agua templada",
      "Eau tiède",
      "ぬるま湯",
      "따뜻한 물",
      "温水"
    ]
  },
  "Wasser": {
    "element": "",
    "geschmack": [],
    "thermik": "neutral",
    "namen": [
      "Water",
      "Вода",
      "Agua",
      "Eau",
      "水",
      "물",
      "水"
    ]
  },
  "Weißbrot": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "White bread",
      "Белый хлеб",
      "Pan blanco",
      "Pain blanc",
      "白いパン",
      "흰 식빵",
      "白面包"
    ]
  },
  "weiße Bohnen in der Dose": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "white beans (canned)",
      "белая фасоль консервированная",
      "alubias blancas en lata",
      "haricots blancs en conserve",
      "白いんげん豆（缶詰）",
      "흰강낭콩(통조림)",
      "白芸豆（罐头）"
    ]
  },
  "weißer Rum": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "white rum",
      "белый ром",
      "ron blanco",
      "rhum blanc",
      "ホワイトラム",
      "화이트 럼",
      "白朗姆酒"
    ]
  },
  "Weißweinessig": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "White wine vinegar",
      "Белый винный уксус",
      "Vinagre de vino blanco",
      "Vinaigre de vin blanc",
      "白ワインビネガー",
      "화이트와인 식초",
      "白葡萄酒醋"
    ]
  },
  "Weizenmehl, Type 405": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Wheat flour, Type 405",
      "Пшеничная мука, тип 405",
      "Harina de trigo, tipo 405",
      "Farine de blé, type 405",
      "薄力粉（タイプ405）",
      "밀가루(박력분, 405호)",
      "小麦面粉（405号）"
    ]
  },
  "Wildpreiselbeeren": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Lingonberries",
      "Брусника",
      "Arándanos rojos",
      "Airelles",
      "リングンベリー",
      "링곤베리",
      "越橘"
    ]
  },
  "Worchestersauce": {
    "element": "",
    "geschmack": [
      "sauer",
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Worcestershire sauce",
      "Ворчестерский соус",
      "Salsa Worcestershire",
      "Sauce Worcestershire",
      "ウスターソース",
      "우스터 소스",
      "伍斯特酱"
    ]
  },
  "Wraps": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Wraps",
      "Тортильи",
      "Wraps",
      "Wraps de trigo",
      "トルティーヤ",
      "토르티야",
      "卷饼皮"
    ]
  },
  "Zimt": {
    "element": "metall",
    "geschmack": [
      "suess",
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Cinnamon",
      "Корица",
      "Canela",
      "Cannelle",
      "シナモン",
      "시나몬",
      "肉桂"
    ]
  },
  "Zimtrinde": {
    "element": "metall",
    "geschmack": [
      "suess",
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Cinnamon bark",
      "Коричная палочка",
      "Ramas de canela",
      "Bâton de cannelle",
      "シナモンスティック",
      "시나몬 스틱",
      "桂皮"
    ]
  },
  "Zitrone": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Lemon",
      "Лимон",
      "Limón",
      "Citron",
      "レモン",
      "레몬",
      "柠檬"
    ]
  },
  "Zitronen": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Lemons",
      "Лимоны",
      "Limones",
      "Citrons",
      "レモン",
      "레몬",
      "柠檬"
    ]
  },
  "Zitronenaroma": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Lemon flavouring",
      "Лимонный ароматизатор",
      "Aroma de limón",
      "Arôme de citron",
      "レモン香料",
      "레몬 향료",
      "柠檬香精"
    ]
  },
  "Zitronensaft": {
    "element": "holz",
    "geschmack": [
      "sauer"
    ],
    "thermik": "kuehl",
    "namen": [
      "Lemon juice",
      "Лимонный сок",
      "Zumo de limón",
      "Jus de citron",
      "レモン汁",
      "레몬즙",
      "柠檬汁"
    ]
  },
  "Zucchini": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "kuehl",
    "namen": [
      "Zucchini",
      "Цукини",
      "Calabacines",
      "Courgettes",
      "ズッキーニ",
      "주키니호박",
      "西葫芦"
    ]
  },
  "Zucker": {
    "element": "erde",
    "geschmack": [
      "suess"
    ],
    "thermik": "neutral",
    "namen": [
      "Sugar",
      "Сахар",
      "Azúcar",
      "Sucre",
      "砂糖",
      "설탕",
      "糖"
    ]
  },
  "Zwiebeln": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Onions",
      "Репчатый лук",
      "Cebollas",
      "Oignons",
      "玉ねぎ",
      "양파",
      "洋葱"
    ]
  },
  "Zwiebeln, gelb": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Yellow onions",
      "Жёлтый лук",
      "Cebollas amarillas",
      "Oignons jaunes",
      "黄玉ねぎ",
      "양파",
      "黄洋葱"
    ]
  },
  "Zwiebeln, rot": {
    "element": "metall",
    "geschmack": [
      "scharf"
    ],
    "thermik": "warm",
    "namen": [
      "Red onions",
      "Красный лук",
      "Cebollas rojas",
      "Oignons rouges",
      "赤玉ねぎ",
      "적양파",
      "红洋葱"
    ]
  }
};
