import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";
import { ChannelComponent } from "../components/channel.component";


export const routes: Routes = [
    {
        path: '',
        component: ChannelComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class ChannelRoutingModule {}