
INSERT INTO palvelu (pnimi, hinta) VALUES ('Ensihuolto', 59.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Kausihuolto', 79.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Perushuolto', 99.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Täyshuolto', 139.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Tuntityö', 89.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Etu-/takaenkaan vaihto', 18.90);

INSERT INTO palvelu (pnimi, hinta) VALUES ('Renkaiden vaihto (eteen ja taakse)', 35.90);


-- Tästä alkaa tuoteryhmien vientilausekkeet
INSERT into tuoteryhma (trnimi,trotsikko,trkuvaus,trkuva) VALUES
 ("Maastopyörät","Maastopyöräily ei ole vain kilpailulaji","Maastopyöräily on monipuolinen laji, jota voi omien taitojensa ja kuntonsa mukaan harrastaa hyvin monenlaisissa maastoissa. Maastossa pyöräileminen on hauska ja rento tapa liikkua ja retkeillä. Laji sopii myös lapsille, nuorille ja iäkkäämmille. Kokeneempi maastopyöräilijä nauttii raskaammastakin kuntoilusta, teknisemmistä ajohaasteista ja vauhdin hurmasta.
","maastopyora_kategoria.png"),
 ("Sähköpyörät","Sähköpyöräily nostaa suosiotaan vauhdilla","Sähköpyörässä on enintään 250 watin sähkömoottori, joka avustaa maksimissaan 25 km/h nopeuteen saakka. Sähköpyöräilyn edut tulevat esille etenkin pidemmillä pyöräilylenkeillä ja mäkisessä maastossa, jolloin polkeminen ei ole fyysisesti yhtä raskasta. Sähköpyörä usein myös madaltaa kynnystä hoitaa kaupassa käynnit ja muut asiointimatkat pyörällä henkilöauton sijasta.","sahkopyora_kategoria.png"),
 ("Maantiepyörät","Maantiepyöräily on laji, jossa harjoittelu on pitkäjännitteistä","Vauhdikasta ja kuntoa kohottavaa, niin voidaan sanoa maantiepyöräilystä miettimättä sen enempää yksityiskohtia. Ja jos aikoo harrastaa lajia vähän syvällisemmin eivät maantiepyöräily säännöt ole kovin hankalat oppia. Hyvät välineet tosin maksavat, mutta vähemmälläkin pääsee harrastamaan hyvin täysipainoisesti. Maantiellähän ajetaan kapeilla renkailla ja niin sanotulla käyräsarvisella tangolla. Kapeat renkaat rullaavat hyvin, joten matkanteko on nautittavaa ja isossa porukassa ajaessa täytyy olla tarkkana, mutta peesissä pääsee myös helpommalla.","maantie_kategoria.png"),
 ("Lastenpyörät","Ainoa pyöräilyä parempi asia? Pyöräretki perheen kanssa.","Autamme sinua suoriutumaan niistä näillä neuvoilla. Riippumatta siitä pyöräileekö lapsesi jo vai onko hän vasta aloittelemassa, kerromme kaiken mitä sinun tarvitsee tietää luodaksesi muistoja, joita he arvostavat ikuisesti. Jos lapsesi on liian pieni ajaakseen itse, ei ole syytä huoleen. Lapsen mukaan ottamiseen on runsaasti vaihtoehtoja. Mitä nopeammin altistat hänet pyöräilyn yksinkertaiselle hauskuudelle ja vapaudelle, sitä helpompaa hänen on ryhtyä ajamaan omaa pyöräänsä, kun hän on siihen valmis.
","lasten_kategoria.png"),
 ("Tarvikkeet","Pyörään tarvitaan erilaisia pyöräilytarvikkeita, jotta pyöräily olisi turvallista ja mukavaa!","Huolto sujuu helpommin, jos siihen on asianmukaiset pyöräilytarvikkeet. Ja hyvin huollettu ja voideltu pyörä kulkee kevyemmin ja varmemmin! Turvallisuutta kypärällä tai valoilla, suojaa lokasuojista ja kuljetuskapasiteettia vaikka kätevästä laukusta.","tarvike_kategoria.png");

-- Tähän loppuu tuoteryhmien vientilausekkeet
-- Maastopyörän alakategoriat
insert into alatuoteryhma (alakategoria,alakategoriakuva,alakategoriakuvaus,alakategoriaotsikko) VALUES
("Etujousto","etujousto.png","Etujousitettu maastopyörä on maastopyörien klassikko. Se on täysjoustoon verrattuna kevyempi, edullisempi ja helppohuoltoisempi. Vaativiin maastoihin suuntaavan kannattaa panostaa kunnollisiin levyjarruihin, joustohaarukkaan ja laadukkaisiin vaihteisiin. Kiekkojen ja rungon koko kannattaa valita oman pituuden ja ajotyylin mukaan.","Etujousitetut maastopyörät"),
("Bmx","bmx.png","Luultavasti minkään muunlainen pyörä ei ole käsiteltävissä yhtä rennosti ja lennokkaasti kuin BMX-pyörä. Ammattilaiskuskien käsittelyssä pyörät taipuvat mitä ihmeellisimpiin liikeratoihin, aivan kuin pelissä olisi jotain yliluonnollista. Näppärän käsiteltävyyden takaavat 20" "renkaat ovat myös hyvin kestävät ja pyörä kestääkin kaiken kaikkiaan hyvin rentoa käsittelyä. BMX-pyörien komponentit ovat kestävät ja yksinkertaiset. Yksirattainen vaihteisto ei paljon huoltoa kaipaa vaan palvelee hurjapäistä kuskia uskollisesti.","BMX-Pyörät "),
("Täysjousto","taysjoysto.png","Villissä luonnossa viihtyvän kannattaa valita menopelikseen täysjousitettu maastopyörä. Täysjousitus tarkoittaa sekä jousitettua etuhaarukkaa että jousitettua pyörän takaosaa. Tarkasti säädettävän jousituksen avulla pyörän voi säätää omaan ajotyyliin sekä vallitseviin olosuhteisiin sopivaksi. 100-140 mm jousituksen tarjoavat täysjoustot sopivat parhaiten kuskeille, jotka tavoittelevat vauhtia sekä ketteryyttä niin ylä- kuin alamäissäkin. Vauhdikkaisiin alamäkiin keskittyvän kannattaa tutustua tarkemmin reilumman, 150-170 mm jouston tarjoaviin täysjoustoihin. Mikäli hakusessa on täysverinen alamäkipyörä, freeride- ja downhill-pyörät sopivat tarkoitukseen parhaiten.","Täysjousitetut maastopyörät"),
("Maastopyörä 29","maastopyora29.png","Päällystettyjen teiden loppuessa maastopyöräilijöiden seikkailut ja hauskanpito alkavat. Maastopyöräily on saanut alkunsa 70-luvulla pienen ryhmän aloitteesta ja on vuosien varrella kasvanut nykyiseen suosioonsa kattaen nykyisin suuren kirjon erilaisia muotoja kuten maastossa tehtävät pyöräretket kuin myös hurjat downhill-alamäkiajot. Maastopyörä onkin hyvin monipuolinen pyörä ja soveltuu mainiosti niin työmatkoille kuin viikonloppujen pyöräretkille hieman vaativimmissakin olosuhteissa. ","Maastopyörät 29”");

-- Sähköpyörät alakategoriat
insert into alatuoteryhma (alakategoria,alakategoriakuva,alakategoriakuvaus,alakategoriaotsikko) VALUES
("Sähkökaupunkipyörä","sahkokaupunki.png","Täysivarustettu kaupunkipyörä sähkö-avustuksella tekee keskipitkistä matkoista helpon matkata, ja voit näin saapua toimistolle viileänä ilman hien kostuttamaa selkää. Moottori avustaa aina 25 km/h nopeuteen asti eli pyörätiellä ei jää varmasti muun liikenteen jalkoihin. Akun kapasiteetti riittää parhaimmillaan jopa 200 km matkaan, millä taittaa pidemmänkin työ- tai kauppamatkan. Lainsäätäjille nämä sähköpyörät katsotaan 100 % polkupyöriksi, sallien samat pyöräreitit ja jalankulkualueet kuin tavallisellakin pyörällä.","Sähkökaupunkipyörät"),
("Sähkömaastopyörä","sahkomaasto.png","Sähkömaastopyörä vie maastopyöräilyn täysin uusiin ulottuvuuksiin, ja niiden suosio onkin kasvanut räjähdysmäisesti tänä vuonna. Maastokäyttö vaatii usein moottorilta enemmän vääntöä kuin asvaltilla ajo ja siksi niissä yleensä käytetäänkin tehokkaampia moottoreita ja isompia akkuja. Akussa saattaa olla tehoa jopa 500 Wh. Myös jousituksissa on eroja ja vaihtoehtoja löytyy etujousitetuista- sekä täysjoustosähkömaastopyöristä.","Sähkömaastopyörät"),
("Sähköretkipyörät","sahkoretki.png","Sähköretkipyörä on yhä useammin ykkösvalinta etsittäessä hyvää yleispyörää erilaisiin käyttötarkoituksiin ja tieprofiileihin. Sähköretkipyörät ovat varusteltu usein tehokkaalla moottorilla ja hyvän kantaman akulla ja ne soveltuvat siten niin työmatka-ajoon kuin pidemmille retkille. Pitkiä matkoja ajettaessa ajoasennon tulee olla ehdottoman mukava ja luotettava, mikä on huomioitu retkisähköpyörien runkotyypeissä ja pyöriin valituissa laadukkaissa komponenteissa. Retkipyöristä löytyvät tukevat tavaratelineet helpottavat matkatavaroiden kuljetusta ja lokasuojien avulla kura ei roisku märillä hiekkateillä. Retkisähköpyörissä on myös lain vaatimat ajovalot valmiiksi asennettuna.","Sähköretkipyörät"),
("Lasten sähköpyörät","lastensahko.png","Lapset oppivat yleensä polkemaan pyörää jossain kolmen ikävuoden paikkeilla, mutta menee vuosia ennen kuin he jaksavat tehdä pitkiä reissuja vanhempiensa kanssa. Ongelman ratkaisuksi tietyt valmistajat tarjoavat lapsille ja nuorille suunniteltuja sähköpyöriä, joissa on pienemmät ja kevyemmät moottorit. Näiden pyörien ansiosta mahdollisuudet retkien tekoon kasvavat ja polkemisesta tulee hauskempaa ja ylämäistä helpompia. Näin syntyy yhtäkkiä nuoria kuskeja, jotka eivät enää haluakaan laskeutua satulasta.","Lasten sähköpyörät");


-- Maantie alakategoriat
insert into alatuoteryhma (alakategoria,alakategoriakuva,alakategoriakuvaus,alakategoriaotsikko) VALUES
("Katumaantiepyörä","katumaantie.png","Herkästi reagoiva runko, sujuva voimansiirto ja kevyet kiekot – asfaltti kutsuu kilometrinielijää! Maantiepyörän runkokoko on yksi tärkeimpiä tekijöitä pyörää valittaessa, sillä oikeankokoinen pyörä takaa oikean ajoasennon.","Katumaantiepyörät"),
("Gravel","gravel.png","Gravel-pyörät ovat monikäyttöisiä, useille ajoalustoille sopivia pyöriä, joilla on helppo siirtyä päällystetyiltä teiltä sorateille. Ne sopivat ihanteellisesti pyöräilyyn päivinä, jolloin et tiedä minne tulet päätymään ajolenkilläsi. Gravel- tai allround-pyörissä on melkein aina levyjarrut, paksut ja leveämmät renkaat ja mukautettu geometria, joka hallitsee kohtalaiset maastoalueet. Ne ovat myös riittävän sulavalinjaisia rullatakseen tehokkaasti asfaltilla. Toisin kuin cyclocross-pyörät, nämä mallit on suunniteltu pitkän matkan ajoon heti alusta lähtien. Maantiepyörän keskiön korkeuden ja vakaan hallinnan ansiosta niissä yhdistyvät molempien maailmojen parhaat puolet.","Gravel-pyörät"),
("Thriathlon","triathlon.png","Triathlonpyörät on rakennettu vain yhtä tarkoitusta varten; nimittäin vauhtia! Triathlonpyörässä on paljon jyrkempi satulaputken kulma, yleensä 76 ja 78 asteen välillä, mikä tekee sen että ajoasento on enemmän eteenpäin makaava ja tämän ansiosta paljon aerodynaamisempi ajoasento, mikä myös auttaa säästämään reisilihaksia","Triathlon-pyörät"),
("Cyclocrossit","cyclo.png","Cyclocross (cyclo-cross) on kilpapyöräilyn muoto. Kilpailuissa kierretään yleensä melko lyhyttä (2,5 - 3,5 km) rataa, joka on sijoitettu vaihtelevaan maastoon. Radalle on sijoitettu erilaisia esteitä ja vaikeasti ajettavia kohtia, jotka monesti vaativat ajajan jalkautumista ja pyörän kantamista esteiden yli. Moderneissa malleissa on levyjarrut, järeämmät kiekot ja tubeless ready-renkaat. Tuloksena on monipuoliset kilpurit, jotka ovat kotonaan niin asfaltilla kuin metsässä.","Cyclocrossit");


-- Lastenpyörät alakategoriat
insert into alatuoteryhma (alakategoria,alakategoriakuva,alakategoriakuvaus,alakategoriaotsikko) VALUES
("Potkupyörät","potkupyora.png","Tasapainoa kehittävä potkupyörä on täydellinen valinta lapsen ensimmäiseksi pyöräksi. Potkupyörällä, ilman polkimia ja jarruja, pienet lapset oppivat hallitsemaan tasapainon kahdella pyörällä. Pneumaattiset renkaat ja säädettävä satula takaavat vauhdin hurmaa ja iloa, kunnes on aika hankkia ensimmäinen oikea lastenpyörä.","Potkupyörät"),
("Kolmipyörät","kolmipyora.png","Lasten kolmipyörä on hyvä ensipyörä aivan pienelle lapselle. Useissa kolmipyörissä on mukana työntöaisa, millä vanhempi varmistaa, että lapsi pysyy pystyssä. Lasten kolmipyörissä polkimet ovat yleensä kiinni etupyörän navassa.","Kolmipyörät"),
("Nuorisopyörät","nuoriso.png","Nuorisopyörä on parhaimmillaan monipuolinen, käytössä kestävä ja luotettava. Usein 24" "renkailla varustetut nuorisopyörät täyttävät tyhjiön pienempien lastenpyörien ja täyskokoisten aikuisten pyörien välissä. Varustetaso on luonnollisesti samaa tasoa kuin aikuisten pyörissä kaikki vain hieman pienemmässä kokoluokassa. Nuorisopyörät on varustettu kaikilla tärkeimmillä turvallisuusvarusteilla kuten valolla, seisontatuella, monipuoliseen käyttöön sopivilla renkailla sekä usein myös lokasuojilla ja tavaratelineellä. Pyörässä on hyvässä tasapainossa niin urheilulliset kuin turvallisuutta parantavat ominaisuudet.","Nuorisopyörät"),
("Lasten pyörät","lastenpyora.png","Lapsen yleispyörän pitää olla geometrialtaan matala ja pitkä. Sellainen on käytökseltään vakaa ja ennakoitava. Hyvä geometria antaa paljon anteeksi lapsen nopeille ja usein haparoiville ohjausliikkeille. Hyvä pyörä pysähtyy käsijarruilla. Vaikka pyörät on suunniteltu lapsille sopiviksi ja helposti hallittaviksi, tulee vanhempien huomioida muutamia asioita pyöräkaupoille lähtiessään. Usein kun tehdään hankintoja lapselle, mietitään kasvuvaraa. Liian suuri pyörä on kuitenkin lapselle vaaraksi ja haastava hallita, joten älä sorru ostamaan liian suurta pyörää.","Lasten pyörät");
-- Tarvikkeet alakategoriat
insert into alatuoteryhma (alakategoria,alakategoriakuva,alakategoriakuvaus,alakategoriaotsikko) VALUES
("Seisontatuki","tarvike.png","Kun on liikkeellä pyöräillen Suomessa, pyörälaukuista on iloa varsinkin silloin, kun tekee jonkin mukavan retken. Mikäli enemmänkin harrastaa tätä liikuntamuotoa, ovat paikkausvälineet, ehjä sisäkumi sekä pumppu hyviä matkakumppaneita. Jos tykkää enemmän ajella tuubirenkailla, kannattaa ottaa vähintään yksi rengas mukaan. Se on äkkiä vaihdettu, jos rengas rikkoontuu. Pyöräilijän pakolliset varusteet sisältävät oman turvallisuuden takia myös kypärän. Se suojaa hyvin pään onnettomuuden sattuessa. Lisäksi lukko ja avain, jos joutuu hetkeksi jättämään pyöränsä vartioimatta. Mikäli pidempiä matkoja ajaa, niin ehdottoman tärkeä on myös juomapullo sekä sille tarvittava teline. Ja jos jotain yllättävää tapahtuu, niin hiukan tietenkin rahaa.","Oikeanlaiset varusteet tekevät pyöräilystä mukavampaa!"),
("Lokasuoja","tarvike.png","Kun on liikkeellä pyöräillen Suomessa, pyörälaukuista on iloa varsinkin silloin, kun tekee jonkin mukavan retken. Mikäli enemmänkin harrastaa tätä liikuntamuotoa, ovat paikkausvälineet, ehjä sisäkumi sekä pumppu hyviä matkakumppaneita. Jos tykkää enemmän ajella tuubirenkailla, kannattaa ottaa vähintään yksi rengas mukaan. Se on äkkiä vaihdettu, jos rengas rikkoontuu. Pyöräilijän pakolliset varusteet sisältävät oman turvallisuuden takia myös kypärän. Se suojaa hyvin pään onnettomuuden sattuessa. Lisäksi lukko ja avain, jos joutuu hetkeksi jättämään pyöränsä vartioimatta. Mikäli pidempiä matkoja ajaa, niin ehdottoman tärkeä on myös juomapullo sekä sille tarvittava teline. Ja jos jotain yllättävää tapahtuu, niin hiukan tietenkin rahaa.","Oikeanlaiset varusteet tekevät pyöräilystä mukavampaa!"),
("Ketjut","tarvike.png","Kun on liikkeellä pyöräillen Suomessa, pyörälaukuista on iloa varsinkin silloin, kun tekee jonkin mukavan retken. Mikäli enemmänkin harrastaa tätä liikuntamuotoa, ovat paikkausvälineet, ehjä sisäkumi sekä pumppu hyviä matkakumppaneita. Jos tykkää enemmän ajella tuubirenkailla, kannattaa ottaa vähintään yksi rengas mukaan. Se on äkkiä vaihdettu, jos rengas rikkoontuu. Pyöräilijän pakolliset varusteet sisältävät oman turvallisuuden takia myös kypärän. Se suojaa hyvin pään onnettomuuden sattuessa. Lisäksi lukko ja avain, jos joutuu hetkeksi jättämään pyöränsä vartioimatta. Mikäli pidempiä matkoja ajaa, niin ehdottoman tärkeä on myös juomapullo sekä sille tarvittava teline. Ja jos jotain yllättävää tapahtuu, niin hiukan tietenkin rahaa.","Oikeanlaiset varusteet tekevät pyöräilystä mukavampaa!"),
("Polkimet","tarvike.png","Kun on liikkeellä pyöräillen Suomessa, pyörälaukuista on iloa varsinkin silloin, kun tekee jonkin mukavan retken. Mikäli enemmänkin harrastaa tätä liikuntamuotoa, ovat paikkausvälineet, ehjä sisäkumi sekä pumppu hyviä matkakumppaneita. Jos tykkää enemmän ajella tuubirenkailla, kannattaa ottaa vähintään yksi rengas mukaan. Se on äkkiä vaihdettu, jos rengas rikkoontuu. Pyöräilijän pakolliset varusteet sisältävät oman turvallisuuden takia myös kypärän. Se suojaa hyvin pään onnettomuuden sattuessa. Lisäksi lukko ja avain, jos joutuu hetkeksi jättämään pyöränsä vartioimatta. Mikäli pidempiä matkoja ajaa, niin ehdottoman tärkeä on myös juomapullo sekä sille tarvittava teline. Ja jos jotain yllättävää tapahtuu, niin hiukan tietenkin rahaa.","Oikeanlaiset varusteet tekevät pyöräilystä mukavampaa!"),
("Korit","tarvike.png","Kun on liikkeellä pyöräillen Suomessa, pyörälaukuista on iloa varsinkin silloin, kun tekee jonkin mukavan retken. Mikäli enemmänkin harrastaa tätä liikuntamuotoa, ovat paikkausvälineet, ehjä sisäkumi sekä pumppu hyviä matkakumppaneita. Jos tykkää enemmän ajella tuubirenkailla, kannattaa ottaa vähintään yksi rengas mukaan. Se on äkkiä vaihdettu, jos rengas rikkoontuu. Pyöräilijän pakolliset varusteet sisältävät oman turvallisuuden takia myös kypärän. Se suojaa hyvin pään onnettomuuden sattuessa. Lisäksi lukko ja avain, jos joutuu hetkeksi jättämään pyöränsä vartioimatta. Mikäli pidempiä matkoja ajaa, niin ehdottoman tärkeä on myös juomapullo sekä sille tarvittava teline. Ja jos jotain yllättävää tapahtuu, niin hiukan tietenkin rahaa.","Oikeanlaiset varusteet tekevät pyöräilystä mukavampaa!"),
("Soittokello","tarvike.png","Kun on liikkeellä pyöräillen Suomessa, pyörälaukuista on iloa varsinkin silloin, kun tekee jonkin mukavan retken. Mikäli enemmänkin harrastaa tätä liikuntamuotoa, ovat paikkausvälineet, ehjä sisäkumi sekä pumppu hyviä matkakumppaneita. Jos tykkää enemmän ajella tuubirenkailla, kannattaa ottaa vähintään yksi rengas mukaan. Se on äkkiä vaihdettu, jos rengas rikkoontuu. Pyöräilijän pakolliset varusteet sisältävät oman turvallisuuden takia myös kypärän. Se suojaa hyvin pään onnettomuuden sattuessa. Lisäksi lukko ja avain, jos joutuu hetkeksi jättämään pyöränsä vartioimatta. Mikäli pidempiä matkoja ajaa, niin ehdottoman tärkeä on myös juomapullo sekä sille tarvittava teline. Ja jos jotain yllättävää tapahtuu, niin hiukan tietenkin rahaa.","Oikeanlaiset varusteet tekevät pyöräilystä mukavampaa!");



-- Tästä alkaa tuotteet vientilausekkeet
-- Maastopyörät
insert into tuote (nimi,kuvaus,hinta,trnro,alakategorianro,kuva, saldo, koko) VALUES
("Serious Rockville 20 Lite","Urheilullinen Rockville 27,5 -versio on erinomainen maastopyörä lähtötasolle. Kevyessä alumiinirungossa on tasapainoinen varustelu ja urheilullisen raikas mutta ajaton muotoilu.Rockville on sekä vapaa-ajan että arjen maastopyörä, joka tarjoaa erinomaista vastinetta rahalle. Rockvillen laadukkaat ja monipuoliset komponentit tarkoittavat, että pyörä voidaan todella käyttää monenlaisilla pinnoilla.",219,1,1,"rockville.png", 2, 'L'),

("Cube Access WS EAZ","On olemassa sanonta, jonka mukaan valta ei ole mitään ilman valvontaa. Siksi Cube on varustanut upouuden Access WS EAZ -mallin vahvoilla ja helppokäyttöisillä hydraulisilla levyjarruilla, jotta voit pysähtyä nopeasti ja turvallisesti olosuhteista riippumatta. Yhdistettynä Suntourin jousitushaarukan kolhuja nielevään mukavuuteen ja Shimanon 2x8-speed vaihteiston laajaan valikoimaan tämä tarkoittaa, että tämä on pyörä, johon voit luottaa laajentaaksesi ajohorisonttiasi. Valitse seikkailusi ja lähde.",400,1,1,"cubeaccess.png", 2, 'S'),

("Orbea Oiz H10 TR","Oiz tietää, kuinka vaikeaa on rynnätä huipulle ja kiivetä tulostauluille ja voittajien palkintokorokkeille. Orbean ei tarvitse laatia pitkää sukupuuta, sillä kaksi maailmanmestaruutta on riittävä todiste siitä, että Oiz on todellinen täysverinen. Oiz on synonyymi aidolle maastohiihdolle, minkä vuoksi sen läsnäolo maailmancupissa on kaikkialla läsnä. Oiz on yksi markkinoiden kevyimmistä, jäykimmistä ja tehokkaimmista pyöristä, halusitpa sitten kilpailla tai vain ajella. Oizissa on se, mitä tarvitset: ei ole parempaa asetta, jolla voi tähdätä huipulle.",3849,1,3,"orbeaoiz.png", 1, 'XL'),
("HAIBIKE AllTrail","Rocking the trails - ilman kompromisseja, mutta aina hieman lisää mukavuutta? AllTrail 6 27.5:n kanssa voit tehdä kaiken! Tämä e-Fully ei petä sinua edes vaikeassa maastossa 150 mm:n jousitusmatkojen ansiosta. Yamaha PW-ST -moottorilla, integroidulla 630 Wh:n akulla, RockShox-jousituselementeillä, SRAMin 12-vaihteisilla vaihteilla, 4-mäntäisillä levyjarruilla ja Plus-renkailla varustettuna olet valmis kaikkiin seikkailuihin.", 3669,1,3,"haibikealltrail.png", 2, 'L'),

("Serious Rockville 29 Lite","Urheilullinen Rockville 27,5 -versio on erinomainen maastopyörä lähtötasolle. Kevyessä alumiinirungossa on tasapainoinen varustelu ja urheilullisen raikas mutta ajaton muotoilu.Rockville on sekä vapaa-ajan että arjen maastopyörä, joka tarjoaa erinomaista vastinetta rahalle. Rockvillen laadukkaat ja monipuoliset komponentit tarkoittavat, että pyörä voidaan todella käyttää monenlaisilla pinnoilla.",219,1,4,"rockville.png", 2, 'M'),

("Cube Access WS EAZ 29","On olemassa sanonta, jonka mukaan valta ei ole mitään ilman valvontaa. Siksi Cube on varustanut upouuden Access WS EAZ -mallin vahvoilla ja helppokäyttöisillä hydraulisilla levyjarruilla, jotta voit pysähtyä nopeasti ja turvallisesti olosuhteista riippumatta. Yhdistettynä Suntourin jousitushaarukan kolhuja nielevään mukavuuteen ja Shimanon 2x8-speed vaihteiston laajaan valikoimaan tämä tarkoittaa, että tämä on pyörä, johon voit luottaa laajentaaksesi ajohorisonttiasi. Valitse seikkailusi ja lähde.",400,1,4,"cubeaccess.png", 4, 'M'),

("Orbea Oiz H10 TR 27.5","Oiz tietää, kuinka vaikeaa on rynnätä huipulle ja kiivetä tulostauluille ja voittajien palkintokorokkeille. Orbean ei tarvitse laatia pitkää sukupuuta, sillä kaksi maailmanmestaruutta on riittävä todiste siitä, että Oiz on todellinen täysverinen. Oiz on synonyymi aidolle maastohiihdolle, minkä vuoksi sen läsnäolo maailmancupissa on kaikkialla läsnä. Oiz on yksi markkinoiden kevyimmistä, jäykimmistä ja tehokkaimmista pyöristä, halusitpa sitten kilpailla tai vain ajella. Oizissa on se, mitä tarvitset: ei ole parempaa asetta, jolla voi tähdätä huipulle.",3849,1,2,"orbeaoiz.png", 2, 'M'),

("HAIBIKE AllTrail 27.5","Rocking the trails - ilman kompromisseja, mutta aina hieman lisää mukavuutta? AllTrail 6 27.5:n kanssa voit tehdä kaiken! Tämä e-Fully ei petä sinua edes vaikeassa maastossa 150 mm:n jousitusmatkojen ansiosta. Yamaha PW-ST -moottorilla, integroidulla 630 Wh:n akulla, RockShox-jousituselementeillä, SRAMin 12-vaihteisilla vaihteilla, 4-mäntäisillä levyjarruilla ja Plus-renkailla varustettuna olet valmis kaikkiin seikkailuihin.",3669,1,2,"haibikealltrail.png", 2, 'L');
-- Maastopyörät loppuu

-- Sähköpyörät alkaa
insert into tuote (nimi,kuvaus,hinta,trnro,alakategorianro,kuva, saldo, koko) VALUES
("Orbea Wild FS H20","Ota villiytymisesi haltuun!
Suurten seikkailujen aika. Ota vaatteet mukaan ja nouse pyörän selkään. Olipa edessäsi mitä haasteita tahansa, tänään voit hallita ne. Koska Wild FS avaa täysin uusia mahdollisuuksia. Tämä pyörä vie mahdollisuutesi ja valikoimasi uudelle tasolle. Sen avulla voit kiivetä jyrkimmätkin rampit ja luottaa maksimaaliseen pitoon. Älykkään muotoilun ja hienostuneen alustan ansiosta voit keskittyä täysin retkellesi. Wild FS tukee ponnistelujasi ja avaa sinulle täysin uusia metsästysalueita. Ota hallinta takaisin ja löydä peli(t) sisältäsi!",6299,2,6,"orbeawild.png", 2, 'M'),

("Orbea Rise H10","Nouse yliKone on suunniteltu antamaan sinulle vielä enemmän seikkailua poluilla ja antamaan sinun elää hetkessä. Rise tuo sinulle sen erityisen tunteen, jossa vähemmän E tarkoittaa enemmän pyörää. Halusitpa sitten ajaa pidempiä matkoja, päästä eeppisiin paikkoihin, olla yksinkertaisesti tehokkaampi tiellä tai kokea upeita seikkailuja entistä useammin, Rise ylittää odotuksesi ja merkitsee uutta maastopyöräilystandardia.",7899,2,6,"orbearise.png", 3, 'L'),

("Ortler Bozen Trapeze","The Ortler Bolzano women's model with wave frame and Bosch Active Plus 400 electric drive and 9-speed derailleur is a 28-inch trekking pedelec in a class of its own. Consistently high quality equipment and thought through down to the last detail and always sovereign: the heart of the Ortler Bozen Bosch is its intelligent new BOSCH electric drive.The efficient 250 watt motor offers optimum power development and propulsion on the mountai without ifs or buts. 80 % recharged in just under 2.5 hours, thanks to modern E-Power, even long distances and demanding tours with many metres of altitude can be covered.",1519,2,7,"ortlerbozen.png", 1, 'XL'),

("HAIBIKE Trekking 6 Low-Step","Etsitkö mukavaa sähköistä trekking-pyörää ostosreissulle kaupungin läpi, päivittäiselle työmatkalle tai jopa pidemmille viikonloppumatkoille? Silloin uusi Trekking 6 LOW on ihanteellinen sähköpyörä sinulle! Erittäin matala sisäänkäynti ja pystyasento takaavat, että voit nousta kyytiin ja poistua siitä nopeasti milloin tahansa ja pysyä aina hallinnassa liikenteessä. Vakiovarusteena on tavarateline, tehokas valaistusjärjestelmä ja potkulaite, joten sinulla on kaikki, mitä tarvitset turvalliseen liikenteeseen. Ja kun tie muuttuu jyrkemmäksi tai matkatavarat ovat hieman painavampia, Yamaha PW-ST -moottori tarjoaa voimakasta tukea.",2669,2,7,"haibiketrekking.png", 4, 'M'),

("Orbea Wild FS H60","Ota villiytymisesi haltuun! Suurten seikkailujen aika. Ota vaatteet mukaan ja nouse pyörän selkään. Olipa edessäsi mitä haasteita tahansa, tänään voit hallita ne. Koska Wild FS avaa täysin uusia mahdollisuuksia. Tämä pyörä vie mahdollisuutesi ja valikoimasi uudelle tasolle. Sen avulla voit kiivetä jyrkimmätkin rampit ja luottaa maksimaaliseen pitoon. Älykkään muotoilun ja hienostuneen alustan ansiosta voit keskittyä täysin retkellesi. Wild FS tukee ponnistelujasi ja avaa sinulle täysin uusia metsästysalueita. Ota hallinta takaisin ja löydä peli(t) sisältäsi!",6299,2,5,"orbeawild.png", 2, 'M'),

("Orbea Rise H60","Nouse yliKone on suunniteltu antamaan sinulle vielä enemmän seikkailua poluilla ja antamaan sinun elää hetkessä. Rise tuo sinulle sen erityisen tunteen, jossa vähemmän E tarkoittaa enemmän pyörää. Halusitpa sitten ajaa pidempiä matkoja, päästä eeppisiin paikkoihin, olla yksinkertaisesti tehokkaampi tiellä tai kokea upeita seikkailuja entistä useammin, Rise ylittää odotuksesi ja merkitsee uutta maastopyöräilystandardia.",7899,2,5,"orbeawild.png", 1, 'L'),

("Ortler Bozen Lasten","The Ortler Bolzano women's model with wave frame and Bosch Active Plus 400 electric drive and 9-speed derailleur is a 28-inch trekking pedelec in a class of its own. Consistently high quality equipment and thought through down to the last detail and always sovereign: the heart of the Ortler Bozen Bosch is its intelligent new BOSCH electric drive.The efficient 250 watt motor offers optimum power development and propulsion on the mountai without ifs or buts. 80 % recharged in just under 2.5 hours, thanks to modern E-Power, even long distances and demanding tours with many metres of altitude can be covered.",1519,2,8,"ortlerbozen.png", 3, 'L'),

("HAIBIKE Trekking 6 Lasten","Etsitkö mukavaa sähköistä trekking-pyörää ostosreissulle kaupungin läpi, päivittäiselle työmatkalle tai jopa pidemmille viikonloppumatkoille? Silloin uusi Trekking 6 LOW on ihanteellinen sähköpyörä sinulle! Erittäin matala sisäänkäynti ja pystyasento takaavat, että voit nousta kyytiin ja poistua siitä nopeasti milloin tahansa ja pysyä aina hallinnassa liikenteessä. Vakiovarusteena on tavarateline, tehokas valaistusjärjestelmä ja potkulaite, joten sinulla on kaikki, mitä tarvitset turvalliseen liikenteeseen. Ja kun tie muuttuu jyrkemmäksi tai matkatavarat ovat hieman painavampia, Yamaha PW-ST -moottori tarjoaa voimakasta tukea.",2669,2,8,"haibiketrekking.png", 1, 'S');
-- Sähköpyörät loppuu
-- Maantiepyörät alkaa
insert into tuote (nimi,kuvaus,hinta,trnro,alakategorianro,kuva, saldo, koko) VALUES
("Cannondale CAAD Optimo 4","Exceptional Aluminum PerformanceEverything Cannondale know about aluminum road bikes in one space – refined tube profiles, precision butting, and double-pass welds create frames that are lighter and ride better than the competitors high-ticket alloy offerings.",879,3,9,"cannondalecaad.png", 3, 'L'),

("Polygon Strattos S4","Strattos S4 on rakennettu kevyen ja reagoivan rungon ympärille, jossa on täyshiilikuituhaarukka. Tässä pyörässä yhdistyvät kevyt, kestävä ja luotettava kevytmetallirunko sekä todistettu suorituskyky. Se on täydellinen pyörä innokkaille maantiepyöräilijöille, urheilullisille harrastajille ja jokapäiväisille työmatkapyöräilijöille. Aja koko päivä, koe enemmän.",969,3,9,"polygonstrattos.png", 3, 'M'),

("Vitus Razor intl.","Feeling a road bike surge forward when you press on the pedals and the excitement that comes from the ease of acceleration - that's how road cycling should feel. Whether you are stepping over your first road bike or pulling away from lights on a regular commute, the Vitus Razor delivers that same sensation of speed and freedom. And it never gets old.",759,3,10,"vitusrazor.png", 4, 'L'),

("BMC Teammachine SLR Four","BMC TEAMMACHINE SLR FOUR, MUSTA (ANTHRACITE/BRUSHED ALLOY)",4999,3,10,"bmcteammachine.png", 2, 'M'),

("Cannondale CAAD Optimus Prime","Exceptional Aluminum PerformanceEverything Cannondale know about aluminum road bikes in one space – refined tube profiles, precision butting, and double-pass welds create frames that are lighter and ride better than the competitors high-ticket alloy offerings.",879,3,11,"cannondalecaad.png", 3, 'S'),

("Polygon Strattos KVG 100","Strattos S4 on rakennettu kevyen ja reagoivan rungon ympärille, jossa on täyshiilikuituhaarukka. Tässä pyörässä yhdistyvät kevyt, kestävä ja luotettava kevytmetallirunko sekä todistettu suorituskyky. Se on täydellinen pyörä innokkaille maantiepyöräilijöille, urheilullisille harrastajille ja jokapäiväisille työmatkapyöräilijöille. Aja koko päivä, koe enemmän.",969,3,11,"polygonstrattos.png", 4, 'M'),

("Vitus Razor Dupa Depa.","Feeling a road bike surge forward when you press on the pedals and the excitement that comes from the ease of acceleration - that's how road cycling should feel. Whether you are stepping over your first road bike or pulling away from lights on a regular commute, the Vitus Razor delivers that same sensation of speed and freedom. And it never gets old.",759,3,12,"vitusrazor.png", 1, 'S'),

("BMC Teammachine TRL 99","-kisojen voittanut malli. Sekoita se parhaiden kanssa heidän huippuluokan kilpa-autollaan. Se on rakennettu aggressiivisen hiilialustan ympärille, ja sen paino on pidetty ehdottoman pienenä. Sram Force One -ryhmäsarjaa ja siihen sopivaa hiilivaihteista kampiakselia, Hunt 4 Season -vanteita ja Ritchey 4-Axis -viimeistelysarjaa käyttävä hiilipyörä Tension on podium-valmis. Kapean vaihteiston ja nopeiden Challenge Grifo -renkaiden ansiosta se on suunniteltu niin, että sinulla on riittävästi energiaa loppusprinttiin.",4999,3,12,"bmcteammachine.png", 2, 'L');
-- Maantiepyörät loppuu
-- Lastenpolkupyörät alkaa

insert into tuote (nimi,kuvaus,hinta,trnro,alakategorianro,kuva, saldo, koko) VALUES
("Vermont Girly 18","Röyhkeille tytöille Vermontin Girly-lastenpyörä on juuri sopiva! Pyörä on todellinen katseenvangitsija ja myös erittäin turvallinen, joten jokainen henkeäsalpaava kiertotie on hauskaa pienelle pyöräilijälle.Lastenpyörä tekee vaikutuksen paitsi rohkealla ulkonäöllään myös ennen kaikkea laadullaan ja hyödyllisillä yksityiskohdillaan. Girly-lastenpyörässä on matalalla sisääntulolla varustetun rungon lisäksi tukevat alumiinivanteet, takajarrut ja etujarrut, joissa on lapsiystävällinen jarruvipu, sekä varretyyny. Toinen kohokohta on ohjaustangossa oleva tyylikäs kori, johon mahtuu kaikki, mitä kireät tytöt tarvitsevat. Vermont Girlyn turvallisuusominaisuudet, kuten heijastimet edessä, polkimissa ja tavaratelineessä, kello, kaksoispultatut apupyörät ja turvakahvat, täydentävät Vermont Girlyn.",99,4,13,"vermontgirly.png", 3, 'one size'),

("Vermont Girly 16","Tyylikäs lastenpyörä ei vakuuta vain ulkonäöllisesti, vaan Vermont Girly on laadukas pyörä, jossa on paljon hyödyllisiä ominaisuuksia. Vermont Girly -pyörässä on matalan askelman rungon lisäksi vakaat alumiinirungot, takajarru ja etujarrut, joissa on lapsiystävällinen jarruvipu, sekä pehmuste varressa. Kaiken tämän kruunaa tyylikäs kori edessä.",99,4,13,"vermontgirly.png", 4, 'one size'),

("Ortler Bricktown 20","Ortler Bricktown 20 ja 24 pyörä on suunniteltu erityisesti nuorille pyöräilijöille, ja siinä on klassinen Porteur-tyyli. Tässä polkupyörässä on kaareva teräsrunko, 3-vaihteinen napavaihteisto ja tukeva vakio-ohjainkori, joten se on sekä käytännöllinen että tyylikäs. Pyörän mukana toimitetaan ketjusuoja ja yhteensopivat suojukset, joissa on lapsiystävällinen muotoilu. Innokkaat nuoret pyöräilijät nauttivat Bricktownin hyvän ulkonäön lisäksi myös sen tarjoamasta mukavasta pyöräilykokemuksesta. Se on paras ja turvallisin ratsastusvaihtoehto sekä vapaa-aikaan että koulumatkalle.",309,4,14,"ortlerbricktown.png", 5, 'one size'),

("Vermont Girly 18","Röyhkeille tytöille Vermontin Girly-lastenpyörä on juuri sopiva! Pyörä on todellinen katseenvangitsija ja myös erittäin turvallinen, joten jokainen henkeäsalpaava kiertotie on hauskaa pienelle pyöräilijälle.Lastenpyörä tekee vaikutuksen paitsi rohkealla ulkonäöllään myös ennen kaikkea laadullaan ja hyödyllisillä yksityiskohdillaan. Girly-lastenpyörässä on matalalla sisääntulolla varustetun rungon lisäksi tukevat alumiinivanteet, takajarrut ja etujarrut, joissa on lapsiystävällinen jarruvipu, sekä varretyyny. Toinen kohokohta on ohjaustangossa oleva tyylikäs kori, johon mahtuu kaikki, mitä kireät tytöt tarvitsevat. Vermont Girlyn turvallisuusominaisuudet, kuten heijastimet edessä, polkimissa ja tavaratelineessä, kello, kaksoispultatut apupyörät ja turvakahvat, täydentävät Vermont Girlyn.",99,4,14,"vermontgirly.png", 3, 'one size'),

("Vermont Girly 16","Tyylikäs lastenpyörä ei vakuuta vain ulkonäöllisesti, vaan Vermont Girly on laadukas pyörä, jossa on paljon hyödyllisiä ominaisuuksia. Vermont Girly -pyörässä on matalan askelman rungon lisäksi vakaat alumiinirungot, takajarru ja etujarrut, joissa on lapsiystävällinen jarruvipu, sekä pehmuste varressa. Kaiken tämän kruunaa tyylikäs kori edessä.",99,4,15,"vermontgirly.png", 4, 'one size'),

("Ortler Bricktown 20","Ortler Bricktown 20 ja 24 pyörä on suunniteltu erityisesti nuorille pyöräilijöille, ja siinä on klassinen Porteur-tyyli. Tässä polkupyörässä on kaareva teräsrunko, 3-vaihteinen napavaihteisto ja tukeva vakio-ohjainkori, joten se on sekä käytännöllinen että tyylikäs. Pyörän mukana toimitetaan ketjusuoja ja yhteensopivat suojukset, joissa on lapsiystävällinen muotoilu. Innokkaat nuoret pyöräilijät nauttivat Bricktownin hyvän ulkonäön lisäksi myös sen tarjoamasta mukavasta pyöräilykokemuksesta. Se on paras ja turvallisin ratsastusvaihtoehto sekä vapaa-aikaan että koulumatkalle.",309,4,15,"ortlerbricktown.png", 5, 'one size'),

("Cobra Jura Cobra 20","With the luxuriously equipped Cobra Jura, the offspring, who should measure between 120 and 135 centimeters, can really have fun off-road. This is ensured by a solid but lightweight aluminum frame and Shimano 8-speed gears. In combination with a 11-32er cassette the youngest just fly up the climbs and hydraulic disc brakes bring the kids downhill again safely to a halt. 56 millimeter wide, treaded tires provide decent grip even on rough terrain and hollow rims provide stability.If your child wants to ride the bike to school and be on the road in the dark, mobile lights must be attached - and the all-rounder is ready.",459,4,16,"cobrajura.png", 2, 'one size'),

("Cobra Jura Cobra 20","With the luxuriously equipped Cobra Jura, the offspring, who should measure between 120 and 135 centimeters, can really have fun off-road. This is ensured by a solid but lightweight aluminum frame and Shimano 8-speed gears. In combination with a 11-32er cassette the youngest just fly up the climbs and hydraulic disc brakes bring the kids downhill again safely to a halt. 56 millimeter wide, treaded tires provide decent grip even on rough terrain and hollow rims provide stability.If your child wants to ride the bike to school and be on the road in the dark, mobile lights must be attached - and the all-rounder is ready.",459,4,16,"cobrajura.png", 2, 'one size');
-- Lastenpolkupyörät loppuu

-- Tarvikkeet alkavat
insert into tuote (nimi,kuvaus,hinta,trnro,alakategorianro,kuva, saldo) VALUES
("SKS Beavertail Lokasuojat setti 26-28","Monipuolinen paikoilleen napsautetava lokasuoja innovatiivisella muotoilulla. Optimaalinen liansuojaus, sopii myös joustohaarukoihin. Vankka teräksinen kiinnike turvallista ja helppoa asennusta varten. Renkaan leveys max. 54 mm.",19,5,18,"sksbeavertail.png", 10),

("Topeak Defender M1 & XC11 Lokasuojasarja 27.5","DeFende M1 -suojus on yhteensopiva kaikkien tavallisten haarukoiden kanssa. Pikakiinnikkeen ansiosta suojalevy voidaan kiinnittää ja irrottaa muutamassa sekunnissa. Erityisen muotonsa ansiosta kevyt DeFender XC11 -suojus tarjoaa optimaalisen suojan myös maastopyörille. Turvallisen kiinnitysmekanismin ansiosta lokasuoja voidaan kiinnittää ja irrottaa sekunneissa mihin tahansa pyöreään satulatukeen, jonka halkaisija on 25,4-34,9 mm. Lisäksi sen kulmaa voidaan säätää kahdesti optimaalisen rengaspeiton saavuttamiseksi. Kiillotetut alapinnat estävät tehokkaasti lian tarttumisen.",44,5,18,"topeakdefender.png", 22),

("CatEye OH2200 Yamabiko Soittokello","Erittäin tyylikäs ja äänekäs polkupyöräkello, jossa on erinomainen ääni ja joka on valmistettu messingistä kaupunkipyörääsi. Kiinnitin on valmistettu alumiinista.",16,5,22,"cateye.png", 25),

("Knog Oi Classic Soittokello","Eikö sinulla ole soittokelloa? Kukapa pyöräilijä ei olisi kuullut tuota kysymystä? Knog Oi! soittokellolla monen jalankulkijan unelmasta voi tulla totta. Jopa pyöräilijät, jotka aiemmin olivat kyllästyneet soittokelloihin urheilullisista tai esteettisistä syistä, ovat innostuneet Knog Oi! kellosta. Oi! Ei ihan mikä tahansa soittokello. Kellon tyylikäs metallirengas kiiltää upeasti ohjaustangossa. Tällä soittokellolla varmistat, että muut kuulevat sinut liikenteessä!",19,5,22,"knog.png", 46),

("Red Cycling Products Front Basket","Nopeasti kiinnitettävä ja irroitettäva pyörän etukori. Kevyt etukori kiinnitetään ohjaustankoon silmän räpäyksessä ilman työkaluja. Korissa on näppärä kantokahva, joka tekee korista mainion avun esimerkiksi ruokaostoksille. Korin tiivis verkkomateriaali estää pienempienkin esineiden tippumisen korista ajon aikana. Ehdoton varuste kaupunkiajoon.",18,5,21,"frontbasket.png", 34),

("Basil Jasmin Baboushka Pyöräkori Lapset","Basil Jasmin on polkupyöräkori, joka on tarkoitettu lasten polkupyörän etuosaan. Kiinnitetään kahdella koukulla, ja siinä on värikäs koristenauha, Babouschka-nukke ja kantokahva.",21,5,21,"basiljasmin.png", 32),

("Red Cycling Products Ultimate Kickstand Sivuseisontatuki","RCP:n tukeva ja säädettävä seisontatuki on uudempi versio klassisesta mallista. Jalka asennetaan pyörään keskiölaakerin taakse. Jalan pituuden voi säätää sopivaksi kaikkiin 24-29 kokoisiin renkaisiin. Se sopii siis sekä kaupunkipyöriin että myös suurirenkaisiin maastopyöriin. Jalka on erityisen tukeva ja sen vuoksi se sopii myös sähköpyörissä käytettäväksi.",12,5,17,"ultimatekickstand.png", 55),

("XLC KS-S01 Sivuseisontatuki 24-28","Tämä vakaa potkuteline kiinnitetään pohjakiinnikkeen alle, ja se sopii pyöriin, joiden pyörät ovat 24-28 tuumaa. Erittäin suuri kumijalka takaa turvallisen jalustan.Pituussäädettävä tekniikka:Nämä jalustat ovat helposti säädettävissä, ja niitä voidaan käyttää eri pyörä- ja runkokokoja varten, joten sahaaminen jalan lyhentämiseksi ei ole enäätarpeen.",16,5,17,"xlcks.png", 47);
-- Tarvikkeet loppuvat

-- Tarvikkeet alkavat
insert into tuote (nimi,kuvaus,hinta,trnro,alakategorianro,kuva, saldo) VALUES
("DARTMOOR Stream Polkimet","Kevyt ja vakaa. Valetut alumiinipolkimet Stream Pro takaavat parhaan pidon 10 nastalla.",38,5,20,"dartmoor.png", 20),

("Xpedo Spry Polkimet","Ultrakevyt XPEDO Spry -alustapoljin on ihanteellinen MTB-pyörään! 14 terästappia per poljin (7 per kulutuspinta) takaa optimaalisen voimansiirron ja pidon, joten pysyt MTB-pyöräsi hallinnassa vaikeimmissakin olosuhteissa. Erittäin kestävä CroMoly-teräsakseli, jossa on tiivistetty teollisuuslaakeri ja kaksi liukulaakeria, takaa luotettavan pitkän aikavälin suorituskyvyn. Yksinkertainen, tyylikäs ulkonäkö ja värivalikoima tekevät Sprystä halutun litteän polkimen.",92,5,20,"xpedo.png", 28),

("Eclat Stroke Ketju","Eclat Stroke Ketju musta",29,5,19,"eclat.png", 34),

("KMC X9SL Polkupyörän ketju 9-vaihteinen","Hopeanvärisellä 9-vaihteisella X9SL-ketjulla KMC esittelee erittäin kevyen (SL), ruosteenestoisen ja erittäin kestävän kilpapyörä- ja maastoketjun Shimanon, Campagnolon ja SRAMin 9-vaihteisille vaihteistoille.",38,5,19,"kmc.png", 56);
-- Tarvikkeet loppuvat

-- Update lausekkeet alennuksille
UPDATE tuote
SET alennus=1 , uusihinta=200 , alennusprosentti=50
where tuotenro=2;


UPDATE tuote
SET alennus=1 , uusihinta=200 , alennusprosentti=50
where tuotenro=6;

UPDATE tuote
SET alennus=1 , uusihinta=1834.5 , alennusprosentti=50
where tuotenro=8;

UPDATE tuote
SET alennus=1 , uusihinta=759.5 , alennusprosentti=50
where tuotenro=11;

UPDATE tuote
SET alennus=1 , uusihinta=1334.5 , alennusprosentti=50
where tuotenro=16;

UPDATE tuote
SET alennus=1 , uusihinta=2499.5 , alennusprosentti=50
where tuotenro=20;

UPDATE tuote
SET alennus=1 , uusihinta=484.5 , alennusprosentti=50
where tuotenro=22;

UPDATE tuote
SET alennus=1 , uusihinta=379.5 , alennusprosentti=50
where tuotenro=23;

UPDATE tuote
SET alennus=1 , uusihinta=49.5 , alennusprosentti=50
where tuotenro=25;




DELETE
FROM tuoteryhma
WHERE trnro > 6;

