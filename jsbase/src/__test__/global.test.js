//Se declara una constante el cual se va a validar ej:
const text = "Hola Mundo";
const fruit = ["manzana", "melon", "banana"];

//Documentando los test js - funcion tipo =>
//match() realiza la búsqueda de coincidencias de una expresión regular en una cadena, devolviendo las subcoincidencias halladas como resultado.
test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

//Busca un elemento dentro de una lista ó una cadena de carácteres
test("Validacion de las frutas", () => {
  expect(fruit).toContain("banana");
});

//Su uso es estrictamente cuando no se espera un valor sino el tipo de dato, se debe utilizar para Booleanos
test("Validando un Booleano", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

//reverse literalmente funciona como una función que devuelve los valores en orden inverso por ej [1,2,3] => reverse [3,2,1]
test("Probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, rejeact) => {
    if (!str) {
      rejeact(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};
//El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
test("Probar una promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});
//Las funciones asíncronas sirven para controlar el manejo de las
test("probar async/wair", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});

// afterEach(() => console.log("Despues de cada prueba"));
// afterAll(() => console.log("Despues de todas las pruebas"));

// beforeEach(() => console.log("Antes de cada prueba"));
// beforeAll(() => console.log("Antes de todas las pruebas"));
