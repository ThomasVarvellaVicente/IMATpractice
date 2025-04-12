// Exam questions (from 2024 IMAT only for now)
const imatQuestions = [
  {
    id: 1,
    year: 2024,
    subject: "gk",
    question: "Who is the author of the famous novel To the Lighthouse?",
    choices: [
      "Virginia Wolf",
      "Mary Shelley",
      "Jane Austen",
      "Emily Dickinson",
      "Agatha Christie"
    ],
    correctAnswer: "Virginia Wolf"
  },
  {
    id: 2,
    year: 2024,
    subject: "gk",
    question: " Based on historical records, we can say that many ancient societies devised symbols to represent\n" +
        "numbers and solutions to mathematical problems. Although thinkers began to take the first steps\n" +
        "towards mathematics early on, it can be asserted that only with Greek civilisation did this discipline\n" +
        "acquire the abstract and general characteristics that render it distinct and render it a unique science.\n" +
        "It is noteworthy that mathematics evolved into an abstract and general science at a deliberate pace.\n" +
        "Documents from pre-Greek civilisations indicate that solutions to mathematical problems were\n" +
        "confined to specific, tangible cases. These documents convey the impression that mathematical\n" +
        "concepts were communicated sporadically and non-methodically (occasionally even fortuitously),\n" +
        "and were treated as useful information geared towards practical outcomes." +
        "Which of the following CANNOT be inferred from the text about the evolution of mathematics?",
    choices: [
      "Since antiquity, mathematics has been characterized by abstractness and generality.",
      "In antiquity, mathematical notions were not communicated in a methodical manner.",
      "Symbols representing numbers had already been adopted in antiquity.",
      "In antiquity, mathematical notions were geared towards practical outcomes.",
      "The evolution of mathematics has been an extremely slow process."
    ],
    correctAnswer: "Since antiquity, mathematics has been characterized by abstractness and generality."
  },
  {
    id: 3,
    year: 2024,
    subject: "gk",
    question: "Which of the following best completes the sentence: The consequences of the pandemic were...",
    choices: [
      "dramatic, both for public health and for the economy.",
      "not entirely predictable or easily controllable.",
      "devastating, especially in developing countries.",
      "more severe than anticipated by many governments.",
      "limited due to timely preventive measures."
    ],
    correctAnswer: "dramatic, both for public health and for the economy."
  },
  {
    id: 4,
    year: 2024,
    subject: "logic",
    question: "Which statement is logically equivalent to 'If it rains, then I will stay at home'?",
    choices: [
      "If I don’t stay at home, then it didn’t rain.",
      "If it doesn’t rain, then I will stay at home.",
      "If I stay at home, then it rains.",
      "I will stay at home if and only if it rains.",
      "It will rain only if I stay at home."
    ],
    correctAnswer: "If I don’t stay at home, then it didn’t rain."
  },
  {
    id: 5,
    year: 2024,
    subject: "logic",
    question: "A train travels from A to B at 60 km/h and returns at 40 km/h. What is the average speed for the entire journey?",
    choices: [
      "48 km/h",
      "50 km/h",
      "52 km/h",
      "55 km/h",
      "60 km/h"
    ],
    correctAnswer: "48 km/h"
  },
  {
    id: 6,
    year: 2024,
    subject: "logic",
    question: "Which of the following completes the sequence: 2, 6, 12, 20, ___?",
    choices: [
      "30",
      "28",
      "26",
      "24",
      "22"
    ],
    correctAnswer: "30"
  },
  {
    id: 7,
    year: 2024,
    subject: "logic",
    question: "If some doctors are artists and all artists are musicians, what can we conclude?",
    choices: [
      "Some doctors are musicians.",
      "All doctors are musicians.",
      "All musicians are doctors.",
      "Some musicians are not doctors.",
      "Some doctors are not musicians."
    ],
    correctAnswer: "Some doctors are musicians."
  },
  {
    id: 8,
    year: 2024,
    subject: "logic",
    question: "A rectangle has a length of 10 and width of 4. If both dimensions are doubled, what happens to the area?",
    choices: [
      "It quadruples",
      "It doubles",
      "It triples",
      "It becomes eight times greater",
      "It stays the same"
    ],
    correctAnswer: "It quadruples"
  },
  {
    id: 9,
    year: 2024,
    subject: "logic",
    question: "If the first two statements are true, is the final statement true? All lions are mammals. Some mammals are cats. Therefore, some lions are cats.",
    choices: [
      "No",
      "Yes",
      "Only if lions live with cats",
      "Only if mammals are defined differently",
      "Cannot be determined"
    ],
    correctAnswer: "No"
  },
  {
    id: 10,
    year: 2024,
    subject: "biology",
    question: "Which part of the cell is primarily responsible for energy production?",
    choices: [
      "Mitochondria",
      "Nucleus",
      "Ribosome",
      "Lysosome",
      "Endoplasmic reticulum"
    ],
    correctAnswer: "Mitochondria"
  },
  {
    id: 11,
    year: 2024,
    subject: "biology",
    question: "What is the correct order of the stages in mitosis?",
    choices: [
      "Prophase, metaphase, anaphase, telophase",
      "Metaphase, prophase, telophase, anaphase",
      "Anaphase, metaphase, telophase, prophase",
      "Telophase, anaphase, metaphase, prophase",
      "Prophase, anaphase, metaphase, telophase"
    ],
    correctAnswer: "Prophase, metaphase, anaphase, telophase"
  },
  {
    id: 12,
    year: 2024,
    subject: "biology",
    question: "Which of the following best describes the role of enzymes?",
    choices: [
      "They speed up chemical reactions by lowering activation energy.",
      "They raise activation energy to slow down reactions.",
      "They are consumed during the reaction.",
      "They act as structural components in cells.",
      "They store genetic information."
    ],
    correctAnswer: "They speed up chemical reactions by lowering activation energy."
  },
  {
    id: 13,
    year: 2024,
    subject: "biology",
    question: "Which structure is found in plant cells but not animal cells?",
    choices: [
      "Chloroplast",
      "Nucleus",
      "Mitochondria",
      "Ribosome",
      "Plasma membrane"
    ],
    correctAnswer: "Chloroplast"
  },
  {
    id: 14,
    year: 2024,
    subject: "biology",
    question: "Which macromolecule is primarily responsible for storing genetic information?",
    choices: [
      "DNA",
      "RNA",
      "Proteins",
      "Lipids",
      "Carbohydrates"
    ],
    correctAnswer: "DNA"
  },
  {
    id: 15,
    year: 2024,
    subject: "biology",
    question: "What is the function of hemoglobin in red blood cells?",
    choices: [
      "To transport oxygen",
      "To digest nutrients",
      "To carry nerve impulses",
      "To defend against pathogens",
      "To produce energy"
    ],
    correctAnswer: "To transport oxygen"
  },
  {
    id: 16,
    year: 2024,
    subject: "biology",
    question: "Which organelle is responsible for protein synthesis?",
    choices: [
      "Ribosome",
      "Mitochondrion",
      "Golgi apparatus",
      "Lysosome",
      "Nucleus"
    ],
    correctAnswer: "Ribosome"
  },
  {
    id: 17,
    year: 2024,
    subject: "biology",
    question: "Which blood type is the universal donor?",
    choices: [
      "O negative",
      "A positive",
      "AB positive",
      "B negative",
      "O positive"
    ],
    correctAnswer: "O negative"
  },
  {
    id: 18,
    year: 2024,
    subject: "biology",
    question: "Which of the following structures is part of the central nervous system?",
    choices: [
      "Spinal cord",
      "Heart",
      "Liver",
      "Pancreas",
      "Kidney"
    ],
    correctAnswer: "Spinal cord"
  },
  {
    id: 19,
    year: 2024,
    subject: "biology",
    question: "Which of the following processes requires oxygen?",
    choices: [
      "Aerobic respiration",
      "Fermentation",
      "Glycolysis",
      "Photosynthesis light-independent reactions",
      "Anaerobic respiration"
    ],
    correctAnswer: "Aerobic respiration"
  },
  {
    id: 20,
    year: 2024,
    subject: "biology",
    question: "Which hormone regulates blood sugar levels?",
    choices: [
      "Insulin",
      "Adrenaline",
      "Thyroxine",
      "Estrogen",
      "Melatonin"
    ],
    correctAnswer: "Insulin"
  },
  {
    id: 21,
    year: 2024,
    subject: "biology",
    question: "Which of the following diseases is caused by a virus?",
    choices: [
      "Influenza",
      "Tuberculosis",
      "Malaria",
      "Ringworm",
      "Salmonellosis"
    ],
    correctAnswer: "Influenza"
  },
  {
    id: 22,
    year: 2024,
    subject: "biology",
    question: "What is the primary function of white blood cells?",
    choices: [
      "To fight infection",
      "To carry oxygen",
      "To aid in blood clotting",
      "To regulate temperature",
      "To digest food"
    ],
    correctAnswer: "To fight infection"
  },
  {
    id: 23,
    year: 2024,
    subject: "chemistry",
    question: "What is the atomic number of oxygen?",
    choices: [
      "8",
      "6",
      "16",
      "12",
      "10"
    ],
    correctAnswer: "8"
  },
  {
    id: 24,
    year: 2024,
    subject: "chemistry",
    question: "What type of bond is formed when electrons are shared between atoms?",
    choices: [
      "Covalent bond",
      "Ionic bond",
      "Hydrogen bond",
      "Metallic bond",
      "Van der Waals bond"
    ],
    correctAnswer: "Covalent bond"
  },
  {
    id: 25,
    year: 2024,
    subject: "chemistry",
    question: "What is the pH of a neutral solution at 25°C?",
    choices: [
      "7",
      "0",
      "14",
      "5",
      "9"
    ],
    correctAnswer: "7"
  },
  {
    id: 26,
    year: 2024,
    subject: "chemistry",
    question: "Which of the following is a noble gas?",
    choices: [
      "Neon",
      "Nitrogen",
      "Hydrogen",
      "Oxygen",
      "Carbon"
    ],
    correctAnswer: "Neon"
  },
  {
    id: 27,
    year: 2024,
    subject: "chemistry",
    question: "Which particle has a negative charge?",
    choices: [
      "Electron",
      "Proton",
      "Neutron",
      "Alpha particle",
      "Positron"
    ],
    correctAnswer: "Electron"
  },
  {
    id: 28,
    year: 2024,
    subject: "chemistry",
    question: "What is the chemical formula for water?",
    choices: [
      "H₂O",
      "CO₂",
      "O₂",
      "HCl",
      "NaCl"
    ],
    correctAnswer: "H₂O"
  },
  {
    id: 29,
    year: 2024,
    subject: "chemistry",
    question: "Which state of matter has no fixed shape but a definite volume?",
    choices: [
      "Liquid",
      "Solid",
      "Gas",
      "Plasma",
      "Bose-Einstein condensate"
    ],
    correctAnswer: "Liquid"
  },
  {
    id: 30,
    year: 2024,
    subject: "chemistry",
    question: "Which element has the chemical symbol 'Na'?",
    choices: [
      "Sodium",
      "Nitrogen",
      "Neon",
      "Nickel",
      "Niobium"
    ],
    correctAnswer: "Sodium"
  },
  {
    id: 31,
    year: 2024,
    subject: "chemistry",
    question: "What is the main component of natural gas?",
    choices: [
      "Methane",
      "Ethane",
      "Propane",
      "Butane",
      "Carbon dioxide"
    ],
    correctAnswer: "Methane"
  },
  {
    id: 32,
    year: 2024,
    subject: "chemistry",
    question: "What is formed when an acid reacts with a base?",
    choices: [
      "Salt and water",
      "Only salt",
      "Only water",
      "Gas and salt",
      "Acidic solution"
    ],
    correctAnswer: "Salt and water"
  },
  {
    id: 33,
    year: 2024,
    subject: "chemistry",
    question: "What is the molar mass of carbon dioxide (CO₂)?",
    choices: [
      "44 g/mol",
      "12 g/mol",
      "16 g/mol",
      "32 g/mol",
      "28 g/mol"
    ],
    correctAnswer: "44 g/mol"
  },
  {
    id: 34,
    year: 2024,
    subject: "chemistry",
    question: "Which element is a halogen?",
    choices: [
      "Chlorine",
      "Oxygen",
      "Carbon",
      "Sulfur",
      "Sodium"
    ],
    correctAnswer: "Chlorine"
  },
  {
    id: 35,
    year: 2024,
    subject: "physics",
    question: "Which of the following is a scalar quantity?",
    choices: [
      "Temperature",
      "Velocity",
      "Displacement",
      "Force",
      "Acceleration"
    ],
    correctAnswer: "Temperature"
  },
  {
    id: 36,
    year: 2024,
    subject: "physics",
    question: "What is the unit of force in the International System (SI)?",
    choices: [
      "Newton",
      "Joule",
      "Pascal",
      "Watt",
      "Kilogram"
    ],
    correctAnswer: "Newton"
  },
  {
    id: 37,
    year: 2024,
    subject: "physics",
    question: "What physical quantity is measured in watts?",
    choices: [
      "Power",
      "Energy",
      "Force",
      "Work",
      "Pressure"
    ],
    correctAnswer: "Power"
  },
  {
    id: 38,
    year: 2024,
    subject: "physics",
    question: "Which law explains the relationship between voltage, current, and resistance?",
    choices: [
      "Ohm’s law",
      "Newton’s second law",
      "Hooke’s law",
      "Boyle’s law",
      "Kepler’s law"
    ],
    correctAnswer: "Ohm’s law"
  },
  {
    id: 39,
    year: 2024,
    subject: "physics",
    question: "Which of the following is NOT a renewable source of energy?",
    choices: [
      "Coal",
      "Solar",
      "Wind",
      "Hydroelectric",
      "Geothermal"
    ],
    correctAnswer: "Coal"
  },
  {
    id: 40,
    year: 2024,
    subject: "physics",
    question: "What is the acceleration due to gravity on Earth?",
    choices: [
      "9.8 m/s²",
      "9.8 km/s²",
      "10 m/s",
      "8.9 m/s²",
      "1.6 m/s²"
    ],
    correctAnswer: "9.8 m/s²"
  },
  {
    id: 41,
    year: 2024,
    subject: "physics",
    question: "What is the formula for kinetic energy?",
    choices: [
      "½mv²",
      "mv",
      "mgh",
      "F = ma",
      "V = IR"
    ],
    correctAnswer: "½mv²"
  },
  {
    id: 42,
    year: 2024,
    subject: "physics",
    question: "What kind of lens converges parallel rays of light?",
    choices: [
      "Convex lens",
      "Concave lens",
      "Cylindrical lens",
      "Flat lens",
      "Prism"
    ],
    correctAnswer: "Convex lens"
  },
  {
    id: 43,
    year: 2024,
    subject: "physics",
    question: "Which subatomic particle has no charge?",
    choices: [
      "Neutron",
      "Electron",
      "Proton",
      "Positron",
      "Alpha particle"
    ],
    correctAnswer: "Neutron"
  },
  {
    id: 44,
    year: 2024,
    subject: "physics",
    question: "Which of the following is the best conductor of electricity?",
    choices: [
      "Silver",
      "Aluminum",
      "Iron",
      "Copper",
      "Zinc"
    ],
    correctAnswer: "Silver"
  },
  {
    id: 45,
    year: 2024,
    subject: "math",
    question: "What is the derivative of x²?",
    choices: [
      "2x",
      "x",
      "x²",
      "1",
      "0"
    ],
    correctAnswer: "2x"
  },
  {
    id: 46,
    year: 2024,
    subject: "math",
    question: "What is the value of π (pi) approximately?",
    choices: [
      "3.14",
      "2.71",
      "1.61",
      "1.41",
      "3.33"
    ],
    correctAnswer: "3.14"
  },
  {
    id: 47,
    year: 2024,
    subject: "math",
    question: "What is the square root of 144?",
    choices: [
      "12",
      "14",
      "16",
      "10",
      "11"
    ],
    correctAnswer: "12"
  },
  {
    id: 48,
    year: 2024,
    subject: "math",
    question: "If a triangle has sides of length 3, 4, and 5, what type of triangle is it?",
    choices: [
      "Right-angled",
      "Equilateral",
      "Isosceles",
      "Obtuse",
      "Scalene"
    ],
    correctAnswer: "Right-angled"
  },
  {
    id: 49,
    year: 2024,
    subject: "math",
    question: "What is the area of a circle with radius 3?",
    choices: [
      "9π",
      "6π",
      "3π",
      "12π",
      "18π"
    ],
    correctAnswer: "9π"
  },
  {
    id: 50,
    year: 2024,
    subject: "math",
    question: "What is 7 factorial (7!)?",
    choices: [
      "5040",
      "720",
      "120",
      "40320",
      "840"
    ],
    correctAnswer: "5040"
  },
  {
    id: 51,
    year: 2024,
    subject: "math",
    question: "What is the value of the expression 2³ × 3²?",
    choices: [
      "72",
      "36",
      "24",
      "18",
      "12"
    ],
    correctAnswer: "72"
  },
  {
    id: 52,
    year: 2024,
    subject: "math",
    question: "What is the sum of the interior angles of a hexagon?",
    choices: [
      "720°",
      "540°",
      "360°",
      "900°",
      "1080°"
    ],
    correctAnswer: "720°"
  },
  {
    id: 53,
    year: 2024,
    subject: "math",
    question: "Which of the following is a prime number?",
    choices: [
      "29",
      "33",
      "39",
      "21",
      "49"
    ],
    correctAnswer: "29"
  },
  {
    id: 54,
    year: 2024,
    subject: "math",
    question: "If f(x) = 2x + 3, what is f(4)?",
    choices: [
      "11",
      "9",
      "7",
      "13",
      "8"
    ],
    correctAnswer: "11"
  },
  {
    id: 55,
    year: 2024,
    subject: "math",
    question: "Solve for x: 2x - 4 = 10",
    choices: [
      "7",
      "6",
      "8",
      "5",
      "9"
    ],
    correctAnswer: "7"
  },
  {
    id: 56,
    year: 2024,
    subject: "math",
    question: "Which of the following is an irrational number?",
    choices: [
      "√2",
      "4",
      "0.5",
      "3/7",
      "1.25"
    ],
    correctAnswer: "√2"
  },
  {
    id: 57,
    year: 2024,
    subject: "math",
    question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
    choices: [
      "32",
      "24",
      "20",
      "30",
      "28"
    ],
    correctAnswer: "32"
  },
  {
    id: 58,
    year: 2024,
    subject: "math",
    question: "What is the slope of a line represented by y = 3x + 2?",
    choices: [
      "3",
      "2",
      "1",
      "0",
      "-3"
    ],
    correctAnswer: "3"
  },
  {
    id: 59,
    year: 2024,
    subject: "math",
    question: "If the circumference of a circle is 2πr, what is the circumference when r = 5?",
    choices: [
      "10π",
      "25π",
      "5π",
      "20π",
      "15π"
    ],
    correctAnswer: "10π"
  },
  {
    id: 60,
    year: 2024,
    subject: "math",
    question: "A point particle moves along the x-axis with the law of motion x(t) = 4cos(πt). What is the velocity at t = 1/2 s?",
    choices: [
      "0 m/s",
      "approximately 4.2 m/s",
      "approximately 8.5 m/s",
      "approximately 25.1 m/s",
      "approximately"
    ],
    correctAnswer: "0 m/s"
  },
  {
    id: 61,
    year: 2023,
    subject: "gk",
    question: "According to the text, which one of the following is true?\n\nPreliminary global average temperatures taken so far in June are nearly 1°C (1.8°F) above levels previously recorded for the same month, going back to 1979. While the month is not yet complete and may not set a new June record, climate scientists say it follows a pattern of strengthening global heating that could see this year named the hottest ever recorded, topping 2016. The long-term warming conditions caused by the burning of fossil fuels will likely receive a further pulse of heat via El Niño, a naturally reoccurring phenomenon where sections of the Pacific Ocean heat up, typically causing temperatures to spike across the world.",
    choices: [
      "The June temperature this year is consistent with an observed trend.",
      "This year, June will be the hottest month on record since 1979.",
      "Temperatures in June are not related to the El Niño phenomenon.",
      "June 1979 was the hottest month to date.",
      "The El Niño phenomenon limits the effects of burning fossil fuels."
    ],
    correctAnswer: "The June temperature this year is consistent with an observed trend."
  },
  {
    id: 62,
    year: 2023,
    subject: "gk",
    question: "Which of the following pairs of character/book is wrong?",
    choices: [
      "Elizabeth Bennet — Little Women",
      "Leopold Bloom — Ulysses",
      "Edmond Dantès — The Count of Monte Cristo",
      "Gregor Samsa — The Metamorphosis",
      "Florentino Ariza — Love in the Time of Cholera"
    ],
    correctAnswer: "Elizabeth Bennet — Little Women"
  },
  {
    id: 63,
    year: 2023,
    subject: "gk",
    question: "The work known as De Bello Gallico is",
    choices: [
      "Julius Caesar’s account of the Gallic war.",
      "a painting by Eugène Delacroix.",
      "a sculpture by Auguste Rodin.",
      "an opera by Richard Wagner.",
      "a collection of poems on the Gallic war by Horace."
    ],
    correctAnswer: "Julius Caesar’s account of the Gallic war."
  },
  {
    id: 64,
    year: 2023,
    subject: "gk",
    question: "In a parliamentary system of government, the President of the Republic is",
    choices: [
      "Head of State but not Head of Government.",
      "neither Head of State nor Head of Government.",
      "Head of Government and Head of the High Council of the Judiciary.",
      "Head of Government but not Head of State.",
      "Head of State and Head of the High Council of the Judiciary."
    ],
    correctAnswer: "Head of State but not Head of Government."
  },
  {
    id: 65,
    year: 2023,
    subject: "logic",
    question: "You have 1 pair of new-born rabbits (one male and one female) that can breed when they reach maturity. You also have 3 pairs of mature rabbits (3 males and 3 females) that can start breeding immediately. They follow these rules:\n- Each mature pair of rabbits produces one new pair of offspring (one male and one female) at the end of each month.\n- Each offspring pair takes one month to mature.\nHow many rabbits do you have at the end of the 3rd month?",
    choices: [
      "36",
      "14",
      "18",
      "28",
      "42"
    ],
    correctAnswer: "36"
  },
  {
    id: 66,
    year: 2023,
    subject: "logic",
    question: "The half-life of a radioactive element is the time needed for half of the material to decay. You have a certain quantity of a mineral containing two radioactive elements X and Y, whose half-lives are 2 and 3 years, respectively. Also, no physical process can produce elements X or Y.\nIf today the ratio X:Y (mass/mass) is 8:1, what will it be after 6 years?",
    choices: [
      "4:1",
      "1:1",
      "2:1",
      "16:1",
      "32:1"
    ],
    correctAnswer: "1:1"
  },
  {
    id: 67,
    year: 2023,
    subject: "logic",
    question: "You want to buy a sandwich from your favourite store but are on a strict diet, so the sandwich must satisfy these requirements:\n- protein content: at least 20 g\n- fat content: less than 10 g\n- energy: at least 1,300 kJ\n\nThese are the types of sandwich available:\n(Tuna) 1579 kJ, 18 g protein, 14 g fat, 7.20€\n(Beef) 1320 kJ, 22 g protein, 9 g fat, 6.90€\n(Chicken) 1337 kJ, 23 g protein, 5 g fat, 6.80€\n(Vegetables) 1198 kJ, 9 g protein, 15 g fat, 6.50€\n(Salmon) 1620 kJ, 22 g protein, 12 g fat, 7.10€\n(Ham) 1164 kJ, 19 g protein, 8 g fat, 6.60€\n(Turkey) 1210 kJ, 20 g protein, 4 g fat, 6.70€\n\nWhat is the minimum that you can spend for your sandwich?",
    choices: [
      "6.80€",
      "6.70€",
      "6.90€",
      "6.60€",
      "7.10€"
    ],
    correctAnswer: "6.80€"
  },
  {
    id: 68,
    year: 2023,
    subject: "logic",
    question: "Copernicus is the European Earth Observation Programme which was established in 1998 to monitor the many ecosystems of our planet. It uses a constellation of 6 ‘Sentinel’ satellites as well as dozens of third-party satellites to protect us from natural and manmade disasters. It collects and makes available accurate environmental data to address climate change, pollution, and deforestation, aiding evidence-based decision-making. Copernicus fuels scientific research and plays a pivotal role in tracing disease outbreaks, tracking marine pollution, determining the quality of air and water, studying ocean levels and evaluating the melting of the arctic polar ice cap. The Copernicus European Observation Programme provides enormous social, environmental and scientific benefits, and it should continue to be funded.\n\nWhich one of the following, if true, would most strengthen the argument above?",
    choices: [
      "The economic benefits derived from the Copernicus programme outweigh its costs.",
      "Some of Copernicus' benefits can be provided by other means.",
      "The Copernicus project requires international cooperation to be effective.",
      "There are a number of similar projects run by other international agencies.",
      "Social and scientific advances are of equal importance."
    ],
    correctAnswer: "The economic benefits derived from the Copernicus programme outweigh its costs."
  },
  {
    id: 69,
    year: 2023,
    subject: "logic",
    question: "There is a commonly held belief, known as the ‘Matthew effect’, that students who start with poor academic attainment early in school make less progress over time than their higher-achieving peers. But recent research has shed new light on this topic. A study examined patterns of growth in literacy and numeracy among more than 150,000 young people in Australia. Researchers tested pupils regularly between year 3 and year 9. They found that students who began with high achievement in reading and numeracy tests in year 3 were not making the amount of progress to year 9 of which they were capable. On the other hand, students starting with below average test scores made more progress from year 3 to year 9 than students starting above average. This compensatory growth pattern was seen in both reading and numeracy but was especially significant in reading.\n\nWhich one of the following can be drawn as a conclusion from the above passage?",
    choices: [
      "Early promise does not guarantee high achievement in the long-term.",
      "Numerical skills are harder to improve than language skills.",
      "Rates of improvement from a low base will always be more rapid than progress from a higher base.",
      "The ‘Matthew effect’ is the result of low expectations by teachers.",
      "It is easier to teach brighter students than those who are below average."
    ],
    correctAnswer: "Early promise does not guarantee high achievement in the long-term."
  },
  {
    id: 70,
    year: 2023,
    subject: "biology",
    question: "Glucose can feed into the biochemical pathways noted in the options below. Each pathway generates a net yield of ATP molecules per molecule of glucose feeding into the pathway.\n\nRank the reactions listed below in order of the total number of net ATP molecules produced, ranked from largest to smallest:\n1. Ethyl alcohol fermentation of four molecules of glucose\n2. Lactic acid fermentation of six molecules of glucose\n3. The electron transport chain stage of cellular respiration following the metabolism of a single molecule of glucose through the glycolytic and citric acid cycle stages\n4. Glycolysis of seven glucose molecules",
    choices: [
      "3-4-2-1",
      "4-2-1-3",
      "3-4-1-2",
      "4-2-3-1",
      "2-1-4-3"
    ],
    correctAnswer: "3-4-2-1"
  },
  {
    id: 71,
    year: 2023,
    subject: "biology",
    question: "Duchenne muscular dystrophy (DMD) is a genetic condition marked by the gradual deterioration of muscle tissue. Recent studies have revealed that DMD arises from specific changes in a vital protein called dystrophin, responsible for maintaining the integrity of muscle cells. The gene responsible for producing this protein follows an inheritance pattern known as X-linked recessive.\n\nWhich of the following statements is wrong according to the above?",
    choices: [
      "Women are more likely to suffer from DMD than men.",
      "DMD is a sex-linked inherited disease.",
      "The rate at which the mutated allele spreads is influenced by the rate at which the associated X chromosome spreads within the population.",
      "To develop the condition, a woman must inherit two recessive alleles of this gene.",
      "To develop the condition, a man must inherit one of the recessive alleles of this gene."
    ],
    correctAnswer: "Women are more likely to suffer from DMD than men."
  },
  {
    id: 72,
    year: 2023,
    subject: "biology",
    question: "In the table below, you can find the minimum, maximum and optimum pH values that are required for enzymes X, Y, Z, W, and Q to function.\n\nWhich of the pairs of enzymes listed below cannot function together in the same environment?",
    choices: [
      "Y and W",
      "W and Q",
      "X and Y",
      "Y and Z",
      "X and Z"
    ],
    correctAnswer: "Y and W"
  },
  {
    id: 73,
    year: 2023,
    subject: "biology",
    question: "Which of the following is absent from the genome of a virus that utilizes DNA as its primary molecule?",
    choices: [
      "Uracil",
      "Deoxyribose",
      "Adenine",
      "Guanine",
      "Thymine"
    ],
    correctAnswer: "Uracil"
  },
  {
    id: 74,
    year: 2023,
    subject: "biology",
    question: "In which of the following events do hormones secreted by the adrenal gland and pancreas play a role together?\n1. Balancing the amount of calcium in the bone and blood.\n2. Accelerating sodium absorption in the renal tubules.\n3. Balancing the glucose level in the blood.",
    choices: [
      "3 only",
      "1",
      "1 and 2",
      "1, 2, and 3",
      "2 and 3"
    ],
    correctAnswer: "3 only"
  },
  {
    id: 75,
    year: 2023,
    subject: "biology",
    question: "Which of the following examples represent conditions regulated by homeostasis in the body?\n1. Blood glucose concentration\n2. Body temperature\n3. Water levels\n4. Body weight",
    choices: [
      "1, 2 and 3",
      "1 only",
      "1 and 2",
      "1 and 4",
      "4 only"
    ],
    correctAnswer: "1, 2 and 3"
  },
  {
    id: 76,
    year: 2023,
    subject: "biology",
    question: "Which of the following structures in a plant cell are surrounded by a double membrane?",
    choices: [
      "Plastid, Mitochondria, Nucleus",
      "Golgi Apparatus, Ribosome, Mitochondria",
      "Plastid, Endoplasmic Reticulum, Vacuole",
      "Nucleus, Plastid, Golgi Apparatus",
      "Mitochondria, Vacuole, Golgi Apparatus"
    ],
    correctAnswer: "Plastid, Mitochondria, Nucleus"
  },
  {
    id: 77,
    year: 2023,
    subject: "biology",
    question: "Listed below are three different families with genotypes related to colour blindness which is an X-linked recessive disorder.\n\n1. Mother: XRXr | Father: XRY\n2. Mother: XrXr | Father: XRY\n3. Mother: XRXr | Father: XrY\n\nAmong the families, which ones can have a colour-blind daughter?",
    choices: [
      "3",
      "1",
      "2",
      "1 and 2",
      "2 and 3"
    ],
    correctAnswer: "2 and 3"
  },
  {
    id: 78,
    year: 2023,
    subject: "biology",
    question: "Which of the following conditions is necessary for a mutation to play a role in the process of evolution?",
    choices: [
      "Occurrence in germ cells",
      "Having a dominant mutation",
      "Occurrence in body cells",
      "Having a recessive mutation",
      "Formation by the effect of X-rays"
    ],
    correctAnswer: "Occurrence in germ cells"
  },
  {
    id: 79,
    year: 2023,
    subject: "biology",
    question: "Redox reactions play a vital role in many cellular processes. Which of the following statements and examples best describes redox reactions in living things?",
    choices: [
      "Redox reactions involve the transfer of electrons, where the molecule that gains electrons is reduced, and the molecule that loses electrons is oxidized.",
      "Redox reactions involve the destruction of molecules, where the molecule that gains fragments is reduced, and the molecule that loses fragments is oxidized.",
      "Redox reactions involve the formation of covalent bonds, where the molecule that gains bonds is reduced, and the molecule that loses bonds is oxidized.",
      "Redox reactions involve the absorption of energy, where the molecule that gains energy is reduced, and the molecule that loses energy is oxidized.",
      "Redox reactions involve the absorption of light, where the molecule that gains light is reduced, and the molecule that loses light is oxidized."
    ],
    correctAnswer: "Redox reactions involve the transfer of electrons, where the molecule that gains electrons is reduced, and the molecule that loses electrons is oxidized."
  },
  {
    id: 80,
    year: 2023,
    subject: "biology",
    question: "Study the following table which shows the genotypes of individuals in a population for a specific genetic trait. The trait is determined by a single gene with two alleles, A and a.\n\n1: AA\n2: Aa\n3: Aa\n4: aa\n5: AA\n\nBased on the given data, what is the frequency of the A allele in this population?",
    choices: [
      "0.6",
      "0.2",
      "0.4",
      "0.8",
      "1.0"
    ],
    correctAnswer: "0.6"
  },
  {
    id: 81,
    year: 2023,
    subject: "biology",
    question: "Which of the following anatomical structures is responsible for regulating the circadian rhythm?",
    choices: [
      "Pineal gland",
      "Thalamus",
      "Corpus callosum",
      "Amygdala",
      "Hippocampus"
    ],
    correctAnswer: "Pineal gland"
  },
  {
    id: 82,
    year: 2023,
    subject: "biology",
    question: "Photosynthesis is a vital process in which plants and some other organisms convert light energy into chemical energy. Which of the following represents the balanced equation for the overall reaction of photosynthesis?",
    choices: [
      "6CO₂ + 6H₂O + energy → C₆H₁₂O₆ + 6O₂",
      "C₆H₁₂O₆ + 6CO₂ → 6CO₂ + 6H₂O + energy",
      "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂ + energy",
      "C₆H₁₂O₆ + 6CO₂ + energy → 6CO₂ + 6H₂O",
      "C₆H₁₂O₆ + 6CO₂ + energy → 12CO₂ + 6H₂O"
    ],
    correctAnswer: "6CO₂ + 6H₂O + energy → C₆H₁₂O₆ + 6O₂"
  },
  {
    id: 83,
    year: 2023,
    subject: "biology",
    question: "What is the correct order of the following events that occur immediately after acetylcholine binds to postsynaptic receptors of a muscle fibre, causing the muscle to contract?\n1. Ca²⁺ ions diffuse into the sarcoplasm.\n2. The muscle fibre membrane is depolarised.\n3. The myosin binding site on the actin filament is uncovered.",
    choices: [
      "2 - 1 - 3",
      "2 - 3 - 1",
      "1 - 2 - 3",
      "1 - 3 - 2",
      "3 - 2 - 1"
    ],
    correctAnswer: "2 - 1 - 3"
  },
  {
    id: 84,
    year: 2023,
    subject: "biology",
    question: "What percentage of the three base codons that can be made using the standard genetic code are stop codons?",
    choices: [
      "4.7%",
      "7.8%",
      "9.4%",
      "14.1%",
      "18.8%"
    ],
    correctAnswer: "4.7%"
  },
  {
    id: 85,
    year: 2023,
    subject: "biology",
    question: "Which of the following statements accurately describes prokaryotic DNA?",
    choices: [
      "Prokaryotic DNA consists of circular chromosomes located within the cytoplasm.",
      "Prokaryotic DNA is linear, with multiple chromosomes contained within a nuclear membrane.",
      "Prokaryotic DNA is highly condensed and organized into chromatin fibers.",
      "Prokaryotic DNA is associated with histone proteins and undergoes meiotic cell division during replication.",
      "Prokaryotic DNA contains introns and exons within its coding regions."
    ],
    correctAnswer: "Prokaryotic DNA consists of circular chromosomes located within the cytoplasm."
  },
  {
    id: 86,
    year: 2023,
    subject: "biology",
    question: "A fragment of double-stranded DNA molecule contains 12 phosphates and 2 adenines. Given this information, what is the total number of purine bases, deoxyribose sugars and hydrogen bonds respectively, present in the described DNA molecule?",
    choices: [
      "6, 12, 16",
      "12, 24, 28",
      "4, 12, 12",
      "6, 16, 12",
      "6, 12, 20"
    ],
    correctAnswer: "6, 12, 20"
  },
  {
    id: 87,
    year: 2023,
    subject: "biology",
    question: "Which of the following statements accurately describes the surface area-to-volume ratio and cell growth?",
    choices: [
      "The surface area-to-volume ratio decreases as the cell grows larger.",
      "The surface area-to-volume ratio remains constant during cell growth.",
      "The surface area-to-volume ratio increases as the cell grows larger.",
      "The surface area-to-volume ratio varies randomly during cell growth.",
      "The surface area-to-volume ratio is unrelated to cell growth."
    ],
    correctAnswer: "The surface area-to-volume ratio decreases as the cell grows larger."
  },
  {
    id: 88,
    year: 2023,
    subject: "biology",
    question: "Which of the following statements regarding the Golgi apparatus is correct?",
    choices: [
      "The Golgi apparatus processes and packages proteins to be exported from the cell.",
      "The Golgi apparatus processes lipid molecules as they enter the cell.",
      "Before exiting the cell, the proteins packaged in the Golgi apparatus are transported to the nucleus for translation verification.",
      "Lysosomes digest the vesicles released from the Golgi apparatus so the proteins can be released from the cell.",
      "There is no Golgi apparatus in neuronal cells."
    ],
    correctAnswer: "The Golgi apparatus processes and packages proteins to be exported from the cell."
  },
  {
    id: 89,
    year: 2023,
    subject: "biology",
    question: "In which reactions of glycolysis are isomerase enzymes involved?",
    choices: [
      "When glucose-6-phosphate is changed to fructose-6-phosphate.",
      "During the phosphorylation of both glucose and fructose-1-phosphate.",
      "In the steps in which dehydrogenase enzymes are involved.",
      "When four enzyme-catalysed reactions convert each triose phosphate molecule to a molecule of pyruvate.",
      "To convert fructose 1-6-diphosphate to glyceraldehyde 3-phosphate and dihydroxyacetone phosphate."
    ],
    correctAnswer: "When glucose-6-phosphate is changed to fructose-6-phosphate."
  },
  {
    id: 90,
    year: 2023,
    subject: "biology",
    question: "Given the polynucleotide sequence AUGCGCG, can you tell which is the 5′ end?",
    choices: [
      "No, unless you know the position of the phosphate group, you cannot differentiate the 3′ end from the 5′ end.",
      "No, you cannot tell without the sequence of the complementary strand.",
      "Yes, the 5′ end begins with the start codon AUG.",
      "There is no difference between the 5′ and 3′ ends of a single strand of DNA.",
      "Counting the number of hydrogen bonds between the nitrogenous bases provides sufficient information to determine the 5′ end."
    ],
    correctAnswer: "No, unless you know the position of the phosphate group, you cannot differentiate the 3′ end from the 5′ end."
  },
  {
    id: 91,
    year: 2023,
    subject: "biology",
    question: "Which statement or set of statements about oxidative phosphorylation is correct?\n1. Complex I of the electron transport chain transfers electrons from FADH₂ to coenzyme Q.\n2. ATP synthase utilises the energy of the proton gradient to catalyze the conversion of ADP to ATP.\n3. Oxygen serves as an electron acceptor in complex III.\n4. Complex IV receives electrons from NADH.",
    choices: [
      "2",
      "1 and 2",
      "3",
      "2, 3 and 4",
      "4"
    ],
    correctAnswer: "2"
  },
  {
    id: 92,
    year: 2023,
    subject: "biology",
    question: "The 19th century monk Gregor Johann Mendel conducted simple hybridisation experiments and established a series of laws of inheritance. Which of the points listed below accurately reflect Mendel's laws?\n1. Alternative forms of genetic characteristics can be inherited from parents.\n2. Specific heritable factors or traits are inherited independently of other heritable factors.\n3. Gametes are created by random segregation.\n4. If one allele is dominant over another allele, the phenotype reflects the dominant allele.\n5. Individuals with heritable traits more suited to the environment will have an increased chance of survival.",
    choices: [
      "1, 2, 3 and 4",
      "1, 2 and 3",
      "All the statements are correct",
      "4 and 5",
      "1 and 5"
    ],
    correctAnswer: "1, 2, 3 and 4"
  },
  {
    id: 93,
    year: 2023,
    subject: "chemistry",
    question: "A simple ion of element A can be represented: ²ₓ⁺² A²⁺\n\nHow many electrons are present in this ion?",
    choices: [
      "x - 2",
      "x",
      "x + 2",
      "2x",
      "2x + 4"
    ],
    correctAnswer: "x - 2"
  },
  {
    id: 94,
    year: 2023,
    subject: "chemistry",
    question: "A sample of n moles of an ideal gas is contained in a closed system of fixed volume V m³ at pressure P Pa and temperature 27.0°C. If the gas is heated to 327.0°C, what will be the pressure, in Pa, at this new temperature?\n(Assume absolute zero is at -273.0°C)",
    choices: [
      "2P",
      "P / 2",
      "P",
      "(327 / 27)P",
      "(27 / 327)P"
    ],
    correctAnswer: "(327 / 27)P"
  },
  {
    id: 95,
    year: 2023,
    subject: "chemistry",
    question: "A pH meter is used to test 0.1 mol L⁻¹ aqueous solutions of the following compounds:\n1. CH₃COOH\n2. NaCl\n3. H₂SO₄\n4. Ba(OH)₂\n5. HNO₃\nWhich of the following correctly lists these solutions in order of increasing pH?",
    choices: [
      "3, 5, 1, 2, 4",
      "3, 4, 1, 5, 2",
      "4, 2, 1, 5, 3",
      "2, 1, 4, 5, 3",
      "5, 3, 1, 2, 4"
    ],
    correctAnswer: "5, 3, 1, 2, 4"
  },
  {
    id: 96,
    year: 2023,
    subject: "chemistry",
    question: "Which of the following compounds are structural isomers of hexanoic acid?",
    choices: [
      "1, 2 and 3",
      "1 only",
      "3 only",
      "1 and 2 only",
      "2 and 3 only"
    ],
    correctAnswer: "1 and 2 only"
  },
  {
    id: 97,
    year: 2023,
    subject: "chemistry",
    question: "Consider the reaction:\nH₂SO₄ + HNO₃ → HSO₄⁻ + H₂NO₃⁺\nWhich of the following terms describes the role of HNO₃ in this reaction?",
    choices: [
      "A base",
      "An acid",
      "An oxidising agent",
      "A reducing agent",
      "A catalyst"
    ],
    correctAnswer: "An acid"
  },
  {
    id: 98,
    year: 2023,
    subject: "chemistry",
    question: "Which one of the following is a gaseous compound (at room temperature and pressure) that exists as linear molecules and reacts with water to form an acidic solution?",
    choices: [
      "Carbon dioxide",
      "Silicon dioxide",
      "Nitrogen dioxide",
      "Sulfur dioxide",
      "Sulfur trioxide"
    ],
    correctAnswer: "Carbon dioxide"
  },
  {
    id: 99,
    year: 2023,
    subject: "chemistry",
    question: "Which of the following statements about 1Kg of water is correct?",
    choices: [
      "Ice has a greater volume than liquid water as the particles are further apart",
      "Liquid water has a greater volume than ice as the particles are further apart",
      "Liquid water has a greater volume than ice as the particles have more kinetic energy",
      "Liquid water and ice have the same volume, which explains why ice partially floats in water",
      "Ice has a greater volume than liquid water as the particles have more kinetic energy"
    ],
    correctAnswer: "Ice has a greater volume than liquid water as the particles are further apart"
  },
  {
    id: 100,
    year: 2023,
    subject: "chemistry",
    question: "At a given temperature, the Kc value of a gaseous exothermic reaction is equal to 7 × 10⁻⁵ dm⁶ mol⁻².\nWhich one of the following statements is correct?",
    choices: [
      "At a lower temperature the value of Kc will increase",
      "The position of equilibrium lies over to the right-hand side",
      "There are more moles on the right-hand side of the equilibrium equation",
      "An increase in pressure will increase the time taken to reach equilibrium",
      "Addition of a suitable catalyst will increase the equilibrium yield obtained"
    ],
    correctAnswer: "At a lower temperature the value of Kc will increase"
  },
  {
    id: 101,
    year: 2023,
    subject: "chemistry",
    question: "The structure of paracetamol is shown.\nWhich one of the following functional groups is present in paracetamol?",
    choices: [
      "Amide",
      "Amine",
      "Carboxylic acid",
      "Aldehyde",
      "Ketone"
    ],
    correctAnswer: "Amide"
  },
  {
    id: 102,
    year: 2023,
    subject: "chemistry",
    question: "The formulae of the five most abundant substances in air are shown:\nN₂, O₂, Ar, CO₂, H₂O\nHow many of these five substances are elements and how many of these five substances are made of molecules?",
    choices: [
      "Elements = 3, molecules = 4",
      "Elements = 1, molecules = 4",
      "Elements = 1, molecules = 2",
      "Elements = 3, molecules = 2",
      "Elements = 5, molecules = 4"
    ],
    correctAnswer: "Elements = 3, molecules = 4"
  },
  {
    id: 103,
    year: 2023,
    subject: "chemistry",
    question: "Which of these elements has the highest first ionisation energy?",
    choices: [
      "Neon (Z = 10)",
      "Lithium (Z = 3)",
      "Sodium (Z = 11)",
      "Argon (Z = 18)",
      "Potassium (Z = 19)"
    ],
    correctAnswer: "Neon (Z = 10)"
  },
  {
    id: 104,
    year: 2023,
    subject: "chemistry",
    question: "Which of these molecules has an overall dipole moment?",
    choices: [
      "PF₃",
      "BeF₂",
      "CF₄",
      "PF₅",
      "SF₆"
    ],
    correctAnswer: "PF₃"
  },
  {
    id: 105,
    year: 2023,
    subject: "chemistry",
    question: "This reaction is used in the extraction of titanium from its ore:\nTiO₂ + 2Cl₂ + 2C → TiCl₄ + 2CO\nWhich substances is/are the reducing agent(s) in this reaction?",
    choices: [
      "C",
      "TiO₂",
      "Cl₂",
      "C and Cl₂",
      "None of these substances – it is not a redox reaction"
    ],
    correctAnswer: "C"
  },
  {
    id: 106,
    year: 2023,
    subject: "chemistry",
    question: "Iron is made by reduction of iron oxide using carbon monoxide:\nFe₂O₃ + 3CO → 2Fe + 3CO₂\n50g of iron is made in a reaction from 80g of iron oxide.\nWhat is the percentage yield of iron in this reaction?\n(Mr Fe₂O₃ = 160, Ar Fe = 56)",
    choices: [
      "(50 / 56) × 100",
      "(50 / 80) × 100",
      "(25 / 80) × 100",
      "(50 / 56) / (80 / 160) × 100",
      "(25 / 112) / (80 / 160) × 100"
    ],
    correctAnswer: "(50 / 56) / (80 / 160) × 100"
  },
  {
    id: 107,
    year: 2023,
    subject: "chemistry",
    question: "Which of these is a weak, diprotic acid?",
    choices: [
      "Structure with two COOH groups",
      "Structure with H₂SO₃ (sulfurous acid)",
      "Structure with H₂CO₃ (carbonic acid)",
      "Structure with two formic acid groups",
      "Structure with six OH groups on a carbon chain"
    ],
    correctAnswer: "Structure with H₂SO₃ (sulfurous acid)"
  },
  {
    id: 108,
    year: 2023,
    subject: "physics",
    question: "Consider this function, defined for every x > 1 (where \"ln\" indicates the natural logarithm):\nf(x) = 2ln(x) − 2ln(x − 1)\nWhich of these is an expression for its inverse function f⁻¹(y)?",
    choices: [
      "e^(y/2) / (e^(y/2) − 1), y > 0",
      "e^(y/2) / (e^(y/2) − 1), y > 1",
      "1 / (e^(y/2) − 1), y > 0",
      "1 / (e^(y/2) − 1), y > 1",
      "1 / (e^(y/2) − 1), y ≠ 0"
    ],
    correctAnswer: "e^(y/2) / (e^(y/2) − 1), y > 0"
  },
  {
    id: 109,
    year: 2023,
    subject: "math",
    question: "Find the set of real solutions of this inequation:\n2x² − 6x + 5 > 0",
    choices: [
      "ℝ",
      "∅",
      "(−∞, 1) ∪ (2, +∞)",
      "(1, 2)",
      "{1, 2}"
    ],
    correctAnswer: "(−∞, 1) ∪ (2, +∞)"
  },
  {
    id: 110,
    year: 2023,
    subject: "math",
    question: "The ratio of sugar to flour in a mixture is 1:5. After 1kg of sugar and 2kg of flour are added to the mixture, the ratio has changed to 2:5.\nA further 1kg of sugar and 2kg of flour are added to the mixture.\nWhat is the new ratio of sugar to flour?",
    choices: [
      "11:25",
      "3:5",
      "3:7",
      "4:7",
      "14:25"
    ],
    correctAnswer: "11:25"
  },
  {
    id: 111,
    year: 2023,
    subject: "math",
    question: "Two standard six-sided dice numbered 1 to 6 are rolled. What is the probability that the product of the two numbers obtained is the square of a prime?",
    choices: [
      "5/36",
      "3/36",
      "4/36",
      "6/36",
      "7/36"
    ],
    correctAnswer: "5/36"
  },
  {
    id: 112,
    year: 2023,
    subject: "math",
    question: "How many solutions are there in the range 0° ≤ x ≤ 360° to the equation\nsin⁴((x + 90°) / 10) = 1/16?",
    choices: [
      "1",
      "2",
      "4",
      "20",
      "40"
    ],
    correctAnswer: "1"
  },
  {
    id: 113,
    year: 2023,
    subject: "math",
    question: "What is the complete set of values of x for which\n100 − 99x ≤ 98 − 97x and 96 + 95x > 94 + 93x?",
    choices: [
      "x ≥ 1",
      "x > −1",
      "x > 1",
      "x ≤ −1 or x > 1",
      "−1 < x ≤ 1"
    ],
    correctAnswer: "x ≥ 1"
  },
  {
    id: 114,
    year: 2023,
    subject: "math",
    question: "What is the minimum distance of the circle given by the equation\nx² − 10x + y² + 12y + 57 = 0 from the coordinate axes?",
    choices: [
      "3",
      "1",
      "2",
      "4",
      "5"
    ],
    correctAnswer: "3"
  },
  {
    id: 115,
    year: 2023,
    subject: "math",
    question: "The expression √((16^x + 8^x) / (4^x + 2^x)) simplifies to which of the following?",
    choices: [
      "2^x",
      "2",
      "(√2)^x",
      "√2^x",
      "2²^x"
    ],
    correctAnswer: "2^x"
  },
  {
    id: 116,
    year: 2023,
    subject: "physics",
    question: "A point mass A with mass m moves at a constant speed v on a horizontal frictionless plane and collides with another point mass B with mass 2m that is at rest. The collision is elastic. After the collision, point mass A is moving with a speed vₐ and point mass B with a speed vᵦ.\nWhat are vₐ and vᵦ, in terms of v?",
    choices: [
      "vₐ = ⅓v ; vᵦ = ⅔v",
      "vₐ = ⅔v ; vᵦ = ⅓v",
      "vₐ = ½v ; vᵦ = ⅓v",
      "vₐ = ⅓v ; vᵦ = ½v",
      "vₐ = ½v ; vᵦ = ½v"
    ],
    correctAnswer: "vₐ = ⅓v ; vᵦ = ⅔v"
  },
  {
    id: 117,
    year: 2023,
    subject: "physics",
    question: "An ideal gas is trapped in a metal cylinder by a free-moving piston and is at equilibrium in a room at 25°C.\nThe piston is pulled slowly to the right so that the volume of the trapped gas increases isothermally. The piston is now fixed in position.\nThe metal cylinder is then placed in a location where thermal energy is transferred from the trapped gas until the pressure of the gas is halved.\nTo the nearest degree Celsius, what is the final temperature of the gas?",
    choices: [
      "−124°C",
      "−149°C",
      "25°C",
      "50°C",
      "13°C"
    ],
    correctAnswer: "−124°C"
  },
  {
    id: 118,
    year: 2023,
    subject: "physics",
    question: "A metal jug of negligible thermal capacity contains a mass M of water at a temperature T₁.\nA dry block of ice (specific latent heat of fusion = Lᶠ) of mass m at 0 °C is dropped into the water (specific heat capacity = c) and begins to melt. At thermal equilibrium, there is no ice in the jug and the temperature of all the water is T₂.\nThere is no thermal energy transfer between the atmosphere and the water or between the atmosphere and the ice.\nWhich expression is used to calculate m?",
    choices: [
      "M*c*(T₁ − T₂) / (Lᶠ + cT₂)",
      "M*c*(T₁ − T₂) / Lᶠ",
      "M*c*T₁ / (Lᶠ + cT₂)",
      "M*c*T₁ / Lᶠ",
      "M*c*(T₁ − T₂) / (Lᶠ + cT₁)"
    ],
    correctAnswer: "M*c*(T₁ − T₂) / (Lᶠ + cT₂)"
  },
  {
    id: 119,
    year: 2023,
    subject: "physics",
    question: "A vehicle travels east for 6 km, then south for 8 km without stopping. If the trip takes 15 minutes, what is the magnitude of the average velocity in km/h?",
    choices: [
      "40",
      "20",
      "8",
      "14",
      "56"
    ],
    correctAnswer: "40"
  },
  {
    id: 120,
    year: 2023,
    subject: "physics",
    question: "Two perfectly insulating spheres charged respectively with Q₁ and Q₂ and with a respective radius of R₁ and R₂ are placed in contact.\nWhat will the charge on the sphere of radius R₁ now be?",
    choices: [
      "Q₁",
      "Q₂",
      "(Q₁R₁ + Q₂R₂) / (R₁ + R₂)",
      "(Q₁R₁² + Q₂R₂²) / (R₁² + R₂²)",
      "0"
    ],
    correctAnswer: "Q₁"
  }
];

