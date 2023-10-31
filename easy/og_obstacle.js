class Obstacle {

  constructor() {
    //this.h = 50
    //this.w = 20
    this.r = 200;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 6;
  }

  show() {
    //rect(this.x, this.y, this.w, this.h)

    if (!show_img) {
      show_img++;
      image(bvj_img, this.x, this.y, this.r, this.r);
    }
    else if (show_img == 1) {
      show_img++;
      image(nova_img, this.x, this.y, this.r, this.r);
    }
    else if (show_img == 2) {
      show_img++;
      image(paso_img, this.x, this.y, this.r, this.r);
    }
    else if (show_img == 3) {
      show_img = 0;
      image(nl_img, this.x, this.y, this.r, this.r);
    }
  }
}
