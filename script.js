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
  let pirateCard = document.createElement("div")
  pirateCard.setAttribute("class","accordion-item")
  pirateCard.innerHTML = `
  <h2 class="accordion-header collapse show" id="${generateUniqueID(pirate.name)}">
  <div class="d-grid">                        
  <button class="btn btn-link text-decoration-none font-weight-bold link-dark "  data-bs-toggle="collapse" data-bs-target=" #photobutton${generateUniqueID(pirate.name)}, #collapse${generateUniqueID(pirate.name)}, #${generateUniqueID(pirate.name)}" aria-expanded="true" aria-controls="collapse1">
    <div class="container-fluid">
    <div class = "row">
    <div class="col flag-box">
    <span class="fs-6 fw-light lh-1">${getFlagEmoji(pirate.nation)}</span>
      </div>
      <div class="col big-box">
        <img src=${pirate.portrait} width="50" class="rounded-circle">
      </div>
    
    <div class="col">
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
<div id="collapse${generateUniqueID(pirate.name)}" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">

  <div class="text-center"> 
        <h3 class="mt-2">${pirate.name}</h3>
        <span class="mt-1 clearfix">${pirate.crew} ${getFlagEmoji(pirate.nation)}</span>
        
        <div class="row mt-3 mb-3">
        
          <div class="col-md-4">
            <h5>Vigor</h5>
            <span class="num">${pirate.health}</span>
          </div>
          <div class="col-md-4">
          <h5>Bravado</h5>
            <span class="num">${pirate.attack}</span>
          </div>
          <div class="col-md-4">
          <h5>Sealegs</h5>
            <span class="num">${pirate.defense}</span>
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

// function pirateCard (pirate,faction){
// let pirateCard = document.createElement("div")
// pirateCard.setAttribute("class","card p-3 py-4 pirate-card")
// pirateCard.innerHTML = `
//                 <div class="text-center"> 
//                 <img src=${pirate.portrait} width="50vw" class="rounded-circle border-info border-3">
//                     <h3 class="mt-2">${pirate.name}</h3>
//                     <span class="mt-1 clearfix">${pirate.crew} ${getFlagEmoji(pirate.nation)}</span>
                    
//                     <div class="row mt-3 mb-3">
                    
//                       <div class="col-md-4">
//                         <h5>Vigor</h5>
//                         <span class="num">${pirate.health}</span>
//                       </div>
//                       <div class="col-md-4">
//                       <h5>Bravado</h5>
//                         <span class="num">${pirate.attack}</span>
//                       </div>
//                       <div class="col-md-4">
//                       <h5>Sealegs</h5>
//                         <span class="num">${pirate.defense}</span>
//                       </div>
                    
//                     </div>
                    
//                     <hr class="line">
//                     <div class="d-none">
//                     <small class="mt-4">I am an android developer working at google Inc at california,USA</small>
//                       <div class="social-buttons mt-5"> 
//                        <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> 
//                        <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> 
//                        <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> 
//                        <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button>
//                        <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button>
//                       </div>
                      
//                      <div class="profile mt-5">
                     
//                      <button class="profile_button px-5">View profile</button>
//                      </div>
        
//                 </div>`
// faction.appendChild(pirateCard)                
// }

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
                            crew.push(pirate)
                            }
                    )

}

function masterShipBuilder(){

}

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

function attributeRandomizer (digits){
    let rNh =Math.random()*10
    while(rNh> (digits.length-2)){
        rNh =Math.random()*10
    }
    result = Math.round(digits.slice((rNh),(rNh+2))/10)
     return  result != 0 ? result : "1"
}

function pirateSorter (faction){
    if (faction=="player"){
        factionListHTML= playerCrewListHTML  
        factionShipHTML= playerShipHTML
        crew = playerCrew
    }
    if (faction=="enemy"){
      factionListHTML= enemyCrewListHTML 
        factionShipHTML= enemyShipHTML
        crew = enemyCrew
    }
}

//uniqueIDGenerator
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

CrewUp(2,"es","player")
CrewUp(2,"gb","enemy")
//generateShipName()
console.log(playerCrew)

