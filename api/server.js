var express = require('express');
var app = express();
var dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
// đây là localhost:3000/
app.get('/',function(req,res){
    return res.send({messenger: 'Hỗ trợ du lịch'})
});

//import route
const userRoutes = require('./src/routes/user_route');
const adminRoutes = require('./src/routes/admin_route');


//create user
app.use('/api/v1/user', userRoutes); 
// route cho admin
app.use('/api/v1/admin', adminRoutes); 
app.listen(port,function(){
    console.log(`Node server running @ http://localhost:${port}`)
});
module.exports = app;