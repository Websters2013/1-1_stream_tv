import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";

import { DashboardComponent }            from "../components/dashboard.component";

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/js/modules/patients.module#PatientsModule'
            }
        ]
    }
];

@NgModule( {
    imports: [
        RouterModule.forChild(routes)
    ], exports: [
        RouterModule
    ]
} )
export class DashboardRoutingModule {}