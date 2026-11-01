// Propuestas de la pestaña Meuveryone. Todo el contenido proviene de meuveryone.com y sus páginas de servicio (sin cifras inventadas).
const SITE="https://meuveryone.com";
// ---------- Íconos propios (línea + duotono, trazo animado) ----------
const ICO={
 ads:'<path class="fill" d="M4 10v4l3 .5V9.5z"/><path d="M4 10v4l3 .5 9 4.5V5L7 9.5z"/><path d="M7 14.5l1.5 5h3l-1.2-4"/><path class="pulse" d="M19 9.5c1 .8 1 4.2 0 5M21 7.5c2 2 2 7 0 9"/>',
 seo:'<circle class="fill" cx="10.5" cy="10.5" r="6.5"/><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/><path class="pulse" d="M7.5 12.5v-1.5M10.5 12.5V9M13.5 12.5V7.5"/>',
 web:'<rect class="fill" x="3" y="4" width="18" height="5" rx="2"/><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path class="pulse" d="M9.5 12.5L7 15l2.5 2.5M14.5 12.5L17 15l-2.5 2.5"/>',
 crm:'<path class="fill" d="M3 4h18l-6.5 8v6l-5 2v-8z"/><path d="M3 4h18l-6.5 8v6l-5 2v-8z"/><path class="pulse" d="M7 7.5h10"/>',
 auto:'<circle class="fill" cx="12" cy="12" r="3.2"/><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="12" r="3.2"/><path class="pulse" d="M6.8 7.3l2.7 2.6M17.2 7.3l-2.7 2.6M12 15.2V18"/>',
 diag:'<rect class="fill" x="5" y="4" width="14" height="17" rx="2.5"/><rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V2.8h6V4"/><path class="pulse" d="M8.5 13l2.3 2.3 4.7-4.8"/>',
 cal:'<rect class="fill" x="3.5" y="5" width="17" height="5" rx="2"/><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/><path class="pulse" d="M8 14h3M8 17h6"/>',
 chart:'<path class="fill" d="M4 20V14l5-4 4 3 7-7v14z"/><path d="M4 4v16h16"/><path class="pulse" d="M4 14l5-4 4 3 7-7"/>',
 key:'<circle class="fill" cx="8" cy="15" r="4.5"/><circle cx="8" cy="15" r="4.5"/><path d="M11.3 11.7L20 3M16.5 6.5l2.5 2.5M14 9l2 2"/>',
 globe:'<circle class="fill" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="9"/><path class="pulse" d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
 spark:'<path class="fill" d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z"/><path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z"/>'};
