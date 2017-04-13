console.log("Hello World from main.js!");

var thumbnailLogo = document.querySelector(".thumbnail");

window.addEventListener("resize", resizeMenu);
thumbnailLogo.addEventListener("click", toggleMenu);

function resizeMenu () {

	console.log(window.innerWidth);

	if(window.innerWidth < 480) {
		var navItems = document.querySelector(".nav").children;
		for (var i = navItems.length - 1; i >= 0; i--) {
			if (!navItems[i].classList.contains("thumbnail")) {
				navItems[i].style.display = "none";
			}
		}
	} else if( window.innerWidth > 480) {
		var navItems = document.querySelector(".nav").children;
		for (var i = navItems.length - 1; i >= 0; i--) {
			if (!navItems[i].classList.contains("thumbnail")) {
				navItems[i].style.display = "unset";
			}
		}
	}
}
resizeMenu();

function toggleMenu () {
	if(window.innerWidth < 480) {

		var thumbnailLogo = document.querySelector(".thumbnail");
		var navItems = document.querySelector(".nav").children;
		var nav = document.querySelector(".nav");

		for (var i = navItems.length - 1; i >= 0; i--) {

			if (navItems[i].style.display == "none") {
				navItems[i].style.display = "unset";
				nav.classList.add("active");
			} else if (!navItems[i].classList.contains("thumbnail")) {
				navItems[i].style.display = "none";
				nav.classList.remove("active");

			}
		}
	}
}






