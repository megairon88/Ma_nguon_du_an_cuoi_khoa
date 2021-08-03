function Obstacle(x, car, y) {
    this.X_position = Math.floor(Math.random() * 348) + x;;
    this.Y_position = y;
    this.width = 200;
    this.height = 75;
    this.createObstacle = function () {
        this.X_position = Math.floor(Math.random() * 348) + x;
        this.Y_position = 0;
    };
    this.drawObstacle = function () {
        ctx.fillRect(this.X_position, this.Y_position, this.width, this.height);
    };
    this.clearObstacle = function () {
        ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
    };
    this.check_collision = function () {
        if((this.X_position + this.width > car.X_position && this.X_position < car.X_position && this.Y_position < car.Y_position && this.Y_position + this.height > car.Y_position) ||
            (this.X_position + this.width > car.X_position && this.X_position < car.X_position && this.Y_position > car.Y_position && this.Y_position < car.Y_position + car.height) ||
            (this.X_position > car.X_position && this.X_position < car.X_position + car.width && this.Y_position < car.Y_position && this.Y_position + this.height > car.Y_position) ||
            (this.X_position > car.X_position && this.X_position < car.X_position + car.width && this.Y_position < car.Y_position + car.height && this.Y_position + this.height > car.Y_position + car.height)) {
            clearInterval(play);
            result.style.display = "block";
        }
    }
}