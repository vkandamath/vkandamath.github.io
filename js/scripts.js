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
		$(".navbar-nav > li > a").css("color", "white");
		$(".navbar-nav > li > a").hover(function(){
		    $(this).css("color", "#2E9CCA");
		    }, function(){
		    $(this).css("color", "white");
		});
		$("#last-name").css("color", "#2E9CCA")
	}
}

$(function(){
		$("#blurb-dynamic").typed({
			strings: ["craft experiences.", "create new platforms", "tackle big problems.", "evolve software."],
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


function loadProgressCircles() {
	$("#java-level").circliful({
        animationStep: 4,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: 'white',
        foregroundColor: "#ff0000",
        percent: 95,
        replacePercentageByText: "Java",
        fontColor: "white",
        percentageTextSize: 14,
        text: "Advanced",
        textStyle: "font-size: 10px"
    });
	$("#python-level").circliful({
        animationStep: 4,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: 'white',
        foregroundColor: '#ff0000',
        percent: 85,
        replacePercentageByText: "Python",
        fontColor: "white",
        percentageTextSize: 14,
        text: "Advanced",
        textStyle: "font-size: 10px"
    });
    $("#c-level").circliful({
        animationStep: 4,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: 'white',
        foregroundColor: "#33cc33",
        percent: 65,
        replacePercentageByText: "C",
        fontColor: "white",
        percentageTextSize: 14,
        text: "Intermediate",
        textStyle: "font-size: 10px"
    });
    $("#postgresql-level").circliful({
        animationStep: 4,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: 'white',
        foregroundColor: "#33cc33",
        percent: 60,
        replacePercentageByText: "PostgreSQL",
        fontColor: "white",
        percentageTextSize: 14,
        text: "Intermediate",
        textStyle: "font-size: 10px"
    });
    $("#mvc-level").circliful({
        animationStep: 4,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: 'white',
        foregroundColor: "#33cc33",
        percent: 80,
        replacePercentageByText: "MVC",
        fontColor: "white",
        percentageTextSize: 14,
        text: "Intermediate",
        textStyle: "font-size: 10px"
    });
    $("#r-level").circliful({
        animationStep: 4,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: 'white',
        foregroundColor: "#33cc33",
        percent: 65,
        replacePercentageByText: "R",
        fontColor: "white",
        percentageTextSize: 14,
        text: "Intermediate",
        textStyle: "font-size: 10px"
    });
}


$(document).ready(function(){

	var javaProgressLoaded = false;

	var waypoint = new Waypoint({
	  element: document.getElementById('java-level'),
	  handler: function() {
	  	if (javaProgressLoaded == false) {
	  		$("#java-level").circliful({
		        animationStep: 4,
		        foregroundBorderWidth: 15,
		        backgroundBorderWidth: 15,
		        backgroundColor: 'white',
		        foregroundColor: "#ff0000",
		        percent: 95,
		        replacePercentageByText: "Java",
		        fontColor: "white",
		        percentageTextSize: 14,
		        text: "Advanced",
		        textStyle: "font-size: 10px"
		    });
	  		javaProgressLoaded = true;
	  	}
	  },
	  offset: '100%'
	});

	var pythonProgressLoaded = false;

	var waypoint = new Waypoint({
	  element: document.getElementById('python-level'),
	  handler: function() {
	  	if (pythonProgressLoaded == false) {
			$("#python-level").circliful({
		        animationStep: 4,
		        foregroundBorderWidth: 15,
		        backgroundBorderWidth: 15,
		        backgroundColor: 'white',
		        foregroundColor: '#ff0000',
		        percent: 85,
		        replacePercentageByText: "Python",
		        fontColor: "white",
		        percentageTextSize: 14,
		        text: "Advanced",
		        textStyle: "font-size: 10px"
		    });
	  		pythonProgressLoaded = true;
	  	}
	  },
	  offset: '100%'
	});

	var cProgressLoaded = false;

	var waypoint = new Waypoint({
	  element: document.getElementById('c-level'),
	  handler: function() {
	  	if (cProgressLoaded == false) {
		    $("#c-level").circliful({
		        animationStep: 4,
		        foregroundBorderWidth: 15,
		        backgroundBorderWidth: 15,
		        backgroundColor: 'white',
		        foregroundColor: "#33cc33",
		        percent: 65,
		        replacePercentageByText: "C",
		        fontColor: "white",
		        percentageTextSize: 14,
		        text: "Intermediate",
		        textStyle: "font-size: 10px"
		    });
		    cProgressLoaded = true;
	  	}
	  },
	  offset: '100%'
	});

	var postgresqlProgressLoaded = false;

	var waypoint = new Waypoint({
	  element: document.getElementById('postgresql-level'),
	  handler: function() {
	  	if (postgresqlProgressLoaded == false) {
		    $("#postgresql-level").circliful({
		        animationStep: 4,
		        foregroundBorderWidth: 15,
		        backgroundBorderWidth: 15,
		        backgroundColor: 'white',
		        foregroundColor: "#33cc33",
		        percent: 60,
		        replacePercentageByText: "PostgreSQL",
		        fontColor: "white",
		        percentageTextSize: 14,
		        text: "Intermediate",
		        textStyle: "font-size: 10px"
		    });
		    postgresqlProgressLoaded = true;
	  	}
	  },
	  offset: '100%'
	});

	var mvcProgressLoaded = false;

	var waypoint = new Waypoint({
	  element: document.getElementById('mvc-level'),
	  handler: function() {
	  	if (mvcProgressLoaded == false) {
		    $("#mvc-level").circliful({
		        animationStep: 4,
		        foregroundBorderWidth: 15,
		        backgroundBorderWidth: 15,
		        backgroundColor: 'white',
		        foregroundColor: "#33cc33",
		        percent: 80,
		        replacePercentageByText: "MVC",
		        fontColor: "white",
		        percentageTextSize: 14,
		        text: "Intermediate",
		        textStyle: "font-size: 10px"
		    });
		    mvcProgressLoaded = true;
	  	}
	  },
	  offset: '100%'
	});

	var rProgressLoaded = false;

	var waypoint = new Waypoint({
	  element: document.getElementById('r-level'),
	  handler: function() {
	  	if (rProgressLoaded == false) {
		    $("#r-level").circliful({
		        animationStep: 4,
		        foregroundBorderWidth: 15,
		        backgroundBorderWidth: 15,
		        backgroundColor: 'white',
		        foregroundColor: "#33cc33",
		        percent: 65,
		        replacePercentageByText: "R",
		        fontColor: "white",
		        percentageTextSize: 14,
		        text: "Intermediate",
		        textStyle: "font-size: 10px"
		    });
		    rProgressLoaded = true;
	  	}
	  },
	  offset: '100%'
	});




	$('#what-i-do-left-half').css('opacity', 0);
	var waypoint = new Waypoint({
	  element: document.getElementById('what-i-do-left-half'),
	  handler: function() {
	  	$("#what-i-do-left-half").addClass("fadeInLeft")
	  },
	  offset: '100%'
	});

	$('#what-i-do-right-half').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('what-i-do-right-half'),
	  handler: function() {
	  	$("#what-i-do-right-half").addClass("fadeInRight")
	  },
	  offset: '100%'
	});

	  // hide our element on page load
  $('#gymder').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('gymder'),
	  handler: function() {
	  	$("#gymder").addClass("fadeInLeft")
	  },
	  offset: '100%'
	});

	 $('#tempo-tunes').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('tempo-tunes'),
	  handler: function() {
	  	$("#tempo-tunes").addClass("fadeInRight")
	  },
	  offset: '100%'
	});

	$('#chatterbox').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('chatterbox'),
	  handler: function() {
	  	$("#chatterbox").addClass("fadeInLeft")
	  },
	  offset: '100%'
	});

	$('#tickertrack').css('opacity', 0);

	var waypoint = new Waypoint({
	  element: document.getElementById('tickertrack'),
	  handler: function() {
	  	$("#tickertrack").addClass("fadeInRight")
	  },
	  offset: '100%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('view-github-button'),
	  handler: function() {
	  	$("#view-github-button").addClass("fadeIn")
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
 
});


