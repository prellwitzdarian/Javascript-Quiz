# JavaScript Quiz

An interactive, browser-based quiz application that tests fundamental JavaScript knowledge. Built with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies required.

## Demo

Open `quiz.html` in any modern browser to get started.

## Features

- **4 multiple-choice questions** covering core JavaScript concepts
- **Instant feedback** — correct answers highlight in purple, incorrect ones in red with the correct answer revealed
- **Score summary** displayed at the end of the quiz
- **Restart functionality** to retake the quiz without refreshing the page
- Clean, responsive UI centered on the page

## Topics Covered

- Logical operators (`&&`, `||`, `!`)
- Strict equality (`===`) return types
- Loop control (`break` statement)
- Console output (`console.log()`)

## Project Structure
Javascript-Quiz/
├── quiz.html # App entry point and markup
├── quiz.css # Styles and layout
└── quiz.js # Quiz data and all application logic

## Getting Started
No build step or server required.
1. Clone the repository:
   ```bash
   git clone https://github.com/prellwitzdarian/javascript-quiz.git
Open quiz.html in your browser.
How to Add Questions
In quiz.js, add an object to the quizData array:

{
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0, // zero-based index of the correct option
}
Tech Stack
Layer	Technology
Markup	HTML5
Styling	CSS3
Logic	Vanilla JavaScript (ES6+)
