import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RouterMedicoComponent } from "./router-medico.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of } from "rxjs";

class FakeRouter {
    navigate(params: any) {}
}

class FakeActivatedRoute {
    params: Observable<any> = of({});
}

describe("RouterMedicoComponent", () => {
    let component: RouterMedicoComponent;
    let fixture: ComponentFixture<RouterMedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RouterMedicoComponent],
            providers: [
                { provide: Router, useClass: FakeRouter },
                { provide: ActivatedRoute, userClass: FakeActivatedRoute },
            ],
        });
        fixture = TestBed.createComponent(RouterMedicoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit("Debe de redireccionar a medico cuando se guarde", () => {
        const router = TestBed.inject(Router);
        const spy = spyOn(router, "navigate");

        component.guardarMedico();

        expect(spy).toHaveBeenCalledWith(["medico", "123"]);
    });
});
