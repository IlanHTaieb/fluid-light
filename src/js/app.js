import * as $ from 'jquery'
import {Light} from './Models/Light'
import {Line} from './Models/Line'

const indexes = 50
const lines = 50

const primaryColor = '#000000'
const activeColor = '#07ee41'

for (let currentLine = 0; currentLine < lines; currentLine++) {
  let line = new Line
  
  let lineElement = line
    .init(currentLine)
    .create()
  
  $(lineElement)
    .css('display', 'flex')
    .css('align-items', 'center')
  
  $('#app').append(lineElement)
  for (let currentIndex = 0; currentIndex < indexes; currentIndex++) {
    const light = new Light
    
    lineElement.append(
      light
        .init(currentLine, currentIndex)
        .create()
    )
  }
}

$('.lightBox')
  .css('width', '40px')
  .css('height', '40px')
  .css('display', 'flex')
  .css('justify-content', 'center')
  .css('align-items', 'center')
  .hover(
    function () {
      $(this)
        .children()
        .css('width', '20px')
        .css('height', '20px')
        .css('background', activeColor)
        .css('transition', 'none')
    },
    function () {
      $(this)
        .children()
        .css('transition', 'background 3s, width 1s, height 1s')
        .css('width', '10px')
        .css('height', '10px')
        .css('background', primaryColor)
    }
  )

$('.lightElement')
  .css('width', '10px')
  .css('height', '10px')
  .css('borderRadius', '50%')
  .css('background', primaryColor)
