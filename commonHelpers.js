import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector(".search-input");c.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1});function d(){c.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/bi_x-octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function m(i){i.length<=0&&d();const r=document.querySelector(".gallery-list"),o=i.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:u,comments:f,downloads:p})=>`<li class="image-card">
              <img src="${s}" width="360" height="200" class="image-card__thumb" alt="${t}">
              <ul class="image-card__footer">
                <li>
                    <p>Likes</p>
                    <p>${n}</p>
                </li>
                <li>
                    <p>Views</p>
                    <p>${u}</p>
                </li>
                <li>
                    <p>Comments</p>
                    <p>${f}</p>
                </li>
                <li>
                    <p>Downloads</p>
                    <p>${p}</p>
                </li>
              </ul>
          </li>`).join("");r.insertAdjacentHTML("afterbegin",o)}function g(i){const r=document.querySelector("button"),o=i.target.value;if(o)return r.classList.remove("is-disable"),r.removeAttribute("disabled",""),o;r.classList.add("is-disable"),r.setAttribute("disabled","")}const a={searchInput:document.querySelector("#search-input"),searchButton:document.querySelector("button")};let l="";a.searchInput.addEventListener("input",i=>{l=g(i)});a.searchButton.addEventListener("click",()=>{h(l)});function h(i){const r=`https://pixabay.com/api/?key=20858658-55430aeeed6a37ac1f56d3c0c&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(o.ok)return o.json()}).then(o=>{const s=o.hits;m(s)})}
//# sourceMappingURL=commonHelpers.js.map
