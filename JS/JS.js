const buttonEvent = document.querySelector('#buttonSave');
const taskList = document.querySelector('tbody');

buttonEvent.addEventListener('click', function () {
  tarea = document.querySelector('#textInput').value;

  if (tarea.trim() == '') {
    alert("usted introdujo un campo vacio. Por favor rellenelo con una tarea")
    return;
  }
  const newRow = document.createElement('tr');

  const taskCell = document.createElement('td');
  taskCell.textContent = tarea;

  const checkboxCell = document.createElement('td');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkboxCell.appendChild(checkbox);

  const dateCell = document.createElement('td');
  const dateBox = document.createElement('input');
  dateBox.type = 'date';
  dateCell.appendChild(dateBox);

  const buttonCell = document.createElement('td');
  const buttonBox = document.createElement('button');
  buttonBox.textContent = "Eliminar";
  buttonCell.appendChild(buttonBox);

  newRow.appendChild(taskCell);
  newRow.appendChild(checkboxCell);
  newRow.appendChild(dateBox);
  newRow.appendChild(buttonCell)

  taskList.appendChild(newRow);
})

taskList.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.parentNode.remove();
  }
});