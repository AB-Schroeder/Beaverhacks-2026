import kaplay from "kaplay";
import { loadAssets } from "./assets";
import { addBackground, addBeaver, addBean, addLogs, addTitle } from "./entities";
import { setupControls } from "./controls";
import { setupPopupLoop } from "./popup";
import { addLinus, setupLinusLoop } from "./linus";
import { setupFloatingLogs } from "./floatinglogs";

const k = kaplay();

k.onLoad(() => {
    loadAssets(k);
    addBackground(k);
    addBean(k);
    addLogs(k);
    addTitle(k);

    const beaver = addBeaver(k);
    const linus = addLinus(k);

    setupControls(k, beaver);
    setupLinusLoop(k, linus);
    setupPopupLoop(k);
    setupFloatingLogs(k);
});
