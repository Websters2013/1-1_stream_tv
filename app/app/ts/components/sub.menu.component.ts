import { Component, Input }  from '@angular/core';

import { SUBMENUTEXTS }      from "../texts/sub.menu.texts";


@Component({
    selector: 'sub-menu',
    templateUrl: 'app/templates/sub.menu.component.html',
    styleUrls: [ 'app/css/sub.menu.component.css' ]
})
export class SubMenuComponent {
    @Input() public data:Object;

    public content: Object = SUBMENUTEXTS;

}
