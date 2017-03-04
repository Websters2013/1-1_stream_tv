import { AppRoutingModule }    from "./app.routing.module";
import { BrowserModule }       from '@angular/platform-browser';
import { HttpModule }          from "@angular/http";
import { NgModule }            from '@angular/core';
import { SharedModule }        from "./shared.module";

import { AppComponent }        from '../components/app.component';

import { DataBindingService }  from "../services/data.binding.service";
import { WebSocketService }    from "../services/websocket.service";
import {LoginComponent} from "../components/login.component";

@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        WebSocketService,
        DataBindingService
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }
