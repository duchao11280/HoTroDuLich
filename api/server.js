var express = require('express');
var app = express();
var dotenv = require('dotenv');
var path = require('path');

dotenv.config();
const port = process.env.PORT || 3000;
global.__basedir = __dirname;
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
// đây là localhost:3000/
app.get('/', function (req, res) {
    return res.send({ messenger: 'Hỗ trợ du lịch' })
});
app.get('/public/images/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, './public/image', req.params.filename))
})
//import route
const userRoutes = require('./src/routes/user_route');
const adminRoutes = require('./src/routes/admin_route');
const placeRoutes = require('./src/routes/place_route');
const hotelRoutes = require('./src/routes/hotel_route')
const restaurantRoutes = require('./src/routes/restaurant_route')
const roomRoutes = require('./src/routes/room_route');
const tableRoutes = require('./src/routes/tableservices_route');
const notificationRoutes = require('./src/routes/notification_route')
const commentRoutes = require('./src/routes/comment_route')
//create user
app.use('/api/v1/user', userRoutes);
// route cho place
app.use('/api/v1/place', placeRoutes);
// route cho room
app.use('/api/v1/room/', roomRoutes);
// route cho tableservices
app.use('/api/v1/tableservices/', tableRoutes);
// route cho admin
app.use('/api/v1/admin', adminRoutes);
// route cho services hotel
app.use('/api/v1/hotel', hotelRoutes);
//route cho services restaurant
app.use('/api/v1/restaurant', restaurantRoutes)
app.use('/api/v1/notification', notificationRoutes)
app.use('/api/v1/comment', commentRoutes)
app.listen(port, function () {
    console.log(`Node server running @ http://localhost:${port}`)
});

module.exports = app;