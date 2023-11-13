const mongoose=require('mongoose');
const artist=new mongoose.Schema({
    artistName:{type:String,required:true},
    artistPassword:{type:String,required:false},
    artistAge:Number,
    artistGenre:{type:[String],required:true},
    artistBio:{type:String,required:false},
    artistContact:{type:Object,required:false},
    artistSingles:{type:[Object]},
    artistEPs:{type:[Object]},
    artistAlbums:{type:[Object]}
})

module.exports=mongoose.model('artist',artist);

