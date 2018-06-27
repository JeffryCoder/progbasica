
var canvas = document.getElementById("area_de_dibujo");


var teclas = 
{
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

console.log(teclas);

//document.addEventListener("keydown", dibujarTeclado);
var x = 100;
var y = 100;

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

dibujarLinea("red", x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) // Funcion para realizacar lineas.
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3,
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



function dibujarTeclado(eventoDibujarTeclado)
{
    var colorcito = "green";
    var movimiento = 1;
    switch (eventoDibujarTeclado.keyCode)
    {
        case teclas.UP:       
        dibujarLinea(colorcito, x, y, x, y - movimiento , papel )
        y = y - movimiento;
        break;

        case teclas.DOWN: 
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel )
        y = y + movimiento;                                                    //Codigo a ejecutar
        break;
        case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento , y, papel )
        x = x - movimiento;
        break;

        case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
        x = x + movimiento;
        break;
        default: console.log("Otra tecla");
        break;


        

    }

}  



document.addEventListener("keydown", dibujarTecladoDiagonal);

var teclasPresionadas = false;

function dibujarTecladoDiagonal(evento)
{
    if (evento.keyCode == teclas.DOWN && evento.keyCode == teclas.UP ) 
    {
        console.log("ola k ase");
    }
    else{
        console.log("Fata algo");
    }
}