let gid=0;
const ic=(k,cls="")=>{const id='g'+(gid++);return `<span class="cic ${cls}"><svg viewBox="0 0 24 24" fill="none" stroke="url(#${id})" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="var(--c3)"/><stop offset="1" stop-color="var(--c2)"/></linearGradient></defs>${ICO[k]}</svg></span>`};
// ---------- Servicios (textos de cada página de servicio) ----------
const SERV=[
 {k:"ads",n:"Publicidad digital",d:"Campañas en Google, Meta, TikTok y ChatGPT Ads con medición completa.",u:"/servicios/campanas/",
  para:["Empresas que ya invierten en anuncios y no saben qué campaña trae clientes.","Negocios de servicios que necesitan un flujo constante de solicitudes, citas o cotizaciones.","Marcas que lanzan una oferta y necesitan resultados en semanas, no en meses."],
  inc:["Google Ads: Search, Performance Max, Display y YouTube","Meta Ads: prospección, remarketing y formularios instantáneos","TikTok Ads y ChatGPT Ads (según disponibilidad en tu mercado)","Medición: GA4, Tag Manager, píxeles y conversiones del lado del servidor","Audiencias y remarketing por etapa","CRO y pruebas A/B de anuncios, ofertas y landing pages","Informe mensual: inversión, leads, costo por resultado y próximos pasos"],
  proc:[["3 días – 1 semana","Diagnóstico"],["Mes 1","Estructura y lanzamiento"],["Mes 2","Optimización"],["Mes 3","Escala y plan"]],
  ent:["Auditoría de cuentas y medición","Plan de medios por canal","Campañas configuradas en tu propia cuenta","Audiencias y remarketing configurados","Plan de pruebas A/B de anuncios","Informe y reunión mensual"],
  nota:"La inversión en medios va aparte: la pagas directamente a cada plataforma con tu propia tarjeta y mantienes el control total del gasto."},
 {k:"seo",n:"Posicionamiento SEO",d:"Que te encuentren en Google, en la IA y en cada respuesta: SEO, GEO y AEO.",u:"/servicios/seo/",
  para:["Empresas con una web que casi no recibe visitas desde Google.","Negocios que dependen de anuncios y quieren un canal propio y sostenible.","Marcas que quieren aparecer cuando sus clientes preguntan a ChatGPT o a Google."],
  inc:["Auditoría técnica: indexación, velocidad, enlaces rotos y errores críticos","Mapa de palabras clave por intención y por página","SEO on-page: títulos, encabezados, enlazado interno y datos estructurados","Contenido: artículos y páginas de servicio","SEO, GEO y AEO: Google, respuestas de IA y respuesta directa","SEO local y Google Business Profile","Seguimiento diario de posiciones y reporte mensual"],
  proc:[["1 semana","Diagnóstico"],["Meses 1–2","Base técnica y local"],["Meses 3–4","Contenido y autoridad"],["Meses 5–6+","Crecimiento"]],
  ent:["Informe de auditoría técnica","Mapa de palabras clave por página","Correcciones técnicas y Google Business Profile optimizado","Calendario y piezas de contenido","Panel de rankings diario","Informe y reunión mensual"],
  nota:"Recursos como backlinks o redacción especializada se pagan aparte; te los proponemos antes y solo avanzamos con lo que apruebas."},
 {k:"web",n:"Desarrollo web y software",d:"Landing pages, sitios corporativos y aplicaciones web a medida.",u:"/servicios/desarrollo-web/",
  para:["Campañas que necesitan una landing específica por oferta.","Empresas con una web lenta, antigua o difícil de actualizar.","Equipos que necesitan una herramienta interna, un portal o una integración a medida."],
  inc:["Landing pages: una página, una oferta, un objetivo","Sitios corporativos multipágina, multidioma y administrables","Aplicaciones web a medida: paneles, portales y herramientas internas","Integraciones con tu CRM, WhatsApp, email y herramientas actuales","Rendimiento: Core Web Vitals en verde y medición desde el primer día","CRO y pruebas A/B de titulares, formularios y llamadas a la acción"],
  proc:[["3 días – 1 semana","Diagnóstico y descubrimiento"],["Paso 2","Arquitectura y diseño"],["Paso 3","Desarrollo"],["Paso 4","QA y lanzamiento"]],
  ent:["Sitio o aplicación publicada","Diseño responsive 360–1440 px","Código en tu repositorio","SEO técnico y datos estructurados","Formularios conectados al CRM","Plan de pruebas A/B y guía de uso"],
  nota:"Código puro o CMS como WordPress, según cuánto quieras editar tú. Al entregar, el código, el dominio y las cuentas son 100% tuyos."},
 {k:"crm",n:"CRM",d:"Todos tus canales en un solo lugar, con 3 automatizaciones incluidas.",u:"/servicios/crm-operaciones/",
  para:["Empresas que invierten en anuncios y pierden leads entre WhatsApp, email y Excel.","Equipos comerciales que no saben en qué etapa está cada oportunidad.","Negocios que quieren vender más a su base de contactos con email marketing."],
  inc:["WhatsApp, Instagram, Facebook, web, llamadas y email en una sola bandeja","Hasta 3 automatizaciones clave: chatbot, seguimiento de leads, recordatorios de cita…","Pipeline de leads a medida de tu proceso","Email marketing: bienvenida, nutrición y reactivación","Embudos de venta, lead scoring y reportes por canal, campaña y vendedor","Capacitación de tu equipo comercial"],
  proc:[["3 días – 1 semana","Diagnóstico comercial"],["Semanas 1–2","Configuración"],["Semanas 3–4","Email y embudos"],["Mes 2 en adelante","Capacitación y mejora"]],
  ent:["CRM configurado a tu nombre","Pipeline de ventas documentado","Secuencias de email activas","Embudo de venta publicado","Datos migrados y verificados","Panel de reportes y capacitación"],
  nota:"La suscripción del CRM y los envíos de email o WhatsApp se pagan aparte, a tu nombre. Plataforma: GoHighLevel u otra según tu caso."},
 {k:"auto",n:"Automatizaciones",d:"Flujos con IA que responden, registran y reportan por ti.",u:"/servicios/automatizaciones/",
  para:["Equipos que repiten las mismas tareas cada día: copiar datos, responder, reportar.","Marcas que reciben muchos mensajes en Instagram, WhatsApp o Messenger.","Empresas que quieren usar IA de forma práctica en ventas y atención."],
  inc:["Flujos entre formularios, CRM, bases de datos y herramientas diarias","Chatbots en Instagram, WhatsApp y Messenger","Agentes con IA: clasificación, respuestas y resúmenes","Bases de datos: Supabase, PostgreSQL, Airtable y Google Sheets","Reportes automáticos por email, Slack o Notion","Monitoreo, alertas de error y mantenimiento"],
  proc:[["3 días – 1 semana","Diagnóstico de procesos"],["Semana 1","Diseño del flujo"],["Semanas 2–3","Construcción y pruebas"],["Mes 2 en adelante","Monitoreo"]],
  ent:["Flujos funcionando a tu nombre","Documentación de cada flujo","Chatbot configurado (si aplica)","Alertas de error","Capacitación y guía de uso"],
  nota:"Plataformas: n8n y Make. IA: OpenAI, Claude, Gemini, MiniMax, DeepSeek, Grok o Kimi según la tarea. Suscripciones y APIs se pagan aparte, a tu nombre."}];
