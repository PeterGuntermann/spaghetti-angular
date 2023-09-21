import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { DirtyComponent } from "./dirty.component";

@NgModule({
    declarations: [DirtyComponent],
    imports: [CommonModule, AgGridModule],
    exports: [DirtyComponent],
})
export class DirtyModule {}
