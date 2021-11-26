const dbConn = require("../../config/db.config")

var Place = function(place){
    this.placeID = place.placeID,
    this.placeName = place.placeName,
    this.description = place.description,
    this.tips = place.tips,
    this.city = place.city
}

Place.getAllPlaces = (result) => {
    dbConn.query('Select * From place',(err,res)=>{
        if(res){
            console.log("get all places success");

            result(null,res);
        }else{
            result(err,null);
        }
    })
}
Place.insertPlace = (placeName, description, tips, city ,result) => {
    dbConn.query('Insert into place(placeName, description, tips, city) VALUES(?,?,?,?) ',
        [placeName, description, tips, city],(err,res)=>{
        result(err,res);
    })
}
Place.updateInfoPlace = (id, placeName, description, tips, city , result) =>{
    dbConn.query(`Update place Set  placeName=?, description=?,  tips=?, city=? where placeID=${id}`,
        [placeName, description, tips, city], (err, res) => {
            result(err,res);
        }
    );
}
module.exports = Place;