<?php
include '../Model/model.php';

$path = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : "/";
$buscar_id = explode('/', $path);

$id = ($path !== '/') ? end($buscar_id) : null;


$data = verPersonas($id);

echo $data;
