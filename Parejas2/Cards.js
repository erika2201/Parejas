class carta{
    constructor (x,y,images,type){
        this.x=x;
        this.y=y;
        this.type=type;
        this.img =images[type]
        this.mostrar =false;
    }

    display(){
        if(!this.completed){
            if (!this.mostrar){
                fill(0); //Para mostrar la carta del reves
                rect (this.x, this.y, 50,50);
            }else {
                image (this.img,this.x, this.y);
            }
        }else{
            image(this.img, this.x, this.y);
        }
    }

    validate (dx, dy){
        let result = false;
        if (dx > this.x && this.x + 50 && dy > this.y +50 && !this.mostrar && !this.completed){
            return true;
        }
        return result;
    }

    setCompleted (completed){
        this.completed = completed;
    }

    setMostrar(mostrar){
        this.mostrar = mostrar;
    }
    
    getType(){
        return this.type;      
    }

    getCompleted (){
        return this.completed;
    }

    getMostrar(){
        return this.mostrar;
    }
}