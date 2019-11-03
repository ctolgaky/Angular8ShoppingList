import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appdropdown]'
})
export class DropDownDirective{
@HostBinding('class.open') isOpen = false;
    @HostListener('click') toggle(){

        this.isOpen = !this.isOpen;
    }

}