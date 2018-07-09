-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 html_goods 的数据库结构
DROP DATABASE IF EXISTS `html_goods`;
CREATE DATABASE IF NOT EXISTS `html_goods` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `html_goods`;


-- 导出  表 html_goods.goodslist 结构
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE IF NOT EXISTS `goodslist` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(50) NOT NULL DEFAULT '0',
  `goodstitle` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- 正在导出表  html_goods.goodslist 的数据：~8 rows (大约)
/*!40000 ALTER TABLE `goodslist` DISABLE KEYS */;
REPLACE INTO `goodslist` (`idx`, `imgurl`, `goodstitle`) VALUES
	(1, 'm_lehua', '寺库X乐华七子'),
	(2, 'm_tenyears', '十周年礼盒'),
	(3, 'm_versace', 'VARsace'),
	(4, 'm_london', 'CARAT*Lodon'),
	(5, 'm_baobao', 'ROGER Viver'),
	(6, 'm_Italy', 'Mr&Mrs Italy'),
	(7, 'm_world', 'Mastermind World'),
	(8, 'm_Tumi', 'Tumi');
/*!40000 ALTER TABLE `goodslist` ENABLE KEYS */;


-- 导出  表 html_goods.listpage 结构
DROP TABLE IF EXISTS `listpage`;
CREATE TABLE IF NOT EXISTS `listpage` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(50) CHARACTER SET latin1 NOT NULL DEFAULT '0',
  `pagetitle` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `price` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- 正在导出表  html_goods.listpage 的数据：~11 rows (大约)
/*!40000 ALTER TABLE `listpage` DISABLE KEYS */;
REPLACE INTO `listpage` (`idx`, `imgurl`, `pagetitle`, `price`) VALUES
	(3, 'ss_1', 'Samsung/三星 KJ1100G-K9080W韩国原装进口空气净化器 大空间CARD值', '￥18999'),
	(4, 'ss_2', 'Samsung/三星 空气净化器 KJ716G-K7056WW', '￥6111'),
	(5, 'ss_3', 'Samsung/三星 空气净化器KJ720F-K7586WF原装进口 大客厅 适用86平方', '￥8667'),
	(6, 'ss_4', 'Samsung/三星 空气净化器 KJ400F-K5586WF', '￥5000'),
	(7, 'ss_5', 'Samsung/三星 空气净化器KJ396G-K5056WW新国标认证CCM颗粒物P4等级，CCM甲醛F4等级，适用47平方米，除甲醛增强型图片', '￥4222'),
	(8, 'ss_6', 'Samsung/三星 空气净化器KJ350F-M3058WM PM2.5智能数显 内置WIFI图片', '￥3000'),
	(9, 'ss_1', 'Samsung/三星 KJ1100G-K9080W韩国原装进口空气净化器 大空间CARD值', '￥18999'),
	(10, 'ss_2', 'Samsung/三星 空气净化器 KJ716G-K7056WW', '￥6111'),
	(11, 'ss_3', 'Samsung/三星 空气净化器KJ720F-K7586WF原装进口 大客厅 适用86平方', '￥8667'),
	(12, 'ss_4', 'Samsung/三星 空气净化器 KJ400F-K5586WF', '￥5000'),
	(13, 'ss_5', 'Samsung/三星 空气净化器KJ396G-K5056WW新国标认证CCM颗粒物P4等级，CCM甲醛F4等级，适用47平方米，除甲醛增强型图片', '￥4222'),
	(14, 'ss_6', 'Samsung/三星 空气净化器KJ350F-M3058WM PM2.5智能数显 内置WIFI图片', '￥3000');
/*!40000 ALTER TABLE `listpage` ENABLE KEYS */;


-- 导出  表 html_goods.register 结构
DROP TABLE IF EXISTS `register`;
CREATE TABLE IF NOT EXISTS `register` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

-- 正在导出表  html_goods.register 的数据：~5 rows (大约)
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
REPLACE INTO `register` (`index`, `username`, `password`) VALUES
	(23, '790429341@qq.com', 'zb1234'),
	(24, '790429342@qq.com', 'zb1234'),
	(25, '790429323@qq.com', 'zb1234'),
	(26, '13927841691', 'zb1234'),
	(27, 'zb95120', 'zb1234'),
	(28, 'laoxie666', 'laoxie666');
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
