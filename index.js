const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();

client.join('04511388', Math.random() + "- ella");

client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("QuestionStart", question => {
  for (let i = 0; i < question.choices.length; i++) {
    if (question.choices[i].correct) {
      question.answer(i)
    }
  }
});
