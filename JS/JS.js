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
  // const checkbox = document.createElement('input');
  // checkbox.type = 'checkbox';
  // checkboxCell.appendChild(checkbox);

  newRow.appendChild(taskCell);
  newRow.appendChild(checkboxCell);

  taskList.appendChild(newRow);

})
