let breath = 300;
let breathMore =75;
let breathEvenmore = 450;
let breathIgetit = 20;

function setup() {
  createCanvas(600, 600);
breathEvenmore = random (1-100);
breath = random (200);
breathIgetit = random (200-500);


}

function draw() {
  
  background(12,70,25);
  strokeWeight (4);
  fill (11,44,99);
  stroke (20,240,220);
  circle (breath,breathEvenmore,200);
  fill (20,44,99)
  stroke (100,100,200);
  circle (breathMore,breath,50);
  fill (20,240,220);
  stroke (20,44,99);
  circle (breathEvenmore,breath,50);
  fill (100,30,44);
  stroke (230,44,99);
  circle (breathEvenmore,400,75);
  fill (100,100,200)
  circle (breath, breathMore,22);
  fill (230,44,99);
  fill (230,44,99)
  stroke (20,44,99);
  circle (breath,breathIgetit,66);
  circle (breathMore, breathEvenmore, 90);
  fill (20,44,99);
  stroke (100,100,200);
  circle (breathMore,breath,100);
  circle (breath,breathMore,100);
  fill (20,240,220);
  stroke (100,30,44);
  circle (breath,breathEvenmore,100);
  circle (breathEvenmore,breath,100)

  breath = breath + 1
  breathMore = breathMore + 2
  breathEvenmore = breathEvenmore + 3
  breathIgetit = breathIgetit + 4

}
  

