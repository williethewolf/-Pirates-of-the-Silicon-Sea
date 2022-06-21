//APIsUrl
    //Random User API
rUApiUrl = "https://randomuser.me/api/"

//Name generator node import
//import {  uniqueNamesGenerator, adjectives, colors, animals, names, languages } from 'unique-names-generator';

//Classes
class Player {
    constructor(country,ship, score) {
      this.country = country;
      this.ship = ship;
      this.score = score;
    }
  }

class Pirate {
    constructor(portrait, name, health, attack,defense,warcry, nation, crew) {
      this.portrait = portrait;
      this.id = null;
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.warcry = warcry;
      this.nation = nation
      this.crew = crew;
    }
  }

  class Ship {
    constructor(faction, flag, name, cannons, health, speed, sails, damageAversion, crew, captain) {
      this.faction = faction;
      this.flag = flag;
      this.name = name;
      this.health = health;
      this.cannons = cannons;
      this.health = health;
      this.speed = speed
      this.sails = sails;
      this.damageAversion = damageAversion;
      this.crew = crew;
      this.captain = captain;
    }
  }

//Const
const countryList =["au", "br", "ca", "ch", "de", "dk", "es", "fi", "fr", "gb", "ie", "ir", "no", "nl", "nz", "tr", "us"]
const playerShipHTML = document.querySelector("#player-ship")
const enemyShipHTML = document.querySelector("#enemy-ship")
const playerCrewListHTML = document.querySelector("#friendly-crewlist")
const enemyCrewListHTML = document.querySelector("#enemy-crewlist")
const playerShipDeckHTML = document.querySelector("#player-shipdeck")
const enemyShipDeckHTML = document.querySelector("#enemy-shipdeck")
const playerCanonDeckHTML = document.querySelector("#player-cannon-deck")
const enemyCanonDeckHTML = document.querySelector("#enemy-cannon-deck")

const playerShipHealth = document.querySelector("#player-ship-health")
const playerSailHealth = document.querySelector("#player-ship-sails")
const enemyShipHealth = document.querySelector("#enemy-ship-health")
const enemySailHealth = document.querySelector("#enemy-ship-sails")

//Modals
const instructionsModal = document.querySelector("#instructions-modal")
const victoryModalHTML= document.querySelector("#victory-modal")

const vMCaptainHTML = document.querySelector("#vMCaptain")

//Game buttons
const playerButtons = document.querySelector("#playerbuttons")
const enemyButtons = document.querySelector("#enemybuttons")

//UI interactables
const restartButton = document.querySelector("#restart-button")
const instructionsButton = document.querySelector("#instructions-button")

//variables
let playerCrew= []
let enemyCrew = []
let playerCannons = []
let enemyCannons = []
let playerShips =[]
let enemyShips = []

//SFX
const cannonFX = new Audio('./assets/cannon.mp3');



//Functions

function CrewUp(number,country,faction) {
    //console.log(`${rUApiUrl}?nat=${country}&results=${number}`)
    fetch(`${rUApiUrl}?nat=${country}&results=${number}`)
    .then(response => response.json())
    .then(rawPirates => {console.log(rawPirates.results);pirateSquad(rawPirates.results,faction)})
    
}

