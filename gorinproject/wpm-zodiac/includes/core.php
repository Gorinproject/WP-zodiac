<?php
add_action( 'wp_ajax_my_action', 'my_action_callback' ); 
add_action( 'wp_ajax_nopriv_my_action', 'my_action_callback' );
function my_action_callback(){
	echo $_POST['myPOST'];
 	wp_die(); 
}
?>