$(document).ready(function () {
  // Initialize animate-on-scroll
  AOS.init();

  var techCollapseButton = document.getElementById("techCollapse");
  var showMore = document.getElementById("showMore");
  var rotated = false;

  techCollapseButton.onclick = function () {
    if (!rotated) {
      techCollapseButton.firstElementChild.classList.remove("bi-chevron-down");
      techCollapseButton.firstElementChild.classList.add("bi-chevron-up");
      showMore.innerText = "Show Less";
    } else {
      techCollapseButton.firstElementChild.classList.remove("bi-chevron-up");
      techCollapseButton.firstElementChild.classList.add("bi-chevron-down");
      showMore.innerText = "Show More";
    }
    rotated = !rotated;

    refreshAOS();
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Refresh AOS's DOM offsets now that new elements are displayed
  const refreshAOS = async () => {
    // Wait 250ms to give Bootstrap's collapse functions time to fully execute
    // so height offsets are accurate for AOS' refresh.
    await delay(250);
    AOS.refresh();
  };

  var glide = new Glide(".glide", {
    bound: true,
    gap: 10,
    peek: { before: 30, after: 30 },
    perView: 1,
    rewind: false,
    startAt: 0,
    swipeThreshold: 50,
    type: "slider",
    breakpoints: {
      768: {
        peek: 0,
      },
    },
  });

  const track = document.querySelector(".glide__track");

  // Using the Glide API to build in some accessibility features
  // on initiation and every time a glide is triggered.
  // Aria-current is used to convey which slide is currently active
  glide.on(["build.after", "run.after"], function () {
    var slides = track.querySelectorAll(".glide__slide");
    slides.forEach((slide) => {
      slide.setAttribute("aria-current", "false");
    });
    var activeSlide = track.querySelector(".glide__slide--active");
    activeSlide.setAttribute("aria-current", "page");
  });

  // Update the currently open nav sub-menu after a glide is triggered
  glide.on("run.after", function () {
    var collapses = track.querySelectorAll(".collapse");
    collapses.forEach((collapse) => {
      $(collapse).collapse("hide");
    });
  });

  glide.mount();
});
