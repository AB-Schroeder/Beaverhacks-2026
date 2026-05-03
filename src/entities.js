// Adding the background

export function addBackground(k) {
    return k.add([
        k.sprite("bg"),
        k.pos(0, 0),
        k.scale(k.width() / 16, k.height() / 16),
        k.z(-1), // ensures it's in the background
    ]); 
}

export function addBeaver(k) {
    return k.add([
        k.sprite("beaver"),
        k.pos(80, 120), 
        "beaver",
        k.z(2),
    ])
}

export function addBean(k) {
    return k.add([k.pos(120, 80), k.sprite("bean")]);
}

export function addLogs(k) {
    return k.add([
        k.sprite("logs"),
        k.anchor("botright"),
        k.pos(k.width(), k.height()), 
        "logs",
        k.z(0),
    ])
}

export function addTitle(k) {
    return k.add([
        k.text("Linus's Logs", {
            size: 48, // 48 pixels tall
            width: 320, // it'll wrap to next line when width exceeds this value
            font: "sans-serif", // specify any font you loaded or browser built-in
        }),
        k.pos(24, 24),
    ])
}











