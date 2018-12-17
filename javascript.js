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
var S2units16 = [
    "What are your hobbies?",
    "What are your friends’ hobbies?",
    "Do you like to play video games? If you do, what are your favorite games? What are you wearing today?",
    "Think of a friend. What does he or she usually wear?",
    "Think of two stores you usually go to. Which do you like better? Why?",
    "What sports do you enjoy?",
    "What sports do you not like?",
    "What sports do people in your family like?",
    "What kinds of public transportation do you usually use?",
    "Can you tell me where I can get some cash near here?",
    "Do you know what time it is?",
    "What is your personality like? How would you describe yourself? Think of a friend. What is his or her personality like?",
    "What are you doing right now?",
    "What is a dish that is delicious and easy to make? How do you make it?",
    "Do you drink coffee or tea? Do you usually have it at home or buy it outside?"
]
var S2units712 = [
    "How’s the weather today?",
    "What is the weather going to be like tomorrow?",
    "What is the hottest place in this country? The coldest?",
    "What time do you usually get dressed on weekdays? On weekends? What were you doing at 8:00 p.m. last night?",
    "Where were you living in 2008?",
    "Which school subjects are you most interested in?",
    "Which school subjects do you think are boring?",
    "What was the best class you ever took? Why?",
    "Have you ever been late for class this year? If so, how many times? How do you study for test?",
    "How do you prepare and get ready for tests? What do you do when you get nervous while taking tests?",
    "Do you ever help people with homework? If so, who did you help? What kind of homework was it?",
    "What was a favor you asked someone to do recently? What was a favor someone else asked you to do? Would you mind spelling your name for me?",
    "What do you usually do before you travel?",
    "What do you have to do this week?",
    "What did you have to do last weekend?"
]
var units16 = S1units16;
var units712 = S1units712; 
var unitRange =  units16.concat(units712);

var S1RPunits16 = [
    ["Greet Student B. Introduce yourself. Ask about Student B’s job. Show interest in B’s response.", "Respond to student A. Answer A’s questions."],
    ["Ask Student B how he/she gets to school or work. Then ask one or two follow-up questions. Ideas: How long does it take? Do you like getting to school/work this way?", "Answer Student A’s questions."],
    ["Ask Student B what he/she is doing these days.", "Answer Student A’s question. Add more information. Ideas: Do you like doing them? Why are you doing them?"],
    ["Invite Student B to do something with you this weekend. Then, listen to Student B, and then respond to the invitation.", "Decline Student A’s invitation and give a reason. Invite Student A to do something another time."],
    ["Ask Student B about his/her weekend.", "Respond to Student A’s question. Then use expressions to take turns to ask the same questions."],
    ["Ask Student B where a place is in your city. Then, repeat Student B’s answers to make sure you understood correctly.", "Respond to Student A’s question."],
];
var S1RPunits712 = [
    ["Tell Student B about someone who taught you a lot. Begin with: \“I learned a lot from...\” Then, listen and answer Student B’s question.", "Ask Student A for examples."],
    ["Ask Student B what he/she wants to have for lunch.", "Listen to Student A’s question and use expressions to show that you are thinking. Then answer Student A’s question."],
    ["Tell Student B that you have a bad headache.", "Listen to Student B and use expressions to show sympathy. Give advice on Student A’s problem."],
    ["Tell Student B about an exciting city you visited. Talk about where you went, who you went with, and what you did there.", "Listen to Student A. Use expressions to show interest and surprise. Then change roles."],
    ["Invite Student B to do something with you tomorrow. Then, listen to Student B’s response and accept the invitation.", "Listen to Student A and decline the invitation politely. Suggest doing the activity on another day instead."],
    ["Ask Student B if he/she is going to take a vacation this year. Then, listen to Student B’s response and show enthusiasm about his/her vacation plans.", "Tell Student A about your vacation plans. Talk about where you are going to go, when you are going to go, and what you are going to do."]
];
var S2RPunits16 = [
    ["Text A", "Text B"]
];
var S2RPunits712 = [
    ["Text AA", "Text BB"]
];
var RPunits16 = S1RPunits16;
var RPunits712 = S1RPunits712;
var RPunitRange = RPunits16.concat(RPunits712);

// initial page loaded with an initial question & roleplay
stretch1();
myRandomQuestion(unitRange);
myRandomRoleplay(RPunitRange);


