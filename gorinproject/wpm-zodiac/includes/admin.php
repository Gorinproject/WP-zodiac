<?php
add_action('admin_menu', 'zodiac_create_menu');


function zodiac_create_menu() {
	add_menu_page('Знаки зодиака', 'Zodiac Settings', 'administrator', __FILE__, 'zodiac_settings_page',plugins_url('/images/icon.png', __FILE__));
	add_action( 'admin_init', 'register_mysettings' );
}


function register_mysettings() {
	register_setting( 'zodiac-settings-group', 'aries_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'taurus_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'gemini_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'cancer_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'leo_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'virgo_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'libra_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'scorpio_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'sagittarius_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'capricorn_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'aquarius_zodiac_detail' );
        register_setting( 'zodiac-settings-group', 'pisces_zodiac_detail' );
}

function zodiac_settings_page() {
?>
<div class="wrap">
<h2>Описание к знакам зодиака</h2>

<form method="post" action="options.php">
    <?php settings_fields( 'zodiac-settings-group' ); ?>
    <table class="form-table">
        <tr valign="top">
        <th scope="row">Aries/Овен</th>
        <td><textarea cols="40" rows="3" name="aries_zodiac_detail" ><?php echo get_option('aries_zodiac_detail'); ?></textarea></td>
        </tr>
        <tr valign="top">
        <th scope="row">Taurus/Телец</th>
        <td><textarea cols="40" rows="3" name="taurus_zodiac_detail" ><?php echo get_option('taurus_zodiac_detail'); ?></textarea></td>
        </tr>         
        <tr valign="top">
        <th scope="row">Gemini/Близнецы</th>
        <td><textarea cols="40" rows="3" name="gemini_zodiac_detail" ><?php echo get_option('gemini_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Cancer/Рак</th>
        <td><textarea cols="40" rows="3" name="cancer_zodiac_detail" ><?php echo get_option('cancer_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Leo/Лев</th>
        <td><textarea cols="40" rows="3" name="leo_zodiac_detail" ><?php echo get_option('leo_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Virgo/Дева</th>
        <td><textarea cols="40" rows="3" name="virgo_zodiac_detail" ><?php echo get_option('virgo_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Libra/Весы</th>
        <td><textarea cols="40" rows="3" name="libra_zodiac_detail" ><?php echo get_option('libra_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Scorpio/Скорпион</th>
        <td><textarea cols="40" rows="3" name="scorpio_zodiac_detail" ><?php echo get_option('scorpio_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Sagittairus/Стрелец</th>
        <td><textarea cols="40" rows="3" name="sagittarius_zodiac_detail" ><?php echo get_option('sagittarius_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Capricorn/Козерог</th>
        <td><textarea cols="40" rows="3" name="capricorn_zodiac_detail" ><?php echo get_option('capricorn_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Aquarius/Водолей</th>
        <td><textarea cols="40" rows="3" name="aquarius_zodiac_detail" ><?php echo get_option('aquarius_zodiac_detail'); ?></textarea></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Pisces/Рыбы</th>
        <td><textarea cols="40" rows="3" name="pisces_zodiac_detail" ><?php echo get_option('pisces_zodiac_detail'); ?></textarea></td>
        </tr> 
    </table>
    
    <p class="submit">
    <input type="submit" class="button-primary" value="<?php _e('Сохранить') ?>" />
    </p>

</form>
</div>
<?php } ?>