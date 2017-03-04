import { NgModule }                   from "@angular/core";
import { NewComponent }           from "../components/new.component";
import { NewRoutingModule }  from "./new.routing.module";
import { SharedModule }          from "./shared.module";

@NgModule({
    imports: [
        NewRoutingModule,
        SharedModule
    ],
    declarations: [
        NewComponent
    ]
})
export class NewModule {
}