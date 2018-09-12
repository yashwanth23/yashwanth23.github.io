var theta, x, y;
var opac;
var flag;
var c;
/*var img;*/

function setup(){
	var cnv = createCanvas(windowWidth, windowHeight);
	var x1 = 0;
	var y1 = 0;
	cnv.position(0, 0);
	cnv.style('z-index', '-1');
	background(20);
	theta = 0;
	x = 0;
	y = 0;
	opac = 0;
	flag = 0;
	c = color(255, 255, 255, 127);
	/*img = loadImage("precedents.png");*/
}

function draw(){
	if(flag < 12500){
		theta = theta % 360;
		x = x % 200;
		y = y % 300;
		opac = opac%100;
		/*for (var i = 0; i < 9; i+=2) {
			for (var j = 0; j < 7; j+=2) {
				push();
				translate((i+1)*width/10, (j+1)*height/8);
				
				stroke(255);
				strokeWeight(0.5);
				point((width/15)*sin(((j+2)/2)*x)*cos(((i+2)/2)*y)*cos(theta), (width/15)*cos(((8-j)/2)*x)*sin(((10-i)/2)*y)*sin(theta));
				//point((120*cos(theta)-10*cos(6*theta))*sin(((j+2)/2)*x)*cos(((i+2)/2)*y), (120*sin(theta) - 10*cos(6*theta))*cos(((i+2)/2)*x)*sin(((j+2)/2)*y));
				pop();
			}
		}*/

		for(var j =0; j < 5; j+=2){
			push();
			translate(width/10, (j+1)*height/6);
			stroke(255);
			strokeWeight(0.5);
			point((height/8)*sin(((j+2)/2)*x)*cos(3*y)*cos(theta), (height/8)*cos(((6-j)/2)*y)*sin(2*x)*sin(theta));
			pop();

			push();
			translate(9*width/10, (j+1)*height/6);
			stroke(255);
			strokeWeight(0.5);
			point((height/8)*cos(((j)/2)*x)*cos(4*y)*sin(theta), (height/8)*sin(((6-j)/2)*y)*sin(2*x)*sin(theta/2));
			pop();
		}


		theta +=0.06;
		x+=0.02;
		y+=0.03;
		opac+=2;
		frameRate(500);
		flag+=1;
	}
	
}