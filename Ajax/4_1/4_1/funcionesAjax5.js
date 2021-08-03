//--------------------Crear objeto XMLHttpRequest()------------------------------------//
 var ObjetoXMLHttpRequest;// variable, se puede llamar como queramos


 try{// para todos los navegadores excepto para IE6 o anteriores
 	ObjetoXMLHttpRequest=new XMLHttpRequest();

 }
 catch(e){//lanzamos la excepción
 	try{//Internet Explorer versión 2
 		ObjetoXMLHttpRequest=new ActiveXObject("XSXML2.XMLHTTP");

 	}
 	catch(e1){//IE antiguos
 		try{ ObjetoXMLHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");

 		}
 		catch(e2){
 			ObjetoXMLHttpRequest=false;//no está soportado
 		}

 	}

 }
ObjetoXMLHttpRequest.onreadystatechange=procesaRespuesta;
/*-----------------------------------------------------------*/

function procesaRespuesta(){
	
	
	if(ObjetoXMLHttpRequest.readyState==4){//los datos estan listos
		
		if(ObjetoXMLHttpRequest.status==200){//respuesta correcta
			alert("Datos recibidos correctamente");

			var disco=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("CD");
			//alert(disco[0].childNodes[1].nodeValue);
			for(i=0;i<disco.length;i++){
				if(disco[i].childNodes[1].nodeName=="TITLE"){
					titulo=disco[i].childNodes[1].childNodes[0].nodeValue;
					document.getElementById('titulo').innerHTML+=titulo+"</br>";
					}
				if(disco[i].childNodes[9].nodeName=="PRICE"){ 
				precios=disco[i].childNodes[9].childNodes[0].nodeValue;
				document.getElementById('precio').innerHTML+=precios+"</br>";
				}
			}

			//document.getElementById('noticias').innerHTML=ObjetoXMLHttpRequest.responseXML;
			// var titulo=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("TITLE");
			// var precio=ObjetoXMLHttpRequest.responseXML.getElementsByTagName("PRICE");
					

			// 	for(i=0;i<titulo.length;i++){
							
			// 		titulos=titulo[i].childNodes[0].nodeValue;//alert(titulos);
			// 		precios=precio[i].childNodes[0].nodeValue; //alert(precios);
			       
			//        document.getElementById('titulo').innerHTML+=titulos+"</br>";
			//        document.getElementById('precio').innerHTML+=precios+"</br>"; 
			// 	}
			       
			       
		}

			    
	}

}
		
	


//parte de generar y ejecutar la petición
function peticion(){

// preparo la petición
ObjetoXMLHttpRequest.open("GET","catalog.xml",true);// si no pongo nada por defecto es false. True=asíncrono

//ejecuto la petición

ObjetoXMLHttpRequest.send(null);//no son necesarios los parámetros
}