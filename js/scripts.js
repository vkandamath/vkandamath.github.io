window.onscroll = function() {changeNavbar()};

function changeNavbar() {
	if (document.body.scrollTop <= 100) {
		$(".navbar-default").css("background-color", "transparent");
		$(".navbar-default").css("border-color", "rgba(255,255,255,.3)");
		$(".navbar-default").css("border-bottom-width", "1px");
		$(".navbar-brand").css("color", "white");
		$(".navbar-nav > li > a").css("color", "white");
		$(".navbar-nav > li > a").hover(function(){
		    $(this).css("color", "#2E9CCA");
		    }, function(){
		    $(this).css("color", "white");
		});
		$("#last-name").css("color", "white")
	}
	else {
		$(".navbar-default").css("background-color", "white");
		$(".navbar-default").css("border-color", "#DCDCDC");
		$(".navbar-default").css("border-bottom-width", "2px");
		$(".navbar-brand").css("color", "#252525");
		$(".navbar-nav > li > a").css("color", "#252525");
		$(".navbar-nav > li > a").hover(function(){
		    $(this).css("color", "#2E9CCA");
		    }, function(){
		    $(this).css("color", "#252525");
		});
		$("#last-name").css("color", "#2E9CCA")
	}
}

$(function(){
		$("#blurb-dynamic").typed({
			strings: ["build things.", "craft experiences."],
			typeSpeed: 0
		});

		$("#collapsed-navbar").on("show.bs.collapse", function() {
			$("#collapsed-navbar").removeClass("pull-right");
			$("#collapsed-navbar").css("background-color", "#252525");
			$("#collapsed-navbar").css("border-top", "none");
		});

		$("#collapsed-navbar").on("hidden.bs.collapse", function() {
			$("#collapsed-navbar").addClass("pull-right");
			$("#collapsed-navbar").css("background-color", "inherit");
		});
});
