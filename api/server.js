var express = require('express');
var app = express();
var dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
app.get('/',function(req,res){
    return res.send({messenger: 'Hỗ trợ du lịch'})
});
//import user route
const userRoutes = require('./src/routes/user_route');

//create user
app.use('/api/v1/user', userRoutes); 
app.listen(port,function(){
    console.log(`Node server running @ http://localhost:${port}`)
});
module.exports = app;