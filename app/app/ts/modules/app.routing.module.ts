import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";
import { LoginComponent } from "../components/login.component";

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'trends',
        loadChildren: 'app/js/modules/dashboard.module#DashboardModule'
    },
    {
        path: 'auth',
        loadChildren: 'app/js/modules/auth.module#AuthModule'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}