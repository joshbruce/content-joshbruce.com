window.onload=function(){document.querySelector("#main-nav-form > form > button").style.display="none",document.getElementById("change-page-select").onchange=function(e){const n=e.target,t=n.options[n.selectedIndex];window.location.pathname=t.getAttribute("value")}};