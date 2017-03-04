import {Pipe, PipeTransform} from "@angular/core";

@Pipe( {name: 'keys'} )

export class KeysPipe implements PipeTransform {

    transform( value:Object[], shiftIndexes:number[] ) : any {

        let keys : any[] = [];

        value.forEach( ( item:Object, index:number ) => {

            if ( shiftIndexes.indexOf( index ) < 0 ) {

                keys.push( item )
            }
        });

        return keys;
    }
}
