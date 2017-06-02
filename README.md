# Paises del Mundo
------------------

Países del Mundo es una APLICACIÓN WEB DE VIAJES (https://rawgit.com/mnibir/PaisesDelMundo/master/index.html). Los alumnos de DAW1 del curso 2016-2017 nos hemos hecho viajeros y hemos decidido visitar los nueve países más visitados de cada continente. Este año hemos comenzado por Asia y en nuestra web os mostramos los lugares más emblemáticos de cada país.


## Requisitos
-------------

* Publicidad: de 300px de ancho a la izquierda para PC y tablet o de 90px de alto abajo para móvil.
* Contenido: título (de ~8 palabras, excepto el título de Corea del Sur que es de 8 palabras, el resto de títulos son de 6 palabras), imagen (con dos versiones, imgbig e imgmid, si hubiere habido un cambio de tamaño entre las imágenes del índice y cada país, pero no es este caso), descripción (de más de 300 carácteres), fecha y hora con un formato similar a DATETIME.
* Formato elegante y uniforme para cada país.


## Diseño del proyecto
----------------------

### Diseño inicial del índice de países
![img](https://github.com/mnibir/PaisesDelMundo/blob/master/img/disseny/disseny_index.jpg)

### Diseño inicial de cada país
![img](https://github.com/mnibir/PaisesDelMundo/blob/master/img/disseny/disseny_pais.jpg)

### Multimedia
Todas las imágenes son gratuitas y libres de derechos descargadas de Pixabay (https://pixabay.com/es/), los vídeos son de Youtube (https://www.youtube.com/) y los mapas son enlaces a (https://www.google.es/maps).

### Texto
El texto es parte redactado - parte tomado de diversas webs de viajes.


## Estructura del proyecto
--------------------------

* HTML (index.html, ./html/pais.html, ./html/pais2.html). Para establecer la estructura y el contenido.
* CSS (./css/a.css). Para definir el estilo.
* CSS-JAVASCRIPT con BOOTSTRAP. Para definir el estilo y controlar elementos de la estructura.
* FORMATO JPG (./img/Asia, ./img/publicidad, ./img/disseny). Son imágenes de tamaño fijo, tratadas de forma responsive.
* XML con RSS (./rss/rss.xml). Para publicar parte del contenido de la aplicación en otras webs.
* JAVASCRIPT con JQUERY (./js/Asia.js). Para completar el índice y controlar elementos de la estructura.
* JSON (./data/Asia2.json, data/Asia3.json). Para contener todo aquel contenido del índice que no se carga al comienzo.
  
  
## Tareas realizadas
--------------------

* Presentación del diseño o maquetación inicial del proyecto, así como documentación del mismo, mediante el presente Readme.md.
* Presentación en el índice de nueve países en total. Los primeros tres países se cargan directamente con html y el resto con Javascript y Json.
* En particular, la carga de los últimos seis países del índice, en bloques de tres, está controlada mediante JQuery y el usuario puede realizarla al pulsar el botón "VER MÁS" o también al hacer SCROLL.
* Inclusión de un fichero (./rss/rss.xml) para poder publicar parte del contenido de la aplicación en otras webs.
* Presentación de dos países de forma completa al pulsar el botón correspondiente de "información" desde el índice de países. El resto de países apuntan al primero presentado de forma completa para que la aplicación no quede interrumpida.
* Cada país contiene un mínimo de una imagen y un vídeo de youtube, ambos tipos tratados de forma responsive. El formato de cada país es uniforme.
* Cada  página de la aplicación contiene etiquetes meta con propiedades de open graph para poder compartir la siguiente información: el dominio, la url de la página, el título especificado en la pestaña, una imagen grande y una breve descripción.  


