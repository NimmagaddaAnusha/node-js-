var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

var data = {
   "studdetails" : [{
      "name" : "Anu",
      "subject" : ["M3","Signals&systems"],
      "id": 3004
   },
    {
      "name" : "Ram",
      "subject" : ["English","DataCommunications"],
      "id": 3005
   },
   {
      "name" : "Ravi",
      "subject" : ["DigitalSignals","C++"],
      "id": 3006
   }]
};

res.json(data);

});

module.exports = router;