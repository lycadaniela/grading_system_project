

DROP TABLE IF EXISTS `tbl_admin`;

CREATE TABLE `tbl_admin` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`admin_id`));

  DROP TABLE IF EXISTS `tbl_class`;

CREATE TABLE `tbl_class` (
  `class_id` INT NOT NULL AUTO_INCREMENT,
  `department` VARCHAR(45) NOT NULL,
  `year_level` VARCHAR(45) NOT NULL,
  `block` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`class_id`));

DROP TABLE IF EXISTS `tbl_course`;

CREATE TABLE `tbl_course` (
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(45) NOT NULL,
  `course_code` VARCHAR(45) NOT NULL,
  `instructor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`course_id`));

DROP TABLE IF EXISTS `tbl_teacher`;

CREATE TABLE `tbl_teacher` (
  `teacher_id` INT NOT NULL AUTO_INCREMENT,
  `teacher_name` VARCHAR(45) NOT NULL,
  `employee_number` INT NOT NULL,
  `email_address` VARCHAR(45) NOT NULL,
  `courses` VARCHAR(45) NOT NULL,
  `classes` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`teacher_id`));

DROP TABLE IF EXISTS `tbl_student`;

CREATE TABLE `tbl_student` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `student_name` VARCHAR(45) NOT NULL,
  `student_number` INT NOT NULL,
  `department` VARCHAR(45) NOT NULL,
  `year_level` VARCHAR(45) NOT NULL,
  `course` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `studentcol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`student_id`));
