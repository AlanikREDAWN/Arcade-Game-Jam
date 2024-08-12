let slime;

function preload() {
	slimeSheet = loadImage('slimeSheet.png');
}

function setup() {
	new Canvas(500, 500);

	slime = new Sprite();
	slime.diameter = 64;
	slime.spriteSheet = slimeSheet;
	slime.friction = 0;

	slime.addAnis({
		left: { row: 0, frameSize: [64, 64], frames: 8 },
		right: { row: 1, frameSize: [64, 64], frames: 8 },
		up: { row: 2, frameSize: [64, 64], frames: 1 },
		idle: { row: 2, frameSize: [64, 64], frames: 8 },
	});
	slime.changeAni('idle');

}

function draw() {
	background('skyblue');
	
	slime.debug = mouse.pressing();

	// if (mouse.presses()) {
	// 	slime.speed = 10;
	// 	slime.moveTo(mouse);
	// }
	if (kb.presses('left') || kb.presses('a')) {
		slime.changeAni('left');
		slime.vel.x = -2;
	} else if (kb.presses('right') || kb.presses('d')) {
		slime.changeAni('right');
		slime.vel.x = 2;
	} else if (kb.presses('up') || kb.presses('w')) {
		slime.chnagh
	}

}
