import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { SynchronizeComponent } from "./synchronize.component";

import { DataBindingService } from "../services/data.binding.service";


@Component({
    selector: 'login',
    template: ''
})
export class LoginComponent extends SynchronizeComponent implements OnInit {

    constructor(
        protected dataBindingService:DataBindingService,
        private router:Router ){

        super( dataBindingService );

    };

    private login():void {

        let token = window.localStorage.getItem( 'auth_token' );


        if( token ){

            this.data[ 'auth_token' ] = token;
            this.data[ 'changed' ] = true;

            this.router.navigate( [ '/patients' ] );

        } else {

            this.router.navigate( [ '/auth' ] );

        }

    }


    public ngOnInit():void {

        this.updateData( this.dataBindingService.getData() );

        this.login();

    }

}