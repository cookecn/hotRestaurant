DROP DATABASE IF EXISTS hot_db;

CREATE DATABASE hot_db;

USE hot_db;

 CREATE TABLE reservation (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
    email VARCHAR(100) ,
    user_name VARCHAR(20),
    password VARCHAR(12),
    reservation INTEGER NOT NULL,
    PRIMARY KEY (id)
 );
 
 CREATE TABLE wait_list (
 	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
    email VARCHAR(100) ,
    user_name VARCHAR(20),
    password VARCHAR(12),
    reservation INTEGER NOT NULL,
    PRIMARY KEY (id)
 );