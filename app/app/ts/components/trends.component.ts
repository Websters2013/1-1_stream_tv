import {Component, OnDestroy, OnInit} from '@angular/core';
import { SynchronizeComponent } from "./synchronize.component";
import { DataBindingService } from "../services/data.binding.service";
import {Router} from "@angular/router";

@Component({
    selector: 'trends',
    templateUrl: 'app/templates/trends.component.html',
    styleUrls: ['app/css/trends.component.css']
})
export class TrendsComponent extends SynchronizeComponent implements OnDestroy, OnInit{

    constructor(
        protected dataBindingService:DataBindingService,
        private router:Router
    ){

        super( dataBindingService );
        

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