
function cargaDocXML(rutaxml)
{ alert('se va a cargar doc xml');
if (window.XMLHttpRequest) {
   xhttp=new XMLHttpRequest(); //objeto XMLHttpRequest
   }
else {
   xhttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
xhttp.open("GET",rutaxml,false); //método
xhttp.send();
return xhttp.responseXML;
}