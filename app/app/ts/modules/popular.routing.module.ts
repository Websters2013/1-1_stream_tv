import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";
import { PopularComponent } from "../components/popular.component";


export const routes: Routes = [
    {
        path: '',
        component: PopularComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class PopularRoutingModule {}