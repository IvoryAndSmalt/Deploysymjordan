<?php
// $array = array("espece" => "", "date" => "", "especeError" => "", "dateError" => "", "isSuccess" => false);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $array["espece"] = $_POST['espece'];
    $array["date"] = $_POST["date"];
    // $array["sujet"] = $_POST['sujet'];
    // $array["message"] = $_POST["message"];
    $array["isSuccess"] = true;
    if (empty($array["espece"])) {
        $array["especeError"] = "Ce champ est requis";
        $array["isSuccess"] = false;
    }
    if (empty($array["date"])) {
        $array["dateError"] = "Email non valide";
        $array["isSuccess"] = false;
    }
    // if ($array["isSuccess"]) {
    //     $headers = "From: " . $array["email"] . "\r\n";
    //     $headers .= "Reply-To: " . $array["email"] . "\r\n";
    //     $headers .= " MIME-Version: 1.0 " . "\r\n";
    //     $headers .= " Content-type:text/html;charset=\"UTF-8\" " . "\r\n";
    //     mail($to, $array["sujet"], $array["message"], $headers);
    // }
    echo json_encode($array);
}
