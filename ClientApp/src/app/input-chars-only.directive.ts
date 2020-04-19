import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputCharsOnly]'
})
export class InputCharsOnlyDirective {

  constructor() { }

  @HostListener ('keydown', ['$event'])
  confirmFirst(event: KeyboardEvent) {
    if (this.regexCheck(event.key)) {
      return true;
    }
    else {
      return false;
    }
  }

  private regexCheck(str: string) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }

}
