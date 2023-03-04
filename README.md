#PRACTICA II MODULO 5

##Requisitos
Necesitaras tener instalado Node.js y npm en tu máquina. También necesitarás tener una base de datos en formato JSON que contenga los datos que se utilizarán para crear la API.

##Instalación
Para instalar json-server, abre una terminal y ejecuta el siguiente comando:

```
npm install -g json-server
```

Este comando instalará json-server de manera global en tu máquina.

##Uso
Para utilizar json-server, crea un archivo JSON con los datos que se utilizarán para la API. Luego, abre una terminal en el directorio donde se encuentra el archivo JSON y ejecuta el siguiente comando:

```
json-server -p 5000 --watch db.json
```

Este comando iniciará json-server y creará la API en el puerto 5000. Para acceder a la API, abre un navegador web y visita la siguiente URL:


http://localhost:5000
Esto mostrará una lista de los recursos disponibles en la API.

##Endpoints
Para acceder a un endpoint específico en la API, agrega el nombre del recurso después de la URL base. Por ejemplo, si tienes un recurso llamado "productos", la URL para acceder a ese recurso sería la siguiente:


  Resources
  http://localhost:5000/producto
  http://localhost:5000/productosRelacionados
