-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (arm64)
--
-- Host: 127.0.0.1    Database: spotify_data
-- ------------------------------------------------------
-- Server version	9.1.0

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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `artist_id` char(36) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `album_length` time DEFAULT NULL,
  `track_count` int DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `cover_url` varchar(255) DEFAULT NULL,
  `album_type` enum('Album','Single') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `Artists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES ('1e4fbdec-6df7-4e96-be84-7c4b113230b8','99770812-4218-46cd-86d1-e65d06a7ddc1','Circles','© 2020 Warner Records Inc.\n℗ 2020 Warner Records Inc.','00:44:44',12,'2017-01-17','https://spotify-clone1.s3.eu-north-1.amazonaws.com/artists/mac+miller/albums/Circles/cover.jpg','Album'),('1f693a7f-6054-4ff6-a8a9-bd8341274c36','99770812-4218-46cd-86d1-e65d06a7ddc1','Swimming','© 2018 Warner Records Inc.\n℗ 2018 Warner Records Inc.','00:58:39',13,'2018-08-03','https://spotify-clone1.s3.eu-north-1.amazonaws.com/artists/mac+miller/albums/Swimming/cover.jpg','Album'),('348661f1-cea9-4818-8491-be5252a84038','f0100c9a-a10c-11ef-9ed7-c645075491da','The Marshall Matters LP','© 2001 UMG Recordings, Inc.℗ 2001 UMG Recordings, Inc.','01:33:41',22,'2001-08-20','https://spotify-clone1.s3.eu-north-1.amazonaws.com/artists/eminem/albums/The+Marshall+Mathers+LP/cover.jpg','Album'),('c5937424-a10d-11ef-9ed7-c645075491da','f0100c9a-a10c-11ef-9ed7-c645075491da','Music To Be Murdered By Deluxe Version','© 2020 Marshall B. Mathers III\n℗ 2020 Marshall B. Mathers III','01:04:00',20,'2020-01-17','https://spotify-clone1.s3.eu-north-1.amazonaws.com/artists/eminem/albums/Music+to+Be+Murdered+By/cover.jpg','Album');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-25 20:40:33
