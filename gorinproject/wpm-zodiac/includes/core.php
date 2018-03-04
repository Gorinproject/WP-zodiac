<?php
add_action( 'wp_ajax_my_action', 'my_action_callback' ); 
add_action( 'wp_ajax_nopriv_my_action', 'my_action_callback' );
function my_action_callback(){
switch ($_POST['myPOST']) {
case 'aries':
echo(get_option('aries_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('aries_zodiac_detail'));
    break;
case 'taurus':
echo(get_option('taurus_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('taurus_zodiac_detail'));
    break;
case 'gemini':
echo(get_option('gemini_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('gemini_zodiac_detail'));
        break;
        case 'cancer':
echo(get_option('cancer_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('cancer_zodiac_detail'));
        break;
        case 'leo':
echo(get_option('leo_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('leo_zodiac_detail'));
        break;
        case 'virgo':
echo(get_option('virgo_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('virgo_zodiac_detail'));
        break;
        case 'libra':
echo(get_option('libra_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('libra_zodiac_detail'));
        break;
        case 'scorpio':
echo(get_option('scorpio_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('scorpio_zodiac_detail'));
        break;
        case 'sagittairus':
echo(get_option('sagittairus_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('sagittairus_zodiac_detail'));
        break;
        case 'capricorn':
echo(get_option('capricorn_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('capricorn_zodiac_detail'));
        break;
        case 'aquarius':
echo(get_option('aquarius_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('aquarius_zodiac_detail'));
        break;
        case 'pisces':
echo(get_option('pisces_zodiac_info')."<div id='det_none' class='det-info hide-disp'>".get_option('pisces_zodiac_detail'));
        break;
       }}
?>