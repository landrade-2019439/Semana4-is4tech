import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const inputValue: string = this.el.nativeElement.value;
    if (!isNaN(Number(inputValue))) {
      const formattedValue: string = Number(inputValue).toLocaleString();
      this.el.nativeElement.value = formattedValue;
    }
  }
}
