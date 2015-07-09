<?php
$to = "leighton.james@devinit.org";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = "contact@maschi.co.uk";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?> 
