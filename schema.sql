-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'dresses'
-- Main Dress Item
-- ---

DROP TABLE IF EXISTS `dresses`;
		
CREATE TABLE `dresses` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `company_name` VARCHAR(50) NULL DEFAULT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `retail_price` DECIMAL(5) NULL DEFAULT NULL,
  `average_review_rating` DECIMAL(10) NULL DEFAULT NULL,
  `total_reviews` INTEGER(10) NULL DEFAULT NULL,
  `price_4days` DECIMAL(10) NULL DEFAULT NULL,
  `price_8days` DECIMAL(10) NULL DEFAULT NULL,
  `stylist_notes` VARCHAR(1000) NULL DEFAULT NULL,
  `size_and_fit` VARCHAR(1000) NULL DEFAULT NULL,
  `product_details` VARCHAR(1000) NULL DEFAULT NULL,
  `facebook_likes` INTEGER(10) NULL DEFAULT NULL,
  `price_drop_off_percentage` INTEGER NULL DEFAULT NULL,
  `image_url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'Main Dress Item';

-- ---
-- Table 'sizes'
-- All sizes available(numbers and letters)
-- ---

DROP TABLE IF EXISTS `sizes`;
		
CREATE TABLE `sizes` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `size` VARCHAR(10) NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'All sizes available(numbers and letters)';

-- ---
-- Table 'rental_time'
-- Rental time for dress
-- ---

DROP TABLE IF EXISTS `rental_time`;
		
CREATE TABLE `rental_time` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `day_sent` DATE NULL DEFAULT NULL,
  `client_arrived` DATE NULL DEFAULT NULL,
  `client_sent` DATE NULL DEFAULT NULL,
  `day_arrived` DATE NULL DEFAULT NULL,
  `dress_id` INTEGER NULL DEFAULT NULL,
  `size_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'Rental time for dress';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `sizes` ADD FOREIGN KEY (product_id) REFERENCES `dresses` (`id`);
ALTER TABLE `rental_time` ADD FOREIGN KEY (dress_id) REFERENCES `dresses` (`id`);
ALTER TABLE `rental_time` ADD FOREIGN KEY (size_id) REFERENCES `sizes` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `dresses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sizes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rental_time` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `dresses` (`id`,`company_name`,`name`,`retail_price`,`average_review_rating`,`total_reviews`,`price_4days`,`price_8days`,`stylist_notes`,`size_and_fit`,`product_details`,`facebook_likes`,`price_drop_off_percentage`,`image_url`) VALUES
-- ('','','','','','','','','','','','','','');
-- INSERT INTO `sizes` (`id`,`size`,`quantity`,`product_id`) VALUES
-- ('','','','');
-- INSERT INTO `rental_time` (`id`,`day_sent`,`client_arrived`,`client_sent`,`day_arrived`,`dress_id`,`size_id`) VALUES
-- ('','','','','','','');