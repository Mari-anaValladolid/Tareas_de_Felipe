//Ejemplo sacado de internet para intentar que corra en la terminal

const objectMapping = {
    ACTIVE: 'Activo',
    INACTIVE: 'Inactivo',
    OBSOLETE: 'Obsoleto',
};

function getObjectDescription(type) {
    if (!type) {
        return "El argumento 'type' no existe";
    }
    return objectMapping[type];
}

export default getObjectDescription;

import getObjectDescription from [rutaDeNuestroFichero];
describe('Test unitarios de nuestro módulo "getObjectDescription"', () => {
    // En el caso de querer reiniciar o volver a instanciar nuestro módulo usaremos los métodos “beforeEach”, “afterEach”, “beforeAll” o “afterAll” según nos convenga.
});
