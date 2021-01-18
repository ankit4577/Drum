var totalNumber=document.querySelectorAll(".drum").length;

for(var i=0; i<totalNumber;i++){

document.querySelectorAll("button")[i].addEventListener("click",justGotClick);

function justGotClick(){
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  addAnimation(buttonInnerHTML);

}
}

document.addEventListener("keypress",keystrock);
function keystrock(event){
  makeSound(event.key);
  addAnimation(event.key);
}

function makeSound(key){
  switch (key) {
    case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
    case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
    case "k":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
    case "l":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

    default:
            alert("invalid");

  }
}


function addAnimation(currentkey){
  var activekey= document.querySelector("."+currentkey);
  activekey.classList.add("pressed");
  setTimeout(function (){
    activekey.classList.remove("pressed");},100);

}
