const form = document.getElementById("myForm");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const food = Array.from(
    document.querySelectorAll('input[name="food"]:checked')
  )
    .map((input) => input.value)
    .join(", ");
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  // Create a new row in the table and append the values
  const newRow = table.insertRow(-1);
  const cells = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
    newRow.insertCell(4),
    newRow.insertCell(5),
    newRow.insertCell(6),
    newRow.insertCell(7),
  ];
  cells[0].textContent = firstName;
  cells[1].textContent = lastName;
  cells[2].textContent = address;
  cells[3].textContent = pincode;
  cells[4].textContent = gender;
  cells[5].textContent = food;
  cells[6].textContent = state;
  cells[7].textContent = country;

  // Clear the form
  form.reset();
});
