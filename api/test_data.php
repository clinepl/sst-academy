<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

// Your PHP code...


// Sample data array
$testData = [
    "message" => "Hello from PHP",
    "data" => [
        "item1" => "value1",
        "item2" => "value2",
        "item3" => "value3"
    ],
    "status" => "success"
];

// Encode data to JSON and output
echo json_encode($testData);
?>
