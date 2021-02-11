export class Line {
  index
  element = document.createElement('div')
  
  init(index)
  {
    this.index = index
    this.configure()
    return this
  }
  
  create()
  {
      return this.element
  }
  
  configure() {
    this.element.id = 'line' + this.index
    this.element.className = 'line'
  }
}