function pirateCard (pirate,faction){
  pirate.id = generateUniqueID(pirate.name)
  let pirateCard = document.createElement("div")
  pirateCard.setAttribute("class","accordion-item")
  pirateCard.innerHTML = `
  <h2 class="accordion-header collapse show" id="${generateUniqueID(pirate.name)}">
  <div class="d-grid">                        
  <button class="btn btn-link text-decoration-none font-weight-bold link-dark "  data-bs-toggle="collapse" data-bs-target=" #photobutton${generateUniqueID(pirate.name)}, #collapse${generateUniqueID(pirate.name)}, #${generateUniqueID(pirate.name)}" aria-expanded="true" aria-controls="collapse1">
    <div class="container-fluid">
    <div class = "row align-items-center">
    <div class="col-2 col-s flag-box">
      <div class= "container d-flex text-center">
        <span class="fs-6 fw-light lh-1">${getFlagEmoji(pirate.nation)}</span>
      </div>
      </div>
      <div class="col-3 col-s big-box">
        <img src=${pirate.portrait} width="50" class="rounded-circle">
      </div>
    
    <div class="col-6 col-s">
    <div class="row">
      <div = class = "col mini-box">
        <span class="text-nowrap">${pirate.name}</span>
      </div>
      </div>
    
    <div class="row">
    <!-- <div = class = "col mini-box">
    <span class="text-success">V:${pirate.health}</span>
  </div>
  <div = class = "col mini-box">
    <span class="text-danger">B:${pirate.attack}</span>
  </div>
  <div class = "col mini-box">
    <span class="text-info">S:${pirate.defense}</span>
  </div> -->
    </div>
  </div>
  </div>
  </div>   
  <div class="text-end me-md-4 mb-2">
  <span class="fs-6 fw-light lh-1">${pirate.warcry}, ${pirate.nation}</span>
  <div>
  </button>
  </div>
  
</h2>
<div class="d-grid">
<button class="btn btn-link text-decoration-none font-weight-bold link-dark collapse" data-bs-toggle="collapse" data-bs-target="#photobutton${generateUniqueID(pirate.name)}, #collapse${generateUniqueID(pirate.name)}, #${generateUniqueID(pirate.name)}" aria-expanded="true" aria-controls="collapseOne" id="photobutton${generateUniqueID(pirate.name)}">
  <div class="container mx-auto">
  
      <img src=${pirate.portrait} width="150" class="rounded-circle">
    
 
</div>   
</button>
</div>
<div id="collapse${pirate.id}" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">

  <div class="text-center"> 
        <h3 class="mt-2">${pirate.name}</h3>
        <span class="mt-1 clearfix">${pirate.warcry} ${getFlagEmoji(pirate.nation)}</span>
        
        <div class="row mt-3 mb-3">
        
          <div class="col-md-4">
            <h5>Vigor</h5>
            <span class="text-success">${pirate.health}</span>
          </div>
          <div class="col-md-4">
          <h5>Bravado</h5>
            <span class="text-danger">${pirate.attack}</span>
          </div>
          <div class="col-md-4">
          <h5>Sealegs</h5>
            <span class="text-info">${pirate.defense}</span>
          </div>
        
        </div>
        <div class="d-none">
        <hr class="line">
        <div>
        <small class="mt-4">A random quote</small>
       
          <div class="afflictions-buttons mt-1"> 
          <span>Afflictions:</span>
           <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> 
           <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> 
           <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> 
           <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button>
           <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button>
          </div>
          
         <div class="profile m-2">
         
         <button class="profile_button px-5">Throw Overboard</button>
         </div>
        </div>

    </div>
</div>
</div>`
  faction.appendChild(pirateCard)                
  }

  function allAboard(pirate,factionShip){
  
    let pirateAvatar = document.createElement("div")
    pirateAvatar.setAttribute("class","col-3 p-1 position-relative avatar my-auto")
    pirateAvatar.innerHTML = `  <div class="row">
                              <img src=${pirate.portrait} width="75px" class="rounded-circle mx-auto d-block">
                            </div>
                            <!-- <div class="row d-flex position-relative">
                            <div class="col circle-small-attack">${pirate.attack}</div>
                            <div class="col circle-small-health">${pirate.health}</div>
                            <div class="col circle-small-defense">${pirate.defense}</div>
                          </div> -->`
    factionShip.appendChild(pirateAvatar)
  }

