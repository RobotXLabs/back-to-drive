document.querySelector("#docs-branding-container a").href = "http://drive.google.com";
window.onload = function(){
  document.querySelector("#docs-branding-container a").setAttribute("data-tooltip", "Back to Drive");
  document.querySelector("#docs-branding-container a").setAttribute("aria-label", "Back to Drive");
};
