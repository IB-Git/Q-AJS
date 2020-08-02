const allQuestionsAndAnswers = [
  {
    question: "Odd Man out",
    options: [
      {
        a: "Marlo",
        b: "Avon",
        c: "Omar",
        d: "Jimmy",
      },
    ],
    correct: "Jimmy",
    selected: ""
  },
  {
    question: "Let us",
    options: [
      {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
      },
    ],
    correct: "C",
    selected: ""
  },
  {
    question: "Catch",
    options: [
      {
        a: "21",
        b: "22",
        c: "23",
        d: "24",
      },
    ],
    correct: "22",
    selected: ""
  },
  {
    question: "Back in the 90's...",
    options: [
      {
        a: ", I was famous",
        b: ", I was cool",
        c: ", I was in a very famous T.V. show",
        d: ", I was very famous",
      },
    ],
    correct: ", I was in a very famous T.V. show",
    selected: ""
  },
  {
    question: "Odd man out",
    options: [
      {
        a: "Belarus",
        b: "Germany",
        c: "Italy",
        d: "Russia",
      },
    ],
    correct: "Russia",
    selected: ""
  },
  {
    question: "LG electronics stands for",
    options: [
      {
        a: "Life's Great",
        b: "Life's Glorious",
        c: "Life's Glamouruos",
        d: "Life's Good",
      },
    ],
    correct: "Life's Good",
    selected: ""
  },
  {
    question: "Lionel ____ Messi?",
    options: [
      {
        a: "Andres",
        b: "Sergio",
        c: "Thiago",
        d: "Juan",
      },
    ],
    correct: "Andres",
    selected: ""
  },
  {
    question: "Kurt Cobain was associated with",
    options: [
      {
        a: "Pavement",
        b: "The Smashing Pumpkins",
        c: "Beach House",
        d: "Nirvana",
      },
    ],
    correct: "Nirvana",
    selected: ""
  },
  {
    question: "2+2=",
    options: [
      {
        a: "5",
        b: "6",
        c: "7",
        d: "8",
      },
    ],
    correct: "5",
    selected: ""
  },
  {
    question: "sin=",
    options: [
      {
        a: "opp/hypo",
        b: "adj/hypo",
        c: "hypo/adj",
        d: "adj/opp",
      },
    ],
    correct: "opp/hypo",
    selected: ""
  },
  {
    question: "I bless the rains down in ___",
    options: [
      {
        a: "America",
        b: "Africa",
        c: "Antartica",
        d: "Atlanta",
      },
    ],
    correct: "Africa",
    selected: ""
  },
  {
    question: "Bill ___",
    options: [
      {
        a: "Waits",
        b: "Dates",
        c: "Hates",
        d: "Gates",
      },
    ],
    correct: "Gates",
    selected: ""
  },
  {
    question: "All that glitters is not gold - _____?",
    options: [
      {
        a: "Shakespeare",
        b: "Charles Dickens",
        c: "Orwell",
        d: "Twain",
      },
    ],
    correct: "Shakespeare",
    selected: ""
  },
  {
    question: "Odd man out",
    options: [
      {
        a: "Cogniznt",
        b: "Amazon",
        c: "Netflix",
        d: "Facebook",
      },
    ],
    correct: "Cogniznt",
    selected: ""
  },
  {
    question: "22/7=?",
    options: [
      {
        a: "3.142859",
        b: "3.142857",
        c: "3.142758",
        d: "3.142785",
      },
    ],
    correct: "3.142857",
    selected: ""
  },
  {
    question: "Generally, OS means?",
    options: [
      {
        a: "Operations Schema",
        b: "Operator Skills",
        c: "Operating System",
        d: "Operating solo",
      },
    ],
    correct: "Operating System",
    selected: ""
  },
  {
    question: "Odd man out",
    options: [
      {
        a: "Apple",
        b: "Pineapple",
        c: "Green Apple",
        d: "Broccoli",
      },
    ],
    correct: "Broccoli",
    selected: ""
  },
  {
    question: "Google's parent company is",
    options: [
      {
        a: "AT&T",
        b: "Alphabet Inc.",
        c: "The Boring Co.",
        d: "Bell Labs",
      },
    ],
    correct: "Alphabet Inc.",
    selected: ""
  },
  {
    question: "Who is the author of Python",
    options: [
      {
        a: "Yukihiro Matsumoto",
        b: "Siraj Raval",
        c: "Guido Van Rossum",
        d: "Brendan Eich",
      },
    ],
    correct: "Guido Van Rossum",
    selected: ""
  },
];


// Code for displaying the Q&A dynamically

const sectionBody = document.getElementById('main-section');

for (let questionAndOptions in allQuestionsAndAnswers) {

    const displayQuestion = document.createElement("h4");
    const optionsForQuestion = document.createElement("p");
    optionsForQuestion.classList.add('styleOptions')
    displayQuestion.innerText = allQuestionsAndAnswers[questionAndOptions].question;
    optionsForQuestion.innerText = JSON.stringify(allQuestionsAndAnswers[questionAndOptions].options); //without JSO.stringfy Object,object is displayed
    displayQuestion.classList.add('styleQuestions')
    displayQuestion.appendChild(optionsForQuestion);
    sectionBody.appendChild(displayQuestion);
}


// loop for calculating number of correct answers

for (i = 0; i < allQuestionsAndAnswers.length; i++) {
  if (allQuestionsAndAnswers[i].selected === correct) {
    calculateCorrectAnswers(i);
  } else {
    console.log("nothing much"); // couldn't understand what to write here so did this
  }
}


const calculateCorrectAnswers = (correctAnswers) => {
    const add = 0;
    add += correctAnswers;
  };


const displayAnswer = document.getElementById('final-answer'); // There's a <p> tag with id="final answer" in index.html 

const dispayNumberOfCorrectAnswers = () => {
    // wanted to get the value of add from the calculateCorrectAnswers() here but don't know how to do it.
    const NumberOfCorrectAnswers =  calculateCorrectAnswers(); 
    displayAnswer.innerText = parseInt(NumberOfCorrectAnswers); 
};


// Displaying number of correct answers 

const Button = document.getElementById("final-answer-button");

Button.addEventListener("click", dispayNumberOfCorrectAnswers); // Don't know how this'll work

