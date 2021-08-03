/**---------------Crear objecte XMLHttpRequest--------*/
var ObjetoXMLHttpRequest;

try{// para todos los navegadores excepto IE 6 o anteriores
ObjetoXMLHttpRequest=new XMLHttpRequest();

}
catch(e){
		try{ //Internet explorer versión 2
	ObjetoXMLHttpRequest=new ActiveXObject("XSXML2.XMLHTTP"); 
		}
		catch(e1){ //IE antiguos

			try{ ObjetoXMLHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");  }
			catch(e2){
           ObjetoXMLHttpRequest=false; //no está soportado
			}
		}

}

/**------------------------------------------------*/

// asignar una función encargada del procedimiento del evento
ObjetoXMLHttpRequest.onreadystatechange=procesaRespuesta;
	                                  //función

	function procesaRespuesta(){
		                      
   if(ObjetoXMLHttpRequest.readyState==4 ) {
   					// datos están listos

   					if(ObjetoXMLHttpRequest.status==200){
   						//respuesta correcta
   						
   	
var nodos=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("comida");
alert(nodos.length); //seis elementos

document.getElementById("preu").innerHTML=nodos[5].childNodes[3].childNodes[0].nodeValue;
   }
 }
}

//parte de generar y ejecutar la petición
function peticion() {  
//preparo
ObjetoXMLHttpRequest.open("GET","comidas.xml",true); //asíncrono
//ejecuto
ObjetoXMLHttpRequest.send(null); //no son necesarios 

}