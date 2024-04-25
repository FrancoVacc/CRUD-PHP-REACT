<?php
include '../Model/model.php';

$json = json_decode(file_get_contents('php://input'), true);

$nombre = $json['nombre'];
$apellido = $json['apellido'];
$telefono = $json['telefono'];
$direccion = $json['direccion'];

if (isset($nombre) && isset($apellido) && isset($telefono) && isset($direccion)) {
    if ($nombre != "" && $apellido != "" && $telefono != "" && $direccion != "") {
        agregarPersonas($nombre, $apellido, $telefono, $direccion);
    } else {
        echo "error al cargar, uno de los datos está vacío";
    }
} else {
    echo "error al cargar, los datos no coinciden";
}
