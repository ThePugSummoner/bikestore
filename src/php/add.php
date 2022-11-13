<?php
/*header('Access-Control-Allow-Origin:*'); //http://localhost:3000
header('Access-Control-Allow-Headers: Accept, Content-Type', 'Access-Control-Allow-Header');
header('Content-Type: application/json');

if ($_SERVER ['REQUEST_METHOD'] === 'OPTIONS' ) {
    return 0;
}*/

require_once 'inc/functions.php';
require_once 'inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
//$description = $input ->description;
$description1 = filter_var($input->description1, FILTER_UNSAFE_RAW);
$description2 = filter_var($input->description2, FILTER_UNSAFE_RAW);
$description3 = filter_var($input->description3, FILTER_UNSAFE_RAW);
$description4 = filter_var($input->description4, FILTER_UNSAFE_RAW);
$description5 = filter_var($input->description5, FILTER_UNSAFE_RAW);
$description6 = filter_var($input->description6, FILTER_UNSAFE_RAW);
//$description = strp_tags($description);


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