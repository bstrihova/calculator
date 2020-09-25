let result = 0;

function addNumber() {
  // using const coz u don't change the add value in this function
  const add = Number(document.getElementById("add").value);
  result += add;
  document.getElementById("result").textContent = result;
}
