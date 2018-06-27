document.body.addEventListener("mousedown", dibujarMouse);
var canvas = document.getElementById("area_de_dibujo");




var colorMouse = "blue"     //Variables del mouse
var movimientoMouse = 10;
var xMouse = 100;
var yMouse = 100;



var teclas = 
{
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);



function dibujarMouse (eventoMouse)
{   
   

    
    var colorMouse = "red";
    var posicionXMouse = eventoMouse.offsetX;
    var posicionyMouse = eventoMouse.offsetY;


    dibujarLinea ( "red", xMouse,yMouse,posicionXMouse,posicionyMouse,papel );
    
    xMouse = posicionXMouse;
    yMouse = posicionyMouse;
    
    

    console.log("Presionaste el mouse");
    console.log( "Posicion en x "+  eventoMouse.offsetX + " Posicion en y " + eventoMouse.offsetY );
    
    



}






var x = 200;
var y = 200;

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
    var movimiento = 10;
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





