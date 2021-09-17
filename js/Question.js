//Created By Aadi Golecha on 17 September
//Quiz Part 1 Question.js

class Question {

  constructor() {
    //given H1 size to the title
    this.title = createElement('h1')

    //input boxs with the instructions 
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");

    //button to submit 
    this.button = createButton('Submit');

    //and other sizes to the question ,options and message
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  //function to hide the particular object
  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

    //function to disply the particular object with its position and style
  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.title.class("title");


    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);
    this.question.class("question");

    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option1.class("option");

    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option2.class("option");

    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option3.class("option");

    this.option4.html("4: Example" );
    this.option4.position(150, 160);
    this.option4.class("option");


    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(350, 350);
       this.message.class("message");
    });
  }
}
