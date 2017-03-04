import {Component, OnInit, OnDestroy, trigger, style, transition, animate} from '@angular/core';
import {SynchronizeComponent} from "./synchronize.component";
import {DataBindingService} from "../services/data.binding.service";
import {Router} from "@angular/router";
import {WebSocketService} from "../services/websocket.service";


@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: [ 'app/css/app.component.css' ],
    animations: [
        trigger( 'tooltipAnimation', [
                transition( ':enter', [
                    style( { opacity: 0 } ),
                    animate( '200ms', style( { opacity: 1 } ))
                ]),
                transition( ':leave', [
                    style( { opacity: 1 }),
                    animate( '200ms', style( { opacity: 0 } ))
                ])
            ]
        ),
        trigger( 'preloaderAnimation', [
                transition( ':enter', [
                    style( { opacity: 0 } ),
                    animate( '200ms', style( { opacity: 1 } ))
                ]),
                transition( ':leave', [
                    style( { opacity: 1 }),
                    animate( '200ms', style( { opacity: 0 } ))
                ])
            ]
        )
    ]
})
export class AppComponent extends SynchronizeComponent implements OnInit, OnDestroy {

    constructor(
        protected dataBindingService:DataBindingService,
        protected router:Router,
        private webSocketService:WebSocketService ){

        super( dataBindingService );

        this.webSocketService.start();

        this.data = {
            popups: {},
            active_menu: '',
            active_sub_menu: '',
            me: {},
            preloader: {
                visible: true
            },
            tooltip: {
                text: null,
                type: 0
            },
            view: 0,
            changed: true
        };

        this.dataBindingService.setData( this.data );

    }

    public ngOnDestroy():void {
        this.webSocketService.close();
    }

    public ngOnInit():void {
        // console.log(this.dataBindingService.getData());

    }

}
