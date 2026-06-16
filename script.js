
document.querySelectorAll('.glass,.project').forEach(card=>{
card.addEventListener('mousemove',e=>{
const r=card.getBoundingClientRect();
const x=(e.clientX-r.left-r.width/2)/20;
const y=(e.clientY-r.top-r.height/2)/20;
card.style.transform=`rotateX(${-y}deg) rotateY(${x}deg)`;
});
card.addEventListener('mouseleave',()=>card.style.transform='');
});
