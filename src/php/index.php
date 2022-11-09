<?php

require ('dbconnection.php');

   

    $dbcon = createDbConnection();

    $command = "INSERT INTO asiakas (etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES ('Antti', 'Miettinen', 'miettinen@gmail.com', '0465897895', 'TESTTEST', 'K')";

    //$command = "SELECT * FROM asiakas";

    //$command = "DELETE FROM asiakas WHERE id > 0";

    $dbcon->exec($command);

    //$id = $dbcon->lastInsertId();

    //$command = "INSERT INTO albums (Title, ArtistId) VALUES ('Anarchy in the U.K.', $id)";

    //$dbcon->exec($command);