CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

set foreign_key_checks=0;

CREATE TABLE `User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40),
  PRIMARY KEY (`id`)
);

CREATE TABLE `Room` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40),
  PRIMARY KEY (`id`)
);

CREATE TABLE `Messages` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` TEXT,
  `createdAt` TIMESTAMP,
  `user_id` INT UNSIGNED NOT NULL,
  `room_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
);



ALTER TABLE `Messages` ADD FOREIGN KEY (user_id) REFERENCES `User`(`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (room_id) REFERENCES `Room`(`id`);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

