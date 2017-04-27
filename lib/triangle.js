"use strict"

/**
* Creación de paquete npm - Triangle
*
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5-triangle
*
* Equipo: carlos-david
*
* Creación de un paquete npm con el código de la clase "Triangle".
*
* Clase hija de Shapes
*/

let Shapes = require('@ull-carlos-david/ull-shape')

class Triangle extends Shapes {
  constructor(options) {
      Shapes.Shapes.Triangle = Triangle;
      super(options)
      this.width = options.width;
      this.height = options.height;
    }

  /**
  * La función getArea calcula el área de las figuras geometricas
  * @return retorna el área de la figura
  */

  getArea() {
     return 0.5 * this.width * this.height;
   }
}


module.exports = Triangle;
