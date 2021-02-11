import {Light} from '../Models/Light.js'
import {Line} from '../Models/Line.js'

export class LightController {
  indexes = 50
  lines = 50
  
  init() {
    this.build()
  }
  
  build() {
    for (let currentLine = 0; currentLine < this.lines; currentLine++) {
      let lineElement = this.addLine(currentLine)
      for (let currentIndex = 0; currentIndex < this.indexes; currentIndex++) {
        this.addLight(lineElement, currentLine, currentIndex)
      }
    }
  }
  
  addLine(currentLine) {
    let line = new Line
    let lineElement = line.init(currentLine).create()
    
    document.getElementById('app').append(lineElement)
    
    return lineElement
  }
  
  addLight(lineElement, currentLine, currentIndex)
  {
    const light = new Light
  
    lineElement.append(
      light
        .init(currentLine, currentIndex)
        .create()
    )
  }
}
