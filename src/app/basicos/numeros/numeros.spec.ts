import { incrementar } from "./numeros"

describe('Pruebas de numeros',() => {

    it('Debe de retornar 100 si el numero ingresado en mayor a 100',() => {
        const resp = incrementar(300);
        expect(resp).toBe(100);
    })
    it('Debe de retornar el numero ingresado + 1 si el numero ingresado en menor a 100',() => {
        const resp = incrementar(90);
        expect(resp).toBe(91);
    })

})