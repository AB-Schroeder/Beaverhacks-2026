export function addLinus(k) {
    return k.add([
        k.sprite("linus"),
        k.pos(0, k.height() - 180), 
        "linus",
        {
            speed: 150,
            dir: 1,
            state: "idle",
        },
        k.z(1),
        //k.opacity(0),
    ])
}



export function setupLinusLoop(k, linus, logs) {
    const startX = -300;

    function startCycle() {
        linus.pos.x = startX;
        linus.dir = 1;
        linus.state = "walking_right";
    }

    k.onUpdate(() => {
        if (linus.state === "idle") {
            return;
        }
        linus.move(linus.speed * linus.dir, 0);
    
        if(linus.state === "walking_right") {
            //const logX = logs.pos.x - logs.width;
            if (linus.pos.x >= k.width() - 430) {
                linus.dir = -1;
                linus.state = "walking_left";
            }
        }

        if(linus.state === "walking_left") {
            if (linus.pos.x <= startX - 150) {
                linus.state = "idle";
                k.wait(8, () => {
                    startCycle();
                })
            }
        }
    });
    
    startCycle();
}


