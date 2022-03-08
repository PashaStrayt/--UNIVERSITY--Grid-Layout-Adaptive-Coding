function CSSLoad(file){
	var link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", file);
	document.getElementsByTagName("head")[0].appendChild(link)
}

if (/Android|iPhone|Windows Phone/i.test(navigator.userAgent))
    CSSLoad('/css/m_style.min.css');