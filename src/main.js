import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");
k.loadSprite("beaver", "sprites/pixilart-sprite.png");

const beaver = k.add([
    k.sprite("beaver"),
    k.pos(80, 120), 
    "beaver",
])

const score = add([
    text("Siya's Branch", {
        size: 48, // 48 pixels tall
        width: 320, // it'll wrap to next line when width exceeds this value
        font: "sans-serif", // specify any font you loaded or browser built-in
    }),
    pos(24, 24),
])

k.add([k.pos(120, 80), k.sprite("bean")]);

k.onUpdate(() => {
    let speed = 200;

    k.onKeyDown("s", () => {
        beaver.move(0, speed * k.dt()); // Move the object while "s" key is held down
    });

    k.onKeyDown("w", () => {
        beaver.move(0, -speed * k.dt()); // Move the object while "w" key is held down
    });

    k.onKeyDown("d", () => {
        beaver.move(speed * k.dt(), 0); // Move the object while "d" key is held down
    });

    k.onKeyDown("a", () => {
        beaver.move(-speed * k.dt(), 0); // Move the object while "a" key is held down
    });
});


