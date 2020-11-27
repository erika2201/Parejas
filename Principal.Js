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
  }
  ]

//Tablero
const grid = document.querySelector('.grid')

function createBoard(){
  for(let i=0; i< cardArray.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', 'images/Blanca.png')
    card.setAttribute('data-id', i)
   // card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}

createBoard()