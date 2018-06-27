var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click",dibujoPorClick); 



var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) // Funcion para realizacar lineas.
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

   /* for (l = 0; l < lineas; l++){
    
        xi = 300 - (10 * l);
        yf = 10 * (l + 1);
        dibujarLinea(colorcito, xi, 0 ,0 ,yf);
    }
*/
function dibujoPorClick()
{
    
    var lineas = parseInt(texto.value);
    var l = 0 ;
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

 for (l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Linea " + l);
    }

        dibujarLinea(colorcito,1,1,1,300);
        dibujarLinea(colorcito,1,299,299,299);
    }


/*
dibujarLinea(colorcito, 1,1,300,1); //Linea recta de arriba.
dibujarLinea(colorcito, 299,0,299,299); //Linea recta de la derecha.
dibujarLinea(colorcito, 300, 0 ,0 ,10); //Primera linea de la parte de arriba
dibujarLinea(colorcito, 290,0,0,20); // Segunda Linea
dibujarLinea(colorcito,280,0,0,30); // Tercer linea
dibujarLinea(colorcito,270,0,0,40); // Cuarta linea
*/

