/* empty css                      */import{a as p}from"./assets/vendor-a2e8d7fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const m=p.create({baseURL:"https://food-boutique.b.goit.study/api"}),a=async o=>{try{const{data:e}=await m(o);return e}catch(e){console.log(e.message)}},f=async()=>await a("/products"),g=async()=>(await a("/products/discount")).sort(()=>Math.random()-.5).slice(0,2);g().then(console.log);const y=async()=>{const{results:o}=await f(),e=o.map(({category:i,img:t,is10PercentOff:n,name:s,popularity:d,price:l,size:u,_id:b})=>`<li>
  <div class="card-img"><img src="${t}" alt="${s}" /></div>
  <div class="description">
    <h3>${s}</h3>
    
      <span>Category: </span><span>${i.split("_").join(" ")}</span>
      <span>Size: </span><span>${u}</span>
      <span>Popularity: </span><span>${d}</span>
    
  </div>
  <div class="to-cart">
    <p>${l}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=e,r},c=document.querySelector(".main-cards");document.querySelector(".popular");document.querySelector(".discount");async function h(){const o=await y();c.insertAdjacentElement("beforeend",o);const e=document.createElement("h2");e.textContent="All Products",e.classList.add("hiden-title"),c.insertAdjacentElement("afterbegin",e)}h();
//# sourceMappingURL=commonHelpers2.js.map
