import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideoChannelService} from "../services/video.channel.service";
import {Subscription} from "rxjs";
import {SynchronizeComponent} from "./synchronize.component";
import {DataBindingService} from "../services/data.binding.service";
import {Router} from "@angular/router";
import {ChatChannelService} from "../services/chat.channel.service";

@Component({
    selector: 'channel',
    templateUrl: 'app/templates/channel.component.html',
    styleUrls: ['app/css/channel.component.css']
})
export class ChannelComponent extends  SynchronizeComponent implements OnDestroy, OnInit{

    private videoSubscribed:boolean = false;
    private videoDataSubscription: Subscription;
    private videoSubscription: Subscription;

    public text:string;
    public messages:Object[];

    private chatSubscribed:boolean = false;
    private chatDataSubscription: Subscription;
    private chatSubscription: Subscription;

    constructor( protected dataBindingService:DataBindingService,
                 private router:Router,
                 private videoChannelService:VideoChannelService,
                private chatChannelService:ChatChannelService){

        super( dataBindingService );

        this.subscribeChatChannel();

    }

    private subscribeVideoChannel():void{

        this.videoDataSubscription = this.videoChannelService.observableData.subscribe( ( data:Object ) => {
            
            this.chatChannelService.start( data[ 'response' ]['id'] );

            this.data[ 'video' ] = data[ 'response' ];
            console.log(this.data[ 'video' ]);

            this.data[ 'changed' ] = true;
        } );

        this.videoSubscription = this.videoChannelService.subscribed.subscribe( ( data:boolean ) => {
            this.videoSubscribed = data;

            if( this.router.url.indexOf( 'one_plus_one' ) >= 0 ) {
                this.videoChannelService.send( { action:'online',name: 'one_plus_one', timestamp: Math.floor( Date.now() / 1000 ) } );
            }

        } );
    }

    public ngOnDestroy():void {
        this.unsubscribeData();
        this.unsubscribeVideoChannel();
        this.unsubscribeChatChannel();
        delete this.data[ 'video' ];
        this.data[ 'changed' ] = true;

    }

    public ngOnInit():void {
        this.updateData( this.dataBindingService.getData() );

        this.videoChannelService.start();

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

    public subscribeChatChannel(){
        this.chatDataSubscription = this.chatChannelService.observableData.subscribe( ( data:Object ) => {

            if( data[ 'message_type' ] == 'all' ){
                this.messages = data[ 'response' ]
            }

            if( data[ 'message_type' ] == 'new' ){
                this.messages.push( data[ 'response' ] )
            }

        } );

        this.chatSubscription = this.chatChannelService.subscribed.subscribe( ( data:boolean ) => {
            this.chatSubscribed = data;

        } );
    }

    public unsubscribeChatChannel(){
        if( this.chatDataSubscription ){
            this.chatDataSubscription.unsubscribe();
        }
        if( this.chatSubscription ){
            this.chatSubscription.unsubscribe();
        }
        this.chatChannelService.unsubscribe();
    }

    public submit(){
        this.chatChannelService.send( { action: 'say', text: this.text } );
        this.text = '';
    }

}