
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

const boton6=document.getElementById("boton6");
if(boton6){boton6.addEventListener("click",convierteMose);}
// let variableCargaTexto=document.getElementById('intoDiv3');
// variableCargaTexto.innerHTML=morseString;
const boton7=document.getElementById("boton7");
if(boton7){boton7.addEventListener("click",validaParentesis);}

const boton8=document.getElementById("boton8");
if(boton8){boton8.addEventListener("click", delCharacter);}

const boton9=document.getElementById("boton9");
if(boton9){boton9.addEventListener("click", palindromo);}

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


       // # 8 contador de palabras
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

       // #9 decimal a Binario
       /*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

       
       function convierteBinario(){

       var numero=document.getElementById('numero').value
        // alert("numero = "  + numero)
        numero=parseFloat(numero)
        if(!isNaN(numero)){
          // alert("el numero en el IF es = " + numero);
         
          let cociente=numero;
          let residuo=[];
          let residuoNum;
          while(cociente>0){
          // alert("cociente1=" +cociente)
          
            // alert("entro al for")
          residuoNum=cociente % 2;
          cociente=Math.floor(cociente/2);      
          residuo.push(residuoNum);

          // alert("Numero es = " + cociente + " residuo es = " + residuo)
          }
          residuo=residuo.reverse();
          // alert("El numero " + numero + " como Binario es  = " + residuo)
          let printCadena=document.getElementById('intoDiv1');
          printCadena.innerHTML = residuo;

        }else{
          alert("intente nuevamente, no se ingreso un numero");
        }       
       
       }

       /*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "-", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */
       //#10 convertir a Morse
       // 1 defino el diccionario para todo el alfabeto morse 
    function convierteMose(){  
       var claveMorse=document.getElementById('claveMorse').value;
      //  claveMorse=claveMorse.toUpperCase;
        if(claveMorse!=""){
          // 1. valido si se ingreso minimo un caracter         
          // aqui debo validar si todos los sibolos son "." o "-""
          // claveMorse=claveMorse.toUpperCase;
            let contador=0;
            const simbolo=new Set([".","-"," "]);
             for(let i=0;i<claveMorse.length;i++){
              if (!simbolo.has(claveMorse[i])){

                // alert("valido que es diferente de  espacio , punto o linea    = " + claveMorse[i]);
              }else{
                 contador++;
                //  alert("validacion  que es igual a un punto , linea  y sumo contador = " + contador);
              }  
             }
 
             const morse=new Map([            
  
                ["A",".-"],
                ["B","-..."],
                ["C","-.-."],
                ["CH","----"],
                ["D","-.."],
                ["E","."],
                ["F","..-."],
                ["G","--."],
                ["H","...."],
                ["I",".."],
                ["J",".---"],
                ["K","-.-"],
                ["L",".-.."],
                ["M","--"],
                ["N","-."],
                ["Ñ","--.--"],
                ["O","---"],
                ["P",".--."],
                ["Q","--.-"],
                ["R",".-."],
                ["S","..."],
                ["T","-"],
                ["U","..-"],
                ["V","...-"],
                ["W",".--"],
                ["X","-..-"],
                ["Y","-.--"],
                ["Z","--.."],
                ["0","-----"],
                ["1",".----"],
                ["2","..---"],
                ["3","...--"],
                ["4","....-"],
                ["5","....."],
                ["6","-...."],
                ["7","--..."],
                ["8","---.."],
                ["9","----."],
                [".",".-.-.-"],
                [",","--..--"],
                ["?","..--.."],
                ['"',".-..-."],
                ]);

            const morseALetra=new Map([
              [".-","A"],
              ["-...","B"],
              ["-.-.","C"],
              ["----","CH"],
              ["-..","D"],
              [".","E"],
              ["..-.","F"],
              ["--.","G"],
              ["....","H"],
              ["..","I"],
              [".---","J"],
              ["-.-","K"],
              [".-..","L"],
              ["--","M"],
              ["-.","N"],
              ["--.--","Ñ"],
              ["---","O"],
              [".--.","P"],
              ["--.-","Q"],
              [".-.","R"],
              ["...","S"],
              ["-","T"],
              ["..-","U"],
              ["...-","V"],
              [".--","W"],
              ["-..-","X"],
              ["-.--","Y"],
              ["--..","Z"],
              ["-----","0"],
              [".----","1"],
              ["..---","2"],
              ["...--","3"],
              ["....-","4"],
              [".....","5"],
              ["-....","6"],
              ["--...","7"],
              ["---..","8"],
              ["----.","9"],
              [".-.-.-","."],
              ["--..--",","],
              ["..--..","?"],
              [".-..-.",'"'],
              ]);
              
             let arrayConversion=[];
             let caracter="";
             let letra="";
             if(contador==claveMorse.length){
              // 2. ESTO ES MORSE POR TANTO CONVIERTO             
             alert("valor que se debe convertir es  = " + claveMorse);
             for(let i=0;i<claveMorse.length;i++){
                  if(claveMorse[i]!= " "){
                     letra+=claveMorse[i];
                    //  alert("valor de arrayConversion= " + letra);
                    }else{  
                      arrayConversion.push(morseALetra.get(letra));
                      alert("encontro 1 espacio hace push a  arrayLetra" ) 
                      letra="";              
                    } 

                    // caracter=letra;              
               
              }
               // arrayConversion.push(morse.get("U"));
               arrayConversion.push(morseALetra.get(letra));

              
              // arrayConversion.push(morseALetra.get(caracter));
              alert(" hace push =" + arrayConversion + " Caracter = " + letra);
              //  alert(" control");
                
                // arrayletra.push(morseALetra.get(arrayConversion));
                // alert("letras son igual a = "+ arrayletra + "el valor de conversion en este punto es = " + arrayConversion);
             } else{
              // aqui hago inicia la conversion de letras a CLAVE MORSE
              claveMorse=claveMorse.toUpperCase();
              for(let i=0;i<claveMorse.length;i++){
                // alert(morse.get("A"));
                arrayConversion.push(morse.get(claveMorse[i]));
                arrayConversion.push(" ");
                // alert("debo convertirlo a clave morse")
              }
              // alert("el texto en morse es---->  " + arrayConversion.join(''));
            }

            // convierto el arreglo  para poderlo mostrar correctamente 

            const resultado=arrayConversion.reduce((acumulador,elemento)=>{
                if(elemento===undefined){
                    return acumulador + ' ';
                 }else{
                  return acumulador+elemento;
                 }

            },'');
            

            let variableCargaTexto=document.getElementById('intoDiv3');
            
            // variableCargaTexto.innerHTML=arrayConversion.join();
            variableCargaTexto.innerHTML=resultado;

              // alert("imprime el valor de contador=" + contador);
       //}
      }else{
        alert("por favor  ingresar minimo 1 palabra ");
      }
   }

