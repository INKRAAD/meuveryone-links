// Propuestas de la pestaña Meuveryone. Todo el contenido sale de meuveryone.com (sin cifras inventadas).
const SITE="https://meuveryone.com";
const SERV=[
 {k:"ads",n:"Publicidad digital",d:"Google, Meta, TikTok y ChatGPT Ads con medición completa.",u:"/servicios/campanas/",e:"📣"},
 {k:"seo",n:"Posicionamiento SEO",d:"Gana clientes desde Google y los buscadores con IA.",u:"/servicios/seo/",e:"🔎"},
 {k:"web",n:"Desarrollo web y software",d:"Landing pages, sitios y apps rápidos y medibles.",u:"/servicios/desarrollo-web/",e:"⚡"},
 {k:"crm",n:"CRM",d:"Todos tus canales en un solo lugar, para que ningún lead se pierda.",u:"/servicios/crm-operaciones/",e:"🗂️"},
 {k:"auto",n:"Automatizaciones",d:"Flujos con IA que responden, registran y reportan por ti.",u:"/servicios/automatizaciones/",e:"🤖"}];
const li=(i,h,c="")=>`<li style="--i:${i}" class="${c}">${h}</li>`;
const site=i=>li(i,`<a class="hero-link" href="${SITE}" target="_blank" rel="noopener"><span class="ico"><i style="--svg:url('assets/icons/web.svg')"></i></span><span class="txt"><b>meuveryone.com</b><small>Publicidad digital · SEO · Web · CRM · IA</small></span><span class="arrow">→</span></a>`);
const cta=(i,t="Solicitar diagnóstico",s="Diagnóstico profesional · 3 días a 1 semana")=>li(i,`<a class="cta" href="${SITE}/contacto/" target="_blank" rel="noopener"><b>${t} →</b><small>${s}</small></a>`);
const head=(i,k,t)=>li(i,`<div class="sec"><span>${k}</span><h2>${t}</h2></div>`);
const serv=(s,i)=>li(i,`<a href="${SITE}${s.u}" target="_blank" rel="noopener" style="--brand:linear-gradient(135deg,var(--c1),var(--c3));--shadow:var(--c2)"><span class="ico emo">${s.e}</span><span class="txt"><b>${s.n}</b><small>${s.d}</small></span><span class="arrow">→</span></a>`);

const PROPUESTAS={
 a:{nombre:"A · Conversión",render(){let i=0;return [
  li(i++,`<div class="pain"><span class="kicker">El problema</span><p>¿Pagas anuncios, SEO y web a proveedores distintos y nadie te dice <em>cuántos clientes trajo tu inversión</em>?</p></div>`),
  li(i++,`<div class="promise">Más clientes desde <b>Google, Meta y la IA</b>, con una web que los convierte.</div>`),
  cta(i++),
  head(i++,"Cinco servicios","Un solo embudo"),
  ...SERV.map(s=>serv(s,i++)),
  site(i++)].join('')}},
 b:{nombre:"B · Confianza",render(){let i=0;const C=[["🧪","Diagnóstico antes de proponer","Profesional y pagado, de 3 días a 1 semana. Sin propuestas a ciegas."],["📅","Plazos realistas","Publicidad en planes de ~3 meses; SEO con un mínimo de 6 meses."],["📊","Sin cifras infladas","No prometemos resultados garantizados. Reportamos datos reales de tus cuentas."],["🔑","Todo a tu nombre","Cuentas, CRM, dominio y código son tuyos desde el primer día."]];
  const M=[["M","Medir","Sin medición no hay decisión."],["E","Estructurar","Plan, landing, CRM y conversiones antes de invertir."],["U","Unificar","Anuncios, SEO y web sobre el mismo embudo."],["+","Escalar","Más inversión solo donde el dato lo confirma."]];
  return [site(i++),head(i++,"Compromisos","Cómo trabajamos, por escrito"),
  li(i++,`<div class="grid2">${C.map(c=>`<div class="tile"><span>${c[0]}</span><b>${c[1]}</b><small>${c[2]}</small></div>`).join('')}</div>`),
  head(i++,"Método MEU","Cuatro pasos, siempre en el mismo orden"),
  li(i++,`<div class="steps">${M.map((m,j)=>`<div class="step" style="--j:${j}"><span class="l">${m[0]}</span><div><b>${m[1]}</b><small>${m[2]}</small></div></div>`).join('')}</div>`),
  li(i++,`<div class="stack"><small>Plataformas que operamos a diario</small><div>${["Google Ads","Meta Ads","TikTok Ads","ChatGPT Ads","GoHighLevel","n8n","Make","GA4","Tag Manager","Next.js"].map(p=>`<span>${p}</span>`).join('')}</div></div>`),
  cta(i++,"Agenda tu diagnóstico","Lima, Perú · atención remota en español e inglés")].join('')}},
 c:{nombre:"C · Interactiva",render(){let i=0;return [
  li(i++,`<div class="quiz" id="quiz"><span class="kicker">Test de 10 segundos</span><h2>¿Qué necesita tu negocio hoy?</h2><div class="opts">${[
   ["ads","Necesito más leads o cotizaciones ya"],["seo","Quiero aparecer en Google y en la IA"],["web","Mi web no convierte o no tengo una"],["crm","Pierdo leads entre WhatsApp, redes y Excel"],["auto","Mi equipo repite tareas a mano"]].map(o=>`<button data-k="${o[0]}">${o[1]}</button>`).join('')}</div><div class="result" id="res"></div></div>`),
  site(i++),cta(i++,"¿No lo tienes claro? Pide un diagnóstico","Hallazgos, prioridades y una propuesta con cronograma")].join('')},
  init(){const q=document.getElementById('quiz');if(!q)return;q.querySelectorAll('.opts button').forEach(b=>b.onclick=()=>{
   q.querySelectorAll('.opts button').forEach(x=>x.classList.toggle('sel',x===b));const s=SERV.find(x=>x.k===b.dataset.k),r=document.getElementById('res');
   r.classList.remove('show');void r.offsetWidth;r.innerHTML=`<span class="kicker">Te recomendamos</span><div class="rec"><span class="emo big">${s.e}</span><div><b>${s.n}</b><small>${s.d}</small></div></div><a class="cta mini" href="${SITE}${s.u}" target="_blank" rel="noopener"><b>Ver el servicio →</b></a>`;r.classList.add('show');
   for(let k=0;k<18;k++){const p=document.createElement('i');p.className='confetti';p.style.cssText=`--x:${(Math.random()-.5)*300}px;--y:${-Math.random()*220-40}px;--r:${Math.random()*720}deg;left:${b.offsetLeft+b.offsetWidth/2}px;top:${b.offsetTop}px;animation-delay:${Math.random()*.1}s`;q.appendChild(p);setTimeout(()=>p.remove(),1200)}})}}
};
