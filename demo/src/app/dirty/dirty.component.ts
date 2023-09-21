import { HttpClient } from "@angular/common/http";
import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ColDef } from "ag-grid-community";

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
// inheritance
export class DirtyComponent {
    public methodBeforeProperties() {
        console.log("stuff");
        this.nestedMethod();
    }

    @ViewChild("myContent", { static: true }) myContent!: TemplateRef<any>;

    title = "demo";

    // strange or redundant typing
    crypticVariable: number | null | undefined | any;
    anotherCryptic: string;

    constructor(private http: HttpClient) {
        // massive constructor logic

        this.crypticVariable = this.http.get("http://my.url");
        this.anotherCryptic = `${this.crypticVariable}`;
    }

    // lots of datagrid handling, e.g. AG-grid
    columnDefs: ColDef[] = [{ field: "make" }, { field: "model" }, { field: "price" }];

    rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
    ];

    public method(unusedParam: any) {
        // Functionality that should be in a service, e.g. data fetching
        this.http.get("http://my.url");
        this.methodBeforeProperties();
    }

    // Angular reactive forms stuff

    public nestedMethod() {
        this.nestedMethodWithCrypt();
    }

    // NgRx stuff that nobody understands

    private nestedMethodWithCrypt() {
        // generic functionality that should be in some kind of util, e.g. Forms validators
    }
}
