<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

$testData = [
    "message" => "Hello from PHP",
    "data" => [
        "item1" => "value1",
        "item2" => "value2",
        "item3" => "value3"
    ],
    "status" => "success"
];


echo json_encode($testData);
?>
