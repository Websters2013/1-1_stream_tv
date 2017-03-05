import { CommonModule }            from "@angular/common";
import { NgModule }                from "@angular/core";
import { RouterModule }            from "@angular/router";
import { FormsModule }             from "@angular/forms";

import { PerfectScrollDirective }  from "../directives/perfect.scroll.directive";

import {TimePipe} from "../pipes/time.pipe";
import {SafePipe} from "../pipes/safe.pipe";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        PerfectScrollDirective,

        TimePipe,
        SafePipe
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,

        PerfectScrollDirective,

        TimePipe,
        SafePipe
    ]
})

export class SharedModule {}