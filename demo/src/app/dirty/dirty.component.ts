import { HttpClient } from "@angular/common/http";
import { Component, TemplateRef, ViewChild } from "@angular/core";

interface SomeTypeNotInAnotherFile {
    bla: string;
    foo: number;
}

type TypeA = {
    uuu: string;
};

const someConst = 42;
const someOtherConst = 41;

type TypeB = {
    ccc: string;
};

// Component that starts very late in the file, lots of scrolling

@Component({
    selector: "app-dirty",
    templateUrl: "./dirty.component.html",
    styleUrls: ["./dirty.component.scss"],
})
export class DirtyComponent {
    public methodBeforeProperties() {
        console.log("stuff");
        this.nestedMethod();
    }

    @ViewChild("myContent", { static: true }) myContent: TemplateRef<any>;

    title = "demo";

    // strange or redundant typing
    crypticVariable: number | null | undefined | any;
    anotherCryptic: string;

    constructor(private http: HttpClient) {
        // massive constructor logic

        this.crypticVariable = this.http.get("http://my.url");
        this.anotherCryptic = `${this.crypticVariable}`;
    }

    public method(unusedParam: any) {
        // Functionality that should be in a service, e.g. data fetching
        this.http.get("http://my.url");
        this.methodBeforeProperties();
    }

    // lots of datagrid handling, e.g. AG-grid

    public nestedMethod() {
        this.nestedMethodWithCrypt();
    }

    // NgRx stuff that nobody understands

    private nestedMethodWithCrypt() {
        // generic functionality that should be in some kind of util, e.g. Forms validators
    }
}
