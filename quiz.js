const quizData = [
  {
    question:
      "What operator do you use to signify that both variables must be true?",
    options: ["!", "and", "&&", "||"],
    answer: 2,
  },
  {
    question: "What value does this give ===?",
    options: ["boolean", "string", "number", "index"],
    answer: 0,
  },
  {
    question: "What does adding the code break; do in a for loop?",
    options: [
      "skips that section of the loop",
      "stops the loop",
      "runs the loop again",
      "makes another loop",
    ],
    answer: 1,
  },
  {
    question: "Which code prints the information?",
    options: [".push()", "print()", "console.log()", "result()"],
    answer: 2,
  },
];

// This value indicates the current question being displayed. The value will increase as the user answers questions.
let currIndex = 0;
let score = 0;

function displayCurQuestion() {
  let questionContainer = document.getElementById("question-container");
  let optionsContainer = document.getElementById("options-container");

  //clear old options
  optionsContainer.innerHTML = "";

  //show question text
  let currentQuestion = quizData[currIndex];

  //show question text
  questionContainer.textContent = currentQuestion.question;

  //create buttons
  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;

    optionButton.addEventListener("click", () => {
      console.log("clicked:", index);

      const allButtons = optionsContainer.querySelectorAll("button");

      allButtons.forEach((btn) => {
        btn.disabled = true;
      });

      if (index === currentQuestion.answer) {
        score++;
        optionButton.style.backgroundColor = "purple";
      } else {
        optionButton.style.backgroundColor = "red";

        allButtons[currentQuestion.answer].style.backgroundColor = "purple";
      }
    });

    optionsContainer.appendChild(optionButton);
  });
}

function nextQuestion() {
  currIndex = currIndex + 1;
  if (currIndex < quizData.length) {
    displayCurQuestion();
  } else {
    const quizContainer = document.getElementById("quiz-container");
    const scoreContainer = document.getElementById("score-container");
    const scoreText = document.getElementById("score");

    quizContainer.style.display = "none"; // hide quiz
    scoreContainer.style.display = "block"; // show score
    scoreText.textContent = `${score} out of ${quizData.length}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayCurQuestion();

  document.getElementById("restart-button").addEventListener("click", () => {
    score = 0;
    currIndex = 0;
    document.getElementById("score-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayCurQuestion();
  });
});
