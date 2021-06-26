function init(){
    //Cards
    var card1;

    card1 = determineCardNum()
    replaceCardImage(card1)
}

function determineCardNum() {
    return Math.floor(Math.random() * Math.floor(3));
}

function replaceCardImage(cardNum) {
    if (cardNum == 0) {
        document.getElementById("tarotPic").src = "images/fool.jpg";
    } else if (cardNum == 1) {
        document.getElementById("tarotPic").src = "images/magician.jpg";
    } else if (cardNum == 2) {
        document.getElementById("tarotPic").src = "images/highPriestess.jpg";
    } else {
        document.getElementById("tarotPic").src = "images/cardBack.png";
    }
}


init()

var card = document.querySelectorAll(".card");
card[0].addEventListener("click", function(){
  console.log("Flipped");
  card[0].classList.toggle("flip");
});