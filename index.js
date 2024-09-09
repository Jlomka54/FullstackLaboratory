import{i as u,A as E,S as p,N as O,P as q,K as x,M as T,a as l,b as M,c as P}from"./assets/vendor-B_oXekBl.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const C=document.querySelector(".js-dropdown-toggle"),w=document.querySelector(".js-dropdown-menu"),A=document.querySelectorAll(".js-header-menu-link");C.addEventListener("click",function(){w.classList.toggle("show")});A.forEach(t=>{t.addEventListener("click",function(){w.classList.remove("show")})});window.addEventListener("click",function(t){document.querySelector(".header-dropdown").contains(t.target)||w.classList.remove("show")});(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".js-header-link"),o=()=>{const r=t.classList.contains("is-open");e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open"),r?document.body.classList.remove("no-scroll"):document.body.classList.add("no-scroll")};i.forEach(r=>r.addEventListener("click",o)),e.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),document.body.classList.remove("no-scroll"))})})();const I=JSON.parse(localStorage.getItem("currentTheme"))||"red";document.body.dataset.theme=I;function m(t,e){const s={titleSize:"16px",maxWidth:432,position:"topRight",closeOnEscape:!0,theme:"dark",timeout:4e3};switch(t){case"success":u.success({...s,message:e});break;case"error":u.error({...s,backgroundColor:"#ef4040",message:e});break;case"warning":u.warning({...s,message:e});break}}function _(t){const e=t.getBoundingClientRect(),s=Math.max(document.documentElement.clientHeight,window.innerHeight);e.bottom>s&&window.scrollTo({top:e.top+window.scrollY-(s-e.height)/2,behavior:"smooth"})}const v=new E(".about-me__accord_list",{duration:350,elementClass:"about-me__accord_item",triggerClass:"about-me__accord_trigger",panelClass:"about-me__accord_panel",showMultiple:!0,onOpen:_});v.detachEvents();v.open(0);setTimeout(()=>{v.attachEvents()},1e3);const j=new p(".about-swiper-container",{slidesPerView:"auto",spaceBetween:0,loop:!0,modules:[O,q,x,T],navigation:{nextEl:".about-button-swip"},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1}});function k(){document.querySelectorAll("#custom-swiper .about-swiper-skills").forEach(e=>{e.style.removeProperty("background-color")});const t=document.querySelector("#custom-swiper .about-swiper-skills.swiper-slide-active");t&&t.style.setProperty("background-color","#ed3b44")}k();j.on("slideChangeTransitionEnd",k);new p(".project-swiper",{slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:900});new E(".faq-accordion-container",{duration:350,showMultiple:!0,onOpen:_});const a=document.querySelector("#covers"),g=a.querySelector(".top-line"),b=a.querySelector(".mid-line"),f=a.querySelector(".bottom-line"),y=a.querySelector(".additional-line"),B={rootMargin:"0px",threshold:0},N=t=>{t.forEach(e=>{e.isIntersecting?(g.classList.add("animation"),b.classList.add("animation-reverse"),f.classList.add("animation"),y.classList.add("animation-reverse")):(g.classList.remove("animation"),b.classList.remove("animation-reverse"),f.classList.remove("animation"),y.classList.remove("animation-reverse"))})},R=new IntersectionObserver(N,B);R.observe(a);const h=document.querySelector(".swiper-review-wrapper"),V={slidesPerView:1,spaceBetween:15,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}},$=new p(".swiper-review",V);l.defaults.baseURL="https://portfolio-js.b.goit.study/api";const D=()=>l.get("/reviews"),H=t=>`
  
  <li class="swiper-slide swiper-review-slide">
  <div class="swiper-review-img">  
		<img 
			class="review-image" 
			src="${t.avatar_url}" 
			alt="${t.author}" 
			/>	
  </div>
      <h3 class="review-container-title section-text">${t.author}</h3>
      <p class="review-text section-text">${t.review}</p>
</li> 
  `,U=async t=>{try{const s=(await D()).data.map(i=>H(i)).join("");h.innerHTML=s}catch{m("error","Sorry, no reviews found yet"),$.disable(),h.previousElementSibling.classList.remove("review-hidden")}};U();const J="/project-team-10/assets/icon-BTOTQ9Pm.svg",n={client_email:"",client_comment:""},c=document.querySelector(".wt-form");l.defaults.baseURL="https://portfolio-js.b.goit.study/api";const K=async t=>{const e={email:t.client_email,comment:t.client_comment};return await l.post("/requests",e)},z=t=>P.create(`
    <div class="wt-modal-overlay">
      <div class="wt-modal">
        <button type="button" class="wt-modal-close-btn">
          <svg class="wt-icon">
            <use href="${J}#icon-close-mob-menu-bt"></use>
          </svg>
        </button>
        <p class="wt-modal-tittle">${t.title.trim()}</p>
        <p class="wt-modal-message">${t.message.trim()}</p>
      </div>
    </div>
    `,{onShow:e=>{document.body.classList.add("no-scroll"),e.element().querySelector(".wt-modal-close-btn").onclick=e.close;const s=i=>{(i.key==="Escape"||i.keyCode===27)&&(e.close(),document.removeEventListener("keydown",s))};document.addEventListener("keydown",s)},onClose:()=>{document.body.classList.remove("no-scroll")}}),L=t=>{n[t.target.name]=t.target.value.trim(),localStorage.setItem("wt-form-data",JSON.stringify(n))},S=async t=>{if(t.preventDefault(),!(n.client_email===""||n.client_comment==="")){try{const{data:e}=await K(n);z(e).show()}catch(e){e instanceof M?(console.error("Axios Error:",e.message),console.error("Error Details:",e.config),m("error",`Sorry, error occurred: ${e.message}. Please try again!`)):(console.error("Toast trigger"),console.error(e),m("error","Sorry, unexpected error occurred. Please try again!"));return}n.client_email="",n.client_comment="",localStorage.removeItem("wt-form-data"),c.reset()}},F=t=>{t.forEach(e=>{e.isIntersecting?(c.addEventListener("input",L),c.addEventListener("submit",S)):(c.removeEventListener("input",L),c.removeEventListener("submit",S))})};if(localStorage.length>0){const t=localStorage.getItem("wt-form-data");if(t){const{client_email:e,client_comment:s}=JSON.parse(t);n.client_email=e??"",n.client_comment=s??""}}c.elements.client_email.value=n.client_email;c.elements.client_comment.value=n.client_comment;const G=new IntersectionObserver(F);G.observe(c);
//# sourceMappingURL=index.js.map
