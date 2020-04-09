-- --------------------------------------------------------
-- Värd:                         192.168.0.47
-- Serverversion:                10.0.28-MariaDB-2+b1 - Raspbian testing-staging
-- Server-OS:                    debian-linux-gnueabihf
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumpar databasstruktur för catchup
CREATE DATABASE IF NOT EXISTS `catchup` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci */;
USE `catchup`;

-- Dumpar struktur för tabell catchup.accountchannels
CREATE TABLE IF NOT EXISTS `accountchannels` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `accountid` int(11) unsigned NOT NULL,
  `channelid` int(11) unsigned NOT NULL,
  `admin` enum('yes','no') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_channels_channels` (`channelid`) USING BTREE,
  KEY `FK_accountchannels_accounts` (`accountid`),
  CONSTRAINT `FK_accountchannels_accounts` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_accountchannels_channels` FOREIGN KEY (`channelid`) REFERENCES `channels` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


-- Dumpar struktur för tabell catchup.accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `usernick` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `status` enum('online','offline') NOT NULL DEFAULT 'offline',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- Dumpar struktur för tabell catchup.channels
CREATE TABLE IF NOT EXISTS `channels` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `status` enum('private','public') DEFAULT 'private',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- Dumpar struktur för tabell catchup.friends
CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `accountid` int(11) unsigned NOT NULL,
  `accountfriendid` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_friends_accounts` (`accountid`),
  KEY `FK_friends_accounts_2` (`accountfriendid`),
  CONSTRAINT `FK_friends_accounts` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_friends_accounts_2` FOREIGN KEY (`accountfriendid`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell catchup.friends: ~48 rows (ungefär)
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT IGNORE INTO `friends` (`id`, `accountid`, `accountfriendid`) VALUES

/*!40000 ALTER TABLE `friends` ENABLE KEYS */;

-- Dumpar struktur för tabell catchup.messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `channelid` int(11) unsigned NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `accountid` int(11) unsigned NOT NULL,
  `text` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_messages_accounts` (`accountid`),
  KEY `FK_messages_channels` (`channelid`),
  CONSTRAINT `FK_messages_accounts` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_messages_channels` FOREIGN KEY (`channelid`) REFERENCES `channels` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


-- Dumpar struktur för vy catchup.viewfriendlist
-- Skapar temporärtabell för att hantera VIEW-beroendefel
CREATE TABLE `viewfriendlist` (
	`id` INT(11) UNSIGNED NOT NULL,
	`accountid` INT(11) UNSIGNED NOT NULL,
	`friendid` INT(11) UNSIGNED NOT NULL,
	`avatar` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`usernick` VARCHAR(20) NOT NULL COLLATE 'utf8mb4_general_ci',
	`status` ENUM('online','offline') NOT NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumpar struktur för vy catchup.viewlatestchannelmessages
-- Skapar temporärtabell för att hantera VIEW-beroendefel
CREATE TABLE `viewlatestchannelmessages` (
	`id` INT(11) UNSIGNED NOT NULL,
	`accountid` INT(11) UNSIGNED NOT NULL,
	`url` VARCHAR(255) NULL COLLATE 'utf8mb4_general_ci',
	`channelid` INT(11) UNSIGNED NULL,
	`channelname` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`time` DATETIME NULL,
	`usernick` VARCHAR(20) NULL COLLATE 'utf8mb4_general_ci',
	`text` VARCHAR(255) NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumpar struktur för vy catchup.viewlatestmessages
-- Skapar temporärtabell för att hantera VIEW-beroendefel
CREATE TABLE `viewlatestmessages` (
	`id` INT(11) UNSIGNED NOT NULL,
	`channelid` INT(11) UNSIGNED NOT NULL,
	`time` DATETIME NOT NULL,
	`accountid` INT(11) UNSIGNED NOT NULL,
	`text` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumpar struktur för vy catchup.viewmessages
-- Skapar temporärtabell för att hantera VIEW-beroendefel
CREATE TABLE `viewmessages` (
	`id` INT(11) UNSIGNED NOT NULL,
	`channelid` INT(11) UNSIGNED NOT NULL,
	`accountid` INT(11) UNSIGNED NOT NULL,
	`avatar` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`status` ENUM('online','offline') NOT NULL COLLATE 'utf8mb4_general_ci',
	`usernick` VARCHAR(20) NOT NULL COLLATE 'utf8mb4_general_ci',
	`time` DATETIME NOT NULL,
	`text` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumpar struktur för vy catchup.viewmessagesaccountid
-- Skapar temporärtabell för att hantera VIEW-beroendefel
CREATE TABLE `viewmessagesaccountid` (
	`id` INT(11) UNSIGNED NOT NULL,
	`channelid` INT(11) UNSIGNED NOT NULL,
	`accountid` INT(11) UNSIGNED NOT NULL,
	`avatar` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`status` ENUM('online','offline') NOT NULL COLLATE 'utf8mb4_general_ci',
	`usernick` VARCHAR(20) NOT NULL COLLATE 'utf8mb4_general_ci',
	`time` DATETIME NOT NULL,
	`text` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumpar struktur för vy catchup.viewfriendlist
-- Tar bort temporärtabell och skapar slutgiltlig VIEW-struktur
DROP TABLE IF EXISTS `viewfriendlist`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `viewfriendlist` AS select `friends`.`id` AS `id`,`friends`.`accountid` AS `accountid`,`friends`.`accountfriendid` AS `friendid`,`accounts`.`avatar` AS `avatar`,`accounts`.`usernick` AS `usernick`,`accounts`.`status` AS `status` from (`friends` join `accounts` on((`friends`.`accountfriendid` = `accounts`.`id`)));

-- Dumpar struktur för vy catchup.viewlatestchannelmessages
-- Tar bort temporärtabell och skapar slutgiltlig VIEW-struktur
DROP TABLE IF EXISTS `viewlatestchannelmessages`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `viewlatestchannelmessages` AS select `accountchannels`.`id` AS `id`,`accountchannels`.`accountid` AS `accountid`,`channels`.`url` AS `url`,`channels`.`id` AS `channelid`,`channels`.`name` AS `channelname`,`viewlatestmessages`.`time` AS `time`,`accounts`.`usernick` AS `usernick`,`viewlatestmessages`.`text` AS `text` from (((`accountchannels` left join `channels` on((`accountchannels`.`channelid` = `channels`.`id`))) left join `viewlatestmessages` on((`viewlatestmessages`.`channelid` = `channels`.`id`))) left join `accounts` on((`viewlatestmessages`.`accountid` = `accounts`.`id`)));

-- Dumpar struktur för vy catchup.viewlatestmessages
-- Tar bort temporärtabell och skapar slutgiltlig VIEW-struktur
DROP TABLE IF EXISTS `viewlatestmessages`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `viewlatestmessages` AS select `messages`.`id` AS `id`,`messages`.`channelid` AS `channelid`,`messages`.`time` AS `time`,`messages`.`accountid` AS `accountid`,`messages`.`text` AS `text` from `messages` group by `messages`.`channelid` desc;

-- Dumpar struktur för vy catchup.viewmessages
-- Tar bort temporärtabell och skapar slutgiltlig VIEW-struktur
DROP TABLE IF EXISTS `viewmessages`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `viewmessages` AS select `messages`.`id` AS `id`,`messages`.`channelid` AS `channelid`,`messages`.`accountid` AS `accountid`,`accounts`.`avatar` AS `avatar`,`accounts`.`status` AS `status`,`accounts`.`usernick` AS `usernick`,`messages`.`time` AS `time`,`messages`.`text` AS `text` from (`messages` join `accounts` on((`messages`.`accountid` = `accounts`.`id`))) order by `messages`.`id`;

-- Dumpar struktur för vy catchup.viewmessagesaccountid
-- Tar bort temporärtabell och skapar slutgiltlig VIEW-struktur
DROP TABLE IF EXISTS `viewmessagesaccountid`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `viewmessagesaccountid` AS select `messages`.`id` AS `id`,`messages`.`channelid` AS `channelid`,`messages`.`accountid` AS `accountid`,`accounts`.`avatar` AS `avatar`,`accounts`.`status` AS `status`,`accounts`.`usernick` AS `usernick`,`messages`.`time` AS `time`,`messages`.`text` AS `text` from (`messages` join `accounts` on((`messages`.`accountid` = `accounts`.`id`)));

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
