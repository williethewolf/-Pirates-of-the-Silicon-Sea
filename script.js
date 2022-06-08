//APIsUrl
rUApiUrl = "https://randomuser.me/api/"

//Classes
class Pirate {
    constructor(portrait, name, health, attack,defense,warcry, crew) {
      this.name = portrait;
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.warcry = warcry;
      this.crew = crew;
    }
  }

//Const
const countryList =["au", "br", "ca", "ch", "de", "dk", "es", "fi", "fr", "gb", "ie", "ir", "no", "nl", "nz", "tr", "us"]
const playerShipHTML = document.querySelector("#player-ship")
const enemyShipHTML = document.querySelector("#enemy-ship")
//variables
let playerCrew= []
let enemyCrew = []

function CrewUp(number,country,faction) {
    console.log(`${rUApiUrl}?nat=${country}&results=${number}`)
    fetch(`${rUApiUrl}?nat=${country}&results=${number}`)
    .then(response => response.json())
    .then(rawPirates => {console.log(rawPirates.results);pirateSquad(rawPirates.results,faction)})
    
}

function pirateCard (pirate,faction){
let pirateCard = document.createElement("div")
pirateCard.setAttribute("class","card p-3 py-4 pirate-card")
pirateCard.innerHTML = `
                <div class="text-center"> 
                <img src=${pirate.portrait} width="50vw" class="rounded-circle border-info border-3">
                    <h3 class="mt-2">${pirate.name}</h3>
                    <span class="mt-1 clearfix">${pirate.crew}</span>
                    
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
                    
                    <hr class="line">
                    <div class="d-none">
                    <small class="mt-4">I am an android developer working at google Inc at california,USA</small>
                      <div class="social-buttons mt-5"> 
                       <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> 
                       <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> 
                       <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> 
                       <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button>
                       <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button>
                      </div>
                      
                     <div class="profile mt-5">
                     
                     <button class="profile_button px-5">View profile</button>
                     </div>
        
                </div>`
faction.appendChild(pirateCard)                
}

function pirateSquad (results,faction){
    pirateSorter(faction)
    results.forEach(prt => {let pirate = new Pirate;
                            pirate.portrait = prt.picture.large
                            pirate.name = `${prt.name.first} ${prt.name.last}`
                            let digits = prt.cell.replace(/\D/g, '').replace("0","");
                            let rNh =Math.random()*10
                            pirate.health = attributeRandomizer(digits)
                            pirate.attack = attributeRandomizer(digits)
                            pirate.defense = attributeRandomizer(digits)
                            pirateCard(pirate,factionShipHTML)
                            crew.push(pirate)
                            }
                    )

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
        factionShipHTML= playerShipHTML
        crew = playerCrew
    }
    if (faction=="enemy"){
        factionShipHTML= enemyShipHTML
        crew = enemyCrew
    }
}
CrewUp(6,"es","player")
CrewUp(3,"uk","enemy")
console.log(playerCrew)

