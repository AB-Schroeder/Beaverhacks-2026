//Pop up
const questions = [
    {q: "Beavers are not the largest rodents", a: false},
    {q: "Beaver teeth are yellowish/white colored", a: false},
    {q: "Beavers can stay underwater for 6-8 minutes", a: true},
    {q: "You care about beavers", a: true},
    {q: "Beavers are herbivores", a: true},
    {q: "Beavers live for roughly 50 years", a: false},
    {q: "Linus is taking your logs", a: true},
    {q: "Bears are the top predator of beavers", a: false},
    {q: "Beavers are nature's businesspeople", a: false},
    {q: "Beavers hibernate", a: false}
];

export function setupPopupLoop(k) {
    k.loop(k.rand(3, 5), () => {
        // Only spawn if a random roll is high enough
        if (k.rand() > 0.5) {
            showPopUp(k);
        }
    });
}
    

function showPopUp(k) {
    const question = k.choose(questions);

    const ui = k.add([
            k.rect(900, 563),
            k.pos(k.center()),
            k.anchor("center"),
            k.color(255, 255, 255),
            k.outline(4),
            k.z(2),
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
                k.destroy(ui); //remove if question right
            } else {
                console.log("wrong loser");
            }
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


