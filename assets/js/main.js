console.log("Hello World from main.js!");

var portfolioProjects = [
	{
	name: "Memory Game",
	thumbUrl: "assets/img/thumbnail_IP_memory.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/intermediate_programming/week3:4-memory_game/",
	course: "Intermediate Programming",
	class: "all-projects",
	description: "A Memory Game which was programmed using Vanilla JavaScript only.",
	},
	{
	name: "Jigsaw Game",
	thumbUrl: "assets/img/thumbnail_IP_jigsaw.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/intermediate_programming/week5:6-jigsaw_game/",
	course: "Intermediate Programming",
	class: "all-projects",
	description: "A Jigsaw Game (featuring Grump Cat) which was programmed using Vanilla JavaScript only.",
	},
	{
	name: "To-Do List",
	thumbUrl: "assets/img/thumbnail_IP_todo.png",
	linkUrl: "http://circuslabs.net/taylinglarge/week7/index.html",
	course: "Intermediate Programming",
	class: "all-projects",
	description: "A pink To-Do List which was programmed using Vanilla JavaScript only.",
	},
	{
	name: "First Responsive Website",
	thumbUrl: "assets/img/thumbnail_WD_firstwebsite.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_dev_two/week4-first_website/",
	course: "Web Development II",
	class: "all-projects",
	description: "First responsive website, where I calculated the width in percentages.",
	},
	{
	name: "Touch Agency",
	thumbUrl: "assets/img/thumbnail_WD_marginwebsite.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_dev_two/week5-touch_agency/",
	course: "Web Development II",
	class: "all-projects",
	description: "Another responsive website, this time with margins, where I calculated the width in percentages.",
	},
	{
	name: "Flexbox",
	thumbUrl: "assets/img/thumbnail_WD_flexbox.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_dev_two/week7-flexbox/",
	course: "Web Development II",
	class: "all-projects",
	description: "First timing using Flexbox to develop a responsive website without having to manually calculate the width.",
	},
	{
	name: "Best City",
	thumbUrl: "assets/img/thumbnail_WD_bestcity.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_dev_two/week8-best_city/",
	course: "Web Development II",
	class: "all-projects",
	description: "Another website using Flexbox to develop a responsive website.",
	},
	{
	name: "S'mores Builder",
	thumbUrl: "assets/img/thumbnail_WD_smores.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_dev_two/week8-best_city/",
	course: "Web Development II",
	class: "all-projects",
	description: "The final project for Web Development II. A website about building the perfect S'more.",
	},
	{
	name: "Unicorn GIF",
	thumbUrl: "assets/img/unicorn.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_animations/week1-gif/unicorn.gif",
	course: "Web Animations",
	class: "all-projects",
	description: "Creating a GIF with Photoshop's Timeline Feature.",
	},
	{
	name: "Earth & Moon",
	thumbUrl: "assets/img/thumbnail_WA_orbit.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_animations/week1-gif/unicorn.gif",
	course: "Web Animations",
	class: "all-projects",
	description: "Creating a CSS Animation of the moon rotating around the earth.",
	},
	{
	name: "Taxi Driver Poster",
	thumbUrl: "assets/img/thumbnail_WA_taxi.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_animations/week5:6-taxi_driver_poster/",
	course: "Web Animations",
	class: "all-projects",
	description: "A responsive and animated movie poster using CSS and JavaScript.",
	},
	{
	name: "Animated Info Graphic",
	thumbUrl: "assets/img/thumbnail_WA_infographic.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_animations/week5:6-taxi_driver_poster/",
	course: "Web Animations",
	class: "all-projects",
	description: "An animated info graphic on how to become a moring person. I've used TweenMax to animate the info graphic.",
	},
	{
	name: "Beyonce Website",
	thumbUrl: "assets/img/thumbnail_ID_project1.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_animations/week5:6-taxi_driver_poster/",
	course: "Interactive Design",
	class: "all-projects",
	description: "Re-Design of Artist Website. Chosen artist was Beyonce.",
	},
	{
	name: "Dr. Bronner Website",
	thumbUrl: "assets/img/thumbnail_ID_project2.png",
	linkUrl: "http://circuslabs.net/~michele.james/2nd%20quarter/web_animations/week5:6-taxi_driver_poster/",
	course: "Interactive Design",
	class: "all-projects",
	description: "Re-Design of Product Website. Chosen product was Dr. Bronner Liquid Castile Soap.",
	},
];

