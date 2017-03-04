import { Component, Input, OnInit, Output, EventEmitter, trigger, style, transition, animate }   from '@angular/core';

import { USERMENUTEXTS }                                                                         from '../texts/user.menu.texts'

@Component({
    selector: 'user-panel',
    animations: [
        trigger( 'visibilityChanged', [
                transition( 'void => *', [
                    style( { transform: 'translateX(100%)' } ),
                    animate( '500ms cubic-bezier(.22,.81,.01,.99)', style( { transform: 'translateX(0)'} ) )
                ]),
                transition( '* => void', [
                    style( { transform: 'translateX(0)' }),
                    animate( '100ms', style( { transform: 'translateX(100%)' } ) )
                ])
            ]
        )
    ],
    templateUrl: 'app/templates/user.panel.component.html',
    styleUrls: [ 'app/css/user.panel.component.css' ],
})

export class UserPanelComponent implements OnInit {

    @Input() data:Object;

    @Output() dashboardLogout = new EventEmitter();

    content = USERMENUTEXTS;

    constructor(){}

    public logOut( event:Event ):void {

        this.dashboardLogout.emit( event );

    }

    public ngOnInit(): void {

        this.data[ 'popups' ][ 'user_menu' ] = false;
        this.data[ 'changed' ] = true;

    }

    public openMenu( event:Event ):void {

        event.stopPropagation();

        this.data[ 'popups' ][ 'user_menu' ] = !this.data[ 'popups' ][ 'user_menu' ];
        this.data[ 'changed' ] = true;
    }

    public stopPropagation( event:Event ):void {

        event.stopPropagation();

    }

    public userMenuClick( event:Event, item:Object ) {

        if( item[ 'text' ] == 'Log Out' ) {
            this.logOut( event );
            return false;
        }
    }
}
