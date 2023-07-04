import { Jugador } from "./clase"


describe('Pruebas de daño', ()=> {

    let jugador =  new Jugador();

    //Para ejecutar algo antes de cada prueba o despues
    beforeAll(() => { //Antes de la ejecucion de todas las pruebas
        //console.log('beforeAll')
    }) 
    beforeEach(() => { //Antes de cada una de las pruebas
        jugador =  new Jugador();
        //console.log('beforeEach')
    }) 

    afterAll(() => { //Despues de que finalizan todas las pruebas
        //console.log('afterAll')
    }) 
    afterEach(() => { //Cada vez que termina una prueba
        //console.log('afterEach')
    }) 

    it('Debe de retornar 0 de hp si recibe 100 de daño o mas',()=>{

        const resp = jugador.recibeDanio(100);
        expect(resp).toBe(0);

    })

    it('Debe de retornar 80 de hp si recibe 20 de daño',()=>{

        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);

    })

    it('Debe de retornar 50 de hp si recibe 50 de daño',()=>{

        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);

    })


})