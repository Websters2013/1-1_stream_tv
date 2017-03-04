import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";

import { DashboardComponent }            from "../components/dashboard.component";

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'new',
                loadChildren: 'app/js/modules/trends.module#TrendsModule'
            },
            {
                path: 'friends',
                loadChildren: 'app/js/modules/trends.module#TrendsModule'
            },
            {
                path: 'popular',
                loadChildren: 'app/js/modules/trends.module#TrendsModule'
            },
            {
                path: 'one_plus_one',
                loadChildren: 'app/js/modules/channel.module#ChannelModule'
            },
            {
                path: 'two_plus_two',
                loadChildren: 'app/js/modules/channel.module#ChannelModule'
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