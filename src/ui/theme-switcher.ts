const switcher = document.querySelector(".switch input") as HTMLInputElement;

switcher.addEventListener("change", () => {
  if (switcher.checked) {
    document.querySelector("body")?.classList.add("dark");
  } else {
    document.querySelector("body")?.classList.remove("dark");
  }
});
