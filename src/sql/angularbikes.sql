-- Active: 1669136402829@@127.0.0.1@3306@angularbikes
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

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (104, 'Toimitettu', '2018-12-20', 1299, 'Palautus ei onnistu');

INSERT INTO tilaus (tila, tilauspvm, summa, palautus) VALUES ('Käsittelyssä', '2022-11-14', 325.55, 'Palauta tuote');

DROP TABLE asiakas;


CREATE TABLE tuotteet (
    tuotenro INT PRIMARY KEY AUTO_INCREMENT,
    nimi VARCHAR(100) not null,
    hinta (10,2) DECIMAL,
    trnro VARCHAR (30)
    image VARCHAR(50),
);

    INSERT INTO tuotteet(tuotenro, nimi, hinta, trnro, image) VALUES ('Maastopyörä');

    INSERT INTO tuotteet(tuotenro, nimi, hinta, trnro, image) VALUES ('Sähköpyörät');

    INSERT INTO tuotteet(tuotenro, nimi, hinta, trnro, image) VALUES ('Maantiepyörät');

    INSERT INTO tuotteet(tuotenro, nimi, hinta, trnro, image) VALUES ('Lastenpyörät');

    INSERT INTO tuotteet(tuotenro, nimi, hinta, trnro, image) VALUES ('Tarvikkeet');

    INSERT INTO tuotteet(tuotenro, nimi, hinta, trnro, image) VALUES ('Komponentit');

    

