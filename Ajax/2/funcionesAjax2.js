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
   					var nombres=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("nombre");
            var precios=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("precio");
            var salida="";
            alert(nombres[0].nodeName);
            for(i=0;i<nombres.length;i++){
            salida+="<p>"+nombres[i].nodeName+":"+nombres[i].childNodes[0].nodeValue+"</p>";
                                    //la 'palabra' del tag
            salida+="<p>"+precios[i].nodeName+":"+precios[i].childNodes[0].nodeValue+"</p>";
            salida+="---------------------------";
   //nodeValue para nodos texto
   //nodeName es para nodos tag
            }
            document.getElementById("demo").innerHTML=salida;
      
            }
				}
  }


//parte de generar y ejecutar la petición
function peticion() {  
//preparo
ObjetoXMLHttpRequest.open("GET","frutas.xml",true); //asíncrono
//ejecuto
ObjetoXMLHttpRequest.send(null); //no son necesarios 

}