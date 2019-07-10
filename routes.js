let router = require("express").Router(); 

router.get("/", function (req, res) {
    res.json({
        name: "Cars Project",
        status: "Success"
    })
});

// Import contact controller
var carController = require('./controller');
// Contact routes
router.route('/cars')
    .get(carController.index)
    .post(carController.new);

router.route('/cars/:car_id')
    .get(carController.view)
    .patch(carController.update)
    .put(carController.update)
    .delete(carController.delete);

// Export API routes
module.exports = router;

