//Destructuración en arreglos:
(function(c){
    const vector = [1, -2, 3, "hola", false, [1, 2], {}, -5.4];
    const [pri, seg, ter, cuar, quin, sext, sept, oct, nov, dec] = vector;
    c.log(pri);
    c.log(seg);
    c.log(ter);
    c.log(cuar);
    c.log(quin);
    c.log(sext);
    c.log(sept);
    c.log(oct);
    c.log(nov);
    c.log(dec);
})(console);

//Destructuración con objetos:
(function(c){
    const camilo = {
        nombre: "Juan Camilo",
        apellido: "Cardona",
        edad: 20,
        genero: "masculino",
        saludar: function () {
            c.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`);
        }
    }

    const { edad, genero, apellido, saludar, nombre } = camilo;
    console.log(edad);
    console.log(genero);
    console.log(nombre);
    console.log(saludar());
})(console);

//Parámetros REST
(function(c){
    function functionPromedio(a = 0, b = 0, ...c) {
        let sumatoria = a + b;

        c.forEach(function (element) {
            sumatoria += element;
        });

        let promedio = sumatoria / (2 + c.length);
        return (promedio);
    }

    c.log(functionPromedio(1, 2, 3, 4, 5));
    c.log(functionPromedio(1, 2, 3, 4, 5));
    c.log(functionPromedio(1, 2, 3, 4, 5));
    c.log(functionPromedio(1, 2, 3, 4, 5, 6, 7, 8, 9));
    c.log(functionPromedio(1, 2));
    c.log(functionPromedio(1, 2, 5));
    c.log(functionPromedio(1, 2, 3, 4, 5));
})(console);

//Operador SPREAD
(function(c){
    const vec1 = [1, 2, 3, 4, 5],
        vec2 = [6, 7, 8, 9, 10],
        vec3 = [11, 12, 13, 14, 15],
        vec4 = [16, 17, 18, 19, 20],
        vec5 = [21, 22, 23, 24, 25],
        vecResult = [...vec1, ...vec2, ...vec3, ...vec4, ...vec5];
    
    c.log(vecResult);
})(console);

//Funciones anónimas y funciones flecha (arrow functions):
(function(c){
    const miFuncion = function () {
        c.log("hola, esto es una función anónima");
    }
    miFuncion();

    //ahora como función flecha (arrow function):
    const miFuncionFlecha = (nombre, edad) => {
        c.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
    }
    c.log(miFuncionFlecha("Camilo", 20));

    //Función flecha resumida en una sola línea de código, recordar que
    //las funciones flecha retornan de forma implícita
    const funcionFlechaResumida = (a, b) => a + b;
    c.log(funcionFlechaResumida(3, 2));
})(console);

//El ciclo forEach para los vectores
(function(c){
    const miVector = [1, 2, 3, 4, "hola", {}, [1, 2, 3], false, true];
    
    miVector.forEach((element, index) => {
        c.log(`Elemento: ${element}, posición ${index}`);
    });
})(console);

//Funciones constructoras
(function(c){
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

        this.saludar = function () {
            c.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
        }

        this.despedirse = function () {
            c.log(`Adios, mi nombre es: ${this.nombre}`);
        }
    }

    camilo = new Persona("Juan Camilo", 20);
    c.log(camilo.nombre);
    c.log(camilo.saludar());
    c.log(camilo["edad"]);
    c.log(camilo["saludar"]());

    //Lo ideal es colocar los métodos de la clase anterior no directamente
    //en la función constructora sino más bien en el prototipo, de esta
    //forma se logra una optimización en el uso de la memoria

    //Lo correcto sería:
    /*
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

    }

    Persona.prototype.saludar = function () {
        c.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }

    persona.prototype.despedirse = function () {
        c.log(`Adios, mi nombre es: ${this.nombre}`);
    }
    */
})(console),

//Clases en JavaScript y Herencia
(function(c){
    class Animal {
        constructor(especie, nombre, edad, tamanio) {
            this.especie = especie;
            this.nombre = nombre;
            this.edad = edad;
            this.tamanio = tamanio;
        }
        sonar() {
            c.log("Hola, soy un animal y estoy haciendo ruido");
        }
        correr() {
            c.log("Hola, soy un animal y estoy corriendo");
        }
    }

    class Perro extends Animal {
        constructor(especie, nombre, edad, tamanio, raza, bravo) {
            super(especie, nombre, edad, tamanio);
            this.raza = raza;
            this.tamanio = tamanio;
            this.bravo = bravo;
        }
        ladrar() {
            c.log("Wooof woooof woooof");
        }
        comer() {
            c.log("Hola soy un perro y estoy comiendo");
        }
        correr() {
            c.log("Hola, soy un PERRO y estoy corriendo");
        }
    }

    tommy = new Perro("Perro", "Tommy", 4, "grande", "Labrador", false);
    c.log(tommy["especie"]);
    c.log(tommy["nombre"]);
    c.log(tommy["edad"]);
    c.log(tommy["tamanio"]);
    c.log(tommy["raza"]);
    c.log(tommy["bravo"]);
    c.log(tommy["correr"]());
    c.log(tommy["comer"]());
    c.log(tommy["ladrar"]());
    c.log(tommy["sonar"]());
})(console);

//Métodos getter, setter y métodos estáticos
(function(c){
    class Persona {
        constructor(nombre, id, edad, apodo) {
            this.nombre = nombre;
            this.id = id;
            this.edad = edad;
            this.apodo = apodo;
        }
        get getNombre() {
            return (this.nombre);
        }
        get getId() {
            return (this.id);
        }
        get getEdad() {
            return (this.edad);
        }
        get getApodo() {
            return (this.apodo);
        }
        set setNombre(nombre) {
            this.nombre = nombre;
        }
        set setId(id) {
            this.id = id;
        }
        set setEdad(edad) {
            this.edad = edad;
        }
        set setApodo(apodo) {
            this.apodo = apodo;
        }
        static queEres() {
            c.log("Hola, soy una persona");
        }
    }

    camilo = new Persona("Juan Camilo", "1040050663", 22, "conejo");
    camilo.setEdad = 25;
    camilo.setNombre = "JUAN CAMILO";
    camilo.setId = "100";
    c.log(camilo);
    c.log(Persona.queEres());   //Método estático
})(console);

//Ejemplo de elevacion al cuadrado con callback:
(function (c) {
    function cuadradoConCallback(value, callback) {
        setTimeout(() => {
            callback(value, value ** 2);
        }, Math.random() * 10000);
    }

    cuadradoConCallback(0, (value, result) => {
        console.log("Inician las callbacks");
        console.log(`Valor: ${value}, Resultado: ${result}`);
        cuadradoConCallback(1, (value, result) => {
            console.log(`Valor: ${value}, Resultado: ${result}`);
            cuadradoConCallback(2, (value, result) => {
                c.log(`Valor: ${value}, Resultado: ${result}`);
                cuadradoConCallback(3, (value, result) => {
                    c.log(`Valor: ${value}, Resultado: ${result}`);
                    cuadradoConCallback(4, (value, result) => {
                        c.log(`Valor: ${value}, Resultado: ${result}`);
                        cuadradoConCallback(5, (value, result) => {
                            c.log(`Valor: ${value}, Resultado: ${result}`);
                            cuadradoConCallback(6, (value, result) => {
                                c.log(`Valor: ${value}, Resultado: ${result}`);
                                cuadradoConCallback(7, (value, result) => {
                                    c.log(`Valor: ${value}, Resultado: ${result}`);
                                    cuadradoConCallback(8, (value, result) => {
                                        c.log(`Valor: ${value}, Resultado: ${result}`);
    /*P E L I G R O*/              cuadradoConCallback(9, (value, result) => {
/*Esto es un CALLBACK HELL*/             c.log(`Valor: ${value}, Resultado: ${result}`);
                                            cuadradoConCallback(10, (value, result) => {
                                                c.log(`Valor: ${value}, Resultado: ${result}`);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})(console);

//Ejemplo de elevacion al cuadrado con promesas:
(function(c){
    function cuadradoConPromesa(value) {
        if (typeof (value) !== "number") {
            return (Promise.reject("Error, el valor ingresado no es un número"));
        }
        return (new Promise((Resolve, Reject) => {
            setTimeout(() => {
                Resolve({
                    value: value,
                    result: value ** 2
                })
            }, Math.random() * 1000);
        }));
    }

    cuadradoConPromesa(0)
        .then(obj => {
            c.log("Inician las promesas:");
            c.log(`Valor: ${obj.value} Cuadrado: ${obj.result}`);
            return (cuadradoConPromesa(1));
        })
        .then(obj => {
            c.log(`Valor: ${obj.value} Cuadrado: ${obj.result}`);
            return (cuadradoConPromesa(2));
        })
        .then(obj => {
            c.log(`Valor: ${obj.value} Cuadrado: ${obj.result}`);
            return (cuadradoConPromesa("aaa"));
        })
        .then(obj => {
            c.log(`Valor: ${obj.value} Cuadrado: ${obj.result}`);
            return (cuadradoConPromesa(4));
        })
        .then(obj => {
            c.log(`Valor: ${obj.value} Cuadrado: ${obj.result}`);
            return (cuadradoConPromesa(5));
        })
        .then(obj => {
            c.log(`Valor: ${obj.value} Cuadrado: ${obj.result}`);
            return (cuadradoConPromesa(6));
        })
        .catch(err => c.error(err));
})(console);

//Cuadrado con funcón asíncrona declarada
(function(c){
    function cuadradoPromise(value) {
        if (typeof (value) !== "number") {
            return (Promise.reject("Error, el valor ingresado no es un número"));
        }
        return (new Promise((Resolve, Reject) => {
            setTimeout(() => {
                Resolve({
                    value: value,
                    result: value ** 2
                })
            }, Math.random() * 1000);
        }));
    }

    async function funcionAsincronaDeclarada() {
        try {
            c.log("Inicia la función async");
            let obj = await cuadradoPromise(0);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(1);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(2);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(3);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(4);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(5);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(6);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(7);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(8);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(9);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
            obj = await cuadradoPromise(10);
            c.log(`valor: ${obj.value}, cuadrado: ${obj.result}`);
        }
        catch (err) {
            c.log("Ha ocurrido un error, " + err);
        }
    }
    funcionAsincronaDeclarada();
})(console);

//Nuevos tipos de datos en JavaScript
(function(c){
    //Symbol
    const NOMBRE = Symbol("identificacion");
    const SALUDAR = Symbol("saludo");
    const persona = {
        [NOMBRE] : "Juan Camilo",
        edad: 20,
        genero : "m"
    }

    persona.NOMBRE ="Camilo";
    persona[SALUDAR] = function(){
        c.log("Hola");
    }
    c.log(persona);
    c.log(Object.getOwnPropertySymbols(persona));


    //Set
    const miConjunto = new Set([1, true,4, 2, 3, "Hola", 3, 4, true, true, "Hola", "Adios",{},{},{},[],[]]);
    c.log(miConjunto.has("Hola"));
    miConjunto.forEach((elem) =>{
        c.log(elem);
    });

    miConjunto.delete(1);
    miConjunto.delete("Hola");
    miConjunto.delete(4);
    miConjunto.delete({});

    c.log("Ya se eliminaron los elementos");

    miConjunto.forEach((elem) =>{
        c.log(elem);
    });

    c.log(miConjunto.has("Hola"));


    //Maps
    
    let mapa = new Map();

    mapa.set("nombre", "juan Camilo");
    mapa.set("apellidos", "Cardona Calderón");
    mapa.set("edad", 20);
    mapa.set("soltero", true);
    mapa.set("pasatiempos",["estudiar","deporte","enseñar"]);

    c.log(mapa);
    c.log(mapa.size);
    c.log(mapa.has("nombre"));

    mapa.set("nombre", "Cristian Daniel");
    c.log(mapa);

    for(let [key,value] of mapa){
        c.log(`Llave: ${key}, valor: ${value}`);    
    }

    const vecClaves = Array.from(mapa.keys());
    const vecValores = [...mapa.keys()];
    c.log(`Vector con las llaves: ${vecClaves}`);
    c.log(`Vector con los valores: ${vecValores}`);
})(console);

//CALLBACK , PROMISE & ASYNC/AWAIT

(function(c){

    //CALLBACKS
function saludar(nombre, callback){
    setTimeout(function() {
        callback(nombre);
    }, Math.random()*5000);
}

let nombre = prompt("Ingrese su nombre: ");

saludar(nombre, function(nombre){
    console.log(`hola me llamo ${nombre}`);
    nombre = prompt("Ingrese su nombre: ");
    saludar(nombre, function(nombre){
        console.log(`hola me llamo ${nombre}`);
        nombre = prompt("Ingrese su nombre: ");
        saludar(nombre, function(nombre){
            console.log(`hola me llamo ${nombre}`);
            nombre = prompt("Ingrese su nombre: ");
            saludar(nombre, function(nombre){
                console.log(`hola me llamo ${nombre}`);
                nombre = prompt("Ingrese su nombre: ");
                saludar(nombre, function(nombre){
                    console.log(`hola me llamo ${nombre}`);
                    nombre = prompt("Ingrese su nombre: ");
                    saludar(nombre, function(nombre){
                        console.log(`hola me llamo ${nombre}`);
                        nombre = prompt("Ingrese su nombre: ");
       /*PELIGRO*/          saludar(nombre, function(nombre){
    /*CALLBACK HELL*/       console.log(`hola me llamo ${nombre}`);
                            console.log("Fin de las llamadas");
                        });
                    });
                });
            });
        });
    });
});
})(console);

//Operaciones aritméticas con callbacks, demostración de un callback hell
(function(c){
    function suma(n1, n2, callback) {
    setTimeout(() => {
        callback(n1, n2, n1 + n2);
    }, Math.random() * 1000);
}
function resta(n1, n2, callback) {
    setTimeout(() => {
        callback(n1, n2, n1 - n2);
    }, Math.random() * 1000);
}
function multiplicacion(n1, n2, callback) {
    setTimeout(() => {
        callback(n1, n2, n1 * n2);
    }, Math.random() * 1000);
}
function division(n1, n2, callback) {
    setTimeout(() => {
        callback(n1, n2, n1 / n2);
    }, Math.random() * 1000);
}
function modulo(n1, n2, callback) {
    setTimeout(() => {
        callback(n1, n2, n1 % n2);
    }, Math.random() * 1000);
}

let n1 = parseInt(prompt("Ingrese la primera cantidad numérica: ")),
    n2 = parseInt(prompt("Ingrese la segunda cantidad numérica: "));

suma(n1, n2, (n1, n2, resultado) => {
    c.log("Inicia cadena de llamadas: ");
    c.log(`El resultado de sumar ${n1} y ${n2} es: ${resultado}`);
    resta(n1, n2, (n1, n2, resultado) => {
        c.log(`El resultado de restar ${n1} menos ${n2} es: ${resultado}`);
        multiplicacion(n1, n2, (n1, n2, resultado) => {
            c.log(`El resultado de multiplicar ${n1} y ${n2} es: ${resultado}`);
            division(n1, n2, (n1, n2, resultado) => {
                c.log(`El resultado de dividir ${n1} entre ${n2} es: ${resultado}`);
                modulo(n1, n2, (n1, n2, resultado) => {
                    c.log(`El resultado de sacar módulo ${n2} de ${n2} es: ${resultado}`);
                });
            });
        });
    });
});
})(console);

//Escribir una función que permita llenar un arreglo de n posiciones con números aleatorios , si el número
//aleatorio es primo entonces se rechaza el llenado del arreglo y se imprime un mensaje de error, de lo 
//contrario se debe imprimir el arreglo lleno.

//Primero realizarlo con promesas y luego con async - await ((1) Con función declarada, (2) Con función expresada (anónima) y (3) Con función flecha

//Con promesas
(function(c){

    const esPrimo = num => {
        let numero = parseInt(num);
        let primalidad = true;
        if (typeof (numero) != "number") {
            return ("Inválido, por favor ingrese una cantidad numérica");
        }
        if (numero <= 0) {
            return ("Negativa o cero, por favor ingrese una cantidad numérica válida");
        }
        let i = 2;
        while (primalidad && (i < numero)) {
            if (numero % i == 0) {
                primalidad = false;
            }
            i++;
        }
        return (primalidad);
    }

    const llenarArreglo = function(numPosiciones){
        const vec = [];
        let number;
        return(new Promise(function(resolve, reject){
            for(let i = 0 ; i < numPosiciones ; i++){
                number = Math.floor(Math.random()*100000000);
                if(esPrimo(number)){
                    reject({
                        error:true,
                        retorno: "Ha habido un error, el número aleatorio es primo!!!"
                    });
                }    
                vec.push(number);        
            }
            resolve({
                error: false,
                retorno: vec
            });
        }));
    }

    llenarArreglo(10)   //Lena un arreglo de 10 posiciones
    .then(function(objPromesa){
        c.log(`El arreglo llenado con números aleatorios no primos es: [${objPromesa.retorno}]`);
        return(llenarArreglo(5));   //Lena un arreglo de 5 posiciones
    })
    .then(function(objPromesa){
        c.log(`El arreglo llenado con números aleatorios no primos es: [${objPromesa.retorno}]`);
        return(llenarArreglo(3));   //Lena un arreglo de 3 posiciones
    })
    .then(function(objPromesa){
        c.log(`El arreglo llenado con números aleatorios no primos es: [${objPromesa.retorno}]`);
    })
    .catch(function(objPromesa){
        c.log(objPromesa.retorno);
    })
    .finally(function(){
        c.log("Esto siempre se ejecutará");
    });
})(console);

//Con función asíncrona (Async - await) declarada
(function(c){
    const esPrimo = num => {
        let numero = parseInt(num);
        let primalidad = true;
        if (typeof (numero) != "number") {
            return ("Inválido, por favor ingrese una cantidad numérica");
        }
        if (numero <= 0) {
            return ("Negativa o cero, por favor ingrese una cantidad numérica válida");
        }
        let i = 2;
        while (primalidad && (i < numero)) {
            if (numero % i == 0) {
                primalidad = false;
            }
            i++;
        }
        return (primalidad);
    }

    const llenarArreglo = function(numPosiciones){
        const vec = [];
        let number;
        return(new Promise(function(resolve, reject){
            for(let i = 0 ; i < numPosiciones ; i++){
                number = Math.floor(Math.random()*100000000);
                if(esPrimo(number)){
                    reject({
                        error:true,
                        retorno: "Ha habido un error, el número aleatorio es primo!!!"
                    });
                }    
                vec.push(number);        
            }
            resolve({
                error: false,
                retorno: vec
            });
        }));
    }

    async function funAsinDeclarada(){
        try {
            c.log("Inician los procesos de llenado: ");
            let obj = await llenarArreglo(6);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(5);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(4);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(3);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(2);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(1);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
        } catch (err) {
            c.error(err.retorno);
        } finally {
            c.log("Esto siempre se ejecutará")
        }
    }
    funAsinDeclarada();
})(console);

//Con función asíncrona (Async - await) con función anónima (función expresada)
(function(c){
    const esPrimo = num => {
        let numero = parseInt(num);
        let primalidad = true;
        if (typeof (numero) != "number") {
            return ("Inválido, por favor ingrese una cantidad numérica");
        }
        if (numero <= 0) {
            return ("Negativa o cero, por favor ingrese una cantidad numérica válida");
        }
        let i = 2;
        while (primalidad && (i < numero)) {
            if (numero % i == 0) {
                primalidad = false;
            }
            i++;
        }
        return (primalidad);
    }

    const llenarArreglo = function(numPosiciones){
        const vec = [];
        let number;
        return(new Promise(function(resolve, reject){
            for(let i = 0 ; i < numPosiciones ; i++){
                number = Math.floor(Math.random()*100000000);
                if(esPrimo(number)){
                    reject({
                        error:true,
                        retorno: "Ha habido un error, el número aleatorio es primo!!!"
                    });
                }    
                vec.push(number);        
            }
            resolve({
                error: false,
                retorno: vec
            });
        }));
    }

    const funAsinExpresada = async function() {
        try {
            c.log("Inician los procesos de llenado: ");
            let obj = await llenarArreglo(6);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(5);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(4);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(3);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(2);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(1);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            
        } catch (err) {
            c.error(err.retorno);
        } finally {
            c.log("Esto siempre se ejecutará")
        }
    }    

    funAsinExpresada();
})(console);

//Con función asíncrona (Async - await) como arrow function
(function(c){
    const esPrimo = num => {
        let numero = parseInt(num);
        let primalidad = true;
        if (typeof (numero) != "number") {
            return ("Inválido, por favor ingrese una cantidad numérica");
        }
        if (numero <= 0) {
            return ("Negativa o cero, por favor ingrese una cantidad numérica válida");
        }
        let i = 2;
        while (primalidad && (i < numero)) {
            if (numero % i == 0) {
                primalidad = false;
            }
            i++;
        }
        return (primalidad);
    }

    const llenarArreglo = function(numPosiciones){
        const vec = [];
        let number;
        return(new Promise(function(resolve, reject){
            for(let i = 0 ; i < numPosiciones ; i++){
                number = Math.floor(Math.random()*100000000);
                if(esPrimo(number)){
                    reject({
                        error:true,
                        retorno: "Ha habido un error, el número aleatorio es primo!!!"
                    });
                }    
                vec.push(number);        
            }
            resolve({
                error: false,
                retorno: vec
            });
        }));
    }

    const funAsinExpresadaFlecha = async() => {
        try {
            c.log("Inician los procesos de llenado: ");
            let obj = await llenarArreglo(6);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(5);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(4);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(3);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(2);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            obj = await llenarArreglo(1);    
            c.log(`El arreglo con 10 elementos es: [${obj.retorno}]`);
            
        } catch (err) {
            c.error(err.retorno);
        } finally {
            c.log("Esto siempre se ejecutará")
        }
    }    
    funAsinExpresadaFlecha();
})(console);
