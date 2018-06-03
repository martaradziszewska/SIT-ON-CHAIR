document.addEventListener("DOMContentLoaded", function () {
	console.log("Hello");
	var hiddenNav = document.querySelector(".nav-hidden");
	var liElem = document.querySelector(".more-info");
	liElem.addEventListener("click", function () {
		if (hiddenNav.style.display !== "block") {
			hiddenNav.style.display = "block";
		} else {
			hiddenNav.style.display = "none";			
		}

	});


	var smallBox = document.querySelectorAll(".small-box");
	console.log(smallBox);

	for (var i = 0; i < smallBox.length-1; i++) {
		smallBox[i].addEventListener("mouseover", function() {
			this.querySelector("div .small-header").style.display = "none";
		});
		smallBox[i].addEventListener("mouseout", function() {
			this.querySelector("div .small-header").style.display = "block";
		});
	}
	
	
//	
//	function slider () {
//		var arrow = document.querySelectorAll(".arrow");
//		var imgBox = document.querySelector(".medium-box.img");
//		console.log(imgBox);
//		function changeSlide() {
//			imgBox.
//		}
//		for(var i=0; i<arrow.length; i++) {
//			arrow.addEventListener("click", function() {
//				
//			})
//		}
//	}
//
//
//	slider();







});
