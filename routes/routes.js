const express=require('express');
const router=express.Router();
const artist=require('../model/user')
const {addArtist,getArtist,getAll}=require('../controller/controller')

/*router.get('/',(req,res)=>{
    res.send("Hello");
})*/
router.post('/newArtist',addArtist)
router.route('/getArtist/:name').get(getArtist);
router.route('/getAll').get(getAll);


module.exports=router;