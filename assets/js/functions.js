$(document).ready(function () {
	/***************** Splashscreen ******************/
	$(window).on("load", function () {
	  $(".splashscreen").addClass("splashscreen--is-hidden");
  
	  setTimeout(function () {
		$(".splashscreen").css({ display: "none" });
  
		// Introduction Animation
		var $introName = $(".introduction__content-el--name"),
		  $introJob = $(".introduction__content-el--job");
		gsap.to([$introName, $introJob], { duration: 0.8, x: 0, opacity: 1, ease: "power1.out" });
	  }, 800);
	});
  
	/***************** Responsive Nav ******************/
	$(".navigation__burger").click(function () {
	  navigationToggle();
	});
  
	function navigationToggle() {
	  $(".navigation__burger").toggleClass("navigation__burger--is-open");
	  $(".navigation__container").toggleClass("navigation__container--is-open");
	  $("html, body").toggleClass("scroll-lock");
	}
  
	/***************** Smooth Scroll ******************/
	$('a[href*="#"]:not([href="#0"])').on("click", function (ev) {
	  ev.preventDefault();
  
	  if ($(".navigation__container").hasClass("navigation__container--is-open")) {
		navigationToggle();
	  }
  
	  var target = $(this).attr("href");
	  gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 60 }, ease: "power1.out" });
	});
  
	/***************** Animations ******************/
	if ($(window).width() > 991) {
	  var controller = new ScrollMagic.Controller();
  
	  // About Section Animation
	  var $aboutTrigger = $(".about"),
		aboutTl = gsap.timeline();
  
	  aboutTl
		.from(".about__content-blurb", { duration: 0.8, x: 50, opacity: 0, ease: "power1.out" })
		.from(".about__visual", { duration: 0.8, x: -50, opacity: 0, ease: "power1.out" }, "<")
		.from(".about__wrapper::before", { duration: 0.8, opacity: 0, ease: "power1.out" })
		.from(".about__content-signature", { duration: 0.8, opacity: 0 }, "-=0.4");
  
	  new ScrollMagic.Scene({
		triggerElement: $aboutTrigger[0],
		reverse: false,
	  })
		.setTween(aboutTl)
		.addTo(controller);
  
	  // App Design Section
	  var $appDesignTrigger = $(".app-design");
	  if ($appDesignTrigger.length) {
		new ScrollMagic.Scene({
		  triggerElement: $appDesignTrigger[0],
		  reverse: false,
		})
		  .setTween(gsap.from(".app-design__visual", { duration: 0.8, x: 100, opacity: 0, ease: "power1.out" }))
		  .addTo(controller);
	  }
  
	  // Work Section Animation
	  var workTl = gsap.timeline();
  
	  workTl
		.from(".work__content", { duration: 0.8, x: -50, opacity: 0, ease: "power1.out" })
		.from(".work__visual", { duration: 0.8, x: 50, opacity: 0, ease: "power1.out" }, "<")
		.from(".work__list::before", { duration: 0.8, opacity: 0, ease: "power1.out" });
  
	  new ScrollMagic.Scene({
		triggerElement: ".work",
		offset: 60,
		reverse: false,
	  })
		.setTween(workTl)
		.addTo(controller);
	}
  
	/***************** Work Carousel ******************/
	$(".work__navigation-el").on("click", function () {
	  var $this = $(this),
		position = $this.index();
  
	  // Update navigation active state
	  $(".work__navigation-el").removeClass("work__navigation-el--is-active");
	  $this.addClass("work__navigation-el--is-active");
  
	  // Update visible slide
	  $(".work__list").children().removeClass("work__list-el--is-active");
	  $(".work__list").children().eq(position).addClass("work__list-el--is-active");
	});
  });

  $(document).ready(function () {
	/***************** Work Carousel ******************/
	$(".work__navigation-el").on("click", function () {
	  var $this = $(this); // Current navigation element
	  var index = $this.data("index"); // Retrieve index from data attribute
  
	  // Update navigation active state
	  $(".work__navigation-el").removeClass("work__navigation-el--is-active");
	  $this.addClass("work__navigation-el--is-active");
  
	  // Update active slide
	  $(".work__list-el").removeClass("work__list-el--is-active");
	  $(".work__list-el").eq(index).addClass("work__list-el--is-active");
  
	  // Smooth scroll to the slide
	  var targetSlide = $(".work__list").children().eq(index);
	  $("html, body").animate(
		{ scrollTop: targetSlide.offset().top - 100 }, // Adjust offset if needed
		800
	  );
	});
  });

  function viewImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = `assets/img/${imageSrc}`;
    modal.style.display = "flex";
}

function closeImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prev = document.querySelector('.carousel-control.prev');
    const next = document.querySelector('.carousel-control.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateCarousel() {
      items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prev.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });

    next.addEventListener('click', () => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index, 10);
        updateCarousel();
      });
    });

    updateCarousel();
  });