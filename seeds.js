var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Muse about across the centuries, a mote of dust suspended in a sunbeam! As a patch of light, dispassionate extraterrestrial observer, cosmic fugue. The ash of stellar alchemy, worldlets billions upon billions Apollonius of Perga a very small stage in a vast cosmic arena the ash of stellar alchemy? Venture Flatland emerged into consciousness dream of the mind's eye encyclopaedia galactica paroxysm of global death hundreds of thousands billions upon billions science, vastness is bearable only through love hearts of the stars brain is the seed of intelligence, something incredible is waiting to be known? Rings of Uranus. Hydrogen atoms made in the interiors of collapsing stars kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "Muse about across the centuries, a mote of dust suspended in a sunbeam! As a patch of light, dispassionate extraterrestrial observer, cosmic fugue. The ash of stellar alchemy, worldlets billions upon billions Apollonius of Perga a very small stage in a vast cosmic arena the ash of stellar alchemy? Venture Flatland emerged into consciousness dream of the mind's eye encyclopaedia galactica paroxysm of global death hundreds of thousands billions upon billions science, vastness is bearable only through love hearts of the stars brain is the seed of intelligence, something incredible is waiting to be known? Rings of Uranus. Hydrogen atoms made in the interiors of collapsing stars kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Muse about across the centuries, a mote of dust suspended in a sunbeam! As a patch of light, dispassionate extraterrestrial observer, cosmic fugue. The ash of stellar alchemy, worldlets billions upon billions Apollonius of Perga a very small stage in a vast cosmic arena the ash of stellar alchemy? Venture Flatland emerged into consciousness dream of the mind's eye encyclopaedia galactica paroxysm of global death hundreds of thousands billions upon billions science, vastness is bearable only through love hearts of the stars brain is the seed of intelligence, something incredible is waiting to be known? Rings of Uranus. Hydrogen atoms made in the interiors of collapsing stars kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment._id)
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
