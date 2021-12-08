

exports.isAdmin = (req, res, next) =>{
    if(req.role == 1){
        next();
    }else{
        res.status(403).json({status: false, message: "Bạn không có quyền Admin"});
        return;
    }
}
exports.isUser = (req, res, next) =>{
    if(req.role == 0){
        next();
    }else{
        res.status(403).json({status: false, message: "Bạn không có quyền cho dịch vụ này"});
        return;
    }
}
exports.isHotel = (req, res, next) =>{
    if(req.role == 2){
        next();
    }else{
        res.status(403).json({status: false, message: "Bạn không có quyền cho dịch vụ này"});
        return;
    }
}
exports.isRestaurant = (req, res, next) =>{
    if(req.role == 3){
        next();
    }else{
        res.status(403).json({status: false, message: "Bạn không có quyền cho dịch vụ này"});
        return;
    }
}