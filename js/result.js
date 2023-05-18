export class Result {
  constructor(score) {
    $("#quiz").fadeOut();
    $("#result").fadeIn();
    this.diplayScore(score);
    //events
    $("#try").click(() => {
      window.location.reload();
    });
  }
  diplayScore(score) {
    $("#scoring").html(score);
    console.log(score);
  }
}
