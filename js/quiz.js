import { Result } from "./result.js";
export class Quiz {
  constructor(questions) {
    this.correct;
    this.score = 0;
    this.counter = 0;
    this.questionss = questions;
    console.log(questions);
    this.displayQuestion(questions);

    //submit button
    $("#submit").click(async () => {
      if (this.counter >= questions.length - 1) {
        const result = new Result(this.score);
      } else {
        this.collectScore();
        this.counter++;
        $("#quiz").fadeOut();
        this.displayQuestion(questions);
        $("#quiz").fadeIn();
      }
    });
  }

  async displayQuestion(result) {
    if (this.counter < result.length) {
      $(".no-questions ").html(
        this.counter + 1 + " of " + result.length + " Question"
      );
      $("#q").html(result[this.counter].question);
      this.displayAnswers(this.generateResults(result));
    } else {
      console.log("end");
    }
  }
  generateResults(result) {
    let allQuestions = [...result[this.counter].incorrect_answers];
    const index = Math.ceil(Math.random() * allQuestions.length);
    this.correct = result[this.counter].correct_answer;
    allQuestions.splice(index, 0, this.correct);

    console.log(this.correct);
    // console.log(allQuestions);
    // console.log(index);
    console.log("f");
    console.log(this.counter);

    return allQuestions;
  }
  displayAnswers(answers) {
    let cartoona = "";
    for (let i = 0; i < answers.length; i++) {
      cartoona += `<div class="pretty p-icon p-round my-2 d-block">
      <input value=${answers[i]} type="radio" name="ans" class="form-control" />
      <div class="state p-success">
        <i class="icon mdi mdi-check"></i>
        <label>${answers[i]}</label>
      </div>

    </div>`;
    }
    $(".answers").html(cartoona);
  }
  async collectScore() {
    const currentAnswer = document.querySelector('[name="ans"]:checked')?.value;

    if (currentAnswer != undefined) {
      console.log(this.counter);
      console.log(currentAnswer);
      console.log(this.correct);
      if (currentAnswer === this.correct) {
        this.score++;
        $("#correct").fadeIn(0);
        setTimeout(function () {
          $("#correct").fadeOut(0);
        }, 1000);
      } else {
        $("#incorrect").fadeIn(0);
        setTimeout(function () {
          $("#incorrect").fadeOut(0);
        }, 1000);
      }
    }
  }
}

// console.log(this.counter);
//     console.log(currentAnswer);
//     console.log(this.correct);
