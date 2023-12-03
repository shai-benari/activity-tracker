var canvas = document.querySelector("canvas") || null;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);
var c = canvas.getContext('2d');
// c!.fillStyle = 'rgb(250, 0, 0, 0.5)';
// c!.fillRect(50,50,100,100);
// c!.fillStyle = 'rgb(0, 250, 0, 0.5)';
// c!.fillRect(200,200,100,100);
// c!.fillStyle = 'rgb(0, 0, 250, 0.5)';
// c!.fillRect(350, 350,100,100);
// for(let i=0 ; i <10 ; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let r =Math.floor(Math.random() * 250);
//     let g = Math.floor(Math.random() * 250);
//     let b = Math.floor(Math.random() * 250 );
//     console.log(r);
//     console.log(x);
//     c!.beginPath();
//     c?.arc(x, y, 30, 0, Math.PI*2, false);
//     c!.strokeStyle = 'rgb(250, 0, 0, 0.9)';
//     c?.stroke();
// };
var x = 200;
var dx = 5;
var y = 200;
var dy = 5;
var R = 30;
function animate() {
    requestAnimationFrame(animate);
    c === null || c === void 0 ? void 0 : c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c === null || c === void 0 ? void 0 : c.arc(x, y, R, 0, Math.PI * 2, false);
    c.strokeStyle = 'rgb(250, 0, 0, 0.9)';
    c === null || c === void 0 ? void 0 : c.stroke();
    if (x > innerWidth - R || x < 0 + R) {
        dx = -dx;
    }
    else if (y > innerHeight - R || y < 0 + R) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
;
animate();
