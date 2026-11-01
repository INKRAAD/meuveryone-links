const ICONS={
instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
tiktok:'<path d="M14 3v11a4 4 0 1 1-4-4"/><path d="M14 3c0 3 2 5 5 5"/>',
x:'<path d="M4 4l16 16M20 4L4 20"/>',
facebook:'<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
youtube:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/>',
threads:'<path d="M17 8c-1-3-3-4-5-4-4 0-7 3-7 8s3 8 7 8 6-2 6-5-3-4-6-4c-2 0-3 1-3 2s1 2 3 2c3 0 4-3 4-6"/>',
linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'};
const BRAND={instagram:'linear-gradient(45deg,#f58529,#dd2a7b,#8134af)',tiktok:'linear-gradient(45deg,#25f4ee,#000,#fe2c55)',x:'#000',facebook:'#1877f2',youtube:'#ff0000',threads:'#111',linkedin:'#0a66c2',web:'linear-gradient(45deg,var(--a),var(--b))'};
const $=s=>document.querySelector(s),lista=$('#lista');let actual=null;
function render(tab){const d=LINKS[tab];document.body.className=tab;
 $('#titulo').textContent=d.titulo;$('#sub').textContent=d.subtitulo;$('#ini').textContent=d.inicial;
 lista.className='links';lista.innerHTML=d.redes.map((r,i)=>`<li style="--i:${i}"><a href="${r.url}" target="_blank" rel="noopener" style="--brand:${BRAND[r.red]||BRAND.web}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[r.red]||ICONS.web}</svg>${r.nombre}<span class="arrow">→</span></a></li>`).join('');
 document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
 $('#swap').textContent=tab==='marca'?'✨ Ver redes personales de Sebastian':'🏢 Volver a Meuveryone';
 history.replaceState(null,'',tab==='marca'?location.pathname:'#personal');actual=tab;}
function go(tab){if(tab===actual)return;lista.classList.add('out');setTimeout(()=>render(tab),380);}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>go(b.dataset.tab));
$('#swap').onclick=()=>go(actual==='marca'?'personal':'marca');
render(location.hash==='#personal'?'personal':'marca');$('#y').textContent=new Date().getFullYear();
const g=$('.cursor-glow');addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
const c=$('#bg'),x=c.getContext('2d');let P=[];function size(){c.width=innerWidth;c.height=innerHeight;P=Array.from({length:Math.min(90,innerWidth/12)},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
size();addEventListener('resize',size);
(function loop(){x.clearRect(0,0,c.width,c.height);for(const p of P){p.x=(p.x+p.vx+c.width)%c.width;p.y=(p.y+p.vy+c.height)%c.height;x.fillStyle='rgba(255,255,255,.6)';x.fillRect(p.x,p.y,1.6,1.6)}
for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<110){x.strokeStyle=`rgba(255,255,255,${.12*(1-d/110)})`;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
requestAnimationFrame(loop)})();
