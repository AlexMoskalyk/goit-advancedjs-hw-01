import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as m}from"./assets/vendor-78be7656.js";const r=document.querySelector(".feedback-form"),t=r.querySelector('input[name="email"]'),a=r.querySelector('textarea[name="message"]'),s="feedback-form-state";function l(){const e={email:t.value.trim(),message:a.value.trim()};localStorage.setItem(s,JSON.stringify(e))}function n(){const e=localStorage.getItem(s);if(e){const o=JSON.parse(e);t.value=o.email,a.value=o.message}}t.addEventListener("input",m(l,500));a.addEventListener("input",m(l,500));n();r.addEventListener("submit",e=>{e.preventDefault();const o={email:t.value,message:a.value};console.log(o),localStorage.removeItem(s),t.value="",a.value=""});
//# sourceMappingURL=commonHelpers3.js.map
