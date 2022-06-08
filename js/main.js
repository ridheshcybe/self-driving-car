import Car from "./car.js";
import Road from "./road.js";
const canvas = document.createElement("canvas");
canvas.width = 200;
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);
animate();
document.body.appendChild(canvas);
function animate() {
    car.update();
    canvas.height = window.innerHeight;
    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}
//# sourceMappingURL=main.js.map