var TextToSVG = require("text-to-svg").TextToSVG,
	fs = require("fs");

var textToSVG = new TextToSVG("JosefinSans-Thin.ttf");

var logoSvg = textToSVG
	.getSVG("lexplano", { fontSize: 600, attributes: { transform: "translate(37,480)"} })
	.replace("><path",' width="1920" height="600" viewBox="0 0 1920 600"><path');

var squareLogoSvg = textToSVG
	.getSVG("lexplano", { fontSize: 600, attributes: { transform: "translate(37,1140)"} })
	.replace("><path",' width="1920" height="1920" viewBox="0 0 1920 1920"><path');

fs.writeFileSync("logo.svg", logoSvg);
fs.writeFileSync("logo-square.svg", squareLogoSvg);