let currentQuestions = [];
let currentIndex = 0;
let currentMode = ""; // "random", "subject", "exam"

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const questionMeta = document.getElementById("question-meta");
const answersList = document.getElementById("answers-list");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function shuffleArray(array) {
  return array.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
}

function displayQuestion(question) {
  questionText.textContent = question.question;
  questionMeta.textContent = `Subject: ${question.subject.toUpperCase()} | Year: ${question.year}`;
  feedback.textContent = "";
  nextBtn.style.display = "none";

  answersList.innerHTML = "";
  const shuffled = shuffleArray(question.choices);
  shuffled.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => checkAnswer(choice, question.correctAnswer));
    answersList.appendChild(li);
  });
}

function checkAnswer(selected, correct) {
  const lis = document.querySelectorAll("#answers-list li");
  lis.forEach(li => li.style.pointerEvents = "none");
  feedback.textContent = selected === correct ? "✅ Correct!" : `❌ Incorrect. Correct answer: ${correct}`;
  nextBtn.style.display = "inline-block";
}

function startRandomQuestion(all = true, subject = null) {
  let filtered = all ? imatQuestions : imatQuestions.filter(q => q.subject === subject);
  if (filtered.length === 0) {
    questionText.textContent = "No questions found for this subject.";
    answersList.innerHTML = "";
    feedback.textContent = "";
    questionMeta.textContent = "";
    return;
  }
  const random = filtered[Math.floor(Math.random() * filtered.length)];
  currentQuestions = [random];
  currentIndex = 0;
  questionContainer.style.display = "block";
  displayQuestion(random);
}

