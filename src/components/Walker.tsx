import { ReactP5Wrapper, Sketch } from "@p5-wrapper/react";
import { useState } from 'react';

const CANVAS_SIZE_X = 600;
const CANVAS_SIZE_Y = 600;

const Walker = () => {
    const [walking, setWalking] = useState(false);
    // const [colors, setColors] = useState([255, 255, 203]);
    // console.log(colors);
    // const [r, setR] = useState(255);
    // const [g, setG] = useState(255);
    // const [b, setB] = useState(203);
    const toggleWalk = () => {
        setWalking(!walking);
    }

    const sketch: Sketch = (p5) => {
        let x: number, y: number;
        let prevX: number, prevY: number;
        let currentColor: number;
        let step: number;

        p5.setup = () => {
            p5.createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);
            p5.background(255);
            x = p5.width / 2;
            y = p5.height / 2;
            prevX = x;
            prevY = y;
            currentColor = 0
        }

        p5.draw = () => {
            if (walking) {
                prevX = x;
                prevY = y;
                const random_choices = [1, 2, 3, 4]
                // if (p5.mouseX > MID_X) {
                //     random_choices.push(1)
                // }
                // if (p5.mouseX < MID_X) {
                //     random_choices.push(2)
                // }
                // if (p5.mouseY > MID_Y) {
                //     random_choices.push(3)
                // }
                // if (p5.mouseY < MID_Y) {
                //     random_choices.push(4)
                // }

                const choice = p5.random(random_choices);
                step = p5.random(1)
                if (step < 0.01) {
                    step = 100
                } else (step = 5)

                if (choice === 1) {
                    x += step; // move right

                } else if (choice === 2) {
                    x -= step; // move left
                } else if (choice === 3) {
                    y += step; // move down
                } else {
                    y -= step; // move up
                }

                x = p5.constrain(x, 0, p5.width);
                y = p5.constrain(y, 0, p5.height);
                if (step > 19) {
                    currentColor = p5.color(p5.random(255), p5.random(255), p5.random(255));
                }
                p5.stroke(currentColor);


                p5.strokeWeight(2);
                p5.line(prevX, prevY, x, y);
            }
        };
    }
    return (
        <>
            <div className='flex flex-col'>
                <button className='bg-white text-black p-2 w-24 border-2 border-black rounded-md mb-4 underline' onClick={toggleWalk}>{walking ? 'Stop' : 'Start'}</button>
                <ReactP5Wrapper sketch={sketch} />
            </div>
        </>
    )
}

export default Walker;