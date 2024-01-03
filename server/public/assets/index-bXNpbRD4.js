(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const v=async()=>{const r=await(await fetch("/cars")).json(),d=document.getElementById("main-content");if(r)r.map(n=>{const e=document.createElement("article");e.classList.add("card"),e.style.backgroundImage=`url(${n.image})`;const t=document.createElement("div");t.classList.add("car-card-overlay");const a=document.createElement("div");a.classList.add("car-brief"),a.classList.add("car-card-name");const u=document.createElement("h3");u.textContent=n.name,a.appendChild(u);const C=document.createElement("hr");a.appendChild(C);const c=document.createElement("div");c.classList.add("car-brief"),c.classList.add("car-card-price");const p=document.createElement("p");p.textContent=n.retailPrice,c.appendChild(p);const i=document.createElement("div");i.classList.add("car-brief"),i.classList.add("car-card-link");const s=document.createElement("a");s.textContent="Read More",s.href=`/cars/${n.id}`,s.setAttribute("role","button"),i.appendChild(s),c.appendChild(i),a.appendChild(c),t.appendChild(a),e.appendChild(t),d.appendChild(e)});else{const n=document.createElement("h2");n.textContent="No Cars Available 😔",d.appendChild(n)}},y=window.location.href.split("/").pop();y?window.location.href="../404.html":v();const E=document.querySelector("nav"),o=document.createElement("div");o.className="nav-container";const f=document.createElement("h1");f.textContent="Cars Flex";const h=document.createElement("p");h.textContent="A platform to flex around with different cars without the aim of buying them. Mainly for car lovers!";const l=document.createElement("button");l.textContent="All Cars";l.addEventListener("click",function(r){window.location="/"});o.appendChild(f);o.appendChild(h);o.appendChild(l);E.appendChild(o);