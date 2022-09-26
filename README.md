# bsale-api test

## Peticiones al servidor

### GET todos los productos

> **GET: /products**

#### Respuesta

```
{
  "id": 1,
  "name": "Bebida energetica",
  "url_image": "https://i.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE",
  "price": 100,
  "discount": 15,
  "category": 3
}, ...
```

- **id**, id del producto.
- **name**, nombre del producto.
- **url_image**, url de una imagen para el producto,
- **price**, precio del producto.
- **discount**, descuento que recibe el producto.
- **category**, id de la categoria del producto

### GET todas las categorias

> **GET: /categories**

#### Respuesta

```
{
  "id": 2,
  "category": "pisco"
}, ...
```

- **id**, id de la categoria.
- **category**, nombre de la categoria.


### GET productos por categorias

> **GET: /products/:category**

Devuelve solo los productos que poseen la categoria recibida por parametros

#### Respuesta

```
{
  "id": 1,
  "name": "PISCO MISTRAL",
  "url_image": "https://i.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE",
  "price": 321,
  "discount": 10,
  "category": 2
}
```

### GET productos por nombre

> **GET: /productos/search/:value**

Busca los productos que comienzen por el valor pasado y los devuelvo

> Ejemplo: /productos/search/ener

#### Respuesta

```
{
  "id": 1,
  "name": "Energetica Monster",
  "url_image": "https://i.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE",
  "price": 321,
  "discount": 10,
  "category": 2
}
```
