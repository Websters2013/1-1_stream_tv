import { Component, Input }  from '@angular/core';

import { SUBMENUTEXTS }      from "../texts/sub.menu.texts";

import { Menu }              from "../things/menu";

@Component({
    selector: 'sub-menu',
    templateUrl: 'app/templates/sub.menu.component.html',
    styleUrls: [ 'app/css/sub.menu.component.css' ]
})
export class SubMenuComponent {
    @Input() data:Object;

    content: Object = SUBMENUTEXTS;

}
