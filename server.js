var express = require('express');
var app = express();

app.use(express.static(__dirname));

var messages = [
    {name:"Tim", message:"Hi"},
    {name:"Bob", message:"Hello"}
]

app.get('/messages', (req, res) => {
    res.send(messages)
});

var server = app.listen(5001, () => {
    console.log('server is listening on port ', server.address().port)
});
