import kaplay from "kaplay";
import { loadAssets } from "./assets";
import { addBackground, addBeaver, addBean, addLogPile, addTitle } from "./entities";
//import { setupControls } from "./controls";
import { setupPopupLoop } from "./popup";
import { addLinus, setupLinusLoop } from "./linus";
import { setupFloatingLogs } from "./floatinglogs";

const k = kaplay();

k.onLoad(() => {
    loadAssets(k);
    addBackground(k);
    addBean(k);
    addTitle(k);

    const beaver = addBeaver(k);
    const linus = addLinus(k);
    const logPile = addLogPile(k);

    //setupControls(k, beaver);
    setupLinusLoop(k, linus, logPile);
    setupPopupLoop(k);
    setupFloatingLogs(k);

    //const speed = 100;
    k.onKeyDown("s", () => {
        if (beaver.pos.y > 20){
            beaver.move(0, 100); // Move the object while "s" key is held down
        }
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
        toDestroy.forEach(log => k.destroy(log));
    });
});
