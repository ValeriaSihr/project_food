/* empty css                      */import{a as x}from"./assets/vendor-a2e8d7fa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const O=x.create({baseURL:"https://food-boutique.b.goit.study/api"}),m=async s=>{try{const{data:n}=await O(s);return n}catch(n){console.log(n.message)}},T=async()=>await m("/products"),M=async()=>await m("/products/popular"),k=async()=>(await m("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2);k().then(console.log);const I=async(s="640c2dd963a319ea671e36ba")=>{const n=`/products/${s}`;return await m(n)},L="cart",_=s=>{const n=localStorage.getItem(L);let o;n?o=JSON.parse(n):o=[],o.push(s),localStorage.setItem(L,JSON.stringify(o))},z=s=>{const{category:n,img:o,is10PercentOff:a,name:t,desc:e,popularity:r,price:c,size:p}=s,d=document.createElement("img");d.src=o,d.alt=t,d.classList.add("card-img"),console.log(s);const u=document.createElement("p");u.innerHTML=a?`<span class="old-price">${(c/.9).toFixed(2)}</span> ${c}`:c;const i=document.createElement("button");i.setAttribute("type","button"),i.textContent="Add to";const E=document.createElement("svg"),A=document.createElement("use");A.setAttribute("href","../img/icons.svg#icon-heroicons-solid_shopping-cart"),E.insertAdjacentElement("beforeend",A),i.insertAdjacentElement("beforeend",E);const g=document.createElement("div");g.insertAdjacentElement("beforeend",u),g.insertAdjacentElement("beforeend",i);const P=document.createElement("h3");P.textContent=t;const $=document.createElement("p");$.textContent=e;const f=document.createElement("span"),h=document.createElement("span");f.textContent="Category: ",h.textContent=n.split("_").join(" "),f.classList.add("prod-info"),h.classList.add("prod-info-api");const j=document.createElement("span");j.textContent=`Size: ${p}`;const C=document.createElement("span");C.textContent=`Popularity: ${r}`;const l=document.createElement("div");return l.insertAdjacentElement("beforeend",d),l.insertAdjacentElement("beforeend",P),l.insertAdjacentElement("beforeend",f),l.insertAdjacentElement("beforeend",h),l.insertAdjacentElement("beforeend",j),l.insertAdjacentElement("beforeend",C),l.insertAdjacentElement("beforeend",$),l.insertAdjacentElement("beforeend",g),l},v=document.querySelector("[data-modal]"),B=document.querySelector("[data-modal-window]"),H=document.querySelector(".close-modal");let y;const q=()=>{v.classList.add("is-hidden"),y.remove()},U=s=>{s.currentTarget===s.target&&q()};H.addEventListener("click",q);v.addEventListener("click",U);const b=async s=>{v.classList.remove("is-hidden");const n=await I(s);y=z(n),B.insertAdjacentElement("beforeend",y)},D=async()=>{const{results:s}=await T(),n=s.map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:d,size:u,_id:i})=>`<li class="list-card-style" data-product-id="${i}">
        
          <svg class="disc-icon-svg ${r?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#icon-discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${e}" alt="${c}" /></div>
  <div class="description">
    <h3 class="product-name">${c}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${t.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${u}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${p}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${d}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href="./img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
      </svg>
    </button>
  </div>
</li>`).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".list-card-style").forEach(t=>{t.addEventListener("click",e=>{const r=t.dataset.productId;if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use"){const c=s.find(p=>p._id===r);_(c);return}b(r)})}),o},F=async()=>{const n=(await M()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:d,size:u,_id:i})=>`<li class="popular-card-style" data-product-id="${i}">
  <div class="popular-img"><img class="pop-picture" src="${e}" alt="${c}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name">${c}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${t.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${u}</span>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${p}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".popular-card-style").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;b(r)})}),o},J=async()=>{const n=(await k()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:d,size:u,_id:i})=>`<li class="discount-svg" data-product-id="${i}">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#icon-discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${e}" alt="${c}" /></div>
  <div>
    <h3 class="product-name">${c}</h3>
  </div>
  <div class="to-cart">
    <p class="discount-price">&dollar;${d}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".discount-svg").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;b(r)})}),o},w=document.querySelector(".main-cards"),S=document.querySelector(".popular"),N=document.querySelector(".discount");async function R(){const s=await D();w.insertAdjacentElement("beforeend",s);const n=document.createElement("h2");n.textContent="All Products",n.classList.add("hiden-title"),w.insertAdjacentElement("afterbegin",n);const o=await F();S.insertAdjacentElement("beforeend",o);const a=document.createElement("h2");a.textContent="Popular Products",S.insertAdjacentElement("afterbegin",a);const t=await J();N.insertAdjacentElement("beforeend",t);const e=document.createElement("h2");e.textContent="Discount Products",N.insertAdjacentElement("afterbegin",e)}R();
//# sourceMappingURL=commonHelpers2.js.map
