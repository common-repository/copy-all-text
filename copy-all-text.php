<?php

/*
  Plugin Name: Copy All Text
  Description: Just adding a copy all text button on top of the Gutenberg editor for your sanity.
  Version: 1.0.0
  Author: THE PADDING
  Author URI: https://paddn.com/
  License: GPLv3
  Text Domain: copy-all-text
  Requires at least: 5.5
  Requires PHP: 7.2.0
 */

defined('ABSPATH') or die;

if (!function_exists('copy_all_text_link_injection_to_gutenberg_toolbar')) {
    add_action('enqueue_block_editor_assets', 'copy_all_text_link_injection_to_gutenberg_toolbar');

    function copy_all_text_link_injection_to_gutenberg_toolbar()
    {
        $screen = get_current_screen();
        wp_enqueue_script('copy-all-text-link-in-toolbar', plugin_dir_url(__FILE__) . 'admin/js/menu-item.js', array(), '1.0', true);
    }
}