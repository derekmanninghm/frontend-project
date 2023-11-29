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



var skinColorArr = ['694d3d', 'ae5d29', 'd08b5b', 'ffdbb4'];

var accessoriesArr = ['none', 'eyepatch', 'glasses', 'glasses2', 'glasses3', 'glasses4', 'glasses5', 'sunglasses', 'sunglasses2'];
var clothingColorsArr = ['8fa7df', '9ddadb', '78e185', 'e279c7', 'e78276', 'fdea6b', 'ffcf77'];
var facesArr = 
    [ 
        'angryWithFang', 'awe', 'blank', 'calm', 'cheeky','concerned', 'concernedFear', 'contempt', 
        'cute', 'cyclops', 'driven', 'eatingHappy', 'explaining', 'eyesClosed', 'fear', 'hectic', 'lovingGrin1',
        'lovingGrin2', 'monster', 'old', 'rage','serious','smile','smileBig','smileLOL','smileTeethGap', 
        'solemn', 'suspicious', 'tired', 'veryAngry'
    ];
var facialHairsArr = 
    [ 
        'none', 'chin', 'full', 'full2', 'full3', 'full4','goatee1', 'goatee2', 'moustache1', 'moustache2',
        'moustache3', 'moustache4', 'moustache5', 'moustache7', 'moustache8', 'moustache9', 
    ];
    
    var headsArr =
    [ 
        'afro', 'bangs', 'bangs2', 'bantuKnots', 'bear','bun', 'bun2', 'buns', 'cornrows', 'cornrows2', 'dreads1', 'dreads2', 
        'flatTop', 'flatTopLong', 'grayMedium', 'grayShort', 'hatBeanie', 'hatHip', 'hijab', 'long','longAfro','longBangs',
        'longCurly','medium1','medium2', 'medium3', 'mediumBangs', 'mediumBangs2', 'mediumBangs3', 'mediumStraight', 'mohawk',
        'noHair1', 'noHair3', 'pomp', 'shaved1', 'shaved2', 'shaved3', 'short1', 'short2', 'short3', 'short4',
        'short5', 'turban', 'twists'
    ];

const currentCharacterOptions = {
    seed: "John",
    size: '300',
    skinColor: 'none',
    accessories: accessoriesArr,
    accessoriesProbability: `85`,
    clothingColor: '8fa7df',
    head: 'hatBeanie',
    face: 'suspicious',
    facialHair: facialHairsArr,
    facialHairProbability: '85',
}

$("#randomize").on("click", (e)=> {
    console.log(currentCharacterOptions)
    generateCurrCharIcon();
})


function generateCurrCharIcon() {
    $("#currCharIcon").empty();
    //note - to incorporate more random features
    var apiURL = `https://api.dicebear.com/7.x/open-peeps/svg?`;
    apiURL += `seed=${currentCharacterOptions.seed}`
    apiURL += `&size=${currentCharacterOptions.size}`
    if(currentCharacterOptions.skinColor !== 'none') apiURL += `&skinColor=${currentCharacterOptions.skinColor}`;
    
    if(currentCharacterOptions.accessories !== 'none') {
        if(currentCharacterOptions.accessories == accessoriesArr) {
            apiURL += `&accessories=${currentCharacterOptions.accessories[Math.floor(Math.random() * (7 - 1) + 1)]}`;
            apiURL += `&accessoriesProbability=${currentCharacterOptions.accessoriesProbability}`;
        } else {
            apiURL += `&accessories=${currentCharacterOptions.accessories}`;
            apiURL += `&accessoriesProbability=100`;
        }
    }
    
    if(currentCharacterOptions.clothingColor !== 'none')    apiURL += `&clothingColor=${currentCharacterOptions.clothingColor}`
    if(currentCharacterOptions.head !== 'none')apiURL += `&head=${currentCharacterOptions.head}`
    if(currentCharacterOptions.face !== 'none')apiURL += `&face=${currentCharacterOptions.face}`
    
    if(currentCharacterOptions.facialHair !== 'none') {
        if(currentCharacterOptions.facialHair == facialHairsArr) {
            apiURL += `&facialHair=${currentCharacterOptions.facialHair[Math.floor(Math.random() * 15)]}`;
            apiURL += `&facialHairProbability=${currentCharacterOptions.facialHairProbability}`;
        } else {
            apiURL += `&facialHair=${currentCharacterOptions.facialHair}`;
            apiURL += `&facialHairProbability=100`;
        }
    }

    console.log(apiURL)

    $.get(`${apiURL+"&flip=true"}`, (d)=> {
    
        $("#currCharIcon").prepend(d.firstChild);

    })
}

generateCurrCharIcon()

function generateFaceOptions() {
    for(var i = 0; i < facesArr.length; i++) {
        $("#faceContainer").append($("<button>").attr("id", facesArr[i]).attr("class", "iconOption").text(facesArr[i]));
        
        $(`#${facesArr[i]}`).on("click", (e)=> {
            currentCharacterOptions.face = (e.target.id)
            generateCurrCharIcon();
        })
    }
}

function generateFacialHairOptions() {
    for(var i = 0; i < facialHairsArr.length; i++) {
        $("#faceContainer").append($("<button>").attr("id", facialHairsArr[i]).attr("class", "iconOption").text(facialHairsArr[i]));
        
        $(`#${facialHairsArr[i]}`).on("click", (e)=> {
            currentCharacterOptions.facialHair = (e.target.id);
            currentCharacterOptions.facialHairProbability = '100';
            generateCurrCharIcon();
        })
    }
}

function generateHeadOptions() {
    for(var i = 0; i < headsArr.length; i++) {
        $("#headContainer").append($("<button>").attr("id", headsArr[i]).attr("class", "iconOption").text(headsArr[i]));
        
        $(`#${headsArr[i]}`).on("click", (e)=> {
            currentCharacterOptions.head = (e.target.id)
            generateCurrCharIcon();
        })
    }
}

function generateSkinOptions() {
    for(var i = 0; i < skinColorArr.length; i++) {
        $("#skinColorContainer").append($("<button>").attr("id", skinColorArr[i]).attr("class", "iconOption").text(skinColorArr[i]));
        
        $(`#${skinColorArr[i]}`).on("click", (e)=> {
            currentCharacterOptions.skinColor = (e.target.id)
            generateCurrCharIcon();
        })
    }
}

function generateClothingOptions() {
    for(var i = 0; i < clothingColorsArr.length; i++) {
        $("#clothsContainer").append($("<button>").attr("id", clothingColorsArr[i]).attr("class", "iconOption").text(clothingColorsArr[i]));
        
        $(`#${clothingColorsArr[i]}`).on("click", (e)=> {
            currentCharacterOptions.clothingColor = (e.target.id)
            generateCurrCharIcon();
        })
    }
}

function generateAccessoryOptions() {
    for(var i = 0; i < accessoriesArr.length; i++) {
        $("#accessoryContainer").append($("<button>").attr("id", accessoriesArr[i]).attr("class", "iconOption").text(accessoriesArr[i]));
    
        $(`#${accessoriesArr[i]}`).on("click", (e)=> {
            currentCharacterOptions.accessories = (e.target.id)
            generateCurrCharIcon();
        })
    }
}

generateFacialHairOptions()
generateHeadOptions()
generateFaceOptions()
generateSkinOptions()
generateAccessoryOptions()
generateClothingOptions()


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
