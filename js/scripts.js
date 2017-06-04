window.onscroll = function() {changeNavbar()};

function changeNavbar() {
	if (document.body.scrollTop <= 100) {
		$(".navbar-default").css("background-color", "transparent");
		$(".navbar-default").css("border-color", "rgba(255,255,255,.3)");
		$(".navbar-default").css("border-bottom-width", "1px");
		$(".navbar-brand").css("color", "white");
		$(".navbar-nav > li > a").css("color", "White");
		$("#last-name").css("color", "white")
	}
	else {
		$(".navbar-default").css("background-color", "white");
		$(".navbar-default").css("border-color", "#DCDCDC");
		$(".navbar-default").css("border-bottom-width", "2px");
		$(".navbar-brand").css("color", "#2F2D2E");
		$(".navbar-nav > li > a").css("color", "#2F2D2E");
		$("#last-name").css("color", "#2D7DD2")
	}
}

$(function(){
		$("#blurb-dynamic").typed({
			strings: ["build things.", "craft experiences."],
			typeSpeed: 0
		});
	})