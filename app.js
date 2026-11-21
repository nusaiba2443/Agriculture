(() => {
const body=document.body,theme=document.querySelector('.theme');
if(localStorage.getItem('greenroot-theme')==='dark')body.classList.add('dark');
theme.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('greenroot-theme',body.classList.contains('dark')?'dark':'light');theme.textContent=body.classList.contains('dark')?'☾':'☼';});
theme.textContent=body.classList.contains('dark')?'☾':'☼';
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.product').forEach(card=>card.classList.toggle('hidden',f!=='all'&&card.dataset.category!==f));}));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const countObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const el=e.target,end=+el.dataset.count,suffix=el.dataset.suffix||'',start=performance.now();function step(now){const p=Math.min((now-start)/1100,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);countObserver.unobserve(el);}}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>countObserver.observe(el));
const box=document.querySelector('.lightbox'),img=box.querySelector('img'),close=()=>{box.classList.remove('open');document.body.style.overflow='';};
document.querySelectorAll('.gallery button').forEach(b=>b.addEventListener('click',()=>{img.src=b.dataset.full;img.alt=b.querySelector('img').alt;box.classList.add('open');document.body.style.overflow='hidden';}));
box.querySelector('button').addEventListener('click',close);box.addEventListener('click',e=>{if(e.target===box)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
document.querySelectorAll('.faqs details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.faqs details').forEach(x=>{if(x!==d)x.open=false;});}));
document.querySelector('#contactForm').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;f.querySelector('.success').classList.add('show');f.reset();});
})();