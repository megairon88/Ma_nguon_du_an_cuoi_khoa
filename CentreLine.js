function CentreLine() {
    this.X_position = 300;
    this.Y_position = 0;
    this.drawCentreLine = function () {
        ctx_2.strokeStyle = "white";
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position - 100);
        ctx_2.lineTo(this.X_position, this.Y_position - 50);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position);
        ctx_2.lineTo(this.X_position, this.Y_position + 50);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 100);
        ctx_2.lineTo(this.X_position, this.Y_position + 150);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 200);
        ctx_2.lineTo(this.X_position, this.Y_position + 250);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 300);
        ctx_2.lineTo(this.X_position, this.Y_position + 350);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 400);
        ctx_2.lineTo(this.X_position, this.Y_position + 450);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 500);
        ctx_2.lineTo(this.X_position, this.Y_position + 550);
        ctx_2.stroke();
        ctx_2.moveTo(this.X_position, this.Y_position + 600);
        ctx_2.lineTo(this.X_position, this.Y_position + 650);
        ctx_2.stroke();
        ctx_2.moveTo(this.X_position, this.Y_position + 700);
        ctx_2.lineTo(this.X_position, this.Y_position + 750);
        ctx_2.stroke();
    };
    this.clearCentreLine = function () {
        ctx_2.clearRect(299, 0, 2, 755);
    }
}