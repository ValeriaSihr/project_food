import{a as vt}from"./vendor-f15dafc6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const Et=vt.create({baseURL:"https://food-boutique.b.goit.study/api"}),L=async t=>{try{const{data:e}=await Et(t);return e}catch(e){console.log(e.message)}},Pt=540,Lt=t=>{switch(t){case"az":return{byABC:!0};case"za":return{byABC:!1};case"price-low-high":return{byPrice:!0};case"price-high-low":return{byPrice:!1};case"popularity":return{byPopularity:!1};default:return{}}},at=({page:t,limit:e,keyword:n,category:a,sort:s})=>{const r=new URLSearchParams({page:String(t),limit:String(e)});return n&&r.set("keyword",n),a&&a!=="show-all"&&r.set("category",a),Object.entries(Lt(s)).forEach(([o,c])=>{r.set(o,String(c))}),r},At=async({page:t=1,limit:e=9,keyword:n="",category:a="",sort:s=""}={})=>{var o;if(s==="newest"||s==="oldest"){const c=at({page:1,limit:Pt,keyword:n,category:a,sort:""}),i=await L(`/products?${c.toString()}`);if(!((o=i==null?void 0:i.results)!=null&&o.length))return i;const d=[...i.results].sort((w,u)=>s==="newest"?u._id.localeCompare(w._id):w._id.localeCompare(u._id)),g=Math.ceil(d.length/e)||0,P=(t-1)*e;return{page:t,perPage:e,totalPages:g,results:d.slice(P,P+e)}}const r=at({page:t,limit:e,keyword:n,category:a,sort:s});return await L(`/products?${r.toString()}`)},St=async()=>await L("/products/categories"),Ct=async()=>await L("/products/popular"),wt=async()=>(await L("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),$t=async(t="640c2dd963a319ea671e36ba")=>{const e=`/products/${t}`;return await L(e)},qt=document.querySelector(".all-cards");function f(t,e=!1){const n=qt.querySelectorAll(`[data-product-id="${t}"]`);n.length&&n.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${e?"check":"shopping-cart"}`)})}const tt="cart",et=t=>{localStorage.setItem(tt,JSON.stringify(t))},E=()=>{const t=localStorage.getItem(tt);return t?JSON.parse(t):[]},C=t=>{const e=E();e.push(t),et(e)},B=t=>{const n=E().filter(a=>t!==a._id);et(n)},Tt=t=>{const e=E(),n=e.findIndex(a=>a._id===t);n!==-1&&(e.splice(n,1),et(e))},jt=()=>{localStorage.removeItem(tt),typeof window<"u"&&window.dispatchEvent(new CustomEvent("cart-updated",{detail:{cart:[]}}))},v=t=>E().some(n=>n._id===t),xt=t=>{const{category:e,img:n,is10PercentOff:a,name:s,desc:r,popularity:o,price:c,size:i,_id:d}=t,g=document.createElement("img");g.src=n,g.alt=s,g.classList.add("card-img-modal");const P=document.createElement("p");P.innerHTML=a?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,P.classList.add("price-modal");const w=v(d),u=document.createElement("button");u.setAttribute("type","button"),u.textContent=w?"Remove from":"Add to",u.classList.add("cart-add");const $=document.createElement("svg");$.setAttribute("width","20px");const z=document.createElement("use");z.setAttribute("href","../img/icons.svg#shopping-cart");const bt=()=>{const Y=v(d);return Y?(u.textContent="Add to",f(d,!Y),B(d)):(u.textContent="Remove from",f(d,!Y),C(t))};u.addEventListener("click",bt),$.insertAdjacentElement("beforeend",z),u.insertAdjacentElement("beforeend",$),$.classList.add("cart-svg-modal"),z.classList.add("cart-use");const q=document.createElement("div");q.insertAdjacentElement("beforeend",P),q.insertAdjacentElement("beforeend",u),q.classList.add("div-price");const D=document.createElement("h3");D.textContent=s,D.classList.add("product-name");const H=document.createElement("p");H.textContent=r,H.classList.add("modal-text");const F=document.createElement("span"),V=document.createElement("span");F.textContent="Category: ",V.textContent=e.split("_").join(" "),F.classList.add("prod-info-modal"),V.classList.add("prod-info-api-modal");const K=document.createElement("span"),G=document.createElement("span");K.textContent="Size: ",G.textContent=i,K.classList.add("prod-info-modal"),G.classList.add("prod-info-api-modal");const J=document.createElement("span"),W=document.createElement("span");J.textContent="Popularity: ",W.textContent=o,J.classList.add("prod-info-modal"),W.classList.add("prod-info-api-modal");const l=document.createElement("div");return l.classList.add("wrapper"),l.insertAdjacentElement("beforeend",g),l.insertAdjacentElement("beforeend",D),l.insertAdjacentElement("beforeend",F),l.insertAdjacentElement("beforeend",V),l.insertAdjacentElement("beforeend",K),l.insertAdjacentElement("beforeend",G),l.insertAdjacentElement("beforeend",J),l.insertAdjacentElement("beforeend",W),l.insertAdjacentElement("beforeend",H),l.insertAdjacentElement("beforeend",q),l},nt=document.querySelector("[data-modal]"),_t=document.querySelector("[data-modal-window]"),Mt=document.querySelector(".close-modal");let Z;const gt=()=>{nt.classList.add("is-hidden"),Z.remove()},kt=t=>{t.currentTarget===t.target&&gt()};Mt.addEventListener("click",gt);nt.addEventListener("click",kt);const st=async t=>{nt.classList.remove("is-hidden");const e=await $t(t);Z=xt(e),_t.insertAdjacentElement("beforeend",Z)},A=4,yt="productsCurrentPage",Nt="(min-width: 768px)",It=5,Ot=9,Q=document.querySelector(".pages-list"),X=document.querySelector(".pagination"),M=document.querySelector(".turn-page-buttons");let m=1,R=1,b=null,ot=!1;const U=()=>window.matchMedia(Nt).matches?Ot:It,rt=()=>{const t=Number(sessionStorage.getItem(yt));return t>0?t:1},Bt=t=>{sessionStorage.setItem(yt,String(t))},Rt=(t,e)=>{if(e<=A)return Array.from({length:e},(r,o)=>o+1);let n=t-Math.floor(A/2),a=n+A-1;n<1&&(n=1,a=A),a>e&&(a=e,n=e-A+1);const s=[];n>1&&(s.push(1),n>2&&s.push("ellipsis"));for(let r=n;r<=a;r+=1)s.push(r);return a<e&&(a<e-1&&s.push("ellipsis"),s.push(e)),s},ht=()=>{const t=document.querySelector(".main-cards-list");!t||!X||t.nextElementSibling===X||t.insertAdjacentElement("afterend",X)},Ut=()=>{if(!M)return;M.querySelectorAll("[data-action]").forEach(e=>{const n=e.dataset.action;if(n==="first"||n==="prev"){e.disabled=m<=1;return}(n==="next"||n==="last")&&(e.disabled=m>=R)})},zt=()=>{if(!Q)return;const t=Rt(m,R);Q.innerHTML=t.map(e=>{if(e==="ellipsis")return'<li class="pages-item pages-ellipsis">...</li>';const n=e===m;return`<li class="pages-item">
        <button
          type="button"
          class="pages-btn${n?" pages-btn-active":""}"
          data-page="${e}"
          aria-label="Page ${e}"
          ${n?'aria-current="page"':""}
        >
          ${e}
        </button>
      </li>`}).join(""),Q.querySelectorAll("[data-page]").forEach(e=>{e.addEventListener("click",()=>{const n=Number(e.dataset.page);n!==m&&(b==null||b(n))})})},Dt=(t,e)=>{m=t,R=e,Bt(t),ht(),zt(),Ut()},Ht=t=>{const e=t.target.closest("[data-action]");if(!e||e.disabled)return;const n=e.dataset.action;let a=m;switch(n){case"first":a=1;break;case"prev":a=m-1;break;case"next":a=m+1;break;case"last":a=R;break;default:return}a!==m&&(b==null||b(a))},Ft=t=>{b=t,!ot&&(ot=!0,ht(),M&&M.addEventListener("click",Ht))},Vt=t=>t.map(({category:e,img:n,is10PercentOff:a,name:s,popularity:r,price:o,size:c,_id:i})=>`<li class="list-card-style" data-product-id="${i}">
        
          <svg class="disc-icon-svg ${a?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${n}" alt="${s}" /></div>
  <div class="description">
    <h3 class="product-name">${s}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${e.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${c}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${r}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${o}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href='../img/icons.svg#shopping-cart'
        ></use>
      </svg>
    </button>
  </div>
</li>`).join(""),Kt=(t,e)=>{t.querySelectorAll(".list-card-style").forEach(a=>{a.addEventListener("click",s=>{const r=a.dataset.productId;if(s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"||s.target.nodeName==="use"){const o=e.find(c=>c._id===r);if(!v(r)){C(o),f(r,!0);return}B(r),f(r,!1);return}st(r)})}),e.forEach(({_id:a})=>{v(a)&&f(a,!0)})},Gt=()=>{const t=document.createElement("div");return t.className="filters-empty",t.innerHTML=`
    <p class="filters-empty-title">Nothing was found for the selected filters...</p>
    <p class="filters-empty-text">
      Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
  `,t},ct=async(t=1,e=U(),n={})=>{const{results:a,totalPages:s,page:r}=await At({page:t,limit:e,...n});if(!(a!=null&&a.length))return{cardList:Gt(),totalPages:0,currentPage:1,isEmpty:!0};const o=document.createElement("ul");return o.classList.add("main-cards-list"),o.innerHTML=Vt(a),Kt(o,a),{cardList:o,totalPages:s,currentPage:r,isEmpty:!1}},p=document.querySelector("#search"),y=document.querySelector("#category"),S=document.querySelector("#sort"),j={keyword:"",category:"",sort:""};let T=null;const Jt=()=>({...j}),Wt=t=>t.split("_").join(" "),Yt=t=>{y&&(y.innerHTML=`
    <option value="" disabled selected>Categories</option>
    <option value="show-all">Show all</option>
  `,t.forEach(e=>{const n=document.createElement("option");n.value=e,n.textContent=Wt(e),y.append(n)}))},Qt=async()=>{const t=await St();t!=null&&t.length&&Yt(t)},Xt=t=>{if(T=t,!p&&!y&&!S)return;Qt();const e=p==null?void 0:p.closest("form");let n;const a=()=>{T==null||T(1)},s=()=>{j.keyword=(p==null?void 0:p.value.trim())||"",a()};p==null||p.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(s,300)}),e==null||e.addEventListener("submit",r=>{r.preventDefault(),clearTimeout(n),s()}),y==null||y.addEventListener("change",()=>{const{value:r}=y;j.category=r==="show-all"||r===""?"":r,a()}),S==null||S.addEventListener("change",()=>{j.sort=S.value||"",a()})},it=document.querySelector(".prod-cart-title"),h=document.querySelector("[data-cart-list]"),k=document.querySelector("[data-cart-empty]"),N=document.querySelector("[data-cart-summary]"),I=document.querySelector("[data-cart-total]"),dt=document.querySelector(".delete-all-btn");let lt=!1;const Zt=()=>{const t=E(),e=new Map;t.forEach(s=>{if(!s||!s._id)return;const r=s._id,o=Number(s.price)||0;if(!e.has(r)){e.set(r,{product:s,quantity:1,subtotal:o});return}const c=e.get(r);c.quantity+=1,c.subtotal+=o});const n=Array.from(e.values()),a=n.reduce((s,r)=>s+r.subtotal,0);return{items:n,total:a}},te=()=>{if(!h||!k||!N||!I)return;const{items:t,total:e}=Zt();k.style.display="none",N.style.display="";const n=t.map(({product:a,quantity:s,subtotal:r})=>{const{img:o,name:c,price:i,_id:d}=a;return`<div class="cart-item" data-cart-item data-product-id="${d}">
        <div class="cart-item-main">
          <div class="cart-item-img-wrapper">
            <img class="cart-item-img" src="${o}" alt="${c}" />
          </div>
          <div class="cart-item-info">
            <h3 class="cart-item-name">${c}</h3>
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
          <span class="cart-item-qty">${s}</span>
          <button
            type="button"
            class="cart-item-btn cart-item-btn-inc"
            data-cart-increase
          >
            +
          </button>
          <p class="cart-item-subtotal">
            &dollar;${r.toFixed(2)}
          </p>
        </div>
      </div>`}).join("");h.innerHTML=n,I.textContent=`$${e.toFixed(2)}`},ee=()=>{!h||!k||!N||!I||(h.innerHTML="",k.style.display="",N.style.display="none",I.textContent="$0.00")},ne=t=>{const e=t.target.closest("button");if(!e||!h||!h.contains(e))return;const n=e.closest("[data-cart-item]");if(!n)return;const a=n.dataset.productId;if(a){if(e.hasAttribute("data-cart-increase")){const r=E().find(o=>o&&o._id===a);r&&(C(r),O());return}e.hasAttribute("data-cart-decrease")&&(Tt(a),O())}},se=()=>{lt||(lt=!0,dt&&dt.addEventListener("click",()=>{jt(),O()}),h&&h.addEventListener("click",ne))};function O(){const t=E();it&&(it.textContent=`CART (${t.length})`),se(),t.length>0?te():ee()}const re=async()=>{const t=await Ct(),e=t.map(({category:s,img:r,name:o,popularity:c,size:i,_id:d})=>{const g=v(d);return`<li class="popular-card-style" data-product-id="${d}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${r}" alt="${o}" /></div>

  <div class="popular-description">
    <h3 class="product-name-pop">${o}</h3>

      <span class="prod-info">Category: </span><span class="prod-info-api">${s.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${c}</span>

  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
      <use href="../img/icons.svg#${g?"check":"shopping-cart"}"></use>
    </svg>
    </button>
  </div>
  </div>
      </li>
  `}).join(""),n=document.createElement("ul");return n.innerHTML=e,n.classList.add("popular-list"),n.querySelectorAll(".popular-card-style").forEach(s=>{s.addEventListener("click",r=>{const o=s.dataset.productId;if(r.target.nodeName==="BUTTON"||r.target.nodeName==="svg"||r.target.nodeName==="use"){const c=t.find(d=>d._id===o),i=s.querySelector(".popular-btn-svg use");if(!v(o)){C(c),f(o,!0),i&&i.setAttribute("href","../img/icons.svg#check");return}B(o),f(o,!1),i&&i.setAttribute("href","../img/icons.svg#shopping-cart");return}st(o)})}),n},ae=async()=>{const t=await wt(),e=t.map(({img:s,name:r,price:o,_id:c})=>`<li class="discount-list-card" data-product-id="${c}">
        <div lass="discount-svg">
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="discount-card-img"><img class="discount-img" src="${s}" alt="${r}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${r}</h3>
    <p class="discount-price">&dollar;${o}</p>

    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),n=document.createElement("ul");return n.innerHTML=e,n.classList.add("discount-list"),n.querySelectorAll(".discount-list-card").forEach(s=>{s.addEventListener("click",r=>{const o=s.dataset.productId;if(r.target.nodeName==="BUTTON"||r.target.nodeName==="svg"||r.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!v(o)){C(c),f(o,!0);return}B(o),f(o,!1);return}st(o)})}),n},x=document.querySelector(".main-cards"),ut=document.querySelector(".popular"),pt=document.querySelector(".discount"),mt=document.querySelector(".pagination");let ft=U();const oe=t=>{var e,n;(e=x.querySelector(".main-cards-list"))==null||e.remove(),(n=x.querySelector(".filters-empty"))==null||n.remove(),x.insertAdjacentElement("beforeend",t)},ce=t=>{mt&&(mt.style.display=t>0?"":"none")},_=async(t=rt())=>{const e=U(),n=Jt();let{cardList:a,totalPages:s,currentPage:r}=await ct(t,e,n);s>0&&t>s&&({cardList:a,totalPages:s,currentPage:r}=await ct(s,e,n)),oe(a),ce(s),Dt(r,s)},ie=()=>{const t=U();t!==ft&&(ft=t,_(rt()))};async function de(){const t=document.createElement("h2");t.textContent="All Products",t.classList.add("hiden-title"),x.insertAdjacentElement("afterbegin",t),Ft(_),Xt(_),await _(rt());let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(ie,200)});const n=await re();ut.insertAdjacentElement("beforeend",n);const a=document.createElement("h2");a.textContent="Popular Products",a.classList.add("heading-pop"),ut.insertAdjacentElement("afterbegin",a);const s=await ae();pt.insertAdjacentElement("beforeend",s);const r=document.createElement("h2");r.textContent="Discount Products",r.classList.add("heading-disc"),pt.insertAdjacentElement("afterbegin",r)}document.title==="Food Boutique 💙💛"?de():O();
//# sourceMappingURL=main-dc40412b.js.map
