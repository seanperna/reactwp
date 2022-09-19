<?php
register_nav_menus(
  array(
    'primary-menu' => __('Primary Menu'),
    'secondary-menu' => __('Secondary Menu')
  )
);

function get_menu()
{
  return wp_get_nav_menu_items('menu');
}

add_action('rest_api_init', function () {
  register_rest_route('myroutes', '/menu', array(
    'methods' => 'GET',
    'callback' => 'get_menu',
  ));
});
