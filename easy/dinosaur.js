class Dinosaur {
  constructor() {
    this.r = 200
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.6;
  }

  jump() {
    this.elev = height - this.y - this.r
    if (this.elev == 0) {
      this.vy = -slider.value();
    }
  }

  hits(obs) {
    let x_obs = obs.x + obs.r * 0.1;
    let y_obs = obs.y + obs.r * 0.1;
    return collideCircleCircle(this.x, this.y, this.r, x_obs, y_obs, obs.r*0.2 )
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity
    this.y = constrain(this.y, 0, height - this.r)
  }

  show() {
    //rect(this.x, this.y, this.r, this.r);
    image(dino_img, this.x, this.y, this.r, this.r);
  }
}
