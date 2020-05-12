var c, phue
var numDrawings = 4 // Even numbers work better
var lineWeight = 2
let img;

function preload(){
  img = loadImage('mesh_map.jpg');
}


function setup() {
  createCanvas(800, 800)
  c = createVector(width/2,height/2)
  image(img, 0, 0, 800, 800)
}

function draw() { 
  if(mouseIsPressed){
    let pos = createVector(mouseX,mouseY)
    let ppos = createVector(pmouseX,pmouseY)
    stroke(255);
    strokeWeight(3)
    line(ppos.x,ppos.y,pos.x,pos.y)
    for(let a=0; a<TAU; a+=TAU/numDrawings){
      pos = symmetric(pos,a)
      ppos = symmetric(ppos,a)
      line(ppos.x,ppos.y,pos.x,pos.y)
    }
  }

}

// Calculate the symmetric of a point with respect to a line defined by a point(c) and a vector(u)
function symmetric(point, angle){
  let u = p5.Vector.fromAngle(angle)
  let pcu = p5.Vector.mult(u,p5.Vector.dot(p5.Vector.sub(c,point),u))
  let symmetricPoint = p5.Vector.sub(c,pcu).mult(2).sub(point)
  return symmetricPoint
}

