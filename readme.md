# TALLER DE PROGRAMACION 2
## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador backend en nodejs con express y mongodb.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del backend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo. 

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone del presente repositorio
> 3. Instalar las dependencias
> 4. Solicitar las variables de entorno que contiene la conexion string a mongodb (antes de preguntar, revisa el chat, seguro estan ahí)
> 5. Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo tambien funciona. 
> El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_supplies** con una collection llamada **sales**, ahí se encuentran aprox. 500 ventas de nuestro cliente.
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/sales debería retornar un json con 500 ventas. Sí por algun motivo no llegase a funcionar, solicita asistencia. 

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
> 1. Necesitamos un endpoint que nos devuelva una venta particular por _id
> 2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod), que pueden ser: Phone, Online, In store... 
> 3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
> 4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)

> ### SI TE DA EL TIEMPO DAME UN MANO TAMBIEN EN...
> 5. Generar un endpoint para obtener el importe total de la venta por **localizacion**
>
> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, no me gusta mucho las cosas fuera del estandar de APIREST, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega
Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Completar el listado de endpoints, especificando parametros si los hubiera, mas abajo en este mismo archivo.
2. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio




## Listado de endpoint (Patricia Adriana Rodríguez Montero)
- /api/sales
- /api/sales/:id
    Comentarios:
     - Ejemplo: http://localhost:3000/api/sales/5bd761dcae323e45a93cd131 
- /api/sales/purchaseMethod/method?methodInput=In store
    Comentarios: 
     - En caso de que no ingrese un metodo de compra retornara todas las ventas
     - No supe como resolver que ingrese al /api/sales/purchaseMethod, porque ingresaba al 
     /api/sales/:id entonces agregue /method
     - Ejemplo: http://localhost:3000/api/sales/purchaseMethod/method?methodInput=In store
- /api/sales/customer/email/:email
    Comentarios:
     - Ejemplo: http://localhost:3000/api/sales/customer/email/fimute@duhadavu.edu
- /api/sales/customers/insatisfaction?satisfaction=3
    Comentarios: 
     - En caso de que no indique envie parametro de satisfaction devolverá: 
        "Los clientes insatisfechos (con menor a 3 de satisfacción)"
     - Ejemplo: 
        - Envía parametro: http://localhost:3000/api/sales/customers/insatisfaction?satisfaction=50
        - Envía parametro: http://localhost:3000/api/sales/customers/insatisfaction/


## Ejemplo de venta que se utilizo para testing

{
        "_id": "5bd761dcae323e45a93cd131",
        "saleDate": "2017-03-28T11:06:27.079Z",
        "items": [
            {
                "name": "pens",
                "tags": [
                    "writing",
                    "office",
                    "school",
                    "stationary"
                ],
                "price": {
                    "$numberDecimal": "47.64"
                },
                "quantity": 2
            },
            {
                "name": "laptop",
                "tags": [
                    "electronics",
                    "school",
                    "office"
                ],
                "price": {
                    "$numberDecimal": "1507.67"
                },
                "quantity": 2
            },
            {
                "name": "binder",
                "tags": [
                    "school",
                    "general",
                    "organization"
                ],
                "price": {
                    "$numberDecimal": "26.78"
                },
                "quantity": 2
            },
            {
                "name": "notepad",
                "tags": [
                    "office",
                    "writing",
                    "school"
                ],
                "price": {
                    "$numberDecimal": "22.73"
                },
                "quantity": 4
            },
            {
                "name": "backpack",
                "tags": [
                    "school",
                    "travel",
                    "kids"
                ],
                "price": {
                    "$numberDecimal": "147.25"
                },
                "quantity": 3
            },
            {
                "name": "envelopes",
                "tags": [
                    "stationary",
                    "office",
                    "general"
                ],
                "price": {
                    "$numberDecimal": "20.41"
                },
                "quantity": 7
            }
        ],
        "storeLocation": "London",
        "customer": {
            "gender": "M",
            "age": 66,
            "email": "fimute@duhadavu.edu",
            "satisfaction": 4
        },
        "couponUsed": false,
        "purchaseMethod": "In store"
    },


