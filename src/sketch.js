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
		font = p5.loadFont('./assets/Alegreya-Regular.ttf');
		img = p5.loadImage('./assets/panda.jpg');
	}

	p5.draw = () => {
		p5.background(p5.color(252, 182, 157), 85);

		// image
		p5.push();
		p5.translate(p5.width/2, p5.height/2)
		p5.rotate(p5.frameCount/p5.TWO_PI);
		p5.image(img, p5.mouseX - p5.width/6, p5.mouseY - p5.mouseY/4, p5.width/3, p5.height/2);
		p5.pop();

		// text
		p5.fill(255);
		p5.textFont(font);
		p5.textSize(p5.width/8);
		p5.textAlign(p5.CENTER);
		p5.text('Stop it P5 panda', p5.width/2, p5.height/2);
	}
}

new p5(sketch);