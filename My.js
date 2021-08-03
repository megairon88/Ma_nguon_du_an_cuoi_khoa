let canvas_1 = document.getElementById("road");
let ctx = canvas_1.getContext("2d");
// vach ke duong
let canvas_2 = document.getElementById("centre_line");
ctx_2 = canvas_2.getContext("2d");
ctx_2.beginPath();
ctx_2.strokeStyle = "white";
ctx_2.moveTo(20,0);
ctx_2.lineTo(20, 755);
ctx_2.stroke();
ctx_2.beginPath();
ctx_2.strokeStyle = "white";
ctx_2.moveTo(580,0);
ctx_2.lineTo(580,755);
ctx_2.stroke();
let car = document.getElementById("car");
let play;
let start = document.getElementById("game_start");
let result = document.getElementById("game_over");
let mark_value;
let score;
let high_score = 0;
start.style.display = "block";
result.style.display = "none";

let Racing_car = new Car(40, 50, 70);
let Obstacle_1 = new Obstacle(35, Racing_car, 0);
let Obstacle_2 = new Obstacle(35, Racing_car, -575);
let Centre_line = new CentreLine;
let RacingGameBoard = new GameBoard(Obstacle_1, Obstacle_2, Racing_car, Centre_line);
Centre_line.drawCentreLine();
function moveSelection(evt) {
    switch(evt.key) {
        case "ArrowLeft":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveLeft();
                RacingGameBoard.check();
            }
            break;
        case "ArrowRight":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveRight();
                RacingGameBoard.check();
            }
            break;
        case "ArrowUp":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveUp();
                RacingGameBoard.check();
            }
            break;
        case "ArrowDown":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveDown();
                RacingGameBoard.check();
            }
            break;
        case "w":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.accelerate();
                clearInterval(play);
                RacingGameBoard.playing();
            }
            break;
        case "s":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.brake();
                clearInterval(play);
                RacingGameBoard.playing();
            }
            break;
        case "Escape":
            if (result.style.display === "none" || start.style.display === "none") {
                RacingGameBoard.stop();
            }
            break;
        case "Enter":
            if ( result.style.display === "block") {
                RacingGameBoard.restart();
            }
            else if (start.style.display === "block") {
                RacingGameBoard.start();
            }
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}