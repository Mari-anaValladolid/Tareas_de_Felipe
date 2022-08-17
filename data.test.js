// Ejemplo2
const getData = require('../wwwroot/js/library.js');

test('should return true', () => {
   expect(getData(2)).toBe(true);
});
