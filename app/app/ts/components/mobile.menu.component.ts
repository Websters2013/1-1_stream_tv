import {Component, Input, trigger, transition, style, animate}   from '@angular/core';

import {MAINMENUTEXTS}        from "../texts/main.menu.texts";
import {SUBMENUTEXTS}         from "../texts/sub.menu.texts";

import {Menu}                 from "../things/menu";

@Component({
    selector: 'mobile-menu',
    templateUrl: 'app/templates/mobile.menu.component.html',
    styleUrls: [ 'app/css/mobile.menu.component.css' ],
    animations: [
        trigger( 'menuVisibleChange', [
                transition( 'void => *', [
                    style( { transform: 'translateX(-100%)' } ),
                    animate( '500ms cubic-bezier(.22,.81,.01,.99)', style( { transform: 'translateX(0)'} ))
                ]),
                transition( '* => void', [
                    style( { transform: 'translateX(0)' } ),
                    animate( '300ms cubic-bezier(.22,.81,.01,.99)', style( { transform: 'translateX(-100%)' } ) )
                ])
            ]
        ),
        trigger( 'subMenuVisibleChange', [
                transition( 'void => *', [
                    style( { transform: 'translateX(-100%)' } ),
                    animate( '300ms ease-in-out', style( { transform: 'translateX(0)'} ))
                ]),
                transition( '* => void', [
                    style( { transform: 'translateX(0)' } ),
                    animate( '300ms ease-in-out', style( { transform: 'translateX(-100%)' } ) )
                ])
            ]
        )
    ]
})

export class MobileMenuComponent {

    @Input() data:Object;

    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    subMenuTitle: string;
    mainMenuVisible: boolean = true;

    content = MAINMENUTEXTS;

    private subMenuItems = SUBMENUTEXTS;

    public hideSubMenu() {

        event.stopPropagation();

        this.data[ 'popups' ][ 'mobile_sub_menu' ] = false;

    }

    public stopPropagation( event:Event ):void {

        event.stopPropagation();

    }

    public showMenu() {

        event.stopPropagation();

        this.data[ 'popups' ][ 'mobile_main_menu' ] = true;

    }

    public showSubMenu( item:Menu ) {

        event.stopPropagation();

        this.subMenuTitle = item[ 'text' ];

        this.data[ 'popups' ][ 'mobile_sub_menu' ] = true;

    }

    public swipe ( action = this.SWIPE_ACTION.RIGHT ):void {

        if ( !this.data[ 'view' ] ) {

            if (action === this.SWIPE_ACTION.LEFT) {

                this.closeMenu()

            }

        }
    }

    private closeMenu() {

        this.data[ 'popups' ][ 'mobile_main_menu' ] = false;
        this.data[ 'popups' ][ 'mobile_sub_menu' ] = false;

    }



}
