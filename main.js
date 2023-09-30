function preload() {
nise = loadimage("nuse.png")
}

function setup() {
canvas = createCanvas(200, 200)
  canvas.position(110, 150)
  vdeo = createCapture(VIDEO)
  vdeo.hide()
  vdeo.size(200,200)



}

function draw() {
image(vdeo,0,0,200,200)
image(nise,0,0,10,2)

}
  