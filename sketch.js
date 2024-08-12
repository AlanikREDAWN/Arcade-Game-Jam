let slime, floor;

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
		idle: { row: 2, frameSize: [64, 64], frames: 8  },
	});
	slime.changeAni('idle');
	
	floor = new Sprite();
	floor.y = 400;
	floor.w = 500;
	floor.h = 50;
	floor.collider = 'static';
	floor.stroke = '#3B8E7A'
	floor.color = '#00C2AE';
	floor.strokeWeight = 5;


  world.gravity.y = 10;
}

function draw() {
	background('skyblue');
	
	slime.debug = mouse.pressing();

	// if (mouse.presses()) {
	// 	slime.speed = 10;
	// 	slime.moveTo(mouse);
	// }
	
	if (kb.pressing('left') || kb.pressing('a')) {
		slime.changeAni('left');
		slime.vel.x = -2;
	} else if (kb.pressing('right') || kb.pressing('d')) {
		slime.changeAni('right');
		slime.vel.x = 2;
	} else if (kb.presses('up') || kb.presses('w') || kb.presses('space')){
		slime.vel.y = -3;
	} else {
		slime.changeAni('idle');
		slime.vel.x = 0;
	}
	// } else if (kb.presses('up') || kb.presses('w') || kb.presses('space')) {
	// 	slime.vel.y = 9;
	// }
	// } else {
	// 	// slime.changeAni('idle'); 
	// 	// slime.vel.y = 0; 
	// 	// slime.vel.x = 0;
	// }

}
