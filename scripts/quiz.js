let x = 0;
let y = 0;

const canvas = document.getElementById("canvas")
const ctx = document.getElementById("canvas").getContext("2d");

const form = document.getElementById("analysis-form");

//const desc = {property:"", pre:x, inter:y};
const familiar = {property:"familiar", pre:150, inter:-25};

const enclosed = {property:"enclosed", pre:25, inter:0};

const aesthetic = {property:"aesthetic", pre:25, inter:-50};

const utilitarian = {property:"utilitarian", pre:50, inter:-50};

const realistic = {property:"realistic", pre:50, inter:0};

const fantastic = {property:"fantastic", pre:-25, inter:-25};

const barren = {property:"barren", pre:0, inter:50};

const crowded = {property:"crowded", pre:50, inter:-75};

const disembodied = {property:"disembodied", pre:-75, inter:-50};

const unfinished = {property:"unfinished", pre:-100, inter:25};

const nostalgic = {property:"nostalgic", pre:-75, inter:0};

const uncanny = {property:"uncanny", pre:-25, inter:25};

const surveilled = {property:"surveilled", pre:-125, inter:75};

const visceral = {property:"visceral", pre:175, inter:0};

const clinical = {property:"clinical", pre:-25, inter:-25};

const intrusive = {property:"intrusive", pre:-50, inter:50};

const comfortable = {property:"comfortable", pre:50, inter:-50};

const purposeful = {property:"purposeful", pre:75, inter:0};

const conceptual = {property:"conceptual", pre:-125, inter:75};

const still = {property:"still", pre:-75, inter:-25};

const properties = [familiar, enclosed, aesthetic, utilitarian, realistic, fantastic, barren, crowded, disembodied, unfinished, nostalgic, uncanny, surveilled, visceral, clinical, intrusive, comfortable, purposeful, conceptual, still];


function draw(a,b) {

  ctx.strokeStyle= "#FFFFFF";
  ctx.fillStyle= "#FFFFFF";
  ctx.translate(200, 200);
  ctx.beginPath();
  ctx.moveTo(-200, 0);
  ctx.lineTo(200, 0);
  ctx.stroke();
  ctx.moveTo(0, -200);
  ctx.lineTo(0, 200);
  ctx.stroke();
  ctx.beginPath();

  ctx.fillRect(a, b, 25, 25);


}

form.addEventListener('submit', function(event) {
  event.preventDefault();    

  ctx.reset();
  x = 0;
  y = 0;

  $("#analysis-form").addClass("hidden");
  $("#instructions").addClass("hidden");

  $("#result").removeClass("hidden");

  for (let i = 0; i < properties.length; i++) {
    if($("#"+properties[i].property).is(":checked")){
      x += properties[i].pre;
      y += properties[i].inter;
      console.log("added "+properties[i].property);
    }

  }


  if(x > 175){ x = 175; }
  if(x < -200){ x = -200; }
  if(y < -200){ y = -200; }
  if(y> 175){ y = 175; }

  console.log(x,y);

  ctx.strokeStyle= "#FFFFFF";
  ctx.lineWidth= 0.5;
  ctx.fillStyle= "#FFFFFF";
  ctx.translate(200, 200);
  ctx.beginPath();
  ctx.moveTo(-200, 0);
  ctx.lineTo(200, 0);
  ctx.stroke();
  ctx.moveTo(0, -200);
  ctx.lineTo(0, 200);
  ctx.stroke();
  ctx.beginPath();

  ctx.fillRect(x, y, 25, 25);
  
  console.log("hey, why are you inspecting the page? come on, be a good sport.");
  console.log("if you're looking here for some extra content or secrets, sorry to disappoint you.")
  console.log("LIMBO isn't a place where you get to cheat. there's no prize for being sneaky.");

  form.reset();

});