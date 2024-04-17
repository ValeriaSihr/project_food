import{a as _}from"./vendor-a2e8d7fa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const z=_.create({baseURL:"https://food-boutique.b.goit.study/api"}),h=async n=>{try{const{data:s}=await z(n);return s}catch(s){console.log(s.message)}},B=async()=>await h("/products"),H=async()=>await h("/products/popular"),U=async()=>(await h("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),D=async(n="640c2dd963a319ea671e36ba")=>{const s=`/products/${n}`;return await h(s)},M="cart",$=()=>{const n=localStorage.getItem(M);return n?JSON.parse(n):[]},F=n=>{const s=$();s.push(n),localStorage.setItem(M,JSON.stringify(s))},w=n=>$().some(o=>o._id===n),V=n=>{const{category:s,img:o,is10PercentOff:i,name:t,desc:e,popularity:r,price:c,size:p,_id:u}=n,l=document.createElement("img");l.src=o,l.alt=t,l.classList.add("card-img-modal"),console.log(n);const d=document.createElement("p");d.innerHTML=i?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,d.classList.add("price-modal");const m=document.createElement("button");m.setAttribute("type","button"),m.textContent="Add to",m.classList.add("cart-add");const g=document.createElement("svg");g.setAttribute("width","20px");const v=document.createElement("use");v.setAttribute("href","../img/icons.svg#icon-heroicons-solid_shopping-cart"),g.insertAdjacentElement("beforeend",v),m.insertAdjacentElement("beforeend",g),g.classList.add("cart-svg-modal"),v.classList.add("cart-use");const f=document.createElement("div");f.insertAdjacentElement("beforeend",d),f.insertAdjacentElement("beforeend",m),f.classList.add("div-price");const y=document.createElement("h3");y.textContent=t,y.classList.add("product-name");const b=document.createElement("p");b.textContent=e,b.classList.add("modal-text");const E=document.createElement("span"),A=document.createElement("span");E.textContent="Category: ",A.textContent=s.split("_").join(" "),E.classList.add("prod-info-modal"),A.classList.add("prod-info-api-modal");const L=document.createElement("span"),C=document.createElement("span");L.textContent="Size: ",C.textContent=p,L.classList.add("prod-info-modal"),C.classList.add("prod-info-api-modal");const P=document.createElement("span"),j=document.createElement("span");P.textContent="Popularity: ",j.textContent=r,P.classList.add("prod-info-modal"),j.classList.add("prod-info-api-modal");const a=document.createElement("div");return a.classList.add("wrapper"),a.insertAdjacentElement("beforeend",l),a.insertAdjacentElement("beforeend",y),a.insertAdjacentElement("beforeend",E),a.insertAdjacentElement("beforeend",A),a.insertAdjacentElement("beforeend",L),a.insertAdjacentElement("beforeend",C),a.insertAdjacentElement("beforeend",P),a.insertAdjacentElement("beforeend",j),a.insertAdjacentElement("beforeend",b),a.insertAdjacentElement("beforeend",f),a},N=document.querySelector("[data-modal]"),J=document.querySelector("[data-modal-window]"),R=document.querySelector(".close-modal");let S;const O=()=>{N.classList.add("is-hidden"),S.remove()},W=n=>{n.currentTarget===n.target&&O()};R.addEventListener("click",O);N.addEventListener("click",W);const x=async n=>{N.classList.remove("is-hidden");const s=await D(n);S=V(s),J.insertAdjacentElement("beforeend",S)},K=async()=>{const{results:n}=await B(),s=n.map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:u,size:l,_id:d})=>(w(d),`<li class="list-card-style" data-product-id="${d}">
        
          <svg class="disc-icon-svg ${r?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#icon-discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${e}" alt="${c}" /></div>
  <div class="description">
    <h3 class="product-name">${c}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${t.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${l}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${p}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${u}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href='./img/icons.svg#icon-heroicons-solid_shopping-cart'
        ></use>
      </svg>
    </button>
  </div>
</li>`)).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".list-card-style").forEach(t=>{t.addEventListener("click",e=>{const r=t.dataset.productId;if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use"){const c=n.find(u=>u._id===r),p=t.querySelector("button");p.innerHTML=w(r)?`<svg class="cart-svg" width="18" height="18">
        <use href='./img/icons.svg#icon-check'
            ></use>
      </svg>`:` <svg class="cart-svg" width="18" height="18">
        <use href='./img/icons.svg#icon-heroicons-solid_shopping-cart'
        ></use>
      </svg>`,w(r)||F(c);return}x(r)})}),o},G=async()=>{const s=(await H()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:u,size:l,_id:d})=>`<li class="popular-card-style" data-product-id="${d}">
  <div class="popular-img"><img class="pop-picture" src="${e}" alt="${c}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name-pop">${c}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${t.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${l}</span>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${p}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" >
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".popular-card-style").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;x(r)})}),o},Q=async()=>{const s=(await U()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:u,size:l,_id:d})=>`<li class="discount-svg" data-product-id="${d}">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#icon-discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${e}" alt="${c}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${c}</h3>
    <p class="discount-price">&dollar;${u}</p>
    
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".discount-svg").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;x(r)})}),o},k=document.querySelector(".main-cards"),q=document.querySelector(".popular"),T=document.querySelector(".discount");async function X(){const n=await K();k.insertAdjacentElement("beforeend",n);const s=document.createElement("h2");s.textContent="All Products",s.classList.add("hiden-title"),k.insertAdjacentElement("afterbegin",s);const o=await G();q.insertAdjacentElement("beforeend",o);const i=document.createElement("h2");i.textContent="Popular Products",q.insertAdjacentElement("afterbegin",i);const t=await Q();T.insertAdjacentElement("beforeend",t);const e=document.createElement("h2");e.textContent="Discount Products",T.insertAdjacentElement("afterbegin",e)}X();const I=$();console.log(I);I.length>0?Y():Z();function Y(){console.log("full")}function Z(){console.log("empty")}
//# sourceMappingURL=cartcontent-93f5c187.js.map
