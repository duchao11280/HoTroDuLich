const dbConn = require("../../config/db.config")

var Image = function(image){
    this.id = image.id,
    this.image = image.image,
    this.placeID = image.placeID

}

Image.getAllImageByPlaceID = (id, result) => {
    dbConn.query(`Select id,image From image Where placeID=${id}`,(err,res)=>{
        result(err,res);
    })
}
Image.insertImagePlace = (filename,id, result) => {
    dbConn.query('Insert into image(image,placeID) VALUES(?,?) ',[filename,id],(err,res)=>{
        result(err,res);
    })
}
module.exports = Image;