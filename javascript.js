function myRandomQuestion() {
  // pass an array into the function as an argument. Then you can choose which set of data to be working with. 
    var questionList = [
      "What was a movie you saw recently? How was it? What actors were in it?",
      "Where were you yesterday at 7:00 a.m.? At 1:00 p.m.? At 8:00 p.m.?",
      "Were you late for anything last week? Why?",
      "What fruit did you eat yesterday? Vegetables? Meats? What did you drink?",
      "Think of a dish you know how to make. How do you make it?",
      "What is usually in your refrigerator? What is in your refrigerator right now?",
      "What do you do when you have a headache? A stomachache? A fever?",
      "What should people do when they have a backache?",
      "What should you do when you have the flu? A sore throat? A cold?"
    ]
  
    var questionNumber = questionList.length;
    
    var randomNum = Math.floor(Math.random() * Math.floor(questionNumber));
    
    var theCalculatedAnswer = questionList[randomNum];

    var answer = document.querySelector('#answer');
    answer.innerHTML = theCalculatedAnswer;

    console.log(questionList[randomNum]);
    return (questionList[randomNum]);
}

var question1 = document.querySelector("#answer");
question1.innerHTML = myRandomQuestion();
  
// use + and - buttons to change the text size, up to a limit (1-4)
// pass in class of text (.display-1), interate number in class, return new class.

function textPlus() {

}

function textMinus() {

}

/*
  var time = document.getElementById("answer");
  console.log("question1 " + question1);
  console.log("time " + time[0]);
*/

  
  
  





/* function Calculator() {
    var answer = document.querySelector('#answer');
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    var select = document.querySelector('select');
    var selectorValue = select.options[select.selectedIndex].value
    var theCalculatedAnswer;

    if(selectorValue == 'add') {
        theCalculatedAnswer = num1 + num2;
    } else 
    if(selectorValue == 'minus') {
        theCalculatedAnswer = num1 - num2;
    } else  
    if(selectorValue == 'divide') {
        theCalculatedAnswer = num1 / num2;
    } else  
    if(selectorValue == 'multiply') {
        theCalculatedAnswer = num1 * num2;
    } else {
        // alert("There was an error.");
        theCalculatedAnswer = "Invalid operator"
    }

    answer.innerHTML = theCalculatedAnswer;
    console.log(num1,num2);
}
*/

/* My failed calculator... wth
// get value from first input field
var num1 = document.querySelector('#num1');
console.log(num1);

// get value from second input field
var num2 = document.querySelector('#num2');
console.log(num2);

// get selector value from form
var selector = document.querySelector('#selector').value;


function calculate(n1, n2, selectorValue) {
    
    if(selectorValue == 'add') {
        return n1 + n2;
    } else 
    if(selectorValue == 'minus') {
        return n1 - n2;
    } else  
    if(selectorValue == 'divide') {
        return n1 / n2;
    } else  
    if(selectorValue == 'multiply') {
        return n1 * n2;
    } else {
        return "There was an error."
    }
    console.log(n1);
    console.log(n2);
    console.log(selectorValue);
}

calculate(num1.value, num2.value, selector);
// */