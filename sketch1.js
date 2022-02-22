var hour,minute,second;
var scAngle;
var mntAngle;
var hrAngle;

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  angleMode(DEGREES);
  
  
}

function draw() {
  background(0);  
  drawSprites();

  hr = hour();
  mn = minute();
  sc = second();

  fill("white");
  strokeWeight(10);
  textSize(20);
  text("Hour: "+hr%12,50,100);
  text("Minute: "+mn,50,120);
  text("Second: "+sc,50,140);
 
  

  translate(300,300);
  rotate(-90);

  

  

  
scAngle = map(sc,0,60,0,360);
mntAngle = map(mn,0,60,0,360);
hrAngle = map(hr%12,0,12,0,360);


push();

rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();



push();

rotate(mntAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,80,0);
pop();

push();

rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();


strokeWeight(2);
stroke("red");
noFill();

ellipseMode(CENTER);
arc(5,20, 300, 300, 360,scAngle );
stroke("green");
arc(5,20, 350, 350, 360,mntAngle );
stroke("blue");
arc(5,20, 400, 400,360,hrAngle );




 
}