/* empty css                      */import{a as T}from"./assets/vendor-a2e8d7fa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const M=T.create({baseURL:"https://food-boutique.b.goit.study/api"}),m=async s=>{try{const{data:n}=await M(s);return n}catch(n){console.log(n.message)}},I=async()=>await m("/products"),_=async()=>await m("/products/popular"),q=async()=>(await m("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2);q().then(console.log);const z=async(s="640c2dd963a319ea671e36ba")=>{const n=`/products/${s}`;return await m(n)},w="cart",B=s=>{const n=localStorage.getItem(w);let o;n?o=JSON.parse(n):o=[],o.push(s),localStorage.setItem(w,JSON.stringify(o))},H=s=>{const{category:n,img:o,is10PercentOff:i,name:t,desc:e,popularity:r,price:c,size:p}=s,l=document.createElement("img");l.src=o,l.alt=t,l.classList.add("card-img"),console.log(s);const u=document.createElement("p");u.innerHTML=i?`<span class="old-price">${(c/.9).toFixed(2)}</span> ${c}`:c;const d=document.createElement("button");d.setAttribute("type","button"),d.textContent="Add to";const j=document.createElement("svg"),C=document.createElement("use");C.setAttribute("href","../img/icons.svg#icon-heroicons-solid_shopping-cart"),j.insertAdjacentElement("beforeend",C),d.insertAdjacentElement("beforeend",j);const g=document.createElement("div");g.insertAdjacentElement("beforeend",u),g.insertAdjacentElement("beforeend",d);const S=document.createElement("h3");S.textContent=t;const $=document.createElement("p");$.textContent=e;const f=document.createElement("span"),h=document.createElement("span");f.textContent="Category: ",h.textContent=n.split("_").join(" "),f.classList.add("prod-info"),h.classList.add("prod-info-api");const y=document.createElement("span"),v=document.createElement("span");y.textContent="Size: ",v.textContent=p,y.classList.add("prod-info"),v.classList.add("prod-info-api");const E=document.createElement("span"),b=document.createElement("span");E.textContent="Popularity: ",b.textContent=r,E.classList.add("prod-info"),b.classList.add("prod-info-api");const a=document.createElement("div");return a.insertAdjacentElement("beforeend",l),a.insertAdjacentElement("beforeend",S),a.insertAdjacentElement("beforeend",f),a.insertAdjacentElement("beforeend",h),a.insertAdjacentElement("beforeend",y),a.insertAdjacentElement("beforeend",v),a.insertAdjacentElement("beforeend",E),a.insertAdjacentElement("beforeend",b),a.insertAdjacentElement("beforeend",$),a.insertAdjacentElement("beforeend",g),a},L=document.querySelector("[data-modal]"),U=document.querySelector("[data-modal-window]"),D=document.querySelector(".close-modal");let A;const O=()=>{L.classList.add("is-hidden"),A.remove()},F=s=>{s.currentTarget===s.target&&O()};D.addEventListener("click",O);L.addEventListener("click",F);const P=async s=>{L.classList.remove("is-hidden");const n=await z(s);A=H(n),U.insertAdjacentElement("beforeend",A)},V=async()=>{const{results:s}=await I(),n=s.map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:l,size:u,_id:d})=>`<li class="list-card-style" data-product-id="${d}">
        
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
    <p class="price"> &dollar;${l}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href="./img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
      </svg>
    </button>
  </div>
</li>`).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".list-card-style").forEach(t=>{t.addEventListener("click",e=>{const r=t.dataset.productId;if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use"){const c=s.find(p=>p._id===r);B(c);return}P(r)})}),o},J=async()=>{const n=(await _()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:l,size:u,_id:d})=>`<li class="popular-card-style" data-product-id="${d}">
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
  `).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".popular-card-style").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;P(r)})}),o},R=async()=>{const n=(await q()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:l,size:u,_id:d})=>`<li class="discount-svg" data-product-id="${d}">
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
    <p class="discount-price">&dollar;${l}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".discount-svg").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;P(r)})}),o},N=document.querySelector(".main-cards"),x=document.querySelector(".popular"),k=document.querySelector(".discount");async function W(){const s=await V();N.insertAdjacentElement("beforeend",s);const n=document.createElement("h2");n.textContent="All Products",n.classList.add("hiden-title"),N.insertAdjacentElement("afterbegin",n);const o=await J();x.insertAdjacentElement("beforeend",o);const i=document.createElement("h2");i.textContent="Popular Products",x.insertAdjacentElement("afterbegin",i);const t=await R();k.insertAdjacentElement("beforeend",t);const e=document.createElement("h2");e.textContent="Discount Products",k.insertAdjacentElement("afterbegin",e)}W();
//# sourceMappingURL=commonHelpers2.js.map
