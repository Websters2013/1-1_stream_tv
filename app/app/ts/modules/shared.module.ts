import { CommonModule }            from "@angular/common";
import { NgModule }                from "@angular/core";
import { RouterModule }            from "@angular/router";
import { FormsModule }             from "@angular/forms";

import { PerfectScrollDirective }  from "../directives/perfect.scroll.directive";

import {KeysPipe} from "../pipes/filter.select.pipe";
import {TimePipe} from "../pipes/time.pipe";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        PerfectScrollDirective,

        KeysPipe,
        TimePipe
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,

        PerfectScrollDirective,

        KeysPipe,
        TimePipe
    ]
})

export class SharedModule {}