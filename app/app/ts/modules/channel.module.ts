import { NgModule }                   from "@angular/core";
import { ChannelComponent }           from "../components/channel.component";
import { ChannelRoutingModule }  from "./channel.routing.module";
import { SharedModule }          from "./shared.module";
import {VideoChannelService} from "../services/video.channel.service";

@NgModule({
    imports: [
        ChannelRoutingModule,
        SharedModule
    ],
    declarations: [
        ChannelComponent
    ],
    providers: [
        VideoChannelService
    ]
})
export class ChannelModule {
}