<?php

require_once 'inc/functions.php';
require_once 'inc/headers.php';
//require('dbconnection.php');

$input = json_decode(file_get_contents('php://input'));
//$description = $input ->description;
$description1 = filter_var($input->description1, FILTER_UNSAFE_RAW);
$description2 = filter_var($input->description2, FILTER_UNSAFE_RAW);
$description3 = filter_var($input->description3, FILTER_UNSAFE_RAW);
$description4 = filter_var($input->description4, FILTER_UNSAFE_RAW);
$description5 = filter_var($input->description5, FILTER_UNSAFE_RAW);
$hash_pw = password_hash($description5, PASSWORD_DEFAULT);
$description6 = filter_var($input->description6, FILTER_UNSAFE_RAW);
//$description = strp_tags($description);

if (!empty($description1) && !empty($description2) && !empty($description3) && !empty($description4)) {

    try {
    /*$db = new PDO('mysql:host=localhost;dbname=todo;charset=utf8', 'root', '');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);*/

    $dbcon = openDb();

    $query = $dbcon->prepare('INSERT INTO asiakas(etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES (:etunimi, :sukunimi, :sposti, :puhnro, :salasana, :uutiskirje)');
    $query->bindValue(':etunimi', $description1, PDO::PARAM_STR);
    $query->bindValue(':sukunimi', $description2, PDO::PARAM_STR);
    $query->bindValue(':sposti', $description3, PDO::PARAM_STR);
    $query->bindValue(':puhnro', $description4, PDO::PARAM_STR);
    $query->bindValue(':salasana', $hash_pw, PDO::PARAM_STR);
    $query->bindValue(':uutiskirje', $description6, PDO::PARAM_STR);
    $query->execute();


    header('HTTP/1.1 200 OK');
    $data = array('astunnus' => $dbcon->lastInsertId(), 'etunimi' => $description1, 'sukunimi' => $description2, 'sposti' => $description3, 'puhnro' => $description4, 'salasana' => $description5, 'uutiskirje' => $description6);
    print json_encode($data);

} catch (PDOException $pdoex) {
    returnError($pdoex);
}
} else {
    echo "Antamasi tiedot ovat virhellisiä";
}