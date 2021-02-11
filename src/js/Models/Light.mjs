export class Light {
  element
  line
  index
  
  init(line, index) {
    this.line = line
    this.index = index
    this.build()
    return this
  }
  
  create() {
    return this.element
  }
  
  build() {
    this.element = this.lightBox()
    this.element.append(this.lightElement())
  }
  
  lightElement() {
    let element = document.createElement('div')
    element.id = 'line' + this.line + 'lightElement' + this.index
    element.className = 'lightElement'
    
    return element
  }
  
  lightBox() {
    let element = document.createElement('div')
    element.id = 'line' + this.line + 'lightBox' + this.index
    element.className = 'lightBox'
    
    return element
  }
}
