
document.addEventListener("DOMContentLoaded", function() {

const boton1=document.getElementById("boton1");
if(boton1){boton1.addEventListener("click",fFaboccini);}

const boton2=document.getElementById("boton2");
if(boton2){boton2.addEventListener("click",aspertRatio);}

const boton3=document.getElementById("boton3");
if(boton3){boton3.addEventListener("click",invertirCadena);}

const boton4=document.getElementById("boton4");
if(boton4){boton4.addEventListener("click",contarPalabras);}

const boton5=document.getElementById("boton5");
if(boton5){boton5.addEventListener("click",convierteBinario);}
});

/*     #3 LA SUCESIÓN DE FIBONACCI
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */



function fFaboccini(){
    var sectionFibonacci=document.getElementById('fibonacci').value;
    alert("La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores  0, 1, 1, 2, 3, 5, 8, 13..");

  let printSucesion =document.getElementById('viewFuntion');

    // alert("el texto del campo es = "+printSucesion.value);
    printSucesion.innerHTML = fibonacci(sectionFibonacci);
    
}



function fibonacci() {
  let a = 0;
  let b = 1;
  let c = 0;
  let sucesion = ""
  let arrayFibonacci = [];

  for (let i = 0; i < 50; i++) {
    sucesion += a + " ";
    arrayFibonacci.push(a);
    c = a + b; 
    a = b;   
    b = c;      
  }

//   return sucesion;
return arrayFibonacci.join(" , ");
}


/*          #6 ASPECT RATIO DE UNA IMAGEN
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

function aspertRatio(){
  var aspertRatio=document.getElementById('aspertRatio').value;
    // let url=document.getElementById('url').value;
    alert("aqui deberia   poner la logica del Aspect Ratio de una imagen a partir de una url");
}



/*
       #7 INVERTIR UNA CADENA DE TEXTO 
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

       function invertirCadena(){

       var cadenaTexto=document.getElementById('cadenaTexto').value
        if (cadenaTexto==""){
          alert("No hay texto para invertir");
          return;
        }      
        let invertirCadena="";
        for(let i=cadenaTexto.length-1;i>=0;i--){
          invertirCadena+=cadenaTexto[i];
        }
        let printCadena=document.getElementById('intoDiv');
        printCadena.innerHTML = invertirCadena;
        // alert("la cadena invertida es =  "+ invertirCadena);
       }
       /*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

       function contarPalabras(){        
        var countWords=document.getElementById('countWords').value        
        if (countWords==""){
          alert("No hay texto para contar palabras");
          return;
        }else{
      // del texto original dividirlo por palabras 
      // ej:  hola hola 
      //1. Recorrer el arreglo con un for ✅
       let arrayWord=[];
       arrayWord=countWords.toLowerCase();
       let matriz=[];
       alert("Array  Word Valor = "+ arrayWord)    
      let palabraActual="";    
      
      for(let i=0;i<arrayWord.length;i++){
       // conjunto set, definimos el conjunto de caracteres a omitir en conjunto 
       const simbolos=new Set([" ", ".", ",", "!", "?"]) 
        // if(arrayWord[i]!==" " && arrayWord[i]!== "."){
         if (!simbolos.has(arrayWord[i])) {

          palabraActual+=arrayWord[i];
          
          
        }else{
          if(palabraActual.length>0 ){
             matriz.push(palabraActual);
             palabraActual="";
          }
        }
         
    }

    if(palabraActual.length>0){ // este meteria la ultima palabra , si es que no es vacia luego del espacio 

      matriz.push(palabraActual);
     }
    
    alert("el recuento total de palabras es  = " + matriz.length )
    let repetidas =0;
     for (let i=0; i<matriz.length;i++){

      if(matriz[i]==matriz[i+1]){
        repetidas++;        
      }

    }
    alert("Palabras se repite  "+ repetidas + " veces" )

      }
   
      
       }


       /*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

       
       function convierteBinario(){

        alert("Convertir a Binario");

       }