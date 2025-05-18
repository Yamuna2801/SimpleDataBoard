document.getElementById("data-board-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const email = document.getElementById("email-id").value.trim();
  const phone = document.getElementById("phone-number").value.trim();

  const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  const newRow = tableBody.insertRow();

  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = age;
  newRow.insertCell(2).textContent = dob;
  newRow.insertCell(3).textContent = email;
  newRow.insertCell(4).textContent = phone;

  const editCell = newRow.insertCell(5);
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    enterEditMode(newRow);
  };
  editCell.appendChild(editBtn);

  const deleteCell = newRow.insertCell(6);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    tableBody.removeChild(newRow);
  };
  deleteCell.appendChild(deleteBtn);

  document.getElementById("data-board-form").reset();
});

function enterEditMode(row) {
  const originalData = [];
  for (let i = 0; i < 5; i++) {
    originalData.push(row.cells[i].textContent);
    const input = document.createElement("input");
    input.value = row.cells[i].textContent;
    row.cells[i].textContent = '';
    row.cells[i].appendChild(input);
  }

  const editCell = row.cells[5];
  editCell.innerHTML = '';

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.onclick = function () {
    for (let i = 0; i < 5; i++) {
      row.cells[i].textContent = row.cells[i].querySelector("input").value;
    }
    restoreEditButton(row);
  };

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.onclick = function () {
    for (let i = 0; i < 5; i++) {
      row.cells[i].textContent = originalData[i];
    }
    restoreEditButton(row);
  };

  editCell.appendChild(saveBtn);
  editCell.appendChild(cancelBtn);
}

function restoreEditButton(row) {
  const editCell = row.cells[5];
  editCell.innerHTML = '';

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    enterEditMode(row);
  };
  editCell.appendChild(editBtn);
}
let user={};
console.log(user);