function peticion1(){
			//creación del objeto
			var xhttp=new XMLHttpRequest();
			//evento
			xhttp.onreadystatechange=function(){  
				if(this.readyState==4 && this.status==200){
					
					miFuncion(this);
				}

			  };  //cierre de la definición de function()

		   //preparo conexión
		   xhttp.open("GET","catalog.xml",true);
		   //envío	
		   xhttp.send();
		}

		function miFuncion(objetoRequest){


				        var respuestaXml= objetoRequest.responseXML;
						alert(respuestaXml);
						var tabla="<tr><th>Artist</th><th>Title</th></tr>";
						var x=respuestaXml.getElementsByTagName("CD");
						for(i=0;i<x.length;i++){
							tabla+="<tr><td>"+
							x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue+
							"</td><td>"+
							x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+
							"</td></tr>";

						}

				document.getElementById("demo").innerHTML=tabla;
		

		}



function peticion2(){
			//creación del objeto
			var xhttp=new XMLHttpRequest();
			//evento
			xhttp.onreadystatechange=function(){  
				if(this.readyState==4 && this.status==200){
					
				var noticias=this.responseText.split("\n");	
				for(i=0:i<noticias.length;i++) { 

					document.getElementById("noticias").innerHTML+=noticias[i];
                    }


				}

			  };  //cierre de la definición de function()

		   //preparo conexión
		   xhttp.open("GET","noticias.txt",true);
		   //envío	
		   xhttp.send();
		}