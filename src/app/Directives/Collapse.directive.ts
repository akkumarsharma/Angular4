import {
    Component,
    Directive,
    Renderer,
    HostListener,
    HostBinding,
    ElementRef,
    NgModule,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Directive({
    selector: "[ccCardHover]"
})
export class CardHoverDirective {
    constructor(private el: ElementRef,private renderer: Renderer){}
   @HostListener('click', ['$event.target']) onMouseEnter() {
    //  //  $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    //   let part = this.el.nativeElement.parentNode.querySelector('.glyphicon-minus');
    //     //this.renderer.setElementStyle(part, 'display', 'block');
    //    console.log(this.el.nativeElement.parentNode);
    if(this.el.nativeElement.querySelector('span').className=="glyphicon glyphicon-minus")
    {
        this.el.nativeElement.querySelector('span').className="glyphicon glyphicon-plus"
    }
    else if(this.el.nativeElement.querySelector('span').className=="glyphicon glyphicon-plus")
    {
       this.el.nativeElement.querySelector('span').className="glyphicon glyphicon-minus" 
    }
   }


}