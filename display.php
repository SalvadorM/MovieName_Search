<?php
    include('inc/header.php');
    include('inc/return.php');

    $firstN = $_GET["fname"];
    $lastN = $_GET["lname"];

?>

<div class="display-name">
    <?php
        echo "<h1 class=\"heading\" >Films that have the name: <span id=\"f_name\">$firstN</span></h1>";
        echo "<div class=\"data\"> </div>"; 
        echo "<br>";
        echo "<h1 class=\"heading\" >Films that have your last name: <span id=\"l_name\">$lastN</span></h1>";
        echo "<div class=\"data2\"> </div>"; 
    ?>
</div>