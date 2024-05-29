## CHALLENGE
**Author**: @josephinoo

### CODE CHALLENGE
```javascript
function calculateScore(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    let score = 0;
    for (const num of arr) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error('Array must contain only numbers');
        }

        if (num === 5) {
            score += 5;
        } else if (num % 2 === 0) {
            score += 1;
        } else {
            score += 3;
        }
    }

    return score;
}

function validateCalculateScore() {
    const testCases = [
        { input: [1, 2, 3], expectedOutput: 7 },
        { input: [4, 5, 6], expectedOutput: 7 },
        { input: [5, 5, 5], expectedOutput: 15 },
        { input: [], expectedOutput: 0 },
        { input: [0], expectedOutput: 1 },
        { input: [1, 3, 7], expectedOutput: 9 },
        { input: [2, 4, 6], expectedOutput: 3 },
        { input: [1, 2, 3, 4, 5], expectedOutput: 13 },
        { input: [17, 19, 21], expectedOutput: 9 },
        { input: [0, 0, 0, 0], expectedOutput: 4 },
        { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expectedOutput: 22 },
        { input: [0, 5, 5, 0], expectedOutput: 12 },
    ];

    let passAll = true;
    for (const testCase of testCases) {
        const actualOutput = calculateScore(testCase.input);
        if (actualOutput !== testCase.expectedOutput) {
            console.error(`Failed for input: ${testCase.input}. Expected: ${testCase.expectedOutput}, Actual: ${actualOutput}`);
            passAll = false;
        }
    }

    if (passAll) {
        console.log("All test cases passed! 🎉");
    } else {
        console.error("Some test cases failed! 😞");
    }
}

validateCalculateScore();
```
### QUESTIONS
You're building a high-throughput API for a cryptocurrency trading platform. For this platform, time is extremely important because microseconds count when processing high-volume trade orders. For communicating with the API, you want to choose the verb that is fastest for read-only operations.
What verb should you choose for retrieving trade orders with the API server?
**SELECT ONLY ONE**
- [x] GET
- [ ] UPDATE
- [ ] DELETE
- [ ] POST

> En este caso el verbo más rapido es GET, ya que es de solo Lectura, esta diseñado para recuperar datos del servidor, sin alterar el estado
___

You work for a Customer Relationship Management (CRM) company. The company's clients gain CRM access through a RESTful API. The CRM allows clients to add contact information for customers, prospects, and related persons (e.g., virtual assistants or marketing directors). You want to choose an appropriate API request path so clients can easily retrieve information for a single contact while also being flexible for future software changes.

Which of the following API paths should you use? **SELECT ONLY ONE**

- [ ] `/customers/{customer_id}`
- [x] `/contacts/{contact_id}`
- [ ] `/contacts/{contact_type}/all`
- [ ] `/customers/all`
> /contacts/{contact_id}, es la mejor porque permite recuperar información de un contacto específico utilizando su identificador único (contact_id)

You work for a large social media network, and you've been tasked witherror handling for the API. You're trying to decide on an appropriate errorcode for authentication failures based on non-existent users and incorrect passwords. You want to balance security against brute force attacks with providing descriptive and true error codes.
Which HTTP error code(s) should you use to keep the system secure and still report that an error occurred?
SELECT ONLY ONE

- [ ] a 404 if the user doesn't exist, and 403 if the password is wrong.
- [x] b 403 if the user doesn't exist, and 401 if the password is wrong.
- [ ] c 500 if the user doesn't exist or if the password is wrong.
- [ ] d 401 if the user doesn't exist or if the password is wrong.
> Utiliza los códigos de error HTTP adecuados para cada situación: 403 para usuarios inexistentes y 401 para contraseñas incorrectas
____


 You're writing documentation for requesting information about a given user in your system. Your system uses UUIDS (universally unique identifiers) as user identifiers. In your documentation, you want to show an example.
True or false: You should put a fake UUID into the example code (instead of just the text "UUID") as a placeholder.
SELECT ONLY ONE
- [ ] True
- [x] False
> Falso, al incluir uuid real, aunque sea falso, los usuarios pueden interpretar como valido, y le pueden causar confusiones , es mejor utilizar un texto que diga **uuid**

___

You're building code to handle errors issued from a remote API server. The response may or may not have an error.
How much work should your method, handleErrors(response), handle?
SELECT ONLY ONE
- [ ] a Check for the presence of an error. If it exists, then set a class property to the error.
- [x] Check for the presence of an error. If it exists, throw an exception with the error.
- [ ] Check for the presence of an error. If it exists, set a class property to the error, then throw an exception.

