import { ReactP5Wrapper, Sketch } from "@p5-wrapper/react";
import { useState } from 'react';

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
            p5.createCanvas(400, 400);
            p5.background(255);
            x = p5.width / 2;
            y = p5.height / 2;
            prevX = x;
            prevY = y;
            currentColor = 0
        }

        p5.draw = () => {
            step = p5.random(10, 20);
            if (walking) {
                prevX = x;
                prevY = y;
                const random_choices = [1, 2, 3, 4]
                console.log(p5.mouseX, p5.mouseY);
                if (p5.mouseX > 200) {
                    random_choices.push(1)
                }
                if (p5.mouseX < 200) {
                    random_choices.push(2)
                }
                if (p5.mouseY > 200) {
                    random_choices.push(3)
                }
                if (p5.mouseY < 200) {
                    random_choices.push(4)
                }

                const choice = p5.random(random_choices);
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
            <button onClick={toggleWalk}>{walking ? 'Stop' : 'Start'}</button>
            <ReactP5Wrapper sketch={sketch} />
            {/* <label>R</label>
            <input type="number" min={0} name="r" max={255} value={r} onChange={(e) => setR(parseInt(e.target.value))} />
            <label>G</label>
            <input type="number" min={0} name="g" max={255} value={g} onChange={(e) => setG(parseInt(e.target.value))} />
            <label>B</label>
            <input type="number" min={0} name="b" max={255} value={b} onChange={(e) => setB(parseInt(e.target.value))} />
            <button onClick={() => setColors([r, g, b])}>Set</button> */}
        </>
    )
}

export default Walker;