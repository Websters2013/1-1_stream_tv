import { OnInit, DoCheck, OnDestroy }  from '@angular/core';
import { DataBindingService }          from "../services/data.binding.service";
import { Subscription }                from 'rxjs/Subscription';


export class SynchronizeComponent implements OnInit, DoCheck, OnDestroy {

    public data:Object = {};
    public dataSubscription:Subscription;

    constructor( protected dataBindingService:DataBindingService ){
        this.subscribeData();
    }


    private synchronizeData():void {

        this.data[ 'timestamp' ] = Date.now();
        this.dataBindingService.setData( this.data );

    }

    private subscribeData():void {
        this.dataSubscription = this.dataBindingService.data.subscribe( data => {

            if( data[ 'timestamp' ] != this.data[ 'timestamp' ] ){
                this.updateData( data );
            }

        });
    }


    protected unsubscribeData():void {
        if( this.dataSubscription ){
            this.dataSubscription.unsubscribe();
        }
    }

    protected updateData( data:Object ):void{

        for( let key in this.data) {
            delete this.data[ key ]
        }

        for( let key in data) {
            this.data[ key ] = data[ key ];
        }

    }


    public ngOnDestroy():void{
        this.unsubscribeData();
    }

    public ngDoCheck():void {
        if( this.data[ 'changed' ] ){
            this.data[ 'changed' ] = false;
            this.synchronizeData();
        }
    }

    public ngOnInit():void {

        this.updateData( this.dataBindingService.getData() );

    }

}