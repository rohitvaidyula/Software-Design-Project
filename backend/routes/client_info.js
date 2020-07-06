const express = require("express");
const router = express.Router();

//let client_info = require("../info_list");

var client_info = [
    {id: 1, firstname: "Saadmani", lastname: "Iqbal", Address1: "1234 Cullen Blvd", Address2:"", City: "Houston",State:"TX",Zipcode:77204, Date:"",Price:"",Gallon:""}
];


router.get("/", async (req, res) => {
    try {

        let client = client_info.find(client => client.firstname);
        res.status(200).json({
            first_name: client.firstname,
            last_name: client.lastname,
            address: client.Address1,
            state: client.State,
            zip: client.Zipcode
            
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.post("/form_submit", function(req, res) {
    let client = client_info.find(client => client.firstname);
    var client_form = {
        
        "Name": client.firstname + " " + client.lastname,
        "Date": req.body.del_Date,
        "Gallon": req.body.Gallon
    }
    client_info.push(client_form)
    console.log(client_info);
    done();
    
})

  module.exports = router;
  //this is to show the information of the clients
  //pick and choose to show only the 