let obstacles;
let randint;
let score;
let lost;
let next;
let spread;
let slider;
let achtergrond_img;
let bgMuziek;
//let canvasStatus;
let dino_img;
let bvj_img;
let nl_img;
let paso_img
let nova_img
let gebruikte_img;
let show_img = 0;
let gameLettertype

function setup() {
  gameLettertype = loadFont('./leuk/Retro_Gaming.ttf');
  textFont(gameLettertype);
  bgMuziek = loadSound ('./leuk/Dungeon_Theme.mp3');
  achtergrond_img = loadImage('./leuk/school.png');
  bvj_img = loadImage('./leuk/bvj.png');
  dino_img = loadImage('./leuk/Dino.png');
  nl_img = loadImage('./leuk/nl.png');
  nova_img = loadImage('./leuk/nova.png');
  paso_img = loadImage('./leuk/paso.png');
  createCanvas(1000, 650);
 // slider = createSlider(10, 30, 20, 1)
  //slider.position(width - slider.width, 0)
  resetSketch()
}

function mousePressed() {
  dinosaur.jump();
}

function keyPressed() {
  if (key == ' ') {
    dinosaur.jump();
    if (lost) {
      resetSketch();
    }
  } else {
    if (key == 'm' || key == 'M') {
      if (bgMuziek.isPlaying()) {
        bgMuziek.stop();
      } else {
        bgMuziek.play();
      }
    }
  }
}

function resetSketch() {
  console.log("Restarting game")
  score = 0;
  lost = false;
  obstacles = []
  next = 0;
  dinosaur = new Dinosaur();
  new Obstacle();
  randint = int(random(50, 150));
  loop();
}

function draw() {
  background(achtergrond_img);
  textSize(48)
  fill(255, 204, 0);
  text('Home of the frightened fools', 5, 40);
  textSize(24)
  fill(255, 204, 100);
  text('[M] toggle muziek aan of uit.', 5, 70)
  text('HAHA geen slider!!', 5, 100)
  text('Score: ' + score, 5, 130);
  next += 1
  if (next == randint) {
    obstacles.push(new Obstacle())
    score += 1
    next = 0
    //spread = slider.value()
    randint = int(random(20, 100))
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift()
      }
    }
    o.move();
    o.show();
    if (dinosaur.hits(o)) {
      textSize(130);
      fill(255);
      text('Game Over!', 100, 300)
      textSize(30)
      text('Druk op de spatiebalk om verder te spelen', 100, 330);
      text('...of ga wat nuttigs doen.', 100, 360)
      console.log("Game Over!")
      lost = true;
      noLoop();
    }
  }

  dinosaur.show();
  dinosaur.move();
}
