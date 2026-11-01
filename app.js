const BRAND={instagram:['linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)','#d62976'],tiktok:['linear-gradient(135deg,#25f4ee,#010101 45%,#010101 55%,#fe2c55)','#fe2c55'],x:['linear-gradient(135deg,#2a2a2a,#000)','#000'],facebook:['linear-gradient(135deg,#1877f2,#0a5bd8)','#1877f2'],youtube:['linear-gradient(135deg,#ff3b3b,#c80000)','#ff0000'],threads:['linear-gradient(135deg,#333,#000)','#000'],linkedin:['linear-gradient(135deg,#0a66c2,#004182)','#0a66c2'],pinterest:['linear-gradient(135deg,#e60023,#a8001a)','#e60023'],behance:['linear-gradient(135deg,#1769ff,#0047d6)','#1769ff'],web:['linear-gradient(135deg,var(--c1),var(--c3))','var(--c2)']};
const WEB="assets/icons/web.svg";
const V=(new URLSearchParams(location.search).get('v')||'a').toLowerCase().replace(/[^abc]/g,'')||'a';
const $=s=>document.querySelector(s),lista=$('#lista'),card=$('#card');let actual=null;
const icon=r=>r==='web'||!BRAND[r]?WEB:`assets/icons/${r}.svg`;
function render(tab){const d=LINKS[tab];document.body.className=tab;
 const logo=$('#logo');logo.src=d.logo;logo.alt=d.titulo;logo.classList.remove('swap-in');void logo.offsetWidth;logo.classList.add('swap-in');
 $('#titulo').textContent=d.titulo;$('#sub').textContent=d.subtitulo;
 $('#tagtxt').textContent=tab==='marca'?'Agencia de crecimiento digital · Lima':'Disponible para proyectos';
 card.classList.remove('anim');void card.offsetWidth;card.classList.add('anim');
 lista.className='links'+(tab==='marca'?' brand v-'+V:'');
 if(tab==='marca'){lista.innerHTML=PROPUESTAS[V].render();PROPUESTAS[V].init&&PROPUESTAS[V].init()}else lista.innerHTML=d.redes.map((r,i)=>{const b=BRAND[r.red]||BRAND.web;return `<li style="--i:${i}"><a href="${r.url}" target="_blank" rel="noopener" style="--brand:${b[0]};--shadow:${b[1]}"><span class="ico"><i style="--svg:url('${icon(r.red)}')"></i></span><span class="txt"><b>${r.nombre}</b><small>${r.detalle||''}</small></span><span class="arrow">→</span></a></li>`}).join('');
 document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
 $('#swap span').textContent=tab==='marca'?'Conoce a Sebastian, el fundador  →':'←  Volver a Meuveryone';
 history.replaceState(null,'',location.pathname+location.search+(tab==='marca'?'':'#personal'));actual=tab;}
function go(tab,e){if(tab===actual)return;
 if(e){const r=document.createElement('div');r.className='ripple';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.appendChild(r);setTimeout(()=>r.remove(),1000)}
 lista.classList.add('out');setTimeout(()=>render(tab),420);}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=e=>go(b.dataset.tab,e));
$('#swap').onclick=e=>go(actual==='marca'?'personal':'marca',e);
render(location.hash==='#personal'?'personal':'marca');$('#y').textContent=new Date().getFullYear();
// brillo y tilt 3D
const g=$('.glow');addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';
 if(matchMedia('(hover:hover)').matches){const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateY(${x*6}deg) rotateX(${-y*6}deg)`}});
// partículas con el color del tema
const c=$('#bg'),x=c.getContext('2d');let P=[],M={x:-999,y:-999};
function size(){c.width=innerWidth;c.height=innerHeight;P=Array.from({length:Math.min(110,innerWidth/10)},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,r:Math.random()*2+.5}))}
size();addEventListener('resize',size);addEventListener('pointermove',e=>{M.x=e.clientX;M.y=e.clientY});
(function loop(){const cs=getComputedStyle(document.body),col=cs.getPropertyValue('--c2').trim(),col2=cs.getPropertyValue('--c3').trim();
 x.clearRect(0,0,c.width,c.height);
 for(const p of P){const dx=p.x-M.x,dy=p.y-M.y,d=Math.hypot(dx,dy);if(d<120){p.x+=dx/d*1.5;p.y+=dy/d*1.5}
  p.x=(p.x+p.vx+c.width)%c.width;p.y=(p.y+p.vy+c.height)%c.height;x.fillStyle=col2;x.shadowColor=col;x.shadowBlur=8;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()}
 x.shadowBlur=0;x.strokeStyle=col;
 for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<120){x.globalAlpha=.35*(1-d/120);x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
 x.globalAlpha=1;requestAnimationFrame(loop)})();

// selector de propuestas
const sw=document.createElement('div');sw.className='vswitch';sw.innerHTML='<small>Propuesta</small>'+Object.entries(PROPUESTAS).map(([k,p])=>`<a href="?v=${k}" class="${k===V?'on':''}" title="${p.nombre}">${k.toUpperCase()}</a>`).join('');document.body.appendChild(sw);
