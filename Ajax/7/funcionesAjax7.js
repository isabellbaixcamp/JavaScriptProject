//Crear objecteXMLHttpRequest

var ObjetoXMLHttpRequest; //nombre variable, podría ser cualquier nombre

try{  
//intentamos crear el objeto más general para todos los navegadores, 
//excepto para el IE 6 o anteriores
ObjetoXMLHttpRequest=new XMLHttpRequest();
}catch(e){

		try { 
	     //IE, versión 2 del objeto
	     ObjetoXMLHttpRequest=new ActiveXObject("XSXML2.XMLHTTP");
           }
           catch(e1){  //IE más antiguos

           		try{  
           		ObjetoXMLHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(e2) { 
                    	ObjetoXMLHttpRequest=false;  //no soportado
                    }

           }

}



//asignar la función para el procedimiento de evento
ObjetoXMLHttpRequest.onreadystatechange=procesaRespuesta;
//readystatechange  evento que sucede cada vez que la propiedad readyState tiene un
//cambio de valor. Y cada vez que sucede eso se llama a la 
//función procesaRespuesta
function procesaRespuesta(){

	if(ObjetoXMLHttpRequest.readyState==4) { 
	//propiedad vale 4 cuando toda la respuesta se ha recibido
		if(ObjetoXMLHttpRequest.status==200){
	//La petición se ha recibido correctamente y se está enviando la respuesta

            var cadena="";
			var frutas=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("fruta");
			cadena+="<table><tr><th>Nombre</th><th>Precio</th><th>Procedencia</th><th>Cantidad</th></tr>";
			for(i=0;i<frutas.length;i++)
				{  cadena+="<tr><td>"+frutas[i].childNodes[1].childNodes[0].nodeValue+"</td><td>"+frutas[i].childNodes[3].childNodes[0].nodeValue+"</td><td>"+frutas[i].childNodes[5].childNodes[0].nodeValue+"</td><td>"+frutas[i].childNodes[7].childNodes[0].nodeValue+"</td></tr>";
					alert(cadena);
				}
			
				document.getElementById("fru").innerHTML=cadena+"</table>";

		}
	}
}

function peticion(){
	//preparando los datos para la conexión
	ObjetoXMLHttpRequest.open("GET","frutas.xml",true);
	                                               //asíncrono
	ObjetoXMLHttpRequest.send(null); //envía la petición
}		