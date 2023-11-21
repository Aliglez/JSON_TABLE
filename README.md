# JSON_TABLE
Exercise of displaying data from a Json in a table and in a chart

#Investigación

##¿Qué es un archivo JSON?

JSON, cuyas siglas significan “JavaScript object notation”,  es un formato de texto que deriva de la sintaxis de JavaScript, pero que no tiene como objetivo crear programas, sino almacenar e intercambiar datos.  Es una alternativa al lenguaje XML.
Originalmente, JSON se utilizaba solo para la notación basada en objetos de JavaScript, pero actualmente es compatible con múltiples formatos.  Además, los servicios que comparten información con JSON no necesitan hablar el mismo idioma. Es decir, que el emisor y el receptor pueden ser totalmente distintos, po ejemplo, Java y Python.

Ventajas:
Es autodescriptivo y fácil de entender
Es más rápido en cualquier navegador
De fácil lectura
Ligero en las transmisiones
Velocidad de procesamiento alto
Puede ser entendido de forma nativa por los analizadores de JavaScript.
Desventajas:
La notación básica puede resultar confusa
No cuenta con extensibilidad
No soporta grandes cargas, solo datos comunes
Requiere de mecanismos externos, como expresiones regulares, para la seguridad


##¿Qué es la asincronía en Javascript?

Es uno de los conceptos principales que rige el mundo de JavaScript. Ocurre cuando tenemos que realizar tareas que tienen que esperar a que ocurra un determinado suceso que no depende de nosotros, y reaccionar realizando otra tarea sólo cuando dicho suceso ocurra. Dicho de otro modo, se trata de programar acciones que se ejecutarán en caso de que otra acción suceda pero que además no sabemos cuándo ocurrirán, incluso puede que no sucedan nunca.

##¿Qué son las Promesas?

Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. También proporcionan métodos que facilitan el manejo y la manipulación de los datos una vez que la promesa se resuelve.
Una promesa es un objeto que representa un valor que puede que esté disponible ahora, en un futuro o que nunca lo esté. Como no se sabe cuándo va a estar disponible, todas las operaciones dependientes de es valor, tendrán que posponerse en el tiempo.
Existen varios métodos de las promesas de JavaScript ( .then(), .catch(), .finally(), etc..)

##¿Qué es y cómo se usa ‘Fetch’ en JS?

Fetch es el nombre de una API para JavaScript, se basa en promesas para realizar peticiones HTTPS asíncronas de forma legible y cómoda.
La forma de realizar una petición es muy sencilla, se trata de llamar a fetch y pasarle por parámetro la URL de la petición a realizar. El fetch() devolverá una promise que será aceptada cuando reciba respuesta y sólo será rechazada si hay un fallo de red o si por alguna razón no se pudo completar la petición.
A la función fetch(), además de la url a la que hacemos la petición, se le puede pasar un segundo parámetro de opciones, un Object con opciones de la petición HTML.

##¿Cómo se usa Async/Await?

Async/await es una sintaxis especial que facilita el trabajo con promesas. Nos permiten transformar un código asíncrono para que parezca ser síncrono.
Al trabajar con async/await tenemos dos partes. La palabra clave async,  que se pone delante de una declaración de función para que devuelvan una promesa en lugar de un valor directamente.
Lo que hace await es detener la ejecución y no continuar. Se espera a que se resuelva la promesa, y hasta que no lo haga, no continua.  Eso no cuesta ningún recurso de CPU, porque el motor de JavaScript puede hacer otros trabajos mientras tanto.

##¿Cuándo deberíamos usar código asíncrono?

Se aconseja aplicar la programación asíncrona en las situaciones en las que no se tiene el control de proceso, por ejemplo:
Llamadas a bases de datos, no sabemos cuánto tarda en devolvernos el dato solicitado o en que termine de insertar los registros enviados.
Cuando se trabaja con archivos, que no se tiene el control, puede que se necesiten permisos del sistema operativo.
Para mejorar el control de procesos, ya que se permiten ejecutar múltiples acciones al mismo tiempo.


