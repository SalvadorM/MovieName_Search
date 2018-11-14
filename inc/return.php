<?php 

    if (basename($_SERVER['PHP_SELF']) == 'display.php'){
        echo "<a href=\"./\" class=\"btn\" >Try Again!</a>";
    } elseif (basename($_SERVER['PHP_SELF']) == 'index.php') {
        echo "<h1 class=\"tag\">using your name</h1>";
    }

?>




