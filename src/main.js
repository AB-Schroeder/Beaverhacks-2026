import kaplay from "kaplay";

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
        size: 48, 
        width: 320, 
        font: "sans-serif", 
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



//Pop up
function showPopUp() {
    const ui = k.add([
            k.rect(900, 563),
            k.pos(k.center()),
            k.anchor("center"),
            k.color(255, 255, 255),
            k.outline(4),
            "popup"
        ]);


//red x button
    const xBtn = ui.add([
        k.rect(30, 30),
        k.pos(430, -260),
        k.color(255, 0, 0),
        k.anchor("center"),
        k.area(),
        k.z(10),
        "close-button"
    ]);

    xBtn.add([
        k.text("X", {}),
        k.anchor("center"),
        k.color(255, 255, 255)
    ]);
}

showPopUp();