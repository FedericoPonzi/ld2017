<?php
/** Config: **/
if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])){
	die("Riempi tutti i campi del form.");
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "[ld2017] Nuovo contatto tramite form";
$to = 'serena.sensini@gmail.com';

$message = 'Ciao, qualcuno ha usato il form di contatti sulla pagina del ld2017 per inviare questa email.
Nome : '.$name.'
Email : '.$email.'

Messaggio : '.$message;

$headers = "From: ".$name." <".$email.">\r\n"
."Reply-To: ".$email."\r\n";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
	$mail = mail($to, $subject, $message, $headers);
	if($mail){
		echo '<div class="alert alert-success" role="alert"> <strong>Fantastico!</strong> Abbiamo ricevuto il tuo messaggio, ti risponderemo il prima possibile.</div>';
	}else{
		echo '<div class="alert alert-danger" role="alert"><strong>Qualcosa è andata storta.</strong> Riprova più tardi o se persiste contatta '. $to .'</div>';
	}
}else{
	echo '<div class="alert alert-warning" role="alert">  <strong>Email non valida:</strong> Inserisci una email valida.</div>';
}
?>
