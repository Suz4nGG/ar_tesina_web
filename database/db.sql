CREATE DATABASE ar_data;

USE ar_data;

CREATE TABLE estudiantes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(5) NOT NULL,
  passwordU VARCHAR(400) NOT NULL,
  nombreCompleto VARCHAR(200) NOT NULL,
  nombreResponsable VARCHAR(200) NOT NULL,
  fecNacimiento DATE NOT NULL,
  edad INT NOT NULL,
  tel VARCHAR(10) NOT NULL,
  ciudad VARCHAR(30) NOT NULL,
  cp VARCHAR(5) NOT NULL,
  municipio VARCHAR(100) NOT NULL,
  tipoDiscapacidad VARCHAR(100) NOT NULL,
  sobreDiscapacidad VARCHAR(100) NOT NULL,
  carrera VARCHAR(100) NOT NULL,
  adaptaciones VARCHAR(100) NOT NULL,
  tiempoDisc VARCHAR(20) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE solicitudAdaptacion (
  idSolicitud INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(5) NOT NULL,
  informacion VARCHAR(2000),
  respuesta VARCHAR(2000),
  tiempoHorario VARCHAR(2000),
  adapAnteriores VARCHAR(2000),
  motSolicitud VARCHAR(2000) NOT NULL,
  experienciaR VARCHAR(200) NOT NULL,
  estadoSolicitud INT NOT NULL DEFAULT 1,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE solicitudAdaptacion;
DESCRIBE estudiantes solicitudAdaptacion;