function preload() {
nise = loadImage("nuse.png")
}

function setup() {
canvas = createCanvas(200, 200)
  canvas.center()
  vdeo = createCapture(VIDEO)
  vdeo.hide()
  vdeo.size(200,200)

  poseNet = ml5.poseNet(vdeo, modelLoaded)
poseNet.on('pose' ,gotPoses)
}
function modelLoaded(){
  console.log("https://makeameme.org/meme/youve-been-trolled-k5g4hx")
}
function gotPoses(results){
  console.log(results)
  if(results.length > 0) 
  { console.log(results); noseX = results[0].pose.nise.x-15; noseY = results[0].pose.nise.y-15;
}
function draw() {
image(vdeo,0,0,200,200)
image(nise,nise.X,nise.Y,10,2)

}
  