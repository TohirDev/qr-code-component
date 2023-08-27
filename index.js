localStorage.setItem("theme", localStorage.getItem("theme") || "light");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("body-dark");
}

const toggleThemeBtn = document.querySelector(".toggle-theme");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");

  if (document.body.classList.contains("body-dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
