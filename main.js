
//1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos).
let Numero_dado = parseInt(prompt("Ingrese el numero a multiplicar: "))



function Multiplicacion(Numero) {
    let i = 0; 
    while (i<10){
        i++
        console.log(`${Numero} x ${i} = ${Numero * i}`);
    }
}

Multiplicacion(Numero_dado)


//2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

function Suma(x) {
    let contador = 0;

    while (x !== 0){
        contador += x
        x = parseInt(prompt("Ingrese otro numero: "))
    }
    return contador    
}

let numero_ingresado = parseInt(prompt("2. Ingrese un primer digito: "))

if (numero_ingresado === 0) {
    console.log("La suma es 0");
} else {
    var Numero_a_adivinar = Suma(numero_ingresado)
    console.log("Suma realizada.");
}


//3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.


let Adivinanza = parseInt(prompt("3. Trate de adivinar el numero anterior: "))

if (Adivinanza === Numero_a_adivinar ){
    console.log("Felicidades adivinaste a la primera");
    alert("Felicidades adivinaste a la primera")

}else{
    let contador = 0
    while (Adivinanza !== Numero_a_adivinar) {
        if (Adivinanza < Numero_a_adivinar) {
    
            Adivinanza = parseInt(prompt("El numero a adivinar es mayor ingrese otro numero: "))
            contador++
        }else if(Adivinanza > Numero_a_adivinar){
            console.log("")
            Adivinanza = parseInt(prompt("El numero a adivinar es menor ingrese otro numero: "))
            contador++
        } 
}

console.log(`Felicidades adivinaste en ${contador} intentos el numero era ${Numero_a_adivinar}` );
alert(`Felicidades adivinaste en ${contador} intentos el numero era ${Numero_a_adivinar}` )
}


//4. Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el numero ya no es primo.

function Primo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }


let Numero_Ingresado = parseInt(prompt("4. Ingrese el numero a evaluar si es primo: "))  

if (Primo(Numero_Ingresado)) {
    console.log(`El número ${Numero_Ingresado} es primo.`);
  } else {
    console.log(`El número ${Numero_Ingresado} no es primo.`);
  }

  

//5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.


function Divisores(numero) {
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        divisores.push(i)
      }
    }
    return divisores
  }
  
  let numero_Ingresado = parseInt(prompt("5. Ingrese un número para mostrar sus divisores: "))
  
  console.log(`Los divisores de ${numero_Ingresado} son: ${Divisores(numero_Ingresado)}`)



//6. Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array.

//let frutasp = ["Manzana","Pera","Uva","Piña","Mango","Patilla","Melón","banano","Fresa","Lulo"]


let frutas = prompt("6. Ingrese 10 frutas separadas por ,: ")
let frutasp = frutas.split(",")

for (const fruta of frutasp) {
    console.log(fruta);
}



//7. Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.


//let Numeros = [2,3,4,5,6,7,8,9,10,11]


let Numero = prompt("7. Ingrese 10 numeros separados por ,: ")
let Numerosp1 = Numero.split(",").map(num => parseFloat(num.trim()));

for (const dato of Numerosp1) {

    console.log(dato * 2);
}


//8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array.

let familia = [
    {
      nombre: "Carlos",
      edad: 40,
      parentesco: "Padre",
      ocupacion: "Ingeniero"
    },
    {
      nombre: "María",
      edad: 38,
      parentesco: "Madre",
      ocupacion: "Doctora"
    },
    {
      nombre: "Juan",
      edad: 18,
      parentesco: "Hijo",
      ocupacion: "Estudiante"
    },
    {
      nombre: "Lucía",
      edad: 15,
      parentesco: "Hija",
      ocupacion: "Estudiante"
    },
    {
      nombre: "Luis",
      edad: 70,
      parentesco: "Abuelo",
      ocupacion: "Jubilado"
    }
  ]
  
  function presentar_Familia(familia) {
    familia.forEach(miembro => {
      console.log(`Hola, mi nombre es ${miembro.nombre}. Tengo ${miembro.edad} años, soy ${miembro.parentesco} y trabajo como ${miembro.ocupacion}.`)
    })
  }
  

  presentar_Familia(familia)


//9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.


