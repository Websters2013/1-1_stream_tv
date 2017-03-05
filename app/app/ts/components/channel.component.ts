import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideoChannelService} from "../services/video.channel.service";
import {Subscription} from "rxjs";
import {SynchronizeComponent} from "./synchronize.component";
import {DataBindingService} from "../services/data.binding.service";
import {Router} from "@angular/router";

@Component({
    selector: 'channel',
    templateUrl: 'app/templates/channel.component.html',
    styleUrls: ['app/css/channel.component.css']
})
export class ChannelComponent extends  SynchronizeComponent implements OnDestroy, OnInit{

    private videoSubscribed:boolean = false;
    private videoDataSubscription: Subscription;
    private videoSubscription: Subscription;

    constructor( protected dataBindingService:DataBindingService,
                 private router:Router,
                 private videoChannelService:VideoChannelService ){

        super( dataBindingService );



    }

    private subscribeVideoChannel():void{

        this.videoDataSubscription = this.videoChannelService.observableData.subscribe( ( data:Object ) => {

            console.log(data);
            
            this.data[ 'video' ] = data[ 'response' ];

            this.data[ 'changed' ] = true;
        } );

        this.videoSubscription = this.videoChannelService.subscribed.subscribe( ( data:boolean ) => {
            this.videoSubscribed = data;

            if( this.router.url.indexOf( 'one_plus_one' ) >= 0 ) {
                this.videoChannelService.send( { action:'online',name: 'one_plus_one', timestamp: Math.floor( Date.now() / 1000 ) } );
            }
            if( this.router.url.indexOf( 'two_plus_two' ) >= 0 ) {
                this.videoChannelService.send( { action:'online',name: 'two_plus_two', timestamp: Math.floor( Date.now() / 1000 ) } );
            }
            // if( this.router.url.indexOf( 'friends' ) >= 0 ) {
            //     this.trendsChannelService.send( { action:'friends' } );
            // }
            // if( this.router.url.indexOf( 'popular' ) >= 0 ) {
            //     this.trendsChannelService.send( { action:'popular' } );
            // }

        } );
    }

    public ngOnDestroy():void {
        this.unsubscribeData();
        this.unsubscribeVideoChannel();
        delete this.data[ 'video' ];
        this.data[ 'changed' ] = true;

    }

    public ngOnInit():void {
        this.updateData( this.dataBindingService.getData() );

        this.subscribeVideoChannel();


    }

    private unsubscribeVideoChannel():void{

        if ( this.videoDataSubscription ){

            this.videoDataSubscription.unsubscribe();

        }

        if ( this.videoSubscription ){

            this.videoSubscription.unsubscribe();

        }

        this.videoChannelService.unsubscribe();
        this.videoSubscribed = false;

    }

}