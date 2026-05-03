export function showWinScreen(k) {
    const winUI = k.add([
        k.rect(k.width() * 0.7, k.height() * 0.5),
        k.pos(k.center()),
        k.anchor("center"),
        k.color(255, 255, 255),
        k.outline(8, k.Color.fromHex("#27ae60")), // Green outline for winning
        k.z(10),
        "win-screen"
    ]);

    winUI.add([
        k.text("CONGRATS!\nYOU'VE BUILT A DAM!", {
            size: 48,
            width: 500,
            align: "center",
        }),
        k.color(0, 0, 0),
        k.anchor("center"),
        k.pos(0, -20),
    ]);

    // Add a button to restart or keep playing
    const closeBtn = winUI.add([
        k.rect(200, 60),
        k.pos(0, 100),
        k.color(k.Color.fromHex("#27ae60")),
        k.anchor("center"),
        k.area(),
    ]);

    closeBtn.add([
        k.text("AMAZING", { size: 24 }),
        k.anchor("center"),
        k.color(255, 255, 255)
    ]);

    closeBtn.onClick(() => {
        k.destroy(winUI);
    });
}