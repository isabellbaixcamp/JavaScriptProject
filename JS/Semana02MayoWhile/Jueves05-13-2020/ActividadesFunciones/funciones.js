function menor_de_tres(x, y, z) {
	var valida = false;
	var menor;
	if(0 < x && 0 < y && 0 < z) {
		if(x <= y && y <= z) {
			valida = true; // no necesaria la validacion boleana
			menor = x;
		} if(x >= y && y >= z) {
			valida = true;
			menor = z;
		} if(y <= x && x <= z) {
			valida = true;
			menor = y;
		} // ARREGLAR LOS ELEMENTOS EN CASO DE QUE COINCIDAN 2 NUMEROS TANTO MENORES COMO MAYORES
	}
	else {
		menor = "tienen que ser numeros positivos";
	}

	return menor;

}

function mayor_de_tres(a, b, c) {
	var valida = false;
	var mayor;
	if(0 < a && 0 < b && 0 < c) {
		if(a <= b && b <= c) {
			valida = true;
			mayor = c;
		} else if(a >= b && b >= c) {
			valida = true;
			mayor = a;
		} else {
			valida = true;
			mayor = b;
		} // ARREGLAR LOS ELEMENTOS EN CASO DE QUE COINCIDAN 2 NUMEROS TANTO MENORES COMO MAYORES
	}
	else {
		mayor = "tienen que ser numeros positivos";
	}

	return mayor;

}

function promedio_de_tres(i, j, k) {
	sum = 0;
	prom = 0;
	if(0 < i && 0 < j && 0 < k) {
		sum = i + j + k;
		prom = sum / 3; // ARREGLAR LOS ELEMENTOS EN CASO DE QUE COINCIDAN 2 NUMEROS TANTO MENORES COMO MAYORES
	}
	else {
		prom = "tienen que ser numeros positivos";
	}

	return prom;

}


