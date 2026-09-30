const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const h=$('h1');
h.innerHTML=h.textContent.trim().split(/\s+/).map((w,i)=>`<span class="wm"><span style="--i:${i}">${w}</span></span> `).join('');
const l=$('#lbl');let a=1;
setInterval(()=>{a=!a;l.textContent=a?'Inhalá':'Exhalá'},4000);
$$('.tab').forEach(b=>b.onclick=()=>{
  $$('.tab').forEach(t=>t.setAttribute('aria-selected',t===b));
  $$('.panel').forEach(p=>p.hidden=p.id!==b.dataset.p);
});
const hero=$('.hero');
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px')});
$$('.mag').forEach(b=>{
  b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.3}px)`});
  b.addEventListener('pointerleave',()=>b.style.transform='');
});
