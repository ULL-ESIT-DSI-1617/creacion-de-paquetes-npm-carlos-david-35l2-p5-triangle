'use strict'

let Triangle = require("../lib/triangle");
let Shape = require('@ull-carlos-david/ull-shape');

describe("getArea Triangle", function() {
  it("Se calcula el area del triangulo correctamente", function() {
    let x = new Triangle({ width: 100, height: 100 });
    let result = x.getArea();
     result.should.equal(5000);
  })
});
