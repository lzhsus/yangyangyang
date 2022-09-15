module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,664,319],[0,321,180,155],[78,478,43,50],[0,478,76,42]]}
];


// symbols:



(lib.未标题1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.未标题4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1640);


(lib.happy_347_1663258159743_12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.happy_437_1663257928979_10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.happy_791_1663258159741_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_347_1663258159743_12();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_791_1663258159741_6, new cjs.Rectangle(-21.5,-25,43,50), null);


(lib.happy_521_1663257383618_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EginAEnIAApNMBFPAAAIAAJNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_521_1663257383618_0, new cjs.Rectangle(-221.5,-29.5,443.2,59.1), null);


(lib.happy_774_1663257928979_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_437_1663257928979_10();
	this.instance.parent = this;
	this.instance.setTransform(-38,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_774_1663257928979_6, new cjs.Rectangle(-38,-21,76,42), null);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-16,-115);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96,-197);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-196,-224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-224,360,264);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(40,-135);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74,-167);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-187.5,-112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-167,407.5,209.5);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(20,-114.5);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127,-114.5);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-200,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-114.5,400,229);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-155);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.5,-108);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-168.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-155,337,310);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-90,-180);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,-67);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-180,210,360);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-152.5,-161.5);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-113.5,-48.5);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-161.5,305,323);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-195,-116);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122,-39);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,-39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-116,390,232);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-228,-75.5);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-109,-60.5);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48,-94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-94.5,456,189);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-185,0);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-68,-50);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-155,370,310);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-148,25);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-71);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-32,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-180,296,360);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题4();
	this.instance.parent = this;
	this.instance.setTransform(-125.5,48);

	this.instance_1 = new lib.未标题4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.5,-79);

	this.instance_2 = new lib.未标题4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-115.5,-203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-203,251,406);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.未标题1();
	this.instance.parent = this;
	this.instance.setTransform(-332,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-332,-159.5,664,319), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EginAEnIAApNMBFPAAAIAAJNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-221.5,-29.5,443.2,59.1), null);


