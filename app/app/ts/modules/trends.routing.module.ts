import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";
import { TrendsComponent } from "../components/trends.component";


export const routes: Routes = [
    {
        path: '',
        component: TrendsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class TrendsRoutingModule {}