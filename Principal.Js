document.addEventListener('DOMContentLoaded', () => {

  //Cargar imagenes
const cardArray = [
  { name: 'cartas1',
    img: 'images/cartas1.png'
  },
  { name: 'cartas1',
    img: 'images/cartas1.png'
  },

  {name: 'cartas2',
    img: 'images/cartas2.png'
  },
  {name: 'cartas2',
  img: 'images/cartas2.png'
  },

  {name: 'cartas3',
    img: 'images/cartas3.png'
  },
  {name: 'cartas3',
    img: 'images/cartas3.png'
  },

  {name: 'cartas4',
    img: 'images/cartas4.png'
  },
  {name: 'cartas4',
  img: 'images/cartas4.png'
  },

  {name: 'cartas5',
    img: 'images/cartas5.png'
  },
  {name: 'cartas5',
  img: 'images/cartas5.png'
  },

  {name: 'cartas6',
    img: 'images/cartas6.png'
  },
  {name: 'cartas6',
    img: 'images/cartas6.png'
  },

  {name: 'cartas7',
    img: 'images/cartas7.png'
  },
  {name: 'cartas7',
    img: 'images/cartas7.png'
  },

  {name: 'cartas8',
    img: 'images/cartas8.png'
  },
  {name: 'cartas8',
    img: 'images/cartas8.png'
  },
  {name: 'reverso',
    img: 'images/reverso.png'
  },
  {name: 'Blanca', 
    img: 'images/Blanca.png'
  }
  ]
  
  cardArray.sort(()=>0.5-Math.random())

//Tablero
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]

function createBoard(){
  for(let i=0; i< cardArray.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', 'images/reverso.png')
    card.setAttribute('data-id', i)
   // card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//Verificar match
function checkForMatch(){
  var cards=document.querySelectorAll('img')
  const optionOneId=cardsChosenId[0]
  const optionOTwoId=cardsChosenId[1]
  if (cardsChosen[0]===cardsChosen[1]){
    alert ('You foun a match')
    cards[optionOneId].setAttribute('src', 'images/Blanca.png')
    cards[optionTwoId].setAttribute('src', 'images/Blanca.png')
    cardsWon.push(cardsChosen)
  } else{
    cards[optionOneId].setAttribute('src', 'images/Blanca.png')
    cards[optionTwoId].setAttribute('src', 'images/Blanca.png')
    alert ('Try again')
  }
  cardsChosen=[]
  cardsChosenId=[]
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length===cardArray.length/2){
    resultDisplay.textContent='Yeiiiii, you win'
  }
}


//Voltear cartas
function flipCard(){
  var carId=this.getAttribute ('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length===2){
    setTimeout(checkForMatch, 500)
  }
}


createBoard()







})