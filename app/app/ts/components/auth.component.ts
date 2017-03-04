import { Component, OnInit, OnDestroy }  from '@angular/core';
import { Router }                        from "@angular/router";

import { MainPreloaderComponent }        from "./main.preloader.component";

import { AuthChannelService }            from "../services/auth.channel.service";
import { DataBindingService }            from "../services/data.binding.service";

import { Subscription }                  from "rxjs";

@Component({
    selector: 'auth',
    templateUrl: 'app/templates/auth.component.html',
    styleUrls: ['app/css/auth.component.css']
})
export class AuthComponent extends MainPreloaderComponent implements OnInit, OnDestroy {

    private authSubscribed:boolean = false;
    private authDataSubscription: Subscription;
    private authSubscription: Subscription;
    private socialCode:Object;

    constructor(
        protected dataBindingService:DataBindingService,
        private authChannelService:AuthChannelService,
        private router:Router ){

        super( dataBindingService );

        this.subscribeAuthChanel();

    };


    private getToken():void {

        if( this.authSubscribed ){

            this.preloaderShow();
            this.authChannelService.send( { action: this.socialCode[ 'type' ], code: this.socialCode[ 'code' ] } );

        }

    }

    private getCode():void {

        let curString = location.search.substring( 1 ).split( '&' ),
            stringData:Object = {},
            type: string = 'google';

        for( let item of curString ){

            let curItem = item.split( '=' );

            stringData[ curItem[ 0 ] ] = curItem[ 1 ];

        }

        if( stringData[ 'code' ] ){

            if ( stringData[ 'type' ] === 'facebook' ){

                type = stringData[ 'type' ];

            }
            this.socialCode = {};
            this.socialCode[ 'type' ] = type;
            this.socialCode[ 'code' ] = decodeURI( stringData[ 'code' ] ).replace( '%2F', '/' );


            this.getToken();

        }

    }

    private login():void {
        
        if( location.search.indexOf( 'code' ) > 0 ) {

            this.getCode();

        } else {

            let token = window.localStorage.getItem( 'auth_token' );

            if( token ){

                this.setToken( token );

            } else {

                this.preloaderHide();

            }

        }

    }

    private setToken( token:string ):void {

        this.data[ 'auth_token' ] = token;
        this.data[ 'changed' ] = true;

        this.router.navigate( [ '/patients' ] );

    }

    private subscribeAuthChanel():void {

        this.authDataSubscription = this.authChannelService.observableData.subscribe( ( data:Object ) => {

            this.preloaderHide();

            window.localStorage.setItem( 'auth_token', data[ 'token' ] );

            this.setToken( data[ 'token' ] );
            
        } );

        this.authSubscription = this.authChannelService.subscribed.subscribe( ( data:boolean ) => {

            this.authSubscribed = data;

            if( this.socialCode ){

                this.getToken();

            }

        } );
    }

    private unsubscribeAuthChanel():void {
        
        this.authChannelService.unsubscribe();
        this.authDataSubscription.unsubscribe();
        this.authSubscription.unsubscribe();

    }


    public ngOnDestroy():void {
        this.unsubscribeAuthChanel();
        this.unsubscribeData();
    }

    public ngOnInit():void {

        this.updateData( this.dataBindingService.getData() );

        this.login();

    }

}