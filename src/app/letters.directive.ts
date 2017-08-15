import {Directive, ElementRef, Input} from '@angular/core';
import * as Inputmask from 'C:/Users/Raagini kakarla/tktest/node_modules/inputmask';


@Directive({
  selector: '[letters]',
})
export class LettersDirective{


  private onlyLetter = {
    
    words: '([A-z]*//s)*',
    
  };

  constructor(private domelement: ElementRef) {}

  @Input('letters')
  public set stringElement(type: string) {
    Inputmask({regex: this.onlyLetter[type], placeholder: ''})
      .mask(this.domelement.nativeElement);
  }

}