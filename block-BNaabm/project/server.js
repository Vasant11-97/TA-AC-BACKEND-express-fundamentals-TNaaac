var express = require('express');

var app = express();

function malware(req, res, next){
    console.log(req.method, req. url);
    next();
}

app.use(malware);

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(4000, () => {
    console.log('Server is listening on port 4k)')
})