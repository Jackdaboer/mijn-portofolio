var diameter=0x12c,snel=0x2,blauw=0x384,groen=0x0;function setup(){canvas=createCanvas(0x1c2,0x1c2),colorMode(RGB,0xff,0xff,0xff,0x1),noStroke();}function draw(){background(0xff,0xff,0xff,0x1),fill(0xff,0x0,0x0,0.5),ellipse(width/0x2,height/0x2,diameter),fill(0x0,0x0,0xff,0.5),ellipse(width/0x2,blauw/0x2,diameter),fill(0x0,0xff,0x0,0.5),ellipse(width/0x2,groen/0x2,diameter),blauw-=snel,groen+=snel;}