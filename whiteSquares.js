class whiteSquares{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.w = w; 
      this.h = h;
      rect(x, y, w,h,options)
      fill("white");
    }
  };