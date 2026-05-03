export function addLinus(k) {
    return k.add([
        k.sprite("linus"),
        k.pos(0, 600), 
        "linus",
        {
            speed: 180,
            dir: 1,
            active: false,
        },
        k.z(1),
        k.opacity(0),
    ])
}



export function setupLinusLoop(k, linus) {
    k.onUpdate(() => {
        if (!linus.active) {
            return;
        }
        linus.move(linus.speed * linus.dir, 0);
    
        if(linus.pos.x + linus.width > k.width() - 90 || linus.pos.x < -400) {
            linus.dir = -linus.dir;
        }
    });
    
    k.loop(18, () => {
        linus.opacity = 1;
        linus.active = true;
    
        k.wait(10, () => {
            linus.opacity = 0;
            linus.active = false;
            linus.pos.x = 0;
            linus.dir = 1;
        })
    })
}


