import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirtyComponent } from "./dirty.component";

@NgModule({
    declarations: [DirtyComponent],
    imports: [CommonModule],
    exports: [DirtyComponent],
})
export class DirtyModule {}
