const router = require('express').Router();
let User = require('../database/user_details');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch (err => res.status(400).json ("Error: " + err));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => status(400).json ('Error: ' +err));
});


router.route('/add').post((req,res) => {
    const username = req.body.username;
    const name = req.body.name;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;


    const newUser = new User({
        username,
        name,
        address1,
        address2,
        city,
        state,
        zip,
    })

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;