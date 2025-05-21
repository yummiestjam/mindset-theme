<?php
// DO NOT PUT ANYTHING BEFORE PHP
// DO NOT CLOSE PHP AT THE END OF THE FILE

function mindset_enqueues() {
    // CSS
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

    // JS
    wp_enqueue_script(
        'mindset-scroll-to-top',
        get_theme_file_uri('assets/js/scroll-to-top.js'),
        array(),
        wp_get_theme()->get('Version'),
        array('strategy' => 'defer')
    );

    if (is_page(15)) { // 15 is the id of the contact page
        wp_enqueue_script(
            'mindset-contact',
            get_theme_file_uri('assets/js/contact.js'),
            array('mindset-scroll-to-top'),
            wp_get_theme()->get('Version'),
            array('strategy' => 'defer')
        );
    };
}
add_action('wp_enqueue_scripts', 'mindset_enqueues');

function mindset_setup() {
    add_editor_style(get_stylesheet_uri());

    add_image_size('400x500', 400, 500, true);
    add_image_size('200x250', 200, 250, true);
    add_image_size('400x200', 400, 200, true);
    add_image_size('800x400', 800, 400, true);
}
add_action('after_setup_theme', 'mindset_setup');

function mindset_add_custom_image_sizes($size_names) {
    $new_sizes = array(
        '400x500' => __('400x500', 'mindset-theme'),
        '200x250' => __('200x250', 'mindset-theme'),
        '400x200' => __('400x200', 'mindset-theme'),
        '800x400' => __('800x400', 'mindset-theme'),
    );
    return array_merge($size_names, $new_sizes);
}
add_filter('image_size_names_choose', 'mindset_add_custom_image_sizes');

// Load custom blocks.
require get_theme_file_path() . '/mindset-blocks/mindset-blocks.php';

require get_theme_file_path() . '/inc/post-types-taxonomies.php';