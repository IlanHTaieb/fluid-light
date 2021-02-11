export class Light {
  element
  line
  index
  
  init(line, index) {
    this.line = line
    this.index = index
    this.build()
    this.addEvents()
    return this
  }
  
  create() {
    return this.element
  }
  
  build() {
    this.element = this.lightBox()
    this.element.append(this.lightElement())
  }
  
  addEvents() {
    this.element.addEventListener('mouseenter', (event) => {
      event.target.firstElementChild.className += ' active'
    })
    
    this.element.addEventListener('mouseout', (event) => {
      event.target.firstElementChild.className = 'lightElement'
    })
  }
  
  lightBox() {
    let element = document.createElement('div')
    element.id = 'line' + this.line + 'lightBox' + this.index
    element.className = 'lightBox'
    
    return element
  }
  
  lightElement() {
    let element = document.createElement('div')
    element.id = 'line' + this.line + 'lightElement' + this.index
    element.className = 'lightElement'
    
    return element
  }
}
