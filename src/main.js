import kaplay from "kaplay";
import { loadAssets } from "./assets";
import { addBackground, addBeaver, addLogPile, addTitle } from "./entities";
//import { setupControls } from "./controls";
import { setupPopupLoop } from "./popup";
import { addLinus, setupLinusLoop } from "./linus";
import { setupFloatingLogs } from "./floatinglogs";
import { showWinScreen } from "./winscreen";

const k = kaplay();

k.onLoad(() => {
    loadAssets(k);
    addBackground(k);
    addTitle(k);

    const beaver = addBeaver(k);
    const linus = addLinus(k);
    const logPile = addLogPile(k);

    const instructionBox = k.add([
        k.rect(900, 563),
        k.pos(k.center()),
        k.anchor("center"),
        k.color(255, 255, 255),
        k.outline(4),
        k.z(2),
        "instruction"
    ]);
    
    const instructionText = k.add([
        k.text("Use W (up), A (left), S (down), D (right) to move\nPress F to collect logs!\nRetrieve 100 logs to build your dam before Linus steals your entire pile!", { size: 20, width: 860 }),
        k.pos(k.center()),
        k.anchor("center"),
        k.z(3),
        k.color(0, 0, 0),
        "instruction"
    ]);
    
    
    k.wait(6, () => {
        k.destroyAll("instruction");
    
        //setupControls(k, beaver);
        setupLinusLoop(k, linus, logPile);
        k.wait(10, () => {
            setupPopupLoop(k);
        })
        setupFloatingLogs(k);


        let logCount = 0;

        const scoreLabel = k.add([
            k.text(`Logs: ${logCount}`, {size: 24}),
            k.pos(k.width() - 50, k.height() - 25),
            k.anchor("botright"),
            k.z(3)
        ]);


        //setupControls(k, beaver);
        setupLinusLoop(k, linus, logPile, () => {
            logCount--;
            scoreLabel.text = `Logs: ${logCount}`;
        });
        setupPopupLoop(k);
        setupFloatingLogs(k);

        //const speed = 100;
        k.onKeyDown("s", () => {
                beaver.move(0, 100); // Move the object while "s" key is held down
        });

        k.onKeyDown("w", () => {
            beaver.move(0, -100); // Move the object while "w" key is held down
        });

        k.onKeyDown("d", () => {
            beaver.move(100, 0); // Move the object while "d" key is held down
        });

        k.onKeyDown("a", () => {
            beaver.move(-100, 0); // Move the object while "a" key is held down
        });

        k.onKeyPress("f", () => {
            const logs = k.get("floatingLog");
            const toDestroy = logs.filter(log => beaver.isOverlapping(log));
            toDestroy.forEach(log => {
                k.destroy(log);
                logCount++;

                scoreLabel.text = `Logs: ${logCount}`;

                if (logCount >= 100) {
                    showWinScreen(k);

                    logCount = 0;
                    scoreLabel.text = `Logs: ${logCount}`;
                }
            });
        });
    });

});