const li=(i,h,c="")=>`<li style="--i:${i}" class="${c}">${h}</li>`;
const site=i=>li(i,`<a class="hero-link" href="${SITE}" target="_blank" rel="noopener">${ic('globe','light')}<span class="txt"><b>meuveryone.com</b><small>Publicidad digital · SEO · Web · CRM · IA</small></span><span class="arrow">→</span></a>`);
const cta=(i,t="Solicitar diagnóstico",s="Diagnóstico profesional · 3 días a 1 semana")=>li(i,`<a class="cta" href="${SITE}/contacto/" target="_blank" rel="noopener"><b>${t} →</b><small>${s}</small></a>`);
const head=(i,k,t)=>li(i,`<div class="sec"><span>${k}</span><h2>${t}</h2></div>`);
const ul=a=>`<ul class="bul">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const acc=(s,i,open=false)=>li(i,`<details class="acc"${open?' open':''}><summary>${ic(s.k)}<span class="txt"><b>${s.n}</b><small>${s.d}</small></span><span class="chev"></span></summary><div class="acc-body"><div class="acc-in">
 <h4>Para quién es</h4>${ul(s.para)}
 <h4>Qué incluye</h4>${ul(s.inc)}
 <h4>Cómo trabajamos</h4><ol class="tl">${s.proc.map(p=>`<li><span>${p[0]}</span><b>${p[1]}</b></li>`).join('')}</ol>
 <h4>Lo que recibes</h4>${ul(s.ent)}
 <p class="nota">${s.nota}</p>
 <a class="more" href="${SITE}${s.u}" target="_blank" rel="noopener">Ver información completa →</a></div></div></details>`);
const COMP=[["diag","Diagnóstico antes de proponer","Profesional y pagado, de 3 días a 1 semana. Sin propuestas a ciegas."],["cal","Plazos realistas","Publicidad en planes de alrededor de 3 meses; SEO con un mínimo de 6 meses."],["chart","Sin cifras infladas","No prometemos resultados garantizados. Reportamos datos reales de tus cuentas."],["key","Todo a tu nombre","Cuentas, CRM, dominio y código quedan a tu nombre desde el primer día."]];
const MEU=[["M","Medir","Diagnóstico de cuentas, web y datos. Sin medición no hay decisión."],["E","Estructurar","Plan por canal, landing, CRM y conversiones listos antes de invertir."],["U","Unificar","Anuncios, SEO y web trabajan sobre la misma oferta y el mismo embudo."],["+","Escalar","Optimización mensual y más inversión solo donde el dato lo confirma."]];
const tiles=i=>li(i,`<div class="grid2">${COMP.map(c=>`<div class="tile">${ic(c[0])}<b>${c[1]}</b><small>${c[2]}</small></div>`).join('')}</div>`);
const ACCHINT=i=>li(i,`<p class="hint">Toca un servicio para ver qué incluye, plazos y entregables.</p>`);
const PROPUESTAS={
 a:{nombre:"A · Conversión",render(){let i=0;return [
  li(i++,`<div class="pain"><span class="kicker">El problema</span><p>¿Pagas anuncios, SEO y web a proveedores distintos y nadie te dice <em>cuántos clientes trajo tu inversión</em>?</p></div>`),
  li(i++,`<div class="promise">Más clientes desde <b>Google, Meta y la IA</b>, con una web que los convierte.</div>`),
  cta(i++),head(i++,"Cinco servicios","Un solo embudo"),ACCHINT(i++),
  ...SERV.map(s=>acc(s,i++)),
  head(i++,"Compromisos","Cómo trabajamos, por escrito"),tiles(i++),
  site(i++)].join('')}},
 b:{nombre:"B · Confianza",render(){let i=0;
  return [site(i++),head(i++,"Compromisos","Cómo trabajamos, por escrito"),tiles(i++),
  head(i++,"Método MEU","Cuatro pasos, siempre en el mismo orden"),
  li(i++,`<div class="steps">${MEU.map((m,j)=>`<div class="step" style="--j:${j}"><span class="l">${m[0]}</span><div><b>${m[1]}</b><small>${m[2]}</small></div></div>`).join('')}</div>`),
  head(i++,"Servicios","Cada uno por separado o conectados"),ACCHINT(i++),...SERV.map(s=>acc(s,i++)),
  li(i++,`<div class="stack"><small>Plataformas que operamos a diario</small><div>${["Google Ads","Meta Ads","TikTok Ads","ChatGPT Ads","GoHighLevel","n8n","Make","GA4","Tag Manager","Next.js"].map(p=>`<span>${p}</span>`).join('')}</div></div>`),
  cta(i++,"Agenda tu diagnóstico","Lima, Perú · atención remota en español e inglés")].join('')}},
 c:{nombre:"C · Interactiva",render(){let i=0;return [
  li(i++,`<div class="quiz" id="quiz"><span class="kicker">Elige tu situación</span><h2>¿Qué necesita tu negocio hoy?</h2><div class="opts">${[
   ["ads","Necesito más leads o cotizaciones"],["seo","Quiero aparecer en Google y en la IA"],["web","Mi web no convierte o no tengo una"],["crm","Pierdo leads entre WhatsApp, email y Excel"],["auto","Mi equipo repite las mismas tareas cada día"]].map(o=>`<button data-k="${o[0]}">${ic(o[0],'sm')}<span>${o[1]}</span></button>`).join('')}</div><div class="result" id="res"></div></div>`),
  site(i++),cta(i++,"¿No lo tienes claro? Pide un diagnóstico","Hallazgos, prioridades y una propuesta con cronograma")].join('')},
  init(){const q=document.getElementById('quiz');if(!q)return;q.querySelectorAll('.opts button').forEach(b=>b.onclick=()=>{
   q.querySelectorAll('.opts button').forEach(x=>x.classList.toggle('sel',x===b));const s=SERV.find(x=>x.k===b.dataset.k),r=document.getElementById('res');
   r.classList.remove('show');void r.offsetWidth;r.innerHTML=`<span class="kicker">Te recomendamos</span><ul class="links nested">${acc(s,0,true)}</ul>`;r.classList.add('show');
   for(let k=0;k<18;k++){const p=document.createElement('i');p.className='confetti';p.style.cssText=`--x:${(Math.random()-.5)*300}px;--y:${-Math.random()*220-40}px;--r:${Math.random()*720}deg;left:${b.offsetLeft+b.offsetWidth/2}px;top:${b.offsetTop}px`;q.appendChild(p);setTimeout(()=>p.remove(),1200)}
   setTimeout(()=>r.scrollIntoView({behavior:'smooth',block:'nearest'}),300)})}}
};
