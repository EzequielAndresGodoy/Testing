import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { MedicoService } from "./medico.service";

describe("Medico Component", () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule],
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it("Debe de crearse el componente", () => {
        expect(component).toBeTruthy();
    });

    it("Debe retornar el nombre del medico", () => {
        const nombre = "Juan";
        const mensaje = component.saludarMedico(nombre);

        expect(mensaje).toContain(nombre);
    });
});
