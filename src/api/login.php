<?php
    include 'DBHelper.php';
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $username = isset($_POST["username"]) ? $_POST["username"] : '';
    $password = isset($_POST["password"]) ? $_POST["password"] : '';
    // $sql = "select * from register where username='$username'";    
    $sql = "select * from register where username ='$username' and password ='$password'";
    $result = query_oop($sql);
    
    // echo json_encode($result, JSON_UNESCAPED_UNICODE);
    if(count($result)>0){
            echo "{status:'true'}";
        }else{
            echo "{status:'false'}"; 
        }
?>