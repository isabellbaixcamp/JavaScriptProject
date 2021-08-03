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
        /*  var nodos=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("libro");
          alert(nodos.length);//2
          alert(nodos[0].childNodes.length);//9
          childNodes: Devuelve un array con todos los nodos hijos que contiene el nodo.
          alert(nodos[0].childNodes[1].nodeName);//titulo
          alert(nodos[0].childNodes[1].childNodes[0].nodeValue);//Don Juan Tenorio
          alert(nodos[0].childNodes[2].nodeValue);*/
          var nombre,salida="",valor;
          var nodos=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("libro")[0].childNodes;
          //array de todos los hijos del primer tag libro
          /*nodeType: Indica el tipo de nodo; a cada tipo de nodo se le asigna un número
              1.-element (tag)
             */
          for(i=0;i<nodos.length;i++){
            if(nodos[i].nodeType==1) {
                           alert(i); //quienes son los tags:1,3,5,7
                           //es un tag
                           nombre=nodos[i].nodeName; //la palabra del tag
                           //alert(nombre);
                           valor=nodos[i].childNodes[0].nodeValue;
                           //alert(valor);
                           salida+="<p>"+nombre+":"+valor+"</p>";           
                            }
               }
         

          document.getElementById("milibro").innerHTML=salida;

      

            }
				}
  }


//parte de generar y ejecutar la petición
function peticion() {  
//preparo
ObjetoXMLHttpRequest.open("GET","libros.xml",true); //asíncrono
//ejecuto
ObjetoXMLHttpRequest.send(null); //no son necesarios 

}