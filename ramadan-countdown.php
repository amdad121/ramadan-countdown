<?php
/**
 * Plugin Name:       Ramadan Countdown
 * Plugin URI:        https://codeofamdad.com
 * Description:       Get the countdown time of Ramadhan for Bangladesh.
 * Version:           1.0.0
 * Requires at least: 4.0
 * Requires PHP:      5.6
 * Author:            Amdadul Haq
 * Author URI:        https://fb.com/amdad121
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

 /*
{Plugin Name} is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

{Plugin Name} is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with {Plugin Name}. If not, see {URI to Plugin License}.
*/

if (!function_exists('add_action')) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

function tdtt_scripts()
{
    wp_register_script('rdcd_js', plugin_dir_url(__FILE__) . 'public/js/custom.min.js', [], '', true);
    wp_enqueue_script('rdcd_js');

    wp_register_style('rdcd_style', plugin_dir_url(__FILE__) . 'public/css/styles.min.css');
    wp_enqueue_style('rdcd_style');
}

add_action('wp_enqueue_scripts', 'tdtt_scripts');

function rdtt_widget()
{
    register_widget('rdcd_cowndown');
}
add_action('widgets_init', 'rdtt_widget');

class rdcd_cowndown extends WP_Widget
{
    public function __construct()
    {
        $widget_ops = [
            'description' => __('Get the update of ramadan.'),
            'customize_selective_refresh' => true,
        ];
        parent::__construct('rdtt_cowndown', __('Ramadan Cowndown'), $widget_ops);
    }

    public function widget($args, $instance)
    {
        $title = !empty($instance['title']) ? $instance['title'] : '';

        /** This filter is documented in wp-includes/widgets/class-wp-widget-pages.php */
        $title = apply_filters('widget_title', $title, $instance, $this->id_base);

        echo $args['before_widget']; ?>
<?php if ($title) {
            echo $args['before_title'] . $title . $args['after_title'];
        } ?>
<div class="rm_wrapper">
    <div id="logo" style="display: none;">
        <div class="rm_city"><b>ঢাকায়</b></div>
        <div>কাল সাহ্&zwnj;রি: ভোর <span id="sehriTS"></span></div>
        <div>আজ ইফতার: সন্ধ্যা <span id="iftarTS"></span></div>
    </div>
    <div id="iftarSehriTimeCount" style="display: none;"></div>
</div>
<?php
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        $instance = wp_parse_args((array) $instance, ['title' => '']);
        $title = $instance['title']; ?>
<p><label
        for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?> <input class="widefat"
            id="<?php echo $this->get_field_id('title'); ?>"
            name="<?php echo $this->get_field_name('title'); ?>"
            type="text"
            value="<?php echo esc_attr($title); ?>" /></label></p>
<?php
    }

    public function update($new_instance, $old_instance)
    {
        $instance = $old_instance;
        $new_instance = wp_parse_args((array) $new_instance, ['title' => '']);
        $instance['title'] = sanitize_text_field($new_instance['title']);
        return $instance;
    }
}

add_shortcode('rdtt_countdown', 'rdtt_shortcode');
function rdtt_shortcode()
{
    ob_start(); ?>
<div class="rm_wrapper">
    <div id="logo" style="display: none;">
        <div class="rm_city"><b>ঢাকায়</b></div>
        <div>কাল সাহ্&zwnj;রি: ভোর <span id="sehriTS"></span></div>
        <div>আজ ইফতার: সন্ধ্যা <span id="iftarTS"></span></div>
    </div>
    <div id="iftarSehriTimeCount" style="display: none;"></div>
</div>
<?php
    return ob_get_clean();
}
