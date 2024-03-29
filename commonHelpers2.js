/* empty css                      */import{a as I}from"./assets/vendor-a2e8d7fa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const _=I.create({baseURL:"https://food-boutique.b.goit.study/api"}),h=async s=>{try{const{data:n}=await _(s);return n}catch(n){console.log(n.message)}},z=async()=>await h("/products"),B=async()=>await h("/products/popular"),H=async()=>(await h("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),U=async(s="640c2dd963a319ea671e36ba")=>{const n=`/products/${s}`;return await h(n)},T="cart",M=()=>{const s=localStorage.getItem(T);return s?JSON.parse(s):[]},D=s=>{const n=M();n.push(s),localStorage.setItem(T,JSON.stringify(n))},w=s=>M().some(o=>o._id===s),F=s=>{const{category:n,img:o,is10PercentOff:d,name:t,desc:e,popularity:r,price:c,size:p,_id:u}=s,l=document.createElement("img");l.src=o,l.alt=t,l.classList.add("card-img-modal"),console.log(s);const i=document.createElement("p");i.innerHTML=d?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,i.classList.add("price-modal");const m=document.createElement("button");m.setAttribute("type","button"),m.textContent="Add to",m.classList.add("cart-add");const g=document.createElement("svg");g.setAttribute("width","20px");const v=document.createElement("use");v.setAttribute("href","../img/icons.svg#icon-heroicons-solid_shopping-cart"),g.insertAdjacentElement("beforeend",v),m.insertAdjacentElement("beforeend",g),g.classList.add("cart-svg-modal"),v.classList.add("cart-use");const f=document.createElement("div");f.insertAdjacentElement("beforeend",i),f.insertAdjacentElement("beforeend",m),f.classList.add("div-price");const y=document.createElement("h3");y.textContent=t,y.classList.add("product-name");const b=document.createElement("p");b.textContent=e,b.classList.add("modal-text");const E=document.createElement("span"),A=document.createElement("span");E.textContent="Category: ",A.textContent=n.split("_").join(" "),E.classList.add("prod-info-modal"),A.classList.add("prod-info-api-modal");const L=document.createElement("span"),C=document.createElement("span");L.textContent="Size: ",C.textContent=p,L.classList.add("prod-info-modal"),C.classList.add("prod-info-api-modal");const P=document.createElement("span"),j=document.createElement("span");P.textContent="Popularity: ",j.textContent=r,P.classList.add("prod-info-modal"),j.classList.add("prod-info-api-modal");const a=document.createElement("div");return a.classList.add("wrapper"),a.insertAdjacentElement("beforeend",l),a.insertAdjacentElement("beforeend",y),a.insertAdjacentElement("beforeend",E),a.insertAdjacentElement("beforeend",A),a.insertAdjacentElement("beforeend",L),a.insertAdjacentElement("beforeend",C),a.insertAdjacentElement("beforeend",P),a.insertAdjacentElement("beforeend",j),a.insertAdjacentElement("beforeend",b),a.insertAdjacentElement("beforeend",f),a},$=document.querySelector("[data-modal]"),V=document.querySelector("[data-modal-window]"),J=document.querySelector(".close-modal");let S;const O=()=>{$.classList.add("is-hidden"),S.remove()},R=s=>{s.currentTarget===s.target&&O()};J.addEventListener("click",O);$.addEventListener("click",R);const N=async s=>{$.classList.remove("is-hidden");const n=await U(s);S=F(n),V.insertAdjacentElement("beforeend",S)},W=async()=>{const{results:s}=await z(),n=s.map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:u,size:l,_id:i})=>(w(i),`<li class="list-card-style" data-product-id="${i}">
        
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
</li>`)).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".list-card-style").forEach(t=>{t.addEventListener("click",e=>{const r=t.dataset.productId;if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use"){const c=s.find(u=>u._id===r),p=t.querySelector("button");p.innerHTML=w(r)?`<svg class="cart-svg" width="18" height="18">
        <use href='./img/icons.svg#icon-check'
            ></use>
      </svg>`:` <svg class="cart-svg" width="18" height="18">
        <use href='./img/icons.svg#icon-heroicons-solid_shopping-cart'
        ></use>
      </svg>`,w(r)||D(c);return}N(r)})}),o},K=async()=>{const n=(await B()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:u,size:l,_id:i})=>`<li class="popular-card-style" data-product-id="${i}">
  <div class="popular-img"><img class="pop-picture" src="${e}" alt="${c}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name">${c}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${t.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${l}</span>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${p}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".popular-card-style").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;N(r)})}),o},G=async()=>{const n=(await H()).map(({category:t,img:e,is10PercentOff:r,name:c,popularity:p,price:u,size:l,_id:i})=>`<li class="discount-svg" data-product-id="${i}">
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
    <p class="discount-price">&dollar;${u}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=n,o.querySelectorAll(".discount-svg").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;N(r)})}),o},x=document.querySelector(".main-cards"),k=document.querySelector(".popular"),q=document.querySelector(".discount");async function Q(){const s=await W();x.insertAdjacentElement("beforeend",s);const n=document.createElement("h2");n.textContent="All Products",n.classList.add("hiden-title"),x.insertAdjacentElement("afterbegin",n);const o=await K();k.insertAdjacentElement("beforeend",o);const d=document.createElement("h2");d.textContent="Popular Products",k.insertAdjacentElement("afterbegin",d);const t=await G();q.insertAdjacentElement("beforeend",t);const e=document.createElement("h2");e.textContent="Discount Products",q.insertAdjacentElement("afterbegin",e)}Q();
//# sourceMappingURL=commonHelpers2.js.map
