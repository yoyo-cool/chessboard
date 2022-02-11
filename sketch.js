var boardPosition = 100
var positionXofWhiteSquare = 100
var positionYofWhiteSquare = 100
var positionXofBlackSquare = 170
var positionYofBlackSquare = 100

function setup() {
  createCanvas(1280,720);
  background('brown');
  fill('white')  
  createWhiteSquares()
  createWhiteSquares()
  createWhiteSquares()
  createWhiteSquares()
  createBlackSquares()
  createBlackSquares()
  createBlackSquares()
  createBlackSquares()
}

function draw() {
   
  drawSprites();
}

function createWhiteSquares(){
  for(var i = 0; i < 4 ; i++){
    whiteSquare= new whiteSquares(positionXofWhiteSquare,positionYofWhiteSquare,70,70)
    positionXofWhiteSquare+=140
}
  positionYofWhiteSquare+=70
  positionXofWhiteSquare=100
  positionXofWhiteSquare+=70
  for(var i = 0; i<4;i++){
    whiteSquare= new whiteSquares(positionXofWhiteSquare,positionYofWhiteSquare,70,70)
    positionXofWhiteSquare+=140
  }
  positionYofWhiteSquare+=70
  positionXofWhiteSquare=100
}
function createBlackSquares(){
  fill('black')
  for(var i = 0; i<4;i++){
    blackSquare= new blackSquares(positionXofBlackSquare,positionYofBlackSquare,70,70)
    positionXofBlackSquare+=140
  }
  positionYofBlackSquare+=70
  positionXofBlackSquare=100
  for(var i = 0; i < 4 ; i++){
    blackSquare= new blackSquares(positionXofBlackSquare,positionYofBlackSquare,70,70)
    positionXofBlackSquare+=140
}
positionYofBlackSquare+=70
positionXofBlackSquare=100
positionXofBlackSquare+=70
}