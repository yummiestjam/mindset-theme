<?php
// DO NOT PUT ANYTHING BEFORE PHP
// DO NOT CLOSE PHP AT THE END OF THE FILE

function mindset_enqueues() {
    wp_enqueue_style(
        'mindset-style',
        get_stylesheet_uri(),
        wp_get_theme()->get('Version'),
        'all'
    );
    wp_enqueue_style(
        'mindset-normalize',
        get_theme_file_uri('assets/css/normalize.css'),
        array(),
        '12.1.0'
    );
}
add_action('wp_enqueue_scripts', 'mindset_enqueues');

function mindset_setup() {
    add_editor_style(get_stylesheet_uri());
}
add_action('after_setup_theme', 'mindset_setup');