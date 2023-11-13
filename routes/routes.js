const express=require('express');
const router=express.Router();
const artist=require('../model/user')
const {addArtist,getArtist}=require('../controller/controller')

/*router.get('/',(req,res)=>{
    res.send("Hello");
})*/
router.post('/newArtist',addArtist)
router.route('/getArtist/:name').get(getArtist);


module.exports=router;