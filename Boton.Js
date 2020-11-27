class Boton{

constructor(x, y){
this.x=x;
this.y=y;
this.tam=50;
    }
    
pintar(){
fill(255);
square(this.x,this.y,this.tam);
    }

}
