(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const o=document.querySelector("#covers"),c=o.querySelector(".top-line"),a=o.querySelector(".mid-line"),l=o.querySelector(".bottom-line"),d=o.querySelector(".additional-line"),m={rootMargin:"0px",threshold:0},f=i=>{i.forEach(r=>{r.isIntersecting?(c.classList.add("animation"),a.classList.add("animation-reverse"),l.classList.add("animation"),d.classList.add("animation-reverse")):(c.classList.remove("animation"),a.classList.remove("animation-reverse"),l.classList.remove("animation"),d.classList.remove("animation-reverse"))})},p=new IntersectionObserver(f,m);p.observe(o);
//# sourceMappingURL=index.js.map
