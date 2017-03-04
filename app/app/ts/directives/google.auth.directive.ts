import { Directive, ElementRef }    from '@angular/core';

const AUTH: Object = {
    response_type: 'code',
    access_type: 'offline',
    approval_prompt: 'force',
    client_id: '881743790446-k0ca1mevnv4atgtcm36r8fttvgi41fc3.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3010/auth',
    scope: 'https://www.googleapis.com/auth/userinfo.email'
};
// const AUTH: Object = {
//     response_type: 'code',
//     access_type: 'offline',
//     approval_prompt: 'force',
//     client_id: '881743790446-k0ca1mevnv4atgtcm36r8fttvgi41fc3.apps.googleusercontent.com',
//     redirect_uri: 'http://diabet.websters.com.ua',
//     scope: 'https://www.googleapis.com/auth/userinfo.email'
// };

@Directive({

    selector: '[google-auth]'

})

export class GoogleAuthDirective {

    constructor(el: ElementRef){

        el.nativeElement.href = this.createSrting();

    }

    private createSrting(): string {

        let curString = 'https://accounts.google.com/o/oauth2/auth?';

        for( let key in AUTH ){

            curString += `${ key }=${ AUTH[ key ] }&`;

        }

        return curString;

    }

}
