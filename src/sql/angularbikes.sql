DROP DATABASE IF EXISTS angularbikes;

CREATE DATABASE angularbikes;

USE angularbikes;

CREATE TABLE asiakas (
    
    astunnus INT PRIMARY KEY AUTO_INCREMENT,
    etunimi VARCHAR(255) NOT NULL,
    sukunimi VARCHAR(255) NOT NULL,
    sposti VARCHAR(255) NOT NULL,
    puhnro VARCHAR(255) NOT NULL,
    salasana VARCHAR(255) NOT NULL,
    uutiskirje VARCHAR(5)
);



INSERT INTO asiakas (etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES ('Enimi', 'Snimi', 'sposti@sposti.fi', '0441234567', 'SALASANA', NULL);
INSERT INTO asiakas (etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES ('Erkki', 'Esimmerkki', 'erkkiesim@sposti.fi', '0449876543', 'teSTTesT', 'K');

CREATE TABLE tilaus (
    astunnus INT(10),
    tila VARCHAR(30),
    tilausnro SMALLINT PRIMARY KEY AUTO_INCREMENT,
    tilauspvm DATETIME,
    summa DECIMAL(10,2),
    palautus VARCHAR(30),
    FOREIGN KEY (astunnus)
        REFERENCES asiakas(astunnus)
        ON DELETE CASCADE
) AUTO_INCREMENT = 100;

INSERT INTO tilaus (tila, tilauspvm, summa, palautus) VALUES ('Käsittelyssä', '2022-11-12', 150.45, 'Palauta tuote');

INSERT INTO tilaus (tila, tilauspvm, summa, palautus) VALUES ('Toimitettu', '2021-8-18', 99.90, 'Palautus ei onnistu');

INSERT INTO tilaus (tila, tilauspvm, summa, palautus) VALUES ('Matkalla', '2019-2-12', 599.90, 'Palautus ei onnistu');

INSERT INTO tilaus (tila, tilauspvm, summa, palautus) VALUES ('Toimitettu', '2020-4-15', 12599.90, 'Palautus ei onnistu');


{/*DROP TABLE asiakas;*/}


