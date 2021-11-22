import React from 'react'
import Sketch from 'react-p5'

function ModalButton() {
  
  let bgc, col, step
  const setup = (p5, canvasParentRef) => {
 
    p5.createCanvas(160, 160).parent(canvasParentRef)
    bgc = p5.int(p5.random(100,200))
    col = p5.int(p5.random(100,200))
    
    if(p5.abs(bgc-col)<10){
      bgc = bgc-col>0 ? bgc+10: bgc-10
    }
  // bgc = random(blueColors)
  // col = random(mulCols)
    step = p5.random(100)
  }
  
  const draw = p5 => {
    p5.frameRate(60)
    p5.background(bgc); 
    
    
    let stepInc = 0.004
    let hinc = 0.02

    p5.noStroke()  
    // Draw Shape
    p5.beginShape();

    let xoff = step;
    p5.fill(col)
    
    for (let x = 0; x < p5.width+2; x++) {
      let h = p5.map(p5.noise(xoff,step),0,1,0,160)
      p5.vertex(x, h);
  
      // Increment x dimension for noise
      xoff += hinc;
    }
    
    p5.vertex(p5.width, p5.height);
    p5.vertex(0, p5.height);
    p5.endShape();
    
    
    step += stepInc;
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default ModalButton
