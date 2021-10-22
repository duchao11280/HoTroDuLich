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

 Date: 12/10/2021 18:29:00
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
  PRIMARY KEY (`id`) USING BTREE
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
  `roomID` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `userID` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `starttime` datetime(6) NULL DEFAULT NULL,
  `phoneNumber` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
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
  PRIMARY KEY (`id`) USING BTREE
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
  PRIMARY KEY (`feedbackID`) USING BTREE
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
  `imgage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `placeID` int NULL DEFAULT NULL,
  `contributeID` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of place
-- ----------------------------

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
  `placeID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`tableID`) USING BTREE
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
  `placeID` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`roomID`) USING BTREE
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
  `isAvailable` bit(1) NULL DEFAULT NULL COMMENT 'Tai khoan co bi vo hieu hoa hay khong?',
  PRIMARY KEY (`userID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'duchao111', '12345', 'Nguyễn Đức Hảo', 'duchao@gmail.com', '12345674', 1, NULL);

SET FOREIGN_KEY_CHECKS = 1;
