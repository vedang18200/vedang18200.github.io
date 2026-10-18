/* ===== EDIT ME: all editable content lives in this one object. Anything in [square brackets] shows highlighted as a placeholder. ===== */
const DATA={
 dates:{role:"Aug 2025 – Present · Remote",higher:"Aug 2025 – Oct 2025 · 2 months",a:"Sep 2025 – Apr 2026",b:"Apr 2026 – Present",full:"December 2025"},
 metrics:{
  A:[["500","calls a day, each scored in 1–2 minutes"],["87%","baseline agreement with human QA"],["89/100","affected calls fixed by speaker attribution"]],
  B:[["1–2s","to match each request to an interpreter"],["20","default roles, plus custom roles"]]
 },
 open:"Open to full-time roles, remote preferred.",
 higher:{
  context:"A recruitment platform where an AI agent conducts the interview and then evaluates the candidate.",
  built:"I joined as a backend intern but also did AI work. I built the platform’s entire recommendation system.",
  stack:["LLMs","RAG","Vector database","Django","SQLAlchemy","REST APIs","PostgreSQL","Git"],
  learned:"I learned how to use Git properly, how CI/CD works, server architecture, multi-profile logins and database architecture. I learned how to deploy, and how monitoring shows the impact of a deployment. I also learned to build and integrate WebSockets.",
  business:"In a hiring product, the AI’s output has to be something a recruiter can trust. That means recommendations and evaluations must be explainable, and fast enough to fit the hiring flow.",
  did:"It was the first time I owned a whole system component end to end. It shaped how I approached the two projects below."
 },
 projects:[
  {name:"Multi-Agent Research Pipeline",hook:"Four agents, one cited report.",status:"Deployed",
   blurb:"A Planner, a Researcher, a Writer and a Verifier research a topic together and write a cited report. If the Verifier isn’t happy, the pipeline retries. It runs on Hugging Face Spaces and Render.",
   hl:["Four specialised agents orchestrated in LangGraph","Self-correcting retry loop driven by the Verifier","FastAPI back end with a Streamlit front end"],
   tags:["LangGraph","Groq","FastAPI","Streamlit"],links:[{t:"View code on GitHub",u:"https://github.com/vedang18200"}],soon:"Live demo · coming soon"},
  {name:"LexConnect",hook:"A legal aid platform I built end to end.",status:"Built, not currently live",
   blurb:"Lawyers manage their cases, and citizens register requests for a lawyer. I built the frontend, backend and AI integration myself, to showcase my backend and AI skills. It isn’t live right now.",
   hl:["Case files, hearing dates, appointment requests and scheduling","Real-time chat between lawyer and client over WebSockets","Earnings tracker for lawyers, plus a ChatGPT-powered assistant that explains basic rights under the Indian Constitution"],
   tags:["FastAPI","SQLAlchemy","Alembic","PostgreSQL","WebSockets","Next.js","OpenAI"],links:[{t:"Backend code",u:"https://github.com/vedang18200/Lexconnect-backend"},{t:"Frontend code [frontend repo URL]"}]},
  {name:"Ticket Booking System",hook:"1,000 people, 50 seats, zero double-bookings.",status:"In progress",
   blurb:"An event-driven booking backend in Go and GraphQL, built around one hard problem: many users booking the same seat at once. PostgreSQL decides seat ownership, Redis handles short-lived seat holds, and RabbitMQ workers handle payment, notifications and QR tickets. I’ll publish results once I’ve measured them.",
   hl:["Done: schema and migrations, JWT auth with a @hasRole schema directive","Done: a naive baseline and a k6 stampede test","Next: the concurrency fix (unique index + Redis hold), workers and CI"],
   tags:["Go","GraphQL (gqlgen)","PostgreSQL","Redis","RabbitMQ","Docker","k6"],links:[{t:"View code on GitHub",u:"https://github.com/vedang18200/golang-ticket-booking"}]},
  {name:"AI Mock Interview",hook:"Practice interviews, scored out of 10.",status:"No live demo",
   blurb:"It generates role-specific questions with the Gemini API and records your spoken answers through webcam and mic. Speech is converted to text, and each answer is scored out of 10 with strengths and areas to improve.",
   hl:["Clerk authentication","The hardest part: managing latency between speech-to-text, the WebSocket flow and the LLM evaluation"],
   tags:["Django","React","Gemini API","WebRTC","WebSockets","Clerk"],links:[{t:"View code on GitHub",u:"https://github.com/vedang18200/Ai-mock-interview"}]}
 ],
 qa:[
  {q:"What does he build?",a:"LLM agent pipelines, RAG systems and event-driven AWS backends, mostly in Python."},
  {q:"What’s his stack?",a:"Python, FastAPI, LangGraph, RAG on pgvector, and AWS (Lambda, Fargate, ECS, SQS, EventBridge) with Docker and GitHub Actions."},
  {q:"Tell me about the AI work",a:"He’s the sole AI engineer on a backend team of four: agent pipelines with RAG, calibration against human reviewers, guardrails and tracing."},
  {q:"How can I reach him?",a:"Email is quickest:",href:"mailto:vedangdeshmukh777@gmail.com",link:"vedangdeshmukh777@gmail.com"}
 ]
};
/* ===================================================================================================== */
(function(){
var r=document.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var E=function(t){return String(t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})},
PH=function(t){return E(t).replace(/\[[^\]]+\]/g,'<mark class="ph">$&</mark>')},
TG=function(a){return '<ul class="tags">'+a.map(function(x){return '<li>'+E(x)+'</li>'}).join('')+'</ul>'};
document.querySelectorAll('[data-d]').forEach(function(el){el.textContent=DATA.dates[el.dataset.d]||''});
var H=DATA.higher,hr=function(k,v){return '<div><dt>'+k+'</dt><dd>'+v+'</dd></div>'};
document.getElementById('higher').innerHTML='<dl class="sub">'+hr('Context',PH(H.context))+hr('What I built',PH(H.built))+hr('Stack',TG(H.stack))+hr('What I learned',PH(H.learned))+hr('The business side',PH(H.business))+hr('What it did for me',PH(H.did))+'</dl>';
document.getElementById('plist').innerHTML=DATA.projects.map(function(p){
 return '<article class="pj"><div class="rv"><h3>'+E(p.name)+'</h3><p class="hook">'+E(p.hook)+'</p><span class="st">'+E(p.status)+'</span></div><div class="rv" style="--d:1"><p>'+PH(p.blurb)+'</p><ul class="hl">'+p.hl.map(function(x){return '<li>'+PH(x)+'</li>'}).join('')+'</ul>'+TG(p.tags)+'<p class="row">'+p.links.map(function(l,i){return l.u?'<a class="btn'+(i?'':' p')+'" href="'+E(l.u)+'" rel="noopener">'+E(l.t)+'</a>':'<span class="btn">'+PH(l.t)+'</span>'}).join('')+(p.soon?'<button class="btn" type="button" disabled>'+E(p.soon)+'</button>':'')+'</p></div></article>'}).join('');
