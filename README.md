# Paises del Mundo
------------------

Países del Mundo es una APLICACIÓN WEB DE VIAJES (https://rawgit.com/mnibir/PaisesDelMundo/master/index.html). Los alumnos de DAW1 del curso 2016-2017 nos hemos hecho viajeros y hemos decidido visitar los nueve países más visitados de cada continente. Este año hemos comenzado por Asia y en nuestra web os mostramos los lugares más emblemáticos de cada país.


## Requisitos
-------------

* Publicidad: de 300px de ancho a la izquierda para PC y tablet o de 90px de alto abajo para móvil.
* Contenido: título (de ~8 palabras), imagen (con dos versiones, imgbig e imgmid, si hubiere habido un cambio de tamaño entre las imágenes del índice y cada país, pero no es este caso), descripción (de más de 300 carácteres), fecha y hora.
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
* XML con RSS (./rss/rss.xml). Para publicar parte del contenido de la aplicación en otras webs y redes sociales.
* JAVASCRIPT con JQUERY (./js/Asia.js). Para completar el índice y controlar elementos de la estructura.
* JSON (./data/Asia2.json, data/Asia3.json). Para contener todo aquel contenido del índice que no se carga al comienzo.
  
## Tareas realizadas
--------------------

* Presentar el diseño o maquetación inicial del proyecto, así como documentar el mismo, mediante el presente Readme.md
* Presentar en el índice nueve países. Los primeros tres países cargarlos directamente con html y el resto mediante Javascript y Json.
* En particular, la carga de los últimos seis países del índice, por bloques de tres, debe estar controlada mediante JQuery y debe de poder realizarla el usuario al pulsar el botón VER MÁS o también mediante SCROLL.


3.
Inclou rss.xml (especificat al tema 6)
(fins a 1 punt)
4.
Codifica news1.html i news2.html, pàgines que corresponen a les dues
primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de
news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html
ens va a news2.html (seguir no té sentit, aquesta tasca s'automatitza amb
codi de servidor).
(fins a 1 punt)
5.
La plantilla o pàgina de veure una sola notícia news1.html (news2.html és
idèntica) ha de contenir una imatge i un vídeo de youtube responsive.
(fins a 1 punt)
6.
Cada pàgina ha de contenir les etiquetes meta (amb open graph) per
compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la
pàgina.
(fins a 1 punt)

