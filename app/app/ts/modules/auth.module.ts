import { AuthRoutingModule }      from "./auth.routing.module";
import { NgModule }               from "@angular/core";
import { SharedModule }           from "./shared.module";


import { AuthComponent }          from "../components/auth.component";

import { FacebookAuthDirective }  from "../directives/facebook.auth.directive";
import { GoogleAuthDirective }    from "../directives/google.auth.directive";

import { AuthChannelService }     from "../services/auth.channel.service";

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    providers: [
        AuthChannelService
    ],
    declarations: [
        AuthComponent,

        FacebookAuthDirective,
        GoogleAuthDirective
    ]
})
export class AuthModule {}