// Ejemplo

import getObjectDescription from [rutaDeNuestroFichero];

describe('Test unitarios de nuestro módulo "getObjectDescription"', () => {
    // En el caso de querer reiniciar o volver a instanciar nuestro módulo usaremos los métodos "beforeEach", "afterEach", "beforeAll" o "afterAll" según nos convenga.
});

    it('getObjectDescription to be truthy', () => {
// Con toBeTruthy estamos diciendole a jest que esperamos que exista nuestro método
    expect(getObjectDescription).toBeTruthy();
})

it("getObjectDescription('ACTIVE') to be 'Activo'", () => {
    const result = getObjectDescription('ACTIVE');
expect(result).toBe('Activo'); // Ponemos 'Activo' porque es el valor de nuestro objeto
})

it("getObjectDescription('DRAFT') to be false", () => {
    const result = getObjectDescription('DRAFT');
expect(result).toBeFalsy(); // toBeFalsy comprueba si el valor es nulo/undefined/false
})

it("getObjectDescription('') to be false", () => {
    const result = getObjectDescription('');
expect(result).toBeFalsy(); // toBeFalsy comprueba si el valor es nulo/undefined/false
})

it("getObjectDescription() to be 'El argumento 'type' no existe'", () => {
    const result = getObjectDescription('');
expect(result).toBe('El argumento no existe');
}); 


