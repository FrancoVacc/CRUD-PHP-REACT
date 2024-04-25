<?php
include '../model/model.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'];
$nombre = $data['nombre'];
$apellido = $data['apellido'];
$telefono = $data['telefono'];
$direccion = $data['direccion'];

if ($id <= 0 || !isset($id, $nombre, $apellido, $telefono, $direccion)) {
    echo "la id no corresponde con ningun registro";
} else {
    modificarPersona($id, $nombre, $apellido, $telefono, $direccion);
}
