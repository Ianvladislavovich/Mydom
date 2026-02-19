<?php
//...previous code...
if (empty($error)) {
    // Insert message into the database
    $insert = "INSERT INTO contact_form (name, email, phone, subject, message) 
                VALUES ('$name', '$email', '$phone', '$subject', '$message')";
    mysqli_query($conn, $insert);
    $_SESSION['success_msg'] = 'Message sent successfully';

    // Send email notification
    $to = 'janvladislavovich@gmail.com';
    $subject = 'New Contact Request';
    $message_body = "You have received a new contact request from $name ($email). 
    Phone number: $phone. Subject: $subject. Message: $message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $mail_status = mail($to, $subject, $message_body, $headers);
    if ($mail_status) {
        echo "Email sent successfully.";
    } else {
        echo "Error: Unable to send email.";
    }

    header('location: contact.php');
    exit();
}
//...previous code...
?>
