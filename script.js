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