function startFullExam() {
  currentQuestions = imatQuestions.slice();
  currentIndex = 0;
  questionContainer.style.display = "block";
  displayQuestion(currentQuestions[currentIndex]);
}

function goToNextQuestion() {
  if (currentMode === "exam") {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
      displayQuestion(currentQuestions[currentIndex]);
    } else {
      questionText.textContent = "✅ Exam complete!";
      answersList.innerHTML = "";
      questionMeta.textContent = "";
      feedback.textContent = "";
      nextBtn.style.display = "none";
    }
  } else if (currentMode === "random") {
    startRandomQuestion(true);
  } else if (currentMode === "subject") {
    const subject = document.getElementById("subject-select").value;
    startRandomQuestion(false, subject);
  }
}

function hideAllSections() {
  document.getElementById("subject-controls").style.display = "none";
  questionContainer.style.display = "none";
  feedback.textContent = "";
  questionText.textContent = "";
  answersList.innerHTML = "";
  questionMeta.textContent = "";
}

nextBtn.addEventListener("click", goToNextQuestion);

document.getElementById("mode-random").addEventListener("click", () => {
  hideAllSections();
  currentMode = "random";
  startRandomQuestion(true);
});

document.getElementById("mode-subject").addEventListener("click", () => {
  hideAllSections();
  document.getElementById("subject-controls").style.display = "block";
});

document.getElementById("get-subject-question").addEventListener("click", () => {
  const subject = document.getElementById("subject-select").value;
  hideAllSections();
  currentMode = "subject";
  startRandomQuestion(false, subject);
});

document.getElementById("mode-exam").addEventListener("click", () => {
  hideAllSections();
  currentMode = "exam";
  startFullExam();
});