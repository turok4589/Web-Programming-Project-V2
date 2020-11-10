-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ExerciseDatabase
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Types_Types1_idx` (`Type_id` ASC)
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC)
  CONSTRAINT `fk_Types_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Username` VARCHAR(45) NOT NULL,
  `Firstname` VARCHAR(45) NOT NULL,
  `Lastname` VARCHAR(45) NOT NULL,
  `DOB` DATETIME NULL,
  `Password` VARCHAR(45) NULL,
  `User_Type` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Users_Types1_idx` (`User_Type` ASC)
  CONSTRAINT `fk_Users_Types1`
    FOREIGN KEY (`User_Type`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ContactMethods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ContactMethods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Type` VARCHAR(45) NOT NULL,
  `Value` VARCHAR(45) NOT NULL,
  `IsPrimary` BIT NOT NULL DEFAULT 0,
  `CanSpam` BIT NOT NULL DEFAULT 0,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ContactsMethods_Users_idx` (`User_id` ASC)
  INDEX `fk_ContactsMethods_Type_idx` (`Type` ASC)
  CONSTRAINT `fk_ContactsMethods_Users`
    FOREIGN KEY (`User_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ContactsMethods_Type`
    FOREIGN KEY (`Type`)
    REFERENCES `Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Exercises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Exercises` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP GENERATED ALWAYS AS (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) VIRTUAL,
  `Type` VARCHAR(45) NOT NULL,
  `Time_Spent` INT NOT NULL,
  `Calories_Burned` INT NOT NULL,
  `Favorite_Exercise` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Exercises_Type_idx` (`Type` ASC)
  INDEX `fk_Exercises_User_idx` (`Owner_id` ASC)
  CONSTRAINT `fk_Exercises_Type`
    FOREIGN KEY (`Type`)
    REFERENCES `Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Exercises_User`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Friends` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Friends_url_page` VARCHAR(2048) NOT NULL,
  `Friends_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Friends_Users_idx` (`Friends_id` ASC)
  INDEX `fk_Friends_Users_idx1` (`Owner_id` ASC)
  CONSTRAINT `fk_Friends_Users`
    FOREIGN KEY (`Friends_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Friends_Users`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Requests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Requests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `friends_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Requests_Users_idx` (`user_id` ASC) 
  INDEX `fk_Requests_Friends_idx` (`friends_id` ASC)
  CONSTRAINT `fk_Requests_Users`
    FOREIGN KEY (`user_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Requests_Friends`
    FOREIGN KEY (`friends_id`)
    REFERENCES `Friends` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Reactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Reactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Exercise_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  `Like_Exercise` BIT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_Reactions_Exercises_idx` (`Exercise_id` ASC)
  INDEX `fk_Reactions_Users_idx` (`Owner_id` ASC)
  CONSTRAINT `fk_Reactions_Exercises`
    FOREIGN KEY (`Exercise_id`)
    REFERENCES `Exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reactions_Users`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Types`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (1, 'Now()', DEFAULT, 'Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (2, 'Now()', DEFAULT, 'User Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (3, 'Now()', DEFAULT, 'Exercise Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (4, 'Now()', DEFAULT, 'Contact Method Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (5, 'Now()', DEFAULT, 'Admin', 2);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (6, 'Now()', DEFAULT, 'User', 2);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Running', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Bench Press', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Walking', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Bicycle Riding', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Swimming', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Email', 4);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Cell Phone', 4);

COMMIT;

