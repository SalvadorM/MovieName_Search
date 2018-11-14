<?php
    include('inc/header.php');
    include('inc/return.php');
?>
       <div class="form-box">
        <form action="./display.php?cat=test">
            <table>
                <tr>
                    <th><label for="fname">First Name</label></th>
                    <th><input type="text" id="fname" name="fname"></th>
                </tr>
                <tr>
                    <th><label for="lname">Last Name</label></th>
                    <th><input type="text" id="lname" name="lname"></th>
                </tr>
            </table>

            <?php 
                $firstName = $_POST['fname'];
                $lastName = $_POST['lname'];
            ?>
            <input type="submit"/>
         </form>
       </div>
    </div>
</body>
</html>