//let Numeros = [2,3,4,5,6,7,8,9,10,11]


let Numeros2 = prompt("7. Ingrese 10 numeros separados por \",\": ")
let Numerosp2 = Numeros2.split(",").map(num => parseInt(num.trim()));

function Par(Numeros) {
    let Pares = [] 
    for (const Numero of Numeros) {
        
        if (Numero % 2 === 0) {
            Pares.push(Numero)
        }

    }
    return Pares
}

console.log(`De su lista los numeros pares son ${Par(Numerosp2)}`);



//10. Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.



let numero = parseInt(prompt("10. Ingrese el primer numero: "))
let Suma_par = 0
let Suma_impar = 0

while (numero !== 0){

    if (numero < 0){
        console.log("Numeros negativos no validos");
        break
    }else if(numero % 2 === 0){
        Suma_par += numero
        

    }else{
        Suma_impar += numero
    }

    numero = parseInt(prompt("Ingrese otro numero o 0 para terminar: "))



}
console.log(`la suma de los números pares es ${Suma_par}`);
console.log(`la suma de los números impares es ${Suma_impar}`);
    


//11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande.


function Mayor(arraynumbers) {
    let num_mayor = arraynumbers[0]
    for (const i of arraynumbers){
        if (i > num_mayor){
            num_mayor = i
        }
    }
    return num_mayor
}

let Numeros3 = prompt("11. Ingrese 10 numeros separados por ,: ")
let arraynumbers1 = Numeros3.split(",").map(elemento => parseFloat(elemento.trim()));

console.log(`El número mayor es ${Mayor(arraynumbers1)}`);



//12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico.

    
function Menor(arraynumbers) {
    let num_menor = arraynumbers[0]
    for (const i of arraynumbers){
        if (i < num_menor){
            num_menor = i
        }
    }
    return num_menor
}

let Numeros = prompt("11. Ingrese 10 numeros separados por ,: ")
let arraynumbers = Numeros.split(",").map(elemento => parseFloat(elemento.trim()));

console.log(`El número menor es ${Menor(arraynumbers)}`);



//13.Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora.


let name1 = prompt("Ingrese el nombre del jugador 1: ")
let name2 = prompt("Ingrese el nombre del jugador 2: ")
let jugada1 = prompt("Ingrese la jugada del jugador 1: ").toLowerCase()
let jugada2 = prompt("Ingrese la jugada del jugador 2: ").toLowerCase()

function PPT(jugada_1,jugada_2) {
    let Ganador = ""
    if (jugada_1 === jugada_2) {
        console.log("Empate");
        let jugada_1 = prompt(`Ingrese su jugada ${name1} nuevamente: `).toLowerCase()
        let jugada_2 = prompt(`Ingrese su jugada ${name2} nuevamente: `).toLowerCase()
        return PPT(jugada_1, jugada_2)
    } else if(jugada_1 === "piedra" && jugada_2 === "tijera" || jugada_1 === "tijera" && jugada_2 === "papel" || jugada_1 === "papel" && jugada_2 === "piedra"){
        Ganador = `Felicidades ${name1}, has ganado`
        return Ganador
    }else{
        Ganador = `Felicidades ${name2}, has ganado`
        return Ganador
    }
}

console.log(PPT(jugada1,jugada2));



//14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

function triangulo() {
    let simbolo = "*"
    let contador = 0

while(contador < 5){
    console.log(simbolo)
    simbolo = simbolo + "*"
    contador++
}
}

triangulo()

//15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido.

function triangulo_Invertido() {
    let simbolo = "*****"
    let contador = 5

    while (contador > 0) {
        console.log(simbolo)
        simbolo = simbolo.slice(0, -1)
        contador--
    }
}

triangulo_Invertido()



//16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

function bubbleSort(arr) {
    let n = arr.length
    let cambiado
    
    
    do {
        cambiado = false;
        
        
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                
               
                cambiado = true;
            }
        }
        
        
        n--;
    } while (cambiado); 
    
    return arr;
}


let arrayDesordenado = [8, 3, 1, 5, 9, 4, 7, 2, 10, 6]

bubbleSort(arrayDesordenado);

console.log("Array ordenado:");
console.log(arrayDesordenado);