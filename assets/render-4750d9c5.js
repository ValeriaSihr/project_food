import{a as F}from"./vendor-a2e8d7fa.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const H=F.create({baseURL:"https://food-boutique.b.goit.study/api"}),v=async t=>{try{const{data:o}=await H(t);return o}catch(o){console.log(o.message)}},D=async()=>await v("/products"),J=async()=>await v("/products/popular"),V=async()=>(await v("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),W=async(t="640c2dd963a319ea671e36ba")=>{const o=`/products/${t}`;return await v(o)},I="cart",b=()=>{const t=localStorage.getItem(I);return t?JSON.parse(t):[]},E=t=>{const o=b();o.push(t),localStorage.setItem(I,JSON.stringify(o))},A=t=>{const r=b().filter(a=>t!==a._id);localStorage.setItem(I,JSON.stringify(r))},g=t=>b().some(r=>r._id===t),K=t=>{const{category:o,img:r,is10PercentOff:a,name:e,desc:n,popularity:s,price:c,size:d,_id:l}=t,u=document.createElement("img");u.src=r,u.alt=e,u.classList.add("card-img-modal"),console.log(t);const p=document.createElement("p");p.innerHTML=a?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,p.classList.add("price-modal");const R=g(l),m=document.createElement("button");m.setAttribute("type","button"),m.textContent=R?"Remove from":"Add to",m.classList.add("cart-add");const y=document.createElement("svg");y.setAttribute("width","20px");const C=document.createElement("use");C.setAttribute("href","../img/icons.svg#shopping-cart");const U=()=>{const q=g(l);return q?(m.textContent="Add to",f(l,!q),A(l)):(m.textContent="Remove from",f(l,!q),E(t))};m.addEventListener("click",U),y.insertAdjacentElement("beforeend",C),m.insertAdjacentElement("beforeend",y),y.classList.add("cart-svg-modal"),C.classList.add("cart-use");const h=document.createElement("div");h.insertAdjacentElement("beforeend",p),h.insertAdjacentElement("beforeend",m),h.classList.add("div-price");const L=document.createElement("h3");L.textContent=e,L.classList.add("product-name");const P=document.createElement("p");P.textContent=n,P.classList.add("modal-text");const S=document.createElement("span"),$=document.createElement("span");S.textContent="Category: ",$.textContent=o.split("_").join(" "),S.classList.add("prod-info-modal"),$.classList.add("prod-info-api-modal");const j=document.createElement("span"),w=document.createElement("span");j.textContent="Size: ",w.textContent=d,j.classList.add("prod-info-modal"),w.classList.add("prod-info-api-modal");const x=document.createElement("span"),N=document.createElement("span");x.textContent="Popularity: ",N.textContent=s,x.classList.add("prod-info-modal"),N.classList.add("prod-info-api-modal");const i=document.createElement("div");return i.classList.add("wrapper"),i.insertAdjacentElement("beforeend",u),i.insertAdjacentElement("beforeend",L),i.insertAdjacentElement("beforeend",S),i.insertAdjacentElement("beforeend",$),i.insertAdjacentElement("beforeend",j),i.insertAdjacentElement("beforeend",w),i.insertAdjacentElement("beforeend",x),i.insertAdjacentElement("beforeend",N),i.insertAdjacentElement("beforeend",P),i.insertAdjacentElement("beforeend",h),i},T=document.querySelector("[data-modal]"),G=document.querySelector("[data-modal-window]"),Q=document.querySelector(".close-modal");let k;const z=()=>{T.classList.add("is-hidden"),k.remove()},X=t=>{t.currentTarget===t.target&&z()};Q.addEventListener("click",z);T.addEventListener("click",X);const O=async t=>{T.classList.remove("is-hidden");const o=await W(t);k=K(o),G.insertAdjacentElement("beforeend",k)},Y=document.querySelector(".all-cards");function f(t,o=!1){const r=Y.querySelectorAll(`[data-product-id="${t}"]`);r.length&&r.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${o?"check":"shopping-cart"}`)})}const Z=async()=>{const{results:t}=await D(),o=t.map(({category:e,img:n,is10PercentOff:s,name:c,popularity:d,price:l,size:u,_id:p})=>`<li class="list-card-style" data-product-id="${p}">
        
          <svg class="disc-icon-svg ${s?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${n}" alt="${c}" /></div>
  <div class="description">
    <h3 class="product-name">${c}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${e.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${u}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${d}</span>
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
</li>`).join(""),r=document.createElement("ul");return r.innerHTML=o,r.querySelectorAll(".list-card-style").forEach(e=>{e.addEventListener("click",n=>{const s=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(d=>d._id===s);if(!g(s)){E(c),f(s,!0);return}A(s),f(s,!1);return}O(s)})}),r},tt=async()=>{const t=await J(),o=t.map(({category:e,img:n,is10PercentOff:s,name:c,popularity:d,price:l,size:u,_id:p})=>`<li class="popular-card-style" data-product-id="${p}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${n}" alt="${c}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name-pop">${c}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${e.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${u}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${d}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" >
    <use href="./img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
  </div>
</li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=o,r.querySelectorAll(".popular-card-style").forEach(e=>{e.addEventListener("click",n=>{const s=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(d=>d._id===s);if(!g(s)){E(c),f(s,!0);return}A(s),f(s,!1);return}O(s)})}),r},et=async()=>{const t=await V(),o=t.map(({category:e,img:n,is10PercentOff:s,name:c,popularity:d,price:l,size:u,_id:p})=>`<li class="discount-svg" data-product-id="${p}">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${n}" alt="${c}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${c}</h3>
    <p class="discount-price">&dollar;${l}</p>
    
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=o,r.querySelectorAll(".discount-svg").forEach(e=>{e.addEventListener("click",n=>{const s=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(d=>d._id===s);if(!g(s)){E(c),f(s,!0);return}A(s),f(s,!1);return}O(s)})}),r},nt=document.querySelector(".prod-cart-title");function ot(){console.log("full")}function st(){console.log("empty")}function rt(){const t=b();nt.textContent=`CART (${t.length})`,t.length>0?ot():st()}const M=document.querySelector(".main-cards"),_=document.querySelector(".popular"),B=document.querySelector(".discount");async function ct(){const t=await Z();M.insertAdjacentElement("beforeend",t);const o=document.createElement("h2");o.textContent="All Products",o.classList.add("hiden-title"),M.insertAdjacentElement("afterbegin",o);const r=await tt();_.insertAdjacentElement("beforeend",r);const a=document.createElement("h2");a.textContent="Popular Products",_.insertAdjacentElement("afterbegin",a);const e=await et();B.insertAdjacentElement("beforeend",e);const n=document.createElement("h2");n.textContent="Discount Products",B.insertAdjacentElement("afterbegin",n)}console.log(document.title);document.title==="Food Boutique 💙💛"?ct():rt();
//# sourceMappingURL=render-4750d9c5.js.map
