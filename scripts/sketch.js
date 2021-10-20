"use strict";
// This directive is used to tell TypeScript where the P5 functions
// are defined in the Global scope.  This applies when not using a
// module bundler or using the "instance mode" of P5 (where the
// sketch is passed an object with contains all the P5 functions.
/// <reference path="../node_modules/@types/p5/global.d.ts" />
function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(220);
    ellipse(50, 50, 50, 50);
}
//# sourceMappingURL=sketch.js.map