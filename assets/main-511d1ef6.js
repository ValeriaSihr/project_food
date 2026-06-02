import{a as pt}from"./vendor-f15dafc6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const mt=pt.create({baseURL:"https://food-boutique.b.goit.study/api"}),q=async e=>{try{const{data:t}=await mt(e);return t}catch(t){console.log(t.message)}},ft=async(e=1,t=9)=>{const s=`/products?page=${e}&limit=${t}`;return await q(s)},gt=async()=>await q("/products/popular"),bt=async()=>(await q("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),ht=async(e="640c2dd963a319ea671e36ba")=>{const t=`/products/${e}`;return await q(t)},yt=document.querySelector(".all-cards");function p(e,t=!1){const s=yt.querySelectorAll(`[data-product-id="${e}"]`);s.length&&s.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${t?"check":"shopping-cart"}`)})}const W="cart",J=e=>{localStorage.setItem(W,JSON.stringify(e))},h=()=>{const e=localStorage.getItem(W);return e?JSON.parse(e):[]},E=e=>{const t=h();t.push(e),J(t)},x=e=>{const s=h().filter(a=>e!==a._id);J(s)},vt=e=>{const t=h(),s=t.findIndex(a=>a._id===e);s!==-1&&(t.splice(s,1),J(t))},Et=()=>{localStorage.removeItem(W),typeof window<"u"&&window.dispatchEvent(new CustomEvent("cart-updated",{detail:{cart:[]}}))},b=e=>h().some(s=>s._id===e),At=e=>{const{category:t,img:s,is10PercentOff:a,name:r,desc:n,popularity:c,price:o,size:i,_id:d}=e,y=document.createElement("img");y.src=s,y.alt=r,y.classList.add("card-img-modal");const I=document.createElement("p");I.innerHTML=a?`<span class="old-price">&dollar;${(o/.9).toFixed(2)}</span>&dollar;${o}`:`&dollar;${o}`,I.classList.add("price-modal");const lt=b(d),m=document.createElement("button");m.setAttribute("type","button"),m.textContent=lt?"Remove from":"Add to",m.classList.add("cart-add");const A=document.createElement("svg");A.setAttribute("width","20px");const _=document.createElement("use");_.setAttribute("href","../img/icons.svg#shopping-cart");const ut=()=>{const D=b(d);return D?(m.textContent="Add to",p(d,!D),x(d)):(m.textContent="Remove from",p(d,!D),E(e))};m.addEventListener("click",ut),A.insertAdjacentElement("beforeend",_),m.insertAdjacentElement("beforeend",A),A.classList.add("cart-svg-modal"),_.classList.add("cart-use");const P=document.createElement("div");P.insertAdjacentElement("beforeend",I),P.insertAdjacentElement("beforeend",m),P.classList.add("div-price");const k=document.createElement("h3");k.textContent=r,k.classList.add("product-name");const N=document.createElement("p");N.textContent=n,N.classList.add("modal-text");const M=document.createElement("span"),O=document.createElement("span");M.textContent="Category: ",O.textContent=t.split("_").join(" "),M.classList.add("prod-info-modal"),O.classList.add("prod-info-api-modal");const B=document.createElement("span"),R=document.createElement("span");B.textContent="Size: ",R.textContent=i,B.classList.add("prod-info-modal"),R.classList.add("prod-info-api-modal");const U=document.createElement("span"),z=document.createElement("span");U.textContent="Popularity: ",z.textContent=c,U.classList.add("prod-info-modal"),z.classList.add("prod-info-api-modal");const l=document.createElement("div");return l.classList.add("wrapper"),l.insertAdjacentElement("beforeend",y),l.insertAdjacentElement("beforeend",k),l.insertAdjacentElement("beforeend",M),l.insertAdjacentElement("beforeend",O),l.insertAdjacentElement("beforeend",B),l.insertAdjacentElement("beforeend",R),l.insertAdjacentElement("beforeend",U),l.insertAdjacentElement("beforeend",z),l.insertAdjacentElement("beforeend",N),l.insertAdjacentElement("beforeend",P),l},Y=document.querySelector("[data-modal]"),Pt=document.querySelector("[data-modal-window]"),Lt=document.querySelector(".close-modal");let V;const ot=()=>{Y.classList.add("is-hidden"),V.remove()},Ct=e=>{e.currentTarget===e.target&&ot()};Lt.addEventListener("click",ot);Y.addEventListener("click",Ct);const Q=async e=>{Y.classList.remove("is-hidden");const t=await ht(e);V=At(t),Pt.insertAdjacentElement("beforeend",V)},v=4,it="productsCurrentPage",St="(min-width: 768px)",$t=5,wt=9,H=document.querySelector(".pages-list"),F=document.querySelector(".pagination"),L=document.querySelector(".turn-page-buttons");let u=1,j=1,g=null,Z=!1;const T=()=>window.matchMedia(St).matches?wt:$t,X=()=>{const e=Number(sessionStorage.getItem(it));return e>0?e:1},qt=e=>{sessionStorage.setItem(it,String(e))},xt=(e,t)=>{if(t<=v)return Array.from({length:t},(n,c)=>c+1);let s=e-Math.floor(v/2),a=s+v-1;s<1&&(s=1,a=v),a>t&&(a=t,s=t-v+1);const r=[];s>1&&(r.push(1),s>2&&r.push("ellipsis"));for(let n=s;n<=a;n+=1)r.push(n);return a<t&&(a<t-1&&r.push("ellipsis"),r.push(t)),r},dt=()=>{const e=document.querySelector(".main-cards-list");!e||!F||e.nextElementSibling===F||e.insertAdjacentElement("afterend",F)},jt=()=>{if(!L)return;L.querySelectorAll("[data-action]").forEach(t=>{const s=t.dataset.action;if(s==="first"||s==="prev"){t.disabled=u<=1;return}(s==="next"||s==="last")&&(t.disabled=u>=j)})},Tt=()=>{if(!H)return;const e=xt(u,j);H.innerHTML=e.map(t=>{if(t==="ellipsis")return'<li class="pages-item pages-ellipsis">...</li>';const s=t===u;return`<li class="pages-item">
        <button
          type="button"
          class="pages-btn${s?" pages-btn-active":""}"
          data-page="${t}"
          aria-label="Page ${t}"
          ${s?'aria-current="page"':""}
        >
          ${t}
        </button>
      </li>`}).join(""),H.querySelectorAll("[data-page]").forEach(t=>{t.addEventListener("click",()=>{const s=Number(t.dataset.page);s!==u&&(g==null||g(s))})})},It=(e,t)=>{u=e,j=t,qt(e),dt(),Tt(),jt()},_t=e=>{const t=e.target.closest("[data-action]");if(!t||t.disabled)return;const s=t.dataset.action;let a=u;switch(s){case"first":a=1;break;case"prev":a=u-1;break;case"next":a=u+1;break;case"last":a=j;break;default:return}a!==u&&(g==null||g(a))},kt=e=>{g=e,!Z&&(Z=!0,dt(),L&&L.addEventListener("click",_t))},Nt=e=>e.map(({category:t,img:s,is10PercentOff:a,name:r,popularity:n,price:c,size:o,_id:i})=>`<li class="list-card-style" data-product-id="${i}">
        
          <svg class="disc-icon-svg ${a?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${s}" alt="${r}" /></div>
  <div class="description">
    <h3 class="product-name">${r}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${t.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${o}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${n}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${c}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href='../img/icons.svg#shopping-cart'
        ></use>
      </svg>
    </button>
  </div>
</li>`).join(""),Mt=(e,t)=>{e.querySelectorAll(".list-card-style").forEach(a=>{a.addEventListener("click",r=>{const n=a.dataset.productId;if(r.target.nodeName==="BUTTON"||r.target.nodeName==="svg"||r.target.nodeName==="use"){const c=t.find(o=>o._id===n);if(!b(n)){E(c),p(n,!0);return}x(n),p(n,!1);return}Q(n)})}),t.forEach(({_id:a})=>{b(a)&&p(a,!0)})},tt=async(e=1,t=T())=>{const{results:s,totalPages:a,page:r}=await ft(e,t),n=document.createElement("ul");return n.classList.add("main-cards-list"),n.innerHTML=Nt(s),Mt(n,s),{cardList:n,totalPages:a,currentPage:r}},et=document.querySelector(".prod-cart-title"),f=document.querySelector("[data-cart-list]"),C=document.querySelector("[data-cart-empty]"),S=document.querySelector("[data-cart-summary]"),$=document.querySelector("[data-cart-total]"),st=document.querySelector(".delete-all-btn");let nt=!1;const Ot=()=>{const e=h(),t=new Map;e.forEach(r=>{if(!r||!r._id)return;const n=r._id,c=Number(r.price)||0;if(!t.has(n)){t.set(n,{product:r,quantity:1,subtotal:c});return}const o=t.get(n);o.quantity+=1,o.subtotal+=c});const s=Array.from(t.values()),a=s.reduce((r,n)=>r+n.subtotal,0);return{items:s,total:a}},Bt=()=>{if(!f||!C||!S||!$)return;const{items:e,total:t}=Ot();C.style.display="none",S.style.display="";const s=e.map(({product:a,quantity:r,subtotal:n})=>{const{img:c,name:o,price:i,_id:d}=a;return`<div class="cart-item" data-cart-item data-product-id="${d}">
        <div class="cart-item-main">
          <div class="cart-item-img-wrapper">
            <img class="cart-item-img" src="${c}" alt="${o}" />
          </div>
          <div class="cart-item-info">
            <h3 class="cart-item-name">${o}</h3>
            <p class="cart-item-price">&dollar;${i}</p>
          </div>
        </div>
        <div class="cart-item-controls">
          <button
            type="button"
            class="cart-item-btn cart-item-btn-dec"
            data-cart-decrease
          >
            -
          </button>
          <span class="cart-item-qty">${r}</span>
          <button
            type="button"
            class="cart-item-btn cart-item-btn-inc"
            data-cart-increase
          >
            +
          </button>
          <p class="cart-item-subtotal">
            &dollar;${n.toFixed(2)}
          </p>
        </div>
      </div>`}).join("");f.innerHTML=s,$.textContent=`$${t.toFixed(2)}`},Rt=()=>{!f||!C||!S||!$||(f.innerHTML="",C.style.display="",S.style.display="none",$.textContent="$0.00")},Ut=e=>{const t=e.target.closest("button");if(!t||!f||!f.contains(t))return;const s=t.closest("[data-cart-item]");if(!s)return;const a=s.dataset.productId;if(a){if(t.hasAttribute("data-cart-increase")){const n=h().find(c=>c&&c._id===a);n&&(E(n),w());return}t.hasAttribute("data-cart-decrease")&&(vt(a),w())}},zt=()=>{nt||(nt=!0,st&&st.addEventListener("click",()=>{Et(),w()}),f&&f.addEventListener("click",Ut))};function w(){const e=h();et&&(et.textContent=`CART (${e.length})`),zt(),e.length>0?Bt():Rt()}const Dt=async()=>{const e=await gt(),t=e.map(({category:r,img:n,name:c,popularity:o,size:i,_id:d})=>{const y=b(d);return`<li class="popular-card-style" data-product-id="${d}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${n}" alt="${c}" /></div>

  <div class="popular-description">
    <h3 class="product-name-pop">${c}</h3>

      <span class="prod-info">Category: </span><span class="prod-info-api">${r.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${o}</span>

  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
      <use href="../img/icons.svg#${y?"check":"shopping-cart"}"></use>
    </svg>
    </button>
  </div>
  </div>
      </li>
  `}).join(""),s=document.createElement("ul");return s.innerHTML=t,s.classList.add("popular-list"),s.querySelectorAll(".popular-card-style").forEach(r=>{r.addEventListener("click",n=>{const c=r.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const o=e.find(d=>d._id===c),i=r.querySelector(".popular-btn-svg use");if(!b(c)){E(o),p(c,!0),i&&i.setAttribute("href","../img/icons.svg#check");return}x(c),p(c,!1),i&&i.setAttribute("href","../img/icons.svg#shopping-cart");return}Q(c)})}),s},Ht=async()=>{const e=await bt(),t=e.map(({img:r,name:n,price:c,_id:o})=>`<li class="discount-list-card" data-product-id="${o}">
        <div lass="discount-svg">
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="discount-card-img"><img class="discount-img" src="${r}" alt="${n}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${n}</h3>
    <p class="discount-price">&dollar;${c}</p>

    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),s=document.createElement("ul");return s.innerHTML=t,s.classList.add("discount-list"),s.querySelectorAll(".discount-list-card").forEach(r=>{r.addEventListener("click",n=>{const c=r.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const o=e.find(i=>i._id===c);if(!b(c)){E(o),p(c,!0);return}x(c),p(c,!1);return}Q(c)})}),s},K=document.querySelector(".main-cards"),rt=document.querySelector(".popular"),at=document.querySelector(".discount");let ct=T();const G=async(e=X())=>{const t=T();let{cardList:s,totalPages:a,currentPage:r}=await tt(e,t);a>0&&e>a&&({cardList:s,totalPages:a,currentPage:r}=await tt(a,t));const n=K.querySelector(".main-cards-list");n?n.replaceWith(s):K.insertAdjacentElement("beforeend",s),It(r,a)},Ft=()=>{const e=T();e!==ct&&(ct=e,G(X()))};async function Vt(){const e=document.createElement("h2");e.textContent="All Products",e.classList.add("hiden-title"),K.insertAdjacentElement("afterbegin",e),kt(G),await G(X());let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(Ft,200)});const s=await Dt();rt.insertAdjacentElement("beforeend",s);const a=document.createElement("h2");a.textContent="Popular Products",a.classList.add("heading-pop"),rt.insertAdjacentElement("afterbegin",a);const r=await Ht();at.insertAdjacentElement("beforeend",r);const n=document.createElement("h2");n.textContent="Discount Products",n.classList.add("heading-disc"),at.insertAdjacentElement("afterbegin",n)}document.title==="Food Boutique 💙💛"?Vt():w();
//# sourceMappingURL=main-511d1ef6.js.map
