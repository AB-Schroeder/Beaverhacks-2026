import kaplay from "kaplay";

const k = kaplay();

k.loadRoot(""); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");
k.loadSprite("beaver", "sprites/pixilart-sprite.png");
k.loadSprite("bg", "pixil-frame-0.png");

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
const questions = [
    {q: "Beavers are not the largest rodents", b: false},
    {q: "Beaver teeth are yellowish/white colored", b: false},
    {q: "Beavers can stay underwater for 6-8 minutes", a: true},
    {q: "You care about beavers", a: true}
];


function showPopUp() {
    const question = k.choose(questions);

    const ui = k.add([
            k.rect(900, 563),
            k.pos(k.center()),
            k.anchor("center"),
            k.color(255, 255, 255),
            k.outline(4),
            "popup"
    ]);

    ui.add([
        k.text(question.q, {size: 42, width: 700}),
        k.color(0, 0, 0),
        k.anchor("center"),
        k.pos(0, -100),
    ]);

    const createBtn = (label, isTrue, xPos) => {
        const btn = ui.add([
            k.rect(200, 80),
            k.pos(xPos, 100),
            k.color(isTrue ? k.Color.fromHex("#27ae60") : k.Color.fromHex("#e74c3c")),
            k.anchor("center"),
            k.area(),
            "button"
        ]);

        btn.add([k.text(label, { size: 32 }), k.anchor("center")]);

        btn.onClick(() => {
            if (isTrue === question.a) {
                console.log("Correct!");
            } else {
                console.log("Wrong!");
            }
            k.destroy(ui); // Remove the UI
        });
    };

    createBtn("True", true, -150);
    createBtn("False", false, 150);


//red x button
    const xBtn = ui.add([
        k.rect(40, 40),
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


k.loop(k.rand(3, 5), () => {
        // Only spawn if a random roll is high enough
        if (k.rand() > 0.5) {
            showPopUp();
        }
});
