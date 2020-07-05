const {Router} = require('express');
const fakeDat = require('../testData/testData.json')

const router = Router();

router.get('/info',async (req,res)=>{
    try{
        res.status(200).json(fakeDat)
    }
    catch(error){
        res.status(500).json({message:'Server error ', error});
    }
});

module.exports = router;