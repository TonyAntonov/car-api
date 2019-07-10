// Import contact model
var Car = require('./model');

// Handle index actions
exports.index = function (req, res) {
    Car.get(function (err, cars) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
        res.json({
            status: "success",
            message: "Cars retrieved successfully",
            data: cars
        });
      }
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var car = new Car();
    car.model = req.body.model ? req.body.model : car.model;
    car.make = req.body.make;
    car.year = req.body.year;
    car.color = req.body.color;
    car.image = [];
    car.image.push(req.body.image);
    car.price = req.body.price;
    car.details = [{}];
    car.details[0].engine = req.body.details[0].engine;
    car.details[0].interior = req.body.details[0].interior;
    car.details[0].gear = req.body.details[0].gear;
    car.details[0].tires = req.body.details[0].tires;
    console.log(req.body.details);
// save the car and check for errors
    car.save(function (err) {
         if (err) {
             res.json(err);
           } else {
              res.json({
            message: 'New car created!',
            data:[car] 
        }); 
           }

    });
};

// Handle view car info
exports.view = function (req, res) {
    Car.findById(req.params.car_id, function (err, car) {
        if (err) {
            res.send(err);
        } else {
            console.log(req.params.car_id);
           res.json({
            message: 'Car details loading..',
            data: car
        }); 
      }
        
    });
};

// Handle update car info
exports.update = function (req, res) {

Car.findById(req.params.car_id, function (err, car) {
        if (err) {
            res.send(err);
        } 
    car.model = req.body.model ? req.body.model : car.model;
    car.make = req.body.make;
    car.year = req.body.year;
    car.color = req.body.color;
    car.image.push(req.body.image);
    car.price = req.body.price;
    car.details = [{}];
    car.details[0].engine = req.body.details[0].engine;
    car.details[0].interior = req.body.details[0].interior;
    car.details[0].gear = req.body.details[0].gear;
    car.details[0].tires = req.body.details[0].tires;

// save the car and check for errors
        car.save(function (err) {
            if (err) {
                res.json(err);
            } else {
                res.json({
                message: 'Car Info updated',
                data: car
            });
            }
            
        });
    });
};

// Handle delete car
exports.delete = function (req, res) {
    Car.remove({
        _id: req.params.car_id
    }, function (err, car) {
        if (err) {
             res.send(err);
        } else {
            res.json({
            status: "success",
            message: 'Car deleted'
        });
        }


    });
};