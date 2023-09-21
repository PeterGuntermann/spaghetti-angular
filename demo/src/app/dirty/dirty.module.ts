import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { DirtyComponent } from "./dirty.component";

@NgModule({
    declarations: [DirtyComponent],
    imports: [CommonModule, AgGridModule, TooltipModule],
    exports: [DirtyComponent],
})
export class DirtyModule {}
