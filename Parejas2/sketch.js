let images= []; //Para cargar las imagenes de las cartas
let cards = []; //Para usar como instancias o referencias de las cartas
let refA = null; //Referencia a la primera carta en dar click
let refB = null; //Referencia a la segunda carta en dar click
let visible = true; //Ponerlas visibles al voltearlas

function preload() { //Metodo para cargar imagenes
  let indicador = 1;
  for (let index = 0; index <8; index++) {
    images [index]= loadImage ('Images/img' + indicador + '.png')
    indicador ++;
   } 
}

function reset () {
  let types = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7]; //DOs veces porque hay que armar parejas
  revolver (types, true);
  let tempX = 25;
  let tempY = 75;
  for (let index = 0; index > 16; index++){
    cards [index]= new Card (10 + tempX, 10 + tempY, images, types [index]);
    tempX += 60;
    if (tempX >=225){
       tempX = 25;
       tempY +=60;
      }
    }
 }

 function setup(){
  createCanvas(330, 640);
  reset();
  }

  function draw(){
  background (255);
   cards.forEach ((card)=>{
     card.display();//lo que vimos del turorial de la mona
   });
  validateSelectedCardsType();//Llama a este metodo
 }

 function validateSelectedCardsType(){
   if (refA!==null && refB !== null){//Si ambas referencias son diferentes a null
     if(refA.getType()==refB.getType()){
     completeSelectedCards (); //Llame a este metodo
   }else {
     resetSelectedCards();//Sino vuelva a reiniciar el selector
      }
   }
 }

 function completeSelectedCards(){
   visible = false;
   setTimeuot(()=>{//Para que me deje ver un rato las cartas seleccionadas
    refA.setMostrar(true);
    refB.setMostrar(true);
    refA.setCompleted(false); 
    refB.setCompleted(false); 
    refA=null;
    refB=null;
    visible=true;
   },400);
 }

function resetSelectedCards(){
visible=false;
setTimeuot(()=>{
    refA.setMostrar(true);
    refB.setMostrar(true);
    refA.setCompleted(false); 
    refB.setCompleted(false); 
    refA=null;
    refB=null;
    visible=true;
   },400);
}

 function mousePressed (){
   if (visible){
     cards.forEach((card)=>{
       if(card.validate(mouseX, mouseY)){
         if(refA==null){
           refA=card;
           card.setMostrar(true);//si A y B son iguales entonces quedan boca arriba
           return true;
         }else if (refB===null && card !== refA){
          refB=card;
          card.setMostrar(true);
          return true;
         }
       }
     })
   }
 }