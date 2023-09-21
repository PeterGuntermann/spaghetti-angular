import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CleanModule } from "./clean/clean.module";
import { DirtyModule } from "./dirty/dirty.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, DirtyModule, CleanModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
