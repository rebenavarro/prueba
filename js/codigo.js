
function verfecha(){
	var dia = new Date();
	document.getElementById('ver_mensaje').style.display = "block";
	document.getElementById('ver_mensaje').innerHTML = "La fecha y hora actual es " + dia;
    document.getElementById('ver_mensaje').style.backgroundColor="#E8DFD1";
    document.getElementById('ver_mensaje').style.border="5px solid beige";
    document.getElementById('ver_mensaje').style.padding="20px";
    document.getElementById('ver_mensaje').style.width="70%";
    document.getElementById('ver_mensaje').style.margin="5px";
    document.getElementById('ver_mensaje').style.textAlign="center";
}
function ocultarfecha(){
	var dia = new Date();
	document.getElementById('ver_mensaje').style.display = "none";
	document.getElementById('ver_mensaje').innerHTML = "La fecha y hora actual es " + dia;
}


function validar(){

var todo_correcto = true;


if(form1.nombre.value.length < 2 ) {
    todo_correcto = false;
	document.getElementById('nombreError').textContent = "No puede estar vacío este campo";
} else 
	document.getElementById('nombreError').textContent = " ";

if((form1.edad.value.length < 2 ) || (form1.edad.value.length < 2)) {
    todo_correcto = false;
	document.getElementById('edadError').textContent = "Máximo 2 dígitos";
} else 
	document.getElementById('edadError').textContent = " ";

if((form1.futuro.value.length < 2 ) || (form1.apellidos.value.length < 10)) {
    todo_correcto = false;
	document.getElementById('futuroError').textContent = "Debe insertar edades mayores a 2030";
} else 
	document.getElementById('futuroError').textContent = " ";

return todo_correcto;
}

function calculo(){

var fecha = new Date();
var futuro = fecha.getFullYear();
var obj1 = document.getElementById('edad').value;
var obj2 = document.getElementById('futuro').value;
var obj3 = document.getElementById('nombre').value;
var resta = (obj2-obj1);
var resultado=(obj2-resta)

document.getElementById('resultado').textContent = obj3 + ', en ' + obj2 + ' vas a tener ' + resultado + ' años ';
}