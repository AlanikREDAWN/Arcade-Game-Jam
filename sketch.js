let slime, floor;
let platforms, platform1, platform2;
let ladders, ladder1;
let activeKeys;
let isKeyPressed;
let slimeSpeed = 5;
let jumped = false;

function preload() {
	slimeSheet = loadImage('slimeSheet.png');
	ladder = loadImage('ladder.png')
}

function setup() {
	new Canvas(1920, 1080, 'fullscreen');

	slime = new Sprite(940, 980, 64);
	slime.spriteSheet = slimeSheet;
	slime.friction = 0;
	slime.collider = "dynamic";

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
	clear();
	  	// world.gravity.y = 10;
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

	// slime.speed = 5;

	if ((kb.pressed('up') || kb.pressed('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {
		// jumpTime = millis();
		// if (jumped == false) {
		// 	if (jumpTime < 2000) {
		// 		slime.speed = 5;
		// 		slime.direction = -90;
		// 	}

		// }
		slime.vel.y = -5;
		console.log("jump");

	// } else if (kb.pressing('down')) {
	// 	player.direction = 90;
	} else if (kb.pressing('left')) {
		// slime.speed = 5;
		// slime.direction = 180;
		slime.vel.x = -5;
		console.log("left");
	} else if (kb.pressing('right')) {
		// slime.speed = 5;
		// slime.direction = 0;
		slime.vel.x = 5;
		console.log("right");
	} else if (slime.colliding(ladder1)) {
		// slime.speed = 0;
		slime.vel.x = 0;
		slime.vel.y = 0;
		console.log("on ladder");
	} else if ((kb.pressing('left')) && (kb.presses('up') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {
		// slime.speed = 5;
		// slime.direction = 'upLeft';
		slime.vel.x = -5;
		slime.vel.y = -5;
		console.log("up left");
	} else if ((kb.pressing('right')) && (kb.presses('up') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {
		// slime.speed = 5;
		// slime.direction = 'upRight';
		slime.vel.x = 5;
		slime.vel.y = -5;
		console.log("up Right");
	} else if ((slime.colliding(ladder1)) && (kb.pressing('up') || kb.pressing('space'))) {
		// slime.speed = 3;
		// slime.direction = -90;
		slime.vel.y = -3;
		console.log("up ladder")
	} else if ((slime.colliding(ladder1)) && (kb.pressing('down') || kb.pressing('shift'))) {
		// slime.speed = 3;
		// slime.direction = 90;
		slime.vel.y = 3;
		console.log("down ladder")
	} else {
		// slime.speed = 0;
		slime.vel.y = 0;
		slime.vel.x = 0;
		console.log("stop")
	}

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

	// slime.draw() 
	// // UP KEYS COMBO
	// if (activeKeys[UP_ARROW] && activeKeys[RIGHT_ARROW]) {
	// 	// slime.setSpeed(2.5, 315);
	// 	slime.speed = 2.5;
	// 	slime.direction = 315;
	// } else if (activeKeys[UP_ARROW] && activeKeys[LEFT_ARROW]) {
	// 	// slime.setSpeed(2.5, 225);
	// 	slime.speed = 2.5;
	// 	slime.direction = 225;
	// }
	// // DOWN KEYS COMBO
	// else if (activeKeys[DOWN_ARROW] && activeKeys[RIGHT_ARROW]) {
	// 	// slime.setSpeed(2.5, 45);
	// 	slime.speed = 2.5;
	// 	slime.direction = 45;
	// } else if (activeKeys[DOWN_ARROW] && activeKeys[LEFT_ARROW]) {
	// 	// slime.setSpeed(2.5, 135);
	// 	slime.speed = 2.5;
	// 	slime.direction = 135;
	// }
	// // SINGLE KEYS
	// else if (activeKeys[UP_ARROW]) {
	// 	// slime.setSpeed(2.5, 270);
	// 	slime.speed = 2.5;
	// 	slime.direction = 270;
	// } else if (keyCode == DOWN_ARROW) {
	// 	// slime.setSpeed(2.5, 90);
	// 	slime.speed = 2.5;
	// 	slime.direction = 90;
	// } else if (keyCode == LEFT_ARROW) {
	// 	// slime.setSpeed(2.5, 180);
	// 	slime.speed = 2.5;
	// 	slime.direction = 180;
	// } else if (keyCode == RIGHT_ARROW) {
	// 	// slime.setSpeed(2.5, 0);
	// 	slime.speed = 2.5;
	// 	slime.direction = 0;
	// } else {
	// 	slime.speed = 0;
	// 	// slime.direction = 315;
	// }
		  
			
		  
		

	// //start
	// // if (isKeyPressed == true) {

	
	// if (kb.left) { 
	// 	slime.changeAni('left');
	// 	slime.vel.x = -5;
	// 	console.log('arrow left pressed')
	// } 
	// 	if (kb.pressing('right')) {
	// 		slime.changeAni('right');
	// 		slime.vel.x = 5;

	// // } else if ((kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))){
	// 	}
	// 	if ((kb.pressed('up') || kb.pressed('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {
	// 		slime.vel.y = -5; 
	// 	}
	// 	if (slime.colliding(ladder1)) {
	// 		// world.gravity.y = 0;
	// 		slime.vel.y = 0;
	// 		slime.vel.x = 0;

	// 	// } else if ((kb.pressing('left')) && (kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {

	// 	}
	// 	if ((kb.pressing('left')) && (kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))) {
	// 		slime.vel.y = -5; 
	// 		slime.vel.x = -5
	// 	}
	// 	if ((kb.pressing('left')) && (slime.colliding(ladder1))) {
	// 		world.gravity.y = 0;
	// 		slime.vel.y = 0;
	// 		slime.vel.x = 0;
	// 	}
	// 	if ((kb.pressing('right') || kb.pressing('d')) && (kb.presses('up') || kb.presses('w') || kb.presses('space')) && (slime.colliding(floor) || slime.colliding(platforms))){
	// 		slime.vel.y = -5; 
	// 		slime.vel.x = 5;
	// 	}
	// 	if (kb.pressing('right') || kb.pressing('d') && (slime.colliding(ladder1))) {
	// 		world.gravity.y = 0;
	// 		slime.vel.y = 0;
	// 		slime.vel.x = 0;
	// 	}
	// 	if ((slime.colliding(ladder1)) && (kb.pressing('up') || kb.pressing('w') || kb.pressing('space'))) {
	// 		// world.gravity.y = 10;
	// 		slime.vel.y = -3;
	// 	}
	// 	if ((slime.colliding(ladder1)) && (kb.pressing('down') || kb.pressing('s') || kb.pressing('shift'))) {
	// 		// world.gravity.y = 10;
	// 		slime.vel.y = -3;
	// 	}
	// // } else if (isKeyPressed == false) {
	// 	slime.changeAni('idle');
	// 	slime.vel.x = 0;
	// // }

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


// function keyPressed() {
// 	if (activeKeys[keyCode] === false) {
// 	  activeKeys[keyCode] = true;
// 	}
// 	isKeyPressed = true;
// }

// function keyReleased() {
// 	if (activeKeys[keyCode]) {
// 		activeKeys[keyCode] = false;
// 	}
// 	isKeyPressed = false;
// }