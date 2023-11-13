const artist=require('../model/user');


const addArtist=async (req,res)=>{
    console.log(req.body)
    let genre=req.body.artistGenre
    //genre=genre.split(',')
    req.body.artistGenre=genre
    let dummy={
        artistName:'jovi',
        artistAge:39,
        artistGenre:['rap','mboko'],
        artistBio:"Jovi's debut album H.I.V (Humanity is Vanishing) was described by Kangsen Feka Wakai in Bakwa magazine as “the long awaited arrival of a self-assured emcee very conscious of his abilities, the vacuum in the genre, his audience’s expectations, and the right dose of hustle to assert his place.",
        artistContact:{
            mobile:'+237 678293456',
            email:'jovi@gmail.com',
            facebook:'facebook/jovi_official',
            twiter:'@vizu',
            instagram:'@jovilemonstre',
        },
        artistSingles:{
            title:"Kobra Since 1998",
            album:'2035',
            audio:{
                'boomplay':'https://boomplay/jovi/2035/Kobra Since 1998',
                'youtube':'https://youtube/jovi/2035/Kobra Since 1998',
                'spotify':'https://spotify/jovi/2035/Kobra Since 1998'
            },
            video:{
                'youtube':'none'
            }
        },
        artistEPs:[
            {
                'title':'Raps 2 Riches',
                'numberOfTracks':'5',
                'combinedStreams':'10K',
                'youtube':'https://youtube/jovi/Raps_2_Riches',
                'spotify':'https://spotify/jovi/Raps_2_Riches',
                'boomplay':'https://boomplay/jovi/Raps_2_Riches',
                'coverArt':'../artists/jovi/Raps_2_Riches.jpg'
            },
            {
            'title':'God Di Kam',
            'numberOfTracks':'13',
            'combinedStreams':'100K',
            'youtube':'https://youtube/jovi/God_di_kam',
            'spotify':'https://spotify/jovi/God_di_kam',
            'boomplay':'https://boomplay/jovi/God_di_kam',
            'coverArt':'../artists/jovi/God_di_kam.jpg'
            }
            
        ],
        artistAlbums:[
            {
                'title':'2035',
                'numberOfTracks':'13',
                'combinedStreams':'100K',
                'youtube':'https://youtube/jovi/2035',
                'spotify':'https://spotify/jovi/2035',
                'boomplay':'https://boomplay/jovi/2035',
                'coverArt':'../artists/jovi/2035.jpg'
            },
            {
            'title':'God Don Kam',
            'numberOfTracks':'13',
            'combinedStreams':'100K',
            'youtube':'https://youtube/jovi/God_don_kam',
            'spotify':'https://spotify/jovi/God_don_kam',
            'boomplay':'https://boomplay/jovi/God_don_kam',
            'coverArt':'../artists/jovi/God_don_kam.jpg'
            }
            
        ]
    }
    //console.log(dummy)
    //let newArtist=new artist(dummy);
    //newArtist.save().then(()=>{
        //res.send("Successfully created artist");
    //})
}
const getArtist=async (req,res)=>{
    console.log(req.params.name)
    let results=await artist.find({artistName:req.params.name})
    res.json(results)
}


exports.addArtist=addArtist;
exports.getArtist=getArtist;