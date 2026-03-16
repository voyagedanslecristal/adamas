window.addEventListener('DOMContentLoaded', function() {
  try {
(function() {
var s = document.createElement('style');
s.textContent = '@keyframes heroFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}} @keyframes journeyFlame{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}} @keyframes diamondBreath{0%,100%{transform:scale(1)}50%{transform:scale(1.025)}} video::-webkit-media-text-track-container{display:none!important} video::cue{opacity:0!important}';
document.head.appendChild(s);
var h=document.querySelector('.hero-title');
if(h){h.style.setProperty('background','linear-gradient(90deg,#7a1e00 0%,#d4500a 20%,#f5a060 40%,#ffcc88 60%,#ff8c42 80%,#d4500a 100%)','important');h.style.setProperty('background-size','250% 100%','important');h.style.setProperty('-webkit-background-clip','text','important');h.style.setProperty('background-clip','text','important');h.style.setProperty('-webkit-text-fill-color','transparent','important');h.style.setProperty('animation','journeyFlame 5s ease-in-out infinite','important');h.style.setProperty('opacity','1','important');}
var ey=document.querySelector('.hero-eyebrow');
if(ey){ey.style.setProperty('background','linear-gradient(90deg,#7a1e00 0%,#d4500a 20%,#f5a060 40%,#d4500a 60%,#7a1e00 80%,#d4500a 100%)','important');ey.style.setProperty('background-size','250% 100%','important');ey.style.setProperty('-webkit-background-clip','text','important');ey.style.setProperty('background-clip','text','important');ey.style.setProperty('-webkit-text-fill-color','transparent','important');ey.style.setProperty('animation','journeyFlame 7s ease-in-out infinite','important');ey.style.setProperty('opacity','1','important');}
var s2=document.createElement('style');
s2.textContent='.section-label{background:linear-gradient(90deg,#a83010 0%,#d4500a 20%,#f5906a 40%,#d4500a 60%,#a83010 80%,#d4500a 100%)!important;background-size:250% 100%!important;-webkit-background-clip:text!important;background-clip:text!important;-webkit-text-fill-color:transparent!important;animation:journeyFlame 6s ease-in-out infinite!important;font-size:0.78rem!important;letter-spacing:0.32em!important;font-weight:500!important;opacity:1!important;}';
document.head.appendChild(s2);
var tl=document.querySelector('.timeline-section h2');
if(tl){['background','background-size','-webkit-background-clip','background-clip','-webkit-text-fill-color','animation','font-size','letter-spacing','font-weight','opacity'].forEach(function(p,i){tl.style.setProperty(p,['linear-gradient(90deg,#a83010 0%,#d4500a 20%,#f5906a 40%,#d4500a 60%,#a83010 80%,#d4500a 100%)','250% 100%','text','text','transparent','journeyFlame 6s ease-in-out infinite','0.78rem','0.32em','500','1'][i],'important');});}
var s3=document.createElement('style');
s3.textContent='.artistry p,.artistry-body,.artistry-text p{color:rgba(245,237,230,0.78)!important;}.bridge p,.bridge-body{color:rgba(245,237,230,0.78)!important;}.hero-title,.hero-eyebrow,.section-label,.artistry h2,.artistry-title{opacity:1!important;}';
document.head.appendChild(s3);
var bp=document.querySelector('.bridge p,.bridge .bridge-body');
if(bp)bp.innerHTML='Kimberlite eruptions — among the rarest geological phenomena on Earth — propelled diamonds from their birthplace 150 kilometres below the surface toward the sky at speeds exceeding 70 km/h. A journey of three billion years completed in hours. Without this violent, improbable ascent, no diamond would ever reach human hands. It is the rarest of geological accidents. And it happened for yours.';
var bh=document.querySelector('.bridge h2');
if(bh){bh.style.setProperty('color','rgba(245,237,230,0.92)','important');bh.querySelectorAll('em').forEach(function(e){e.style.setProperty('color','#d4500a','important');});}
var art=document.querySelector('.artistry');
if(art&&!document.querySelector('.artistry-video-bg')){
  art.style.position='relative';art.style.overflow='hidden';
  var vb=document.createElement('div');vb.className='artistry-video-bg';vb.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;overflow:hidden;';
  var v=document.createElement('video');v.src='https://origin.debeersgroup.com/wp-content/uploads/2025/09/India-45-sec-1.mp4';v.autoplay=true;v.muted=true;v.loop=true;v.playsInline=true;v.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:100%;min-height:100%;object-fit:cover;';
  var ov=document.createElement('div');ov.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to right,rgba(8,6,4,0.88),rgba(8,6,4,0.7),rgba(8,6,4,0.82));';
  vb.appendChild(v);vb.appendChild(ov);art.insertBefore(vb,art.firstChild);
  Array.from(art.children).forEach(function(c){if(c!==vb){c.style.position='relative';c.style.zIndex='2';}});
}
var ah=document.querySelector('.artistry h2,.artistry-title');
if(ah){ah.style.setProperty('color','#f5ede6','important');ah.style.setProperty('-webkit-text-fill-color','#f5ede6','important');ah.style.setProperty('font-weight','300','important');}
var ft=document.querySelector('footer');
if(ft)ft.innerHTML=ft.innerHTML.replace(/2025/g,'2026');
var av=document.querySelector('.artistry-visual');
if(av&&!document.getElementById('diamond-carousel')){
  av.innerHTML='';av.style.cssText='position:relative;display:flex;align-items:center;justify-content:center;z-index:2;padding:2rem;';
  var con=document.createElement('div');con.id='diamond-carousel';con.style.cssText='position:relative;width:100%;min-height:420px;display:flex;flex-direction:column;align-items:center;justify-content:center;';
  var sc=document.createElement('style');sc.textContent='#diamond-carousel .diamond-slide{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transform:translateY(22px) scale(0.92);transition:opacity 1.2s cubic-bezier(0.16,1,0.3,1),transform 1.2s cubic-bezier(0.16,1,0.3,1);pointer-events:none;}#diamond-carousel .diamond-slide.active{opacity:1;transform:none;pointer-events:auto;}.diamond-svg-wrap{width:min(300px,85%);height:min(380px,50vh);display:flex;align-items:center;justify-content:center;filter:drop-shadow(0 0 16px rgba(212,80,10,0.25));}.diamond-name{margin-top:1.2rem;font-family:Albert Sans,sans-serif;font-size:0.58rem;letter-spacing:0.38em;text-transform:uppercase;color:rgba(212,80,10,0.85);}.diamond-dots{position:absolute;bottom:0;left:50%;transform:translateX(-50%);display:flex;gap:0.6rem;}.diamond-dot{width:5px;height:5px;border-radius:50%;background:rgba(212,80,10,0.2);cursor:pointer;}.diamond-dot.active{background:#d4500a;}';
  document.head.appendChild(sc);
  ['Round','Emerald','Cushion','Square Emerald','Pear'].forEach(function(n,i){var sl=document.createElement('div');sl.className='diamond-slide'+(i===0?' active':'');sl.id='dslide-'+i;sl.innerHTML='<div class="diamond-svg-wrap" id="dsvg-'+i+'"></div><div class="diamond-name">'+n+'</div>';con.appendChild(sl);});
  var dd=document.createElement('div');dd.className='diamond-dots';
  [0,1,2,3,4].forEach(function(i){var d=document.createElement('div');d.className='diamond-dot'+(i===0?' active':'');d.id='ddot-'+i;dd.appendChild(d);});
  con.appendChild(dd);av.appendChild(con);
  var cur=0;window._diamondGoTo=function(idx){var sl=document.querySelectorAll('.diamond-slide'),dt=document.querySelectorAll('.diamond-dot');sl[cur].classList.remove('active');dt[cur].classList.remove('active');cur=idx;sl[cur].classList.add('active');dt[cur].classList.add('active');};
  document.querySelectorAll('.diamond-dot').forEach(function(d,i){d.addEventListener('click',function(){window._diamondGoTo(i);});});
  clearInterval(window._diamondInterval);window._diamondInterval=setInterval(function(){window._diamondGoTo((cur+1)%5);},3200);
}
console.log('ORIGIN inject OK');
})();
  } catch(e) { console.error('ORIGIN inject error:', e); }
});
