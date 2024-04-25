<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "crud_react";

$conn = new mysqli($hostname, $username, $password, $dbname);

if ($conn->connect_error) {
    die("falló la conexión" . $conn->connect_error);
}

//encabezados
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}


//extrae el método de la consulta
$method = $_SERVER['REQUEST_METHOD'];
