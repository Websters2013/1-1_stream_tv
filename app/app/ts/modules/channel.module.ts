import { NgModule }                   from "@angular/core";
import { ChannelComponent }           from "../components/channel.component";
import { ChannelRoutingModule }  from "./channel.routing.module";
import { SharedModule }          from "./shared.module";

@NgModule({
    imports: [
        ChannelRoutingModule,
        SharedModule
    ],
    declarations: [
        ChannelComponent
    ]
})
export class ChannelModule {
}