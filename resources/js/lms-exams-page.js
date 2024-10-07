const htmlquestions = [
  {   
      examType:"HTML",
      question: "1: What does HTML stand for?",
      choices: [
          "Hypertext Markup Language",
          "Hyperlink and Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinking Text Marking Language"
      ],
      correctAnswer: 0
  },
  {
      question: "2: Who is making the Web standards?",
      choices: [
          "Mozilla",
          "Google",
          "The World Wide Web Consortium",
          "Microsoft"
      ],
      correctAnswer: 2
  },
  {
      question: "3: Choose the correct HTML element for the largest heading:",
      choices: [
          "heading",
          "h6",
          "head",
          "h1"
      ],
      correctAnswer: 3
  },
  {
      question: "4: What is the correct HTML element for inserting a line break?",
      choices: [
          "br",
          "break",
          "lb",
          "line"
      ],
      correctAnswer: 0
  },
    {
      question: "5:What is the purpose of the `head` element in an HTML document?",
      choices: ["To contain the main content of the document", "To contain meta-information about the document", "To create hyperlinks", "To add images"],
      correctAnswer: 1
    },
    {
      question: "6:What is the difference between the `div` and `span` tags?",
      choices: ["`div` is inline, `span` is block-level", "`div` is for images, `span` is for text", "`div` is block-level, `span` is inline", "`div` is for links, `span` is for buttons"],
      correctAnswer: 2
    },
    {
      question: "7:How do you add an image to an HTML page?",
      choices: ["img", "image", "images", "Img"],
      correctAnswer: 0
    },
    {
      question: "8:What is the purpose of the `alt` attribute in an `img` tag?",
      choices: ["To provide alternative text for the image", "To specify the image width", "To link to an external stylesheet", "To set the background color"],
      correctAnswer: 0
    },
    {
      question: "9:Which is correct body tag?",
      choices: ["bodY", "BODY", "body", "Body"],
      correctAnswer: 2
    },
  {
      question: "10: Which character is used to indicate an end tag?",
      choices: [
          "*",
          "/",
          "lt;",
          "^"
      ],
      correctAnswer:1
  }
]
;
const cssquestions = [
  { 
    examType:"CSS",
    question: "1:Which property is used to change the background color in CSS?",
    choices: ["color", "background-color", "bgcolor", "background"],
    correctAnswer: 1
  },
  {
    question: "2:Which property is used to change the font of an element?",
    choices: ["font-weight", "font-style", "font-family", "font-variant"],
    correctAnswer: 2
  },
  {
    question: "3:How do you make each word in a text start with a capital letter?",
    choices: ["text-transform: capitalize", "text-transform: uppercase", "text-transform: lowercase", "text-transform: none"],
    correctAnswer: 0
  },
  {
    question: "4:Which property is used to change the text color of an element?",
    choices: ["fgcolor", "color", "text-color", "font-color"],
    correctAnswer: 1
  },
  {
    question: "5:Which property is used to add shadow to text?",
    choices: ["font-shadow", "text-shadow", "shadow-text", "text-decor"],
    correctAnswer: 1
  },
  {
    question: "6:How do you select an element with id 'demo'?",
    choices: ["#demo", ".demo", "demo", "*demo"],
    correctAnswer: 0
  },
  {
    question: "7:How do you select elements with class name 'example'?",
    choices: [".example", "#example", "example", "*example"],
    correctAnswer: 0
  },
  {
    question: "8:Which property is used to change the left margin of an element?",
    choices: ["padding-left", "margin-left", "margin", "left-margin"],
    correctAnswer: 1
  },
  {
    question: "9:Which CSS property controls the text size?",
    choices: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: 2
  },
  {
    question: "10:Which property is used to make a rounded border?",
    choices: ["border-radius", "border-style", "border-round", "corner-radius"],
    correctAnswer: 0
  }
]
;
const jsquestions = [
  { examType:"JavaScript",
    question: "1:Which company developed JavaScript?",
    choices: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
    correctAnswer: 2
  },
  {
    question: "2:Which of the following is the correct syntax to print a message in the console in JavaScript?",
    choices: ["print('Hello, World!')", "console.log('Hello, World!')", "log.console('Hello, World!')", "print.console('Hello, World!')"],
    correctAnswer: 1
  },
  {
    question: "3:Which of the following is not a JavaScript data type?",
    choices: ["Undefined", "Number", "Boolean", "Float"],
    correctAnswer: 3
  },
  {
    question: "4:Which of the following methods is used to access HTML elements using JavaScript?",
    choices: ["getElementById()", "getElementByClassName()", "getElementByTagName()", "All of the above"],
    correctAnswer: 3
  },
  {
    question: "5:Which symbol is used for comments in JavaScript?",
    choices: ["//", "/* */", "#", "$"],
    correctAnswer: 0
  },
  {
    question: "6:Which method can be used to create a new array by combining two arrays?",
    choices: ["concat()", "combine()", "append()", "merge()"],
    correctAnswer: 0
  },
  {
    question: "7:Which keyword is used to define a variable in JavaScript?",
    choices: ["var", "let", "const", "All of the above"],
    correctAnswer: 3
  },
  {
    question: "8:Which of the following is used to define a function in JavaScript?",
    choices: ["function myFunction()", "def myFunction()", "fn myFunction()", "func myFunction()"],
    correctAnswer: 0
  },
  {
    question: "9:How can you convert a string to a number in JavaScript?",
    choices: ["Number()", "parseFloat()", "parseInt()", "All of the above"],
    correctAnswer: 3
  },
  {
    question: "10:Which of the following is used to iterate over an array in JavaScript?",
    choices: ["forEach()", "map()", "filter()", "All of the above"],
    correctAnswer: 3
  }
]
;
let currentQuiz=[];
let currentQuestionIndex = 0;
let globalTimer;
let totalTime = 600;
let rightAnswers=0;
let wrongAnswers=0;
let rightAnswersText=[];
let wrongAnswersText=[];
let wrongAnswersTextkey=[];
let questionTextmR=[];
let questionTextmW=[];
let grade=[];
let notSelected=[];
let isExamStarted=false;
let isExamTypeLoaded =false;

