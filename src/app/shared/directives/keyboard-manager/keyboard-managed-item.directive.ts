import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appKeyItem]',
})
export class KeyboardManagedItemDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  @Output() focused = new EventEmitter<void>();

  focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
