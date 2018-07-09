<?php
    include 'DBHelper.php';
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $username = isset($_POST["username"]) ? $_POST["username"] : '';
    $password = isset($_POST["password"]) ? $_POST["password"] : '';
    $sql1 = "select * from register where username='$username'";
    $result = query_oop($sql1);
    if(count($result)>0){
        echo "{username:'用户名',status:'true'}";
    }else{
         $sql = "insert into register (username,password) values ('$username','$password')";
         excute($sql);
        echo  "{username:'用户名',status:'false'}";
    }
   

?>

