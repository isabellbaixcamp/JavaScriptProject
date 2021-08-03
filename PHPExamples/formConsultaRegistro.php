<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Elige una tabla</h1>
    <form action="rconsultaRegistro.php" method="POST" name="formConsulta">
        <label for="tabla">Tabla</label>
        <select id="tabla" name="tabla">
            <option value="clientes2">clientes2</option>
            <option value="clients">clients</option>
            <option value="cursos">cursos</option>
            <option value="libros">libros</option>
            <option value="productos">productos</option>
            <option value="usuarios">usuarios</option>
        </select>
        <input type="submit" value="Recordar datos">
    </form>
</body>
</html>