<?php
    $json = file_get_contents('php://input');
    $datos = json_decode($json);
    if ($datos->param1 == 42)
        echo $datos->param2.' conoce el sentido del Universo';
        else
            echo $datos->param2.'No conoce el sentido del Universo';
    die();
?>