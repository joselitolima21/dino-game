import Boneco from './Boneco'

export default (imgRef,canvasRef) => {
    let canvas =  canvasRef.current
    let img = imgRef.current
    canvas.width = 800   
    canvas.height = 500
    let ctx = canvas.getContext('2d')
    let boneco = new Boneco(img,ctx)
    
    window.addEventListener("keydown",keydownHandler,false)

    function keydownHandler(event) {
        switch(event.key) {
            case 'Enter': boneco.moving = !boneco.moving;
                break;
            case 'Escape': boneco.restart()
                break;
            case ' ': boneco.jumping = !boneco.jumping
                break;
            default: 
                break;
        }
    }
    
    img.onload = () => {
        init()
    }

    function draw() {
        boneco.drawBoneco()
    }

    function init() {
        loop()
    }
    
    function update() {
        boneco.move()
        boneco.jump()
    }

    function loop() {
        window.requestAnimationFrame(loop,canvas)
        update()
        draw()
    }
}
