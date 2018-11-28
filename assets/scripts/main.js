$(document).ready(function() {

	$("#open-side-nav").click(function() {
		$("#sidenav").css("width", "230px")
	});

	$("#exit-side-nav").click(function() {
		$("#sidenav").css("width", "0px")
	});

	$("#about-button").click(function() {
		$("#modal").show()
	});

	$("#exit-modal").click(function() {
		$("#modal").hide()
	});
	
});
