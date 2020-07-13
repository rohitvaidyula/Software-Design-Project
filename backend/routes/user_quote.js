const router = require('express').Router();
let Quote = require('../database/quoteForm_details');

router.route('/').get((req,res) => {
    Quote.find()
    .then(quotes => res.json(quotes))
    .catch (err => res.status(400).json ("Error: " + err));
});

router.route('/:id').get((req,res) => {
    Quote.findById(req.params.id)
    .then(quotes => res.json(quotes))
    .catch(err => status(400).json ('Error: ' +err));
});



router.route('/add').post((req,res) => {
    const username = req.body.username;
    
    const gallon = req.body.gallon;
    const priceperg = req.body.priceperg;
    const price = req.body.price;
    const quoteID = req.body.quoteID;
    const InState = req.body.InState;
    const date = req.body.date;



    const newQuote = new Quote({
        username,
       
        gallon,
        priceperg,
        price,
        quoteID,
        InState,
        date
    })

    newQuote.save()
    .then(() => res.json('Quote added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;