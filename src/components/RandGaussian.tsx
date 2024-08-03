import { ReactP5Wrapper, Sketch, P5CanvasInstance } from "@p5-wrapper/react";
import { useState } from 'react';

const RandGaussian = () => {
    const [drawing, setDrawing] = useState(true);

    const sketch: Sketch = (p5: P5CanvasInstance) => {
        let x = p5.randomGaussian(320, 60)
        let y = 200
        p5.setup = () => {
            p5.createCanvas(400, 400)
            p5.background(255)
            p5.frameRate(10)
            p5.noStroke()
        }
        p5.draw = () => {
            if (drawing) {
                p5.fill(0, 10)
                let x = p5.randomGaussian(200, 30)
                p5.circle(x, y, 25);



            }
        }

    }

    const sketch2: Sketch = (p5: P5CanvasInstance) => {
        let x = p5.randomGaussian(320, 60)
        let y = 200
        p5.setup = () => {
            p5.createCanvas(400, 400)
            p5.background(0)
            p5.frameRate(10)
            p5.noStroke()
        }
        p5.draw = () => {
            if (drawing) {
                let r = p5.constrain(p5.randomGaussian(128, 50), 0, 255);
                let g = p5.constrain(p5.randomGaussian(128, 50), 0, 255);
                let b = p5.constrain(p5.randomGaussian(128, 50), 0, 255);
                let alpha = p5.constrain(p5.randomGaussian(100, 30), 10, 200);
                p5.fill(r, g, b, alpha)
                let x = p5.randomGaussian(200, 30)
                p5.circle(x, y, 25);



            }
        }

    }





    return <>
        <button onClick={() => setDrawing(!drawing)}>Toggle Drawing</button>
        <ReactP5Wrapper sketch={sketch} />
        <ReactP5Wrapper sketch={sketch2} />

    </>

}
export default RandGaussian;