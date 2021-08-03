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
   var salida="";			
   	//escribir todos los nombres de comidas en el id nombres
    var nombres=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("nombre");
    salida="<ul>";
      for(i=0;i<nombres.length;i++)
                {  salida+="<li>"+nombres[i].childNodes[0].nodeValue+"</li>";}
      
        document.getElementById("nombres").innerHTML=salida+"</ul>";
//añadir el código para que la salida sea una lista

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