var loadPage = function () {

	var aboveHeader = document.createElement("div");
	aboveHeader.classList.add("above-header");
	document.body.appendChild(aboveHeader);

	var header = document.createElement("div");
	header.classList.add("header");
	document.body.appendChild(header);

	var hero = document.createElement("div");
	hero.classList.add("hero");
	header.appendChild(hero);

	var portfolioInfo = document.createElement("div");
	portfolioInfo.classList.add("portfolio-info");
	header.appendChild(portfolioInfo);

	var imgShelly = document.createElement("div");
	imgShelly.classList.add("img-shelly");
	portfolioInfo.appendChild(imgShelly);

	var aboutMeTab = document.createElement("div");
	aboutMeTab.classList.add("about-me-tab");
	portfolioInfo.appendChild(aboutMeTab);

	var resumeTab = document.createElement("div");
	resumeTab.classList.add("resume-tab");
	portfolioInfo.appendChild(resumeTab);

	var contactTab = document.createElement("div");
	contactTab.classList.add("contact-tab");
	portfolioInfo.appendChild(contactTab);

	var buttons = document.createElement("div");
	buttons.classList.add("buttons");
	document.body.appendChild(buttons);

	var allProjectsButton = document.createElement("button");
	allProjectsButton.classList.add("all-projects");
	allProjectsButton.innerHTML = "All Projects";
	buttons.appendChild(allProjectsButton);

	var webDevTwoButton = document.createElement("button");
	webDevTwoButton.classList.add("web-dev-two");
	webDevTwoButton.innerHTML = "Web Development II Projects";
	buttons.appendChild(webDevTwoButton);

	var intermediateProgrammingButton = document.createElement("button");
	intermediateProgrammingButton.classList.add("intermediate-programming");
	intermediateProgrammingButton.innerHTML = "Intermediate Programming Projects";
	buttons.appendChild(intermediateProgrammingButton);

	var webAnimationsButton = document.createElement("button");
	webAnimationsButton.classList.add("web-animations");
	webAnimationsButton.innerHTML = "Web Animations Projects";
	buttons.appendChild(webAnimationsButton);

	var interactiveDesignButton = document.createElement("button");
	interactiveDesignButton.classList.add("interactive-design");
	interactiveDesignButton.innerHTML = "Interactive Design Projects";
	buttons.appendChild(interactiveDesignButton);

	var gallery = document.createElement("div");
	gallery.classList.add("gallery");
	document.body.appendChild(gallery);

	for (var i = 0; i < portfolioProjects.length; i++) {

		if (i === 0) {

			changeHero(i);
		}

		var imgBox = document.createElement("div");
		imgBox.classList.add("img-box");
		imgBox.setAttribute("data-index", i);
		gallery.appendChild(imgBox);

		var thumb = document.createElement("img");
		thumb.setAttribute("src", portfolioProjects[i].thumbUrl);
		thumb.classList.add("all-projects");
		imgBox.appendChild(thumb);

		var projectName = document.createElement("h1");
		projectName.classList.add("project-name");
		projectName.innerHTML = portfolioProjects[i].name;
		imgBox.appendChild(projectName);

		var projectCourse = document.createElement("h2");
		projectCourse.classList.add("project-course");
		projectCourse.innerHTML = portfolioProjects[i].course;
		imgBox.appendChild(projectCourse);

		var projectDescription = document.createElement("h2");
		projectDescription.classList.add("project-description");
		projectDescription.innerHTML = portfolioProjects[i].description;
		imgBox.appendChild(projectDescription);

		var projectLink = document.createElement("a");
		projectLink.classList.add("project-link");
		projectLink.innerHTML = "Click here";
		projectLink.setAttribute ("href", portfolioProjects[i].linkUrl);
		imgBox.appendChild(projectLink);

		allProjectsButton.addEventListener("click", displayAllProjects);
		intermediateProgrammingButton.addEventListener("click", displayIntermediateProgrammingProjects);
		webAnimationsButton.addEventListener("click", displayWebAnimationsProjects);
		webDevTwoButton.addEventListener("click", displayWebDevTwoProjects);
		interactiveDesignButton.addEventListener("click", displayInteractiveDesignProjects);

		imgBox.addEventListener("click", function(e) {
			
			var thumbDataIndex = e.currentTarget.getAttribute("data-index");
			var heroImgDataIndex = document.querySelector('.heroImg').getAttribute("data-index");

			if (thumbDataIndex != heroImgDataIndex) {

				changeHero(thumbDataIndex);

				var heroImg = document.querySelector(".heroImg");
				var projectName = document.querySelector(".project-name-hero");
				var projectCourse = document.querySelector(".project-course-hero");
				var projectDescription = document.querySelector(".project-description-hero");
				var projectLink = document.querySelector(".project-link-hero");

				heroImg.parentNode.removeChild(heroImg);
				projectName.parentNode.removeChild(projectName);
				projectCourse.parentNode.removeChild(projectCourse);
				projectDescription.parentNode.removeChild(projectDescription);
				projectLink.parentNode.removeChild(projectLink);

			} 

		});	
	}
}

