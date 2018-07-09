<?php
    include 'DBHelper.php';
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $shopid = isset($_GET["shopid"]) ? $_GET["shopid"] : '';
    
    $sql = "select * from listpage where idx='$shopid'";

    $result = query_oop($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>