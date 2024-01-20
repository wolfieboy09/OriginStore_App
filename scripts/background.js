var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var numPoints = 100; // Change this variable to control the number of points
var points = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function Point() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.size = Math.random() * 1 + 1;
    this.opacity = 0;
}

Point.prototype.update = function() {
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    this.x += this.speedX;
    this.y += this.speedY;
}

function createPoints() {
    for (var i = 0; i < numPoints; i++) {
        points.push(new Point());
    }
}

function drawPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach(function(point, i) {
    point.update();
    ctx.globalAlpha = point.opacity;
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath();
    for (var j = i + 1; j < numPoints; j++) {
        var dx = points[j].x - point.x;
        var dy = points[j].y - point.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
            ctx.globalAlpha = 1.1 - (dist / 200);
            ctx.lineWidth = 1;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = '#5797ff';
            ctx.stroke();
            ctx.closePath();
        }
    }
    });
}

function animate() {
    drawPoints();
    setTimeout(function() {
        requestAnimationFrame(animate);
    }, 100); // Increase or decrease the delay (in milliseconds) to control the speed
}

resize();
createPoints();
animate();

window.addEventListener('resize', resize);