(lib.happy_970_1663258159741_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_791_1663258159741_6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.16,y:-4},13).to({scaleY:1,y:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-25,43,50);


(lib.happy_335_1663257928978_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_774_1663257928979_6();
	this.instance.parent = this;
	this.instance.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.26,y:-8.5},11).to({regX:0.1,regY:0.1,scaleY:0.93,x:0.1,y:-1.3},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-24,76,42);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 人物
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(173.5,-147);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,-63);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,-7);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(38,37.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-43,-18);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-94.5,-63.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.补间7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-133,-137);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-102.5,-195);
	this.instance_7._off = true;

	this.instance_8 = new lib.补间9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-38,-235.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.补间10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(35.5,-246.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.补间11("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(87,-204);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:130,y:-63},4).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true,x:93,y:-7},6).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},6).to({_off:true,x:38,y:37.5},8).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},8).to({_off:true,x:-43,y:-18},9).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},9).to({_off:true,x:-94.5,y:-63.5},9).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},9).to({_off:true,x:-133,y:-137},9).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},9).to({_off:true,x:-102.5,y:-195},10).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},10).to({_off:true,x:-38,y:-235.5},11).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},11).to({_off:true,x:35.5,y:-246.5},9).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},9).to({_off:true,x:87,y:-204},7).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(75).to({_off:false},7).to({x:184,y:-199.1},7).to({x:173.5,y:-147},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48,-350,251,406);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,y:-9.5},12).to({scaleX:1,scaleY:1,y:0},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332,-159.5,664,319);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop()
	}
	this.frame_100 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1).call(this.frame_100).wait(1));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_1 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_2 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_3 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_4 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_5 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_6 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_7 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_8 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_9 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_10 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_11 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_12 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_14 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_15 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_16 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_17 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_18 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_19 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_20 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_21 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_22 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_23 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_24 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_25 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_26 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_27 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_28 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_29 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_30 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_31 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_32 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_33 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_34 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_35 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_36 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_37 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_38 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_39 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_40 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_41 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_42 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_43 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_44 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_45 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_46 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_47 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_48 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_49 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_50 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_51 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_52 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_53 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_54 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_55 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_56 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_57 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_58 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_59 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_60 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_61 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_62 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_63 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_64 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_65 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_66 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_67 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_68 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_69 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_70 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_71 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_72 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_73 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_74 = new cjs.Graphics().p("EgnDBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_75 = new cjs.Graphics().p("EgmxBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_76 = new cjs.Graphics().p("EgmYBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_77 = new cjs.Graphics().p("Egl/BwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_78 = new cjs.Graphics().p("EglmBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_79 = new cjs.Graphics().p("EglNBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_80 = new cjs.Graphics().p("Egk0BwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_81 = new cjs.Graphics().p("EgkaBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_82 = new cjs.Graphics().p("EgkBBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_83 = new cjs.Graphics().p("EgjoBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_84 = new cjs.Graphics().p("EgjPBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_85 = new cjs.Graphics().p("Egi2BwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_86 = new cjs.Graphics().p("EgidBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_87 = new cjs.Graphics().p("EgiEBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_88 = new cjs.Graphics().p("EghrBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_89 = new cjs.Graphics().p("EghRBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_90 = new cjs.Graphics().p("Egg4BwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_91 = new cjs.Graphics().p("EggfBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_92 = new cjs.Graphics().p("EggGBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_93 = new cjs.Graphics().p("EgftBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_94 = new cjs.Graphics().p("EgfUBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_95 = new cjs.Graphics().p("Ege7BwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_96 = new cjs.Graphics().p("EgeiBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_97 = new cjs.Graphics().p("EgeIBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_98 = new cjs.Graphics().p("EgdvBwvIAApYMBOHAAAIAAJYg");
	var mask_graphics_99 = new cjs.Graphics().p("EgdWBwvIAApYMBOHAAAIAAJYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-123.2,y:721.5}).wait(1).to({graphics:mask_graphics_1,x:-118.2,y:721.5}).wait(1).to({graphics:mask_graphics_2,x:-113.2,y:721.5}).wait(1).to({graphics:mask_graphics_3,x:-108.1,y:721.5}).wait(1).to({graphics:mask_graphics_4,x:-103.1,y:721.5}).wait(1).to({graphics:mask_graphics_5,x:-98.1,y:721.5}).wait(1).to({graphics:mask_graphics_6,x:-93.1,y:721.5}).wait(1).to({graphics:mask_graphics_7,x:-88,y:721.5}).wait(1).to({graphics:mask_graphics_8,x:-83,y:721.5}).wait(1).to({graphics:mask_graphics_9,x:-78,y:721.5}).wait(1).to({graphics:mask_graphics_10,x:-73,y:721.5}).wait(1).to({graphics:mask_graphics_11,x:-67.9,y:721.5}).wait(1).to({graphics:mask_graphics_12,x:-62.9,y:721.5}).wait(1).to({graphics:mask_graphics_13,x:-57.9,y:721.5}).wait(1).to({graphics:mask_graphics_14,x:-52.9,y:721.5}).wait(1).to({graphics:mask_graphics_15,x:-47.8,y:721.5}).wait(1).to({graphics:mask_graphics_16,x:-42.8,y:721.5}).wait(1).to({graphics:mask_graphics_17,x:-37.8,y:721.5}).wait(1).to({graphics:mask_graphics_18,x:-32.8,y:721.5}).wait(1).to({graphics:mask_graphics_19,x:-27.7,y:721.5}).wait(1).to({graphics:mask_graphics_20,x:-22.7,y:721.5}).wait(1).to({graphics:mask_graphics_21,x:-17.7,y:721.5}).wait(1).to({graphics:mask_graphics_22,x:-12.7,y:721.5}).wait(1).to({graphics:mask_graphics_23,x:-7.7,y:721.5}).wait(1).to({graphics:mask_graphics_24,x:-2.6,y:721.5}).wait(1).to({graphics:mask_graphics_25,x:2.4,y:721.5}).wait(1).to({graphics:mask_graphics_26,x:7.4,y:721.5}).wait(1).to({graphics:mask_graphics_27,x:12.4,y:721.5}).wait(1).to({graphics:mask_graphics_28,x:17.5,y:721.5}).wait(1).to({graphics:mask_graphics_29,x:22.5,y:721.5}).wait(1).to({graphics:mask_graphics_30,x:27.5,y:721.5}).wait(1).to({graphics:mask_graphics_31,x:32.5,y:721.5}).wait(1).to({graphics:mask_graphics_32,x:37.6,y:721.5}).wait(1).to({graphics:mask_graphics_33,x:42.6,y:721.5}).wait(1).to({graphics:mask_graphics_34,x:47.6,y:721.5}).wait(1).to({graphics:mask_graphics_35,x:52.6,y:721.5}).wait(1).to({graphics:mask_graphics_36,x:57.7,y:721.5}).wait(1).to({graphics:mask_graphics_37,x:62.7,y:721.5}).wait(1).to({graphics:mask_graphics_38,x:67.7,y:721.5}).wait(1).to({graphics:mask_graphics_39,x:72.7,y:721.5}).wait(1).to({graphics:mask_graphics_40,x:77.7,y:721.5}).wait(1).to({graphics:mask_graphics_41,x:82.8,y:721.5}).wait(1).to({graphics:mask_graphics_42,x:87.8,y:721.5}).wait(1).to({graphics:mask_graphics_43,x:92.8,y:721.5}).wait(1).to({graphics:mask_graphics_44,x:97.8,y:721.5}).wait(1).to({graphics:mask_graphics_45,x:102.9,y:721.5}).wait(1).to({graphics:mask_graphics_46,x:107.9,y:721.5}).wait(1).to({graphics:mask_graphics_47,x:112.9,y:721.5}).wait(1).to({graphics:mask_graphics_48,x:117.9,y:721.5}).wait(1).to({graphics:mask_graphics_49,x:123,y:721.5}).wait(1).to({graphics:mask_graphics_50,x:128,y:721.5}).wait(1).to({graphics:mask_graphics_51,x:133,y:721.5}).wait(1).to({graphics:mask_graphics_52,x:138,y:721.5}).wait(1).to({graphics:mask_graphics_53,x:143.1,y:721.5}).wait(1).to({graphics:mask_graphics_54,x:148.1,y:721.5}).wait(1).to({graphics:mask_graphics_55,x:153.1,y:721.5}).wait(1).to({graphics:mask_graphics_56,x:158.1,y:721.5}).wait(1).to({graphics:mask_graphics_57,x:163.2,y:721.5}).wait(1).to({graphics:mask_graphics_58,x:168.2,y:721.5}).wait(1).to({graphics:mask_graphics_59,x:173.2,y:721.5}).wait(1).to({graphics:mask_graphics_60,x:178.2,y:721.5}).wait(1).to({graphics:mask_graphics_61,x:183.2,y:721.5}).wait(1).to({graphics:mask_graphics_62,x:188.3,y:721.5}).wait(1).to({graphics:mask_graphics_63,x:193.3,y:721.5}).wait(1).to({graphics:mask_graphics_64,x:198.3,y:721.5}).wait(1).to({graphics:mask_graphics_65,x:203.3,y:721.5}).wait(1).to({graphics:mask_graphics_66,x:208.4,y:721.5}).wait(1).to({graphics:mask_graphics_67,x:213.4,y:721.5}).wait(1).to({graphics:mask_graphics_68,x:218.4,y:721.5}).wait(1).to({graphics:mask_graphics_69,x:223.4,y:721.5}).wait(1).to({graphics:mask_graphics_70,x:228.5,y:721.5}).wait(1).to({graphics:mask_graphics_71,x:233.5,y:721.5}).wait(1).to({graphics:mask_graphics_72,x:238.5,y:721.5}).wait(1).to({graphics:mask_graphics_73,x:243.5,y:721.5}).wait(1).to({graphics:mask_graphics_74,x:248.6,y:721.5}).wait(1).to({graphics:mask_graphics_75,x:251.8,y:721.5}).wait(1).to({graphics:mask_graphics_76,x:254.3,y:721.5}).wait(1).to({graphics:mask_graphics_77,x:256.8,y:721.5}).wait(1).to({graphics:mask_graphics_78,x:259.3,y:721.5}).wait(1).to({graphics:mask_graphics_79,x:261.8,y:721.5}).wait(1).to({graphics:mask_graphics_80,x:264.3,y:721.5}).wait(1).to({graphics:mask_graphics_81,x:266.9,y:721.5}).wait(1).to({graphics:mask_graphics_82,x:269.4,y:721.5}).wait(1).to({graphics:mask_graphics_83,x:271.9,y:721.5}).wait(1).to({graphics:mask_graphics_84,x:274.4,y:721.5}).wait(1).to({graphics:mask_graphics_85,x:276.9,y:721.5}).wait(1).to({graphics:mask_graphics_86,x:279.4,y:721.5}).wait(1).to({graphics:mask_graphics_87,x:281.9,y:721.5}).wait(1).to({graphics:mask_graphics_88,x:284.4,y:721.5}).wait(1).to({graphics:mask_graphics_89,x:287,y:721.5}).wait(1).to({graphics:mask_graphics_90,x:289.5,y:721.5}).wait(1).to({graphics:mask_graphics_91,x:292,y:721.5}).wait(1).to({graphics:mask_graphics_92,x:294.5,y:721.5}).wait(1).to({graphics:mask_graphics_93,x:297,y:721.5}).wait(1).to({graphics:mask_graphics_94,x:299.5,y:721.5}).wait(1).to({graphics:mask_graphics_95,x:302,y:721.5}).wait(1).to({graphics:mask_graphics_96,x:304.5,y:721.5}).wait(1).to({graphics:mask_graphics_97,x:307.1,y:721.5}).wait(1).to({graphics:mask_graphics_98,x:309.6,y:721.5}).wait(1).to({graphics:mask_graphics_99,x:312.1,y:721.5}).wait(2));

	// 进度条
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(379.1,1420.5,1.128,1.015);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

	// 加载
	this.instance_1 = new lib.happy_521_1663257383618_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(377.9,1419,1.128,1.015);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

	// 图层 9
	this.instance_2 = new lib.元件5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(346.9,911.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101));

	// 标题
	this.instance_3 = new lib.happy_970_1663258159741_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(750.4,315.4);

	this.instance_4 = new lib.happy_970_1663258159741_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(728.5,1431.9);

	this.instance_5 = new lib.happy_970_1663258159741_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(64.5,1468);

	this.instance_6 = new lib.happy_970_1663258159741_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(282.4,1381.9);

	this.instance_7 = new lib.happy_970_1663258159741_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(583.5,1258.8);

	this.instance_8 = new lib.happy_970_1663258159741_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(202,1208.8);

	this.instance_9 = new lib.happy_970_1663258159741_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(325.4,83.5);

	this.instance_10 = new lib.happy_970_1663258159741_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(64.5,569.3);

	this.instance_11 = new lib.happy_970_1663258159741_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(159,756.5);

	this.instance_12 = new lib.happy_970_1663258159741_4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(674.4,942.9);

	this.instance_13 = new lib.happy_970_1663258159741_4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(411.4,989.7);

	this.instance_14 = new lib.happy_970_1663258159741_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(106.4,942.9);

	this.instance_15 = new lib.happy_970_1663258159741_4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(439.8,683.4);

	this.instance_16 = new lib.happy_970_1663258159741_4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(695.5,661.3);

	this.instance_17 = new lib.happy_970_1663258159741_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(558.8,423.1);

	this.instance_18 = new lib.happy_970_1663258159741_4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(261.3,473.1);

	this.instance_19 = new lib.元件1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(375,233.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(101));

	// 草
	this.instance_20 = new lib.happy_335_1663257928978_4();
	this.instance_20.parent = this;
	this.instance_20.setTransform(48,402.3);

	this.instance_21 = new lib.happy_335_1663257928978_4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(542.3,732.5);

	this.instance_22 = new lib.happy_970_1663258159741_4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(555.4,1054.2);

	this.instance_23 = new lib.happy_970_1663258159741_4();
	this.instance_23.parent = this;
	this.instance_23.setTransform(126,445.2);

	this.instance_24 = new lib.happy_335_1663257928978_4();
	this.instance_24.parent = this;
	this.instance_24.setTransform(294.5,900);

	this.instance_25 = new lib.happy_335_1663257928978_4();
	this.instance_25.parent = this;
	this.instance_25.setTransform(614.9,1558);

	this.instance_26 = new lib.happy_335_1663257928978_4();
	this.instance_26.parent = this;
	this.instance_26.setTransform(218.5,1558);

	this.instance_27 = new lib.happy_335_1663257928978_4();
	this.instance_27.parent = this;
	this.instance_27.setTransform(384.9,1184);

	this.instance_28 = new lib.happy_335_1663257928978_4();
	this.instance_28.parent = this;
	this.instance_28.setTransform(690.9,1184);

	this.instance_29 = new lib.happy_335_1663257928978_4();
	this.instance_29.parent = this;
	this.instance_29.setTransform(142.5,1038.7);

	this.instance_30 = new lib.happy_335_1663257928978_4();
	this.instance_30.parent = this;
	this.instance_30.setTransform(460.9,568.3);

	this.instance_31 = new lib.happy_335_1663257928978_4();
	this.instance_31.parent = this;
	this.instance_31.setTransform(222.9,640.5);

	this.instance_32 = new lib.happy_335_1663257928978_4();
	this.instance_32.parent = this;
	this.instance_32.setTransform(712,200.9);

	this.instance_33 = new lib.happy_335_1663257928978_4();
	this.instance_33.parent = this;
	this.instance_33.setTransform(66.5,114.4);

	this.instance_34 = new lib.happy_335_1663257928978_4();
	this.instance_34.parent = this;
	this.instance_34.setTransform(499.3,856.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(101));

	// bg
	this.instance_35 = new lib.bg();
	this.instance_35.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,820,771.9,1640);
// library properties:
lib.properties = {
	width: 750,
	height: 1640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index/bg.png?1663259455760", id:"bg"},
		{src:"images/index/index_atlas_.png?1663259455738", id:"index_atlas_"}
	],
	preloads: []
};




});