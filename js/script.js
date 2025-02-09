let diametro = 400;
let punti = 0;
let messaggio = "Punti: 0"; // Messaggio iniziale

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("container"); // Posiziona il canvas nel div
    draw();
}

function draw() {
    background(220);
    let colors = [[255, 0, 0], [255, 255, 255]]; // Rosso e bianco
    let step = 40;

    for (let i = 0; i < 10; i++) {
        fill(colors[i % 2]); // Alterna i colori
        circle(width / 2, height / 2, diametro - i * step);
    }

    // Aggiorna il messaggio a schermo
    document.querySelector("#risultati").innerText = messaggio;
}

function mouseClicked() {
    // Calcola la distanza tra il centro del bersaglio e il punto cliccato
    let d = dist(mouseX, mouseY, width / 2, height / 2);

    // Assegna punti in base alla distanza
    if (d <= 20) {
        punti = 50;
    } else if (d <= 60) {
        punti = 25;
    } else if (d <= 100) {
        punti = 10;
    } else if (d <= 140) {
        punti = 5;
    } else if (d <= 180) {
        punti = 3;
    } else if (d <= 220){
        punti = 1;
    } else {
        punti = 0;
        messaggio = "Fuori dal bersaglio!"; 
        return
    }

    // Aggiorna il messaggio con il punteggio ottenuto
    messaggio = "Punti: " + punti;
    
    // Ridisegna il bersaglio con il messaggio aggiornato
    draw();
}
