<?php 

//bd:prova , tabla:curso (codigoAlumno,nombre,curso,mail)
//consulta de todos los registros de esa tabla
include("../variables.php");
//conexión 
$conectar=mysqli_connect($servidor,$usuario,$contrasenha,$bd) or die("problemas en la connexión".mysqli_error($conectar)); 
//consulta

$consulta="select * from curso";

$registros=mysqli_query($conectar,$consulta)or die("problemas en la consulta".mysqli_error($conectar)); 
$numregistros=mysqli_num_rows($registros);

echo  "num :".$numregistros;



for($i=0;$i<$numregistros;$i++){
//la i define el número de iteraciones que hacemos
    $fila=mysqli_fetch_array($registros);

    echo "<p>nombre:".$fila[1]."</p>";
	echo "<p>nombre:".$fila[1]."</p>";
	echo "<p>mail:".$fila[2]."</p>";
//un formulario en el cual se pueda escoger la tabla a consultar y q aparezcan todos los campos.

}


 ?>