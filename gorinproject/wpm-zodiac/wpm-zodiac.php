<?php

/*
  Plugin Name: Zodiac
  Description: Zodiac plugin
  Version: 1.0
  Author: Gorin
  Author URI: https://github.com/Gorinproject/wpm-zodiac
  Plugin URI: https://github.com/Gorinproject/wpm-zodiac
 */

define('WPM_ZODIAC_DIR', plugin_dir_path(__FILE__));
define('WPM_ZODIAC_URL', plugin_dir_url(__FILE__));

function wpm_zodiac_load() {

    if (is_admin()) { // подключаем файлы администратора, только если он авторизован
        require_once(WPM_ZODIAC_DIR . 'includes/admin.php');
    }

    require_once(WPM_ZODIAC_DIR . 'includes/core.php');
}

register_activation_hook(__FILE__, 'wpm_zodiac_activation');

function wpm_zodiac_activation() {
    // действие при активации
    // регистрируем действие при удалении
    register_uninstall_hook(__FILE__, 'wpm_zodiac_uninstall');
}

function wpm_zodiac_uninstall() {
    //действие при удалении
}

wpm_zodiac_load();
