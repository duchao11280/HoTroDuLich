const dbConn = require("../../config/db.config")

var Image = function(image){
    this.id = image.id,
    this.image = image.image,
    this.placeID = image.placeID

}

Image.getAllImageByPlaceID = (id, result) => {
    dbConn.query(`Select id,image From image Where placeID=${id}`,(err,res)=>{
        if(res){
            console.log("get all image success");

            result(null,res);
        }else{
            result(err ,null);
        }
    })
}

module.exports = Image;