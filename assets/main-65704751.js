import{a as ut}from"./vendor-f15dafc6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const pt=ut.create({baseURL:"https://food-boutique.b.goit.study/api"}),q=async e=>{try{const{data:t}=await pt(e);return t}catch(t){console.log(t.message)}},mt=async(e=1,t=9)=>{const s=`/products?page=${e}&limit=${t}`;return await q(s)},ft=async()=>await q("/products/popular"),gt=async()=>(await q("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),bt=async(e="640c2dd963a319ea671e36ba")=>{const t=`/products/${e}`;return await q(t)},ht=document.querySelector(".all-cards");function p(e,t=!1){const s=ht.querySelectorAll(`[data-product-id="${e}"]`);s.length&&s.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${t?"check":"shopping-cart"}`)})}const W="cart",h=()=>{const e=localStorage.getItem(W);return e?JSON.parse(e):[]},E=e=>{const t=h();t.push(e),saveCart(t)},x=e=>{const s=h().filter(a=>e!==a._id);saveCart(s)},yt=e=>{const t=h(),s=t.findIndex(a=>a._id===e);s!==-1&&(t.splice(s,1),localStorage.setItem(W,JSON.stringify(t)))},vt=()=>{localStorage.removeItem(W),typeof window<"u"&&window.dispatchEvent(new CustomEvent("cart-updated",{detail:{cart:[]}}))},b=e=>h().some(s=>s._id===e),Et=e=>{const{category:t,img:s,is10PercentOff:a,name:r,desc:n,popularity:c,price:o,size:i,_id:d}=e,y=document.createElement("img");y.src=s,y.alt=r,y.classList.add("card-img-modal");const I=document.createElement("p");I.innerHTML=a?`<span class="old-price">&dollar;${(o/.9).toFixed(2)}</span>&dollar;${o}`:`&dollar;${o}`,I.classList.add("price-modal");const dt=b(d),m=document.createElement("button");m.setAttribute("type","button"),m.textContent=dt?"Remove from":"Add to",m.classList.add("cart-add");const A=document.createElement("svg");A.setAttribute("width","20px");const _=document.createElement("use");_.setAttribute("href","../img/icons.svg#shopping-cart");const lt=()=>{const D=b(d);return D?(m.textContent="Add to",p(d,!D),x(d)):(m.textContent="Remove from",p(d,!D),E(e))};m.addEventListener("click",lt),A.insertAdjacentElement("beforeend",_),m.insertAdjacentElement("beforeend",A),A.classList.add("cart-svg-modal"),_.classList.add("cart-use");const P=document.createElement("div");P.insertAdjacentElement("beforeend",I),P.insertAdjacentElement("beforeend",m),P.classList.add("div-price");const k=document.createElement("h3");k.textContent=r,k.classList.add("product-name");const N=document.createElement("p");N.textContent=n,N.classList.add("modal-text");const M=document.createElement("span"),O=document.createElement("span");M.textContent="Category: ",O.textContent=t.split("_").join(" "),M.classList.add("prod-info-modal"),O.classList.add("prod-info-api-modal");const B=document.createElement("span"),R=document.createElement("span");B.textContent="Size: ",R.textContent=i,B.classList.add("prod-info-modal"),R.classList.add("prod-info-api-modal");const U=document.createElement("span"),z=document.createElement("span");U.textContent="Popularity: ",z.textContent=c,U.classList.add("prod-info-modal"),z.classList.add("prod-info-api-modal");const l=document.createElement("div");return l.classList.add("wrapper"),l.insertAdjacentElement("beforeend",y),l.insertAdjacentElement("beforeend",k),l.insertAdjacentElement("beforeend",M),l.insertAdjacentElement("beforeend",O),l.insertAdjacentElement("beforeend",B),l.insertAdjacentElement("beforeend",R),l.insertAdjacentElement("beforeend",U),l.insertAdjacentElement("beforeend",z),l.insertAdjacentElement("beforeend",N),l.insertAdjacentElement("beforeend",P),l},J=document.querySelector("[data-modal]"),At=document.querySelector("[data-modal-window]"),Pt=document.querySelector(".close-modal");let V;const ct=()=>{J.classList.add("is-hidden"),V.remove()},Lt=e=>{e.currentTarget===e.target&&ct()};Pt.addEventListener("click",ct);J.addEventListener("click",Lt);const Y=async e=>{J.classList.remove("is-hidden");const t=await bt(e);V=Et(t),At.insertAdjacentElement("beforeend",V)},v=4,ot="productsCurrentPage",Ct="(min-width: 768px)",St=5,$t=9,H=document.querySelector(".pages-list"),F=document.querySelector(".pagination"),L=document.querySelector(".turn-page-buttons");let u=1,j=1,g=null,X=!1;const T=()=>window.matchMedia(Ct).matches?$t:St,Q=()=>{const e=Number(sessionStorage.getItem(ot));return e>0?e:1},wt=e=>{sessionStorage.setItem(ot,String(e))},qt=(e,t)=>{if(t<=v)return Array.from({length:t},(n,c)=>c+1);let s=e-Math.floor(v/2),a=s+v-1;s<1&&(s=1,a=v),a>t&&(a=t,s=t-v+1);const r=[];s>1&&(r.push(1),s>2&&r.push("ellipsis"));for(let n=s;n<=a;n+=1)r.push(n);return a<t&&(a<t-1&&r.push("ellipsis"),r.push(t)),r},it=()=>{const e=document.querySelector(".main-cards-list");!e||!F||e.nextElementSibling===F||e.insertAdjacentElement("afterend",F)},xt=()=>{if(!L)return;L.querySelectorAll("[data-action]").forEach(t=>{const s=t.dataset.action;if(s==="first"||s==="prev"){t.disabled=u<=1;return}(s==="next"||s==="last")&&(t.disabled=u>=j)})},jt=()=>{if(!H)return;const e=qt(u,j);H.innerHTML=e.map(t=>{if(t==="ellipsis")return'<li class="pages-item pages-ellipsis">...</li>';const s=t===u;return`<li class="pages-item">
        <button
          type="button"
          class="pages-btn${s?" pages-btn-active":""}"
          data-page="${t}"
          aria-label="Page ${t}"
          ${s?'aria-current="page"':""}
        >
          ${t}
        </button>
      </li>`}).join(""),H.querySelectorAll("[data-page]").forEach(t=>{t.addEventListener("click",()=>{const s=Number(t.dataset.page);s!==u&&(g==null||g(s))})})},Tt=(e,t)=>{u=e,j=t,wt(e),it(),jt(),xt()},It=e=>{const t=e.target.closest("[data-action]");if(!t||t.disabled)return;const s=t.dataset.action;let a=u;switch(s){case"first":a=1;break;case"prev":a=u-1;break;case"next":a=u+1;break;case"last":a=j;break;default:return}a!==u&&(g==null||g(a))},_t=e=>{g=e,!X&&(X=!0,it(),L&&L.addEventListener("click",It))},kt=e=>e.map(({category:t,img:s,is10PercentOff:a,name:r,popularity:n,price:c,size:o,_id:i})=>`<li class="list-card-style" data-product-id="${i}">
        
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
</li>`).join(""),Nt=(e,t)=>{e.querySelectorAll(".list-card-style").forEach(a=>{a.addEventListener("click",r=>{const n=a.dataset.productId;if(r.target.nodeName==="BUTTON"||r.target.nodeName==="svg"||r.target.nodeName==="use"){const c=t.find(o=>o._id===n);if(!b(n)){E(c),p(n,!0);return}x(n),p(n,!1);return}Y(n)})}),t.forEach(({_id:a})=>{b(a)&&p(a,!0)})},Z=async(e=1,t=T())=>{const{results:s,totalPages:a,page:r}=await mt(e,t),n=document.createElement("ul");return n.classList.add("main-cards-list"),n.innerHTML=kt(s),Nt(n,s),{cardList:n,totalPages:a,currentPage:r}},tt=document.querySelector(".prod-cart-title"),f=document.querySelector("[data-cart-list]"),C=document.querySelector("[data-cart-empty]"),S=document.querySelector("[data-cart-summary]"),$=document.querySelector("[data-cart-total]"),et=document.querySelector(".delete-all-btn");let st=!1;const Mt=()=>{const e=h(),t=new Map;e.forEach(r=>{if(!r||!r._id)return;const n=r._id,c=Number(r.price)||0;if(!t.has(n)){t.set(n,{product:r,quantity:1,subtotal:c});return}const o=t.get(n);o.quantity+=1,o.subtotal+=c});const s=Array.from(t.values()),a=s.reduce((r,n)=>r+n.subtotal,0);return{items:s,total:a}},Ot=()=>{if(!f||!C||!S||!$)return;const{items:e,total:t}=Mt();C.style.display="none",S.style.display="";const s=e.map(({product:a,quantity:r,subtotal:n})=>{const{img:c,name:o,price:i,_id:d}=a;return`<div class="cart-item" data-cart-item data-product-id="${d}">
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
      </div>`}).join("");f.innerHTML=s,$.textContent=`$${t.toFixed(2)}`},Bt=()=>{!f||!C||!S||!$||(f.innerHTML="",C.style.display="",S.style.display="none",$.textContent="$0.00")},Rt=e=>{const t=e.target.closest("button");if(!t||!f||!f.contains(t))return;const s=t.closest("[data-cart-item]");if(!s)return;const a=s.dataset.productId;if(a){if(t.hasAttribute("data-cart-increase")){const n=h().find(c=>c&&c._id===a);n&&(E(n),w());return}t.hasAttribute("data-cart-decrease")&&(yt(a),w())}},Ut=()=>{st||(st=!0,et&&et.addEventListener("click",()=>{vt(),w()}),f&&f.addEventListener("click",Rt))};function w(){const e=h();tt&&(tt.textContent=`CART (${e.length})`),Ut(),e.length>0?Ot():Bt()}const zt=async()=>{const e=await ft(),t=e.map(({category:r,img:n,name:c,popularity:o,size:i,_id:d})=>{const y=b(d);return`<li class="popular-card-style" data-product-id="${d}">
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
  `}).join(""),s=document.createElement("ul");return s.innerHTML=t,s.classList.add("popular-list"),s.querySelectorAll(".popular-card-style").forEach(r=>{r.addEventListener("click",n=>{const c=r.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const o=e.find(d=>d._id===c),i=r.querySelector(".popular-btn-svg use");if(!b(c)){E(o),p(c,!0),i&&i.setAttribute("href","../img/icons.svg#check");return}x(c),p(c,!1),i&&i.setAttribute("href","../img/icons.svg#shopping-cart");return}Y(c)})}),s},Dt=async()=>{const e=await gt(),t=e.map(({img:r,name:n,price:c,_id:o})=>`<li class="discount-list-card" data-product-id="${o}">
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
  `).join(""),s=document.createElement("ul");return s.innerHTML=t,s.classList.add("discount-list"),s.querySelectorAll(".discount-list-card").forEach(r=>{r.addEventListener("click",n=>{const c=r.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const o=e.find(i=>i._id===c);if(!b(c)){E(o),p(c,!0);return}x(c),p(c,!1);return}Y(c)})}),s},K=document.querySelector(".main-cards"),nt=document.querySelector(".popular"),rt=document.querySelector(".discount");let at=T();const G=async(e=Q())=>{const t=T();let{cardList:s,totalPages:a,currentPage:r}=await Z(e,t);a>0&&e>a&&({cardList:s,totalPages:a,currentPage:r}=await Z(a,t));const n=K.querySelector(".main-cards-list");n?n.replaceWith(s):K.insertAdjacentElement("beforeend",s),Tt(r,a)},Ht=()=>{const e=T();e!==at&&(at=e,G(Q()))};async function Ft(){const e=document.createElement("h2");e.textContent="All Products",e.classList.add("hiden-title"),K.insertAdjacentElement("afterbegin",e),_t(G),await G(Q());let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(Ht,200)});const s=await zt();nt.insertAdjacentElement("beforeend",s);const a=document.createElement("h2");a.textContent="Popular Products",a.classList.add("heading-pop"),nt.insertAdjacentElement("afterbegin",a);const r=await Dt();rt.insertAdjacentElement("beforeend",r);const n=document.createElement("h2");n.textContent="Discount Products",n.classList.add("heading-disc"),rt.insertAdjacentElement("afterbegin",n)}document.title==="Food Boutique 💙💛"?Ft():w();
//# sourceMappingURL=main-65704751.js.map
