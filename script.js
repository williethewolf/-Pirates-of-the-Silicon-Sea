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
    constructor(faction, flag, name, cannons, health, speed, sails, crew) {
      this.faction = faction;
      this.flag = flag;
      this.name = name;
      this.health = health;
      this.cannons = cannons;
      this.health = health;
      this.speed = speed
      this.sails = sails;
      this.crew = crew;
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
//Game buttons
const playerButtons = document.querySelector("#playerbuttons")
const enemyButtons = document.querySelector("#enemybuttons")


//variables
let playerCrew= []
let enemyCrew = []


//Functions

function CrewUp(number,country,faction) {
    console.log(`${rUApiUrl}?nat=${country}&results=${number}`)
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
    <div class="col-1 col-s flag-box">
      <div class= "container d-flex">
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
      <div = class = "col mini-box">
        <span class="text-success">V:${pirate.health}</span>
      </div>
      <div = class = "col mini-box">
        <span class="text-danger">B:${pirate.attack}</span>
      </div>
      <div class = "col mini-box">
        <span class="text-info">S:${pirate.defense}</span>
      </div>
    </div>
  </div>
  </div>
  </div>   
  <div class="text-end me-md-4 mb-2">
  <span class="fs-6 fw-light lh-1">${pirate.crew} ${getFlagEmoji(pirate.nation)}</span>
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
        <span class="mt-1 clearfix">${pirate.crew} ${getFlagEmoji(pirate.nation)}</span>
        
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
    pirateAvatar.setAttribute("class","col-3 p-2 position-relative")
    pirateAvatar.innerHTML = `  <div class="row">
                              <img src=${pirate.portrait} width="75px" class="rounded-circle mx-auto d-block">
                            </div>
                            <div class="row d-flex position-relative">
                              <div class="col circle-small-attack">${pirate.attack}</div>
                              <div class="col circle-small-health">${pirate.health}</div>
                              <div class="col circle-small-defense">${pirate.defense}</div>
                            </div>`
    factionShip.appendChild(pirateAvatar)
  }

function pirateSquad (results,faction){
    pirateSorter(faction)
    results.forEach(prt => {let pirate = new Pirate;
                            pirate.portrait = prt.picture.large
                            pirate.name = `${prt.name.first} ${prt.name.last}`
                            pirate.nation = prt.nat
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

function masterShipBuilder(){
  let ship = new Ship;

  ship.faction = faction;
  ship.flag = flag;
  ship.name = name;
  ship.health = 100;
  ship.cannons = cannons;
  ship.health = health;
  ship.speed = speed
  ship.sails = sails;
  ship.crew = crew;
 
  // pirateCard(pirate,factionShipHTML)
  pirateCard(pirate, factionListHTML)
  allAboard(pirate, factionShipdeckHTML)
  crew.push(pirate)
  
}
//Different ship type builder

// Ship generator. Not implemented
function generateShipName(){
  const dicList= ["adjectives", "colors", "languages", "animals", "names", "numberDictionary"]
  let curatedDicList = []
  dicList.forEach(dic => (Math.random() < 0.5) ?  null : curatedDicList.push(dic) ) 
  console.log(curatedDicList)
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
//number of cannons based on a min and a max
function cannonInstaller(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Disable buttons while not your turn
function disableButtons(){
  let currentbuttonSet = enemyButtons;
  currentbuttonSet.setAttribute("style","pointer-events:none ; opacity:0.5")
}

//Places the piratein the right ship
function pirateSorter (faction){
    if (faction=="player"){
        factionListHTML= playerCrewListHTML  
        factionShipHTML= playerShipHTML
        factionShipdeckHTML= playerShipDeckHTML
        // factionCannonDeckHTML = playerCanonDeckHTML
        crew = playerCrew
    }
    if (faction=="enemy"){
      factionListHTML= enemyCrewListHTML 
        factionShipHTML= enemyShipHTML
        factionShipdeckHTML= enemyShipDeckHTML
        //factionCannonDeckHTML = enemyCanonDeckHTML
        crew = enemyCrew
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

//Initialize Game

CrewUp(4,"es","player")
CrewUp(4,"gb","enemy")
disableButtons()
//generateShipName()
console.log(playerCrew)

