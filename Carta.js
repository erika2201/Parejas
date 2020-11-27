class Carta{



constructor(x, y, colibri) {
this.x=x;
this.y=y;
this.tam=50;
this.col= colibri;

}
    
pintar(PApplet){
let tarjeta1=loadImage (this.col);//variable momentanea
//print (this.col);
fill(255,255,0)
circle(this.x, this.y,this.tam);//usar this para todo :c
image(tarjeta1, this.x, this.y); 
}

}
