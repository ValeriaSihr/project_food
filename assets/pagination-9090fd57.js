import{a as F}from"./vendor-a2e8d7fa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const H=F.create({baseURL:"https://food-boutique.b.goit.study/api"}),v=async t=>{try{const{data:s}=await H(t);return s}catch(s){console.log(s.message)}},D=async()=>await v("/products"),J=async()=>await v("/products/popular"),V=async()=>(await v("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),W=async(t="640c2dd963a319ea671e36ba")=>{const s=`/products/${t}`;return await v(s)},I="cart",b=()=>{const t=localStorage.getItem(I);return t?JSON.parse(t):[]},E=t=>{const s=b();s.push(t),localStorage.setItem(I,JSON.stringify(s))},A=t=>{const r=b().filter(a=>t!==a._id);localStorage.setItem(I,JSON.stringify(r))},g=t=>b().some(r=>r._id===t),K=t=>{const{category:s,img:r,is10PercentOff:a,name:e,desc:n,popularity:o,price:c,size:i,_id:l}=t,m=document.createElement("img");m.src=r,m.alt=e,m.classList.add("card-img-modal");const f=document.createElement("p");f.innerHTML=a?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,f.classList.add("price-modal");const R=g(l),u=document.createElement("button");u.setAttribute("type","button"),u.textContent=R?"Remove from":"Add to",u.classList.add("cart-add");const h=document.createElement("svg");h.setAttribute("width","20px");const C=document.createElement("use");C.setAttribute("href","../img/icons.svg#shopping-cart");const U=()=>{const N=g(l);return N?(u.textContent="Add to",p(l,!N),A(l)):(u.textContent="Remove from",p(l,!N),E(t))};u.addEventListener("click",U),h.insertAdjacentElement("beforeend",C),u.insertAdjacentElement("beforeend",h),h.classList.add("cart-svg-modal"),C.classList.add("cart-use");const y=document.createElement("div");y.insertAdjacentElement("beforeend",f),y.insertAdjacentElement("beforeend",u),y.classList.add("div-price");const L=document.createElement("h3");L.textContent=e,L.classList.add("product-name");const S=document.createElement("p");S.textContent=n,S.classList.add("modal-text");const P=document.createElement("span"),$=document.createElement("span");P.textContent="Category: ",$.textContent=s.split("_").join(" "),P.classList.add("prod-info-modal"),$.classList.add("prod-info-api-modal");const j=document.createElement("span"),w=document.createElement("span");j.textContent="Size: ",w.textContent=i,j.classList.add("prod-info-modal"),w.classList.add("prod-info-api-modal");const x=document.createElement("span"),q=document.createElement("span");x.textContent="Popularity: ",q.textContent=o,x.classList.add("prod-info-modal"),q.classList.add("prod-info-api-modal");const d=document.createElement("div");return d.classList.add("wrapper"),d.insertAdjacentElement("beforeend",m),d.insertAdjacentElement("beforeend",L),d.insertAdjacentElement("beforeend",P),d.insertAdjacentElement("beforeend",$),d.insertAdjacentElement("beforeend",j),d.insertAdjacentElement("beforeend",w),d.insertAdjacentElement("beforeend",x),d.insertAdjacentElement("beforeend",q),d.insertAdjacentElement("beforeend",S),d.insertAdjacentElement("beforeend",y),d},T=document.querySelector("[data-modal]"),G=document.querySelector("[data-modal-window]"),Q=document.querySelector(".close-modal");let k;const z=()=>{T.classList.add("is-hidden"),k.remove()},X=t=>{t.currentTarget===t.target&&z()};Q.addEventListener("click",z);T.addEventListener("click",X);const M=async t=>{T.classList.remove("is-hidden");const s=await W(t);k=K(s),G.insertAdjacentElement("beforeend",k)},Y=document.querySelector(".all-cards");function p(t,s=!1){const r=Y.querySelectorAll(`[data-product-id="${t}"]`);r.length&&r.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${s?"check":"shopping-cart"}`)})}const Z=async()=>{const{results:t}=await D(),s=t.map(({category:e,img:n,is10PercentOff:o,name:c,popularity:i,price:l,size:m,_id:f})=>`<li class="list-card-style" data-product-id="${f}">
        
          <svg class="disc-icon-svg ${o?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${n}" alt="${c}" /></div>
  <div class="description">
    <h3 class="product-name">${c}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${e.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${m}</span>
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
</li>`).join(""),r=document.createElement("ul");return r.innerHTML=s,r.querySelectorAll(".list-card-style").forEach(e=>{e.addEventListener("click",n=>{const o=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!g(o)){E(c),p(o,!0);return}A(o),p(o,!1);return}M(o)})}),r},tt=async()=>{const t=await J(),s=t.map(({category:e,img:n,name:o,popularity:c,size:i,_id:l})=>`<li class="popular-card-style" data-product-id="${l}">
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
  `).join(""),r=document.createElement("ul");return r.innerHTML=s,r.querySelectorAll(".popular-card-style").forEach(e=>{e.addEventListener("click",n=>{const o=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!g(o)){E(c),p(o,!0);return}A(o),p(o,!1);return}M(o)})}),r},et=async()=>{const t=await V(),s=t.map(({img:e,name:n,price:o,_id:c})=>`<li class="discount-svg" data-product-id="${c}">
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
  `).join(""),r=document.createElement("ul");return r.innerHTML=s,r.querySelectorAll(".discount-svg").forEach(e=>{e.addEventListener("click",n=>{const o=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!g(o)){E(c),p(o,!0);return}A(o),p(o,!1);return}M(o)})}),r},nt=document.querySelector(".prod-cart-title");function ot(){console.log("full")}function st(){console.log("empty")}function rt(){const t=b();nt.textContent=`CART (${t.length})`,t.length>0?ot():st()}const O=document.querySelector(".main-cards"),_=document.querySelector(".popular"),B=document.querySelector(".discount");async function ct(){const t=await Z();O.insertAdjacentElement("beforeend",t);const s=document.createElement("h2");s.textContent="All Products",s.classList.add("hiden-title"),O.insertAdjacentElement("afterbegin",s);const r=await tt();_.insertAdjacentElement("beforeend",r);const a=document.createElement("h2");a.textContent="Popular Products",_.insertAdjacentElement("afterbegin",a);const e=await et();B.insertAdjacentElement("beforeend",e);const n=document.createElement("h2");n.textContent="Discount Products",B.insertAdjacentElement("afterbegin",n)}console.log(document.title);document.title==="Food Boutique 💙💛"?ct():rt();const at=document.querySelector(".pages-list");console.log(at);
//# sourceMappingURL=pagination-9090fd57.js.map
