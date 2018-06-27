var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var xCerdo = 250;
var yCerdo = 250;
document.addEventListener("keydown", moverCerdo);
var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

}


var fondo = {
    url : "tile.png",
    cargaOK : false
}

var vaca = {

    url: "vaca.png",
    cargaOK: false

};

var cerdo = {
    url : "cerdo.png",
    cargaOK : false,
}

var pollo = {
    url : "pollo.png",
    cargaOK : false
};

var cantidad = aleatorio(5,50);
cerdo.imagen = new Image();

cerdo.imagen.src = cerdo.url;



fondo.imagen = new Image();

fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src= vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
    
}



function dibujar()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOK)
    {
        
        
        console.log("Vacas: " + cantidad);
        for (var v=0; v < cantidad ; v++  ){
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen,x,y);
        }

    }
    if (cerdo.cargaOK){
        papel.drawImage(cerdo.imagen,xCerdo,yCerdo);
        
    }
}


function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}



function moverCerdo(ec)
{
    

    switch(ec.keyCode)
    {
        case teclas.UP: console.log("Arriba");
        dibujar();
        papel.drawImage(cerdo.imagen,xCerdo,yCerdo)
        
        yCerdo = yCerdo - 10;
        
        break;

        case teclas.DOWN: console.log("Abajo");

        
        dibujar();
        papel.drawImage(cerdo.imagen,xCerdo,yCerdo)
        
        yCerdo = yCerdo + 10;
        break;

        case teclas.LEFT: console.log("Izquierda");
        
        dibujar();
        papel.drawImage(cerdo.imagen,xCerdo,yCerdo)
        
        xCerdo = xCerdo - 10;
        break;

        case teclas.RIGHT: console.log("Derecha");
        
        dibujar();
        papel.drawImage(cerdo.imagen,xCerdo,yCerdo)
        
        xCerdo = xCerdo + 10;
        break;
    }
}