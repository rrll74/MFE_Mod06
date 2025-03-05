# Laboratorio REST API

## Introducción

Vamos a consumir una API pública para mostrar datos de la serie Rick & Morty

[https://rickandmortyapi.com/](https://rickandmortyapi.com/)

Para simular escrituras vamos a utilizar un servidor local json-server

[json-server](https://github.com/typicode/json-server)

Cómo punto de entrada vamos a partir del Boilerplate:

[00-boilerplate](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/06-rest-api/01-concepts/00-boilerplate)

Tendrás que:

- Cambiar las escenas, rutas y pods a `character-collection` y `character`
- Actualizar el json-server

## Ejercicio 1

- Crear un proyecto en el que vamos a obtener una lista de actores de la API Rest de Rick & Morty, utilizando Axios o Fetch.

[REST docs](https://rickandmortyapi.com/documentation/#rest)

- Navegando a la página de un `character` vamos a mostrar el detalle del mismo (segunda llamada a la API Rest).

## Ejercicio 2

- Montamos un json-server local (borramos la colección de hoteles previa).

[json-server](https://github.com/typicode/json-server)

- Añadimos una colección de `characters` (puedes coger la información del ejercicio anterior).

- Además de los campos que ya teníamos, añadimos uno nuevo donde guardar las mejores frases de cada personaje

  - El campo se puede llamar `bestSentences`.
  - Podéis inicializar este nuevo campo a vacío para cada personaje.

- Reemplazar los endpoints para que apunten al json-server.

- El usuario puede editar y guardar el campos `bestSentences`.

## Opcional

- Implementar la misma aplicación (del ejercicio 1) pero tirando de la API de GraphQL

[GraphQL Docs](https://rickandmortyapi.com/documentation/#graphql)

[GraphQL Playground](https://rickandmortyapi.com/graphql/)

# Challenge

- Implementar paginación.
- Implementar busqueda de actores.
- Implementar componente para recuperar:
  - Actores.
  - Lugares.
  - Episodios.
