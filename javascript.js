var S1units16 = [
    "Where do you live?",
    "What are some interesting jobs?",
    "What do some of your friends do?",
    "Where are you from? Do you have friends in a different city?",
    "Do you play sports? What sports do you play?",
    "Do you have a healthy lifestyle? Why or why not?",
    "What are you doing these days?",
    "What are people in your family doing these days?",
    "Why are you learning English?",
    "How do you feel now? Why?",
    "What makes you happy?",
    "Who are some of your good friends? Why do you like them?",
    "How was your day yesterday?",
    "What do you usually do on weekends? What did you do last weekend?",
    "Where is this school?",
    "Is there a bus stop near here?",
    "Where is your doctor’s office?"
]
var S1units712 = [
    "What was a movie you saw recently? How was it? What actors were in it?",
    "Where were you yesterday at 7:00 a.m.? At 1:00 p.m.? At 8:00 p.m.?",
    "Were you late for anything last week? Why?",
    "What fruit did you eat yesterday? Vegetables? Meats? What did you drink?",
    "Think of a dish you know how to make. How do you make it?",
    "What is usually in your refrigerator? What is in your refrigerator right now?",
    "What do you do when you have a headache? A stomachache? A fever?",
    "What should people do when they have a backache?",
    "What should you do when you have the flu? A sore throat? A cold?",
    "What is your favorite city? What is it like?",
    "How was your last vacation?",
    "How was the weather here last week?",
    "What kinds of music do you like?",
    "What kinds of music do your friends like? Your family?",
    "Who is your favorite musician or band? Why do you like them?",
    "What kind of music do they play?",
    "What are you going to do this weekend? What plans do you have?",
    "What do you like to do on vacation?",
    "What are you going to do this summer?"
    ];
var S2units16 = ["S2 units 1-6"]
var S2units712 = ["S2 units 7-12"]
var units16 = S1units16;
var units712 = S1units712; 
var unitRange =  units16.concat(units712);

// initial page loaded with a question
myRandomQuestion(unitRange);

Stretch1();

function myRandomQuestion(questionList) {
  // pass an array into the function as an argument. Then you can choose which set of data to be working with. 
  
  var questionNumber = questionList.length;
  console.log(questionList.length);
  
  var randomNum = Math.floor(Math.random() * questionNumber);
  console.log(randomNum);
  
  var theCalculatedAnswer = questionList[randomNum];
  
  var answer = document.querySelector('#answer');
  answer.innerHTML = theCalculatedAnswer;
  
  console.log(questionList[randomNum]);
  console.log(unitRange);
  return (questionList[randomNum]);
}

// make a new arr to hold all questions to be passed to generator
// make conditional to determine how to evaluate unit range
/* if(button x is active) {
    use these units;
} else { use these other units};
*/
    
    // set function that replaces all variables with Stretch 1 or 2 values, respectively
    function Stretch1() {
        document.querySelector("#stretch1").setAttribute("disabled", "");
        document.querySelector("#stretch2").removeAttribute("disabled");
        
        units16 = S1units16;
        units712 = S1units712;     
        
        unitRange = units16.concat(units712);
    }   
    
    function Stretch2() {
        document.querySelector("#stretch2").setAttribute("disabled", "");
        document.querySelector("#stretch1").removeAttribute("disabled");
        
        units16 = S2units16;
        units712 = S2units712;     
        
        unitRange = units16.concat(units712);
    }
    
    


// toggle attribute of "checked" on the unit buttons
// access an #id when the button is clicked. set its attribute to "checked" 
// remove value of "checked" from the other button. 
function unitsLast() {
    unitRange = units712;
    myRandomQuestion(unitRange);
};
function unitsEntire() {
    unitRange = units16.concat(units712);
    myRandomQuestion(unitRange);
};

var article = document.getElementById('answer');

// var question1 = document.querySelector("#answer");
// question1.innerHTML = myRandomQuestion();


// use + and - buttons to change the text size, up to a limit (1-4)
// pass in class of text (.display-1), interate number in class, return new class.


// iterates the size
function plus() {
    article.className = textPlus(article.className);
}
// increases the value of the class name value
    function textPlus(name) {
        
        var size;
        size = name[8];
        
        console.log(size);
        
        if(size > 1) {
            size--;
        }
        
        console.log(name);
        console.log(size);
        
        return "display-" + size;
    }

// iterates the size
function minus() {
    article.className = textMinus(article.className);
}
// decreases the value of the class name value
function textMinus(name) {
    console.log(name);
    
    var size;
    size = name[8];
    
    console.log(size);
    
    if(size < 4) {
        size++;
    }
    
    console.log(size);
    
    return "display-" + size;
}



  
  
  





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