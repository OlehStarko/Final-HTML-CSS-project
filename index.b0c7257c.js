!function(){var o;(o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")}).openModalBtn.addEventListener("click",(function(){o.modal.classList.toggle("is-hidden"),document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"})),o.closeModalBtn.addEventListener("click",(function(){o.modal.classList.toggle("is-hidden");var e=document.body.style.top;document.body.style.position="static",window.scrollTo(0,-1*parseInt(e))}));var e=document.querySelector(".backdrop-tel");document.querySelector(".tel-modal--open").addEventListener("click",(function(){e.classList.toggle("is-hidden")}))}();
//# sourceMappingURL=index.b0c7257c.js.map