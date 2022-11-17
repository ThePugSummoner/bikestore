<?php

require_once 'inc/functions.php';
require_once 'inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
//$description = $input ->description;
$description1 = filter_var($input->description1, FILTER_UNSAFE_RAW);
$description2 = filter_var($input->description2, FILTER_UNSAFE_RAW);
$description3 = filter_var($input->description3, FILTER_UNSAFE_RAW, FILTER_SANITIZE_EMAIL);
$description4 = filter_var($input->description4, FILTER_UNSAFE_RAW, FILTER_SANITIZE_NUMBER_INT);
$description5 = filter_var($input->description5, FILTER_UNSAFE_RAW);
$description6 = filter_var($input->description6, FILTER_UNSAFE_RAW);

$description1 = strip_tags($description1);
$description2 = strip_tags($description2);
$description3 = strip_tags($description3);
$description4 = strip_tags($description4);
$description5 = strip_tags($description5);
$description6 = strip_tags($description6);

$description1 = trim($description1);
$description2 = trim($description2);
$description3 = trim($description3);
$description4 = trim($description4);
$description5 = trim($description5);
$description6 = trim($description6);

try {
    /*$db = new PDO('mysql:host=localhost;dbname=todo;charset=utf8', 'root', '');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);*/

    $dbcon = openDb();

    $query = $dbcon->prepare('insert into asiakas(etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) values (:etunimi, :sukunimi, :sposti, :puhnro, :salasana, :uutiskirje)');
    $query->bindValue(':etunimi', $description1, PDO::PARAM_STR);
    $query->bindValue(':sukunimi', $description2, PDO::PARAM_STR);
    $query->bindValue(':sposti', $description3, PDO::PARAM_STR);
    $query->bindValue(':puhnro', $description4, PDO::PARAM_STR);
    $query->bindValue(':salasana', $description5, PDO::PARAM_STR);
    $query->bindValue(':uutiskirje', $description6, PDO::PARAM_STR);
    $query->execute();


    header('HTTP/1.1 200 OK');
    $data = array('astunnus' => $dbcon->lastInsertId(), 'etunimi' => $description1, 'sukunimi' => $description2, 'sposti' => $description3, 'puhnro' => $description4, 'salasana' => $description5, 'uutiskirje' => $description6);
    print json_encode($data);

} catch (PDOException $pdoex) {
    /*header('HTTP/1.1 500 Internal Server Error');
    $error = array('error' => $pdoex->getMessage());
    print json_encode($error);*/
    returnError($pdoex);
}