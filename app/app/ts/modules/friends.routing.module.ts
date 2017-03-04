import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";
import { FriendsComponent } from "../components/friends.component";


export const routes: Routes = [
    {
        path: '',
        component: FriendsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class FriendsRoutingModule {}