const resultElement = document.getElementById('result');
function startGlobalTimer() {
  globalTimer = setInterval(() => {
    totalTime--;
    updateGlobalTimer();
  }, 1000);
}

function updateGlobalTimer() {
let timeContainer =document.getElementById('globalTimer');
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  if(totalTime==0){
    alert('exam end!');
    clearInterval(globalTimer);
  }
  timeContainer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function loadQuestion() {
  isExamTypeLoaded=true;
  if (currentQuestionIndex >= currentQuiz.length) {
    // finishExam();
    return;
  }
  document.querySelector('.description').style.display="none";
  const questionData = currentQuiz[currentQuestionIndex];
  const questionContainer = document.getElementById('question');
  questionContainer.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="choices">
      ${questionData.choices.map((choice, index) => `
      <div class="choices-wrapper">
          <input type="radio" name="choice" id="choice${index}" value="${index}">
          <label for="choice${index}">${choice}</label>
        </div>
      `).join('')}
    </div>
  `;
}

function getSelectedAnswer() {
  const choices = document.getElementsByName('choice');
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      return parseInt(choices[i].value);
    }
  }
  return -1;
}

function getAnswer() {
  const selectedIndex = getSelectedAnswer();
  if (selectedIndex === -1) {
   wrongAnswers++; 
   questionTextmW.push(currentQuestionText);
   wrongAnswersText.push("No answer selected");
    return false;
  }

  const currentQuestion = currentQuiz[currentQuestionIndex];
  const currentQuestionText=currentQuestion.question;
  const selectedChoice = document.querySelector(`label[for="choice${selectedIndex}"]`).textContent;
  const correctChoice = document.querySelector(`label[for="choice${currentQuestion.correctAnswer}"]`).textContent;

  if (selectedIndex === currentQuestion.correctAnswer) {
    rightAnswers++;
    questionTextmR.push(currentQuestionText);
    rightAnswersText.push(selectedChoice);
  } else {
    wrongAnswers++;
    questionTextmW.push(currentQuestionText);
    wrongAnswersTextkey.push(correctChoice);
    wrongAnswersText.push(selectedChoice);
  }
  return true;
}

function startExam(){
  if(isExamTypeLoaded){
  isExamStarted=true;
  clearInterval(globalTimer);
 startGlobalTimer();
 document.querySelector('#StartExam').style.visibility="hidden";
 document.querySelector('.buttons-container').style.display="block";
  }
}
function finishExam() {
  if(isExamTypeLoaded){
  if (!confirm("Do you really want to finish the exam?")) return;
  clearInterval(globalTimer);
  const question = document.getElementById('question');
  const result = document.getElementById('result');
  const resultsArea = document.createElement("div");
  question.style.display="none";
  result.style.display="block";
  document.querySelector('.buttons-container').style.display="none";
  let percentage=(rightAnswers/currentQuiz.length)*100;
  if(percentage>=90){
    grade.push("A+");
  }
  else if(percentage>=70){
    grade.push("A");
  }
  else if(percentage>= 50){
    grade.push("B");
  }
  else if(percentage>=40){
    grade.push("C");
  }
  else{
    grade.push("F");
  }
  resultsArea.innerHTML = `
    <p class="bg-blue padding-10">Results</p>
    <p class="bg-red text-al-lt padding-5-5" >Total Marks:${currentQuiz.length}</p>
    <p class="bg-green text-al-lt padding-5-5">Obtained Marks:${rightAnswers}</p>
    <p class="bg-green text-al-lt padding-5-5">Percentage:${percentage}</p>
    <p class="bg-green text-al-lt padding-5-5">Grade:${grade}</p>
    <button class="bg-info padding-5-5" onclick="showDetails()">Show Details</button>
  `;
  result.appendChild(resultsArea);
  document.getElementById('questionContainer').style.display = "none";

  document.getElementById('showDetails').addEventListener('click', function() {
    resultsArea.style.display = "none";
  });
}
}
function showDetails(){
 let  details =document.getElementById('details');
 const result = document.getElementById('result');
 result.style.display="none";
 details.innerHTML= `
 <p class="bg-blue padding-10">Marked Correct:</p>
 <p class="bg-green text-al-lt padding-5-5">Question:${"<br>"} ${questionTextmR.join("<br>")}</p>
 <p class="bg-green text-al-lt padding-5-5">Answer:${"<br>"} ${rightAnswersText.join("<br>")}</p> 
 <p class="bg-blue padding-10">Marked Incorrect:</p>
 <p class="bg-red text-al-lt padding-5-5">Question:${"<br>"} ${questionTextmW.join("<br>")}</p>
 <p class="bg-red text-al-lt padding-5-5">Answer:${"<br>"} ${wrongAnswersText.join("<br>")}</p>
 <p class="bg-info text-al-lt padding-5-5">Key:${"<br>"} ${wrongAnswersTextkey.join("<br>")}</p>
`;
}
function nextQuestion() {
  if(isExamStarted){
  getAnswer();
  currentQuestionIndex++ ;
  loadQuestion();
  
  if (currentQuestionIndex>=currentQuiz.length){
    document.querySelector('#endExam').style.visibility="visible";
  }
  else{
    document.querySelector('#endExam').style.visibility="hidden";
  }
  }
}
function showExamType(){
  let currentExamType = currentQuiz[0];
 document.getElementById('type').textContent= currentExamType.examType;
}
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

window.onkeydown=(s)=>{
  switch (s.key){
    case 's':
      startExam();
    break;
    case 'ArrowRight':
        nextQuestion();
      break;
    case 'ArrowLeft':
      prevQuestion();
      break;
    case 'Enter':
      if(currentQuestionIndex>=currentQuiz.length){
       finishExam();
      }
      break;
    }
}
function initializeExam(quiz) {
  currentQuiz=quiz;
  showExamType()
  document.querySelector('#StartExam').style.visibility="visible";
  clearInterval(globalTimer);
  loadQuestion();
}
