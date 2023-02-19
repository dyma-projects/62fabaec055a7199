import {
  Directive,
  ElementRef,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit{
  @Input() color: string;

  constructor(private el: ElementRef<HTMLParagraphElement>) {
  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  ngOnChanges(changes: SimpleChanges){
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  
  
}
