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

module.exports = Place;