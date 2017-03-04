import {Component, OnDestroy, OnInit, ElementRef} from '@angular/core';
import { SynchronizeComponent } from "./synchronize.component";
import { DataBindingService } from "../services/data.binding.service";
import {Router} from "@angular/router";
import {TrendsChannelService} from "../services/trends.channel.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'trends',
    templateUrl: 'app/templates/trends.component.html',
    styleUrls: ['app/css/trends.component.css']
})
export class TrendsComponent extends SynchronizeComponent implements OnDestroy, OnInit{

    public className: string;
    public title:string;
    private trendsSubscribed:boolean = false;
    private trendsDataSubscription: Subscription;
    private trendsSubscription: Subscription;

    constructor(
        protected dataBindingService:DataBindingService,
        private router:Router,
        private trendsChannelService:TrendsChannelService
    ){

        super( dataBindingService );

        if( router.url.indexOf( 'new' ) >= 0 ) {
            this.title = 'Новинки';
        }
        if( router.url.indexOf( 'popular' ) >= 0 ) {
            this.title = 'Популярное';
        }
        if( router.url.indexOf( 'friends' ) >= 0 ) {
            this.title = 'Друзья просмотрели';
        }

    }

    public ngOnDestroy():void {
        this.unsubscribeData();
        this.unsubscribeTrandsChanel();
        delete this.data[ 'trends' ];
    }

    public ngOnInit():void {
        this.updateData( this.dataBindingService.getData() );

        this.subscribeTrandsChanel();

        this.trendsChannelService.start();

    }

    private subscribeTrandsChanel():void{

        this.trendsDataSubscription = this.trendsChannelService.observableData.subscribe( ( data:Object ) => {

            this.data[ 'trends' ] = data[ 'response' ];

        } );

        this.trendsSubscription = this.trendsChannelService.subscribed.subscribe( ( data:boolean ) => {
            this.trendsSubscribed = data;
            
            if( this.router.url.indexOf( 'new' ) >= 0 ) {
                this.trendsChannelService.send( { action:'new', timestamp: Math.floor( Date.now() / 1000 ) } );
            }
            if( this.router.url.indexOf( 'friends' ) >= 0 ) {
                this.trendsChannelService.send( { action:'friends' } );
            }
            if( this.router.url.indexOf( 'popular' ) >= 0 ) {
                this.trendsChannelService.send( { action:'popular' } );
            }

        } );
    }

    private unsubscribeTrandsChanel():void{

        if ( this.trendsDataSubscription ){

            this.trendsDataSubscription.unsubscribe();

        }

        if ( this.trendsSubscription ){

            this.trendsSubscription.unsubscribe();

        }

        this.trendsChannelService.unsubscribe();
        this.trendsSubscribed = false;

    }

}