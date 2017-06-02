window.onscroll = function() {changeNavbar()};

function changeNavbar() {
	if (document.body.scrollTop <= 100) {
		$(".navbar-default").css("background-color", "transparent");
		$(".navbar-default").css("border-color", "rgba(255,255,255,.3)")
	}
	else {
		$(".navbar-default").css("background-color", "#3E4551");
		$(".navbar-default").css("border-color", "#9e9e9e");
	}
}