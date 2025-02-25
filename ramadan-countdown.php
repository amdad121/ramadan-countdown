<?php
/**
 * Plugin Name:       Ramadan Countdown
 * Plugin URI:        https://codeappear.com
 * Description:       Get the countdown time of Ramadhan for Bangladesh.
 * Version:           1.3.0
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            Amdadul Haq
 * Author URI:        https://amdadulhaq.com
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

function rdcd_countdown_widget()
{
    register_widget('rdcd_countdown');
    register_widget('rdcd_timetable');
}
add_action('widgets_init', 'rdcd_countdown_widget');

class rdcd_countdown extends WP_Widget
{
    public function __construct()
    {
        $widget_ops = [
            'description' => __('ঢাকা বিভাগের রমজান মাসের প্রতিদিনের সাহরি ও ইফতারের সময় সূচি ও কাউন্টডাউন।'),
            'customize_selective_refresh' => true,
        ];
        parent::__construct('rdcd_countdown', __('কাউন্টডাউন উইজেট'), $widget_ops);
    }

    public function widget($args, $instance)
    {
        $title = !empty($instance['title']) ? $instance['title'] : '';

        $title = apply_filters('widget_title', $title, $instance, $this->id_base);

        echo $args['before_widget']; ?>
<?php if ($title) {
            echo $args['before_title'] . $title . $args['after_title'];
        } ?>
<div style="width: 300px; height:85px; overflow:hidden;margin:0 auto;">
<iframe src="https://ramadan-widgets.pages.dev/countdown" width="300" height="95" frameborder="0"></iframe>
</div>
<?php
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        $instance = wp_parse_args((array) $instance, ['title' => '']);
        $title = $instance['title']; ?>
<p><label
        for="<?php echo $this->get_field_id('title'); ?>"><?php _e('শিরোনাম:'); ?> <input class="widefat"
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

add_shortcode('rdcd_countdown', 'rdcd_countdown_shortcode');

function rdcd_countdown_shortcode()
{
    ob_start(); ?>
<div style="width: 300px; height:85px; overflow:hidden;margin:0 auto;">
<iframe src="https://ramadan-widgets.pages.dev/countdown" width="300" height="95" frameborder="0"></iframe>
</div>
<?php
    return ob_get_clean();
}

class rdcd_timetable extends WP_Widget
{
    public function __construct()
    {
        $widget_ops = [
            'description' => __('সকল বিভাগের রমজান মাসের প্রতিদিনের সাহরি ও ইফতারের সময় সূচি'),
            'customize_selective_refresh' => true,
        ];
        parent::__construct('rdcd_timetable', __('টাইমটেবিল উইজেট'), $widget_ops);
    }

    public function widget($args, $instance)
    {
        $title = !empty($instance['title']) ? $instance['title'] : '';

        $title = apply_filters('widget_title', $title, $instance, $this->id_base);

        echo $args['before_widget']; ?>
<?php if ($title) {
            echo $args['before_title'] . $title . $args['after_title'];
        } ?>
<div style="width: 100%; height:auto; overflow:hidden;">
    <iframe src="https://ramadan-widgets.pages.dev/timetable" width="100%" height="auto" frameborder="0"></iframe>
</div>
<?php
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        $instance = wp_parse_args((array) $instance, ['title' => '']);
        $title = $instance['title']; ?>
<p><label
        for="<?php echo $this->get_field_id('title'); ?>"><?php _e('শিরোনাম:'); ?> <input class="widefat"
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

add_shortcode('rdcd_timetable', 'rdcd_countdown_timetable');

function rdcd_countdown_timetable()
{
    ob_start(); ?>
<div style="width: 100%; height:auto; overflow:hidden;">
    <iframe src="https://ramadan-widgets.pages.dev/timetable" width="100%" height="auto" frameborder="0"></iframe>
</div>
<?php
    return ob_get_clean();
}