/// <reference types="../@types/jquery" />
import { Quiz } from "./quiz.js";
export class Setting {
  constructor() {
    //======================varriables=========================

    this.questions = [];

    //=========================events===========================
    $("#setting button").click(async () => {
      //function to get the data
      await this.getData();
      this.quiz = new Quiz(this.questions);
    });
  }
  async getData() {
    //get selected elements
    const category = $("#category").val();
    const difficulty = $('[name="difficulty"]:checked').val();
    const noQ = $("#no").val();

    //check validation on a number
    if (this.checkNumberValidation(noQ)) {
      $("#setting-msg").html("");
      const results = await this.getQuestions(noQ, category, difficulty);
      this.questions = results;
      //   console.log(this.questions);
      $("#setting").fadeOut();
      $("#quiz").fadeIn();
    } else {
      console.log("wrong");
      $("#setting-msg").html("please enter a number from 1 to 50");
    }
  }
  async getQuestions(noQ, category, difficulty) {
    //api
    const api = await fetch(
      `https://opentdb.com/api.php?amount=${noQ}&category=${category}&difficulty=${difficulty}`
    );
    const req = await api.json();
    console.log(req);
    return req.results;
  }
  checkNumberValidation(number) {
    if (number > 0 && number <= 50) {
      return true;
    }
    return false;
  }
}
