

var _self;
var libs = this;
function construct(display) {
    _self = display;

    _self.addEventListener("added", addStageHandler);
}

function addStageHandler() {
    _self.addEventListener("tick", init);
}
var map = {
    p1:[
        {x:50,y:0},{x:120,y:0},{x:190,y:0},{x:250,y:0},{x:320,y:0},{x:390,y:0},{x:460,y:0},{x:530,y:0},{x:600,y:0},{x:670,y:0},
        {x:50,y:70},{x:120,y:70},{x:190,y:70},{x:250,y:70},{x:320,y:70},{x:390,y:70},{x:444705,y:70},{x:530,y:70},{x:600,y:70},{x:670,y:70},
        {x:50,y:140},{x:120,y:140},{x:190,y:140},{x:250,y:140},{x:320,y:140},{x:390,y:140},{x:460,y:140},{x:530,y:140},{x:600,y:140},{x:670,y:140},
        {x:50,y:210},{x:120,y:210},{x:190,y:210},{x:250,y:210},{x:320,y:210},{x:390,y:210},{x:460,y:210},{x:530,y:210},{x:600,y:210},{x:670,y:210},
        {x:50,y:280},{x:120,y:280},{x:190,y:280},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:530,y:280},{x:600,y:280},{x:670,y:280},
        {x:50,y:350},{x:120,y:350},{x:190,y:350},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:530,y:350},{x:600,y:350},{x:670,y:350},
        {x:50,y:420},{x:120,y:420},{x:190,y:420},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:530,y:420},{x:600,y:420},{x:670,y:420},
        {x:50,y:490},{x:120,y:490},{x:190,y:490},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:530,y:490},{x:600,y:490},{x:670,y:490},
        {x:50,y:560},{x:120,y:560},{x:190,y:560},{x:250,y:560},{x:320,y:560},{x:390,y:560},{x:460,y:560},{x:530,y:560},{x:600,y:560},{x:670,y:560},
        {x:50,y:630},{x:120,y:630},{x:190,y:630},{x:250,y:630},{x:320,y:630},{x:390,y:630},{x:460,y:630},{x:530,y:630},{x:600,y:630},{x:670,y:630},
        {x:50,y:700},{x:120,y:700},{x:190,y:700},{x:250,y:700},{x:320,y:700},{x:390,y:700},{x:460,y:700},{x:530,y:700},{x:600,y:700},{x:670,y:700},
        {x:50,y:770},{x:120,y:770},{x:190,y:770},{x:250,y:770},{x:320,y:770},{x:390,y:770},{x:460,y:770},{x:530,y:770},{x:600,y:770},{x:670,y:770}
    ]
}
function init() {
    _self.removeEventListener("tick", init);


    console.log(_self)
    // 第一层
    // for (let i = 0; i < 15; i++) {
    //     for (let j = 0; j < 15; j++) {
    //         createRect(i * 75, j * 50)
    //     }
    // }
    let a 
    for (const key in map) {
        if (Object.hasOwnProperty.call(map, key)) {
            const list = map[key];
            
            for (let i = 0; i < list.length; i++) {
                a = createRect(list[i].x, list[i].y)
            }
        }
    }
    // // 第二层
    // for (let i = 0; i < 14; i++) {
    //     for (let j = 0; j < 14; j++) {
    //         createRect(i * 50+25, j * 50+25)
    //     }
    // }
    // // 第三层
    // for (let i = 0; i < 13; i++) {
    //     for (let j = 0; j < 13; j++) {
    //         createRect(i * 50+50, j * 50+50)
    //     }
    // }
    // // 第四层
    // for (let i = 0; i < 12; i++) {
    //     for (let j = 0; j < 12; j++) {
    //         createRect(i * 50+75, j * 50+75)
    //     }
    // }
}


function createRect(x, y) {
    if(!x&&!y) return
    let rect = new createjs.Shape();
    let color = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,'')
    rect.graphics.beginFill('#'+color).drawRect(0, 0, 70, 70)
    rect.regX = 35;
    rect.regY = 35;
    rect.x = x;
    rect.y = y;
    rect.addEventListener("click",rectClick)

    rect.addEventListener('mousedown', stageMouseDownHandler);
    rect.addEventListener('pressup', stageMouseUpHandler);

    _self.contentMC.addChild(rect)
    return rect;
}
function rectClick(e){
    console.log('11')
    let mc = e.currentTarget
    mc.scaleX  = mc.scaleY = 1.9
    mc.parent.setChildIndex(mc,99999);
}
// 长按
function stageMouseDownHandler(e){
    console.log('444',e)
    let mc = e.currentTarget
    mc.scaleX  = mc.scaleY = 1.5
    mc.parent.setChildIndex(mc,99999);
}
function stageMouseUpHandler(e){
    console.log('555')
    let mc = e.currentTarget
    mc.scaleX  = mc.scaleY = 1
    mc.parent.setChildIndex(mc,99999);
}

module.exports.construct = construct;