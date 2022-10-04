<?php

/**
 * Add custom fields to menu item
 *
 * This will allow us to play nicely with any other plugin that is adding the same hook
 *
 * @param  int $item_id 
 * @params obj $item - the menu item
 * @params array $args
 */
function menu_bg_custom_fields($item_id, $item)
{

  wp_nonce_field('bg_menu_meta_nonce', '_bg_menu_meta_nonce_name');
  $bg_menu_meta = get_post_meta($item_id, '_bg_menu_meta', true);
?>

  <!-- <input type="hidden" name="custom-menu-meta-nonce" value="<?php  //  echo wp_create_nonce('custom-menu-meta-name'); 
                                                                  ?>" /> -->

  <div class="field-custom_menu_meta description-wide" style="margin: 5px 0;">
    <input type="hidden" class="nav-menu-id" value="<?php echo $item_id; ?>" />

    <div class="logged-input-holder">
      <input type="text" name="bg_menu_meta[<?php echo $item_id; ?>]" id="bg-menu-meta-for-<?php echo $item_id; ?>" value="<?php echo esc_attr($bg_menu_meta); ?>" />
      <label for="bg-menu-meta-for-<?php echo $item_id; ?>">
        <?php _e('Background Image URL/ 480 x 500px', 'bg-menu-meta'); ?>
      </label>
    </div>

  </div>

<?php
}
add_action('wp_nav_menu_item_custom_fields', 'menu_bg_custom_fields', 10, 2);


/**
 * Save the menu item meta
 * 
 * @param int $menu_id
 * @param int $menu_item_db_id	
 */
function menu_bg_nav_update($menu_id, $menu_item_db_id)
{

  // Verify this came from our screen and with proper authorization.
  if (!isset($_POST['_bg_menu_meta_nonce_name']) || !wp_verify_nonce($_POST['_bg_menu_meta_nonce_name'], 'bg_menu_meta_nonce')) {
    return $menu_id;
  }

  if (isset($_POST['bg_menu_meta'][$menu_item_db_id])) {
    $sanitized_data = sanitize_text_field($_POST['bg_menu_meta'][$menu_item_db_id]);
    update_post_meta($menu_item_db_id, '_bg_menu_meta', $sanitized_data);
  } else {
    delete_post_meta($menu_item_db_id, '_bg_menu_meta');
  }
}
add_action('wp_update_nav_menu_item', 'menu_bg_nav_update', 10, 2);


/**
 * Displays text on the front-end.
 *
 * @param string   $title The menu item's title.
 * @param WP_Post  $item  The current menu item.
 * @return string      
 */
function menu_bg_custom_menu_title($title, $item)
{

  if (is_object($item) && isset($item->ID)) {

    $custom_menu_meta = get_post_meta($item->ID, '_bg_menu_meta', true);

    if (!empty($custom_menu_meta)) {
      $title .= ' - ' . $custom_menu_meta;
    }
  }
  return $title;
}
add_filter('nav_menu_item_title', 'menu_bg_custom_menu_title', 10, 2);
