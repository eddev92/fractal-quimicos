<?php

$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$email = $request->email;
	$telefono = $request->telefono;
	$mensaje = $request->mensaje;
	$name = $request->name;
 
	$to_email = "fractal@fractalquimicos.com";
 
	$contact = "<p><strong>Nombres:</strong> $name</p>
				<p><strong>Email:</strong> $email</p>";
	$content = "<p><strong>Telefono:</strong> $telefono</p>
				<p><strong>Mensaje:</strong> $mensaje</p>";
 
	$email_subject = "Contacto desde la web .:: Fractal Quimicos ::.";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0". "\r\n";
	$headers .= "Content-Type: text/html". "\r\n";
	$headers .= "Content-Type: charset=UTF-8". "\r\n";
	$headers .= "From: informes@no-reply.com". "\r\n";
	$headers .= "Cc: informes@fractalquimicos.pe". "\r\n";
	$headers .= "Reply-To: fractal@fractalquimicos.com". "\r\n";
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	$response_array['from'] = $email;
	echo json_encode($response_array);
	echo json_encode($email);
	header($response_array);
	return $email;

?>
