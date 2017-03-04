import {NgModule}                   from "@angular/core";
import {PatientsComponent} from "../components/patients.component";
import {PatientsRoutingModule} from "./patients.routing.module";
import {SharedModule} from "./shared.module";

@NgModule({
    imports: [
        PatientsRoutingModule,
        SharedModule
    ],
    declarations: [
        PatientsComponent
    ]
})
export class PatientsModule {
}