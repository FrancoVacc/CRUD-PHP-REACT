<?php
include '../Model/model.php';
$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'];

if (!$id || !isset($id) || $id <= 0) {
    echo "la id es incorrecta";
} else {
    eliminarPersona($id);
}