function pirateSquad (results,faction){
    factionSorter(faction)
    results.forEach(prt => {let pirate = new Pirate;
                            pirate.portrait = prt.picture.large
                            pirate.name = `${prt.name.first} ${prt.name.last}`
                            pirate.nation = prt.nat
                            pirate.warcry=prt.location.city
                            let digits = prt.cell.replace(/\D/g, '').replace("0","");
                            pirate.health = attributeRandomizer(digits)
                            pirate.attack = attributeRandomizer(digits)
                            pirate.defense = attributeRandomizer(digits)
                            // pirateCard(pirate,factionShipHTML)
                            pirateCard(pirate, factionListHTML)
                            allAboard(pirate, factionShipdeckHTML)
                            crew.push(pirate)
                            }
                    )

}

function masterShipBuilder(faction){
  let ship = new Ship;

  ship.faction = faction;
  if (faction== "player"){
    ship.captain = "Jack Sparrow"
  } else { ship.captain = "Captain Barbossa"}
  //ship.flag = flag;
  ship.name = "A Ship";//implement name generator
  ship.health = 100;
  ship.cannons = RandomAttributeGenerator(4,8);
  ship.speed = RandomAttributeGenerator(1,10)
  ship.sails = 100;
  ship.damageAversion = 75;
  //ship.crew = crew;
  factionSorter(faction)
  cannonInstaller(ship.cannons) 
  shipArray.push(ship)
  console.log(ship)
  
}
//Different ship type builder

// Ship name generator. Not implemented
function generateShipName(){
  const dicList= ["adjectives", "colors", "languages", "animals", "names", "numberDictionary"]
  let curatedDicList = []
  dicList.forEach(dic => (Math.random() < 0.5) ?  null : curatedDicList.push(dic) ) 
  // console.log(curatedDicList)
  //const numberDictionary = NumberDictionary.generate({ min: 0, max: 999 });
  const shipName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, languages, animals, names,],//removed for now: numberDictionary/
      length: 3,
      separator: '',
      style: 'capital'
    })
    return shipName
}