function myRandomRoleplay(questionList) {
    var questionNumber = questionList.length;
    console.log(questionList.length);

    var randomNum = Math.floor(Math.random() * questionNumber);
    console.log(randomNum);

    var arr = document.querySelector("#roleplay").children[1].children;

    // now, loop over the arr, with each index having another array: A & B
    for(var i = 0; i < questionList.length; i++) {
        arr[i].innerHTML = questionList[randomNum][i];
    }

    return arr;
}

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
    
// set function that replaces all variables with Stretch 1 or 2 values, respectively
function stretch1() {
    //    document.querySelector("#bs1").setAttribute("disabled", "");
    //    document.querySelector("#stretch2").removeAttribute("disabled");
    document.querySelector("#bs2").classList.replace("btn-primary", "btn-outline-primary")
    document.querySelector("#bs1").classList.replace("btn-outline-success", "btn-success")
    
    // make +/- buttons outlined in Stretch 1 color green
    downupGreen();
    
    //  replace Interview Question array with all Stretch 1 content
    units16 = S1units16;
    units712 = S1units712;     
    unitRange = units16.concat(units712);
    
    // replace Roleplay array with all Stretch 1 content
    RPunits16 = S1RPunits16;
    RPunits712 = S1RPunits712;     
    RPunitRange = RPunits16.concat(RPunits712);
    
}   
function stretch2() {
    //    document.querySelector("#stretch2").setAttribute("disabled", "");
    //    document.querySelector("#bs1").removeAttribute("disabled");
    document.querySelector("#bs1").classList.replace("btn-success", "btn-outline-success")
    document.querySelector("#bs2").classList.replace("btn-outline-primary", "btn-primary")
    
    // make +/- buttons outlined in Stretch 2 color blue
    downupBlue();
    
    //  replace Interview Question array with all Stretch 2 content
    units16 = S2units16;
    units712 = S2units712;     
    unitRange = units16.concat(units712);
    
    // replace Roleplay array with all Stretch 2 content
    RPunits16 = S2RPunits16;
    RPunits712 = S2RPunits712;     
    RPunitRange = RPunits16.concat(RPunits712);
}    

// change the range of the units by updating the arr to certain units, or all.
function unitsLast() {
    // adjust units covered for Interview Questions
    unitRange = units712;
    myRandomQuestion(unitRange);
    
    // adjust units covered for Roleplays
    RPunitRange = RPunits712;
    myRandomRoleplay(RPunitRange);
};
function unitsEntire() {
    // adjust units covered for Interview Questions
    unitRange = units16.concat(units712);
    myRandomQuestion(unitRange);

    // adjust units covered for Roleplays
    RPunitRange = RPunits16.concat(RPunits712);
    myRandomRoleplay(RPunitRange);
};

// use + and - buttons to change the text size, up to a limit (1-4)
// pass in class of text (.display-1), interate number in class, return new class.
// grab h1 element where questions in arr will be placed.
var article = document.getElementById('answer');

// iterates the size
function plus() {
    article.className = textPlus(article.className);
}
// increases the value of the class name value
    function textPlus(name) {
        
        var size;
        size = name[8];
        
        if(size > 1) {
            size--;
        }
        
        return "display-" + size;
    }

// iterates the size
function minus() {
    article.className = textMinus(article.className);
}
// decreases the value of the class name value
function textMinus(name) {

    var size;
    size = name[8];
    
    if(size < 4) {
        size++;
    }
    
    return "display-" + size;
}

// add class to plus/minus buttons to change border color to match current level color.
function downupGreen() {
    var el = document.querySelector("#updown")
    
    for (var i = 0; i < 2; i++) {
        el.children[i].classList.add("border", "border-success");        
        el.children[i].classList.remove("border", "border-primary");        
    }  
}
function downupBlue() {
    var el = document.querySelector("#updown")
    
    for (var i = 0; i < 2; i++) {
        el.children[i].classList.add("border", "border-primary");        
        el.children[i].classList.remove("border", "border-success");        
    }  
}

// initial hiding of Roleplays when page is loaded
// done in CSS

// when Roleplays button is clicked, hide #answer and show #answer1
function roleplayShow() {
    document.querySelector("#roleplay").style.display = 'block';
    document.querySelector("#answer").style.display = 'none';
}
function roleplayHide() {
    document.querySelector("#roleplay").style.display = 'none';
    document.querySelector("#answer").style.display = 'block';
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