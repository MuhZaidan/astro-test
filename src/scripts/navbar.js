const hamInput = document.getElementById("hamCheck");
const hamSide = document.getElementById("hamSide");

hamInput.addEventListener("click", (event) => {
  const lines = document.querySelectorAll(".lines");
  if (hamInput.hasAttribute("checked") == true) {
    lines.forEach((line) => {
      line.classList.add("active");
      hamSide.style.left = "50vw";
    });
    hamInput.attributes.removeNamedItem("checked");
  } else {
    lines.forEach((line) => {
      line.classList.remove("active");
      hamSide.style.left = "100vw";
    });
    hamInput.setAttribute("checked", "true");
  }
});
