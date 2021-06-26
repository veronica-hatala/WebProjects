//Cards
var cards = [
    {htmlID:"tarotPicOne", cardNumber: -1},
    {htmlID:"tarotPicTwo", cardNumber: -1}, 
    {htmlID:"tarotPicThree", cardNumber: -1}
];

/* ****** INIT ****** */
function init(){

  for (let i=0; i < cards.length; i++){
    cards[i].cardNumber = determineCardNum()
    console.log(i+"th card is " + cards[i].cardNumber )
    replaceCardImage(cards[i].cardNumber, cards[i].htmlID)
  }

  addClickEvents()

}

/** DETERMINE TAROT CARD NUMBER
 * 
 * @returns {int} myNum The number of the card, as per tarot ordering
 */
function determineCardNum() {
  let keepLooping = true

  while (keepLooping){

    myNum = Math.floor(Math.random() * Math.floor(22));
    let matchFound = false

    for (let k=0; k<cards.length; k++) {
      if (cards[k].cardNumber===myNum) {
        matchFound = true
        console.log("A match was found. The match is "+ myNum +". Reshuffle.")
      }
      if (k==cards.length-1 && matchFound==false) {
        keepLooping = false
        console.log("No matches found. All good.")
      }
    }
  }

  return myNum

}


/** ADD CLICK EVENTS TO CARDS
 * 
 */
function addClickEvents() {
  var card = document.querySelectorAll(".card");

  for(let i = 0; i < cards.length; i++) {
    card[i].addEventListener("click", function(){
      console.log("Flipped");
      card[i].classList.toggle("flip");
    });
  }
}

/** REPLACE CARD IMAGE
 * 
 * @param {int} cardNum The number of the card, as per tarot ordering
 * @param {string} cardName The HTML id of the card in question
 */
 function replaceCardImage(cardNum, cardName) {

  switch(cardNum) {
    case 0:
      retrieveImage("images/MajorArcana/fool.jpg", cardName);
      break;
    case 1:
      retrieveImage("images/MajorArcana/magician.jpg", cardName);
      break;
    case 2:
      retrieveImage("images/MajorArcana/highPriestess.jpg", cardName);
      break;
    case 3:
      retrieveImage("images/MajorArcana/empress.jpg", cardName)
      break;
    case 4:
      retrieveImage("images/MajorArcana/emperor.jpg", cardName)
      break;
    case 5:
      retrieveImage("images/MajorArcana/hierophant.jpg", cardName)
      break;
    case 6:
      retrieveImage("images/MajorArcana/lovers.jpg", cardName);
      break;
    case 7:
      retrieveImage("images/MajorArcana/chariot.jpg", cardName);
      break;
    case 8:
      retrieveImage("images/MajorArcana/justice.jpg", cardName);
      break;
    case 9:
      retrieveImage("images/MajorArcana/hermit.jpg", cardName)
      break;
    case 10:
      retrieveImage("images/MajorArcana/wheelOfFortune.jpg", cardName)
      break;
    case 11:
      retrieveImage("images/MajorArcana/strength.jpg", cardName)
      break;
    case 12:
      retrieveImage("images/MajorArcana/hangedMan.jpg", cardName);
      break;
    case 13:
      retrieveImage("images/MajorArcana/death.jpg", cardName);
      break;
    case 14:
      retrieveImage("images/MajorArcana/temperance.jpg", cardName);
      break;
    case 15:
      retrieveImage("images/MajorArcana/devil.jpg", cardName)
      break;
    case 16:
      retrieveImage("images/MajorArcana/tower.jpg", cardName)
      break;
    case 17:
      retrieveImage("images/MajorArcana/star.jpg", cardName)
      break;
    case 18:
      retrieveImage("images/MajorArcana/moon.jpg", cardName);
      break;
    case 19:
      retrieveImage("images/MajorArcana/sun.jpg", cardName);
      break;
    case 20:
      retrieveImage("images/MajorArcana/judgement.jpg", cardName);
      break;
    case 21:
      retrieveImage("images/MajorArcana/world.jpg", cardName)
      break;
    default:
      document.getElementById(cardName).src = "images/cardBack.png";

  }

}

/** RETRIEVE IMAGE FROM FILES AND REPLACE
 * 
 * @param {string} sourceString The file path of the tarot card's image
 * @param {string} cardName The HTML id of the card in question
 */
function retrieveImage(sourceString, cardName){
  document.getElementById(cardName).src = sourceString;
}



init()

