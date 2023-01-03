CREATE DATABASE ar_data;

USE ar_data;

CREATE TABLE estudiantes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(5) NOT NULL,
  passwordU VARCHAR(30) NOT NULL,
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

DESCRIBE estudiantes;