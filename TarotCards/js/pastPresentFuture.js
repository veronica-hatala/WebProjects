//Cards
var cards = [
    {htmlID:"tarotPicOne", cardNumber: -1, descHTMLID: "tarotDescOne"},
    {htmlID:"tarotPicTwo", cardNumber: -1, descHTMLID: "tarotDescTwo"}, 
    {htmlID:"tarotPicThree", cardNumber: -1, descHTMLID: "tarotDescThree"}
];

/* ****** INIT ****** */
function init(){

  for (let i=0; i < cards.length; i++){
    cards[i].cardNumber = determineCardNum()
    console.log(i+"th card is " + cards[i].cardNumber )
    //replaceCardImage(cards[i].cardNumber, cards[i].htmlID)
    getData(cards[i])
  }

  addClickEvents()

}

async function getData(currentCard) {
  const response = await fetch("cardData.csv")
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach(row => {
    const column = row.split(',');
    if (column[0]==currentCard.cardNumber){
      const CSVcardNum = column[0];
      const CSVcardName = column[1];
      const CSVimgLocation = column[2];
      const CSVcardDesc = column[3];
      console.log(CSVcardNum, CSVcardName, CSVimgLocation, CSVcardDesc)
      retrieveImage(CSVimgLocation, currentCard.htmlID)
      retrieveDesc(CSVcardDesc, currentCard.descHTMLID)
    }
  });
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
      }
      if (k==cards.length-1 && matchFound==false) {
        keepLooping = false
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

/** RETRIEVE IMAGE FROM FILES AND REPLACE
 * 
 * @param {string} sourceString The file path of the tarot card's image
 * @param {string} cardName The HTML id of the card in question
 */
function retrieveImage(sourceString, cardName){
  document.getElementById(cardName).src = sourceString;
}

/**RETRIEVE CARD DESCRIPTION AND REPLACE
 * 
 * @param {string} sourceCardDesc 
 * @param {*} descID
 */
function retrieveDesc(sourceCardDesc, descID){
  document.getElementById(descID).innerHTML = sourceCardDesc;
}



init()




