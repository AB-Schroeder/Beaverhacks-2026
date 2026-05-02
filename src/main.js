import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");
k.loadSprite("beaver", "sprites/beaver.png");


k.add([k.pos(120, 80), k.sprite("bean")]);
k.add([k.pos(80, 120), k.sprite("beaver")]);

k.onClick(() => k.addKaboom(k.mousePos()));