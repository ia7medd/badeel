window.onload = function () {
  setTimeout(function () {
    document.getElementById("fadein").remove();
  }, 1000);
};

window.onscroll = function (data) {
  if (window.pageYOffset > 20) {
    document.getElementById("header").classList.add("scrolled");
  } else {
    document.getElementById("header").classList.remove("scrolled");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    padding: "10rem",
    pagination: false,
    classes: {
      prev: "splide__arrow--prev",
      next: "splide__arrow--next",
    },
    breakpoints: {
      768: {
        padding: "0",
      },
    },
  });

  splide.mount();
});

function scrollToElement(e, id) {
  e.preventDefault();
  //   window.scrollToElement(document.getElementById(id), 500);
  var element = document.getElementById(id);
  console.log(id, element);
  element.scrollIntoView();
}

// document.get;
