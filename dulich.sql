/*
 Navicat Premium Data Transfer

 Source Server         : dulich
 Source Server Type    : MySQL
 Source Server Version : 100421
 Source Host           : localhost:3306
 Source Schema         : dulich

 Target Server Type    : MySQL
 Target Server Version : 100421
 File Encoding         : 65001

 Date: 09/01/2022 10:15:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bookroom
-- ----------------------------
DROP TABLE IF EXISTS `bookroom`;
CREATE TABLE `bookroom`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomID` int(11) NULL DEFAULT NULL,
  `userID` int(11) NULL DEFAULT NULL,
  `startTime` datetime(6) NULL DEFAULT NULL,
  `phoneNumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_bookroom_room`(`roomID`) USING BTREE,
  INDEX `fk_bookroom_user`(`userID`) USING BTREE,
  CONSTRAINT `fk_bookroom_room` FOREIGN KEY (`roomID`) REFERENCES `room` (`roomID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_bookroom_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bookroom
-- ----------------------------
INSERT INTO `bookroom` VALUES (1, 1, 15, '2021-12-09 23:16:00.000000', '112412421');
INSERT INTO `bookroom` VALUES (2, 2, 6, '2021-12-09 23:17:00.000000', '01214141444');
INSERT INTO `bookroom` VALUES (3, 2, 6, '2021-12-12 23:01:00.000000', '09999888');
INSERT INTO `bookroom` VALUES (6, 7, 22, '2021-11-16 20:38:00.000000', '0934556112');
INSERT INTO `bookroom` VALUES (7, 7, 25, '2021-11-09 17:44:00.000000', '3333333333333333333333333333333333333333333333333');
INSERT INTO `bookroom` VALUES (8, 10, 25, '0000-00-00 00:00:00.000000', '0934124220');
INSERT INTO `bookroom` VALUES (9, 2, 25, '2022-01-06 20:45:00.000000', '333333333333333333333333333333333');
INSERT INTO `bookroom` VALUES (10, 2, 25, '2022-01-07 20:56:00.000000', '444444444444');

-- ----------------------------
-- Table structure for booktable
-- ----------------------------
DROP TABLE IF EXISTS `booktable`;
CREATE TABLE `booktable`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tableID` int(11) NULL DEFAULT NULL,
  `userID` int(11) NULL DEFAULT NULL,
  `starttime` datetime(6) NULL DEFAULT NULL,
  `phoneNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_booktable_restaurant`(`tableID`) USING BTREE,
  INDEX `fk_booktable_user`(`userID`) USING BTREE,
  CONSTRAINT `fk_booktable_restaurant` FOREIGN KEY (`tableID`) REFERENCES `tableservices` (`tableID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_booktable_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of booktable
-- ----------------------------
INSERT INTO `booktable` VALUES (5, 11, 25, '2021-11-28 14:41:00.000000', '093323452424');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NULL DEFAULT NULL,
  `content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `placeID` int(11) NULL DEFAULT NULL,
  `time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (2, 6, 'Địa điểm này đẹp quá!', 3, '2021-12-24 18:39:00');
INSERT INTO `comment` VALUES (4, 6, 'Phải đi mới được, cần tìm người đi chung để cho bớt cô đơn hihi!', 3, '2021-12-25 01:29:00');
INSERT INTO `comment` VALUES (8, 25, 'Noi nay minh tung den va no rat la dep', 1, '2021-12-25 23:28:00');
INSERT INTO `comment` VALUES (9, 25, 'Dia diem nay rat dep', 2, '2021-12-30 07:05:00');
INSERT INTO `comment` VALUES (10, 25, 'Dia diem nay minh phai den moi duoc', 3, '2021-12-31 20:19:00');

-- ----------------------------
-- Table structure for contribute
-- ----------------------------
DROP TABLE IF EXISTS `contribute`;
CREATE TABLE `contribute`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `userID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_contribute_user`(`userID`) USING BTREE,
  CONSTRAINT `fk_contribute_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback`  (
  `feedbackID` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `userID` int(11) NULL DEFAULT NULL,
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`feedbackID`) USING BTREE,
  INDEX `fk_feedback_place`(`userID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of feedback
-- ----------------------------
INSERT INTO `feedback` VALUES (23, 'Day la noi dung', 25, 'Thong bao day', 'user_Hoang');
INSERT INTO `feedback` VALUES (24, 'Noi dung nay la mot noi dung', 25, 'Thong bao moi', 'user_Hoang');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `placeID` int(11) NULL DEFAULT NULL,
  `contributeID` int(11) NULL DEFAULT NULL,
  `isDeleted` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_image_place`(`placeID`) USING BTREE,
  INDEX `fk_image_contribute`(`contributeID`) USING BTREE,
  CONSTRAINT `fk_image_contribute` FOREIGN KEY (`contributeID`) REFERENCES `contribute` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_image_place` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES (2, '1638002457075_giangdien.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (3, '1638002468044_giangdien2.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (4, '1638002473645_giangdien3.jpg', 3, NULL, 1);
INSERT INTO `image` VALUES (5, '1638002479653_giangdien4.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (6, '1638002484834_giangdien5.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (9, '1638522784668_4_1638522782220.jpeg', 4, NULL, 0);
INSERT INTO `image` VALUES (10, '1638523280570_4_1638523278066.jpg', 4, NULL, 0);
INSERT INTO `image` VALUES (11, '1638524353039_2_1638524350582.jpg', 2, NULL, 0);
INSERT INTO `image` VALUES (12, '1638524415672_2_1638524413170.jpg', 2, NULL, 0);
INSERT INTO `image` VALUES (13, '1638524523929_1_1638524521485.jpg', 1, NULL, 0);
INSERT INTO `image` VALUES (14, '1638524545918_1_1638524543410.jpg', 1, NULL, 0);
INSERT INTO `image` VALUES (16, '1638527365084_2_1638527362608.jpg', 2, NULL, 1);
INSERT INTO `image` VALUES (17, '1639128873844_3_1639128873270.jpg', 3, NULL, 1);
INSERT INTO `image` VALUES (18, '1639128967436_3_1639128966884.jpg', 3, NULL, 1);
INSERT INTO `image` VALUES (19, '1639129067141_3_1639129066575.jpg', 3, NULL, 0);
INSERT INTO `image` VALUES (20, '1639129307186_1_1639129306621.jpg', 1, NULL, 1);
INSERT INTO `image` VALUES (21, '1639129386627_7_1639129386064.jpg', 7, NULL, 0);
INSERT INTO `image` VALUES (22, '1639129405128_4_1639129404576.jpg', 4, NULL, 0);
INSERT INTO `image` VALUES (23, '1639129436029_1_1639129435473.jpg', 1, NULL, 0);
INSERT INTO `image` VALUES (24, '1639143245584_2_1639143245260.jpg', 2, NULL, 1);
INSERT INTO `image` VALUES (25, '1639143911170_2_1639143910862.jpg', 2, NULL, 0);
INSERT INTO `image` VALUES (26, '1639753978752_10_1639753977739.jpg', 10, NULL, 0);
INSERT INTO `image` VALUES (27, '1639813738727_2_1639813738217.jpg', 2, NULL, 0);
INSERT INTO `image` VALUES (28, '1640089472447_2_1640089472277.jpg', 2, NULL, 0);
INSERT INTO `image` VALUES (29, '1640950346823_9_1640950345992.jpg', 9, NULL, 0);
INSERT INTO `image` VALUES (30, '1640950437642_9_1640950436822.jpg', 9, NULL, 1);
INSERT INTO `image` VALUES (31, '1640950476395_9_1640950475585.jpg', 9, NULL, 1);
INSERT INTO `image` VALUES (32, '1640956631094_3_1640956631326.jpg', 3, NULL, 1);

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `notificationID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`notificationID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification
-- ----------------------------
INSERT INTO `notification` VALUES (1, 'Thông báo đóng cửa địa điểm', 'Ngày 17/12/20221, tại địa điểm Vườn Xoài xảy ra sự cố cấp thoát nước, nên địa điểm tạm thời đóng cửa trong vòng 1 ngày để khắc phục sự cố, xin lỗi quý khách về sự bất tiện này.', '2021-12-24 02:52:00.000000');
INSERT INTO `notification` VALUES (3, 'Cap nhat ung dung', 'Cap nhat ung dung phien ban moi', '2021-12-31 20:18:00.000000');

-- ----------------------------
-- Table structure for place
-- ----------------------------
DROP TABLE IF EXISTS `place`;
CREATE TABLE `place`  (
  `placeID` int(11) NOT NULL AUTO_INCREMENT,
  `placeName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `tips` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'meo khi di du lich tai dia diem',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isDeleted` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`placeID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of place
-- ----------------------------
INSERT INTO `place` VALUES (1, 'Bãi Dâu', '', 'Đi cùng bạn bè ', 'Bà Rịa Vũng Tàu', 0);
INSERT INTO `place` VALUES (2, 'Vườn Xoài', 'Đây là một địa điểm du lịch ưa thích đối với các bạn trẻ thích một nơi cắm trại vui vẻ. Noi nay that dep\n', 'Many hinh\n', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (3, 'Thác Giang Điền', 'Thác Giang Điền là địa điểm thu hút rất nhiều bạn trẻ và các hộ gia đình kéo nhau về đây tổ chức cắm trại, tắm thác và tổ chức ăn uống. Với khung cảnh hoang sơ được bao bọc ', 'Mang theo đồ để cắm trại như: ...', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (4, 'Quảng trường Ba Đình', 'Quảng trường Ba Đình là quảng trường lớn nhất Việt Nam, nằm trên đường Hùng Vương, quận Ba Đình và là nơi Lăng Chủ tịch Hồ Chí Minh được xây dựng.', 'Đi cùng bạn bè', 'Hà Nội', 0);
INSERT INTO `place` VALUES (5, 'Núi Chứa Chan', 'Ngọn núi cao thứ hai ở Đông Nam Bộ có nhiều rừng rậm, vách đá dựng đứng... được các bạn trẻ chọn để khám phá khi rảnh rỗi.', '', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (6, 'Công viên văn hóa Suối Tiên', 'Khu Du lịch Văn hóa Suối Tiên là một công viên liên hợp vui chơi giải trí kết hợp truyền thống các yếu tố văn hóa - lịch sử - tâm linh.', 'Nếu được, bạn hãy đi vào hai ngày cuối tuần để có thể tận mắt xem trình diễn truyền thuyết Sơn Tinh Thủy Tinh.\n\nNguồn bài viết: https://dulichkhampha24.com/khu-du-lich-suoi-tien-sai-gon.html', 'Tp.Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (7, 'Công viên Văn hóa Đầm Sen', 'Nơi đây được ví là “ốc đảo xanh” với 36 thiết bị dưới nước hiện đại cùng nhiều trò chơi cảm giác mạnh đến nhẹ, phù hợp với mọi lứa tuổi. Vì vậy, bạn có thể vui chơi cả ngày mà không thấy chán.', 'Nên tắm sơ trước khi bơi để hạn chế khả năng hấp thu nước Clo trong hồ bơi.\nNgăn chặn tình trạng sạm da bằng cách dùng kem dưỡng ẩm, lotion và kem chống nắng.\nKhi tham gia máng trượt bạn nên mặc quần áo gọn gàng, không mang các vật dụng sắc nhọn để tránh ', 'Tp.Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (8, 'Thác Đá Hàn', 'Khu du lịch thác Đá Hàn là một trong những điểm mới lạ để cho các bạn trẻ tới khám phá. Với vẻ đẹp thiên nhiên hoang sơ và hùng vĩ khó cưỡng, thác nước hữu tình điểm thêm vườn trái cây trĩu quả. Với những bạn yêu thích đi phượt thì địa điểm này hứa hẹn sẽ là điểm đến lý tưởng để dã ngoại, cắm trại những ngày cuối tuần.', 'Hãy mặc trang phục thoải mái, đi giày thể thao để bảo vệ sức khỏe trong thời gian di chuyển.\nCần mang thuốc xịt đề phòng côn trùng cắn', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (9, 'Phan Ri cua', 'Thi tran Phan ri cua that dep', 'Di nho mang theo tien', 'Đồng Nai', 0);
INSERT INTO `place` VALUES (10, 'Mui Ne', 'Dia diem du lich dep', 'Khi di nho dem theo o', 'Bình Thuận', 0);
INSERT INTO `place` VALUES (11, 'Lăng tẩm Huế', 'Nhắc đến  địa điểm du lịch Huế với công trình kiến trúc đặc sắc sẽ không thể bỏ qua lăng tẩm Huế, có lăng tẩm 7 vị vua nhà Nguyễn ở Huế', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Huế', 0);
INSERT INTO `place` VALUES (12, 'Núi Ngự Bình', 'Núi Ngự Bình là địa điểm du lịch bụi ở Huế cực hấp dẫn, với cảnh quan thiên nhiên hùng vĩ, nổi bật với rừng thông xanh ngát, cho du khách thỏa thích ngắm nhìn núi đồi bao la, tận hưởng không gian thoáng mát,', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Huế', 0);
INSERT INTO `place` VALUES (13, 'Cầu Tràng Tiền', 'Cầu Tràng Tiền bắc ngang qua dòng sông Hương, duyên dáng soi bóng dưới dòng nước là biểu tượng đặc trưng của xứ Huế,', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Huế', 0);
INSERT INTO `place` VALUES (14, 'Điện Hòn Chén', 'Địa điểm du lịch Huế thu hút đông du khách phải kể đến điện Hòn Chén, đến đây, du khách vừa có thể chiêm ngưỡng cảnh quan độc đáo, vừa có thể cúng bái, cầu xin bình an', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Huế', 0);
INSERT INTO `place` VALUES (15, 'Nhà thờ Đức Bà', 'Nhà thờ Đức Bà là một trong những địa điểm du lịch Sài Gòn nổi tiếng mà bất kỳ du khách nào đến đây cũng phải ghé thăm', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tp. Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (16, 'Dinh Độc Lập', 'Dinh Độc Lập cũng là một trong những địa điểm du lịch Sài Gòn được xếp vào danh sách di tích đặc biệt cấp quốc gia.', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tp. Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (17, 'Bến Nhà Rồng', 'Công trình này là chứng nhân lịch sử cho cuộc kháng chiến chống Pháp và chống Mỹ của dân tộc ta.', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tp. Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (18, 'Thảo Cầm Viên', 'Thảo Cầm Viênlà một trong những sở thú nổi tiếng tại Thành phố Hồ Chí Minh. Tại đây có hơn 1000 cá thể động vật và hơn 2000 loài hoa, cây cảnh độc đáo giúp cho bạn thoải mái tham quan. ', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tp. Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (19, 'Địa đạo Củ Chi', 'Địa đạo Củ Chi hiện là một trong những điểm du lịch Sài Gòn gắn liền với lịch sử thu hút đông đảo du khách tham quan mỗi ngày. ', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tp. Hồ Chí Minh', 0);
INSERT INTO `place` VALUES (20, 'Hồ Gươm', 'Hồ Gươm hay hồ Hoàn Kiếm là một trong những nơi nên đến ở Hà Nội khi du lịch thủ đô. Nằm ở giữa trung tâm, Hồ Gươm được ví như trái tim của thành phố ngàn năm tuổi này.', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Hà Nội', 0);
INSERT INTO `place` VALUES (21, 'Phố cổ Hà Nội', 'Phố cổ Hà Nội nằm ở phía Tây và phía Bắc của Hồ Hoàn Kiếm, là nơi tập trung đông dân cư sinh sống có 36 phố phường. Mỗi con phố ở đây chủ yếu tập trung bán một loại mặt hàng nhất định. ', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Hà Nội', 0);
INSERT INTO `place` VALUES (22, 'Văn Miếu – Quốc Tử Giám', 'Đây là một quần thể kiến trúc văn hoá hàng đầu và là niềm tự hào của người dân Thủ đô khi nhắc đến truyền thống ngàn năm văn hiến của Thăng Long – Đông Đô – Hà Nội.', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Hà Nội', 0);
INSERT INTO `place` VALUES (23, 'Hồ Tây', 'Hồ Tây một trong những danh thắng nổi tiếng của thủ đô Hà Nội, đây được coi là một “sân khấu khổng lồ soi bóng mây trời và cảnh quan thành phố”.', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Hà Nội', 0);
INSERT INTO `place` VALUES (24, 'Khu du lịch Ba Hồ ', 'Sở dĩ, khu du lịch Nha Trang này có tên là Ba Hồ vì ở đây bao gồm 3 hồ riêng biệt. Nước từ trên đỉnh Hòn Sơn đổ xuống, chảy dọc theo hai triền núi đá cheo leo đã tạo nên một quần thể 3 hồ đá lớn ở những độ cao khác nhau.', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Nha Trang', 0);
INSERT INTO `place` VALUES (25, 'Khu du lịch sinh thái Yang Bay Nha Trang', 'Khu du lịch Nha Trang Yang Bay có diện tích 570ha ở độ cao 100m so với mực nước biển. Nơi đây hấp dẫn du khách bởi vẻ đẹp hoang sơ của vùng núi rừng một màu xanh ngát cỏ cây và thác nước mát lành', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Nha Trang', 0);
INSERT INTO `place` VALUES (26, 'Núi Bà Đen', 'Núi Bà Đen là điểm du lịch gần với trung tâm thành phố Tây Ninh, chỉ cách khoảng hơn 10km. Với những du khách yêu trải nghiệm và du lịch núi thì đây chắc chắn sẽ là địa điểm du lịch ở Tây Ninh không thể bỏ lỡ. ', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tây Ninh', 0);
INSERT INTO `place` VALUES (27, 'Khu du lịch Ma Thiên Lãnh', 'Khu du lịch Ma Thiên Lãnh sở hữu một vẻ đẹp hết sức nên thơ. Đây cũng là một trong các điểm du lịch ở Tây Ninh được đông đảo dân phượt săn đón. ', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tây Ninh', 0);
INSERT INTO `place` VALUES (28, 'Hồ Dầu Tiếng ', 'Hồ Dầu Tiếng là một trong những điểm tham quan ở Tây Ninh khá nổi tiếng. Đây là hồ nước nhân tạo lớn nhất tại nước ta cho tới thời điểm hiện tại. Công trình được xây dựng từ năm 1981 và hoàn thành vào năm 1985.', 'Địa điểm có nhiều cảnh đẹp, khi đi nhớ mang máy ảnh', 'Tây Ninh', 0);

-- ----------------------------
-- Table structure for room
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room`  (
  `roomID` int(11) NOT NULL AUTO_INCREMENT,
  `roomName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `slot` int(11) NULL DEFAULT NULL,
  `price` int(11) NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `isBook` tinyint(1) NULL DEFAULT NULL COMMENT 'phong duoc dat hay chua',
  `userID` int(11) NULL DEFAULT NULL COMMENT 'chu phong',
  `placeID` int(11) NULL DEFAULT NULL,
  `isDisabled` tinyint(4) NULL DEFAULT NULL,
  PRIMARY KEY (`roomID`) USING BTREE,
  INDEX `fk_room_user`(`userID`) USING BTREE,
  INDEX `fk_room_place1`(`placeID`) USING BTREE,
  CONSTRAINT `fk_room_place1` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_room_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES (1, 'R1', 4, 500000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 500000vnd/1 ngày', 'Số 2 đường phan bội châu', 0, 8, 1, 0);
INSERT INTO `room` VALUES (2, 'R2', 2, 300000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 300000vnd/1 ngày', 'Số 14 đường Nguyễn Huệ', 0, 8, 2, 0);
INSERT INTO `room` VALUES (3, 'R3', 3, 400000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 400000vnd/1 ngày', 'Duong cach mang t8', 0, 8, 5, 0);
INSERT INTO `room` VALUES (4, 'R4', 3, 400000, 'Phòng ngủ tiện lợi, nệm ấm chăn êm, 400000vnd/1 ngày', 'Số 10 đường Nguyễn Thị Minh Khai', 0, 8, 1, 0);
INSERT INTO `room` VALUES (5, 'R5', 1, 150000, 'Phong hoi hep', '6 Vo Nguyen GIap', 0, 8, 3, 0);
INSERT INTO `room` VALUES (7, 'Phong 1008', 2, 200000, 'Phong 1008 dep', 'KTX khu B, Dong Hoa, Di An', 0, 23, 3, 0);
INSERT INTO `room` VALUES (8, 'Phong 523', 5, 1500000, 'Phong 523 day du tien nghi', '484 le van viet, Q9 TP.Ho Chi Minh', 0, 23, 1, 1);
INSERT INTO `room` VALUES (9, 'Phong 523', 5, 500000, 'phong dep', '01 le hong phong binh thuan', 0, 23, 9, 1);
INSERT INTO `room` VALUES (10, 'Phong 523', 2, 500000, 'Phong o lau 3', '01 Le hong phong', 0, 27, 3, 0);
INSERT INTO `room` VALUES (11, 'Phong 01', 2, 300000, 'Phong co may lanh va day du tien nghi', '225/4 Tran hung dao, Dong Nai', 0, 23, 1, 0);
INSERT INTO `room` VALUES (12, 'Phong D6', 2, 300000, 'Phong co may lanh va day du tien nghi', '226/04. Thac gian dien, Dong Nai', 0, 23, 3, 0);
INSERT INTO `room` VALUES (13, 'Phong R3', 3, 300000, '123', '123', 0, 23, 2, 0);

-- ----------------------------
-- Table structure for tableservices
-- ----------------------------
DROP TABLE IF EXISTS `tableservices`;
CREATE TABLE `tableservices`  (
  `tableID` int(11) NOT NULL AUTO_INCREMENT,
  `tableName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `slot` int(11) NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isBook` bit(1) NULL DEFAULT NULL COMMENT 'Phòng được đặt hay chưa',
  `userID` int(11) NULL DEFAULT NULL,
  `placeID` int(11) NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isDisabled` tinyint(4) NULL DEFAULT NULL,
  PRIMARY KEY (`tableID`) USING BTREE,
  INDEX `fk_restaurant_user`(`userID`) USING BTREE,
  INDEX `fk_restaurant_place`(`placeID`) USING BTREE,
  CONSTRAINT `fk_restaurant_place` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_restaurant_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tableservices
-- ----------------------------
INSERT INTO `tableservices` VALUES (1, 'Ban so 1', 2, 'Ban an', b'0', 9, 5, 'Số 2 phan bội châu', 0);
INSERT INTO `tableservices` VALUES (2, 'Ban so 2', 2, 'Ban an', b'0', 9, 1, 'số 2 phan bội châu', 0);
INSERT INTO `tableservices` VALUES (3, 'Ban so 3', 4, 'Ban an', b'0', 9, 1, 'số 2 phan bội châu', 0);
INSERT INTO `tableservices` VALUES (6, 'B4', 4, 'Bàn view đẹp, mát mẻ', b'0', 9, 1, 'Số 10 đường Nguyễn Thị Minh Khai', 0);
INSERT INTO `tableservices` VALUES (7, 'B5', 10, 'Ban rong rai, thoang mat, view dep', b'0', 9, 3, 'Xa An Vien, H.Trang Bom', 0);
INSERT INTO `tableservices` VALUES (8, 'B6', 10, 'Bàn rông, view dep', b'0', 9, 1, 'So 1 duong Le Loi', 0);
INSERT INTO `tableservices` VALUES (9, 'B7', 10, 'View dep', b'0', 9, 1, 'So 1 duong Le Loi', 0);
INSERT INTO `tableservices` VALUES (10, '1', 1, '1', b'0', 21, 1, '1', 0);
INSERT INTO `tableservices` VALUES (11, 'Ban so 2', 2, 'Ban dep, thoang mat', b'0', 24, 2, '2', 0);
INSERT INTO `tableservices` VALUES (12, 'Ban 01', 2, 'Ban dep nhat', b'0', 24, 1, '02/9, Bai dau, Dong nai', 0);
INSERT INTO `tableservices` VALUES (13, 'Ban 04', 2, 'Ban danh cho 2 nguoi', b'0', 24, 3, '09, le van viet, thac giang dien, dong nai ', 0);
INSERT INTO `tableservices` VALUES (14, 'ban 09', 3, 'Ban dep, rong rai', b'0', 24, 1, 'Bai dau, Dong Nai', 0);
INSERT INTO `tableservices` VALUES (15, 'ban 112', 4, 'Ban rong rai', b'0', 24, 3, 'Thac Giang Dien', 0);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'moi user co 1 id rieng de phan biet',
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `fullName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phonenumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `role` int(11) NULL DEFAULT NULL COMMENT '0 la nguoi dung, 1 la admin, 2 la khach san, 3 la nha hang ',
  `isDisabled` tinyint(1) NULL DEFAULT NULL COMMENT 'Tai khoan co bi vo hieu hoa hay khong?',
  PRIMARY KEY (`userID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'duchao111', '$2a$2a$14$0lPTjp0te.bFSvfu0TxcvOj1d1gNMEWo31Gh5702E4aGyF1Est6/a', 'Thanh Hoang', 'thanhhoang@gmail.com', '0112223131', 1, 0);
INSERT INTO `user` VALUES (3, 'duchao113', '$2a$14$0lPTjp0te.bFSvfu0TxcvOj1d1gNMEWo31Gh5702E4aGyF1Est6/a', 'Nguyen Duc Hao', 'Duchao112@gmail.com', '012123333', 0, 0);
INSERT INTO `user` VALUES (4, 'duchao114', '$2a$14$LH29vk844fq1uHuL829EDuAad.Y/eXjuEwrasyLegpKT5jYf28mXe', 'Duc Hiep 1', 'duchiiep111@gmail.com', '0123412313', 0, 0);
INSERT INTO `user` VALUES (5, 'thanhhoang112', '$2a$14$M5uqzO4Vq2bqsy4w0biWCORB3a8yaeS7xmusPXqqdm7w/Cpeqrvw2', 'Duc Hiep', 'duchiep111@gmail.com', '0123412313', 1, 0);
INSERT INTO `user` VALUES (6, 'duchao115', '$2a$14$GiREHdJzg2ZUxlXCTxuLNuqSRzur/VNTjKSuGkM4DF1kWUiY8Np06', 'Hảo 115', 'test115n0@gmail.com', '4231123', 0, 0);
INSERT INTO `user` VALUES (7, 'duchao116', '$2a$14$CZIupvBA..R8pCGT7TNgZ.X/sh7X0mYDuykkx1NJn3WeatYMfEwbm', 'Hảo 116', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (8, 'duchao117', '$2a$14$hynyf8zpGM.zrNYmLsr9HOggA/nsSHjibJ/CtqDCgatUd4F8cnJje', 'Hảo 117', 'test@gmail.com', '4231', 2, 0);
INSERT INTO `user` VALUES (9, 'duchao118', '$2a$14$5MaATbFq9JAUMqpG1Ilqo.mFUKud5wKDkfXyVvN/W7Ht4SbFxSXPe', 'Hảo 118', 'test@gmail.com', '4231', 3, 0);
INSERT INTO `user` VALUES (10, 'duchao119', '$2a$14$AoR8dfUmvEx7JnfOZyXuKes3QGxNL6tLGASqPrUk4sdO/FRkoR6wm', 'Hảo 119', 'tes1t@gmail.com', '4231', 0, 0);
INSERT INTO `user` VALUES (11, 'duchao120', '$2a$14$.8MhrkIzdy6AXUNXU.pVDO0gdah7ItwY0u6gKtxMejd8k7o1EIdU2', 'Hảo 120', 'test@gmail.com', '4231', 2, 0);
INSERT INTO `user` VALUES (12, 'duchao121', '$2a$14$7NOD2DXAQ/R8gbdC3.J7DOeanImOxdw9gIJMGIKq23UWczDYrlQhe', 'Hảo 121', 'test@gmail.com', '4231', 1, 0);
INSERT INTO `user` VALUES (13, 'duchao122', '$2a$14$0Cr5kip1AG/UCM7Q0hhhGOldrhsNCxI0dH/PgkGFsdoiq9z0Jumqi', 'Hảo 122', 'duchao121@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (14, 'duchao123', '$2a$14$giG7puVEv2v21nDG/jYv0eNidVGoIDcY/n5JqnJDJGMQ3WvJVEPci', 'Hảo 122', 'duchao123@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (15, 'duchao124', '$2a$14$WA3n.et9TeWum7CupNIxhuSoRPA5mvA6yZ1A0mlwr6Quq1XF3V5P2', 'Hảo 123', 'duchao124@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (16, 'duchao125', '$2a$14$kf3S2EBgTCVm6QChbmYoKuFySXoC7GqJuJLYGqO3TFdQselU8Tn6S', 'Hảo 125', 'duchao125@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (17, 'duchao126', '$2a$14$IxpSXqzM4u98ozKroAHcU.jPGU1bgmhFmYTTLV/V.33WwtAEq3UCG', 'Hảo 126', 'duchao126@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (18, 'duchao127', '$2a$14$eUDXvxqDm8I3xGCxJus4VuAMpHnNyUeST2Hzc1JHc3ZI1ptgRde1q', 'Hảo 127', 'duchao127@gmail.com', '01651564', 1, 0);
INSERT INTO `user` VALUES (19, 'Phucwjbu', '$2a$14$qrFiUSc3CYafIsYoYfBu0O6WLVa/QJVYz7wyrOwfinbQNWH8vMBVS', 'Phuc le', 'phuc123@gmail.com', '0945235875', 0, 0);
INSERT INTO `user` VALUES (20, 'Phucwjbu_hotel', '$2a$14$M7Rygs8UFqID55Q/F7G28.tc4u9dd1/TmEFezdMvUTLDsEJ/PeWLe', 'Phuc tran', 'phuc123@gmail.com', '0945235875', 2, 1);
INSERT INTO `user` VALUES (21, 'Phucwjbu_restaurant', '$2a$14$Hq2GApVWWv7aYRHLI393SO4NHSjtjI7Njpm07v2j6WkezUfAk4DLu', 'Phuc tran', 'phuc123@gmail.com', '0945235875', 3, 1);
INSERT INTO `user` VALUES (22, 'hoang_user', '$2a$14$GpacsgGy/VX39ggziIwHJudjCtXjWrrSxSo.QWcv3gjq8B4UBoRRS', 'Nguyen Thanh Hoang', 'hoanguyen@gmail.com', '09346232201', 0, 0);
INSERT INTO `user` VALUES (23, 'hoang_hotel', '$2a$14$OD3EQDDvvm7P8y1h/48IqejD8N74E4kpEW0VeNilP38nuU5Nc4gUG', 'hoang_hotel', 'hoanguyen_Hotel@gmail.com', '09346232201', 2, 0);
INSERT INTO `user` VALUES (24, 'hoang_restaurant', '$2a$14$vh9UqQnh.jT92Ba5TkdRgugbXCChnDr88igkINuOOsgfxRpQ0z/6.', 'hoang_restaurant', 'hoanguyen_restaurant@gmail.com', '09346232201', 3, 0);
INSERT INTO `user` VALUES (25, 'user_Hoang', '$2a$14$x32SbHxKi9vruju6QWe2u.vu/Qc7wp6axlL.BMlmCLthdSLjBM7K2', 'Hoangthanh', 'hoanguyen.012000@gmail.com', '0934164220', 0, 0);
INSERT INTO `user` VALUES (26, 'Admin_Hoang', '$2a$14$XjratcfYOkKv5htsRcdIAe8ezs/BWfa3hP4ameyyXZPVQVZPZZEj6', 'HoangAdmin', 'hoanguyen.012000@gmail.com', '0934164220', 1, 0);
INSERT INTO `user` VALUES (27, 'Hotel_123', '$2a$14$lUXzlFeTyrROYFlWlT91zONDx5hYOUHvXabb.2RwB63Z3sz8rPPPG', 'Hoang nt', 'hoanguyen.01@gmail.com', '0934123432', 2, 0);

SET FOREIGN_KEY_CHECKS = 1;
