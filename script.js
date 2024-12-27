// Alle fragen in einem Array
const alle_fragen = [
  (frage = {
    id: 1,
    frage: "Antwort ist A",
    antwort: "A",
  }),
  (frage = {
    id: 2,
    frage: "Antwort ist B",
    antwort: "B",
  }),
  (frage = {
    id: 3,
    frage: "Antwort ist C",
    antwort: "C",
  }),
];

let start_question_counter = 0;

window.addEventListener("load", loadQuestion);

// Frage verlinken
let question = document.getElementById("question");

function loadQuestion() {
  console.log(alle_fragen.length);
  var question_text = document.createTextNode(
    alle_fragen[start_question_counter].frage
  );
  question.appendChild(question_text);
}

function set_answer(answer) {
  if (answer === alle_fragen[start_question_counter].antwort) {
    console.log("antwort ist richtig");
    let answer_button = document.getElementById(answer);
    answer_button.classList.add("correct");
  } else {
    let answer_button = document.getElementById(answer);
    answer_button.classList.add("incorrect");
    let correct_answer = alle_fragen[start_question_counter].antwort;
    let correct_answer_button = document.getElementById(correct_answer);
    correct_answer_button.classList.add("correct");
  }
}

function next_question() {
  question.innerHTML = "";
  start_question_counter = start_question_counter + 1;
  console.log(start_question_counter);
  clear_button();
  if (start_question_counter < alle_fragen.length) {
    loadQuestion();
  } else {
    alert("Das Spiel ist vorbei");
  }
}

function clear_button() {
  let button_a = document.getElementById("A");
  button_a.classList.remove("correct");
  button_a.classList.remove("incorrect");
  console.log(button_a);
  let button_b = document.getElementById("B");
  button_b.classList.remove("correct");
  button_b.classList.remove("incorrect");
  let button_c = document.getElementById("C");
  button_c.classList.remove("correct");
  button_c.classList.remove("incorrect");
  let button_d = document.getElementById("D");
  button_d.classList.remove("correct");
  button_d.classList.remove("incorrect");
}
