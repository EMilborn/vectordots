var prev = [];

var addDot = function(e) {
    x = e.offsetX;
    y = e.offsetY;
    circ=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("r", "10");
    circ.setAttribute("cx", x);
    circ.setAttribute("cy", y);
    s.appendChild(circ);
    console.log("addDot");
    if (prev.length == 2){
	line=document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", prev[0]);
	line.setAttribute("y1", prev[1]);
	line.setAttribute("x2", x);
	line.setAttribute("y2", y);
	line.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2");
	s.appendChild(line);
	console.log("added line");
    };
    prev = [x, y];
};

var clear = function(e){
    prev = [];
    while (s.firstChild){
	s.removeChild(s.firstChild);
    };
    
    
};
    

s.addEventListener("click", addDot);
b.addEventListener("click", clear);
