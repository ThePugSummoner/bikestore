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

CREATE TABLE palvelu (
    ptunnus INT(10) PRIMARY KEY AUTO_INCREMENT,
    pnimi VARCHAR(255),
    hinta DECIMAL(10,2)
);

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


CREATE TABLE tuoteryhma(
    trnro INT PRIMARY KEY AUTO_INCREMENT,
    trnimi varchar(60),
    trkuva VARCHAR(50),
    trkuvaus TEXT,
    trotsikko VARCHAR(60)
);

CREATE TABLE tuote (
    tuotenro INT PRIMARY KEY AUTO_INCREMENT,
    nimi VARCHAR(100) NOT NULL,
    kuvaus TEXT,
    hinta DECIMAL(10,2) ,
    trnro INT ,
    alakategoria varchar(40),
    kuva VARCHAR(50),
    saldo SMALLINT,
    koko VARCHAR(10),
    FOREIGN KEY (trnro) 
        REFERENCES tuoteryhma(trnro)
);
CREATE TABLE tilausrivi (
    tilausnro SMALLINT,
    rivinro SMALLINT,
    tuotenro INT,
    kpl SMALLINT,
    PRIMARY KEY (tilausnro, rivinro),
    FOREIGN KEY (tilausnro)
        REFERENCES tilaus(tilausnro)
        ON DELETE CASCADE,
    FOREIGN KEY (tuotenro)
        REFERENCES tuote(tuotenro)
);

DROP TABLE tuoteryhma;