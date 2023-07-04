import { MedicosComponent } from "./medicos.component";
import { MedicosService } from "./medicos.service";
import { Observable, empty, from, throwError } from "rxjs";

describe("MedicosComponent", () => {
    let componente: MedicosComponent;
    const servicio = new MedicosService(null as any);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });

    it("Init debe de cargar los medicos", () => {
        const medicos = ["medico1", "medico2", "medico3"];

        spyOn(servicio, "getMedicos").and.callFake(() => {
            return from([medicos]);
        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it("Debe de llamar al servidor para agregar un medico", () => {
        const espia = spyOn(servicio, "agregarMedico").and.callFake(
            (medico) => {
                return empty();
            }
        );

        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it("Debe de agregar un nuevo medico al arreglo de medicos", () => {
        const medico = { id: 1, nombre: "Juan" };

        spyOn(servicio, "agregarMedico").and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(
            componente.medicos.findIndex((i) => (i.id = medico.id))
        ).toBeGreaterThanOrEqual(0);
    });

    it("Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio", () => {
        const miError = new Error("No se pudo agregar el medico");

        spyOn(servicio, "agregarMedico").and.returnValue(
            throwError(() => miError)
        );

        componente.agregarMedico();

        expect(componente.mensajeError.message).toBe(miError.message);
    });

    it("Debe de llamar al servidor para borrar un medico", () => {
        spyOn(window, "confirm").and.returnValue(true);

        const espia = spyOn(servicio, "borrarMedico").and.callFake((id) => {
            return empty();
        });

        componente.borrarMedico("1");
        expect(espia).toHaveBeenCalledOnceWith("1");
    });
    it("No debe de llamar al servidor para borrar un medico", () => {
        spyOn(window, "confirm").and.returnValue(false);

        const espia = spyOn(servicio, "borrarMedico").and.callFake((id) => {
            return empty();
        });

        componente.borrarMedico("1");
        expect(espia).not.toHaveBeenCalledOnceWith("1");
    });
});
