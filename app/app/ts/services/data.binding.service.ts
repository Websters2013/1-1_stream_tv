import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DataBindingService {

    private innerData:Object;


    public data:Subject<Object> = new Subject();


    private copyObject( obj:Object ):Object{
        let result = {};

        for( let key in obj ){
            result[ key ] = obj[ key ];
        }

        return result;
    }



    public getData():Object {
        return this.copyObject( this.innerData );
    }

    public setData( data:Object ){
        this.innerData = data;

        this.data.next( this.innerData );
    }



}
