// TYPE TEXT SEQUENCE
const nameText = "Shreeraj Jadhav";
const taglineText = "Aspiring Data Scientist • AI Developer • B.Tech CSE";
const aboutText = "Second-year Computer Science student specializing in Data Science at DY Patil College. Creator of Veda Virtual Assistant and award-winning AI Agent.";

function typeText(element, text, speed, callback){
  let i = 0;
  function typing(){
    if(i < text.length){
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if(callback){
      callback();
    }
  }
  typing();
}

// sequential typing
typeText(document.querySelector(".typing-name"), nameText, 60, ()=>{
  typeText(document.querySelector(".typing-tagline"), taglineText, 40, ()=>{
    typeText(document.querySelector(".typing-about"), aboutText, 20);
  });
});


// cursor glow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove",(e)=>{
  glow.style.left = e.clientX+"px";
  glow.style.top = e.clientY+"px";
});

// eye follow
const pupil = document.querySelector(".pupil");
document.addEventListener("mousemove",(e)=>{
  const x = (window.innerWidth/2 - e.clientX)/70;
  const y = (window.innerHeight/2 - e.clientY)/70;
  pupil.style.transform = `translate(${-x}px,${-y}px)`;
});

// theme
document.querySelector(".theme-btn").onclick = ()=>{
  document.body.classList.toggle("light-mode");
};

// voice intro
document.querySelector(".voice-btn").onclick = ()=>{
  const speech = new SpeechSynthesisUtterance(
    "Hello, I am Shreeraj Jadhav. AI developer and creator of Veda X."
  );
  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;
  speechSynthesis.speak(speech);
};

// particles
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2,
    d:Math.random()*0.6
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#00f2fe";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.y += p.d;
    if(p.y>canvas.height) p.y=0;
  });
  requestAnimationFrame(draw);
}
draw();
