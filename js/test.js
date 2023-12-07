// mouse coordinates taken from from the mousemove event expressed in "CSS pixels"
var mouseX;
var mouseY;

var pointX;
var pointY;

var lerpSpeed = 0.2; //entre 0 et 1, 1 = changement instantanné, 0 = pas de changement

var pointLerp = 1-lerpSpeed;
var mouseLerp = lerpSpeed;

class Vector2 {
    x;
    y;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

var velocity = new Vector2(0, 0);
var pos = new Vector2(0, 0);

document.addEventListener("mousemove", (event) => {
   mouseX = event.clientX;
   mouseY = event.clientY;
});

document.addEventListener("keydown", (event) => {
    switch(event.key){
        case "z" :
            velocity.x = 1;
            break;
        case "s" :
            velocity.x = -1;
            break;   
        case "d" :
            velocity.y = 1;
            break;
        case "q" :
            velocity.y = -1;
            break;
    }
});

document.addEventListener("keyup", (event) => {
    switch(event.key){
        case "z" :
            velocity.x = 0;
            break;
        case "s" :
            velocity.x = 0;
            break;   
        case "d" :
            velocity.y = 0;
            break;
        case "q" :
            velocity.y = 0;
            break;
    }
});

shaderWebBackground.shade({

  // called only once before the first run
  onInit: (ctx) => {
    // we can center the mouse even before any "mousemove" event occurs
    // note, we are 
    mouseX = ctx.cssWidth / 2;
    mouseY = ctx.cssHeight / 2;
    pointX = mouseX;
    pointY = mouseY;
    // for convenience you can store your attributes on context
    ctx.iFrame = 0;
  },
  onResize: (width, height, ctx) => {
    ctx.iMinDimension = Math.min(width, height);
  },                 
  onBeforeFrame: (ctx) => {
    pointX = pointLerp*pointX + mouseLerp*mouseX;
    pointY = pointLerp*pointY + mouseLerp*mouseY;
    pos.x += velocity.x*0.1;
    pos.y += velocity.y*0.1;

    ctx.posX = pos.x;
    ctx.posY = pos.y;

    ctx.shaderMouseX = ctx.toShaderX(pointX);
    ctx.shaderMouseY = ctx.toShaderY(pointY);
  },
  shaders: {
    image: {
      uniforms: {
        iTime: (gl, loc) => gl.uniform1f(loc, performance.now() / 1000),
        iResolution: (gl, loc, ctx) => gl.uniform2f(loc, ctx.width, ctx.height),
        iMouse: (gl, loc, ctx) => gl.uniform2f(loc, ctx.shaderMouseX, ctx.shaderMouseY),
        iPos: (gl, loc, ctx) => gl.uniform2f(loc, ctx.posX, ctx.posY),
      }
    }
  },
  onAfterFrame: (ctx) => {
    ctx.iFrame++;
  },
  // custom error handler
  onError: (error, canvas) => {
    canvas.remove();
    console.error(error);
    document.documentElement.classList.add("my-fallback");
  }
});
