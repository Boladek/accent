<?php 
    $data = 'a:5:{i:0;a:3:{s:4:"name";s:11:"Dave Fuller";s:3:"dob";s:10:"04-05-1977";s:5:"stats";a:4:{s:10:"technology";i:492;s:8:"strength";i:10;s:14:"special_powers";i:16;s:7:"loyalty";i:22;}}i:1;a:3:{s:4:"name";s:13:"Nick Thompson";s:3:"dob";s:10:"17-07-1981";s:5:"stats";a:4:{s:10:"technology";i:1042;s:8:"strength";i:3;s:14:"special_powers";i:24;s:7:"loyalty";i:7;}}i:2;a:3:{s:4:"name";s:14:"Brenton Taylor";s:3:"dob";s:10:"30-03-1976";s:5:"stats";a:4:{s:10:"technology";i:-50;s:8:"strength";i:10;s:14:"special_powers";i:42;s:7:"loyalty";i:2;}}i:3;a:3:{s:4:"name";s:13:"Craig Vincent";s:3:"dob";s:10:"12-08-1985";s:5:"stats";a:4:{s:10:"technology";i:950;s:8:"strength";i:5;s:14:"special_powers";i:18;s:7:"loyalty";i:12;}}i:4;a:3:{s:4:"name";s:12:"Geoff Somner";s:3:"dob";s:10:"24-08-1965";s:5:"stats";a:4:{s:10:"technology";i:-8;s:8:"strength";i:12;s:14:"special_powers";i:20;s:7:"loyalty";i:31;}}}';

    $data = unserialize($data);
    $data = json_encode($data);

    $json = json_encode(array('data' => $data));
    
    if (file_put_contents('/Users/boladek/Desktop/workspace/accent/app/src/data.json', $data)) {
        echo "success";
    }
    else {
        echo "fail";
    };
?>