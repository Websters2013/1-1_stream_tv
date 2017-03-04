import { NgModule }                 from "@angular/core";

import { SharedModule }             from "./shared.module";
import { DashboardRoutingModule }   from "./dashboard.routing.module";

import { DashboardComponent }       from "../components/dashboard.component";
import { MainMenuComponent }        from "../components/main.menu.component";
import { UserPanelComponent }       from "../components/user.panel.component";
import { SubMenuComponent }         from "../components/sub.menu.component";
import { MobileMenuComponent }      from "../components/mobile.menu.component";

import { MeChannelService }         from "../services/me.channel.service";
// import { PermissionsService }       from "../services/permissions.service";
// import { UsersService }             from "../services/users.service";
// import { WebSocketService }         from "../services/websocket.service";

import { InnerHtmlDirective }       from "../directives/innerhtml.directive";


@NgModule({
    imports: [
        DashboardRoutingModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        MainMenuComponent,
        UserPanelComponent,
        SubMenuComponent,
        MobileMenuComponent,

        InnerHtmlDirective
    ],
    providers: [
        MeChannelService,
        // PermissionsService,
        // UsersService,
        // WebSocketService
    ]
})
export class DashboardModule {
}