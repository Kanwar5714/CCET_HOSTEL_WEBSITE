console.log("hello world");
alert("This is a form for Hostel allotment");
console.clear();
document.addEventListener('DOMContentLoaded', function () {
    const balls = document.querySelectorAll('.ball');
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    const speeds = [3, -3, 4, -4, 5, -5, 6]; 
    let positions = []; 

    balls.forEach((ball, index) => {
        positions[index] = {
            x: Math.random() * (maxX - ball.offsetWidth),
            y: Math.random() * (maxY - ball.offsetHeight)
        };
    });

    function moveBalls() {
        balls.forEach((ball, index) => {
            positions[index].x += speeds[index];
            positions[index].y += speeds[index];

          
            if (positions[index].x < 0 || positions[index].x > maxX - ball.offsetWidth) {
                speeds[index] = -speeds[index];
            }
            if (positions[index].y < 0 || positions[index].y > maxY - ball.offsetHeight) {
                speeds[index] = -speeds[index];
            }

            ball.style.left = positions[index].x + 'px';
            ball.style.top = positions[index].y + 'px';
        });


        requestAnimationFrame(moveBalls);
    }

    moveBalls();
});