//Uses the input to retur a random number based of the digits input, which can't return zero
function attributeRandomizer (digits){
    let rNh =Math.random()*10
    while(rNh> (digits.length-2)){
        rNh =Math.random()*10
    }
    result = Math.round(digits.slice((rNh),(rNh+2))/10)
     return  result != 0 ? result : "1"
}
//number generator helper based on a min and a max
function RandomAttributeGenerator(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Populate ship with cannons
function cannonInstaller(numberOfCannonsToInstall){
  for (i=0; i < numberOfCannonsToInstall; i++ ){
  let cannon = document.createElement("div")
  cannon.setAttribute("class","col text-center")
  cannon.innerHTML= cannonHTML;
  factionCannonDeckHTML.appendChild(cannon)
  cannonArray.push(cannon)
  }
}

//Disable buttons while not your turn
function disableButtons(buttonabarID){
  if(buttonabarID=="enemybuttons"){
  currentbuttonSet = enemyButtons
  currentbuttonSet.setAttribute("style","pointer-events:none ; opacity:0.5")
  playerButtons.removeAttribute("style")
  }else if(buttonabarID=="playerbuttons"){
    currentbuttonSet = playerButtons
    currentbuttonSet.setAttribute("style","pointer-events:none ; opacity:0.5")
    enemyButtons.removeAttribute("style")
    }


}

//Places the pirate in the right faction ship
function factionSorter (faction){
    if (faction=="player"){
        factionListHTML= playerCrewListHTML  
        factionShipHTML= playerShipHTML
        factionShipdeckHTML= playerShipDeckHTML
        factionCannonDeckHTML = playerCanonDeckHTML
        cannonHTML= `<object data="./assets/canon-grey.svg" width="50vw" class="player-cannon"> </object>`
        crew = playerCrew
        cannonArray = playerCannons
        shipArray = playerShips
    }
    if (faction=="enemy"){
      factionListHTML= enemyCrewListHTML 
        factionShipHTML= enemyShipHTML
        factionShipdeckHTML= enemyShipDeckHTML
        factionCannonDeckHTML = enemyCanonDeckHTML
        cannonHTML= `<object data="./assets/canon-grey.svg" width="50vw" class="enemy-cannon"> </object>`
        crew = enemyCrew
        cannonArray = enemyCannons
        shipArray = enemyShips
    }
}

//uniqueIDGenerator for pirates to populate their card
function generateUniqueID(string){
 return string.replace(/\s+/g, '')
}

//flags as emojis
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

//delay loop function
const delayLoop = (fn, delay) => {
  return (x, i) => {
    setTimeout(() => {
      fn(x);
    }, i * delay);
  };
};

//Initialize Game

CrewUp(RandomAttributeGenerator(3,4),"es","player")
CrewUp(RandomAttributeGenerator(3,4),"gb","enemy")
masterShipBuilder("player");
masterShipBuilder("enemy")
//disableButtons()
//generateShipName()
//console.log(playerCrew)

//handling buttons
playerButtons.addEventListener("click", playerButtonAction)

function playerButtonAction(evt){
  evt.preventDefault;
  if (evt.target.innerText== "Attack"){
    playerCannons.forEach(cannon =>cannon.classList.remove('animate','bounce'))
    playerCannons.forEach(cannon =>void cannon.offsetWidth);
    playerCannons.forEach(cannon =>cannon.classList.add('animate','bounce'))
    cannonFX.cloneNode(true).play()
    for(let i =0;i<playerCannons.length; i++){
      doDamage(enemyShips, playerShips)
    }
    }
    disableButtons(evt.path[2].id) 
   }

enemyButtons.addEventListener("click", enemyButtonAction)

function enemyButtonAction(evt){
  evt.preventDefault;
  if (evt.target.innerText== "Attack"){
    enemyCannons.forEach(cannon =>cannon.classList.remove('animate','bounce'))
    enemyCannons.forEach(cannon =>void cannon.offsetWidth);
    enemyCannons.forEach(cannon =>cannon.classList.add('animate','bounce'))
    cannonFX.cloneNode(true).play()
    for(let i =0;i<enemyCannons.length; i++){
    doDamage(playerShips, enemyShips)
  }
    } 
    disableButtons(evt.path[2].id) 
}
// if(restartButton){
//   restartButton.addEventListener('click', restartGame);
// }
window.onload=function(){
restartButton.addEventListener ("click", restartGame)}

function restartGame(evt){
  console.log("trying to restart!")
  evt.preventDefault
  location.reload();
}

//Damage Function - I will add precission down the line to make shots more damaging the longer the player wait to shoot.
function doDamage(target, attacker){
  let damage= RandomAttributeGenerator(0,3)
  if(Math.random() < 0.7){
    if(target[0].health - damage>0){
    target[0].health -= damage
    }
    else{ target[0].health = 0;updateUI();victoryModal(attacker[0].captain)}
  }else{
    if(target[0].sails - damage>=0){
      target[0].sails -= damage
      }else{if(target[0].health - damage>0){
        target[0].health -= damage
        }
        else{ target[0].health = 0; updateUI(); victoryModal(attacker[0].captain)}}
  }
  updateUI()
}

//Update the UI
function updateUI(){
  playerShipHealth.setAttribute("style",`width:${playerShips[0].health}%`)
  playerShipHealth.innerHTML=`${playerShips[0].health}%`
  playerSailHealth.setAttribute("style",`width:${playerShips[0].sails}%`)
  playerSailHealth.innerHTML=`${playerShips[0].sails}%`  
  enemyShipHealth.setAttribute("style",`width:${enemyShips[0].health}%`)
  enemyShipHealth.innerHTML=`${enemyShips[0].health}%`
  enemySailHealth.setAttribute("style",`width:${enemyShips[0].sails}%`) 
  enemySailHealth.innerHTML=`${enemyShips[0].sails}%` 
}

function victoryModal(captain){
  //bootstrap modal tamp disabled
  //bootstrap modal not working
  if (captain == "Captain Barbossa"){ document.getElementById("victory-modal").classList.add("backwards")}
   var vModal = new bootstrap.Modal(document.getElementById("victory-modal"))
   vModal.show()
  vMCaptainHTML.innerText = captain
  
  vModal.onExited(restartGame)
}
