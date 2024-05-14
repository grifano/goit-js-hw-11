import{S as h,i as c}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function y(t){const i=`https://pixabay.com/api/?key=20858658-55430aeeed6a37ac1f56d3c0c&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(r=>{if(r.ok)return r.json()})}const l=document.querySelector("button"),n=document.querySelector(".gallery-list"),d=document.querySelector(".loader");function b(){new h(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function L(t){c.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1}),c.error({message:t,class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function v(t){t.length<=0&&L("Sorry, there are no images matching your search query. Please try again!");const i=t.map(({webformatURL:r,largeImageURL:o,tags:e,likes:s,views:a,comments:g,downloads:p})=>`<li class="image-card">
              <a href="${o}" class="image-card-link"><img src="${r}" width="360" height="200" class="image-card-thumb" alt="${e}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${s}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${a}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${g}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${p}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");n.innerHTML="",n.insertAdjacentHTML("afterbegin",i),b()}function S(t){const i=t.target.value;if(i&&i.trim().length>0)return l.classList.remove("is-disable"),l.removeAttribute("disabled",""),i;l.classList.add("is-disable"),l.setAttribute("disabled","")}function u(t){t?d.classList.add("is-active"):d.classList.remove("is-active")}const m={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list")};let f="";m.searchInput.addEventListener("input",t=>{f=S(t)});m.searchForm.addEventListener("submit",t=>{t.preventDefault(),u(!0),setTimeout(()=>{y(f).then(i=>{const r=i.hits;v(r),u(!1)}).catch(i=>console.log(i))},1e3)});
//# sourceMappingURL=commonHelpers.js.map
