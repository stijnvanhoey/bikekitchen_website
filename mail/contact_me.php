<?php

if (empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    echo "No arguments Provided!";
    return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

include "../vendor/autoload.php";
include "credentials.php";

$mail = new PHPMailer;

$mail->isSMTP();
$mail->Host = Credentials::HOST;
$mail->SMTPAuth = true;
$mail->Username = Credentials::USERNAME;
$mail->Password = Credentials::PASSWORD;
$mail->SMTPSecure = Credentials::SECURE;
$mail->Port = Credentials::PORT;

$mail->setFrom('info@fietskeuken.org', 'Fietskeuken');
$mail->addAddress($email_address, $name);     // Add a recipient
$mail->addReplyTo($email_address, $name);

$mail->Subject = 'Website Contact Form: ' . $name;

$body = 'You have received a new message from the website contact form.

Here are the details:

Name: ' . $name . '

Email: ' . $email_address . '

Phone: ' . $phone . '
    
Message: ' . $message;

$mail->Body = nl2br($body);
$mail->AltBody = $body;

if (!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
