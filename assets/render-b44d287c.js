import{a as F}from"./vendor-a2e8d7fa.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const H=F.create({baseURL:"https://food-boutique.b.goit.study/api"}),v=async t=>{try{const{data:o}=await H(t);return o}catch(o){console.log(o.message)}},D=async()=>await v("/products"),J=async()=>await v("/products/popular"),V=async()=>(await v("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),W=async(t="640c2dd963a319ea671e36ba")=>{const o=`/products/${t}`;return await v(o)},K=document.querySelector(".all-cards");function p(t,o=!1){const r=K.querySelectorAll(`[data-product-id="${t}"]`);r.length&&r.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${o?"check":"shopping-cart"}`)})}const I="cart",b=()=>{const t=localStorage.getItem(I);return t?JSON.parse(t):[]},E=t=>{const o=b();o.push(t),localStorage.setItem(I,JSON.stringify(o))},A=t=>{const r=b().filter(a=>t!==a._id);localStorage.setItem(I,JSON.stringify(r))},g=t=>b().some(r=>r._id===t),G=t=>{const{category:o,img:r,is10PercentOff:a,name:e,desc:n,popularity:s,price:c,size:i,_id:l}=t,m=document.createElement("img");m.src=r,m.alt=e,m.classList.add("card-img-modal");const f=document.createElement("p");f.innerHTML=a?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,f.classList.add("price-modal");const R=g(l),u=document.createElement("button");u.setAttribute("type","button"),u.textContent=R?"Remove from":"Add to",u.classList.add("cart-add");const h=document.createElement("svg");h.setAttribute("width","20px");const C=document.createElement("use");C.setAttribute("href","../img/icons.svg#shopping-cart");const U=()=>{const N=g(l);return N?(u.textContent="Add to",p(l,!N),A(l)):(u.textContent="Remove from",p(l,!N),E(t))};u.addEventListener("click",U),h.insertAdjacentElement("beforeend",C),u.insertAdjacentElement("beforeend",h),h.classList.add("cart-svg-modal"),C.classList.add("cart-use");const y=document.createElement("div");y.insertAdjacentElement("beforeend",f),y.insertAdjacentElement("beforeend",u),y.classList.add("div-price");const L=document.createElement("h3");L.textContent=e,L.classList.add("product-name");const S=document.createElement("p");S.textContent=n,S.classList.add("modal-text");const P=document.createElement("span"),$=document.createElement("span");P.textContent="Category: ",$.textContent=o.split("_").join(" "),P.classList.add("prod-info-modal"),$.classList.add("prod-info-api-modal");const j=document.createElement("span"),w=document.createElement("span");j.textContent="Size: ",w.textContent=i,j.classList.add("prod-info-modal"),w.classList.add("prod-info-api-modal");const x=document.createElement("span"),q=document.createElement("span");x.textContent="Popularity: ",q.textContent=s,x.classList.add("prod-info-modal"),q.classList.add("prod-info-api-modal");const d=document.createElement("div");return d.classList.add("wrapper"),d.insertAdjacentElement("beforeend",m),d.insertAdjacentElement("beforeend",L),d.insertAdjacentElement("beforeend",P),d.insertAdjacentElement("beforeend",$),d.insertAdjacentElement("beforeend",j),d.insertAdjacentElement("beforeend",w),d.insertAdjacentElement("beforeend",x),d.insertAdjacentElement("beforeend",q),d.insertAdjacentElement("beforeend",S),d.insertAdjacentElement("beforeend",y),d},T=document.querySelector("[data-modal]"),Q=document.querySelector("[data-modal-window]"),X=document.querySelector(".close-modal");let k;const z=()=>{T.classList.add("is-hidden"),k.remove()},Y=t=>{t.currentTarget===t.target&&z()};X.addEventListener("click",z);T.addEventListener("click",Y);const M=async t=>{T.classList.remove("is-hidden");const o=await W(t);k=G(o),Q.insertAdjacentElement("beforeend",k)},Z=async()=>{const{results:t}=await D(),o=t.map(({category:e,img:n,is10PercentOff:s,name:c,popularity:i,price:l,size:m,_id:f})=>`<li class="list-card-style" data-product-id="${f}">
        
          <svg class="disc-icon-svg ${s?"icon-visible":"icon-hidden"}" width="60" height="60">
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
        <use href='../img/icons.svg#shopping-cart'
        ></use>
      </svg>
    </button>
  </div>
</li>`).join(""),r=document.createElement("ul");return r.classList.add("main-cards-list"),r.innerHTML=o,r.querySelectorAll(".list-card-style").forEach(e=>{e.addEventListener("click",n=>{const s=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===s);if(!g(s)){E(c),p(s,!0);return}A(s),p(s,!1);return}M(s)})}),r},tt=document.querySelector(".pages-list");console.log(tt);const et=document.querySelector(".prod-cart-title");function nt(){console.log("full")}function st(){console.log("empty")}function ot(){const t=b();et.textContent=`CART (${t.length})`,t.length>0?nt():st()}const rt=async()=>{const t=await J(),o=t.map(({category:e,img:n,name:s,popularity:c,size:i,_id:l})=>`<li class="popular-card-style" data-product-id="${l}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${n}" alt="${s}" /></div>

  <div class="popular-description">
    <h3 class="product-name-pop">${s}</h3>

      <span class="prod-info">Category: </span><span class="prod-info-api">${e.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${c}</span>

  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" >
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
  </div>
</li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=o,r.classList.add("popular-list"),r.querySelectorAll(".popular-card-style").forEach(e=>{e.addEventListener("click",n=>{const s=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===s);if(!g(s)){E(c),p(s,!0);return}A(s),p(s,!1);return}M(s)})}),r},ct=async()=>{const t=await V(),o=t.map(({img:e,name:n,price:s,_id:c})=>`<li class="discount-list-card" data-product-id="${c}">
        <div lass="discount-svg">
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="discount-card-img"><img class="discount-img" src="${e}" alt="${n}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${n}</h3>
    <p class="discount-price">&dollar;${s}</p>

    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=o,r.classList.add("discount-list"),r.querySelectorAll(".discount-list-card").forEach(e=>{e.addEventListener("click",n=>{const s=e.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const c=t.find(i=>i._id===s);if(!g(s)){E(c),p(s,!0);return}A(s),p(s,!1);return}M(s)})}),r},O=document.querySelector(".main-cards"),_=document.querySelector(".popular"),B=document.querySelector(".discount");async function at(){const t=await Z();O.insertAdjacentElement("beforeend",t);const o=document.createElement("h2");o.textContent="All Products",o.classList.add("hiden-title"),O.insertAdjacentElement("afterbegin",o);const r=await rt();_.insertAdjacentElement("beforeend",r);const a=document.createElement("h2");a.textContent="Popular Products",a.classList.add("heading-pop"),_.insertAdjacentElement("afterbegin",a);const e=await ct();B.insertAdjacentElement("beforeend",e);const n=document.createElement("h2");n.textContent="Discount Products",n.classList.add("heading-disc"),B.insertAdjacentElement("afterbegin",n)}console.log(document.title);document.title==="Food Boutique 💙💛"?at():ot();
//# sourceMappingURL=render-b44d287c.js.map
