import { Component, Input }   from '@angular/core';

import { MAINMENUTEXTS }      from '../texts/main.menu.texts'

@Component({
    selector: 'main-menu',
    templateUrl: 'app/templates/main.menu.component.html',
    styleUrls: [ 'app/css/main.menu.component.css' ]
})

export class MainMenuComponent {

    @Input() data:Object;

    public content = MAINMENUTEXTS;




}
