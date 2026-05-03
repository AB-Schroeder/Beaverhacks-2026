const floatingLogs = ["log1", "log2", "log3", "stick1", "stick2", "stick3"];
//const laneCount = 6;

function spawnFloatingLog(k, lane) {
    //console.log("spawning logs in lane", lane);
    //const laneHeight = k.height() / laneCount;
    const y = k.rand(40, k.height() - 40);
    const speed = 40;
    const sprite = k.choose(floatingLogs);

    const log = k.add([
        k.sprite(sprite),
        k.pos(-100, y),
        k.scale(0.4),
        k.anchor("center"),
        k.z(0),
        "floatingLog",
        {
            speed
            //lane,
        },
    ]);

    log.onUpdate(() => {
        log.move(log.speed, 0);
        if (log.pos.x > k.width() + 200) {
            k.destroy(log);
        }
    })
}


export function setupFloatingLogs(k) {
    /*
    for (let lane = 0; lane < laneCount; lane++) {
        k.wait(k.rand(0,6), () => {
            spawnFloatingLog(k, lane);
        })
    }

    k.onUpdate("floatingLog", (log) => {
        log.move(log.speed, 0);
        if (log.pos.x > k.width() + 200) {
            k.destroy(log);
            k.wait(k.rand(2,8), () => {
                spawnFloatingLog(k, log.lane);
            })
        }
    })
    */
   let index = 0;
   k.loop(4, () => {
    spawnFloatingLog(k);
    index++;
   })
}