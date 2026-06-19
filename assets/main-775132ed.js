import{a as jt}from"./vendor-f15dafc6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const It=jt.create({baseURL:"https://food-boutique.b.goit.study/api"}),C=async t=>{try{const{data:e}=await It(t);return e}catch(e){console.log(e.message)}},Ot=540,_t=t=>{switch(t){case"az":return{byABC:!0};case"za":return{byABC:!1};case"price-low-high":return{byPrice:!0};case"price-high-low":return{byPrice:!1};case"popularity":return{byPopularity:!1};default:return{}}},ut=({page:t,limit:e,keyword:s,category:r,sort:n})=>{const a=new URLSearchParams({page:String(t),limit:String(e)});return s&&a.set("keyword",s),r&&r!=="show-all"&&a.set("category",r),Object.entries(_t(n)).forEach(([o,c])=>{a.set(o,String(c))}),a},Nt=async({page:t=1,limit:e=9,keyword:s="",category:r="",sort:n=""}={})=>{var o;if(n==="newest"||n==="oldest"){const c=ut({page:1,limit:Ot,keyword:s,category:r,sort:""}),i=await C(`/products?${c.toString()}`);if(!((o=i==null?void 0:i.results)!=null&&o.length))return i;const d=[...i.results].sort((q,u)=>n==="newest"?u._id.localeCompare(q._id):q._id.localeCompare(u._id)),h=Math.ceil(d.length/e)||0,P=(t-1)*e;return{page:t,perPage:e,totalPages:h,results:d.slice(P,P+e)}}const a=ut({page:t,limit:e,keyword:s,category:r,sort:n});return await C(`/products?${a.toString()}`)},Bt=async()=>await C("/products/categories"),Mt=async()=>await C("/products/popular"),Dt=async()=>(await C("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),Rt=async(t="640c2dd963a319ea671e36ba")=>{const e=`/products/${t}`;return await C(e)},Ut=async t=>{const e=JSON.parse(localStorage.getItem("subscribers")||"[]");return e.includes(t)?{status:"conflict",message:"Email already exists"}:(e.push(t),localStorage.setItem("subscribers",JSON.stringify(e)),{status:"success",message:"Subscribed successfully"})},zt=document.querySelector(".all-cards");function b(t,e=!1){const s=zt.querySelectorAll(`[data-product-id="${t}"]`);s.length&&s.forEach(r=>{r.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${e?"check":"shopping-cart"}`)})}const ot="cart",ct=t=>{localStorage.setItem(ot,JSON.stringify(t))},R=()=>{window.dispatchEvent(new CustomEvent("cart-updated",{detail:{cart:g()}}))},g=()=>{const t=localStorage.getItem(ot);return t?JSON.parse(t):[]},$=t=>{const e=g();e.push(t),ct(e),R()},U=t=>{const s=g().filter(r=>t!==r._id);ct(s),R()},Ht=t=>{const e=g(),s=e.findIndex(r=>r._id===t);s!==-1&&(e.splice(s,1),ct(e),R())},Ft=()=>{localStorage.removeItem(ot),R()},L=t=>g().some(s=>s._id===t),Jt=()=>g().length,Vt=t=>{const{category:e,img:s,is10PercentOff:r,name:n,desc:a,popularity:o,price:c,size:i,_id:d}=t,h=document.createElement("img");h.src=s,h.alt=n,h.classList.add("card-img-modal");const P=document.createElement("p");P.innerHTML=r?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,P.classList.add("price-modal");const q=L(d),u=document.createElement("button");u.setAttribute("type","button"),u.textContent=q?"Remove from":"Add to",u.classList.add("cart-add");const k=document.createElement("svg");k.setAttribute("width","20px");const F=document.createElement("use");F.setAttribute("href","../img/icons.svg#shopping-cart");const xt=()=>{const Z=L(d);return Z?(u.textContent="Add to",b(d,!Z),U(d)):(u.textContent="Remove from",b(d,!Z),$(t))};u.addEventListener("click",xt),k.insertAdjacentElement("beforeend",F),u.insertAdjacentElement("beforeend",k),k.classList.add("cart-svg-modal"),F.classList.add("cart-use");const T=document.createElement("div");T.insertAdjacentElement("beforeend",P),T.insertAdjacentElement("beforeend",u),T.classList.add("div-price");const J=document.createElement("h3");J.textContent=n,J.classList.add("product-name");const V=document.createElement("p");V.textContent=a,V.classList.add("modal-text");const K=document.createElement("span"),G=document.createElement("span");K.textContent="Category: ",G.textContent=e.split("_").join(" "),K.classList.add("prod-info-modal"),G.classList.add("prod-info-api-modal");const W=document.createElement("span"),Y=document.createElement("span");W.textContent="Size: ",Y.textContent=i,W.classList.add("prod-info-modal"),Y.classList.add("prod-info-api-modal");const Q=document.createElement("span"),X=document.createElement("span");Q.textContent="Popularity: ",X.textContent=o,Q.classList.add("prod-info-modal"),X.classList.add("prod-info-api-modal");const l=document.createElement("div");return l.classList.add("wrapper"),l.insertAdjacentElement("beforeend",h),l.insertAdjacentElement("beforeend",J),l.insertAdjacentElement("beforeend",K),l.insertAdjacentElement("beforeend",G),l.insertAdjacentElement("beforeend",W),l.insertAdjacentElement("beforeend",Y),l.insertAdjacentElement("beforeend",Q),l.insertAdjacentElement("beforeend",X),l.insertAdjacentElement("beforeend",V),l.insertAdjacentElement("beforeend",T),l},it=document.querySelector("[data-modal]"),Kt=document.querySelector("[data-modal-window]"),Gt=document.querySelector(".close-modal");let st;const wt=()=>{it.classList.add("is-hidden"),st.remove()},Wt=t=>{t.currentTarget===t.target&&wt()};Gt.addEventListener("click",wt);it.addEventListener("click",Wt);const dt=async t=>{it.classList.remove("is-hidden");const e=await Rt(t);st=Vt(e),Kt.insertAdjacentElement("beforeend",st)},A=4,$t="productsCurrentPage",Yt="(min-width: 768px)",Qt=5,Xt=9,tt=document.querySelector(".pages-list"),et=document.querySelector(".pagination"),_=document.querySelector(".turn-page-buttons");let m=1,z=1,S=null,pt=!1;const H=()=>window.matchMedia(Yt).matches?Xt:Qt,lt=()=>{const t=Number(sessionStorage.getItem($t));return t>0?t:1},Zt=t=>{sessionStorage.setItem($t,String(t))},te=(t,e)=>{if(e<=A)return Array.from({length:e},(a,o)=>o+1);let s=t-Math.floor(A/2),r=s+A-1;s<1&&(s=1,r=A),r>e&&(r=e,s=e-A+1);const n=[];s>1&&(n.push(1),s>2&&n.push("ellipsis"));for(let a=s;a<=r;a+=1)n.push(a);return r<e&&(r<e-1&&n.push("ellipsis"),n.push(e)),n},qt=()=>{const t=document.querySelector(".main-cards-list");!t||!et||t.nextElementSibling===et||t.insertAdjacentElement("afterend",et)},ee=()=>{if(!_)return;_.querySelectorAll("[data-action]").forEach(e=>{const s=e.dataset.action;if(s==="first"||s==="prev"){e.disabled=m<=1;return}(s==="next"||s==="last")&&(e.disabled=m>=z)})},se=()=>{if(!tt)return;const t=te(m,z);tt.innerHTML=t.map(e=>{if(e==="ellipsis")return'<li class="pages-item pages-ellipsis">...</li>';const s=e===m;return`<li class="pages-item">
        <button
          type="button"
          class="pages-btn${s?" pages-btn-active":""}"
          data-page="${e}"
          aria-label="Page ${e}"
          ${s?'aria-current="page"':""}
        >
          ${e}
        </button>
      </li>`}).join(""),tt.querySelectorAll("[data-page]").forEach(e=>{e.addEventListener("click",()=>{const s=Number(e.dataset.page);s!==m&&(S==null||S(s))})})},ne=(t,e)=>{m=t,z=e,Zt(t),qt(),se(),ee()},re=t=>{const e=t.target.closest("[data-action]");if(!e||e.disabled)return;const s=e.dataset.action;let r=m;switch(s){case"first":r=1;break;case"prev":r=m-1;break;case"next":r=m+1;break;case"last":r=z;break;default:return}r!==m&&(S==null||S(r))},ae=t=>{S=t,!pt&&(pt=!0,qt(),_&&_.addEventListener("click",re))},oe=t=>t.map(({category:e,img:s,is10PercentOff:r,name:n,popularity:a,price:o,size:c,_id:i})=>`<li class="list-card-style" data-product-id="${i}">
        
          <svg class="disc-icon-svg ${r?"icon-visible":"icon-hidden"}" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${s}" alt="${n}" /></div>
  <div class="description">
    <h3 class="product-name">${n}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${e.split("_").join(" ")}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${c}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${a}</span>
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
</li>`).join(""),ce=(t,e)=>{t.querySelectorAll(".list-card-style").forEach(r=>{r.addEventListener("click",n=>{const a=r.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const o=e.find(c=>c._id===a);if(!L(a)){$(o),b(a,!0);return}U(a),b(a,!1);return}dt(a)})}),e.forEach(({_id:r})=>{L(r)&&b(r,!0)})},ie=()=>{const t=document.createElement("div");return t.className="filters-empty",t.innerHTML=`
    <p class="filters-empty-title">Nothing was found for the selected filters...</p>
    <p class="filters-empty-text">
      Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
  `,t},mt=async(t=1,e=H(),s={})=>{const{results:r,totalPages:n,page:a}=await Nt({page:t,limit:e,...s});if(!(r!=null&&r.length))return{cardList:ie(),totalPages:0,currentPage:1,isEmpty:!0};const o=document.createElement("ul");return o.classList.add("main-cards-list"),o.innerHTML=oe(r),ce(o,r),{cardList:o,totalPages:n,currentPage:a,isEmpty:!1}},p=document.querySelector("#search"),v=document.querySelector("#category"),w=document.querySelector("#sort"),j={keyword:"",category:"",sort:""};let x=null;const de=()=>({...j}),le=t=>t.split("_").join(" "),ue=t=>{v&&(v.innerHTML=`
    <option value="" disabled selected>Categories</option>
    <option value="show-all">Show all</option>
  `,t.forEach(e=>{const s=document.createElement("option");s.value=e,s.textContent=le(e),v.append(s)}))},pe=async()=>{const t=await Bt();t!=null&&t.length&&ue(t)},me=t=>{if(x=t,!p&&!v&&!w)return;pe();const e=p==null?void 0:p.closest("form");let s;const r=()=>{x==null||x(1)},n=()=>{j.keyword=(p==null?void 0:p.value.trim())||"",r()};p==null||p.addEventListener("input",()=>{clearTimeout(s),s=setTimeout(n,300)}),e==null||e.addEventListener("submit",a=>{a.preventDefault(),clearTimeout(s),n()}),v==null||v.addEventListener("change",()=>{const{value:a}=v;j.category=a==="show-all"||a===""?"":a,r()}),w==null||w.addEventListener("change",()=>{j.sort=w.value||"",r()})},ft=document.querySelector(".prod-cart-title"),E=document.querySelector("[data-cart-list]"),N=document.querySelector("[data-cart-empty]"),B=document.querySelector("[data-cart-summary]"),M=document.querySelector("[data-cart-total]"),gt=document.querySelector(".delete-all-btn");let yt=!1;const fe=()=>{const t=g(),e=new Map;t.forEach(n=>{if(!n||!n._id)return;const a=n._id,o=Number(n.price)||0;if(!e.has(a)){e.set(a,{product:n,quantity:1,subtotal:o});return}const c=e.get(a);c.quantity+=1,c.subtotal+=o});const s=Array.from(e.values()),r=s.reduce((n,a)=>n+a.subtotal,0);return{items:s,total:r}},ge=()=>{if(!E||!N||!B||!M)return;const{items:t,total:e}=fe();N.style.display="none",B.style.display="";const s=t.map(({product:r,quantity:n,subtotal:a})=>{const{img:o,name:c,price:i,_id:d}=r;return`<div class="cart-item" data-cart-item data-product-id="${d}">
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
            &dollar;${a.toFixed(2)}
          </p>
        </div>
      </div>`}).join("");E.innerHTML=s,M.textContent=`$${e.toFixed(2)}`},ye=()=>{!E||!N||!B||!M||(E.innerHTML="",N.style.display="",B.style.display="none",M.textContent="$0.00")},be=t=>{const e=t.target.closest("button");if(!e||!E||!E.contains(e))return;const s=e.closest("[data-cart-item]");if(!s)return;const r=s.dataset.productId;if(r){if(e.hasAttribute("data-cart-increase")){const a=g().find(o=>o&&o._id===r);a&&($(a),D());return}e.hasAttribute("data-cart-decrease")&&(Ht(r),D())}},he=()=>{yt||(yt=!0,gt&&gt.addEventListener("click",()=>{Ft(),D()}),E&&E.addEventListener("click",be))};function D(){const t=g();ft&&(ft.textContent=`CART (${t.length})`),he(),t.length>0?ge():ye()}const ve=async()=>{const t=await Mt(),e=t.map(({category:n,img:a,name:o,popularity:c,size:i,_id:d})=>{const h=L(d);return`<li class="popular-card-style" data-product-id="${d}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${a}" alt="${o}" /></div>

  <div class="popular-description">
    <h3 class="product-name-pop">${o}</h3>

      <span class="prod-info">Category: </span><span class="prod-info-api">${n.split("_").join(" ")}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${i}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${c}</span>

  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
      <use href="../img/icons.svg#${h?"check":"shopping-cart"}"></use>
    </svg>
    </button>
  </div>
  </div>
      </li>
  `}).join(""),s=document.createElement("ul");return s.innerHTML=e,s.classList.add("popular-list"),s.querySelectorAll(".popular-card-style").forEach(n=>{n.addEventListener("click",a=>{const o=n.dataset.productId;if(a.target.nodeName==="BUTTON"||a.target.nodeName==="svg"||a.target.nodeName==="use"){const c=t.find(d=>d._id===o),i=n.querySelector(".popular-btn-svg use");if(!L(o)){$(c),b(o,!0),i&&i.setAttribute("href","../img/icons.svg#check");return}U(o),b(o,!1),i&&i.setAttribute("href","../img/icons.svg#shopping-cart");return}dt(o)})}),s},Ee=async()=>{const t=await Dt(),e=t.map(({img:n,name:a,price:o,_id:c})=>`<li class="discount-list-card" data-product-id="${c}">
        <div lass="discount-svg">
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="discount-card-img"><img class="discount-img" src="${n}" alt="${a}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${a}</h3>
    <p class="discount-price">&dollar;${o}</p>

    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `).join(""),s=document.createElement("ul");return s.innerHTML=e,s.classList.add("discount-list"),s.querySelectorAll(".discount-list-card").forEach(n=>{n.addEventListener("click",a=>{const o=n.dataset.productId;if(a.target.nodeName==="BUTTON"||a.target.nodeName==="svg"||a.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!L(o)){$(c),b(o,!0);return}U(o),b(o,!1);return}dt(o)})}),s},I=document.querySelector(".main-cards"),bt=document.querySelector(".popular"),ht=document.querySelector(".discount"),vt=document.querySelector(".pagination");let Et=H();const Se=t=>{var e,s;(e=I.querySelector(".main-cards-list"))==null||e.remove(),(s=I.querySelector(".filters-empty"))==null||s.remove(),I.insertAdjacentElement("beforeend",t)},Le=t=>{vt&&(vt.style.display=t>0?"":"none")},O=async(t=lt())=>{const e=H(),s=de();let{cardList:r,totalPages:n,currentPage:a}=await mt(t,e,s);n>0&&t>n&&({cardList:r,totalPages:n,currentPage:a}=await mt(n,e,s)),Se(r),Le(n),ne(a,n)},Pe=()=>{const t=H();t!==Et&&(Et=t,O(lt()))};async function Ce(){const t=document.createElement("h2");t.textContent="All Products",t.classList.add("hiden-title"),I.insertAdjacentElement("afterbegin",t),ae(O),me(O),await O(lt());let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(Pe,200)});const s=await ve();bt.insertAdjacentElement("beforeend",s);const r=document.createElement("h2");r.textContent="Popular Products",r.classList.add("heading-pop"),bt.insertAdjacentElement("afterbegin",r);const n=await Ee();ht.insertAdjacentElement("beforeend",n);const a=document.createElement("h2");a.textContent="Discount Products",a.classList.add("heading-disc"),ht.insertAdjacentElement("afterbegin",a)}document.title==="Food Boutique 💙💛"?Ce():D();const nt=document.querySelector(".form"),y=document.querySelector("[data-subscribe-modal]"),St=document.querySelector("[data-subscribe-close]"),Lt=document.getElementById("subscribe-success"),Pt=document.getElementById("subscribe-error");nt&&nt.addEventListener("submit",Ae);St&&St.addEventListener("click",kt);y==null||y.addEventListener("click",t=>{t.target===y&&kt()});async function Ae(t){t.preventDefault();const e=nt.querySelector('input[name="subscribe"]'),s=e.value.trim();if(!s){alert("Please enter an email address");return}try{const r=await Ut(s);r.status==="conflict"?Ct("error"):r.status==="success"&&(Ct("success"),e.value="")}catch(r){console.error("Subscription error:",r),alert("An error occurred. Please try again.")}}function Ct(t){y&&(Lt.classList.add("is-hidden"),Pt.classList.add("is-hidden"),t==="success"?Lt.classList.remove("is-hidden"):t==="error"&&Pt.classList.remove("is-hidden"),y.classList.remove("is-hidden"))}function kt(){y==null||y.classList.add("is-hidden")}const rt=document.getElementById("checkout-form"),f=document.querySelector("[data-order-modal]"),At=document.querySelector("[data-order-close]");rt&&rt.addEventListener("submit",we);At&&At.addEventListener("click",Tt);f==null||f.addEventListener("click",t=>{t.target===f&&Tt()});async function we(t){t.preventDefault();const e=rt.querySelector('input[name="checkout-email"]'),s=e.value.trim(),r=g();if(!s){alert("Please enter an email address");return}if(r.length===0){alert("Your cart is empty");return}try{const n={email:s,items:r,orderDate:new Date().toISOString()};localStorage.setItem("lastOrder",JSON.stringify(n)),localStorage.setItem("cart",JSON.stringify([])),$e(),e.value=""}catch(n){console.error("Checkout error:",n),alert("An error occurred. Please try again.")}}function $e(){f==null||f.classList.remove("is-hidden")}function Tt(){qe(),location.reload()}function qe(){f==null||f.classList.add("is-hidden")}const at=()=>{const t=document.querySelector(".name-cart");if(t){const e=Jt();t.textContent=`Cart (${e})`}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",at):at();window.addEventListener("cart-updated",at);
//# sourceMappingURL=main-775132ed.js.map
