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
		
			var  titulos=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("titulo");
			//ObjetoXMLHttpRequest.responseXML es el xml (árbol)
			var  cuerpos=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("cuerpo");

			alert(titulos.length); //2
			alert(titulos[0].childNodes[0].nodeValue);//Noticia 1
			alert(titulos[0].nodeName);//titulo
			var cadena="";
			for(i=0;i<titulos.length;i++){

				cadena+="<p>"+titulos[i].childNodes[0].nodeValue+":"+cuerpos[i].childNodes[0].nodeValue+"</p>";

			}
			//alert(cadena);
			document.getElementById('noticias').innerHTML=cadena;

			

		}
	}
}

function peticion(){
	//preparando los datos para la conexión
	ObjetoXMLHttpRequest.open("GET","noticias1.xml",true);
	                                               //asíncrono
	ObjetoXMLHttpRequest.send(null); //envía la petición
}