document.querySelectorAll('.stats').forEach(function(el){var m=DATA.metrics[el.dataset.k]||[];
 if(!m.length){el.closest('div').remove();return}
 m.forEach(function(x){var d=document.createElement('div'),s=document.createElement('strong');s.textContent=x[0];d.appendChild(s);d.appendChild(document.createTextNode(x[1]));el.appendChild(d)})});
document.getElementById('yr').textContent=new Date().getFullYear();
var tg=document.getElementById('tg');
function lab(){tg.textContent=r.dataset.theme==='dark'?'Light':'Dark'}lab();
tg.onclick=function(){var n=r.dataset.theme==='dark'?'light':'dark';r.classList.add('swap');r.dataset.theme=n;
try{localStorage.setItem('theme',n)}catch(e){}lab();dispatchEvent(new Event('themechange'));setTimeout(function(){r.classList.remove('swap')},450)};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var links=[].slice.call(document.querySelectorAll('nav ul a')),
so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.setAttribute('aria-current',a.getAttribute('href')==='#'+e.target.id)});var cu=document.querySelector('nav ul a[aria-current=true]');if(cu)cu.parentElement.parentElement.scrollTo({left:cu.offsetLeft-24,behavior:'smooth'});react(e.target.id)}})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(function(s){so.observe(s)});
var tl=document.getElementById('tl'),t=false;
function p(){t=false;var b=tl.getBoundingClientRect(),h=innerHeight,v=Math.min(1,Math.max(0,(h*.75-b.top)/b.height));tl.style.setProperty('--p',v.toFixed(3))}
if(rm){tl.style.setProperty('--p',1)}else{p();addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(p)}},{passive:true});addEventListener('resize',p)}

