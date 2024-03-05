/* empty css                      */import{a as E}from"./assets/vendor-a2e8d7fa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const P=E.create({baseURL:"https://food-boutique.b.goit.study/api"}),p=async n=>{try{const{data:s}=await P(n);return s}catch(s){console.log(s.message)}},A=async()=>await p("/products"),$=async()=>await p("/products/popular"),L=async()=>(await p("/products/discount")).sort(()=>Math.random()*2).slice(0,2),w=async(n="640c2dd963a319ea671e36ba")=>{const s=`/products/${n}`;return await p(s)},b=document.querySelector("[data-modal]"),C=document.querySelector(".close-modal"),N=()=>{b.classList.add("is-hidden")};C.addEventListener("click",N);const m=async n=>{b.classList.remove("is-hidden");const s=await w(n),{category:o,img:a,is10PercentOff:e,name:t,popularity:c,price:r,size:u}=s,i=document.createElement("img");i.src=a,i.alt=t,i.classList.add("card-img");const l=document.createElement("p");l.innerHTML=e?`<span class="old-price">${Math.round(r/.9,2)}</span> ${r}`:r;const d=document.createElement("button");d.setAttribute("type","button"),d.textContent="Add to";const g=document.createElement("svg"),f=document.createElement("use");f.setAttribute("href","../img/icons.svg#icon-heroicons-solid_shopping-cart"),g.insertAdjacentElement("beforeend",f),d.insertAdjacentElement("beforeend",g),console.log(s.name)},j=async()=>{const{results:n}=await A(),s=n.map(({category:e,img:t,is10PercentOff:c,name:r,popularity:u,price:i,size:l,_id:d})=>`<li class="list-card-style" data-product-id="${d}">
        
          <svg class="disc-icon-svg ${c?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#icon-discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${t}" alt="${r}" /></div>
  <div class="description">
    <h3 class="product-name">${r}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${e.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${l}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${u}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${i}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href="./img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
      </svg>
    </button>
  </div>
</li>`).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".list-card-style").forEach(e=>{e.addEventListener("click",t=>{if(t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"||t.target.nodeName==="use")return;const c=e.dataset.productId;m(c)})}),o},S=async()=>{const s=(await $()).map(({category:e,img:t,is10PercentOff:c,name:r,popularity:u,price:i,size:l,_id:d})=>`<li class="popular-card-style">
  <div class="popular-img"><img class="pop-picture" src="${t}" alt="${r}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name">${r}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${e.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${l}</span>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${u}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".popular-card-style").forEach(e=>{e.addEventListener("click",t=>{if(t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"||t.target.nodeName==="use")return;const c=e.dataset.productId;m(c)})}),o},M=async()=>{const s=(await L()).map(({category:e,img:t,is10PercentOff:c,name:r,popularity:u,price:i,size:l,_id:d})=>`<li class="discount-svg">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#icon-discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${t}" alt="${r}" /></div>
  <div>
    <h3 class="product-name">${r}</h3>
  </div>
  <div class="to-cart">
    <p class="discount-price">&dollar;${i}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".discount-svg").forEach(e=>{e.addEventListener("click",t=>{if(t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"||t.target.nodeName==="use")return;const c=e.dataset.productId;m(c)})}),o},h=document.querySelector(".main-cards"),v=document.querySelector(".popular"),y=document.querySelector(".discount");async function q(){const n=await j();h.insertAdjacentElement("beforeend",n);const s=document.createElement("h2");s.textContent="All Products",s.classList.add("hiden-title"),h.insertAdjacentElement("afterbegin",s);const o=await S();v.insertAdjacentElement("beforeend",o);const a=document.createElement("h2");a.textContent="Popular Products",v.insertAdjacentElement("afterbegin",a);const e=await M();y.insertAdjacentElement("beforeend",e);const t=document.createElement("h2");t.textContent="Discount Products",y.insertAdjacentElement("afterbegin",t)}q();
//# sourceMappingURL=commonHelpers2.js.map
