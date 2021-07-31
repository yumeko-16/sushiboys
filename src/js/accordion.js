const title = document.getElementById("js-accordion__title-wrap");

function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("accordion__contents--active");
  content.classList.toggle("accordion__contents--open");
}

title.addEventListener("click", toggle);