/* ---- numbers strip, status line, live button ---- */
var nums=document.getElementById('nums'),all=[].concat(DATA.metrics.A||[],DATA.metrics.B||[]).slice(0,4);
if(!all.length){nums.closest('.band').remove()}else{all.forEach(function(x){var d=document.createElement('div'),st=document.createElement('strong');st.textContent=x[0];d.appendChild(st);d.appendChild(document.createTextNode(x[1]));nums.appendChild(d)});
 if(!rm){var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.disconnect();[].forEach.call(nums.querySelectorAll('strong'),function(st){var m=/^(\d+)(%|\/\d+)?$/.exec(st.textContent);if(!m)return;var n=+m[1],suf=m[2]||'',t0=performance.now();(function f(now){var k=Math.min(1,(now-t0)/1100),v=Math.round(n*(1-Math.pow(1-k,3)));st.textContent=v+suf;if(k<1)requestAnimationFrame(f)})(t0)})})},{threshold:.4});co.observe(nums)}}
var slot=document.getElementById('slot'),op=document.getElementById('open');if(DATA.open){op.textContent=DATA.open;op.hidden=false}
var lv=document.getElementById('live');if(DATA.liveUrl){var la=document.createElement('a');la.className='btn p';la.href=DATA.liveUrl;la.rel='noopener';la.textContent='Try it live';lv.replaceWith(la)}
document.querySelectorAll('.flow').forEach(function(el){io.observe(el)});
/* ---- bot bubble: greeting, section quips, click-to-ask ---- */
window.botFx={tilt:0,hop:0};
var bub=document.getElementById('bub'),bt=document.getElementById('bt'),bq=document.getElementById('bq'),bh,isOpen=false,said={},
quips={experience:{t:'Sole AI engineer on a team of four. That’s a lot of agents to look after.',tilt:.3},work:{t:'Four agents, one cited report.',tilt:-.25},skills:{t:'Tags, not progress bars. Skills are better shown than scored.',tilt:.2},contact:{t:'Say hi. Email is fastest.',tilt:0}};
function say(text,ms){if(isOpen)return;bt.textContent=text;bq.textContent='';bub.classList.add('on');clearTimeout(bh);bh=setTimeout(function(){if(!isOpen)bub.classList.remove('on')},ms||4200)}
function react(id){var m=quips[id];if(!m||said[id]||isOpen)return;said[id]=1;say(m.t,3800);botFx.tilt=m.tilt;setTimeout(function(){botFx.tilt=0},3800)}
function answer(x){bt.textContent=x.a+' ';if(x.href){var l=document.createElement('a');l.href=x.href;l.textContent=x.link;bt.appendChild(l)}}
function menu(){isOpen=true;clearTimeout(bh);bt.textContent='Hi! Ask me something about Vedang.';bq.textContent='';DATA.qa.forEach(function(x){var b=document.createElement('button');b.type='button';b.textContent=x.q;b.onclick=function(){answer(x)};bq.appendChild(b)});bub.classList.add('on');botFx.hop=1}
function closeB(){isOpen=false;bub.classList.remove('on')}
function toggle(){isOpen?closeB():menu()}
bub.querySelector('.x').onclick=closeB;document.getElementById('askBtn').onclick=toggle;slot.onclick=toggle;
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeB()});
var greeted=0;function greet(){if(greeted)return;greeted=1;say('Hi, I’m Vedang’s agent bot. Tap me to ask something.',5200)}

