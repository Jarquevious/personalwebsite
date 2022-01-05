/*
	// Template Name 	: Frostofolio - Fully Responsive Personal Template
	// Author 			: Zen Developer
	// Version 			: 1.0.0
  	// Copyright 		: Copyright 2021 by Zen Developer
	// Created 			: March 2021
	// File Name		: Main of JS file
	portofolio
*/
const personalInfo = {
	name: "Jarquevious Nelson",
	birthday: "Atlanta, Georgia",
	city: "San Francisco",
	country: "United States",
	phone: "+01 415 879 3727",
	age: 25,
	degree: "Applied Computer Science, Dominican University of California",
	email: "jarquevious@gmail.com",
	company: "Speedy Clean Bin",
	socialNetworks: {
		facebook: "https://www.facebook.com/profile.php?id=100047669499511" , // your link address facebook
		instagram: "#", // your link address instagram
		dribbble: "#", // your link address dribbble
		twitter: "#", // your link address twitter
		whatsapp: "#", // your link address whatsapp
		linkedin: "https://www.linkedin.com/in/jarquevious-nelson/", // your link address linkedin
		facebook_u: "zenDeveloper", // your username facebook
		instagram_u: "zenDeveloper", // your username instagram
		dribbble_u: "zen", // your username dribbble
		twitter_u: "zenDeveloper", // your username twitter
		linkedin_u: "zen_developer", // your username linkedin
	},
	skills: [
		{
			skill: "PHP",
			progress: "80",
			show_percentage: false,
		},
		{
			skill: "Javascript",
			progress: "40",
			show_percentage: false,
		},
		{
			skill: "Vue",
			progress: "50",
			show_percentage: false,
		},
	],
	language: [
		{
			lang: "Indonesia",
			progress: "100",
			level: "Native",
		},
		{
			lang: "English",
			progress: "40",
			level: "Basic",
		},
		{
			lang: "Japanase",
			progress: "30",
			level: "Basic",
		},
	],
};

function personalInformation() {
	$("#live").text(personalInfo.city + " " + personalInfo.country);
	$("#name").text(personalInfo.name);
	$("#birthday").text(personalInfo.birthday);
	$("#age").text(personalInfo.age);
	$("#country").text(personalInfo.country);
	$("#phone").text(personalInfo.phone);
	$("#degree").text(personalInfo.degree);
	$("#email").text(personalInfo.email);
	$("#status").text(personalInfo.status);
	$("#facebook").attr("href", personalInfo.socialNetworks.facebook);
	$("#instagram").attr("href", personalInfo.socialNetworks.instagram);
	$("#dribbble").attr("href", personalInfo.socialNetworks.dribbble);
	$("#whatsapp").attr("href", personalInfo.socialNetworks.whatsapp);
	$("#linkedin").attr("href", personalInfo.socialNetworks.linkedin);
	$("#twitter").attr("href", personalInfo.socialNetworks.twitter);
	$("#linkedin-c").attr("href", personalInfo.socialNetworks.linkedin);
	$("#linkedin-c").text(personalInfo.socialNetworks.linkedin_u);
	$("#instagram-c").attr("href", personalInfo.socialNetworks.instagram);
	$("#instagram-c").text(personalInfo.socialNetworks.instagram_u);
	$("#dribbble-c").attr("href", personalInfo.socialNetworks.dribbble);
	$("#dribbble-c").text(personalInfo.socialNetworks.dribbble_u);
	$("#twitter-c").attr("href", personalInfo.socialNetworks.twitter);
	$("#twitter-c").text(personalInfo.socialNetworks.twitter_u);
	personalInfo.skills.forEach((e) => {
		$(`<div id="skills">
		<div class="skill mt-3">
		<h6 class="fw-bold" style="font-size: small">${e.skill} </h6>
		<div class="progress rounded-pill" style="height: 10px">
		<div class="progress-bar" role="progressbar" style="width: ${e.progress}%" aria-valuenow="${
			e.progress
		}" aria-valuemin="0" aria-valuemax="100" >
		</div>
		</div>${e.show_percentage ? `<span class="float-end fw-bold" style="font-size: 10px">${e.progress}%</span>` : ""}
		</div>`).insertAfter("#skills");
	});
	personalInfo.language.forEach((e) => {
		$(`<div class="skill mt-3">
		<h6 class="fw-bold" style="font-size: small">${e.lang} <span style="font-size: 10px">(${e.level})</span></h6>
		<div class="progress rounded-pill" style="height: 10px">
			<div class="progress-bar" role="progressbar" style="width: ${e.progress}%" aria-valuenow="${e.progress}" aria-valuemin="0" aria-valuemax="100" ></div>
		</div>
	</div>`).insertAfter("#language");
	});
}

function clientTestimonial() {
	$(".testimonial-client .owl-carousel").owlCarousel({
		loop: !0,
		margin: 30,
		stagePadding: 5,
		nav: !1,
		autoplay: !0,
		dots: !0,
		mouseDrag: !0,
		touchDrag: !0,
		smartSpeed: 700,
		autoplayHoverPause: !0,
		responsiveClass: !0,
		rtl: !1,
		responsive: { 0: { items: 1, nav: !1 }, 992: { items: 2, nav: !1 } },
	});
}

function typedJS() {
	"use strict";
	const t = $(".element");
	if (t.length > 0) {
		const n = { strings: t.attr("data-elements").split(","), typeSpeed: 100, backDelay: 3e3, backSpeed: 50, loop: !0 };
		new Typed(".element", n);
	}
}

