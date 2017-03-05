import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(url:string, timestamp:number) {
        let startTime = Math.floor( Date.now() / 1000 - timestamp;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url + "?start=" + startTime + "&amp&autoplay=1");
    }
}