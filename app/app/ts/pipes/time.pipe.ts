import {Pipe, PipeTransform} from "@angular/core";

@Pipe( {name: 'time'} )

export class TimePipe implements PipeTransform {

    transform( timestamp: number, isDateTime: boolean ) : string {

        let today = new Date(),
            yesterday = new Date();

        var d = new Date( timestamp * 1000 ),
            yyyy = d.getFullYear(),
            mm = ( '0' + ( d.getMonth() + 1 ) ).slice( -2 ),
            dd = ( '0' + d.getDate()).slice( -2 ),
            hh = d.getHours(),
            h = hh,
            min = ( '0' + d.getMinutes() ).slice( -2 ),
            time: any;

        time = { year: yyyy, month: mm, day: dd, hours: h, minutes: min };

        yesterday.setDate( today.getDate()-1 );

        if ( isDateTime ) {
            console.log(time.year + '-' +  time.month + '-' + time.day)
            return time.year + '-' +  time.month + '-' + time.day;
        }

        if ( ( today.getDate() == time.day ) && ( ( today.getMonth() + 1 ) == time.month ) && (today.getFullYear() == time.year ) ) {
            return time.hours + ':' +  time.minutes ;
        } else {
            if ( ( yesterday.getDate() == time.day ) && ( ( yesterday.getMonth() + 1 ) == time.month ) && ( yesterday.getFullYear() == time.year ) ) {
                return 'Вчера' ;
            }
        }

        return time.day + '-' +  time.month + '-' + time.year;
    }
}
