import {FancyMazeBuilder} from "./MazeGen/fancy-maze-builder.js";

////////////////////////////////////////////////////////////////////////////////////
//import { schema } from './node_modules/@dicebear/open-peeps/lib/schema.js';
/*
const options = {
  ...schema.properties,
};
*/
///////////////////////////////////////////////////////////////////////////////////////////

//console.log(options);


$.get("https://api.dicebear.com/7.x/open-peeps/svg?seed=John&size=300&flip=true", (d)=> {
    
    $("#currChar").prepend(d.firstChild);

})


var skinColorArr = ['694d3d', 'ae5d29', 'd08b5b', 'ffdbb4'];

var accessoriesArr = [null, 'eyepatch', 'glasses', 'glasses2', 'glasses3', 'glasses4', 'glasses5', 'sunglasses', 'sunglasses2'];
var clothingColorsArr = [null, '8fa7df', '9ddadb', '78e185', 'e279c7', 'e78276', 'fdea6b', 'ffcf77'];
var facesArr = 
    [ 
        null, 'angryWithFang', 'awe', 'blank', 'calm', 'cheeky','concerned', 'concernedFear', 'contempt', 
        'cute', 'cyclops', 'driven', 'eatingHappy', 'explaining', 'eyesClosed', 'fear', 'hectic', 'lovingGrin1',
        'lovingGrin2', 'monster', 'old', 'rage','serious','smile','smileBig','smileLOL','smileTeethGap', 
        'solemn', 'suspicious', 'tired', 'veryAngry'
    ];
var facialHairsArr = 
    [ 
        null, 'chin', 'full', 'full2', 'full3', 'full4','goatee1', 'goatee2', 'moustache1', 'moustache2',
        'moustache3', 'moustache4', 'moustache5', 'moustache7', 'moustache8', 'moustache9', 
    ];
    
    var headsArr =
    [ 
        null, 'afro', 'bangs', 'bangs2', 'bantuKnots', 'bear','bun', 'bun2', 'buns', 'cornrows', 'cornrows2', 'dreads1', 'dreads2', 
        'flatTop', 'flatTopLong', 'grayMedium', 'grayShort', 'hatBeanie', 'hatHip', 'hijab', 'long','longAfro','longBangs',
        'longCurly','medium1','medium2', 'medium3', 'mediumBangs', 'mediumBangs2', 'mediumBangs3', 'mediumStraight', 'mohawk',
        'noHair1', 'noHair3', 'pomp', 'shaved1', 'shaved2', 'shaved3', 'short1', 'short2', 'short3', 'short4',
        'short5', 'turban', 'twists'
    ];

const currentCharacterOptions = {
    seed: "John",
    size: '300',
    skinColor: 'edb98a',
    accessories: 'eyepatch',
    accessoriesProbability: `100`,
    clothingColor: '8fa7df',
    head: 'hatBeanie',
    face: 'driven',
    facialHair: null,
    facialHairrobability: null,
}

function generateApiURL() {
    var currentApiUrl = `https://api.dicebear.com/7.x/open-peeps/svg?`
    (currentCharacterOptions.accessories != null)
    return currentApiUrl;
}

function displayAccessoryOptions() {
        for(var i= 0; i<$("#accessoryContainer").get(0).children.length; i++) {

            var currentAccessory = $("#accessoryContainer").get(0).children[i].id
            var currentAccessoryString;
            currentAccessoryString =  `accessories=${currentAccessory}&accessoriesProbability=100`;
            $(`#${$("#accessoryContainer").get(0).children[i].id}`).css("background-image", `url("https://api.dicebear.com/7.x/open-peeps/svg?${currentAccessoryString}")`)
        
        }     
}    
    
function generateCharOptions() {
    displayAccessoryOptions();
}
    
generateCharOptions();
    //var seed = getSeed();
    //var size = getSize();
    //var skinColor = getSkinColor();
    //var accessories = getAccessories();
    //var accessoriesProbability= getAccessoriesProbability();
    //var clothingColor = getClothingColor();
    //var head = getHead();
    //var face = getFace();
    //var facialHair = getFacialHair();
    //var facialHairProbability = getfacialHairProbability();
    
/*

displayAccessoryOptions()
*/





var Maze, MazeGame;

  const makeMaze = (id, width, height, speech = false) => {
    Maze = new FancyMazeBuilder(width, height);
    Maze.display(id);
    MazeGame = new Mazing("maze");
    if(speech) {
      MazeGame.enableSpeech();
    }
  };

  makeMaze("maze_container", 12, 12);
