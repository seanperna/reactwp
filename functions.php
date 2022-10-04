<?php
// imports
require_once 'inc/definitions.php';

// adding custom field to menu items
require_once 'inc/custom_field.func.php';
require_once 'inc/menu_icon_field.func.php';
require_once 'inc/menu_bg_field.func.php';


// initiating menus for the theme
register_nav_menus(
  array(
    'primary-menu' => __('Primary Menu'),
    'secondary-menu' => __('Secondary Menu')
    // 'navbar-menu' => __('Navbar Menu')
  )
);


// primary menu fetch from server and api endpoint
function get_menu_header_left()
{
  return wp_get_nav_menu_items('menu');
}

add_action('rest_api_init', function () {
  register_rest_route(API_URL_DIRECTORY_WOOWOO, '/primary', array(
    'methods' => 'GET',
    'callback' => 'get_menu_header_left',
  ));
});


// secondary menu top header fetch from server and api endpoint
function get_menu_header_right()
{
  return wp_get_nav_menu_items('account');
}

add_action('rest_api_init', function () {
  register_rest_route(API_URL_DIRECTORY_WOOWOO, '/secondary', array(
    'methods' => 'GET',
    'callback' => 'get_menu_header_right',
  ));
});



/**
 * Old Version Function, suitable only for 2 level nested
 * functions
 */
// // main menu home page fetch and api endpoint
// function get_menu_navbar_main()
// {
//   $x = wp_get_nav_menu_items('navbar');
//   $menu = array();
//   $submenu = array();
//   foreach ($x as $y) {
//     $y->submenu = array();
//     if ($y->menu_item_parent === '0')
//       array_push($menu, $y);
//     else
//       array_push($submenu, $y);
//   }
//   for ($i = 0; $i < count($submenu); $i++) {
//     $index = get_index($menu, $submenu[$i]->menu_item_parent);
//     if ($index > -1) {
//       array_push($menu[$index]->submenu, $submenu[$i]);
//     }
//   }
//   return $menu;
// }
// function get_index($menu, $parent_id)
// {
//   $index = -1;
//   for ($i = 0; $i < count($menu); $i++) {
//     if ((string)$menu[$i]->ID === $parent_id) {
//       $index = $i;
//       break;
//     }
//   }
//   return $index;
// }


/**
 * Menu return API with appropriate nesting
 */
// main menu home page fetch and api endpoint
function get_menu_navbar_main()
{
  $items = wp_get_nav_menu_items('navbar');

  $output = array();
  makeParentChildRelations($items, $output);
  return $output;
}
function makeParentChildRelations(&$inArray, &$outArray, $currentParentId = 0)
{
  if (!is_array($inArray)) {
    return;
  }
  if (!is_array($outArray)) {
    return;
  }

  foreach ($inArray as $key => $tuple) {
    // echo $tuple->{'ID'} . '/' . $currentParentId;
    if ($tuple->{'menu_item_parent'} == $currentParentId) {
      // echo ' Match - ';
      $tuple->{'submenu'} = array();
      makeParentChildRelations($inArray, $tuple->{'submenu'}, $tuple->{'ID'});
      $outArray[] = $tuple;
    } else {
      // echo ' - ';
    }
  }
}





add_action('rest_api_init', function () {
  register_rest_route('menu', '/navbar', array(
    'methods' => 'GET',
    'callback' => 'get_menu_navbar_main',
  ));
});
