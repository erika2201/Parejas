let timerTime = 0;
let minutes = 0;
let done = 0;
let notMoreDone = true;
let chambonada =0;
let StopItPls = false;
let images = [];
let cards = [];
let cardCA = null;
let cardCB = null;
let activated = true;


function preload()
{
	let index = 1;
	for(let i = 0; i < 8; i++)
	{
		images[i] = loadImage("images/S" + index + ".png");
		index++;
	} 
}

function reset()
{

	let type = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
	shuffle(type, true);
	let locationX = 29;
	let locationY = 100;

	for(let i = 0; i < 16; i++)
	{
		cards[i] = new Card(locationX +5, 10 + locationY, images, type[i]);
		locationX += 60;

		if(locationX >= 225)
		{
			locationX = 29;
			locationY += 80;
		}
	}

	timerTime = 0;
	minutes = 0;
	done=0;
	notMoreDone = true;
	chambonada=0;
	StopItPls = false;

}

function setup() 
{
	createCanvas(300, 600);
	reset();

	setInterval(timeIt , 1000);
}

function draw()
{
	background(200);
	fill(100,10,10);
	cards.forEach((card) => 
	{
		card.display();
	});
	validateSelectedCardsType();
	
	noFill();
	timer();
	
	//reset button
  noStroke ();
	fill(160,50,100);
	rect(155,30, 110,50, 10,10);
	fill(230,200,200);
	text('Reset',210,65);
}

function validateSelectedCardsType()
{
	if(cardCA !== null && cardCB !== null)
	{
		if(cardCA.getType() === cardCB.getType())
		{
			
			completeSelectedCards();
			if(notMoreDone===true){
				done++;
			
				notMoreDone = false;
				
			}
			chambonada++;
			if(chambonada%25===0){
				notMoreDone = true;
			}
		}
		else
		{
			resetSelectedCards();
			
		}
	}
}

function completeSelectedCards()
{
	activated = false;
	setTimeout(() => 
	{
		cardCA.setShow(true);
		cardCB.setShow(true);
		cardCA.setCompleted(true);
		cardCB.setCompleted(true);
		cardCA = null;
		cardCB = null;
		activated = true;
	}, 400);
}

function resetSelectedCards()
{
	activated = false;
	setTimeout(() => 
	{
		cardCA.setShow(false);
		cardCB.setShow(false);
		cardCA.setCompleted(false);
		cardCB.setCompleted(false);
		cardCA = null;
		cardCB = null;
		activated = true;
	}, 400);
}

function timer()
{
	fill(160,40,40);
	stroke(160,40,40);
	
	textSize(30);
	textAlign(CENTER);
	
		if(done<8){

		if(timerTime >= 10){
			text(minutes + ":" + timerTime, 145, 500);
		}
		if(timerTime < 10){
			text(minutes + ":0" + timerTime, 150, 500);
		}
		if(timerTime >= 60){
			timerTime = 0;
			minutes++;
		}
	}else{
		StopItPls = true;
		if(timerTime<10){
			text(minutes + ":0" + timerTime, 145, 500);
		}else{
		text(minutes + ":" + timerTime, 145, 500);
		}
	}
}


function timeIt()
{
	if(StopItPls===false){
	timerTime++;
	}
}

function mousePressed(){
	if(mouseX > 155 && mouseX < 265 && mouseY > 30 && mouseY < 80){
		reset();
	}


	if(activated)
	{
		cards.forEach((card) =>
		{
			if(card.validate(mouseX, mouseY))
			{
				if(cardCA == null)
				{
					cardCA = card;
					card.setShow(true);
					return true;
				}
				else if(cardCB === null && card !== cardCA)
				{
					cardCB = card;
					card.setShow(true);
					return true;
				}
			}
		})
	}
}
