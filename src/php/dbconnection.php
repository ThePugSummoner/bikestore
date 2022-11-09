<?php

function createDbConnection() {

    $ini = parse_ini_file('myconf.ini');

    $host = $ini["host"];
    $dbname = $ini["db"];
    $username = $ini["username"];
    $pw = $ini["pw"];

try {

    $dbcon = new PDO("mysql:host=$host;dbname=$dbname", $username, $pw);

    return $dbcon;

} catch(PDOException $e) {
    echo $e->getMessage();
}

return null;

}