// #11 comprobar apertura y cierre de paréntesis 
   /*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

   function validaParentesis(){
    // var claveMorse=document.getElementById('claveMorse').value;
    var parentesis=document.getElementById('parentesis').value;
    const apertura= new Set(["(","[","{"]);
    const cierre=new Set([")","]","}"]);
    contador=0;
    if(parentesis!=""){
      // - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
        for(let i=0;i<parentesis.length;i++){
          if(apertura.has(parentesis[i])){
              contador++;
              // alert("Contador= " + contador);
          }else if(cierre.has(parentesis[i])){
            contador--;
            // alert("Contador si no  encontro= " + contador);
          }    

        }
        // alert("contador al salir del for " + contador)
         if (contador!=0){
        //   // variableCargaTexto.innerHTML=resultado;
           alert("LA EXPRESION SE ENCUENTRA DESBALANCEADA EN " + contador)
         }else{

          alert("LA EXPRESION SE ENCUENTRA BALANCEADA " + contador)

         }

    }else{
     alert("el campo  no debes vacio.");

    }

   }


 // # 12 ELIMINANDO CARACTERES
 //  recibiendo 2 cadenas  e imprimiendo 2 resultados  eliminando el texto repetido en la otra cadena 
/* 
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function delCharacter(){

  var str1=document.getElementById("str1").value;
  var str2=document.getElementById("str2").value;
  var out1="";
  var out2="";

if (str1!="" && str2!=""){
  alert("Textos = " + str1+ " con "+ str2 ); 
  // hola  // la

const eliminaCaracter=new RegExp(`[${str2}]`,'g');
const eliminaCaracter2=new RegExp(`[${str1}]`,'g');
out1=str1.replace(eliminaCaracter,'');
out2=str2.replace(eliminaCaracter2,'');

 
 alert("Salida out 1=" + out1 +" Salida out2= "+out2);

}else
  alert("uno o los dos campos se encuetra vacio , por favor llenar los dos campos " );
}




function palindromo(){



  
}