<?php
/**
 * Plugin Name: Vanilla Blocks - Flex Column
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Flex Column — alternative flexbox based columns for Gutenberg.
 * Author: drdogbot7
 * Author URI: https://mulliscreative.com/
 * Version: 0.1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
