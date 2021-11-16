/*
 Navicat Premium Data Transfer

 Source Server         : Duchao
 Source Server Type    : MySQL
 Source Server Version : 100414
 Source Host           : localhost:3306
 Source Schema         : dulich

 Target Server Type    : MySQL
 Target Server Version : 100414
 File Encoding         : 65001

 Date: 16/11/2021 13:37:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bookroom
-- ----------------------------
DROP TABLE IF EXISTS `bookroom`;
CREATE TABLE `bookroom`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `roomID` int NULL DEFAULT NULL,
  `userID` int NULL DEFAULT NULL,
  `startTime` datetime(6) NULL DEFAULT NULL,
  `endTime` datetime(6) NULL DEFAULT NULL,
  `phoneNumber` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_bookroom_room`(`roomID`) USING BTREE,
  INDEX `fk_bookroom_user`(`userID`) USING BTREE,
  CONSTRAINT `fk_bookroom_room` FOREIGN KEY (`roomID`) REFERENCES `room` (`roomID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_bookroom_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of bookroom
-- ----------------------------

-- ----------------------------
-- Table structure for booktable
-- ----------------------------
DROP TABLE IF EXISTS `booktable`;
CREATE TABLE `booktable`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tableID` int NULL DEFAULT NULL,
  `userID` int NULL DEFAULT NULL,
  `starttime` datetime(6) NULL DEFAULT NULL,
  `phoneNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_booktable_restaurant`(`tableID`) USING BTREE,
  INDEX `fk_booktable_user`(`userID`) USING BTREE,
  CONSTRAINT `fk_booktable_restaurant` FOREIGN KEY (`tableID`) REFERENCES `restaurant` (`tableID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_booktable_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of booktable
-- ----------------------------

-- ----------------------------
-- Table structure for contribute
-- ----------------------------
DROP TABLE IF EXISTS `contribute`;
CREATE TABLE `contribute`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `userID` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_contribute_user`(`userID`) USING BTREE,
  CONSTRAINT `fk_contribute_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of contribute
-- ----------------------------

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback`  (
  `feedbackID` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `placeID` int NULL DEFAULT NULL,
  PRIMARY KEY (`feedbackID`) USING BTREE,
  INDEX `fk_feedback_place`(`placeID`) USING BTREE,
  CONSTRAINT `fk_feedback_place` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of feedback
-- ----------------------------

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `placeID` int NULL DEFAULT NULL,
  `contributeID` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_image_place`(`placeID`) USING BTREE,
  INDEX `fk_image_contribute`(`contributeID`) USING BTREE,
  CONSTRAINT `fk_image_contribute` FOREIGN KEY (`contributeID`) REFERENCES `contribute` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_image_place` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of image
-- ----------------------------

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `notificationID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`notificationID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of notification
-- ----------------------------

-- ----------------------------
-- Table structure for place
-- ----------------------------
DROP TABLE IF EXISTS `place`;
CREATE TABLE `place`  (
  `placeID` int NOT NULL AUTO_INCREMENT,
  `placeName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tips` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'meo khi di du lich tai dia diem',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`placeID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of place
-- ----------------------------
INSERT INTO `place` VALUES (1, 'Bãi biển Vũng Tàu', 'tuyệt đẹp', 'Đi cùng bạn bè ', 'Bà Rịa');
INSERT INTO `place` VALUES (2, 'Vườn Xoài', 'Đây là một địa điểm du lịch ưa thích đối với các bạn trẻ thích một nơi cắm trại vui vẻ', 'Mang theo đồ để cắm trại như: ...', 'Đồng Nai');
INSERT INTO `place` VALUES (3, 'Thác Giang Điền', 'Đây là một địa điểm du lịch ưa thích đối với các bạn trẻ thích một nơi cắm trại vui vẻ', 'Mang theo đồ để cắm trại như: ...', 'Đồng Nai');

-- ----------------------------
-- Table structure for restaurant
-- ----------------------------
DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE `restaurant`  (
  `tableID` int NOT NULL AUTO_INCREMENT,
  `tablename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `slot` int NULL DEFAULT NULL,
  `price` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isBook` bit(1) NULL DEFAULT NULL COMMENT 'Phòng được đặt hay chưa',
  `userID` int NULL DEFAULT NULL,
  `placeID` int NULL DEFAULT NULL,
  PRIMARY KEY (`tableID`) USING BTREE,
  INDEX `fk_restaurant_user`(`userID`) USING BTREE,
  INDEX `fk_restaurant_place`(`placeID`) USING BTREE,
  CONSTRAINT `fk_restaurant_place` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_restaurant_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of restaurant
-- ----------------------------

-- ----------------------------
-- Table structure for room
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room`  (
  `roomID` int NOT NULL AUTO_INCREMENT,
  `roomName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `slot` int NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `isBook` bit(1) NULL DEFAULT NULL COMMENT 'phong duoc dat hay chua',
  `userID` int NULL DEFAULT NULL COMMENT 'chu phong',
  `placeID` int NULL DEFAULT NULL,
  PRIMARY KEY (`roomID`) USING BTREE,
  INDEX `fk_room_user`(`userID`) USING BTREE,
  INDEX `fk_room_place1`(`placeID`) USING BTREE,
  CONSTRAINT `fk_room_place1` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_room_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of room
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userID` int NOT NULL AUTO_INCREMENT COMMENT 'moi user co 1 id rieng de phan biet',
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `fullName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phonenumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `role` int NULL DEFAULT NULL COMMENT '0 la nguoi dung, 1 la admin, 2 la khach san, 3 la nha hang ',
  `isDisabled` tinyint(1) NULL DEFAULT NULL COMMENT 'Tai khoan co bi vo hieu hoa hay khong?',
  PRIMARY KEY (`userID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'duchao111', '$2a$2a$14$0lPTjp0te.bFSvfu0TxcvOj1d1gNMEWo31Gh5702E4aGyF1Est6/a', 'Duc Hao 111', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (2, 'thanhhoang111', 'password', 'Thanh Hoang', 'email@gmail.com', '0112223131', 1, 0);
INSERT INTO `user` VALUES (3, 'duchao113', '$2a$14$0lPTjp0te.bFSvfu0TxcvOj1d1gNMEWo31Gh5702E4aGyF1Est6/a', 'Nguyen Duc Hao', 'Duchao112@gmail.com', '012123333', 0, 0);
INSERT INTO `user` VALUES (4, 'duchao114', '$2a$14$LH29vk844fq1uHuL829EDuAad.Y/eXjuEwrasyLegpKT5jYf28mXe', 'Duc Hiep 1', 'duchiiep111@gmail.com', '0123412313', 0, 0);
INSERT INTO `user` VALUES (5, 'thanhhoang112', '$2a$14$M5uqzO4Vq2bqsy4w0biWCORB3a8yaeS7xmusPXqqdm7w/Cpeqrvw2', 'Duc Hiep', 'duchiep111@gmail.com', '0123412313', 1, 1);
INSERT INTO `user` VALUES (6, 'duchao115', '$2a$14$dVlLDqcZvsIQGyL45DlUP.4p2FZgfzUGLqj3QmCHdMt4OrsHltRE.', 'Hảo 115', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (7, 'duchao116', '$2a$14$YNg8bpgoUpJrhGxYWySo0eg1NQDEB7NDU2RaBwmb75ewrXcSJLdvG', 'Hảo 116', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (8, 'duchao117', '$2a$14$hynyf8zpGM.zrNYmLsr9HOggA/nsSHjibJ/CtqDCgatUd4F8cnJje', 'Hảo 117', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (9, 'duchao118', '$2a$14$5MaATbFq9JAUMqpG1Ilqo.mFUKud5wKDkfXyVvN/W7Ht4SbFxSXPe', 'Hảo 118', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (10, 'duchao119', '$2a$14$00WbBUiuJC6gV3PvP66ZAeGZxku3lxReNyq24haNQPKPuANJf0EPu', 'Hảo 119', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (11, 'duchao120', '$2a$14$.8MhrkIzdy6AXUNXU.pVDO0gdah7ItwY0u6gKtxMejd8k7o1EIdU2', 'Hảo 120', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (12, 'duchao121', '$2a$14$7NOD2DXAQ/R8gbdC3.J7DOeanImOxdw9gIJMGIKq23UWczDYrlQhe', 'Hảo 121', 'test@gmail.com', '4231', 1, 0);

SET FOREIGN_KEY_CHECKS = 1;
