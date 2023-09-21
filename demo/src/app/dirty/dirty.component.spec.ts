import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DirtyComponent } from "./dirty.component";

describe("DirtyComponent", () => {
    let component: DirtyComponent;
    let fixture: ComponentFixture<DirtyComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DirtyComponent],
        });
        fixture = TestBed.createComponent(DirtyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
