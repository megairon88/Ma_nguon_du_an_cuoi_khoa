function Car(vertical_speed, horizontal_speed, speed) {
    this.X_position = 250;
    this.Y_position = 500;
    this.width = 100;
    this.height = 189;
    this.speed = speed;
    this.ready = function () {
        this.speed = speed;
        document.getElementById("car_speed").innerText = this.speed;
        ctx.drawImage(car, this.X_position, this.Y_position);
    };
    this.moveLeft = function () {
        if (this.X_position - horizontal_speed > 20) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.X_position -= horizontal_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.moveRight = function () {
        if (this.X_position + horizontal_speed + this.width < 580) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.X_position += horizontal_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.moveUp = function () {
        if (this.Y_position - vertical_speed > 0) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.Y_position -= vertical_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.moveDown = function () {
        if (this.Y_position + vertical_speed + this.height < 755) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.Y_position += vertical_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.accelerate = function () {
        if (this.speed <= 115) {
            this.speed += 5;
            document.getElementById("car_speed").innerText = this.speed;
        }
    };
    this.brake = function () {
        if (this.speed >= 5) {
            this.speed -= 5;
            document.getElementById("car_speed").innerText = this.speed;
        }
    };
}