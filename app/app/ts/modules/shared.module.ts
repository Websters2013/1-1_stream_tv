import { CommonModule }            from "@angular/common";
import { NgModule }                from "@angular/core";
import { RouterModule }            from "@angular/router";
import { FormsModule }             from "@angular/forms";

import { PerfectScrollDirective }  from "../directives/perfect.scroll.directive";

import {KeysPipe} from "../pipes/filter.select.pipe";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        PerfectScrollDirective,

        KeysPipe
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,

        PerfectScrollDirective,

        KeysPipe
    ]
})

export class SharedModule {}