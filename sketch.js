//Created By Aadi Golecha on 17 September
//Quiz Part 1

var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup()
{
  //created canvas on 850, 400
  canvas = createCanvas(850,400);

  //telling that data base id a fire base data base
  database = firebase.database();

  //creating and started a new quiz
  quiz = new Quiz();
  quiz.start();
}


function draw()
{
  //setting background colour
  background("#d8def0");
}
