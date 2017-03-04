import { NgModule }                   from "@angular/core";
import { TrendsComponent }           from "../components/trends.component";
import { TrendsRoutingModule }  from "./trends.routing.module";
import { SharedModule }          from "./shared.module";

@NgModule({
    imports: [
        TrendsRoutingModule,
        SharedModule
    ],
    declarations: [
        TrendsComponent
    ]
})
export class TrendsModule {
}