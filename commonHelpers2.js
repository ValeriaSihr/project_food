/* empty css                      */import{a as b}from"./assets/vendor-a2e8d7fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const P=b.create({baseURL:"https://food-boutique.b.goit.study/api"}),p=async n=>{try{const{data:e}=await P(n);return e}catch(e){console.log(e.message)}},E=async()=>await p("/products"),$=async()=>await p("/products/popular"),L=async()=>(await p("/products/discount")).sort(()=>Math.random()*2).slice(0,2),w=async(n="640c2dd963a319ea671e36ba")=>{const e=`/products/${n}`;return await p(e)},y=document.querySelector("[data-modal]"),A=document.querySelector(".close-modal"),j=()=>{y.classList.add("is-hidden")};A.addEventListener("click",j);const M=async n=>{y.classList.remove("is-hidden");const e=await w(n),{category:o,img:r,is10PercentOff:t,name:s,popularity:c,price:a,size:d}=e,i=document.createElement("img");i.src=r,i.alt=s,i.classList.add("card-img");const l=document.createElement("p");l.innerHTML=t?`<span class="old-price">${Math.round(a/.9,2)}</span> ${a}`:a;const u=document.createElement("button");u.setAttribute("type","button"),u.textContent="Add to";const m=document.createElement("svg"),g=document.createElement("use");g.setAttribute("href","../img/icons.svg#icon-heroicons-solid_shopping-cart"),m.insertAdjacentElement("beforeend",g),u.insertAdjacentElement("beforeend",m),console.log(e.name)},C=async()=>{const{results:n}=await E(),e=n.map(({category:t,img:s,is10PercentOff:c,name:a,popularity:d,price:i,size:l,_id:u})=>`<li class="list-card-style" data-product-id="${u}">
        
          <svg class="disc-icon-svg ${c?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#icon-discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${s}" alt="${a}" /></div>
  <div class="description">
    <h3 class="product-name">${a}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${t.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${l}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${d}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${i}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
      </svg>
    </button>
  </div>
</li>`).join(""),o=document.createElement("ul");return o.innerHTML=e,o.querySelectorAll(".list-card-style").forEach(t=>{t.addEventListener("click",s=>{if(s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"||s.target.nodeName==="use")return;const c=t.dataset.productId;M(c)})}),o},S=async()=>{const e=(await $()).map(({category:r,img:t,is10PercentOff:s,name:c,popularity:a,price:d,size:i,_id:l})=>`<li class="popular-card-style">
  <div class="popular-img"><img class="pop-picture" src="${t}" alt="${c}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name">${c}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${r.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${a}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=e,o},q=async()=>{const e=(await L()).map(({category:r,img:t,is10PercentOff:s,name:c,popularity:a,price:d,size:i,_id:l})=>`<li class="discount-svg">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#icon-discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${t}" alt="${c}" /></div>
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
  `).join(""),o=document.createElement("ul");return o.innerHTML=e,o},f=document.querySelector(".main-cards"),h=document.querySelector(".popular"),v=document.querySelector(".discount");async function k(){const n=await C();f.insertAdjacentElement("beforeend",n);const e=document.createElement("h2");e.textContent="All Products",e.classList.add("hiden-title"),f.insertAdjacentElement("afterbegin",e);const o=await S();h.insertAdjacentElement("beforeend",o);const r=document.createElement("h2");r.textContent="Popular Products",h.insertAdjacentElement("afterbegin",r);const t=await q();v.insertAdjacentElement("beforeend",t);const s=document.createElement("h2");s.textContent="Discount Products",v.insertAdjacentElement("afterbegin",s)}k();
//# sourceMappingURL=commonHelpers2.js.map
