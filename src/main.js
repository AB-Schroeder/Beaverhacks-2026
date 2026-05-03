import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();

k.loadRoot(""); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");
k.loadSprite("beaver", "sprites/pixilart-sprite.png");
k.loadSprite("bg", "pixil-frame-0.png");
k.loadSprite("logs", "sprites/logs.png");
k.loadSprite("linus", "sprites/linus-grey.png");

// Adding the background
k.add([
    k.sprite("bg"),
    k.pos(0, 0),
    k.scale(k.width() / 16, k.height() / 16),
    k.z(-1), // ensures it's in the background
]);

const beaver = k.add([
    k.sprite("beaver"),
    k.pos(80, 120), 
    "beaver",
])

const linus = k.add([
    k.sprite("linus"),
    k.pos(0, 600), 
    "linus",
    {
        speed: 180,
        dir: 1,
        active: false,
    },
    k.z(1),
    opacity(0),
])

const logs = k.add([
    k.sprite("logs"),
    k.pos(780, 550), 
    "logs",
    k.z(0),
])

const title = add([
    text("Linus's Logs", {
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


k.onUpdate(() => {
    if (!linus.active) {
        return;
    }
    linus.move(linus.speed * linus.dir, 0);

    if(linus.pos.x + linus.width > k.width() - 90 || linus.pos.x < -400) {
        linus.dir = -linus.dir;
    }
});

loop(18, () => {
    linus.opacity = 1;
    linus.active = true;

    wait(10, () => {
        linus.opacity = 0;
        linus.active = false;
        linus.pos.x = 0;
        linus.dir = 1;
    })
})