>   Lo mas "eficaz" es verificar la presencia de un error en al respuesta, ya que si existe un error, es lanzar un excepcion con el mensaje de error.

___

You have two classes: a database driver and an email driver. Both classes need to set errors so that your front-end interface displays any errors that transpire on your platform.
Which way should you implement this error handling?
**SELECT ONLY ONE**
- [ ] a Write the error handling the same way in both classes, but keep it to one line of code.
- [ ]  b Make a trait to handle errors so it'll collect errors in any class that uses it.
- [x] c Make a driver-based error provider to handle errors in all classes that can issue errors.

> Por experiencia es mejor tener driver-based, tenenemos una solucion mas centralizada, y tambien para poder manjera en toda las clases que pueden emitir error, en vez de repetir el manejo de errores para cada clases, tenemos en un solo lugar.

>Note:No sabia que era un **TRAIT** fue un buen ejercicio investigar

___

You need to name the private method in your class that handles loopingthrough eCommerce products to collect and parse data. That data gets stored in an array and set as a class property.
Which of the following should you use to name your method?
**SELECT ONLY ONE**
- [ ] a  loopThroughProductsAndParseData()
- [ ] b loopProductsAndParse()
- [x] c parseDataForProducts()
- [ ] d parseDataForProductsAndSetArray()

> Es consisa y descriptiva,  es lo que hace analiza los datos para los productos

___

There are multiple places in your codebase that need to access the database. To access the database, you need to supply credentials. You want to balance security with useability.
What strategy should you use to store and access these credentials?
**SELECT ONLY ONE**
- [ ] Put them in the code that connects to the database for each place that needs database access.
- [ ] Put them in a configuration file, then include that file in the code everywhere that needs to access the database.
- [x] Put the credentials into a configuration file, then load them with a database service provider.
- [ ] Put them in a .env file, load data from it into a configuration system, then request the credentials from a database service provider.

> Se puede usar un archivo .env,pero seria mas para proyecto locales, tenga en cuenta si una atacante obtiene acceso a nuestra computadora, seremos vulnerables, y puede acceder a nuestro archivo .env. Por es la opcion **C**

### Project:

Link : https://challenge-yu3u.onrender.com

####  Herramientas
- Express
- Node JS
- MongoDB

### Scenario Analysis
**Question: Given a distributed system that experiences latencies and occasional failures in one of its microservices, how would you optimize it?**

Describe your approach to identifying the problem, possible solutions, and how you would ensure high availability and resilience

Para solucionar cualquier problema, hay que indentificar y atacarlo pero en este proceso o flujo lo vamos a dividir este proceso en tres etapas:

### Identificación del Problema
- Analizar el uso de recursos: Necesitamos perfilar el microservicio para entender cómo está utilizando los recursos y dónde existen cuellos de botella o problemas en la utilización de los mismos.
- Trazar solicitudes: Usar Jaeger (Golang) para seguir las solicitudes y ver cómo se mueven entre los microservicios. La pregunta clave es: ¿para qué? Esto nos ayudará a identificar en qué parte existen retrasos o fallos.
- Implementar monitoreo: Podemos usar Prometheus o Grafana, que son populares, para tener métricas de tasas de fallos, latencia y uso de memoria, CPU y recursos en general.
### Posibles Soluciones
- Optimizar código: Puede que el código esté mal escrito, como ineficiencias en la base de datos, cachés o servicios externos.
- Aumentar el número de instancias: Para distribuir cargas, o usar orquestadores de contenedores como Kubernetes, para escalar automáticamente.
- Implementar caché: Usar Redis o Memcached, para reducir la carga de los microservicios y mejorar el tiempo de respuesta.
- Tener un balanceador de carga: Para balancear las cargas entre las instancias.
- Mecanismos de tolerancia a fallos: Usar el patrón Circuit Breaker para evitar que los fallos en un microservicio se propaguen a otros. Implementar "retries" para manejar fallos temporales.

> Si todo esto no soluciona el problema, tomar una buena taza de cafe e  investigar hasta encontrar la solución. 🔍

### Alta Disponibilidad y Resiliencia
- Pruebas de resiliencia: Podemos usar pruebas como Chaos Engineering, usando Chaos Monkey para simular fallos. Mejor es prevenir que curar. 💥
- Despliegue en multizonas o multirregiones: Para mitigar los fallos de infraestructura y tener alta disponibilidad. 🌐
- Autoescalado: Configurar políticas de autoescalado usando Kubernetes, para que los microservicios se ajusten automáticamente a las necesidades de carga. 📈
- Mantenimiento del código: Revisar fallas de seguridad y mantener todas las librerías actualizadas, para evitar problemas de rendimiento y seguridad. 🔒
