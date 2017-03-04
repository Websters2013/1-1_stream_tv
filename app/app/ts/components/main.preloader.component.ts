import { SynchronizeComponent }  from "./synchronize.component";

import { DataBindingService }    from "../services/data.binding.service";

export class MainPreloaderComponent extends SynchronizeComponent {

    constructor( protected dataBindingService:DataBindingService ){

        super( dataBindingService );

    }

    protected preloaderHide():void {

        this.data[ 'preloader' ][ 'visible' ] = false;

    }

    protected preloaderShow( callback:Function = ()=>{} ):void {

        this.data[ 'preloader' ][ 'visible' ] = true;

        window.setTimeout( callback, 150 );

    }

}