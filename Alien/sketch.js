var spaceship,spaceshipImage
var alien,alienImage

function preload(){
spaceshipImage = loadImage("images/sp.png")
alienImage = loadImage("images/Alien1.png")
}

function setup(){
createCanvas(700,900)

spaceship = createSprite(340,830,50,50)
spaceship.addImage("sp",spaceshipImage)
spaceship.scale = 0.4


}

function draw(){
background("black")

spaceship.x = World.mouseX
spawnAlien(250)
drawSprites()
}


function spawnAlien(y){
  for(var i = 0; i<8; i++){
    alien = createSprite(100+50*i,y,50,30)
    alien.addImage("a",alienImage)
    alien.scale = 0.4
  }
}