/* ---- living background: drifting network, cursor repel + links, click ripples ---- */
(function(){if(rm)return;
var cv=document.createElement('canvas'),c=cv.getContext('2d'),W=0,H=0,D=1,P=[],R=[],mx=-999,my=-999,ink,acc,run=0,N=0;
cv.id='bg';cv.setAttribute('aria-hidden','true');document.body.prepend(cv);
function cols(){var q=getComputedStyle(r);ink=q.getPropertyValue('--mute').trim();acc=q.getPropertyValue('--acc').trim()}cols();addEventListener('themechange',cols);
function rnd(x,y,v){return{x:x,y:y,vx:(Math.random()-.5)*v,vy:(Math.random()-.5)*v,r:1+Math.random()*1.6}}
function size(){var w=innerWidth;D=Math.min(devicePixelRatio||1,1.5);H=innerHeight;cv.width=w*D;cv.height=H*D;c.setTransform(D,0,0,D,0,0);
 if(w!==W||!P.length){W=w;N=Math.round(Math.min(80,W*H/12000));P=[];for(var i=0;i<N;i++)P.push(rnd(Math.random()*W,Math.random()*H,.5))}W=w}
size();addEventListener('resize',size);
addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY},{passive:true});
document.addEventListener('pointerleave',function(){mx=my=-999});
addEventListener('pointerdown',function(e){R.push({x:e.clientX,y:e.clientY,t:0});for(var i=0;i<4;i++)P.push(rnd(e.clientX,e.clientY,3));if(P.length>N+16)P.splice(0,4)});
function draw(){run=requestAnimationFrame(draw);c.clearRect(0,0,W,H);c.fillStyle=ink;c.lineWidth=1;
 for(var i=0;i<P.length;i++){var a=P[i],dx=a.x-mx,dy=a.y-my,d=Math.sqrt(dx*dx+dy*dy);
  if(d<150&&d>.1){var f=(1-d/150)*.05;a.vx+=dx/d*f;a.vy+=dy/d*f}
  var sp=Math.sqrt(a.vx*a.vx+a.vy*a.vy);if(sp>1){a.vx/=sp;a.vy/=sp}
  a.x+=a.vx;a.y+=a.vy;if(a.x<0)a.x=W;else if(a.x>W)a.x=0;if(a.y<0)a.y=H;else if(a.y>H)a.y=0;
  c.globalAlpha=.55;c.beginPath();c.arc(a.x,a.y,a.r,0,6.283);c.fill();
  for(var j=i+1;j<P.length;j++){var b=P[j],ex=a.x-b.x,ey=a.y-b.y,e=ex*ex+ey*ey;
   if(e<14400){c.globalAlpha=(1-Math.sqrt(e)/120)*.3;c.strokeStyle=ink;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke()}}
  if(d<170){c.globalAlpha=(1-d/170)*.8;c.strokeStyle=acc;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(mx,my);c.stroke()}}
 for(var k=R.length-1;k>=0;k--){var o=R[k];o.t++;if(o.t>50){R.splice(k,1);continue}c.globalAlpha=1-o.t/50;c.strokeStyle=acc;c.lineWidth=2;c.beginPath();c.arc(o.x,o.y,o.t*4,0,6.283);c.stroke();c.lineWidth=1}
 c.globalAlpha=1}
document.addEventListener('visibilitychange',function(){if(document.hidden){cancelAnimationFrame(run);run=0}else if(!run)run=requestAnimationFrame(draw)});
run=requestAnimationFrame(draw);
})();

