class Obstacle {

  constructor() {
    //this.h = 50
    //this.w = 20
    this.r = 200;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 5;
  }

  show() {
    //rect(this.x, this.y, this.w, this.h)
    let a = random(1,4);
    let i = round(a);
    let img;

    if (i == 1) {
      img = bvj_img;
      //image(bvj_img, this.x, this.y, this.r, this.r);
    }
    else if (i == 2) {
      img = nova_img;
      //image(nova_img, this.x, this.y, this.r, this.r);
    }
    else if (i == 3) {
      img = paso_img;
      //image(paso_img, this.x, this.y, this.r, this.r);
    }
    else if (i == 4) {
      img = nl_img;
      //image(nl_img, this.x, this.y, this.r, this.r);
    }
    image(img, this.x, this.y, this.r, this.r);
  }
}
