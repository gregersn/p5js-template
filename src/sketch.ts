import p5 = require("p5");
// import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () => {
        p.background(192);
        p.rectMode(p.CENTER);
        p.rect(p.width / 2, p.height / 2, p.width * .1, p.height * .1);
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}

const app = new p5(sketch);
