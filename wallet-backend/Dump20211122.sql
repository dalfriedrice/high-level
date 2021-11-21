CREATE DATABASE  IF NOT EXISTS `high_level` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `high_level`;
-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: high_level
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `wallet_id` int NOT NULL,
  `t_amount` double(10,4) DEFAULT NULL,
  `current_bal` double(10,4) DEFAULT NULL,
  `t_desc` varchar(255) NOT NULL,
  `t_date` datetime DEFAULT NULL,
  `t_type` varchar(255) NOT NULL,
  PRIMARY KEY (`t_id`),
  KEY `wallet_id` (`wallet_id`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`wallet_id`) REFERENCES `wallet` (`wallet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (100,1001,5000.0000,45000.0000,'Recharge','2021-11-14 01:05:47','Credit'),(101,1010,1000.0000,11000.0000,'Recharge','2021-11-14 01:06:26','Credit'),(103,1001,15000.0000,60000.0000,'Rechanrge','2021-11-14 05:56:11','Credit'),(108,1001,-15000.0000,45000.0000,'Pay','2021-11-14 09:44:02','Debit'),(109,1001,-3000.0000,42000.0000,'Pay','2021-11-14 09:45:22','Debit'),(110,1010,-3000.0000,8000.0000,'Pay','2021-11-14 09:46:24','Debit'),(111,1001,-1000.0000,41000.0000,'Pay Bill','2021-11-17 16:29:44','Debit'),(112,1001,-1000.0000,40000.0000,'Pay Bill','2021-11-17 17:59:05','Debit'),(113,1001,-1000.0000,39000.0000,'Pay Bill','2021-11-17 18:00:52','Debit'),(114,1001,5000.0000,44000.0000,'Recharge','2021-11-17 18:02:40','Credit'),(115,1001,-1000.0000,43000.0000,'Pay Bill','2021-11-17 18:03:32','Debit'),(116,1001,1000.0000,44000.0000,'Recharge','2021-11-17 18:06:30','Credit'),(117,1001,1000.0000,45000.0000,'Recharge','2021-11-19 09:30:08','Credit'),(118,1010,2000.0000,10000.0000,'Recharge','2021-11-19 09:35:53','Credit'),(119,1010,1000.0000,11000.0000,'Pay Bill','2021-11-19 09:36:03','Credit'),(120,1010,500.2500,11500.2500,'Pay Bill','2021-11-19 09:36:15','Credit'),(121,1010,-500.2500,11000.0000,'Pay Bill','2021-11-19 09:36:38','Debit'),(122,1001,-10201.0000,34799.0000,'Pay Bill','2021-11-19 11:21:41','Debit'),(123,1001,-1000.0000,33799.0000,'Pay Bill','2021-11-19 11:22:36','Debit'),(124,1001,1000.0000,34799.0000,'Recharge','2021-11-19 11:23:27','Credit'),(129,1010,1000.0000,12000.0000,'Recharge','2021-11-19 11:38:57','Credit'),(143,1012,-1000.0000,418096.7200,'Pay Bill','2021-11-20 11:56:35','Debit'),(144,1012,-1000.0000,417096.7200,'Pay Bill','2021-11-20 11:56:47','Debit'),(145,1001,1001.0000,35800.0000,'Recharge','2021-11-20 12:08:38','Credit'),(146,1001,1000.0000,36800.0000,'Recharge','2021-11-20 15:01:24','Credit'),(147,1013,-1000.0000,418096.7200,'Pay Bill','2021-11-20 16:10:35','Debit'),(148,1013,1000.0000,419096.7200,'Pay Bill','2021-11-20 16:10:47','Credit'),(149,1013,1000.0000,420096.7200,'Recharge','2021-11-20 16:11:08','Credit'),(150,1012,1000.0000,418096.7200,'Pay Bill','2021-11-20 16:30:54','Credit');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet` (
  `wallet_id` int NOT NULL AUTO_INCREMENT,
  `wallet_name` varchar(255) NOT NULL,
  `opening_bal` double(10,4) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  PRIMARY KEY (`wallet_id`),
  UNIQUE KEY `wallet_name` (`wallet_name`)
) ENGINE=InnoDB AUTO_INCREMENT=1023 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (1001,'akshay_wallet',40000.0000,'2021-11-13 18:30:49'),(1010,'akshay1_wallet',10000.0000,'2021-11-13 13:28:59'),(1011,'test_wallet',10000.0000,'2021-11-13 20:10:32'),(1012,'test1_wallet',419096.7200,'2021-11-16 19:50:27'),(1013,'aksh_wallet',419096.7200,'2021-11-16 19:50:48'),(1014,'test2_wallet',400000.6500,'2021-11-16 19:51:44'),(1015,'test3_wallet',100.0000,'2021-11-16 19:54:34'),(1016,'test4_wallet',10000.0000,'2021-11-17 18:17:05'),(1017,'test5_wallet',10000.0000,'2021-11-17 18:18:02'),(1018,'test6_wallet',201000.0000,'2021-11-19 07:50:11'),(1019,'test7_wallet',20000.0000,'2021-11-19 07:51:11'),(1020,'test8_wallet',1400.0000,'2021-11-20 12:10:23'),(1021,'test9_wallet',1000.0000,'2021-11-20 12:30:19'),(1022,'test10_wallet',1000.0000,'2021-11-20 12:30:49');
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-22  1:15:25
