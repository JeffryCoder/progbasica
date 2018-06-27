    alert("Jeffry");
    
    d = document.getElementById("dibujito");

    lienzo = d.getContext("2d");


    var usuario = prompt("Que dibujo quieres?\n1 Triangulo, 2 cuadrado");
    if (usuario == 1) {
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    lienzo.moveTo(100, 100);
    lienzo.lineTo(200, 200);
    lienzo.lineTo(200, 70);
    lienzo.lineTo(100, 100);
    lienzo.stroke();
    lienzo.closePath();
}
    else if (usuario == 2) {
    lienzo.beginPath();
    lienzo.strokeStyle = "blue";
    lienzo.moveTo(10,10);
    lienzo.lineTo(10,290);
    lienzo.lineTo(290,290);
    lienzo.lineTo(290,10);
    lienzo.lineTo(10,10);
    lienzo.stroke();
    lienzo.closePath();
}
