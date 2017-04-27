"use strict"

/**
* Creación de paquete npm - Shapes
*
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5
*
* Equipo: carlos-david
*
* Creación de un paquete npm con el código de la clase "Shapes" para el cálculo de área.
*
* Clase padre de las distintas figuras geométricas y provee el método para hallar las áreas
*/

let Shape = require('@ull-carlos-david/ull-shape')

class Triangle extends Shapes {
  constructor(options) {

      super(shapes, options)
      this.width = options.width;
      this.height = options.height;
    }

  /**
  * La función getArea calcula el área de las figuras geometricas
  * @return {number} retorna el área de la figura
  */

  getArea() {
     return 0.5 * this.width * this.height;
   }
}

Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
