var express = require('express');
var app = express();
var bodyPraser = require('body-parser');
var dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

app.use(bodyPraser.json());

app.use(bodyPraser.urlencoded({
    extended: true
}));
app.get('/',function(req,res){
    return res.send({messenger: 'Hỗ trợ du lịch'})
});
//import user
const userRoutes = require('./src/routes/user_route');

//create user
app.use('/api/v1/user', userRoutes); 
app.listen(port,function(){
    console.log(`Node server running @ http://localhost:${port}`)
});
module.exports = app;