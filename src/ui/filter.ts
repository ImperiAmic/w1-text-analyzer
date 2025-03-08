const filterTotals = document.querySelector(
  "#filter-totals"
) as HTMLInputElement;

filterTotals.addEventListener("change", () => {
  if (filterTotals.checked) {
    document.querySelector(".totals")?.classList.add("show-item");
  } else {
    document.querySelector(".totals")?.classList.remove("show-item");
  }
});

const filterShortWords = document.querySelector(
  "#filter-short-words"
) as HTMLInputElement;

filterShortWords.addEventListener("change", () => {
  if (filterShortWords.checked) {
    document.querySelector(".short")?.classList.add("show-item");
  } else {
    document.querySelector(".short")?.classList.remove("show-item");
  }
});

const filterFrequencies = document.querySelector(
  "#filter-frequencies"
) as HTMLInputElement;

filterFrequencies.addEventListener("change", () => {
  if (filterFrequencies.checked) {
    document.querySelector(".frequencies")?.classList.add("show-item");
  } else {
    document.querySelector(".frequencies")?.classList.remove("show-item");
  }
});

const filterReversedWords = document.querySelector(
  "#filter-reversed-words"
) as HTMLInputElement;

filterReversedWords.addEventListener("change", () => {
  if (filterReversedWords.checked) {
    document.querySelector(".reversed-words")?.classList.add("show-item");
  } else {
    document.querySelector(".reversed-words")?.classList.remove("show-item");
  }
});

const filterForbiddenWords = document.querySelector(
  "#filter-forbidden-words"
) as HTMLInputElement;

filterForbiddenWords.addEventListener("change", () => {
  if (filterForbiddenWords.checked) {
    document.querySelector(".forbidden")?.classList.add("show-item");
  } else {
    document.querySelector(".forbidden")?.classList.remove("show-item");
  }
});

const filterCamelCase = document.querySelector(
  "#filter-camel-case"
) as HTMLInputElement;

filterCamelCase.addEventListener("change", () => {
  if (filterCamelCase.checked) {
    document.querySelector(".camel-case")?.classList.add("show-item");
  } else {
    document.querySelector(".camel-case")?.classList.remove("show-item");
  }
});
