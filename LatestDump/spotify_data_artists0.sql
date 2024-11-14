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
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `name` varchar(255) NOT NULL,
  `bio` text,
  `artist_type` enum('Solo','Band') NOT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES ('99770812-4218-46cd-86d1-e65d06a7ddc1','Mac Miller','For a tragically brief time, Pittsburgh-based rapper and producer Mac Miller connected with legions of listeners through the appeal of both his curious, jazz-flecked instrumental style and heartfelt lyrics that laid bare his struggles with depression and addiction. Though his 2011 studio album debut Blue Slide Park topped the charts, his style and lyrical focus changed on subsequent, more personal releases like 2016\'s The Divine Feminine, which dominated the R&B and rap charts. Miller followed up with Swimming in 2018, but he died from an overdose one month after the album\'s release. His early output had an immediate resurgence as longtime fans mourned and those who just learned about the rapper explored his work for the first time. Miller\'s first posthumous album, Circles, was completed by producer Jon Brion and released in 2020, peaking at number three in the U.S.\\n\\nBorn Malcolm McCormick, Miller first used the alias Easy Mac, a name referenced on his debut mixtape, 2007\'s But My Mackin\' Ain\'t Easy. His KIDS mixtape became his breakthrough when it was released in August of 2010, earning plenty of attention from hip-hop blogs and landing Miller a recording contract with Rostrum Records. Rostrum released his debut EP, On and on and Beyond, and his debut album, Blue Slide Park, in 2011. The album debuted at number one on the Billboard 200. His seventh mixtape, Macadelic, arrived the next year, featuring appearances by Kendrick Lamar, Juicy J, Cam\'ron, Lil Wayne, and more (the set was later remastered for a spring 2018 release). The more experimental effort, Watching Movies with the Sound Off, followed in 2013, with left-field hip-hop names like Action Bronson, Earl Sweatshirt, and Flying Lotus lending a hand. A year later, Miller issued the mixtape Faces, signed with Warner Bros., and launched his own imprint, REMember Music, under the major label.\\n\\nGO:OD AM followed in 2015 with Lil B, Chief Keef, and Miguel on the album\'s guest list. The single \"100 Grandkids\" peaked appropriately at number 100, while \"Weekend\" was certified gold. Just a year after GO:OD AM ascended to the Top Five of the Billboard 200 and rap charts, Miller returned with his fourth LP, The Divine Feminine. The album featured contributions from guests like Kendrick Lamar, Cee Lo Green, Ariana Grande, Robert Glasper, and Anderson .Paak, who lent his soulful rasp to first single \"Dang!\" A pair of non-album singles (\"Buttons\" and \"Programs\") kept Miller busy into 2018, when he issued his fifth album, Swimming. Debuting at number three on both the Billboard 200 and R&B/hip-hop charts, the set included the songs \"Small Worlds,\" \"Self-Care,\" and \"What\'s the Use?\" A month after the release of the effort, Miller died from a suspected drug overdose in his San Fernando Valley home. He was 26 years old. Following his death, seven of his full-lengths posthumously hit the Billboard 200 (the mixtapes Best Day Ever and Macadelic made their chart debuts), and Swimming was nominated for a Grammy in the category of Best Rap Album. In early 2020, his first posthumous set was released. Intended as a companion to Swimming, Circles featured vocals recorded for this eventual project, which was completed by producer Jon Brion. The LP became Miller\'s fifth Top Three showing on the U.S. charts. Later that year, KIDS was released to streaming services for the first time, which helped place it back on the Billboard 200. A revised edition of another mixtape, Faces, was issued commercially in 2021. The following year, his 2011 mixtape I Love Life, Thank You arrived on streaming services, which sent the collection to number 22 on the Billboard 200 (and into the Top Five on the U.S. indie album list). ~ David Jeffries & Neil Z. Yeung, Rovi','Solo','https://spotify-clone1.s3.eu-north-1.amazonaws.com/artists/mac+miller/mac+miller.jpeg'),('f0100c9a-a10c-11ef-9ed7-c645075491da','Eminem','Apart from being one of the best-selling artists in music history, Eminem is one of the greatest rappers of his generation. He\'s effortlessly fast, fluid, dexterous, and unpredictable, capable of pulling off long-form narratives or withering asides. And thanks to his mentor Dr. Dre, he\'s had music to match with thick, muscular loops evoking the terror and paranoia conjured by his lyrics. To be certain, a great deal of the controversy Eminem courted came through in how his violent fantasias, often directed at his mother or his wife, intertwined with flights of absurdity that appealed to listeners too young to absorb the psychodramas explored on his breakthrough albums The Slim Shady LP and The Marshall Mathers LP. Eminem\'s commercial peak came around the time of his 2002 album The Eminem Show (which went platinum 27 times over) and with his crossover onto the big screen that same year with 8 Mile, a film that earned him acclaim for his performance and an Oscar for the film\'s anthem, \"Lose Yourself.\" Eminem\'s journey as a living rap legend included struggles with addiction, near-constant feuding with other artists, and a celebrity status that shifted as the years went on. Through all his various changes, however, he continued growing as an artist as well as consistently hitting high commercial marks. Though critics could be unkind to efforts like 2009\'s Relapse or 2017\'s Revival, fans made sure that each new album sold at least platinum numbers and topped the charts. Instead of recycling old ideas, the rapper experimented with new production approaches, faster flows, and increasingly complex multisyllabic wordplay on projects like 2020\'s Music to Be Murdered By and the 2024 concept album The Death of Slim Shady (Coup de Grâce), in which he confronted and killed his alter ego.','Solo','https://spotify-clone1.s3.eu-north-1.amazonaws.com/artists/eminem/eminem.jpeg');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-14 16:35:09
