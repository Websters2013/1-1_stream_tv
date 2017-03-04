import { NgModule }                   from "@angular/core";
import { FriendsComponent }           from "../components/friends.component";
import { FriendsRoutingModule }  from "./friends.routing.module";
import { SharedModule }          from "./shared.module";

@NgModule({
    imports: [
        FriendsRoutingModule,
        SharedModule
    ],
    declarations: [
        FriendsComponent
    ]
})
export class FriendsModule {
}