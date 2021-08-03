//suma1:con parámetros y con return
function suma1(a,b) {

	return a + b;
}

// suma2:sin parámetros y con return
function suma2() { // la suma se declara sin parametros dentro del ambito de la funcion
	var a = parseInt(prompt("numero")); // por ello se le asignan las variables sin recibir parametros
	var b = parseInt(prompt("numero"));
	return a + b; 
}

//suma3:con parámetros y sin return
function suma3(a,b) { // al no poseer el return, solo devuelve lo encapsulado dentro al ser llamada
	alert("la suma es igual " + (a + b));
}

//suma4:sin parámetros y sin return
function suma4() {
	alert("la suma es " + (num1 + num2));
}