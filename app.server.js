const express = require('express');

const app = express();
const path = require('path');
var router = express.Router();


// -------------------
app.use(express.static('public'));


app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3000);

console.log('listening on port 3000');