/* ---- 3D mascot ---- */
if(rm||!window.THREE)return;
var T=THREE,dock=document.getElementById('dock'),contact=document.getElementById('contact'),ren;
try{ren=new T.WebGLRenderer({antialias:true,alpha:true});if(!ren.getContext())return}catch(e){return}
var cv=ren.domElement;slot.appendChild(cv);
var sc=new T.Scene(),cam=new T.PerspectiveCamera(34,1,.1,50);cam.position.set(0,.25,7.2);cam.lookAt(0,.15,0);
sc.add(new T.AmbientLight(0xffffff,.75));var dl=new T.DirectionalLight(0xffffff,.9);dl.position.set(3,4,5);sc.add(dl);var rim=new T.PointLight(0xffffff,1.4,20);rim.position.set(-3,2,-3);sc.add(rim);
function col(n){return new T.Color(getComputedStyle(r).getPropertyValue(n).trim())}
var mB=new T.MeshStandardMaterial({roughness:.5,metalness:.05}),mV=new T.MeshStandardMaterial({roughness:.25,metalness:.1}),mE=new T.MeshBasicMaterial(),mA=new T.MeshBasicMaterial();
function theme(){var L=r.dataset.theme==='light',ink=col('--ink'),bg=col('--bg');if(L){mB.color.copy(col('--acc'));mV.color.copy(ink)}else{mB.color.copy(ink).lerp(bg,.12);mV.color.copy(bg)}mE.color.set('#b4f06a');mA.color.copy(col('--acc'));rim.color.set('#b4f06a')}
theme();addEventListener('themechange',theme);
function M(g,m,x,y,z,sx,sy,sz){var o=new T.Mesh(g,m);o.position.set(x||0,y||0,z||0);o.scale.set(sx||1,sy||1,sz||1);return o}
var bot=new T.Group(),head=new T.Group(),eyes=new T.Group();sc.add(bot);
bot.add(M(new T.SphereGeometry(.8,48,32),mB,0,-.75,0,1,1.05,.85));
head.position.y=.6;head.add(M(new T.SphereGeometry(.8,56,36),mB,0,0,0,1.2,.95,1));
head.add(M(new T.SphereGeometry(.62,48,28),mV,0,.02,.5,1.25,.7,.5));
var e1=M(new T.SphereGeometry(.12,24,16),mE,-.27,.02,.84,1,1.5,.8),e2=M(new T.SphereGeometry(.12,24,16),mE,.27,.02,.84,1,1.5,.8);eyes.add(e1,e2);head.add(eyes);
head.add(M(new T.CylinderGeometry(.03,.03,.5,16),mB,0,.85,0));bot.add(head);
var ng=new T.Group();ng.position.y=1.95;bot.add(ng);var nodes=[];
for(var i=0;i<3;i++){var n=M(new T.SphereGeometry(.1,20,14),mA);nodes.push(n);ng.add(n)}
function arm(s){var g=new T.Group();g.position.set(s*.74,-.4,0);g.add(M(new T.CylinderGeometry(.09,.09,.5,24),mB,0,-.25,0));g.add(M(new T.SphereGeometry(.14,24,16),mB,0,-.52,0));bot.add(g);return g}
var aL=arm(-1),aR=arm(1);aL.rotation.z=-.3;aR.rotation.z=.3;
var hop=0,tx=0,ty=0,prog=0,wave=0,raf=0,lerp=function(a,b,k){return a+(b-a)*k};
addEventListener('pointermove',function(e){tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2},{passive:true});
addEventListener('deviceorientation',function(e){if(e.gamma==null)return;tx=Math.max(-1,Math.min(1,e.gamma/30));ty=Math.max(-1,Math.min(1,(e.beta-50)/30))});
addEventListener('pointerdown',function(){hop=1});
var docked=false,turns=0,sz=function(d){return d?240:(innerWidth<760?340:560)};
ren.setPixelRatio(Math.min(devicePixelRatio||1,2));ren.setSize(sz(false),sz(false),false);cam.aspect=1;cam.updateProjectionMatrix();
addEventListener('resize',function(){var s=sz(docked);ren.setSize(s,s,false)});
function setDock(d){if(d===docked)return;if(d)setTimeout(greet,900);var a=cv.getBoundingClientRect();docked=d;turns+=1;(d?dock:slot).appendChild(cv);var s=sz(d);ren.setSize(s,s,false);var b=cv.getBoundingClientRect();
 if(cv.animate&&b.width)cv.animate([{transformOrigin:'0 0',transform:'translate('+(a.left-b.left)+'px,'+(a.top-b.top)+'px) scale('+(a.width/b.width)+','+(a.height/b.height)+')'},{transformOrigin:'0 0',transform:'none'}],{duration:750,easing:'cubic-bezier(.2,.7,.2,1)'})}
function onScroll(){var y=scrollY,h=innerHeight;if(!docked&&y>h*.35)setDock(true);else if(docked&&y<h*.15)setDock(false);wave=contact.getBoundingClientRect().top<h*.6?1:0}
addEventListener('scroll',onScroll,{passive:true});onScroll();
function frame(now){if(document.hidden){raf=0;return}raf=requestAnimationFrame(frame);var t=now/1000;
 if(botFx.hop){hop=1;botFx.hop=0}hop*=.92;bot.position.y=Math.sin(t*1.6)*.09+hop*.4;
 var cur=bot.rotation.y,goal=turns*Math.PI*2;bot.rotation.y=lerp(cur,goal,.07);
 head.rotation.y=lerp(head.rotation.y,tx*.6,.08);head.rotation.x=lerp(head.rotation.x,ty*.35,.08);head.rotation.z=lerp(head.rotation.z,botFx.tilt,.08);eyes.position.x=lerp(eyes.position.x,tx*.06,.1);
 var bl=(t%4)<.12?.1:1;e1.scale.y=e2.scale.y=1.5*bl;
 nodes.forEach(function(n,i){var a=t*.9+i*2.094;n.position.set(Math.cos(a)*.5,Math.sin(t*1.3+i)*.1,Math.sin(a)*.5)});
 aR.rotation.z=wave?2.4+Math.sin(t*9)*.45:lerp(aR.rotation.z,.3,.1);aL.rotation.z=-.3+Math.sin(t*1.6)*.05;
 ren.render(sc,cam)}
document.addEventListener('visibilitychange',function(){if(!document.hidden&&!raf)raf=requestAnimationFrame(frame)});
cv.onclick=function(e){e.stopPropagation();toggle()};r.classList.add('gl');raf=requestAnimationFrame(frame);
})();
