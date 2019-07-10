let express      = require("express"),
    app          = express(),
    apiRoutes    = require("./routes"),
    mongoose     = require("mongoose"),
    bodyParser   = require("body-parser"),
    cors         = require('cors'),
    seedDB       = require("./seeds");

mongoose.connect("mongodb://localhost/cars_hub", { useNewUrlParser: true }); 
var db = mongoose.connection;

// seedDB();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRoutes);  
app.get("/products", function(req, res) {
    res.send("RESTful APIs");
})  ;
  



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("RESTful APIs app is listening!!!");
});

// Setting Access-Control-Allow-Origin (CORS) without using "npm install cors --save" package
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/