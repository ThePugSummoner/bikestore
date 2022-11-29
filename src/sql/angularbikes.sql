-- Active: 1669139412209@@127.0.0.1@3306@angularbikes
DROP DATABASE IF EXISTS angularbikes;

CREATE DATABASE angularbikes;

USE angularbikes;

CREATE TABLE asiakas (
    
    astunnus INT PRIMARY KEY AUTO_INCREMENT,
    etunimi VARCHAR(255) NOT NULL,
    sukunimi VARCHAR(255) NOT NULL,
    sposti VARCHAR(255) NOT NULL UNIQUE,
    puhnro VARCHAR(255) NOT NULL,
    salasana VARCHAR(255) NOT NULL,
    uutiskirje VARCHAR(5)
) AUTO_INCREMENT = 100;



INSERT INTO asiakas (etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES ('Enimi', 'Snimi', 'sposti@sposti.fi', '0441234567', 'SALASANA', NULL);
INSERT INTO asiakas (etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES ('Erkki', 'Esimmerkki', 'erkkiesim@sposti.fi', '0449876543', 'teSTTesT', 'K');

CREATE TABLE tilaus (
    astunnus INT(10),
    tilausnro SMALLINT PRIMARY KEY AUTO_INCREMENT,
    tila VARCHAR(30),
    tilauspvm DATETIME,
    summa DECIMAL(10,2),
    palautus VARCHAR(30),
    FOREIGN KEY (astunnus)
        REFERENCES asiakas(astunnus)
        ON DELETE CASCADE
) AUTO_INCREMENT = 1000;

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (100, 'Käsittelyssä', '2022-11-12', 150.45, 'Palauta tuote');

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (101, 'Toimitettu', '2021-8-18', 99.90, 'Palautus ei onnistu');

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (102, 'Matkalla', '2019-2-12', 599.90, 'Palautus ei onnistu');

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (103, 'Toimitettu', '2020-4-15', 12599.90, 'Palautus ei onnistu');

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (100, 'Toimitettu', '2018-12-20', 1299, 'Palautus ei onnistu');

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (101, 'Käsittelyssä', '2022-11-14', 325.55, 'Palauta tuote');

CREATE TABLE palvelu (
    ptunnus INT(10) PRIMARY KEY AUTO_INCREMENT,
    pnimi VARCHAR(255),
    hinta DECIMAL(10,2)
);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Ensihuolto', 59.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Kausihuolto', 79.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Perushuolto', 99.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Täyshuolto', 139.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Tuntityö', 89.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Etu-/takaenkaan vaihto', 18.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Renkaiden vaihto (eteen ja taakse)', 35.90);

CREATE TABLE ajanvaraus (
    vartunnus INT(10) PRIMARY KEY AUTO_INCREMENT,
    etunimi VARCHAR(255),
    sukunimi VARCHAR(255),
    sposti VARCHAR(255),
    puhnro VARCHAR(255),
    pnimi VARCHAR(255),
    merkki VARCHAR(255),
    pvm DATETIME,
    aika TIME
    );

INSERT INTO ajanvaraus (etunimi, sukunimi, sposti, puhnro, pnimi, merkki, pvm, aika) VALUES ('test1', 'test1', 'test1@test.com', '123456', 'Ensihuolto', 'Trek Rail 9', '2022-11-12', '19:30:10');


DROP TABLE ajanvaraus;