loadPage();

function changeHero (i) {

	var hero = document.querySelector(".hero");
	var imgShelly = document.querySelector(".img-shelly");
	var aboutMeTab = document.querySelector(".about-me-tab");
	var resumeTab = document.querySelector(".resume-tab");
	var contactTab = document.querySelector(".contact-tab");

	var heroImg = document.createElement("img");
	heroImg.setAttribute("src", portfolioProjects[i].thumbUrl);
	heroImg.classList.add("heroImg");
	hero.appendChild(heroImg);
	heroImg.setAttribute("data-index", i);

	var projectNames = document.querySelector("img-shelly");

	var projectName = document.createElement("h1");
	projectName.classList.add("project-name-hero");
	projectName.innerHTML = portfolioProjects[i].name;
	imgShelly.appendChild(projectName);

	var projectCourses = document.querySelector("about-me-tab");

	var projectCourse = document.createElement("h2");
	projectCourse.classList.add("project-course-hero");
	projectCourse.innerHTML = portfolioProjects[i].course;
	aboutMeTab.appendChild(projectCourse);

	var projectDescriptions = document.querySelector("resume-tab");

	var projectDescription = document.createElement("h2");
	projectDescription.classList.add("project-description-hero");
	projectDescription.innerHTML = portfolioProjects[i].description;
	resumeTab.appendChild(projectDescription);

	var projectLinks = document.querySelector("contact-tab");

	var projectLink = document.createElement("a");
	projectLink.classList.add("project-link-hero");
	projectLink.innerHTML = "Click here";
	projectLink.setAttribute ("href", portfolioProjects[i].linkUrl);
	contactTab.appendChild(projectLink);	
}


function displayAllProjects () {

	var projects = document.querySelectorAll(".img-box");

	for (var i = 0; i < projects.length; i++) {

		if (projects) {
			projects[i].style.display = "unset";
		}
	}
}

function displayIntermediateProgrammingProjects () {

	var projects = document.querySelectorAll(".img-box");
	var name = document.querySelectorAll(".project-course");

	for (var i = 0; i < projects.length; i++) {

		if (name[i].innerHTML !== "Intermediate Programming") {
			projects[i].style.display = "none";
		} else {
			projects[i].style.display = "unset";
		}
	}
}

function displayWebDevTwoProjects () {

	var projects = document.querySelectorAll(".img-box");
	var name = document.querySelectorAll(".project-course");

	for (var i = 0; i < projects.length; i++) {

		if (name[i].innerHTML !== "Web Development II") {
			projects[i].style.display = "none";
		}  else {
			projects[i].style.display = "unset";
		}
	}
}

function displayWebAnimationsProjects () {

	var projects = document.querySelectorAll(".img-box");
	var name = document.querySelectorAll(".project-course");

	for (var i = 0; i < projects.length; i++) {
		console.log(name[i]);

		if (name[i].innerHTML !== "Web Animations") {
			projects[i].style.display = "none";
		} else if(name[i].innerHTML == "Web Animations") {
			projects[i].style.display = "unset";
		}
	}
}

function displayInteractiveDesignProjects () {

	var projects = document.querySelectorAll(".img-box");
	var name = document.querySelectorAll(".project-course");

	for (var i = 0; i < projects.length; i++) {

		if (name[i].innerHTML !== "Interactive Design") {
				projects[i].style.display = "none";
		} else {
			projects[i].style.display = "unset";
		}
	}
}












