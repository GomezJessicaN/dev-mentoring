/*

Carla es una zoóloga que está estudiando animales en contextos humanos. Carla
quiere llevar un registro de las cosas que hacen los animales que estudia. Para
ello, nos pidió que la ayudemos haciendo una aplicación donde pueda registrar
todo lo que hacen sus sujetos de estudio.

En este momento, Carla está estudiando 5 animales. Dos gatos (Trooper y Anubis),
un perro (Patán), y dos cotorras (Pepita y Pepona). Quiere estudiar la
evolución de su energía a lo largo del tiempo y nos describió cómo se comportan
a nivel consumo de energía; el cual está expresado en el código más abajo.

También nos contó sobre sus compañeros animales, todos comen, se mueven y hacen
sonidos divertidos.

EJERCICIO 1: completar el código provisto para que represente el comportamiento
descrito a continuación.

Alimentación:

Cuando un gato come, aumenta su energía en 4 joules por cada gramo de alimento.
El perro, por ser más grande, necesita más cantidad de comida para nutrirse, por
lo que aumenta su energía en sólo 2 joules por gramo de alimento. Las cotorras
necesitan mucho menos, y aumentan su energía en 10 joules por gramo de alimento.

Movimiento:

Tanto los gatos como el perro corren, pero las cotorras vuelan.

Los cuadrúpedos tienen un costo energético para comenzar a moverse, además de un
costo variable en función de la distancia recorrida: los gatos tienen un costo
fijo de 5 joules + 5 joules por metro recorrido. El perro, 15 joules y 7 joules
por metro, respectivamente.

Las aves, al volar, no tienen costo fijo de arranque, pero consumen 2 joules por
metro recorrido.

Sonidos:

Los gatos maúllan, el perro ladra y las cotorras pían. A fines prácticos, vamos
a representar un sonido de animal como una impresión en pantalla de la
onomatopeya del mismo. Adicionalmente, los gatos y el perro tienen un costo fijo
de energía por hacer su sonido; siendo éstos de 1 y 2 joules, respectivamente.

*/


// Trooper es un gato copado
trooper = {
  // estado interno
  energia: 50


  //comportamiento
  // completar acá
}

// Anubis es una gata holgazana
anubis = {
  // estado interno
  energia: 90


  //comportamiento
  // completar acá
}

// Patán es un perro muy compañero, bonachón y un poco atolondrado
patan = {
  // estado interno
  energia: 180


  //comportamiento
  // completar acá
}

// Pepita es una cotorra muy curiosa
pepita = {
  // estado interno
  energia: 30


  //comportamiento
  // completar acá
}


// Pepona es una cotorra muy atrevida
pepona = {
  // estado interno
  energia: 50


  //comportamiento
  // completar acá
}
