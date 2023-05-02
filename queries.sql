CREATE TABLE trips (
  id SERIAL,
  departure VARCHAR(50),
  return VARCHAR(50),
  departure_station_id VARCHAR(50),
  departure_station_name VARCHAR(255),
  return_station_id VARCHAR(50),
  return_station_name VARCHAR(50),
  covered_distance decimal,
  duration integer,
  PRIMARY KEY (id)
);

CREATE TABLE stations (
  fid integer,
  id VARCHAR(50),
  nimi VARCHAR(50),
  namn VARCHAR(50),
  name VARCHAR(50),
  osoite VARCHAR(255),
  adress VARCHAR(50),
  kaupunki VARCHAR(50),
  stad VARCHAR(50),
  operaattor VARCHAR(50),
  kapasiteet VARCHAR(50),
  x VARCHAR(50),
  y VARCHAR(50),
  PRIMARY KEY (fid)
);

COPY trips(departure,return,departure_station_id,departure_station_name,return_station_id,return_station_name,covered_distance,duration)
FROM 'PATH'
DELIMITER ','
CSV HEADER;


COPY stations(fid,id,nimi,namn,name,osoite,adress,kaupunki,stad,operaattor,kapasiteet,x,y)
FROM 'PATH'
DELIMITER ','
CSV HEADER;


