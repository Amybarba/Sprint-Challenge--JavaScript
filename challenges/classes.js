// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(lengthWidthHeight) {
    this.length = lengthWidthHeight.length;
    this.width = lengthWidthHeight.width;
    this.height = lengthWidthHeight.height;
  }
  volume() {
    return `Volume ${this.length * this.width * this.height}`;
  };
  surfaceArea () {
    return `Surface Area: ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
  };
}
  
  
  const myCube = new CuboidMaker({
    length: 10, 
    width: 10, 
    height:10
  });
  
  const myCube2 = new CuboidMaker({
    length: 100, 
    width: 150, 
    height:110
  });

  const myCube3 = new CuboidMaker({
    length: 4, 
    width: 5, 
    height:5
  });

  console.log(myCube.volume()); // 100
console.log(myCube.surfaceArea()); // 130
console.log(myCube2.volume()); // 100
console.log(myCube2.surfaceArea());
console.log(myCube3.volume()); // 100
console.log(myCube3.surfaceArea());














// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.