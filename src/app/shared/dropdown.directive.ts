import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  clicked = false;
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2){}
  
  ngOnInit(): void {
    
  }

  // @HostListener('click') toggleDropdown(eventData: Event){
  //   // this.renderer.setStyle(this.elementRef.nativeElement, 'class', 'open');
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}