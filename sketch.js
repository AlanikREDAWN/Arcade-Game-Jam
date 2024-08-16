let slime, floor;
let platforms, platform1, platform2;
let ladders, ladder1;
let activeKeys;
let slimeSpeed = 5;

function preload() {
	slimeSheet = loadImage('slimeSheet.png');
	ladder = loadImage('ladder.png')
}

function setup() {
	new Canvas(1920, 1080, 'fullscreen');

	slime = new Sprite(940, 980, 64);
	slime.spriteSheet = slimeSheet;
	slime.friction = 0;

	slime.addAnis({
		left: { row: 0, frameSize: [64, 64], frames: 8 },
		right: { row: 1, frameSize: [64, 64], frames: 8 },
		idle: { row: 2, frameSize: [64, 64], frames: 8  },
	});
	slime.changeAni('idle');
	
	floor = new Sprite(1920/2, 1080 - 50/2, 1920, 50);
	floor.collider = 'static';
	floor.stroke = '#3B8E7A'
	floor.color = '#00C2AE';
	floor.strokeWeight = 5;

	platforms = new Group();
	platforms.collider = 'static';
	// platforms.stroke = '#3B8E7A';
	// platforms.stroke = '#4336C8';
	platforms.stroke = '#20036A';
	// platforms.color = '#00C2AE';
	// platforms.color = '#20036A';
	platforms.color = '#4336C8';
	platforms.strokeWeight = 5;

	platform1 = new platforms.Sprite(1300, 960, 100, 25);

	platform2 = new platforms.Sprite(1500, 905, 100, 25);

	ladders = new Group();
	ladders.collider = 'kinematic';
	ladders.w = 45;
	ladders.h = 144;
	ladders.image = ladder;

	ladder1 = new ladders.Sprite(1680, 800, 2, 144);

  	world.gravity.y = 10;
}

// class Slime {
// 	constructor(x, y){
// 		this.x = x;
// 		this.y = y;
		
// 	}
// }

function draw() {
	background('skyblue');

	activeKeys = {
		[UP_ARROW]: false,
		[RIGHT_ARROW]: false,
		[DOWN_ARROW]: false,
		[LEFT_ARROW]: false
	  };
	textSize(20);
	text(`${mouseX.toFixed(2)}, ${mouseY.toFixed(2)}\n${activeKeys}`, 10, 30);
	
	slime.debug = mouse.pressing();
	ladder1.debug = mouse.pressing();

	// if (mouse.presses()) {
	// 	slime.speed = 10;
	// 	slime.moveTo(mouse);
	// }
	// if (kb.pressing('left')) player.vel.x = -5;
	// else if (kb.pressing('right')) player.vel.x = 5;
	// else if (kb.pressed('up') && (slime.colliding(floor) || slime.colliding(platforms))) slime.vel.y = -5;
	// else if (slime.colliding(ladder1)) { slime.vel.y = 0; slime.vel.x = 0; }
	// else if (kb.pressing('left') && (slime.colliding(ladder1))) { world.gravity.y = 0; slime.vel.y = 0; slime.vel.x = 0; }
	// else player.vel.x = 0;
	// if (kb.pressing('left') || kb.pressing('a')) {

	slime.draw() 
	// UP KEYS COMBO
	if (activeKeys[UP_ARROW] && activeKeys[RIGHT_ARROW]) {
		// slime.setSpeed(2.5, 315);
		slime.speed = 2.5;
	} else if (activeKeys[UP_ARROW] && activeKeys[LEFT_ARROW]) {
		slime.setSpeed(2.5, 225);
	}
	// DOWN KEYS COMBO
	else if (activeKeys[DOWN_ARROW] && activeKeys[RIGHT_ARROW]) {
		slime.setSpeed(2.5, 45);
	} else if (activeKeys[DOWN_ARROW] && activeKeys[LEFT_ARROW]) {
		slime.setSpeed(2.5, 135);
	}
	// SINGLE KEYS
	else if (activeKeys[UP_ARROW]) {
		slime.setSpeed(2.5, 270);
	} else if (keyCode == DOWN_ARROW) {
		slime.setSpeed(2.5, 90);
	} else if (keyCode == LEFT_ARROW) {
		slime.setSpeed(2.5, 180);
	} else if (keyCode == RIGHT_ARROW) {
		slime.setSpeed(2.5, 0);
	}
		  
			
		  
		  

	// //start
	// if (kb.pressing('left')) {
	// 	slime.changeAni('left');
	// 	slime.vel.x = -5;
	// // } else if (kb.pressing('right') || kb.pressing('d')) {
	// } 
	// else if (kb.pressing('right')) {
	// 	slime.changeAni('right');
	// 	slime.vel.x = 5;

	// // } else if ((kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))){
	// }
	// else if ((kb.pressed('up')) && (slime.colliding(floor) || slime.colliding(platforms))) {
	// 	slime.vel.y = -5; 
	// } else if (slime.colliding(ladder1)) {
	// 	// world.gravity.y = 0;
	// 	slime.vel.y = 0;
	// 	slime.vel.x = 0;

	// // } else if ((kb.pressing('left')) && (kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {

	// } else if ((kb.pressing('left')) && (kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {
	// 	slime.vel.y = -5; 
	// 	slime.vel.x = -5
	// } else if ((kb.pressing('left')) && (slime.colliding(ladder1))) {
	// 	world.gravity.y = 0;
	// 	slime.vel.y = 0;
	// 	slime.vel.x = 0;
	// } else if ((kb.pressing('right') || kb.pressing('d')) && (kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))){
	// 	slime.vel.y = -5; 
	// 	slime.vel.x = 5;
	// } else if (kb.pressing('right') || kb.pressing('d') && (slime.colliding(ladder1))) {
	// 	world.gravity.y = 0;
	// 	slime.vel.y = 0;
	// 	slime.vel.x = 0;
	// } else if ((slime.colliding(ladder1)) && (kb.pressing('up') || kb.pressing('w') || kb.pressing('space'))) {
	// 	// world.gravity.y = 10;
	// 	slime.vel.y = -3;
	// } else if ((slime.colliding(ladder1)) && (kb.pressing('down') || kb.pressing('s') || kb.pressing('shift'))) {
	// 	// world.gravity.y = 10;
	// 	slime.vel.y = -3;
	// } else {
	// 	slime.changeAni('idle');
	// 	slime.vel.x = 0;
	// }
	// //end
	// } else if (kb.presses('up') || kb.presses('w') || kb.presses('space')) {
	// 	slime.vel.y = 9;
	// }
	// } else {
	// 	// slime.changeAni('idle'); 
	// 	// slime.vel.y = 0; 
	// 	// slime.vel.x = 0;
	// }

}


function keyPressed() {
	if (activeKeys[keyCode] === false) {
	  activeKeys[keyCode] = true;
	}
}

function keyReleased() {
	if (activeKeys[keyCode]) {
		activeKeys[keyCode] = false;
	}
}