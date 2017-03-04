import {Component, OnDestroy, OnInit, ElementRef} from '@angular/core';
import { SynchronizeComponent } from "./synchronize.component";
import { DataBindingService } from "../services/data.binding.service";
import {Router} from "@angular/router";

@Component({
    selector: 'trends',
    templateUrl: 'app/templates/trends.component.html',
    styleUrls: ['app/css/trends.component.css']
})
export class TrendsComponent extends SynchronizeComponent implements OnDestroy, OnInit{

    public className: string;

    constructor(
        protected dataBindingService:DataBindingService,
        private router:Router,
        private elementRef: ElementRef
    ){

        super( dataBindingService );

    }

    public leave(e):void {

        console.log("leave", e);
        
        console.log(this.elementRef.nativeElement);

        this.className = "leave-top"

    }

    public enter(e):void {

        console.log("enter", e);

        this.className = "enter-top"
    }

    public ngOnDestroy():void {
        this.unsubscribeData();

        console.log(200);
    }

    public ngOnInit():void {
        this.updateData( this.dataBindingService.getData() );

        console.log(100);

    }

}