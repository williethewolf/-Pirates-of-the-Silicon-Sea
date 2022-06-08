//APIsUrl
rUApiUrl = "https://randomuser.me/api/"

//Classes
class Pirate {
    constructor(name, health, attack,defense,warcry) {
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.warcry = warcry;
    }
  }

//Const
countryList =["au", "br", "ca", "ch", "de", "dk", "es", "fi", "fr", "gb", "ie", "ir", "no", "nl", "nz", "tr", "us"]
playerShip = document.querySelector("#player-ship")

function CrewUp(number,country) {
    fetch(`${rUApiUrl}?nat=${country}&results=${number}`)
    .then(rawPirates => console.log(rawPirates))
    
}

function pirateCard (){
let pirateCard = document.createElement("div")
pirateCard.setAttribute("class","card p-3 py-4 pirate-card")
pirateCard.innerHTML = `
                <div class="text-center"> 
                <img src="https://i.imgur.com/stD0Q19.jpg" width="100" class="rounded-circle">
                    <h3 class="mt-2">${Pirate.name}</h3>
                    <span class="mt-1 clearfix">Android Developer</span>
                    
                    <div class="row mt-3 mb-3">
                    
                      <div class="col-md-4">
                        <h5>Health</h5>
                        <span class="num">${Pirate.health}</span>
                      </div>
                      <div class="col-md-4">
                      <h5>Attack</h5>
                        <span class="num">${Pirate.attack}</span>
                      </div>
                      <div class="col-md-4">
                      <h5>Defense</h5>
                        <span class="num">${Pirate.defense}</span>
                      </div>
                    
                    </div>
                    
                    <hr class="line">
                    
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
        
                </div>`
playerShip.appendChild(pirateCard)                
}
CrewUp(3,"es")
pirateCard()