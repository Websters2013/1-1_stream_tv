import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";
import {PatientsComponent} from "../components/patients.component";


export const routes: Routes = [
    {
        path: '',
        component: PatientsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class PatientsRoutingModule {}