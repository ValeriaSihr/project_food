import{a as Tt}from"./vendor-f15dafc6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const jt=Tt.create({baseURL:"https://food-boutique.b.goit.study/api"}),A=async t=>{try{const{data:e}=await jt(t);return e}catch(e){console.log(e.message)}},xt=1e3,It=t=>{switch(t){case"az":return{byABC:!0};case"za":return{byABC:!1};case"price-low-high":return{byPrice:!0};case"price-high-low":return{byPrice:!1};case"popularity":return{byPopularity:!1};default:return{}}},dt=({page:t,limit:e,keyword:s,category:r,sort:n})=>{const a=new URLSearchParams({page:String(t),limit:String(e)});return s&&a.set("keyword",s),r&&r!=="show-all"&&a.set("category",r),Object.entries(It(n)).forEach(([o,c])=>{a.set(o,String(c))}),a},Ot=async({page:t=1,limit:e=9,keyword:s="",category:r="",sort:n=""}={})=>{var o;if(n==="newest"||n==="oldest"){const c=dt({page:1,limit:xt,keyword:s,category:r,sort:""}),i=await A(`/products?${c.toString()}`);if(!((o=i==null?void 0:i.results)!=null&&o.length))return i;const d=[...i.results].sort((q,u)=>n==="newest"?u._id.localeCompare(q._id):q._id.localeCompare(u._id)),b=Math.ceil(d.length/e)||0,P=(t-1)*e;return{page:t,perPage:e,totalPages:b,results:d.slice(P,P+e)}}const a=dt({page:t,limit:e,keyword:s,category:r,sort:n});return await A(`/products?${a.toString()}`)},_t=async()=>await A("/products/categories"),Nt=async()=>await A("/products/popular"),Bt=async()=>(await A("/products/discount")).toSorted(()=>Math.random()-.5).slice(0,2),Mt=async(t="640c2dd963a319ea671e36ba")=>{const e=`/products/${t}`;return await A(e)},Rt=async t=>{const e=JSON.parse(localStorage.getItem("subscribers")||"[]");return e.includes(t)?{status:"conflict",message:"Email already exists"}:(e.push(t),localStorage.setItem("subscribers",JSON.stringify(e)),{status:"success",message:"Subscribed successfully"})},Dt=document.querySelector(".all-cards");function y(t,e=!1){const s=Dt.querySelectorAll(`[data-product-id="${t}"]`);s.length&&s.forEach(r=>{r.querySelector("button").children[0].children[0].setAttribute("href",`./img/icons.svg#${e?"check":"shopping-cart"}`)})}const rt="cart",at=t=>{localStorage.setItem(rt,JSON.stringify(t))},E=()=>{const t=localStorage.getItem(rt);return t?JSON.parse(t):[]},$=t=>{const e=E();e.push(t),at(e)},D=t=>{const s=E().filter(r=>t!==r._id);at(s)},Ut=t=>{const e=E(),s=e.findIndex(r=>r._id===t);s!==-1&&(e.splice(s,1),at(e))},zt=()=>{localStorage.removeItem(rt),typeof window<"u"&&window.dispatchEvent(new CustomEvent("cart-updated",{detail:{cart:[]}}))},L=t=>E().some(s=>s._id===t),Ht=t=>{const{category:e,img:s,is10PercentOff:r,name:n,desc:a,popularity:o,price:c,size:i,_id:d}=t,b=document.createElement("img");b.src=s,b.alt=n,b.classList.add("card-img-modal");const P=document.createElement("p");P.innerHTML=r?`<span class="old-price">&dollar;${(c/.9).toFixed(2)}</span>&dollar;${c}`:`&dollar;${c}`,P.classList.add("price-modal");const q=L(d),u=document.createElement("button");u.setAttribute("type","button"),u.textContent=q?"Remove from":"Add to",u.classList.add("cart-add");const k=document.createElement("svg");k.setAttribute("width","20px");const H=document.createElement("use");H.setAttribute("href","../img/icons.svg#shopping-cart");const kt=()=>{const X=L(d);return X?(u.textContent="Add to",y(d,!X),D(d)):(u.textContent="Remove from",y(d,!X),$(t))};u.addEventListener("click",kt),k.insertAdjacentElement("beforeend",H),u.insertAdjacentElement("beforeend",k),k.classList.add("cart-svg-modal"),H.classList.add("cart-use");const T=document.createElement("div");T.insertAdjacentElement("beforeend",P),T.insertAdjacentElement("beforeend",u),T.classList.add("div-price");const F=document.createElement("h3");F.textContent=n,F.classList.add("product-name");const J=document.createElement("p");J.textContent=a,J.classList.add("modal-text");const V=document.createElement("span"),K=document.createElement("span");V.textContent="Category: ",K.textContent=e.split("_").join(" "),V.classList.add("prod-info-modal"),K.classList.add("prod-info-api-modal");const G=document.createElement("span"),W=document.createElement("span");G.textContent="Size: ",W.textContent=i,G.classList.add("prod-info-modal"),W.classList.add("prod-info-api-modal");const Y=document.createElement("span"),Q=document.createElement("span");Y.textContent="Popularity: ",Q.textContent=o,Y.classList.add("prod-info-modal"),Q.classList.add("prod-info-api-modal");const l=document.createElement("div");return l.classList.add("wrapper"),l.insertAdjacentElement("beforeend",b),l.insertAdjacentElement("beforeend",F),l.insertAdjacentElement("beforeend",V),l.insertAdjacentElement("beforeend",K),l.insertAdjacentElement("beforeend",G),l.insertAdjacentElement("beforeend",W),l.insertAdjacentElement("beforeend",Y),l.insertAdjacentElement("beforeend",Q),l.insertAdjacentElement("beforeend",J),l.insertAdjacentElement("beforeend",T),l},ot=document.querySelector("[data-modal]"),Ft=document.querySelector("[data-modal-window]"),Jt=document.querySelector(".close-modal");let et;const At=()=>{ot.classList.add("is-hidden"),et.remove()},Vt=t=>{t.currentTarget===t.target&&At()};Jt.addEventListener("click",At);ot.addEventListener("click",Vt);const ct=async t=>{ot.classList.remove("is-hidden");const e=await Mt(t);et=Ht(e),Ft.insertAdjacentElement("beforeend",et)},C=4,Ct="productsCurrentPage",Kt="(min-width: 768px)",Gt=5,Wt=9,Z=document.querySelector(".pages-list"),tt=document.querySelector(".pagination"),_=document.querySelector(".turn-page-buttons");let m=1,U=1,S=null,lt=!1;const z=()=>window.matchMedia(Kt).matches?Wt:Gt,it=()=>{const t=Number(sessionStorage.getItem(Ct));return t>0?t:1},Yt=t=>{sessionStorage.setItem(Ct,String(t))},Qt=(t,e)=>{if(e<=C)return Array.from({length:e},(a,o)=>o+1);let s=t-Math.floor(C/2),r=s+C-1;s<1&&(s=1,r=C),r>e&&(r=e,s=e-C+1);const n=[];s>1&&(n.push(1),s>2&&n.push("ellipsis"));for(let a=s;a<=r;a+=1)n.push(a);return r<e&&(r<e-1&&n.push("ellipsis"),n.push(e)),n},wt=()=>{const t=document.querySelector(".main-cards-list");!t||!tt||t.nextElementSibling===tt||t.insertAdjacentElement("afterend",tt)},Xt=()=>{if(!_)return;_.querySelectorAll("[data-action]").forEach(e=>{const s=e.dataset.action;if(s==="first"||s==="prev"){e.disabled=m<=1;return}(s==="next"||s==="last")&&(e.disabled=m>=U)})},Zt=()=>{if(!Z)return;const t=Qt(m,U);Z.innerHTML=t.map(e=>{if(e==="ellipsis")return'<li class="pages-item pages-ellipsis">...</li>';const s=e===m;return`<li class="pages-item">
        <button
          type="button"
          class="pages-btn${s?" pages-btn-active":""}"
          data-page="${e}"
          aria-label="Page ${e}"
          ${s?'aria-current="page"':""}
        >
          ${e}
        </button>
      </li>`}).join(""),Z.querySelectorAll("[data-page]").forEach(e=>{e.addEventListener("click",()=>{const s=Number(e.dataset.page);s!==m&&(S==null||S(s))})})},te=(t,e)=>{m=t,U=e,Yt(t),wt(),Zt(),Xt()},ee=t=>{const e=t.target.closest("[data-action]");if(!e||e.disabled)return;const s=e.dataset.action;let r=m;switch(s){case"first":r=1;break;case"prev":r=m-1;break;case"next":r=m+1;break;case"last":r=U;break;default:return}r!==m&&(S==null||S(r))},se=t=>{S=t,!lt&&(lt=!0,wt(),_&&_.addEventListener("click",ee))},ne=t=>t.map(({category:e,img:s,is10PercentOff:r,name:n,popularity:a,price:o,size:c,_id:i})=>`<li class="list-card-style" data-product-id="${i}">
        
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
</li>`).join(""),re=(t,e)=>{t.querySelectorAll(".list-card-style").forEach(r=>{r.addEventListener("click",n=>{const a=r.dataset.productId;if(n.target.nodeName==="BUTTON"||n.target.nodeName==="svg"||n.target.nodeName==="use"){const o=e.find(c=>c._id===a);if(!L(a)){$(o),y(a,!0);return}D(a),y(a,!1);return}ct(a)})}),e.forEach(({_id:r})=>{L(r)&&y(r,!0)})},ae=()=>{const t=document.createElement("div");return t.className="filters-empty",t.innerHTML=`
    <p class="filters-empty-title">Nothing was found for the selected filters...</p>
    <p class="filters-empty-text">
      Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
  `,t},ut=async(t=1,e=z(),s={})=>{const{results:r,totalPages:n,page:a}=await Ot({page:t,limit:e,...s});if(!(r!=null&&r.length))return{cardList:ae(),totalPages:0,currentPage:1,isEmpty:!0};const o=document.createElement("ul");return o.classList.add("main-cards-list"),o.innerHTML=ne(r),re(o,r),{cardList:o,totalPages:n,currentPage:a,isEmpty:!1}},p=document.querySelector("#search"),h=document.querySelector("#category"),w=document.querySelector("#sort"),x={keyword:"",category:"",sort:""};let j=null;const oe=()=>({...x}),ce=t=>t.split("_").join(" "),ie=t=>{h&&(h.innerHTML=`
    <option value="" disabled selected>Categories</option>
    <option value="show-all">Show all</option>
  `,t.forEach(e=>{const s=document.createElement("option");s.value=e,s.textContent=ce(e),h.append(s)}))},de=async()=>{const t=await _t();t!=null&&t.length&&ie(t)},le=t=>{if(j=t,!p&&!h&&!w)return;de();const e=p==null?void 0:p.closest("form");let s;const r=()=>{j==null||j(1)},n=()=>{x.keyword=(p==null?void 0:p.value.trim())||"",r()};p==null||p.addEventListener("input",()=>{clearTimeout(s),s=setTimeout(n,300)}),e==null||e.addEventListener("submit",a=>{a.preventDefault(),clearTimeout(s),n()}),h==null||h.addEventListener("change",()=>{const{value:a}=h;x.category=a==="show-all"||a===""?"":a,r()}),w==null||w.addEventListener("change",()=>{x.sort=w.value||"",r()})},pt=document.querySelector(".prod-cart-title"),v=document.querySelector("[data-cart-list]"),N=document.querySelector("[data-cart-empty]"),B=document.querySelector("[data-cart-summary]"),M=document.querySelector("[data-cart-total]"),mt=document.querySelector(".delete-all-btn");let ft=!1;const ue=()=>{const t=E(),e=new Map;t.forEach(n=>{if(!n||!n._id)return;const a=n._id,o=Number(n.price)||0;if(!e.has(a)){e.set(a,{product:n,quantity:1,subtotal:o});return}const c=e.get(a);c.quantity+=1,c.subtotal+=o});const s=Array.from(e.values()),r=s.reduce((n,a)=>n+a.subtotal,0);return{items:s,total:r}},pe=()=>{if(!v||!N||!B||!M)return;const{items:t,total:e}=ue();N.style.display="none",B.style.display="";const s=t.map(({product:r,quantity:n,subtotal:a})=>{const{img:o,name:c,price:i,_id:d}=r;return`<div class="cart-item" data-cart-item data-product-id="${d}">
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
      </div>`}).join("");v.innerHTML=s,M.textContent=`$${e.toFixed(2)}`},me=()=>{!v||!N||!B||!M||(v.innerHTML="",N.style.display="",B.style.display="none",M.textContent="$0.00")},fe=t=>{const e=t.target.closest("button");if(!e||!v||!v.contains(e))return;const s=e.closest("[data-cart-item]");if(!s)return;const r=s.dataset.productId;if(r){if(e.hasAttribute("data-cart-increase")){const a=E().find(o=>o&&o._id===r);a&&($(a),R());return}e.hasAttribute("data-cart-decrease")&&(Ut(r),R())}},ge=()=>{ft||(ft=!0,mt&&mt.addEventListener("click",()=>{zt(),R()}),v&&v.addEventListener("click",fe))};function R(){const t=E();pt&&(pt.textContent=`CART (${t.length})`),ge(),t.length>0?pe():me()}const ye=async()=>{const t=await Nt(),e=t.map(({category:n,img:a,name:o,popularity:c,size:i,_id:d})=>{const b=L(d);return`<li class="popular-card-style" data-product-id="${d}">
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
      <use href="../img/icons.svg#${b?"check":"shopping-cart"}"></use>
    </svg>
    </button>
  </div>
  </div>
      </li>
  `}).join(""),s=document.createElement("ul");return s.innerHTML=e,s.classList.add("popular-list"),s.querySelectorAll(".popular-card-style").forEach(n=>{n.addEventListener("click",a=>{const o=n.dataset.productId;if(a.target.nodeName==="BUTTON"||a.target.nodeName==="svg"||a.target.nodeName==="use"){const c=t.find(d=>d._id===o),i=n.querySelector(".popular-btn-svg use");if(!L(o)){$(c),y(o,!0),i&&i.setAttribute("href","../img/icons.svg#check");return}D(o),y(o,!1),i&&i.setAttribute("href","../img/icons.svg#shopping-cart");return}ct(o)})}),s},be=async()=>{const t=await Bt(),e=t.map(({img:n,name:a,price:o,_id:c})=>`<li class="discount-list-card" data-product-id="${c}">
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
  `).join(""),s=document.createElement("ul");return s.innerHTML=e,s.classList.add("discount-list"),s.querySelectorAll(".discount-list-card").forEach(n=>{n.addEventListener("click",a=>{const o=n.dataset.productId;if(a.target.nodeName==="BUTTON"||a.target.nodeName==="svg"||a.target.nodeName==="use"){const c=t.find(i=>i._id===o);if(!L(o)){$(c),y(o,!0);return}D(o),y(o,!1);return}ct(o)})}),s},I=document.querySelector(".main-cards"),gt=document.querySelector(".popular"),yt=document.querySelector(".discount"),bt=document.querySelector(".pagination");let ht=z();const he=t=>{var e,s;(e=I.querySelector(".main-cards-list"))==null||e.remove(),(s=I.querySelector(".filters-empty"))==null||s.remove(),I.insertAdjacentElement("beforeend",t)},ve=t=>{bt&&(bt.style.display=t>0?"":"none")},O=async(t=it())=>{const e=z(),s=oe();let{cardList:r,totalPages:n,currentPage:a}=await ut(t,e,s);n>0&&t>n&&({cardList:r,totalPages:n,currentPage:a}=await ut(n,e,s)),he(r),ve(n),te(a,n)},Ee=()=>{const t=z();t!==ht&&(ht=t,O(it()))};async function Se(){const t=document.createElement("h2");t.textContent="All Products",t.classList.add("hiden-title"),I.insertAdjacentElement("afterbegin",t),se(O),le(O),await O(it());let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(Ee,200)});const s=await ye();gt.insertAdjacentElement("beforeend",s);const r=document.createElement("h2");r.textContent="Popular Products",r.classList.add("heading-pop"),gt.insertAdjacentElement("afterbegin",r);const n=await be();yt.insertAdjacentElement("beforeend",n);const a=document.createElement("h2");a.textContent="Discount Products",a.classList.add("heading-disc"),yt.insertAdjacentElement("afterbegin",a)}document.title==="Food Boutique 💙💛"?Se():R();const st=document.querySelector(".form"),g=document.querySelector("[data-subscribe-modal]"),vt=document.querySelector("[data-subscribe-close]"),Et=document.getElementById("subscribe-success"),St=document.getElementById("subscribe-error");st&&st.addEventListener("submit",Le);vt&&vt.addEventListener("click",$t);g==null||g.addEventListener("click",t=>{t.target===g&&$t()});async function Le(t){t.preventDefault();const e=st.querySelector('input[name="subscribe"]'),s=e.value.trim();if(!s){alert("Please enter an email address");return}try{const r=await Rt(s);r.status==="conflict"?Lt("error"):r.status==="success"&&(Lt("success"),e.value="")}catch(r){console.error("Subscription error:",r),alert("An error occurred. Please try again.")}}function Lt(t){g&&(Et.classList.add("is-hidden"),St.classList.add("is-hidden"),t==="success"?Et.classList.remove("is-hidden"):t==="error"&&St.classList.remove("is-hidden"),g.classList.remove("is-hidden"))}function $t(){g==null||g.classList.add("is-hidden")}const nt=document.getElementById("checkout-form"),f=document.querySelector("[data-order-modal]"),Pt=document.querySelector("[data-order-close]");nt&&nt.addEventListener("submit",Pe);Pt&&Pt.addEventListener("click",qt);f==null||f.addEventListener("click",t=>{t.target===f&&qt()});async function Pe(t){t.preventDefault();const e=nt.querySelector('input[name="checkout-email"]'),s=e.value.trim(),r=E();if(!s){alert("Please enter an email address");return}if(r.length===0){alert("Your cart is empty");return}try{const n={email:s,items:r,orderDate:new Date().toISOString()};localStorage.setItem("lastOrder",JSON.stringify(n)),localStorage.setItem("cart",JSON.stringify([])),Ae(),e.value=""}catch(n){console.error("Checkout error:",n),alert("An error occurred. Please try again.")}}function Ae(){f==null||f.classList.remove("is-hidden")}function qt(){Ce(),location.reload()}function Ce(){f==null||f.classList.add("is-hidden")}
//# sourceMappingURL=main-3832f50f.js.map
