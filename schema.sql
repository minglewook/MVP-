DROP DATABASE IF EXISTS jobs;

CREATE DATABASE jobs;

USE jobs;

CREATE TABLE companies (
  id int NOT NULL AUTO_INCREMENT,
  date varchar(20) NOT NULL,
  companyName varchar(20) NOT NULL,
  followUp varchar(20) NOT NULL,
  dateOfFollowUp varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO companies (id, date, companyName, followUp, dateOfFollowUp) VALUES (1, "2019-11-14", "Google", "Yes", "2019-11-15");