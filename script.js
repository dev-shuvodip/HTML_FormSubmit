document.querySelector("form#studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(document.getElementById("name").value);
  console.log(document.getElementById("address").value);
  console.log(document.getElementById("qualification").value);
  console.log(document.getElementById("age").value);
  console.log(document.getElementById('gender').options[document.getElementById('gender').selectedIndex].value);
});