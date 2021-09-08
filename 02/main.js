let promptLength = prompt('Please enter a length in centimeters in order to calculate an area and a perimeter of a cube!');

function calcAreaAndPerimeterOfCube(length) {
    this.length = length;
    this.calcArea = function () {
        console.log(`The area of a cube with a length of ${this.length}cm is ${6*Math.pow(this.length, 2)}cm2.`);
        document.body.innerHTML = `
        <p>The area of a cube with a length of ${this.length}cm is ${6*Math.pow(this.length, 2)}cm<sup>2</sup>.</p>`;
    }
    this.calcPerimeter = function () {
        console.log(`The perimeter of a cube with a length of ${this.length}cm is ${this.length*12}cm`);
        document.body.innerHTML += `
        <p>The perimeter of a cube with a length of ${this.length}cm is ${this.length*12}cm.</p>`;
    }
}

const cube = new calcAreaAndPerimeterOfCube(promptLength);
cube.calcArea();
cube.calcPerimeter();