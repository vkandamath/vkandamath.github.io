window.onscroll = function() {changeNavbar()};

function changeNavbar() {
	var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (bodyScrollTop <= 50) {
		$(".navbar-default").css("background-color", "transparent");
		$(".navbar-default").css("border-color", "rgba(255,255,255,.3)");
		$(".navbar-default").css("border-bottom-width", "1px");
		$(".navbar-default").css("box-shadow", "none");
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
		$(".navbar-default").css("box-shadow", "0px 1px 10px #999");
		$(".navbar-brand").css("color", "#252525");

		if ($(window).width() <= 767) {
			$(".navbar-nav > li > a").css("color", "white");
		}
		else{
			$(".navbar-nav > li > a").css("color", "#252525");
		}
		
		$(".navbar-nav > li > a").hover(function(){
		    $(this).css("color", "#2E9CCA");
		    }, function(){
		    	if ($(window).width() <= 767) {
		    		$(this).css("color", "#white");
		    	}
		    	else {
		    		$(this).css("color", "#252525");
		    	}
		});
		$("#last-name").css("color", "#2E9CCA")
	}
}

$(document).ready(function(){

	$("#blurb-dynamic").typed({
		strings: ["craft experiences.", "create new platforms.", "tackle big problems.", "evolve software."],
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

	$(window).resize(function() {
		$(".navbar-collapse").collapse('hide');
	});

	$('#full-stack').css('opacity', 0);
	var waypoint = new Waypoint({
	  element: document.getElementById('full-stack'),
	  handler: function() {
	  	$("#full-stack").addClass("fadeIn")
	  },
	  offset: '90%'
	});

	$('#side-projects').css('opacity', 0);
	var waypoint = new Waypoint({
	  element: document.getElementById('side-projects'),
	  handler: function() {
	  	setTimeout(function() {
	  		$("#side-projects").addClass("fadeIn")
	  	}, 300)
	  },
	  offset: '90%'
	});

	$('#entrepreneurship').css('opacity', 0);
	var waypoint = new Waypoint({
	  element: document.getElementById('entrepreneurship'),
	  handler: function() {
	  	setTimeout(function() {
	  		$("#entrepreneurship").addClass("fadeIn")
	  	}, 500)
	  },
	  offset: '90%'
	});

	$('#gymder').css('opacity', 0);
	var waypoint = new Waypoint({
	  element: document.getElementById('gymder'),
	  handler: function() {
	  	$("#gymder").addClass("fadeIn")
	  },
	  offset: '90%'
	});

	$('#tempo-tunes').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('tempo-tunes'),
	  handler: function() {
	  	$("#tempo-tunes").addClass("fadeIn")
	  },
	  offset: '90%'
	});

	$('#chatterbox').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('chatterbox'),
	  handler: function() {
	  	$("#chatterbox").addClass("fadeIn")
	  },
	  offset: '90%'
	});

	$('#tickertrack').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('tickertrack'),
	  handler: function() {
	  	$("#tickertrack").addClass("fadeIn")
	  },
	  offset: '90%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('md-research-center'),
	  handler: function() {
	  	$("#md-research-center").addClass("fadeInRight")
	  },
	  offset: '100%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('afs1'),
	  handler: function() {
	  	$("#afs1").addClass("fadeInLeft")
	  },
	  offset: '100%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('afs2'),
	  handler: function() {
	  	$("#afs2").addClass("fadeInRight")
	  },
	  offset: '100%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('afs3'),
	  handler: function() {
	  	$("#afs3").addClass("fadeInLeft")
	  },
	  offset: '100%'
	});

	$(".navbar-toggle").hover(function(){

			if ($(".navbar-fixed-top").css("background-color") == "rgb(255, 255, 255)") {
				$(this).css("background-color", "white");
				$(this).css("border-color", "#2E9CCA");
	    		$(".icon-bar").css("background-color", "#2E9CCA");				
			}
			else {
				$(this).css("border-color", "white");
				$(this).css("background-color", "white");
	    		$(".icon-bar").css("background-color", "#2E9CCA");
			}
	    }, 
	    function(){
	    	if ($(".navbar-fixed-top").css("background-color") == "rgb(255, 255, 255)") {
		    	$(this).css("background-color", "#2E9CCA");
		    	$(this).css("border-color", "#2E9CCA");
		    	$(".icon-bar").css("background-color", "white");
		    }
		    else {
		    	$(this).css("background-color", "#2E9CCA");
		    	$(this).css("border-color", "#2E9CCA");
		    	$(".icon-bar").css("background-color", "white");
		    }
	    }
	);

	$(document).on('click', '.navbar-nav li a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(document).on('click', '.navbar-brand', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: "0px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	$(document).on('click', '#view-more-btn', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $("#about-wrapper").offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});



