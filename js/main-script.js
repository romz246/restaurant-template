const navLinks = document.querySelectorAll(".nav-links a");
const currentLocation = location.href;
const navLinksLength = navLinks.length;

const hamburgerBtn = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".nav-links");

const scrollToTopBtn = document.getElementById("scroll-to-top-button");
const showOnPx = 500;

const body = document.querySelector("body");

// Nav Links active function

for (let i = 0; i < navLinksLength; i++) {
	if (navLinks[i].href === currentLocation) {
		navLinks[i].className = "active";
	}
}
// Hamburger Menu function

hamburgerBtn.addEventListener("click", () => {
	if (menu !== "show") {
		menu.classList.toggle("show");
		body.classList.toggle("fixed-position");
	}
});

// Scroll To The Top function

const scrollContainer = () => {
	return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
	if (scrollContainer().scrollTop > showOnPx) {
		scrollToTopBtn.classList.add("show");
	} else {
		scrollToTopBtn.classList.remove("show");
	}
});

const goToTop = () => {
	document.body.scrollIntoView({
		behavior: "smooth",
	});
};

scrollToTopBtn.addEventListener("click", goToTop);
