//1890
//1589
//altura caminhando = 144
//distancia até a cabeça correndo = 471 em y
//distancia até o pé correndo = 625 em y
// altura correndo = 154

export default class Boneco {
    constructor(img,ctx) {
        this.img = img
        this.ctx = ctx
        this.srcX = 0
        this.srcY = 0
        this.srcWidth = 237
        this.srcHeigth = 154
        this.canvasX = 0
        this.canvasY = 76
        this.canvasWidth = 237
        this.canvasHeigth = 154
        this.moving = false
        this.jumping = false
        this.loopOriginal = 1
        this.interarion = 1
        this.jumpFig = 1
    }
    
    drawBoneco() {
        this.ctx.drawImage(this.img,this.srcX,this.srcY,this.srcWidth,this.srcHeigth,this.canvasX,this.canvasY,this.canvasWidth,this.canvasHeigth)
    }

    move() {
        if(this.moving){
            this.canvasY = 76
            this.srcHeigth = 154
            this.canvasHeigth = 154
            if(this.loopOriginal === 1){
                this.srcY += 471
            } else {
                if(this.loopOriginal % 5 === 0){

                
                        if(this.interarion % 8 === 0){
                            this.srcX = 0
                        }
                        this.srcX += this.srcWidth
                        this.interarion += 1
                    
                }
                
            }
            this.loopOriginal += 1
        }
    }

    restart() { 
        this.moving = false
        this.srcY = 0
        this.srcX = 0
        this.loopOriginal = 1
        this.interarion = 1
        this.canvasY = 76
        this.srcHeigth = 154
        this.canvasHeigth = 154
    }

    jump() {
        if(this.jumping){
            this.moving = false
            this.canvasY = 0
            if(this.loopOriginal % 3 === 0){
                
            if(this.jumpfig===7){
                this.jumping = false
                //this.moving = true
            } else {
                if(this.jumping % 8 === 0){
                    this.srcX = 0
                }    
                this.srcY = 1115
                this.srcHeigth = 230
                this.canvasHeigth = 230
                this.srcX += this.srcWidth
            }
            this.jumpfig +=1
        } this.loopOriginal +=1
        }
    }

}