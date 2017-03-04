import { Directive, ElementRef } from '@angular/core';

const AUTH: Object = {
    client_id: '1761579497412011',
    redirect_uri: 'http://localhost:3010/auth?type=facebook',
    response_type: 'code',
    scope: 'email,user_friends'
};

@Directive({

    selector: '[facebook-auth]'

})

export class FacebookAuthDirective {

    constructor(el: ElementRef){

        el.nativeElement.href = this.createSrting();

    }

    private createSrting(): string {

        let curString = 'https://www.facebook.com/v2.8/dialog/oauth?';

        for(let key in AUTH){

            curString += `${ key }=${ AUTH[ key ] }&`;

        }

        return curString;

    }

}
