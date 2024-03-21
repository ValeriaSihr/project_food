/* empty css                      */import{a as M}from"./assets/vendor-a2e8d7fa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const I=M.create({baseURL:"https://food-boutique.b.goit.study/api"}),h=async n=>{try{const{data:s}=await I(n);return s}catch(s){console.log(s.message)}},_=async()=>await h("/products"),z=async()=>await h("/products/popular"),q=async()=>(await h("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2);q().then(console.log);const B=async(n="640c2dd963a319ea671e36ba")=>{const s=`/products/${n}`;return await h(s)},O="cart",H=()=>{const n=localStorage.getItem(O);return n?JSON.parse(n):[]},U=n=>{const s=H();s.push(n),localStorage.setItem(O,JSON.stringify(s))},D=n=>{const{category:s,img:o,is10PercentOff:d,name:t,desc:e,popularity:r,price:a,size:p,_id:u}=n,i=document.createElement("img");i.src=o,i.alt=t,i.classList.add("card-img-modal"),console.log(n);const l=document.createElement("p");l.innerHTML=d?`<span class="old-price">&dollar;${(a/.9).toFixed(2)}</span>&dollar;${a}`:`&dollar;${a}`,l.classList.add("price-modal");const m=document.createElement("button");m.setAttribute("type","button"),m.textContent="Add to",m.classList.add("cart-add");const g=document.createElement("svg");g.setAttribute("width","20px");const v=document.createElement("use");v.setAttribute("href","../img/icons.svg#icon-heroicons-solid_shopping-cart"),g.insertAdjacentElement("beforeend",v),m.insertAdjacentElement("beforeend",g),g.classList.add("cart-svg-modal"),v.classList.add("cart-use");const f=document.createElement("div");f.insertAdjacentElement("beforeend",l),f.insertAdjacentElement("beforeend",m),f.classList.add("div-price");const y=document.createElement("h3");y.textContent=t,y.classList.add("product-name");const b=document.createElement("p");b.textContent=e,b.classList.add("modal-text");const E=document.createElement("span"),A=document.createElement("span");E.textContent="Category: ",A.textContent=s.split("_").join(" "),E.classList.add("prod-info-modal"),A.classList.add("prod-info-api-modal");const L=document.createElement("span"),C=document.createElement("span");L.textContent="Size: ",C.textContent=p,L.classList.add("prod-info-modal"),C.classList.add("prod-info-api-modal");const P=document.createElement("span"),j=document.createElement("span");P.textContent="Popularity: ",j.textContent=r,P.classList.add("prod-info-modal"),j.classList.add("prod-info-api-modal");const c=document.createElement("div");return c.classList.add("wrapper"),c.insertAdjacentElement("beforeend",i),c.insertAdjacentElement("beforeend",y),c.insertAdjacentElement("beforeend",E),c.insertAdjacentElement("beforeend",A),c.insertAdjacentElement("beforeend",L),c.insertAdjacentElement("beforeend",C),c.insertAdjacentElement("beforeend",P),c.insertAdjacentElement("beforeend",j),c.insertAdjacentElement("beforeend",b),c.insertAdjacentElement("beforeend",f),c},$=document.querySelector("[data-modal]"),F=document.querySelector("[data-modal-window]"),V=document.querySelector(".close-modal");let w;const T=()=>{$.classList.add("is-hidden"),w.remove()},J=n=>{n.currentTarget===n.target&&T()};V.addEventListener("click",T);$.addEventListener("click",J);const S=async n=>{$.classList.remove("is-hidden");const s=await B(n);w=D(s),F.insertAdjacentElement("beforeend",w)},R=async()=>{const{results:n}=await _(),s=n.map(({category:t,img:e,is10PercentOff:r,name:a,popularity:p,price:u,size:i,_id:l})=>`<li class="list-card-style" data-product-id="${l}">
        
          <svg class="disc-icon-svg ${r?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#icon-discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${e}" alt="${a}" /></div>
  <div class="description">
    <h3 class="product-name">${a}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${t.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${i}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${p}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${u}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href="./img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
      </svg>
    </button>
  </div>
</li>`).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".list-card-style").forEach(t=>{t.addEventListener("click",e=>{const r=t.dataset.productId;if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use"){const a=n.find(p=>p._id===r);U(a);return}S(r)})}),o},W=async()=>{const s=(await z()).map(({category:t,img:e,is10PercentOff:r,name:a,popularity:p,price:u,size:i,_id:l})=>`<li class="popular-card-style" data-product-id="${l}">
  <div class="popular-img"><img class="pop-picture" src="${e}" alt="${a}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name">${a}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${t.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${p}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".popular-card-style").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;S(r)})}),o},K=async()=>{const s=(await q()).map(({category:t,img:e,is10PercentOff:r,name:a,popularity:p,price:u,size:i,_id:l})=>`<li class="discount-svg" data-product-id="${l}">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#icon-discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${e}" alt="${a}" /></div>
  <div>
    <h3 class="product-name">${a}</h3>
  </div>
  <div class="to-cart">
    <p class="discount-price">&dollar;${u}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),o=document.createElement("ul");return o.innerHTML=s,o.querySelectorAll(".discount-svg").forEach(t=>{t.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use")return;const r=t.dataset.productId;S(r)})}),o},N=document.querySelector(".main-cards"),x=document.querySelector(".popular"),k=document.querySelector(".discount");async function G(){const n=await R();N.insertAdjacentElement("beforeend",n);const s=document.createElement("h2");s.textContent="All Products",s.classList.add("hiden-title"),N.insertAdjacentElement("afterbegin",s);const o=await W();x.insertAdjacentElement("beforeend",o);const d=document.createElement("h2");d.textContent="Popular Products",x.insertAdjacentElement("afterbegin",d);const t=await K();k.insertAdjacentElement("beforeend",t);const e=document.createElement("h2");e.textContent="Discount Products",k.insertAdjacentElement("afterbegin",e)}G();
//# sourceMappingURL=commonHelpers2.js.map
