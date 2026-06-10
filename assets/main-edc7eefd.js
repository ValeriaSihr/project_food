import{a as wt}from"./vendor-f15dafc6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const $t=wt.create({baseURL:"https://food-boutique.b.goit.study/api"}),L=async t=>{try{const{data:e}=await $t(t);return e}catch(e){console.log(e.message)}},qt=1e3,Tt=t=>{switch(t){case"az":return{byABC:!0};case"za":return{byABC:!1};case"price-low-high":return{byPrice:!0};case"price-high-low":return{byPrice:!1};case"popularity":return{byPopularity:!1};default:return{}}},ct=({page:t,limit:e,keyword:s,category:a,sort:n})=>{const r=new URLSearchParams({page:String(t),limit:String(e)});return s&&r.set("keyword",s),a&&a!=="show-all"&&r.set("category",a),Object.entries(Tt(n)).forEach(([o,c])=>{r.set(o,String(c))}),r},jt=async({page:t=1,limit:e=9,keyword:s="",category:a="",sort:n=""}={})=>{var o;if(n==="newest"||n==="oldest"){const c=ct({page:1,limit:qt,keyword:s,category:a,sort:""}),i=await L(`/products?${c.toString()}`);if(!((o=i==null?void 0:i.results)!=null&&o.length))return i;const d=[...i.results].sort(($,u)=>n==="newest"?u._id.localeCompare($._id):$._id.localeCompare(u._id)),y=Math.ceil(d.length/e)||0,P=(t-1)*e;return{page:t,perPage:e,totalPages:y,results:d.slice(P,P+e)}}const r=ct({page:t,limit:e,keyword:s,category:a,sort:n});return await L(`/products?${r.toString()}`)},xt=async()=>await L("/products/categories"),_t=async()=>await L("/products/popular"),kt=async()=>(await L("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),It=async(t="640c2dd963a319ea671e36ba")=>{const e=`/products/${t}`;return await L(e)},Nt=async t=>{const e=JSON.parse(localStorage.getItem("subscribers")||"[]");return e.includes(t)?{status:"conflict",message:"Email already exists"}:(e.push(t),localStorage.setItem("subscribers",JSON.stringify(e)),{status:"success",message:"Subscribed successfully"})},Mt=document.querySelector(".all-cards");function g(t,e=!1){const s=Mt.querySelectorAll(`[data-product-id="${t}"]`);s.length&&s.forEach(a=>{a.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${e?"check":"shopping-cart"}`)})}const st="cart",nt=t=>{localStorage.setItem(st,JSON.stringify(t))},S=()=>{const t=localStorage.getItem(st);return t?JSON.parse(t):[]},w=t=>{const e=S();e.push(t),nt(e)},R=t=>{const s=S().filter(a=>t!==a._id);nt(s)},Ot=t=>{const e=S(),s=e.findIndex(a=>a._id===t);s!==-1&&(e.splice(s,1),nt(e))},Bt=()=>{localStorage.removeItem(st),typeof window<"u"&&window.dispatchEvent(new CustomEvent("cart-updated",{detail:{cart:[]}}))},E=t=>S().some(s=>s._id===t),Rt=t=>{const{category:e,img:s,is10PercentOff:a,name:n,desc:r,popularity:o,price:c,size:i,_id:d}=t,y=document.createElement("img");y.src=s,y.alt=n,y.classList.add("card-img-modal");const P=document.createElement("p");P.innerHTML=a?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,P.classList.add("price-modal");const $=E(d),u=document.createElement("button");u.setAttribute("type","button"),u.textContent=$?"Remove from":"Add to",u.classList.add("cart-add");const q=document.createElement("svg");q.setAttribute("width","20px");const D=document.createElement("use");D.setAttribute("href","../img/icons.svg#shopping-cart");const Ct=()=>{const Q=E(d);return Q?(u.textContent="Add to",g(d,!Q),R(d)):(u.textContent="Remove from",g(d,!Q),w(t))};u.addEventListener("click",Ct),q.insertAdjacentElement("beforeend",D),u.insertAdjacentElement("beforeend",q),q.classList.add("cart-svg-modal"),D.classList.add("cart-use");const T=document.createElement("div");T.insertAdjacentElement("beforeend",P),T.insertAdjacentElement("beforeend",u),T.classList.add("div-price");const H=document.createElement("h3");H.textContent=n,H.classList.add("product-name");const F=document.createElement("p");F.textContent=r,F.classList.add("modal-text");const V=document.createElement("span"),K=document.createElement("span");V.textContent="Category: ",K.textContent=e.split("_").join(" "),V.classList.add("prod-info-modal"),K.classList.add("prod-info-api-modal");const G=document.createElement("span"),J=document.createElement("span");G.textContent="Size: ",J.textContent=i,G.classList.add("prod-info-modal"),J.classList.add("prod-info-api-modal");const W=document.createElement("span"),Y=document.createElement("span");W.textContent="Popularity: ",Y.textContent=o,W.classList.add("prod-info-modal"),Y.classList.add("prod-info-api-modal");const l=document.createElement("div");return l.classList.add("wrapper"),l.insertAdjacentElement("beforeend",y),l.insertAdjacentElement("beforeend",H),l.insertAdjacentElement("beforeend",V),l.insertAdjacentElement("beforeend",K),l.insertAdjacentElement("beforeend",G),l.insertAdjacentElement("beforeend",J),l.insertAdjacentElement("beforeend",W),l.insertAdjacentElement("beforeend",Y),l.insertAdjacentElement("beforeend",F),l.insertAdjacentElement("beforeend",T),l},rt=document.querySelector("[data-modal]"),Ut=document.querySelector("[data-modal-window]"),zt=document.querySelector(".close-modal");let tt;const St=()=>{rt.classList.add("is-hidden"),tt.remove()},Dt=t=>{t.currentTarget===t.target&&St()};zt.addEventListener("click",St);rt.addEventListener("click",Dt);const at=async t=>{rt.classList.remove("is-hidden");const e=await It(t);tt=Rt(e),Ut.insertAdjacentElement("beforeend",tt)},A=4,Pt="productsCurrentPage",Ht="(min-width: 768px)",Ft=5,Vt=9,X=document.querySelector(".pages-list"),Z=document.querySelector(".pagination"),I=document.querySelector(".turn-page-buttons");let m=1,U=1,v=null,it=!1;const z=()=>window.matchMedia(Ht).matches?Vt:Ft,ot=()=>{const t=Number(sessionStorage.getItem(Pt));return t>0?t:1},Kt=t=>{sessionStorage.setItem(Pt,String(t))},Gt=(t,e)=>{if(e<=A)return Array.from({length:e},(r,o)=>o+1);let s=t-Math.floor(A/2),a=s+A-1;s<1&&(s=1,a=A),a>e&&(a=e,s=e-A+1);const n=[];s>1&&(n.push(1),s>2&&n.push("ellipsis"));for(let r=s;r<=a;r+=1)n.push(r);return a<e&&(a<e-1&&n.push("ellipsis"),n.push(e)),n},Lt=()=>{const t=document.querySelector(".main-cards-list");!t||!Z||t.nextElementSibling===Z||t.insertAdjacentElement("afterend",Z)},Jt=()=>{if(!I)return;I.querySelectorAll("[data-action]").forEach(e=>{const s=e.dataset.action;if(s==="first"||s==="prev"){e.disabled=m<=1;return}(s==="next"||s==="last")&&(e.disabled=m>=U)})},Wt=()=>{if(!X)return;const t=Gt(m,U);X.innerHTML=t.map(e=>{if(e==="ellipsis")return'<li class="pages-item pages-ellipsis">...</li>';const s=e===m;return`<li class="pages-item">
        <button
          type="button"
          class="pages-btn${s?" pages-btn-active":""}"
          data-page="${e}"
          aria-label="Page ${e}"
          ${s?'aria-current="page"':""}
        >
          ${e}
        </button>
      </li>`}).join(""),X.querySelectorAll("[data-page]").forEach(e=>{e.addEventListener("click",()=>{const s=Number(e.dataset.page);s!==m&&(v==null||v(s))})})},Yt=(t,e)=>{m=t,U=e,Kt(t),Lt(),Wt(),Jt()},Qt=t=>{const e=t.target.closest("[data-action]");if(!e||e.disabled)return;const s=e.dataset.action;let a=m;switch(s){case"first":a=1;break;case"prev":a=m-1;break;case"next":a=m+1;break;case"last":a=U;break;default:return}a!==m&&(v==null||v(a))},Xt=t=>{v=t,!it&&(it=!0,Lt(),I&&I.addEventListener("click",Qt))},Zt=t=>t.map(({category:e,img:s,is10PercentOff:a,name:n,popularity:r,price:o,size:c,_id:i})=>`<li class="list-card-style" data-product-id="${i}">
        
          <svg class="disc-icon-svg ${a?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${s}" alt="${n}" /></div>
  <div class="description">
    <h3 class="product-name">${n}</h3>

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
</li>`).join(""),te=(t,e)=>{t.querySelectorAll(".list-card-style").forEach(a=>{a.addEventListener("click",n=>{const r=a.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const o=e.find(c=>c._id===r);if(!E(r)){w(o),g(r,!0);return}R(r),g(r,!1);return}at(r)})}),e.forEach(({_id:a})=>{E(a)&&g(a,!0)})},ee=()=>{const t=document.createElement("div");return t.className="filters-empty",t.innerHTML=`
    <p class="filters-empty-title">Nothing was found for the selected filters...</p>
    <p class="filters-empty-text">
      Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
  `,t},dt=async(t=1,e=z(),s={})=>{const{results:a,totalPages:n,page:r}=await jt({page:t,limit:e,...s});if(!(a!=null&&a.length))return{cardList:ee(),totalPages:0,currentPage:1,isEmpty:!0};const o=document.createElement("ul");return o.classList.add("main-cards-list"),o.innerHTML=Zt(a),te(o,a),{cardList:o,totalPages:n,currentPage:r,isEmpty:!1}},p=document.querySelector("#search"),b=document.querySelector("#category"),C=document.querySelector("#sort"),x={keyword:"",category:"",sort:""};let j=null;const se=()=>({...x}),ne=t=>t.split("_").join(" "),re=t=>{b&&(b.innerHTML=`
    <option value="" disabled selected>Categories</option>
    <option value="show-all">Show all</option>
  `,t.forEach(e=>{const s=document.createElement("option");s.value=e,s.textContent=ne(e),b.append(s)}))},ae=async()=>{const t=await xt();t!=null&&t.length&&re(t)},oe=t=>{if(j=t,!p&&!b&&!C)return;ae();const e=p==null?void 0:p.closest("form");let s;const a=()=>{j==null||j(1)},n=()=>{x.keyword=(p==null?void 0:p.value.trim())||"",a()};p==null||p.addEventListener("input",()=>{clearTimeout(s),s=setTimeout(n,300)}),e==null||e.addEventListener("submit",r=>{r.preventDefault(),clearTimeout(s),n()}),b==null||b.addEventListener("change",()=>{const{value:r}=b;x.category=r==="show-all"||r===""?"":r,a()}),C==null||C.addEventListener("change",()=>{x.sort=C.value||"",a()})},lt=document.querySelector(".prod-cart-title"),h=document.querySelector("[data-cart-list]"),N=document.querySelector("[data-cart-empty]"),M=document.querySelector("[data-cart-summary]"),O=document.querySelector("[data-cart-total]"),ut=document.querySelector(".delete-all-btn");let pt=!1;const ce=()=>{const t=S(),e=new Map;t.forEach(n=>{if(!n||!n._id)return;const r=n._id,o=Number(n.price)||0;if(!e.has(r)){e.set(r,{product:n,quantity:1,subtotal:o});return}const c=e.get(r);c.quantity+=1,c.subtotal+=o});const s=Array.from(e.values()),a=s.reduce((n,r)=>n+r.subtotal,0);return{items:s,total:a}},ie=()=>{if(!h||!N||!M||!O)return;const{items:t,total:e}=ce();N.style.display="none",M.style.display="";const s=t.map(({product:a,quantity:n,subtotal:r})=>{const{img:o,name:c,price:i,_id:d}=a;return`<div class="cart-item" data-cart-item data-product-id="${d}">
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
          <span class="cart-item-qty">${n}</span>
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
      </div>`}).join("");h.innerHTML=s,O.textContent=`$${e.toFixed(2)}`},de=()=>{!h||!N||!M||!O||(h.innerHTML="",N.style.display="",M.style.display="none",O.textContent="$0.00")},le=t=>{const e=t.target.closest("button");if(!e||!h||!h.contains(e))return;const s=e.closest("[data-cart-item]");if(!s)return;const a=s.dataset.productId;if(a){if(e.hasAttribute("data-cart-increase")){const r=S().find(o=>o&&o._id===a);r&&(w(r),B());return}e.hasAttribute("data-cart-decrease")&&(Ot(a),B())}},ue=()=>{pt||(pt=!0,ut&&ut.addEventListener("click",()=>{Bt(),B()}),h&&h.addEventListener("click",le))};function B(){const t=S();lt&&(lt.textContent=`CART (${t.length})`),ue(),t.length>0?ie():de()}const pe=async()=>{const t=await _t(),e=t.map(({category:n,img:r,name:o,popularity:c,size:i,_id:d})=>{const y=E(d);return`<li class="popular-card-style" data-product-id="${d}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${r}" alt="${o}" /></div>

  <div class="popular-description">
    <h3 class="product-name-pop">${o}</h3>

      <span class="prod-info">Category: </span><span class="prod-info-api">${n.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${c}</span>

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
  `}).join(""),s=document.createElement("ul");return s.innerHTML=e,s.classList.add("popular-list"),s.querySelectorAll(".popular-card-style").forEach(n=>{n.addEventListener("click",r=>{const o=n.dataset.productId;if(r.target.nodeName==="BUTTON"||r.target.nodeName==="svg"||r.target.nodeName==="use"){const c=t.find(d=>d._id===o),i=n.querySelector(".popular-btn-svg use");if(!E(o)){w(c),g(o,!0),i&&i.setAttribute("href","../img/icons.svg#check");return}R(o),g(o,!1),i&&i.setAttribute("href","../img/icons.svg#shopping-cart");return}at(o)})}),s},me=async()=>{const t=await kt(),e=t.map(({img:n,name:r,price:o,_id:c})=>`<li class="discount-list-card" data-product-id="${c}">
        <div lass="discount-svg">
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="discount-card-img"><img class="discount-img" src="${n}" alt="${r}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${r}</h3>
    <p class="discount-price">&dollar;${o}</p>

    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),s=document.createElement("ul");return s.innerHTML=e,s.classList.add("discount-list"),s.querySelectorAll(".discount-list-card").forEach(n=>{n.addEventListener("click",r=>{const o=n.dataset.productId;if(r.target.nodeName==="BUTTON"||r.target.nodeName==="svg"||r.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!E(o)){w(c),g(o,!0);return}R(o),g(o,!1);return}at(o)})}),s},_=document.querySelector(".main-cards"),mt=document.querySelector(".popular"),ft=document.querySelector(".discount"),gt=document.querySelector(".pagination");let yt=z();const fe=t=>{var e,s;(e=_.querySelector(".main-cards-list"))==null||e.remove(),(s=_.querySelector(".filters-empty"))==null||s.remove(),_.insertAdjacentElement("beforeend",t)},ge=t=>{gt&&(gt.style.display=t>0?"":"none")},k=async(t=ot())=>{const e=z(),s=se();let{cardList:a,totalPages:n,currentPage:r}=await dt(t,e,s);n>0&&t>n&&({cardList:a,totalPages:n,currentPage:r}=await dt(n,e,s)),fe(a),ge(n),Yt(r,n)},ye=()=>{const t=z();t!==yt&&(yt=t,k(ot()))};async function be(){const t=document.createElement("h2");t.textContent="All Products",t.classList.add("hiden-title"),_.insertAdjacentElement("afterbegin",t),Xt(k),oe(k),await k(ot());let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(ye,200)});const s=await pe();mt.insertAdjacentElement("beforeend",s);const a=document.createElement("h2");a.textContent="Popular Products",a.classList.add("heading-pop"),mt.insertAdjacentElement("afterbegin",a);const n=await me();ft.insertAdjacentElement("beforeend",n);const r=document.createElement("h2");r.textContent="Discount Products",r.classList.add("heading-disc"),ft.insertAdjacentElement("afterbegin",r)}document.title==="Food Boutique 💙💛"?be():B();const et=document.querySelector(".form"),f=document.querySelector("[data-subscribe-modal]"),bt=document.querySelector("[data-subscribe-close]"),ht=document.getElementById("subscribe-success"),vt=document.getElementById("subscribe-error");et&&et.addEventListener("submit",he);bt&&bt.addEventListener("click",At);f==null||f.addEventListener("click",t=>{t.target===f&&At()});async function he(t){t.preventDefault();const e=et.querySelector('input[name="subscribe"]'),s=e.value.trim();if(!s){alert("Please enter an email address");return}try{const a=await Nt(s);a.status==="conflict"?Et("error"):a.status==="success"&&(Et("success"),e.value="")}catch(a){console.error("Subscription error:",a),alert("An error occurred. Please try again.")}}function Et(t){f&&(ht.classList.add("is-hidden"),vt.classList.add("is-hidden"),t==="success"?ht.classList.remove("is-hidden"):t==="error"&&vt.classList.remove("is-hidden"),f.classList.remove("is-hidden"))}function At(){f==null||f.classList.add("is-hidden")}
//# sourceMappingURL=main-edc7eefd.js.map
