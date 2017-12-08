<?php
    /*
     * The important thing to realize is that the config file should be included in every
     * page of your project, or at least any page you want access to these settings.
     * This allows you to confidently use these settings throughout a project because
     * if something changes such as your database credentials, or a path to a specific resource,
     * you'll only need to update it here.
     */
    
    /*
     * Creating constants for heavily used paths makes things a lot easier.
     * ex. require_once LIBRARY_PATH . 'Paginator.php'
     */
    define("LIBRARY_PATH", realpath(dirname(__FILE__) . '/library'));
    define("TEMPLATES_PATH", realpath(dirname(__FILE__) . '/templates'));
    
    /*
     * Error reporting.
     */
    ini_set("error_reporting", "true");
    error_reporting(E_ALL | E_STRICT);
?>