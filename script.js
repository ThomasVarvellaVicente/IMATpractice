document.addEventListener('DOMContentLoaded', () => {
  const randomBtn = document.getElementById('mode-random');
  const subjectBtn = document.getElementById('mode-subject');
  const examBtn = document.getElementById('mode-exam');

  const subjectControls = document.getElementById('subject-controls');
  const examControls = document.getElementById('exam-controls');
  const questionContainer = document.getElementById('question-container');

  // Nav button event listeners
  randomBtn.addEventListener('click', () => {
    hideAllSections();
    questionContainer.style.display = 'block';
    // You can call a function like: loadRandomQuestion()
  });

  subjectBtn.addEventListener('click', () => {
    hideAllSections();
    subjectControls.style.display = 'block';
  });

  examBtn.addEventListener('click', () => {
    hideAllSections();
    examControls.style.display = 'block';
  });

  function hideAllSections() {
    subjectControls.style.display = 'none';
    examControls.style.display = 'none';
    questionContainer.style.display = 'none';
  }

  // Placeholder for logic hooks
  document.getElementById('get-subject-question').addEventListener('click', () => {
    const subject = document.getElementById('subject-select').value;
    questionContainer.style.display = 'block';
    // loadRandomQuestionBySubject(subject)
  });

  document.getElementById('start-full-exam').addEventListener('click', () => {
    questionContainer.style.display = 'block';
    // startFullExam()
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    // goToNextQuestion()
  });
});
