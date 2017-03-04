import { Directive, ElementRef, Input } from '@angular/core';

@Directive( { selector: '[innerHTML]'} )
export class InnerHtmlDirective {
    @Input( 'innerHTML' ) html: string;

    constructor(private el: ElementRef) {}

    public ngOnInit(){
        this.el.nativeElement.innerHTML = this.html;
    }
}
