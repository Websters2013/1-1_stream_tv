import { NgModule }                   from "@angular/core";
import { TrendsComponent }           from "../components/trends.component";
import { TrendsRoutingModule }  from "./trends.routing.module";
import { SharedModule }          from "./shared.module";
import {TrendsChannelService} from "../services/trends.channel.service";

@NgModule({
    imports: [
        TrendsRoutingModule,
        SharedModule
    ],
    declarations: [
        TrendsComponent
    ],
    providers: [
        TrendsChannelService
    ]
})
export class TrendsModule {
}