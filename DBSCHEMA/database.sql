CREATE DATABASE  IF NOT EXISTS `HTMLphones` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `HTMLphones`;
-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: HTMLphones
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Contacts`
--

DROP TABLE IF EXISTS `Contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contacts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Names` varchar(200) DEFAULT NULL,
  `Adress` varchar(200) DEFAULT NULL,
  `City` varchar(200) DEFAULT NULL,
  `Zip` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contacts`
--

LOCK TABLES `Contacts` WRITE;
/*!40000 ALTER TABLE `Contacts` DISABLE KEYS */;
INSERT INTO `Contacts` VALUES (1,'Juan Rosario','1224 Apple St','Charlotte','28215'),(2,'Ricky Elias','1249 Echo Glen Ave','Ponce','96789'),(3,'Diana Hinojosa','516 vrdas way','Charlotte','28227'),(4,'Jose Perez','3141 bradstreet commons','Charlotte','28227'),(5,'Nancy Lopez','1235 La Florida Ave','Charlotte','28227'),(6,'Ivan Rosario','3603 la frontera Dr','Ponce','96789'),(7,'Sam Walton','1400 Walton Way','New York','90210'),(8,'Marco Roo ','1605 N Sharon Amity','Ponce','96789'),(9,'Edgar SR','1711 Echo Glen Ave','Charlotte','28213'),(10,'Edgar JR','1711 Echo Glen Ave','Charlotte','28213');
/*!40000 ALTER TABLE `Contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Price`
--

DROP TABLE IF EXISTS `Price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Price` (
  `Product_id` int(11) NOT NULL AUTO_INCREMENT,
  `Price` varchar(200) DEFAULT NULL,
  `Price_date` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Price`
--

LOCK TABLES `Price` WRITE;
/*!40000 ALTER TABLE `Price` DISABLE KEYS */;
INSERT INTO `Price` VALUES (1,'Juan Rosario','1224 Apple St'),(2,'Ricky Elias','1249 Echo Glen Ave');
/*!40000 ALTER TABLE `Price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Names` varchar(200) DEFAULT NULL,
  `Maker` varchar(200) DEFAULT NULL,
  `Color` varchar(200) DEFAULT NULL,
  `URL` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'IPHONE 6sPLUS','APPLE','BLACK','https://bit.ly/2mm9eMb'),(2,'IPHONE 7PLUS','APPLE','GOLD','https://bit.ly/2mm9eMb '),(3,'IPHONE 8','APPLE','GOLD','https://bit.ly/2oAXKp3'),(4,'IPHONE 8PLUS','APPLE','ROSE GOLD','https://bit.ly/2nUvyNs'),(5,'IPHONE X','APPLE','SILVER','https://bit.ly/2mr3D7u'),(6,'IPHONE XsMAX','APPLE','MATTE BLACK','https://bit.ly/2mr3D7u'),(7,'Samsung NOTE9','Samsung','BLUE','https://bit.ly/2z3Xb93'),(8,'Samsung S10','Samsung','GOLD','https://t-mo.co/30amnqq'),(9,'NOKIA Next','NOKIA','ARMY GREEN','https://bit.ly/2YWnyx9'),(10,'Telcel Flip','Hebro','Grey','https://bit.ly/2pl8N5U');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-02 17:01:04
