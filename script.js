let playerContainer=document.querySelector(".playerChoices")
let computerC=["rock","papper","sciccors"]
let random= Math.floor(Math.random()*computerC.length)
const playerChoice=function(e){
    player=e.target.classList[1]
console.log(player)
if(player=== computerC[random]){
    console.log("tie")


}else if(player==="rock"&& computerC[random]==="papper"){
    console.log("player losses")
}
console.log(computerC[random])

setTimeout(function() {
location.reload(true)
  }, 5000);
}



playerContainer.addEventListener("click",playerChoice)