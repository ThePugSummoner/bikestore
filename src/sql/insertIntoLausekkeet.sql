INSERT INTO asiakas (etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES ('Enimi', 'Snimi', 'sposti@sposti.fi', '0441234567', 'SALASANA', NULL);
INSERT INTO asiakas (etunimi, sukunimi, sposti, puhnro, salasana, uutiskirje) VALUES ('Erkki', 'Esimmerkki', 'erkkiesim@sposti.fi', '0449876543', 'teSTTesT', 'K');

INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (100, 'Käsittelyssä', '2022-11-12', 150.45, 'Palauta tuote');


INSERT INTO tilaus (astunnus, tila, tilauspvm, summa, palautus) VALUES (101, 'Käsittelyssä', '2022-11-14', 325.55, 'Palauta tuote');

INSERT INTO palvelu (pnimi, hinta) VALUES ('Ensihuolto', 59.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Kausihuolto', 79.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Perushuolto', 99.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Täyshuolto', 139.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Tuntityö', 89.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Etu-/takaenkaan vaihto', 18.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Renkaiden vaihto (eteen ja taakse)', 35.90);


INSERT INTO ajanvaraus (etunimi, sukunimi, sposti, puhnro, pnimi, merkki, pvm, aika) VALUES ('test1', 'test1', 'test1@test.com', '123456', 'Ensihuolto', 'Trek Rail 9', '2022-11-12', '19:30:10');

-- Tästä alkaa tuoteryhmien vientilausekkeet
INSERT into tuoteryhma (trnimi) VALUES ("Maastopyörät"),("Sähköpyörät"),("Maantiepyörät"),("Lastenpyörät"),("Tarvikkeet"),("Komponentit");
-- Tähän loppuu tuoteryhmien vientilausekkeet
-- Tästä alkaa tuotteet vientilausekkeet
-- Maastopyörät
insert into tuote (nimi,kuvaus,hinta,trnro,alakategoria,kuva, saldo, koko) VALUES
("Serious Rockville 20 Lite","Urheilullinen Rockville 27,5 -versio on erinomainen maastopyörä lähtötasolle. Kevyessä alumiinirungossa on tasapainoinen varustelu ja urheilullisen raikas mutta ajaton muotoilu.Rockville on sekä vapaa-ajan että arjen maastopyörä, joka tarjoaa erinomaista vastinetta rahalle. Rockvillen laadukkaat ja monipuoliset komponentit tarkoittavat, että pyörä voidaan todella käyttää monenlaisilla pinnoilla.",219,1,"Etujousto","rockville.png", 2, 'L'),

("Cube Access WS EAZ","On olemassa sanonta, jonka mukaan valta ei ole mitään ilman valvontaa. Siksi Cube on varustanut upouuden Access WS EAZ -mallin vahvoilla ja helppokäyttöisillä hydraulisilla levyjarruilla, jotta voit pysähtyä nopeasti ja turvallisesti olosuhteista riippumatta. Yhdistettynä Suntourin jousitushaarukan kolhuja nielevään mukavuuteen ja Shimanon 2x8-speed vaihteiston laajaan valikoimaan tämä tarkoittaa, että tämä on pyörä, johon voit luottaa laajentaaksesi ajohorisonttiasi. Valitse seikkailusi ja lähde.",400,1,"Etujousto","cubeaccess.png", 2, 'S'),

("Orbea Oiz H10 TR","Oiz tietää, kuinka vaikeaa on rynnätä huipulle ja kiivetä tulostauluille ja voittajien palkintokorokkeille. Orbean ei tarvitse laatia pitkää sukupuuta, sillä kaksi maailmanmestaruutta on riittävä todiste siitä, että Oiz on todellinen täysverinen. Oiz on synonyymi aidolle maastohiihdolle, minkä vuoksi sen läsnäolo maailmancupissa on kaikkialla läsnä. Oiz on yksi markkinoiden kevyimmistä, jäykimmistä ja tehokkaimmista pyöristä, halusitpa sitten kilpailla tai vain ajella. Oizissa on se, mitä tarvitset: ei ole parempaa asetta, jolla voi tähdätä huipulle.",3849,1,"Täysjousto","orbeaoiz.png", 1, 'XL'),
("HAIBIKE AllTrail","Rocking the trails - ilman kompromisseja, mutta aina hieman lisää mukavuutta? AllTrail 6 27.5:n kanssa voit tehdä kaiken! Tämä e-Fully ei petä sinua edes vaikeassa maastossa 150 mm:n jousitusmatkojen ansiosta. Yamaha PW-ST -moottorilla, integroidulla 630 Wh:n akulla, RockShox-jousituselementeillä, SRAMin 12-vaihteisilla vaihteilla, 4-mäntäisillä levyjarruilla ja Plus-renkailla varustettuna olet valmis kaikkiin seikkailuihin.", 3669,1,"Täysjousto","haibikealltrail.png", 2, 'L'),

("Serious Rockville 29 Lite","Urheilullinen Rockville 27,5 -versio on erinomainen maastopyörä lähtötasolle. Kevyessä alumiinirungossa on tasapainoinen varustelu ja urheilullisen raikas mutta ajaton muotoilu.Rockville on sekä vapaa-ajan että arjen maastopyörä, joka tarjoaa erinomaista vastinetta rahalle. Rockvillen laadukkaat ja monipuoliset komponentit tarkoittavat, että pyörä voidaan todella käyttää monenlaisilla pinnoilla.",219,1,"Maastopyörä 29","rockville.png", 2, 'M'),

("Cube Access WS EAZ 29","On olemassa sanonta, jonka mukaan valta ei ole mitään ilman valvontaa. Siksi Cube on varustanut upouuden Access WS EAZ -mallin vahvoilla ja helppokäyttöisillä hydraulisilla levyjarruilla, jotta voit pysähtyä nopeasti ja turvallisesti olosuhteista riippumatta. Yhdistettynä Suntourin jousitushaarukan kolhuja nielevään mukavuuteen ja Shimanon 2x8-speed vaihteiston laajaan valikoimaan tämä tarkoittaa, että tämä on pyörä, johon voit luottaa laajentaaksesi ajohorisonttiasi. Valitse seikkailusi ja lähde.",400,1,"Maastopyörä 29","cubeaccess.png", 4, 'M'),

("Orbea Oiz H10 TR 27.5","Oiz tietää, kuinka vaikeaa on rynnätä huipulle ja kiivetä tulostauluille ja voittajien palkintokorokkeille. Orbean ei tarvitse laatia pitkää sukupuuta, sillä kaksi maailmanmestaruutta on riittävä todiste siitä, että Oiz on todellinen täysverinen. Oiz on synonyymi aidolle maastohiihdolle, minkä vuoksi sen läsnäolo maailmancupissa on kaikkialla läsnä. Oiz on yksi markkinoiden kevyimmistä, jäykimmistä ja tehokkaimmista pyöristä, halusitpa sitten kilpailla tai vain ajella. Oizissa on se, mitä tarvitset: ei ole parempaa asetta, jolla voi tähdätä huipulle.",3849,1,"Maastopyörä 27.5","orbeaoiz.png", 2, 'M'),

("HAIBIKE AllTrail 27.5","Rocking the trails - ilman kompromisseja, mutta aina hieman lisää mukavuutta? AllTrail 6 27.5:n kanssa voit tehdä kaiken! Tämä e-Fully ei petä sinua edes vaikeassa maastossa 150 mm:n jousitusmatkojen ansiosta. Yamaha PW-ST -moottorilla, integroidulla 630 Wh:n akulla, RockShox-jousituselementeillä, SRAMin 12-vaihteisilla vaihteilla, 4-mäntäisillä levyjarruilla ja Plus-renkailla varustettuna olet valmis kaikkiin seikkailuihin.",3669,1,"Maastopyörä 27.5","haibikealltrail.png", 2, 'L');
-- Maastopyörät loppuu

-- Sähköpyörät alkaa
insert into tuote (nimi,kuvaus,hinta,trnro,alakategoria,kuva, saldo, koko) VALUES
("Orbea Wild FS H20","Ota villiytymisesi haltuun!
Suurten seikkailujen aika. Ota vaatteet mukaan ja nouse pyörän selkään. Olipa edessäsi mitä haasteita tahansa, tänään voit hallita ne. Koska Wild FS avaa täysin uusia mahdollisuuksia. Tämä pyörä vie mahdollisuutesi ja valikoimasi uudelle tasolle. Sen avulla voit kiivetä jyrkimmätkin rampit ja luottaa maksimaaliseen pitoon. Älykkään muotoilun ja hienostuneen alustan ansiosta voit keskittyä täysin retkellesi. Wild FS tukee ponnistelujasi ja avaa sinulle täysin uusia metsästysalueita. Ota hallinta takaisin ja löydä peli(t) sisältäsi!",6299,2,"Sähkömaastopyörä","orbeawild.png", 2, 'M'),

("Orbea Rise H10","Nouse yliKone on suunniteltu antamaan sinulle vielä enemmän seikkailua poluilla ja antamaan sinun elää hetkessä. Rise tuo sinulle sen erityisen tunteen, jossa vähemmän E tarkoittaa enemmän pyörää. Halusitpa sitten ajaa pidempiä matkoja, päästä eeppisiin paikkoihin, olla yksinkertaisesti tehokkaampi tiellä tai kokea upeita seikkailuja entistä useammin, Rise ylittää odotuksesi ja merkitsee uutta maastopyöräilystandardia.",7899,2,"Sähkömaastopyörä","orbearise.png", 3, 'L'),

("Ortler Bozen Trapeze","The Ortler Bolzano women's model with wave frame and Bosch Active Plus 400 electric drive and 9-speed derailleur is a 28-inch trekking pedelec in a class of its own. Consistently high quality equipment and thought through down to the last detail and always sovereign: the heart of the Ortler Bozen Bosch is its intelligent new BOSCH electric drive.The efficient 250 watt motor offers optimum power development and propulsion on the mountai without ifs or buts. 80 % recharged in just under 2.5 hours, thanks to modern E-Power, even long distances and demanding tours with many metres of altitude can be covered.",1519,2,"Sähköretkipyörät","ortlerbozen.png", 1, 'XL'),

("HAIBIKE Trekking 6 Low-Step","Etsitkö mukavaa sähköistä trekking-pyörää ostosreissulle kaupungin läpi, päivittäiselle työmatkalle tai jopa pidemmille viikonloppumatkoille? Silloin uusi Trekking 6 LOW on ihanteellinen sähköpyörä sinulle! Erittäin matala sisäänkäynti ja pystyasento takaavat, että voit nousta kyytiin ja poistua siitä nopeasti milloin tahansa ja pysyä aina hallinnassa liikenteessä. Vakiovarusteena on tavarateline, tehokas valaistusjärjestelmä ja potkulaite, joten sinulla on kaikki, mitä tarvitset turvalliseen liikenteeseen. Ja kun tie muuttuu jyrkemmäksi tai matkatavarat ovat hieman painavampia, Yamaha PW-ST -moottori tarjoaa voimakasta tukea.",2669,2,"Sähköretkipyörät","haibiketrekking.png", 4, 'M'),

("Orbea Wild FS H60","Ota villiytymisesi haltuun! Suurten seikkailujen aika. Ota vaatteet mukaan ja nouse pyörän selkään. Olipa edessäsi mitä haasteita tahansa, tänään voit hallita ne. Koska Wild FS avaa täysin uusia mahdollisuuksia. Tämä pyörä vie mahdollisuutesi ja valikoimasi uudelle tasolle. Sen avulla voit kiivetä jyrkimmätkin rampit ja luottaa maksimaaliseen pitoon. Älykkään muotoilun ja hienostuneen alustan ansiosta voit keskittyä täysin retkellesi. Wild FS tukee ponnistelujasi ja avaa sinulle täysin uusia metsästysalueita. Ota hallinta takaisin ja löydä peli(t) sisältäsi!",6299,2,"Sähkökaupunkipyörä","orbeawild.png", 2, 'M'),

("Orbea Rise H60","Nouse yliKone on suunniteltu antamaan sinulle vielä enemmän seikkailua poluilla ja antamaan sinun elää hetkessä. Rise tuo sinulle sen erityisen tunteen, jossa vähemmän E tarkoittaa enemmän pyörää. Halusitpa sitten ajaa pidempiä matkoja, päästä eeppisiin paikkoihin, olla yksinkertaisesti tehokkaampi tiellä tai kokea upeita seikkailuja entistä useammin, Rise ylittää odotuksesi ja merkitsee uutta maastopyöräilystandardia.",7899,2,"Sähkökaupunkipyörä","orbeawild.png", 1, 'L'),

("Ortler Bozen Graveler","The Ortler Bolzano women's model with wave frame and Bosch Active Plus 400 electric drive and 9-speed derailleur is a 28-inch trekking pedelec in a class of its own. Consistently high quality equipment and thought through down to the last detail and always sovereign: the heart of the Ortler Bozen Bosch is its intelligent new BOSCH electric drive.The efficient 250 watt motor offers optimum power development and propulsion on the mountai without ifs or buts. 80 % recharged in just under 2.5 hours, thanks to modern E-Power, even long distances and demanding tours with many metres of altitude can be covered.",1519,2,"Gravel","ortlerbozen.png", 3, 'L'),

("HAIBIKE Trekking 6 Hi-Step","Etsitkö mukavaa sähköistä trekking-pyörää ostosreissulle kaupungin läpi, päivittäiselle työmatkalle tai jopa pidemmille viikonloppumatkoille? Silloin uusi Trekking 6 LOW on ihanteellinen sähköpyörä sinulle! Erittäin matala sisäänkäynti ja pystyasento takaavat, että voit nousta kyytiin ja poistua siitä nopeasti milloin tahansa ja pysyä aina hallinnassa liikenteessä. Vakiovarusteena on tavarateline, tehokas valaistusjärjestelmä ja potkulaite, joten sinulla on kaikki, mitä tarvitset turvalliseen liikenteeseen. Ja kun tie muuttuu jyrkemmäksi tai matkatavarat ovat hieman painavampia, Yamaha PW-ST -moottori tarjoaa voimakasta tukea.",2669,2,"Gravel","haibiketrekking.png", 1, 'S');
-- Sähköpyörät loppuu
-- Maantiepyörät alkaa
insert into tuote (nimi,kuvaus,hinta,trnro,alakategoria,kuva, saldo, koko) VALUES
("Cannondale CAAD Optimo 4","Exceptional Aluminum PerformanceEverything Cannondale know about aluminum road bikes in one space – refined tube profiles, precision butting, and double-pass welds create frames that are lighter and ride better than the competitors high-ticket alloy offerings.",879,3,"Katumaantiepyörä","cannondalecaad.png", 3, 'L'),

("Polygon Strattos S4","Strattos S4 on rakennettu kevyen ja reagoivan rungon ympärille, jossa on täyshiilikuituhaarukka. Tässä pyörässä yhdistyvät kevyt, kestävä ja luotettava kevytmetallirunko sekä todistettu suorituskyky. Se on täydellinen pyörä innokkaille maantiepyöräilijöille, urheilullisille harrastajille ja jokapäiväisille työmatkapyöräilijöille. Aja koko päivä, koe enemmän.",969,3,"Katumaantiepyörä","polygonstrattos.png", 3, 'M'),

("Vitus Razor intl.","Feeling a road bike surge forward when you press on the pedals and the excitement that comes from the ease of acceleration - that's how road cycling should feel. Whether you are stepping over your first road bike or pulling away from lights on a regular commute, the Vitus Razor delivers that same sensation of speed and freedom. And it never gets old.",759,3,"ENDURANCE","vitusrazor.png", 4, 'L'),

("BMC Teammachine SLR Four","BMC TEAMMACHINE SLR FOUR, MUSTA (ANTHRACITE/BRUSHED ALLOY)",4999,3,"ENDURANCE","bmcteammachine.png", 2, 'M'),

("Cannondale CAAD Optimus Prime","Exceptional Aluminum PerformanceEverything Cannondale know about aluminum road bikes in one space – refined tube profiles, precision butting, and double-pass welds create frames that are lighter and ride better than the competitors high-ticket alloy offerings.",879,3,"Thriathlon","cannondalecaad.png", 3, 'S'),

("Polygon Strattos KVG 100","Strattos S4 on rakennettu kevyen ja reagoivan rungon ympärille, jossa on täyshiilikuituhaarukka. Tässä pyörässä yhdistyvät kevyt, kestävä ja luotettava kevytmetallirunko sekä todistettu suorituskyky. Se on täydellinen pyörä innokkaille maantiepyöräilijöille, urheilullisille harrastajille ja jokapäiväisille työmatkapyöräilijöille. Aja koko päivä, koe enemmän.",969,3,"Thriathlon","polygonstrattos.png", 4, 'M'),

("Vitus Razor Dupa Depa.","Feeling a road bike surge forward when you press on the pedals and the excitement that comes from the ease of acceleration - that's how road cycling should feel. Whether you are stepping over your first road bike or pulling away from lights on a regular commute, the Vitus Razor delivers that same sensation of speed and freedom. And it never gets old.",759,3,"CYCLOCROSSIT","vitusrazor.png", 1, 'S'),

("BMC Teammachine TRL 99","-kisojen voittanut malli. Sekoita se parhaiden kanssa heidän huippuluokan kilpa-autollaan. Se on rakennettu aggressiivisen hiilialustan ympärille, ja sen paino on pidetty ehdottoman pienenä. Sram Force One -ryhmäsarjaa ja siihen sopivaa hiilivaihteista kampiakselia, Hunt 4 Season -vanteita ja Ritchey 4-Axis -viimeistelysarjaa käyttävä hiilipyörä Tension on podium-valmis. Kapean vaihteiston ja nopeiden Challenge Grifo -renkaiden ansiosta se on suunniteltu niin, että sinulla on riittävästi energiaa loppusprinttiin.",4999,3,"CYCLOCROSSIT","bmcteammachine.png", 2, 'L');
-- Maantiepyörät loppuu
-- Lastenpolkupyörät alkaa

insert into tuote (nimi,kuvaus,hinta,trnro,alakategoria,kuva, saldo, koko) VALUES
("Vermont Girly 18","Röyhkeille tytöille Vermontin Girly-lastenpyörä on juuri sopiva! Pyörä on todellinen katseenvangitsija ja myös erittäin turvallinen, joten jokainen henkeäsalpaava kiertotie on hauskaa pienelle pyöräilijälle.Lastenpyörä tekee vaikutuksen paitsi rohkealla ulkonäöllään myös ennen kaikkea laadullaan ja hyödyllisillä yksityiskohdillaan. Girly-lastenpyörässä on matalalla sisääntulolla varustetun rungon lisäksi tukevat alumiinivanteet, takajarrut ja etujarrut, joissa on lapsiystävällinen jarruvipu, sekä varretyyny. Toinen kohokohta on ohjaustangossa oleva tyylikäs kori, johon mahtuu kaikki, mitä kireät tytöt tarvitsevat. Vermont Girlyn turvallisuusominaisuudet, kuten heijastimet edessä, polkimissa ja tavaratelineessä, kello, kaksoispultatut apupyörät ja turvakahvat, täydentävät Vermont Girlyn.",99,4,"Lasten polkupyörät 12-18","vermontgirly.png", 3, 'one size'),

("Vermont Girly 16","Tyylikäs lastenpyörä ei vakuuta vain ulkonäöllisesti, vaan Vermont Girly on laadukas pyörä, jossa on paljon hyödyllisiä ominaisuuksia. Vermont Girly -pyörässä on matalan askelman rungon lisäksi vakaat alumiinirungot, takajarru ja etujarrut, joissa on lapsiystävällinen jarruvipu, sekä pehmuste varressa. Kaiken tämän kruunaa tyylikäs kori edessä.",99,4,"Lasten polkupyörät 12-18","vermontgirly.png", 4, 'one size'),

("Ortler Bricktown 20","Ortler Bricktown 20 ja 24 pyörä on suunniteltu erityisesti nuorille pyöräilijöille, ja siinä on klassinen Porteur-tyyli. Tässä polkupyörässä on kaareva teräsrunko, 3-vaihteinen napavaihteisto ja tukeva vakio-ohjainkori, joten se on sekä käytännöllinen että tyylikäs. Pyörän mukana toimitetaan ketjusuoja ja yhteensopivat suojukset, joissa on lapsiystävällinen muotoilu. Innokkaat nuoret pyöräilijät nauttivat Bricktownin hyvän ulkonäön lisäksi myös sen tarjoamasta mukavasta pyöräilykokemuksesta. Se on paras ja turvallisin ratsastusvaihtoehto sekä vapaa-aikaan että koulumatkalle.",309,4,"Lasten polkupyörät 20","ortlerbricktown.png", 5, 'one size'),

("Cobra Jura Cobra 20","With the luxuriously equipped Cobra Jura, the offspring, who should measure between 120 and 135 centimeters, can really have fun off-road. This is ensured by a solid but lightweight aluminum frame and Shimano 8-speed gears. In combination with a 11-32er cassette the youngest just fly up the climbs and hydraulic disc brakes bring the kids downhill again safely to a halt. 56 millimeter wide, treaded tires provide decent grip even on rough terrain and hollow rims provide stability.If your child wants to ride the bike to school and be on the road in the dark, mobile lights must be attached - and the all-rounder is ready.",459,4,"Lasten polkupyörät 20","cobrajura.png", 2, 'one size');
-- Lastenpolkupyörät loppuu

-- Tarvikkeet alkavat
insert into tuote (nimi,kuvaus,hinta,trnro,alakategoria,kuva, saldo) VALUES
("SKS Beavertail Lokasuojat setti 26-28","Monipuolinen paikoilleen napsautetava lokasuoja innovatiivisella muotoilulla. Optimaalinen liansuojaus, sopii myös joustohaarukoihin. Vankka teräksinen kiinnike turvallista ja helppoa asennusta varten. Renkaan leveys max. 54 mm.",19,5,"Lokasuoja","sksbeavertail.png", 10),

("Topeak Defender M1 & XC11 Lokasuojasarja 27.5","DeFende M1 -suojus on yhteensopiva kaikkien tavallisten haarukoiden kanssa. Pikakiinnikkeen ansiosta suojalevy voidaan kiinnittää ja irrottaa muutamassa sekunnissa. Erityisen muotonsa ansiosta kevyt DeFender XC11 -suojus tarjoaa optimaalisen suojan myös maastopyörille. Turvallisen kiinnitysmekanismin ansiosta lokasuoja voidaan kiinnittää ja irrottaa sekunneissa mihin tahansa pyöreään satulatukeen, jonka halkaisija on 25,4-34,9 mm. Lisäksi sen kulmaa voidaan säätää kahdesti optimaalisen rengaspeiton saavuttamiseksi. Kiillotetut alapinnat estävät tehokkaasti lian tarttumisen.",44,5,"Lokasuoja","topeakdefender.png", 22),

("CatEye OH2200 Yamabiko Soittokello","Erittäin tyylikäs ja äänekäs polkupyöräkello, jossa on erinomainen ääni ja joka on valmistettu messingistä kaupunkipyörääsi. Kiinnitin on valmistettu alumiinista.",16,5,"Soittekello","cateye.png", 25),

("Knog Oi Classic Soittokello","Eikö sinulla ole soittokelloa? Kukapa pyöräilijä ei olisi kuullut tuota kysymystä? Knog Oi! soittokellolla monen jalankulkijan unelmasta voi tulla totta. Jopa pyöräilijät, jotka aiemmin olivat kyllästyneet soittokelloihin urheilullisista tai esteettisistä syistä, ovat innostuneet Knog Oi! kellosta. Oi! Ei ihan mikä tahansa soittokello. Kellon tyylikäs metallirengas kiiltää upeasti ohjaustangossa. Tällä soittokellolla varmistat, että muut kuulevat sinut liikenteessä!",19,5,"Soittekello","knog.png", 46),

("Red Cycling Products Front Basket","Nopeasti kiinnitettävä ja irroitettäva pyörän etukori. Kevyt etukori kiinnitetään ohjaustankoon silmän räpäyksessä ilman työkaluja. Korissa on näppärä kantokahva, joka tekee korista mainion avun esimerkiksi ruokaostoksille. Korin tiivis verkkomateriaali estää pienempienkin esineiden tippumisen korista ajon aikana. Ehdoton varuste kaupunkiajoon.",18,5,"Korit","frontbasket.png", 34),

("Basil Jasmin Baboushka Pyöräkori Lapset","Basil Jasmin on polkupyöräkori, joka on tarkoitettu lasten polkupyörän etuosaan. Kiinnitetään kahdella koukulla, ja siinä on värikäs koristenauha, Babouschka-nukke ja kantokahva.",21,5,"Korit","basiljasmin.png", 32),

("Red Cycling Products Ultimate Kickstand Sivuseisontatuki","RCP:n tukeva ja säädettävä seisontatuki on uudempi versio klassisesta mallista. Jalka asennetaan pyörään keskiölaakerin taakse. Jalan pituuden voi säätää sopivaksi kaikkiin 24-29 kokoisiin renkaisiin. Se sopii siis sekä kaupunkipyöriin että myös suurirenkaisiin maastopyöriin. Jalka on erityisen tukeva ja sen vuoksi se sopii myös sähköpyörissä käytettäväksi.",12,5,"Seisontatuki","ultimatekickstand.png", 55),

("XLC KS-S01 Sivuseisontatuki 24-28","Tämä vakaa potkuteline kiinnitetään pohjakiinnikkeen alle, ja se sopii pyöriin, joiden pyörät ovat 24-28 tuumaa. Erittäin suuri kumijalka takaa turvallisen jalustan.Pituussäädettävä tekniikka:Nämä jalustat ovat helposti säädettävissä, ja niitä voidaan käyttää eri pyörä- ja runkokokoja varten, joten sahaaminen jalan lyhentämiseksi ei ole enäätarpeen.",16,5,"Seisontatuki","xlcks.png", 47);
-- Tarvikkeet loppuvat

-- Komponentit alkavat
insert into tuote (nimi,kuvaus,hinta,trnro,alakategoria,kuva, saldo) VALUES
("DARTMOOR Stream Polkimet","Kevyt ja vakaa. Valetut alumiinipolkimet Stream Pro takaavat parhaan pidon 10 nastalla.",38,6,"Polkimet","dartmoor.png", 20),

("Xpedo Spry Polkimet","Ultrakevyt XPEDO Spry -alustapoljin on ihanteellinen MTB-pyörään! 14 terästappia per poljin (7 per kulutuspinta) takaa optimaalisen voimansiirron ja pidon, joten pysyt MTB-pyöräsi hallinnassa vaikeimmissakin olosuhteissa. Erittäin kestävä CroMoly-teräsakseli, jossa on tiivistetty teollisuuslaakeri ja kaksi liukulaakeria, takaa luotettavan pitkän aikavälin suorituskyvyn. Yksinkertainen, tyylikäs ulkonäkö ja värivalikoima tekevät Sprystä halutun litteän polkimen.",92,6,"Polkimet","xpedo.png", 28),

("Eclat Stroke Ketju","Eclat Stroke Ketju musta",29,6,"Ketjut","eclat.png", 34),

("KMC X9SL Polkupyörän ketju 9-vaihteinen","Hopeanvärisellä 9-vaihteisella X9SL-ketjulla KMC esittelee erittäin kevyen (SL), ruosteenestoisen ja erittäin kestävän kilpapyörä- ja maastoketjun Shimanon, Campagnolon ja SRAMin 9-vaihteisille vaihteistoille.",38,6,"Ketjut","kmc.png", 56);
-- Komponentit loppuvat

DELETE
FROM tuoteryhma
WHERE trnro > 6;