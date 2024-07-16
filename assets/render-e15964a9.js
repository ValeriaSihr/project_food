import{a as F}from"./vendor-a2e8d7fa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const H=F.create({baseURL:"https://food-boutique.b.goit.study/api"}),y=async t=>{try{const{data:s}=await H(t);return s}catch(s){console.log(s.message)}},D=async()=>await y("/products"),J=async()=>await y("/products/popular"),V=async()=>(await y("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),W=async(t="640c2dd963a319ea671e36ba")=>{const s=`/products/${t}`;return await y(s)},N="cart",b=()=>{const t=localStorage.getItem(N);return t?JSON.parse(t):[]},I=t=>{const s=b();s.push(t),localStorage.setItem(N,JSON.stringify(s))},k=t=>{const r=b().filter(a=>t!==a._id);localStorage.setItem(N,JSON.stringify(r))},v=t=>b().some(r=>r._id===t),K=document.querySelector(".all-cards");function m(t,s=!1){const r=K.querySelectorAll(`[data-product-id="${t}"]`);r.length&&r.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${s?"check":"shopping-cart"}`)})}const G=async()=>{const t=await J(),s=t.map(({category:e,img:n,name:o,popularity:c,size:i,_id:l})=>`<li class="popular-card-style" data-product-id="${l}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${n}" alt="${o}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name-pop">${o}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${e.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${c}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" >
    <use href="./img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
  </div>
</li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=s,r.querySelectorAll(".popular-card-style").forEach(e=>{e.addEventListener("click",n=>{const o=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!v(o)){I(c),m(o,!0);return}k(o),m(o,!1);return}M(o)})}),r},Q=async()=>{const t=await V(),s=t.map(({img:e,name:n,price:o,_id:c})=>`<li class="discount-svg" data-product-id="${c}">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${e}" alt="${n}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${n}</h3>
    <p class="discount-price">&dollar;${o}</p>
    
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=s,r.querySelectorAll(".discount-svg").forEach(e=>{e.addEventListener("click",n=>{const o=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!v(o)){I(c),m(o,!0);return}k(o),m(o,!1);return}M(o)})}),r},X=t=>{const{category:s,img:r,is10PercentOff:a,name:e,desc:n,popularity:o,price:c,size:i,_id:l}=t,p=document.createElement("img");p.src=r,p.alt=e,p.classList.add("card-img-modal");const f=document.createElement("p");f.innerHTML=a?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,f.classList.add("price-modal");const R=v(l),u=document.createElement("button");u.setAttribute("type","button"),u.textContent=R?"Remove from":"Add to",u.classList.add("cart-add");const g=document.createElement("svg");g.setAttribute("width","20px");const E=document.createElement("use");E.setAttribute("href","../img/icons.svg#shopping-cart");const U=()=>{const x=v(l);return x?(u.textContent="Add to",m(l,!x),k(l)):(u.textContent="Remove from",m(l,!x),I(t))};u.addEventListener("click",U),g.insertAdjacentElement("beforeend",E),u.insertAdjacentElement("beforeend",g),g.classList.add("cart-svg-modal"),E.classList.add("cart-use");const h=document.createElement("div");h.insertAdjacentElement("beforeend",f),h.insertAdjacentElement("beforeend",u),h.classList.add("div-price");const A=document.createElement("h3");A.textContent=e,A.classList.add("product-name");const C=document.createElement("p");C.textContent=n,C.classList.add("modal-text");const L=document.createElement("span"),P=document.createElement("span");L.textContent="Category: ",P.textContent=s.split("_").join(" "),L.classList.add("prod-info-modal"),P.classList.add("prod-info-api-modal");const $=document.createElement("span"),S=document.createElement("span");$.textContent="Size: ",S.textContent=i,$.classList.add("prod-info-modal"),S.classList.add("prod-info-api-modal");const j=document.createElement("span"),w=document.createElement("span");j.textContent="Popularity: ",w.textContent=o,j.classList.add("prod-info-modal"),w.classList.add("prod-info-api-modal");const d=document.createElement("div");return d.classList.add("wrapper"),d.insertAdjacentElement("beforeend",p),d.insertAdjacentElement("beforeend",A),d.insertAdjacentElement("beforeend",L),d.insertAdjacentElement("beforeend",P),d.insertAdjacentElement("beforeend",$),d.insertAdjacentElement("beforeend",S),d.insertAdjacentElement("beforeend",j),d.insertAdjacentElement("beforeend",w),d.insertAdjacentElement("beforeend",C),d.insertAdjacentElement("beforeend",h),d},T=document.querySelector("[data-modal]"),Y=document.querySelector("[data-modal-window]"),Z=document.querySelector(".close-modal");let q;const z=()=>{T.classList.add("is-hidden"),q.remove()},tt=t=>{t.currentTarget===t.target&&z()};Z.addEventListener("click",z);T.addEventListener("click",tt);const M=async t=>{T.classList.remove("is-hidden");const s=await W(t);q=X(s),Y.insertAdjacentElement("beforeend",q)},et=async()=>{const{results:t}=await D(),s=t.map(({category:e,img:n,is10PercentOff:o,name:c,popularity:i,price:l,size:p,_id:f})=>`<li class="list-card-style" data-product-id="${f}">
        
          <svg class="disc-icon-svg ${o?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${n}" alt="${c}" /></div>
  <div class="description">
    <h3 class="product-name">${c}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${e.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${p}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${i}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${l}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href='./img/icons.svg#shopping-cart'
        ></use>
      </svg>
    </button>
  </div>
</li>`).join(""),r=document.createElement("ul");return r.innerHTML=s,r.querySelectorAll(".list-card-style").forEach(e=>{e.addEventListener("click",n=>{const o=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!isInCart(o)){addProduct(c),updBtn(o,!0);return}removeProd(o),updBtn(o,!1);return}M(o)})}),r},nt=document.querySelector(".pages-list");console.log(nt);const ot=document.querySelector(".prod-cart-title");function st(){console.log("full")}function rt(){console.log("empty")}function ct(){const t=b();ot.textContent=`CART (${t.length})`,t.length>0?st():rt()}const O=document.querySelector(".main-cards"),B=document.querySelector(".popular"),_=document.querySelector(".discount");async function at(){const t=await et();O.insertAdjacentElement("beforeend",t);const s=document.createElement("h2");s.textContent="All Products",s.classList.add("hiden-title"),O.insertAdjacentElement("afterbegin",s);const r=await G();B.insertAdjacentElement("beforeend",r);const a=document.createElement("h2");a.textContent="Popular Products",B.insertAdjacentElement("afterbegin",a);const e=await Q();_.insertAdjacentElement("beforeend",e);const n=document.createElement("h2");n.textContent="Discount Products",_.insertAdjacentElement("afterbegin",n)}console.log(document.title);document.title==="Food Boutique 💙💛"?at():ct();
//# sourceMappingURL=render-e15964a9.js.map
