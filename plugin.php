<?php
/*
Plugin Name: Percentage Calculator Online by Calculator.iO
Plugin URI: https://www.calculator.io/percentage-calculator-online/
Description: Percent calculator to calculate percentage of a number online. The calculator can find percentages and calculate discounts, taxes, and tips.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_percentage_calculator_online
*/

if (!function_exists('add_shortcode')) die("No direct call");

function display_ci_percentage_calculator_online(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/percentage-calculator-online/" target="_blank"><img src="' . plugins_url('assets/images/icon-48.png', __FILE__ ) . '" width="48" height="48"></a> Percentage Calculator Online</h2><div><iframe style="background:transparent; overflow: scroll" src="' . plugins_url($page, __FILE__ ) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_percentage_calculator_online_iframe"></iframe></div>';
}

add_shortcode( 'ci_percentage_calculator_online', 'display_ci_percentage_calculator_online' );