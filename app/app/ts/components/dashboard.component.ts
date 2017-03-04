import { Component, OnInit, OnDestroy }                                               from '@angular/core';
import { NavigationEnd, NavigationStart, NavigationCancel, NavigationError, Router }  from "@angular/router";

import { MainPreloaderComponent }                                                     from "./main.preloader.component";

import { MeChannelService }                                                           from "../services/me.channel.service";
import { DataBindingService }                                                         from "../services/data.binding.service";

import { Subscription }                                                               from "rxjs";

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css'],
    host: {
        '(window:resize)': 'this.onResize($event)',
        '(swipeleft)':     'this.swipe( $event.type )',
        '(click)':         'this.closeMenu()'
    }
})
export class DashboardComponent extends MainPreloaderComponent implements OnInit, OnDestroy {

    private meSubscribed:boolean = false;
    private routerSubscription: Subscription;
    private meDataSubscription: Subscription;
    private meSubscription: Subscription;

    public loading:boolean = false;


    constructor(
        protected dataBindingService:DataBindingService,
        private meChannelService:MeChannelService,
        private router: Router){

        super( dataBindingService );

        this.subscribeRouter();

    }


    private checkToken():void {
        if( this.data[ 'auth_token' ] ){

            this.preloaderHide();

        } else {

            this.router.navigate( [ 'auth' ] );

        }

    }

    private checkWindow():void {


        let windowWidth = window.innerWidth;

        if ( windowWidth >= 1200 ) {

            this.data[ 'view' ] = 2

        } else if ( windowWidth >= 768 ) {

            this.data[ 'view' ] = 1

        } else if ( windowWidth < 768 ) {

            this.data[ 'view' ] = 0

        }

        this.data[ 'changed' ] = true;

    }

    private setActiveMenu( url:string ):void{

        let pathItems:string[] = url.substr( 1 ).split('/'),
            activeMenu = `/${pathItems[ 0 ]}`,
            activeSubMenu = `/${pathItems[ 0 ]}/${pathItems[ 1 ]}`,
            changed = false;


        if( this.data[ 'active_menu' ] != activeMenu ){
            this.data[ 'active_menu' ] = `/${pathItems[ 0 ]}`;
            changed = true;
        }

        if( this.data[ 'active_sub_menu' ] != activeSubMenu ){
            this.data[ 'active_sub_menu' ] = `/${pathItems[ 0 ]}/${pathItems[ 1 ]}`;
            changed = true;
        }

        if( changed ) {
            this.data[ 'changed' ] = true;
        }

    }

    private subscribeMeChanel():void{
        let self = this;

        this.meDataSubscription = this.meChannelService.observableData.subscribe( ( data:Object ) => {

            switch ( data[ 'message_type' ] ){
                case 'logout':
                    localStorage.removeItem( 'auth_token' );
                    this.router.navigate( ['/auth'] );
                    break;
                default:
                    // this.setDataToMe( data[ 'response' ], data[ 'message_type' ] );
                    break;
            }
        } );

        this.meSubscription = this.meChannelService.subscribed.subscribe( ( data:boolean ) => {
            self.meSubscribed = data;
            this.data[ 'me' ][ 'subscribed' ] = data;
        } );
    }

    private subscribeRouter():void{

        this.routerSubscription = this.router.events.subscribe( val => {

            if( val instanceof NavigationEnd ){

                this.setActiveMenu( val.urlAfterRedirects );
                this.loading = false;

            }

            if (event instanceof NavigationStart) {

                this.loading = true;

            }

            if (event instanceof NavigationCancel) {

                this.loading = false;

            }

            if (event instanceof NavigationError) {

                this.loading = false;

            }

        });
    }

    private unsubscribeRouter():void{

        if ( this.routerSubscription ){

            this.routerSubscription.unsubscribe();

        }

    }


    
    public closeMenu():void {

        if ( this.data[ 'popups' ][ 'user_menu' ] ) {

            this.data[ 'popups' ][ 'user_menu' ] = false;
            this.data[ 'changed' ] = true;

        }

        if ( this.data[ 'popups' ][ 'mobile_main_menu' ] ) {

            this.data[ 'popups' ][ 'mobile_main_menu' ] = false;
            this.data[ 'popups' ][ 'mobile_sub_menu' ] = false;
            this.data[ 'changed' ] = true;

        }

        if ( this.data[ 'popups' ][ 'filter_select' ] ) {

            this.data[ 'popups' ][ 'filter_select' ] = false;
            this.data[ 'changed' ] = true;

        }

    }
    
    public dashboardLogout():void {

        this.meChannelService.send( { action: 'logout' } );
    }

    public ngOnDestroy(){

        this.unsubscribeRouter();

    }

    public ngOnInit():void {

        this.updateData( this.dataBindingService.getData() );

        this.checkToken();
        this.checkWindow();
        this.subscribeMeChanel();

    }

    public onResize():void {

        this.checkWindow();

    }
    
    public swipe(){

    }


}