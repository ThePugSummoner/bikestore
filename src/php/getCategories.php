<?php
require_once './inc/functions.php';
require_once './inc/headers.php';

try {
  $db = openDb();
  selectAsJson($db,'SELECT * FROM tuoteryhma');
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}