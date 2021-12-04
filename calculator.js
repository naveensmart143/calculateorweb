let history_array = [];
if (JSON.parse(localStorage.getItem("history"))) {
  history_array = JSON.parse(localStorage.getItem("history"));
}
localStorage.setItem("history", JSON.stringify(history_array));
function showCalculator() {
  let showCalculator = document.querySelector(".calculator");
  showCalculator.classList.add("toggle");
}
function insert(num) {
  let focusValue = document.form1.textview;
  focusValue.focus();
  document.form1.textview.value = document.form1.textview.value + num;
}
function check() {
  let body_tag = "";
  history_array = JSON.parse(localStorage.getItem("history"));
  for (let i = 0; i < history_array.length; i++) {
    body_tag += `<li> ${history_array[i]} </li>`;
  }
  let history_tab = document.querySelector(".history_tab");
  let history_list = document.querySelector(".history_list");
  history_tab.classList.add("toggle_icon");
  history_list.innerHTML = body_tag;
}
function clear_history() {
  history_array = [];
  localStorage.setItem("history", JSON.stringify(history_array));
  alert("Your Calculation History Deleted");
  check();
}
function equal() {
  var exp = document.form1.textview.value;
  if (exp && exp !== "") {
    try {
      eval(exp);
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("Give a valid Expression....  :)");
      }
    }
    let value = exp.split("").join("") + " " + " = " + eval(exp);
    history_array.push(value);
    localStorage.setItem("history", JSON.stringify(history_array));
    document.form1.textview.value = eval(exp);
  } else {
    alert("provide values...  :)");
  }
}
/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(
    0,
    exp.length - 1
  ); /* remove the element from total length ? 1 */
}
