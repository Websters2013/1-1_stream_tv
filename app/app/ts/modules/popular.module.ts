import { NgModule }                   from "@angular/core";
import { PopularComponent }           from "../components/popular.component";
import { PopularRoutingModule }  from "./popular.routing.module";
import { SharedModule }          from "./shared.module";

@NgModule({
    imports: [
        PopularRoutingModule,
        SharedModule
    ],
    declarations: [
        PopularComponent
    ]
})
export class PopularModule {
}