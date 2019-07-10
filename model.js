var mongoose = require('mongoose');
var descriptionSchema = mongoose.Schema({
    engine: String,
    gear: String,
    tires: String,
    interior: String
})
// Setup schema
var carSchema = mongoose.Schema({
    model: String,
    make: String,
    year: String,
    color: String,
    mileage: Number,
    image: [String],
    price: String,
    details: [descriptionSchema]
});

// Export Contact model
var Car = module.exports = mongoose.model('Car', carSchema);

module.exports.get = function (callback, limit) {
    Car.find(callback).limit(limit);
}