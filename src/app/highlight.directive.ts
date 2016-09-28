import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core'; 

@Directive({
  selector: '[apphighlight]'
})
export class HighlightDirective {

  @Input('apphighlight')
  backgroundColor:string;

  @Input('color')
  textColor:string;

  currentColor:string = "#face00"

  constructor(private el:ElementRef, private renderer:Renderer) { 
    
  }

  highlight(color:string){
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color)

    if(this.textColor)
      this.renderer.setElementStyle(this.el.nativeElement, 'color', this.textColor)
    
    if(this.textColor && color == null)
      this.renderer.setElementStyle(this.el.nativeElement, 'color', color)

  }

  @HostListener('mouseenter') onMoustEnter(){

    this.highlight(this.backgroundColor || this.currentColor)

  }

  @HostListener('mouseleave') onMoustELeave(){
    console.log('check')
    this.highlight(null)
  }

}
