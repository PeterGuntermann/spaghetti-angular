import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CleanComponent } from "./clean.component";

@NgModule({
    declarations: [CleanComponent],
    exports: [CleanComponent],
    imports: [CommonModule],
})
export class CleanModule {}
