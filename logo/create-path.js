var TextToSVG = require("text-to-svg").TextToSVG;

var logoSvg = (new TextToSVG("JosefinSans-Thin.ttf"))
	.getSVG("lexplano", { fontSize: 600, attributes: { transform: "translate(37,480)"} })
	.replace("><path",'width="1920" height="600" viewBox="0 0 1920 600"><path');

require("fs").writeFileSync("logo-path.svg", logoSvg);
