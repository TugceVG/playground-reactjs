class Question {
  constructor(question, options, correctAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
}

Question.prototype.checkMyAnswer = function (answer) {
  return answer === this.correctAnswer;
};

export default [
  new Question("Soru 1", { a: 1, b: 2, c: 3, d: 4 }, "a"),
  new Question("Soru 2", { a: 1, b: 2, c: 3, d: 4 }, "b"),
  new Question("Soru 3", { a: 1, b: 2, c: 3, d: 4 }, "c"),
];
