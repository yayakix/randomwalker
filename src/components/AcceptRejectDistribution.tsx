import { ReactP5Wrapper, Sketch, P5CanvasInstance } from "@p5-wrapper/react";
import { useState } from 'react';

const AcceptRejectDistribution = () => {
    const [drawing, setDrawing] = useState(true);

    const sketch: Sketch = (p5: P5CanvasInstance) => {
        let randomCounts = [];
        let startY = 600;

        p5.setup = () => {

            p5.createCanvas(600, 600)  // Increased canvas width
            p5.background(255)
            p5.frameRate(30)  // Increased frame rate for smoother animation
            for (let i = 0; i < 20; i++) {
                randomCounts[i] = 0;
            }
            p5.fill(100)
        }

        let rectangles = [
            { x: 10, y: startY, w: 30, h: -50 },
            { x: 45, y: startY, w: 30, h: -50 },
            { x: 80, y: startY, w: 30, h: -50 },
            { x: 115, y: startY, w: 30, h: -50 },
            { x: 150, y: startY, w: 30, h: -50 },
            { x: 185, y: startY, w: 30, h: -50 },
            { x: 220, y: startY, w: 30, h: -50 },
            { x: 255, y: startY, w: 30, h: -50 },
            { x: 290, y: startY, w: 30, h: -50 },
            { x: 325, y: startY, w: 30, h: -50 },
            { x: 360, y: startY, w: 30, h: -50 },
            { x: 395, y: startY, w: 30, h: -50 },
            { x: 430, y: startY, w: 30, h: -50 },
            { x: 465, y: startY, w: 30, h: -50 },
            { x: 500, y: startY, w: 30, h: -50 },
            { x: 535, y: startY, w: 30, h: -50 },
            { x: 570, y: startY, w: 30, h: -50 },

        ];
        const acceptreject = (index: number) => {
            let r1 = p5.random(index);
            let probability = r1;
            let r2 = p5.random(rectangles.length);

            if (r2 < probability) {
                return r1;
            }
            return null;
        }


        p5.draw = () => {

            if (drawing) {

                p5.background(255)  // Clear the background each frame

                rectangles.forEach((rect, index) => {
                    const randomGrowth = acceptreject(index)
                    if (randomGrowth > 0.1) {
                        p5.rect(rect.x, rect.y, rect.w, (rect.h = rect.h - 1))
                    }
                    else {
                        p5.rect(rect.x, rect.y, rect.w, rect.h)
                    }
                })
                // p5.rect(10, 400, 50, -50)
                // // separate by 10 pixels
                // p5.rect(70, 400, 50, -100)
                // // sep
                // p5.rect(130, 400, 50, -150)
                // // test
                // p5.rect(190, 400, 50, -200)


            }
        }
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setDrawing(!drawing)}>
                {drawing ? "Stop" : "Start"}
            </button>
            <ReactP5Wrapper sketch={sketch} />
        </div>
    )
}
export default AcceptRejectDistribution;