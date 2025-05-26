<?php
// Load ACF Custom Blocks
require get_theme_file_path() . '/fwd-acf-blocks/fwd-acf-blocks.php';

/**
* Register our ACF custom blocks.
*
* @link https://developer.wordpress.org/reference/functions/register_block_type/
*/
function fwd_register_acf_blocks() {
    // Accordion block
    register_block_type( __DIR__ . '/accordion' );
}
add_action( 'init', 'fwd_register_acf_blocks' );