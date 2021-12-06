const PlaceModel = require('../models/place_model.js');
const ImageModel = require('../models/image_model.js');


exports.getAllPlaceAndImages = (req, res) => {
    PlaceModel.getAllPlaces((err, places) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        } else {
            var data = []
            var flag =0;
            places.forEach(place => {
                var images = [];
                ImageModel.getAllImageByPlaceID(place.placeID, (err, imgs) => {
                    flag++;
                    if (err) {
                        res.status(500).json({ status: false, message: "Thất bại" })
                        return;
                    };
                    for (var i = 0; i < imgs.length; i++) {
                        images.push({
                            id: imgs[i].id,
                            image: process.env.DOMAIN + '/public/images/' + imgs[i].image
                        })
                    }
                    data.push({
                        placeID: place.placeID,
                        placeName: place.placeName,
                        description: place.description,
                        tips: place.tips,
                        city: place.city,
                        images: images
                    })
       
                    if(flag == places.length){
                        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: data })
                    }
                })

            })
            
        }
    });
}