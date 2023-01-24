CREATE DATABASE ar_data;

USE ar_data;

CREATE TABLE estudiantes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usernameA VARCHAR(5) NOT NULL,
  passwordU VARCHAR(400) NOT NULL,
  nombreCompleto VARCHAR(200) NOT NULL,
  correo VARCHAR(400) NOT NULL,
  tel VARCHAR(10) NOT NULL,
  carrera VARCHAR(100) NOT NULL,
  tipoDiscapacidad VARCHAR(100) NOT NULL,
  sobreDiscapacidad VARCHAR(400) NOT NULL,
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

CREATE TABLE personalAdministrativo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usernameP VARCHAR(5) NOT NULL,
  passwordP VARCHAR(400) NOT NULL,
  nombreCompleto VARCHAR(200) NOT NULL,
  edad INT NOT NULL,
  tel VARCHAR(10) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comentarioSolicitud (
  idSolicitud INT NOT NULL PRIMARY KEY,
  comentarios VARCHAR(400),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE documentosEntregados (
  idEstudiante INT NOT NULL PRIMARY KEY,
  certificadoMedico Boolean,
  comprobanteEstudios Boolean,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE estudiantes solicitudAdaptacion;