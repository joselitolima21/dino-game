//2185
//685
const pulandoY = 362

const height = 323.7
const width = 240

export default class Boneco {
    constructor(img,ctx) {
        
        this.img = img
        this.ctx = ctx
        this.srcX = 0
        this.srcY = 0
        this.srcWidth = width
        this.srcHeigth = height
        this.canvasX = 0
        this.canvasY = 80
        this.canvasWidth = width
        this.canvasHeigth = height
        this.moving = false
        this.loopOriginal = 1
        this.interarion = 1
        this.jumping = false
        this.loopJump = 1
        this.jumpIntereation = 1
    }
    
    drawBoneco() {
        this.ctx.drawImage(this.img,this.srcX,this.srcY,this.srcWidth,this.srcHeigth,this.canvasX,this.canvasY,this.canvasWidth,this.canvasHeigth)
    }

    drawScene(scene) {
        this.ctx.drawImage(scene,0,0,800,500,0,0,800,500)
    }


    move() {
        if(this.moving){
            
                if(this.loopOriginal % 5 === 0){

                
                        if(this.interarion % 7 === 0){
                            this.srcX = 0
                        }
                        this.srcX += this.srcWidth
                        this.interarion += 1
                    
                }
                this.loopOriginal += 1
        }
    }

    restart() { 
        this.jumping = false
        this.moving = false
        this.srcY = 0
        this.srcX = 0
        this.loopOriginal = 1
        this.interarion = 1
        this.loopJump = 1
        this.jumpIntereation = 1
    }

    jump() {
        if(this.jumping){
            if(this.loopJump === 1){
                this.moving = false
                this.srcX = 0
                this.srcY = pulandoY
                console.log('aqui')
            } else {
                if(this.loopJump % 5 === 0){

                
                        if(this.jumpIntereation % 7 === 0){
                            this.restart()
                            this.moving = true
                            return 
                        }
                        this.srcX += this.srcWidth
                        this.jumpIntereation += 1
                        
                }
                
            }
            this.loopJump += 1
            console.log(this.loopJump)
        }
    }
}