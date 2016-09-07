var buttonToImageMap = new Object();
buttonToImageMap.aboutButton = new Image(128,128);
buttonToImageMap.appsButton = new Image(128,128);
buttonToImageMap.blogButton = new Image(128,128);
buttonToImageMap.forumsButton = new Image(128,128);
buttonToImageMap.linksButton = new Image(128,128);
buttonToImageMap.aboutButton.src = "../images/AboutButtonDarkBGLightFGShort.png";
buttonToImageMap.appsButton.src = "../images/AppsButtonDarkBGLightFGWide.png";
buttonToImageMap.blogButton.src = "../images/BlogButtonDarkBGLightFG.png";
buttonToImageMap.forumsButton.src = "../images/ForumsButtonDarkBGLightFGTallRotatedText.png";
buttonToImageMap.linksButton.src = "../images/LinksButtonDarkBGLightFGShort.png";
var hoverButtonToImageMap = new Object();
hoverButtonToImageMap.aboutButton = new Image(128,128);
hoverButtonToImageMap.appsButton = new Image(128,128);
hoverButtonToImageMap.blogButton = new Image(128,128);
hoverButtonToImageMap.forumsButton = new Image(128,128);
hoverButtonToImageMap.linksButton = new Image(128,128);
hoverButtonToImageMap.aboutButton.src = "../images/AboutButtonLightBGDarkFGShort.png";
hoverButtonToImageMap.appsButton.src = "../images/AppsButtonLightBGDarkFGWide.png";
hoverButtonToImageMap.blogButton.src = "../images/BlogButtonLightBGDarkFG.png";
hoverButtonToImageMap.forumsButton.src = "../images/ForumsButtonLightBGDarkFGTallRotatedText.png";
hoverButtonToImageMap.linksButton.src = "../images/LinksButtonLightBGDarkFGShort.png";

function buttonOver(name)
{
	myButton = document.getElementById(name);
	myButton.src = hoverButtonToImageMap[name].src;
}

function buttonOut(name)
{
	myButton = document.getElementById(name);
	myButton.src = buttonToImageMap[name].src;
}