function resposive() {
	const t = $(".nav-list>li"),
		n = $(".title").text(),
		s = jQuery.makeArray(t),
		i = splitString(n, " ", !1);
	$('<nav class="nav-mobile"><ul class="nav-list"></nav>').insertAfter(".nav"),
		$(s).appendTo(".nav-list"),
		$("<div class='pb-5 pb-sm-0'></div>").insertAfter("#responsive"),
		$(
			`<div class="d-block d-sm-none d-flex"><h2 class="fw-bold text-capitalize">\n\t<span>${i[0]}</span> ${i[1]} ${
				i[2] ? i[2] : ""
			}</h2>\n\t<div class="line w-100" style="margin-bottom: 35px"></div>\n\t</div>`
		).insertAfter("#title");
}

function bio() {
	const e = $("#age").text();
	$("#age").replaceWith(`<span>${e}</span>`),
		$(
			` <div id="responsive">\n\t<div class="row wrap about d-sm-flex d-md-flex d-lg-flex d-xl-none d-xxl-none">\n\t<div class="col-lg-12 d-xl-none d-xxl-none d-sm-flex d-md-flex d-lg-flex">\n\t\t<div class="resume resume-lg justify-content-center align-items-center">\n\t\t\t<img src="${$(
				"#avatar"
			).attr(
				"src"
			)}" alt="" />\n\t\t</div>\n\t</div>\n\t<div class="col-lg-6 d-sm-block d-md-block d-lg-block items pb-lg-5 text-capitalize">\n\t\t<div class="col d-flex">\n\t\t\t<h4 class="text-primary text-uppercase fw-bold">Biography</h4>\n\t\t\t<div class="line w-100" style="margin-left: 10px; margin-bottom: 20px"></div>\n\t\t</div>\n\t\t<div class="row-cols-lg-2 d-lg-flex">\n\t\t\t<div class="col-lg-12">\n\t\t\t\t<div class="col">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>Birthday</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6><span>:</span> <span>${$(
				"#birthday"
			).text()}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>City</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t<span>:</span>\n\t\t\t\t\t\t\t\t<span>${$(
				"#city"
			).text()}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>Country</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6><span>:</span> <span>${$(
				"#country"
			).text()}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col d-sm-block">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>Age</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6><span>:</span> <span>${e}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="col-lg-12">\n\t\t\t\t<div class="col d-sm-block">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>phone</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6><span>:</span> <span>${$(
				"#phone"
			).text()}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col d-sm-block">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>Degree</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6><span>:</span> <span>${$(
				"#degree"
			).text()}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col d-sm-block">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>Email</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6><span>:</span> <span class="text-lowercase">${$(
				"#email"
			).text()}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col d-sm-block">\n\t\t\t\t\t<div class="item mt-3 d-inline-flex w-100">\n\t\t\t\t\t\t<div class="w-50">\n\t\t\t\t\t\t\t<h6>Freelance</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="w-100">\n\t\t\t\t\t\t\t<h6><span>:</span> <span>${$(
				"#status"
			).text()} </span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col d-sm-block mt-4 pb-5">\n\t\t\t<a href="#" style="font-size: small" class="btn text-capitalize btn-pink fs">\n\t\t\t<i class="zen frs-installing_updates mx-1 fs-5 align-middle"></i>Download CV</a>\n\t\t</div>\n\t</div>\n</div>\n</div>\n`
		).insertAfter("#biography");
}

function splitString(t, n, s = !0) {
	const i = t.split(n),
		e = i[i.length - 1];
	return 1 == s ? e : i;
}
function mode() {
	// Light and Dark Mode
	$("a#mode").on("click", function (e) {
		e.preventDefault();
		let a = $("main").attr("data-theme");
		if (a == "Dark") {
			$("main").attr("data-theme", "Light");
			$("a#mode > div > i").removeClass("frs-sun").addClass("frs-moon_symbol");
		} else {
			$("main").attr("data-theme", "Dark");
			$("a#mode > div > i").removeClass("frs-moon_symbol").addClass("frs-sun");
		}
	});
}

function nav() {
	$(".active:nth-child(1) > a > i").toggleClass("frs-home_solid", "frs-home");
	$(".active:nth-child(2) > a > i").toggleClass("frs-user_solid", "frs-user");
	$(".active:nth-child(3) > a > i").toggleClass("frs-resume_website_solid", "frs-resume_website");
	$(".active:nth-child(4) > a > i").toggleClass("frs-project_solid", "frs-project");
	$(".active:nth-child(5) > a > i").toggleClass("frs-edit_property_solid", "frs-edit_property");
	$(".active:nth-child(6) > a > i").toggleClass("frs-envelope_solid", "frs-envelope");
}

function validation() {
	"use strict";
	var forms = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add("was-validated");
			},
			false
		);
	});
}

function isotope() {
	// init Isotope
	var $grid = $("#grid").isotope({
		itemSelector: ".portofolio",
		layoutMode: "fitRows",
	});
	$(".filter").on("click", "a", function () {
		var filterValue = $(this).attr("data-filter");
		$grid.isotope({ filter: filterValue });
	});
}

$(function () {
	"use strict";
	validation();
	mode();
	nav();
	typedJS();
	resposive();
	clientTestimonial();
	personalInformation();
});
