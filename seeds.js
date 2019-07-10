var mongoose    = require("mongoose"),
    Car         = require("./model");
    
var data = [
       {
          model: "M5",
          make: "BMW",
          year: "2017",
          color: "White",
          mileage: 30500,
          image: [
              "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              ],
          price: "35,000 EUR",
          details: [
                {
                    engine: "4.4 L V8",
                    gear: "automatic",
                    tires: "19",
                    interior: "leather"
                    
                }
              ]
      },
      {
          model: "Sentra",
          make: "Nissan",
          year: "2017",
          color: "Black",
          mileage: 103500,
          image: [
              "https://images.unsplash.com/photo-1532245128003-3db26c775465?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              ],
          price: "3,000 EUR",
          details: [
                {
                    engine: "2.0 L V4",
                    gear: "automatic",
                    tires: "16",
                    interior: "leather"
                    
                },
              ]
      },
            {
          model: "Rouge",
          make: "Nissan",
          year: "2017",
          color: "Silver",
          mileage: 10500,
          image: [
              "https://images.unsplash.com/photo-1534652524199-47b0258015ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              ],
          price: "10,000 EUR",
          details: [
                {
                    engine: "2.5 L V4",
                    gear: "automatic",
                    tires: "17",
                    interior: "leather"
                    
                },
              ]
      },
      {
          model: "458",
          make: "Ferarri",
          year: "2017",
          color: "Red",
          mileage: 10500,
          image: [
              "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              ],
          price: "43,000 EUR",
          details: [
                {
                    engine: "4.0 L V8",
                    gear: "automatic",
                    tires: "21",
                    interior: "leather"
                    
                },
              ]
      },
       {
          model: "S 500 AMG",
          make: "Mercedes-Benz",
          year: "2017",
          color: "Blue",
          mileage: 100500,
          image: [
              "https://images.unsplash.com/photo-1549262838-221ed902d506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              ],
          price: "243,000 EUR",
          details: [
                {
                    engine: "6.3 L V12",
                    gear: "automatic",
                    tires: "21",
                    interior: "leather"
                    
                },
              ]
      }
    ];
    
    
function seedDB() {
    //  Remove all campgrounds
    Car.remove({}, function(err) {
       if(err) {
            console.log(err);
        } else {
console.log("All cars have been removed!");
   }

 data.forEach(function(seed) {
     Car.create(seed, function(err, car) {
         if(err){
             console.log(err);
         } else {
             console.log("New car added");
             car.save();
         }
     });
 });   

  });    
}

module.exports = seedDB;