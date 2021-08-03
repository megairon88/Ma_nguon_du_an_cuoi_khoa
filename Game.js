function GameBoard(obstacle_1, obstacle_2, car, centre_line) {
    self = this;
    this.start = function () {
        score = 0;
        start.style.display = "none";
        ctx.clearRect(21, 0, 558, 755);
        car.ready();
        mark_value = -5;
        this.playing();
        this.check();
    };
    this.restart = function () {
        score = 0;
        result.style.display = "none";
        ctx.clearRect(21, 0, 558, 755);
        car.X_position = 250;
        car.Y_position = 500;
        car.ready();
        mark_value = -5;
        obstacle_1.Y_position = 0;
        obstacle_2.Y_position = -575;
        this.playing();
        this.check();
    };
    this.stop = function () {
        result.style.display = "block";
        clearInterval(play);
    };
    this.playing = function playing() {
        play = setInterval(function() {
            mark_value += 5;
            if ((mark_value / 575) % 2 === 0) {
                obstacle_1.clearObstacle();
                obstacle_1.createObstacle();
                obstacle_1.drawObstacle();
            }
            else if ((mark_value / 575) % 2 === 1) {
                obstacle_2.clearObstacle();
                if (mark_value !== 575) {
                    obstacle_2.createObstacle();
                }
                obstacle_2.drawObstacle();
            }
            else {
                obstacle_1.clearObstacle();
                obstacle_1.Y_position += 5;
                obstacle_1.drawObstacle();
                obstacle_2.clearObstacle();
                obstacle_2.Y_position += 5;
                obstacle_2.drawObstacle();
            }
            if (centre_line.Y_position < 95) {
                centre_line.clearCentreLine();
                centre_line.Y_position += 5;
                centre_line.drawCentreLine();
            }
            else {
                centre_line.Y_position = 0;
                centre_line.clearCentreLine();
                centre_line.drawCentreLine();
            }
            score += 1;
            if (score > high_score) {
                high_score = score;
            }
            document.getElementById("score").innerText = score;
            document.getElementById("high_score").innerText = high_score;
            self.check();
            console.log(mark_value);
        }, (100000 / (1 + Math.pow(car.speed, 2))))
    };
    this.check = function check_collision() {
        obstacle_1.check_collision();
        obstacle_2.check_collision();
    }
}