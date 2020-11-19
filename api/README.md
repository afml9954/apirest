# CheeseAPI: Node.js, Express.js, Sequelize.js and PostgreSQL REST API

This source code is part of [Node.js, Express.js, Sequelize.js and PostgreSQL RESTful API](https://www.djamware.com/post/5b56a6cc80aca707dd4f65a9/nodejs-expressjs-sequelizejs-and-postgresql-restful-api) tutorial.

## ¿Que es cada uno?
### Node.js
Node.js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript

### Express.js
Es un framework web muy popular para usar en Node.js

### Sequelize.js
Sequelize es un ORM de Node.js basado en promesas para Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server. Cuenta con un sólido soporte de transacciones, relaciones, carga ansiosa y perezosa, replicación de lectura y más.

### PostgreSQL
PostgreSQL es un potente sistema de base de datos relacional de objetos de código abierto que utiliza y amplía el lenguaje SQL combinado con muchas características que almacenan y escalan de forma segura las cargas de trabajo de datos más complicadas.

### RESTfUL API
Una API es una forma de describir la forma en que los programas o los sitios webs intercambian datos en el que se usa el formato de intercambio de datos normalmente es JSON o XML. Por otra parte, RESTful se compone de REST que hace referencia a REpresentational State Transfer el cual es un tipo de arquitectura que se apoya en el estándar HTTP. Finalmente se habla de RESTful cuando un servicio web cumple la arquitectura REST.

# ¿Cheese API?
Es una API en desarrollo para una aplicacion móvil multiplataforma para la administración de un planta procesadora de leche

# ¿Como usarla?
## instalación en el host
1. instale node.js v12 (estable) y postgres, puede ser la última version: 13
2. desde la terminal instale los paquetes estando en la ruta del proyecto: `npm install`
3. instale sequelize-cli globalmente -g: `npm install -g sequelize-cli`
4. genere las migraciones: `sequelize migration:generate --name`. Si desea ponerle nombre agregelo despues del argumento --name
6. modifique la configuración de la conexión a la base de datos en el archivo `config/config.json` inicialmente para el entorno de desarrollo y luego en producción
7. con npm por defecto se corre con npm start, pero para efectos de usar heroku gratis, se modifica el comando para que realice las migraciones y corra. Si ya corrio las migraciones solo ejecute el comando `npm run play` para correr el proyecto.

## instalación usando docker
1. instale docker en su máquina
2. modifique el archivo `config/config.json` respecto a la conexión a la base de datos, la cual debe modificar las varieables de entorno de la base de datos como desee en el archivo `docker-compose.yml` en el servicio `db`.
``` .yml
  environment:
      - POSTGRES_DB=cheese
      - POSTGRES_USER=cheese
      - POSTGRES_PASSWORD=cheese
```
3. instale docker-compose en su máquina
4. corra la aplicación desde la linea de comandos en la raiz del proyecto: `docker-compose.yml up`

👍👍

