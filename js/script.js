let diametro = 400;
let punti = 0;
let messaggio = "Punti: 0";
let clickX = null, clickY = null;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("container");
    draw();
}

function draw() {
    background(220);
       
        fill(255, 0, 0); 
        noStroke();
        circle(width / 2, height / 2, diametro);
    
        fill(255, 255, 255); 
        noStroke();
        circle(width / 2, height / 2, diametro - 40);
    
        fill(255, 0, 0);
        noStroke();
        circle(width / 2, height / 2, diametro - 80);
    
        fill(255, 255, 255);
        noStroke();
        circle(width / 2, height / 2, diametro - 120);
    
        fill(255, 0, 0);
        noStroke();
        circle(width / 2, height / 2, diametro - 160);
    
        fill(255, 255, 255);
        noStroke();
        circle(width / 2, height / 2, diametro - 200);
    
        fill(255, 0, 0);
        noStroke();
        circle(width / 2, height / 2, diametro - 240);
    
        fill(255, 255, 255);
        noStroke();
        circle(width / 2, height / 2, diametro - 280);
    
        fill(255, 0, 0);
        noStroke();
        circle(width / 2, height / 2, diametro - 320);
    
        fill(255, 255, 255);
        noStroke();
        circle(width / 2, height / 2, diametro - 360);

    document.querySelector("#risultati").innerHTML = messaggio;

     if (clickX !== null && clickY !== null) {
        fill(0);
        noStroke();
        circle(clickX, clickY, 10);
    }
}

function mouseClicked() {
    
    let d = dist(mouseX, mouseY, width / 2, height / 2);
    clickX = mouseX;
    clickY = mouseY;

    if (d <= 25) {
        punti = 50;
    } else if (d <= 65) {
        punti = 25;
    } else if (d <= 105) {
        punti = 10;
    } else if (d <= 145) {
        punti = 5;
    } else if (d <= 185) {
        punti = 3;
    } else if (d <= 205){
        punti = 1;
    } else {
        punti = 0;
        messaggio = "Fuori dal bersaglio!"; 
        return
    }

    messaggio = "Punti: " + punti;
    
    
    draw();
}