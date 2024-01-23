/* empty css                      */import{a as y}from"./assets/vendor-a2e8d7fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const v=y.create({baseURL:"https://food-boutique.b.goit.study/api"}),l=async o=>{try{const{data:e}=await v(o);return e}catch(e){console.log(e.message)}},P=async()=>await l("/products"),f=async()=>await l("/products/popular");f().then(console.log);const h=async()=>{const s=(await l("/products/discount")).sort(()=>Math.random()*2).slice(0,2);return console.log(s),s};h().then(console.log);const b=async()=>{const{results:o}=await P(),e=o.map(({category:i,img:t,is10PercentOff:n,name:r,popularity:c,price:a,size:d,_id:u})=>`<li>
  <div class="card-img"><img src="${t}" alt="${r}" /></div>
  <div class="description">
    <h3>${r}</h3>
    
      <span>Category: </span><span>${i.split("_").join(" ")}</span>
      <span>Size: </span><span>${d}</span>
      <span>Popularity: </span><span>${c}</span>
    
  </div>
  <div class="to-cart">
    <p>${a}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),s=document.createElement("ul");return s.innerHTML=e,s},$=async()=>{const o=await f();console.log(o);const e=o.map(({category:i,img:t,is10PercentOff:n,name:r,popularity:c,price:a,size:d,_id:u})=>`<li>
  <div class=""><img src="${t}" alt="${r}" /></div>
  <div class="">
    <h3>${r}</h3>
    
      <span>Category: </span><span>${i.split("_").join(" ")}</span>
      <span>Size: </span><span>${d}</span>
      <span>Popularity: </span><span>${c}</span>
    
  </div>
  <div class="">
    <button class="" type="button">
    <svg class="" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),s=document.createElement("ul");return s.innerHTML=e,s},w=async()=>{const e=(await h()).map(({category:i,img:t,is10PercentOff:n,name:r,popularity:c,price:a,size:d,_id:u})=>`<li>
  <div class="card-img"><img src="${t}" alt="${r}" /></div>
  <div class="description">
    <h3>${r}</h3>
  </div>
  <div class="to-cart">
    <p>${a}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),s=document.createElement("ul");return s.innerHTML=e,s},p=document.querySelector(".main-cards"),m=document.querySelector(".popular"),g=document.querySelector(".discount");async function E(){const o=await b();p.insertAdjacentElement("beforeend",o);const e=document.createElement("h2");e.textContent="All Products",e.classList.add("hiden-title"),p.insertAdjacentElement("afterbegin",e);const s=await $();m.insertAdjacentElement("beforeend",s);const i=document.createElement("h2");i.textContent="Popular Products",m.insertAdjacentElement("afterbegin",i);const t=await w();g.insertAdjacentElement("beforeend",t);const n=document.createElement("h2");n.textContent="Discount Products",g.insertAdjacentElement("afterbegin",n)}E();
//# sourceMappingURL=commonHelpers2.js.map
