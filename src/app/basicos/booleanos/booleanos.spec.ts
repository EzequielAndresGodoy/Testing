import { usuariaIngresado } from "./booleanos";


describe('Pruebas de booleanos',()=>{

    it('Debe de retornar true',()=> {

        const logged = usuariaIngresado()
        expect(logged).toBeTruthy()

    })

})