const randomString = require("../index");

//todo lo que lleve "() => "se le llaman funciones anónimas
//describe => me ayuda a describir una serie de pruebas que voy a ejecutar para cierto elemento -- como una suit de elementos

describe("Probar funcionalidades de randomStrings", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomString()).toBe("string");
  });
  test("Comprobar que no existe una ciudad", () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
