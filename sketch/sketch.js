import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

const sketch = (p5) => {
	// make library globally available
	window.p5 = p5;
	let font;
	let img;

	p5.setup = () => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);
		font = p5.loadFont('assets/Alegreya-Regular.ttf');
		img = p5.loadImage('assets/panda.jpg');
	}

	p5.draw = () => {
		p5.background(55);
		// image
		p5.image(img, p5.mouseX, p5.mouseY, p5.width/3, p5.height/2);

		// text
		p5.fill(255);
		p5.textFont(font);
		p5.textSize(p5.width/5);
		p5.textAlign(p5.CENTER);
		p5.text('Woop!', p5.width/2, p5.height/2);
	}
}

new p5(sketch);