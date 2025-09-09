<?php
    $servername = "localhost"
    $username = "root"
    $password = ""
    $dbname = "agenda"

    // crea una conexion
    $conn = new mysqli($servername, $username, $password, $dbname)

    // Comprueba la conexion
    if ($conn->connect_error) {
        die("Connection failed." $conn->connection_error);
    }
?>