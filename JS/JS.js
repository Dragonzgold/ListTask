const buttonEvent = document.querySelector('#buttonSave');

buttonEvent.addEventListener('click', function(){

    tarea = document.querySelector('#textInput').value;

    if(tarea.trim() == ''){
        alert("usted introdujo un campo vacio. Por favor rellenelo con una tarea")
        return;
    }
    console.log("prueba2")
})
