<?php
include "../config/conection.php";

function verPersonas($id)
{
    global $conn;

    $sql = ($id === null) ?  "SELECT id, nombre, apellido, telefono, direccion FROM personas" : "SELECT id, nombre, apellido, telefono, direccion FROM personas WHERE id = $id LIMIT 1";

    $result = $conn->query($sql);
    $result_arr = [];

    while ($object = $result->fetch_object()) {
        array_push($result_arr, $object);
    }

    return json_encode($result_arr);
}

function agregarPersonas($nombre, $apellido, $telefono, $direccion)
{
    global $conn;


    $sql = "INSERT INTO personas (nombre, apellido, telefono, direccion) VALUES('$nombre', '$apellido', '$telefono', '$direccion')";

    if ($conn->query($sql)) {
        echo "Persona agregada con Éxito";
    } else {
        echo "error al agregar una persona";
    }
}

function modificarPersona($id, $nombre, $apellido, $telefono, $direccion)
{
    global $conn;

    $sql = "UPDATE personas SET nombre ='$nombre', apellido ='$apellido',telefono='$telefono',direccion='$direccion' WHERE id = $id";

    $conn->query($sql);
}

function eliminarPersona($id)
{
    global $conn;
    $sql = "DELETE FROM personas WHERE id = $id";

    $conn->query($sql);
}
