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

 Date: 09/12/2021 01:50:13
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
  `phoneNumber` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_bookroom_room`(`roomID`) USING BTREE,
  INDEX `fk_bookroom_user`(`userID`) USING BTREE,
  CONSTRAINT `fk_bookroom_room` FOREIGN KEY (`roomID`) REFERENCES `room` (`roomID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_bookroom_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of bookroom
-- ----------------------------
INSERT INTO `bookroom` VALUES (1, 1, 15, '2021-12-09 23:16:57.000000', 112412421);

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
  `isDeleted` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_image_place`(`placeID`) USING BTREE,
  INDEX `fk_image_contribute`(`contributeID`) USING BTREE,
  CONSTRAINT `fk_image_contribute` FOREIGN KEY (`contributeID`) REFERENCES `contribute` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_image_place` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES (2, '1638002457075_giangdien.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (3, '1638002468044_giangdien2.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (4, '1638002473645_giangdien3.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (5, '1638002479653_giangdien4.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (6, '1638002484834_giangdien5.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (9, '1638522784668_4_1638522782220.jpeg', 4, NULL, 0);
INSERT INTO `image` VALUES (10, '1638523280570_4_1638523278066.jpg', 4, NULL, 0);
INSERT INTO `image` VALUES (11, '1638524353039_2_1638524350582.jpg', 2, NULL, 0);
INSERT INTO `image` VALUES (12, '1638524415672_2_1638524413170.jpg', 2, NULL, 0);
INSERT INTO `image` VALUES (13, '1638524523929_1_1638524521485.jpg', 1, NULL, 0);
INSERT INTO `image` VALUES (14, '1638524545918_1_1638524543410.jpg', 1, NULL, 0);
INSERT INTO `image` VALUES (16, '1638527365084_2_1638527362608.jpg', 2, NULL, 0);

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
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `tips` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'meo khi di du lich tai dia diem',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isDeleted` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`placeID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of place
-- ----------------------------
INSERT INTO `place` VALUES (1, 'Bãi Dâu', '', 'Đi cùng bạn bè ', 'Bà Rịa Vũng Tàu', 0);
INSERT INTO `place` VALUES (2, 'Vườn Xoài', 'Đây là một địa điểm du lịch ưa thích đối với các bạn trẻ thích một nơi cắm trại vui vẻ', 'Mang theo đồ để cắm trại như: ...', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (3, 'Thác Giang Điền', 'Đây là một địa điểm du lịch ưa thích đối với các bạn trẻ thích một nơi cắm trại vui vẻ', 'Mang theo đồ để cắm trại như: ...', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (4, 'Quảng trường Ba Đình', 'Quảng trường Ba Đình là quảng trường lớn nhất Việt Nam, nằm trên đường Hùng Vương, quận Ba Đình và là nơi Lăng Chủ tịch Hồ Chí Minh được xây dựng.', 'Đi cùng bạn bè', 'Hà Nội', 0);
INSERT INTO `place` VALUES (5, 'Núi Chứa Chan', 'Ngọn núi cao thứ hai ở Đông Nam Bộ có nhiều rừng rậm, vách đá dựng đứng... được các bạn trẻ chọn để khám phá khi rảnh rỗi.', '', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (6, 'Công viên văn hóa Suối Tiên', 'Khu Du lịch Văn hóa Suối Tiên là một công viên liên hợp vui chơi giải trí kết hợp truyền thống các yếu tố văn hóa - lịch sử - tâm linh.', 'Nếu được, bạn hãy đi vào hai ngày cuối tuần để có thể tận mắt xem trình diễn truyền thuyết Sơn Tinh Thủy Tinh.\n\nNguồn bài viết: https://dulichkhampha24.com/khu-du-lich-suoi-tien-sai-gon.html', 'TP.Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (7, 'Công viên Văn hóa Đầm Sen', 'Nơi đây được ví là “ốc đảo xanh” với 36 thiết bị dưới nước hiện đại cùng nhiều trò chơi cảm giác mạnh đến nhẹ, phù hợp với mọi lứa tuổi. Vì vậy, bạn có thể vui chơi cả ngày mà không thấy chán.', 'Nên tắm sơ trước khi bơi để hạn chế khả năng hấp thu nước Clo trong hồ bơi.\nNgăn chặn tình trạng sạm da bằng cách dùng kem dưỡng ẩm, lotion và kem chống nắng.\nKhi tham gia máng trượt bạn nên mặc quần áo gọn gàng, không mang các vật dụng sắc nhọn để tránh ', 'TP.Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (8, 'Thác Đá Hàn', 'Khu du lịch thác Đá Hàn là một trong những điểm mới lạ để cho các bạn trẻ tới khám phá. Với vẻ đẹp thiên nhiên hoang sơ và hùng vĩ khó cưỡng, thác nước hữu tình điểm thêm vườn trái cây trĩu quả. Với những bạn yêu thích đi phượt thì địa điểm này hứa hẹn sẽ là điểm đến lý tưởng để dã ngoại, cắm trại những ngày cuối tuần.', 'Hãy mặc trang phục thoải mái, đi giày thể thao để bảo vệ sức khỏe trong thời gian di chuyển.\nCần mang thuốc xịt đề phòng côn trùng cắn', 'Đồng Nai', 0);

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
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `isBook` tinyint(1) NULL DEFAULT NULL COMMENT 'phong duoc dat hay chua',
  `userID` int NULL DEFAULT NULL COMMENT 'chu phong',
  `placeID` int NULL DEFAULT NULL,
  `isDisabled` tinyint NULL DEFAULT NULL,
  PRIMARY KEY (`roomID`) USING BTREE,
  INDEX `fk_room_user`(`userID`) USING BTREE,
  INDEX `fk_room_place1`(`placeID`) USING BTREE,
  CONSTRAINT `fk_room_place1` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_room_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES (1, 'R1', 4, 500000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 500000vnd/1 ngày', 'Số 2 đường phan bội châu', 0, 8, 1, 0);
INSERT INTO `room` VALUES (2, 'R2', 2, 300000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 300000vnd/1 ngày', 'Số 14 đường Nguyễn Huệ', 0, 8, 2, 0);
INSERT INTO `room` VALUES (3, 'R3', 3, 400000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 400000vnd/1 ngày', 'Duong cach mang t8', 0, 8, 5, 0);
INSERT INTO `room` VALUES (4, 'R4', 3, 400000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 400000vnd/1 ngày', 'Số 10 đường Nguyễn Thị Minh Khai', 0, 8, 1, 0);
INSERT INTO `room` VALUES (5, 'R5', 1, 150000, 'Phong hoi hep', '6 Vo Nguyen GIap', 0, 8, 3, 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'duchao111', '$2a$2a$14$0lPTjp0te.bFSvfu0TxcvOj1d1gNMEWo31Gh5702E4aGyF1Est6/a', 'Thanh Hoang', 'thanhhoang@gmail.com', '0112223131', 1, 0);
INSERT INTO `user` VALUES (2, 'thanhhoang111', 'password', 'Thanh Hoang', 'thanhhoang2@gmail.com', '0112223131', 1, 0);
INSERT INTO `user` VALUES (3, 'duchao113', '$2a$14$0lPTjp0te.bFSvfu0TxcvOj1d1gNMEWo31Gh5702E4aGyF1Est6/a', 'Nguyen Duc Hao', 'Duchao112@gmail.com', '012123333', 0, 0);
INSERT INTO `user` VALUES (4, 'duchao114', '$2a$14$LH29vk844fq1uHuL829EDuAad.Y/eXjuEwrasyLegpKT5jYf28mXe', 'Duc Hiep 1', 'duchiiep111@gmail.com', '0123412313', 0, 0);
INSERT INTO `user` VALUES (5, 'thanhhoang112', '$2a$14$M5uqzO4Vq2bqsy4w0biWCORB3a8yaeS7xmusPXqqdm7w/Cpeqrvw2', 'Duc Hiep', 'duchiep111@gmail.com', '0123412313', 1, 0);
INSERT INTO `user` VALUES (6, 'duchao115', '$2a$14$GiREHdJzg2ZUxlXCTxuLNuqSRzur/VNTjKSuGkM4DF1kWUiY8Np06', 'Hảo 115', 'test115n0@gmail.com', '4231123', 0, 0);
INSERT INTO `user` VALUES (7, 'duchao116', '$2a$14$CZIupvBA..R8pCGT7TNgZ.X/sh7X0mYDuykkx1NJn3WeatYMfEwbm', 'Hảo 116', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (8, 'duchao117', '$2a$14$hynyf8zpGM.zrNYmLsr9HOggA/nsSHjibJ/CtqDCgatUd4F8cnJje', 'Hảo 117', 'test@gmail.com', '4231', 2, 0);
INSERT INTO `user` VALUES (9, 'duchao118', '$2a$14$5MaATbFq9JAUMqpG1Ilqo.mFUKud5wKDkfXyVvN/W7Ht4SbFxSXPe', 'Hảo 118', 'test@gmail.com', '4231', 3, 0);
INSERT INTO `user` VALUES (10, 'duchao119', '$2a$14$AoR8dfUmvEx7JnfOZyXuKes3QGxNL6tLGASqPrUk4sdO/FRkoR6wm', 'Hảo 119', 'tes1t@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (11, 'duchao120', '$2a$14$.8MhrkIzdy6AXUNXU.pVDO0gdah7ItwY0u6gKtxMejd8k7o1EIdU2', 'Hảo 120', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (12, 'duchao121', '$2a$14$7NOD2DXAQ/R8gbdC3.J7DOeanImOxdw9gIJMGIKq23UWczDYrlQhe', 'Hảo 121', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (13, 'duchao122', '$2a$14$0Cr5kip1AG/UCM7Q0hhhGOldrhsNCxI0dH/PgkGFsdoiq9z0Jumqi', 'Hảo 122', 'duchao121@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (14, 'duchao123', '$2a$14$giG7puVEv2v21nDG/jYv0eNidVGoIDcY/n5JqnJDJGMQ3WvJVEPci', 'Hảo 122', 'duchao123@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (15, 'duchao124', '$2a$14$WA3n.et9TeWum7CupNIxhuSoRPA5mvA6yZ1A0mlwr6Quq1XF3V5P2', 'Hảo 123', 'duchao124@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (16, 'duchao125', '$2a$14$kf3S2EBgTCVm6QChbmYoKuFySXoC7GqJuJLYGqO3TFdQselU8Tn6S', 'Hảo 125', 'duchao125@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (17, 'duchao126', '$2a$14$IxpSXqzM4u98ozKroAHcU.jPGU1bgmhFmYTTLV/V.33WwtAEq3UCG', 'Hảo 126', 'duchao126@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (18, 'duchao127', '$2a$14$eUDXvxqDm8I3xGCxJus4VuAMpHnNyUeST2Hzc1JHc3ZI1ptgRde1q', 'Hảo 127', 'duchao127@gmail.com', '01651564', 1, 0);

SET FOREIGN_KEY_CHECKS = 1;
