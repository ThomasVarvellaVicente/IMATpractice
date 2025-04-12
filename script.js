// Exam questions (from 2024 IMAT only for now)
const imatQuestions = [
  // Example:
  {
    id: 1,
    year: 2024,
    subject: "gk",
    question: "Who is the author of the famous novel To the Lighthouse?",
    choices: ["Virginia Wolf", "Mary Shelley", "Jane Austen", "Emily Dickinson", "Agatha Christie"],
    correctAnswer: "Virginia Wolf"
  },
  // Additional questions will be added here in full shortly...
];

let currentQuestions = [];
let currentIndex = 0;

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
  nextBtn.style.display = currentIndex < currentQuestions.length - 1 ? "inline-block" : "none";
}

function startRandomQuestion(all = true, subject = null) {
  let filtered = all ? imatQuestions : imatQuestions.filter(q => q.subject === subject);
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
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    displayQuestion(currentQuestions[currentIndex]);
  }
}

// Event listeners
nextBtn.addEventListener("click", goToNextQuestion);
document.getElementById("mode-random").addEventListener("click", () => startRandomQuestion(true));
document.getElementById("mode-subject").addEventListener("click", () => {
  document.getElementById("subject-controls").style.display = "block";
});
document.getElementById("get-subject-question").addEventListener("click", () => {
  const subject = document.getElementById("subject-select").value;
  startRandomQuestion(false, subject);
});
document.getElementById("mode-exam").addEventListener("click", startFullExam);
