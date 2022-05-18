#ipify API
Get your public IP address
Usage:
website: https://www.ipify.org

JSON format -> https://api.ipify.org?format=json

Install--> npm install ipify

Usage patterns:

PHP:

 <?php
    $ip = file_get_contents('https://api.ipify.org');
    echo "My public IP address is: " . $ip;
?>

NodeJS

var http = require('http');

http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
resp.on('data', function(ip) {
console.log("My public IP address is: " + ip);
});
});

Javascript

<script type="application/javascript">
  function getIP(json) {
    document.write("My public IP address is: ", json.ip);
  }
</script>

<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>

++++++++++++++++++++++++++++++++++++++++++++++++++

1. What is an API?
   API is a contract. A promise to perform described services when asked in specific ways.

2. How is it used?
   According to the rules specified in the contract. The whole point of an API is to define how it's used.

3. When and where is it used?
   It's used when 2 or more separate systems need to work together to achieve something they can't do alone.
