import {
  getCamelCase,
  getCharacterCount,
  getParagraphsTotal,
  getRepeatedWordCount,
  getReverdedText,
  getShortWords,
  getShortWordsCount,
  getWordsList,
  getWordsTotal,
  hideForbiddenWords,
} from "../analytics/index.js";

const totalsContainer = document.querySelector(".totals");
const shortWordsContainer = document.querySelector(".short");
const palindromesContainer = document.querySelector(".palindromes");
const frequenciesContainer = document.querySelector(
  ".frequencies .frequencies-list"
);
const reversedWordsContainer = document.querySelector(".reversed-words");
const reversedTextContainer = document.querySelector(".reversed-text");
const forbiddenContainer = document.querySelector(".forbidden");
const camelCaseContainer = document.querySelector(".camel-case");
const kebabCaseContainer = document.querySelector(".kebab-case");
const snakeCaseContainer = document.querySelector(".snake-case");

if (
  !totalsContainer ||
  !shortWordsContainer ||
  !palindromesContainer ||
  !frequenciesContainer ||
  !reversedWordsContainer ||
  !reversedTextContainer ||
  !forbiddenContainer ||
  !camelCaseContainer ||
  !kebabCaseContainer ||
  !snakeCaseContainer
) {
  throw new Error("Missing elements");
}

const renderParagraphsTotal = (paragraphsTotal: number): void => {
  totalsContainer.querySelector(".paragraphs-count")!.textContent =
    paragraphsTotal.toString();
};

const renderWordsTotal = (wordsTotal: number): void => {
  totalsContainer.querySelector(".words-count")!.textContent =
    wordsTotal.toString();
};

const renderCharactersTotal = (charactersTotal: number): void => {
  totalsContainer.querySelector(".characters-count")!.textContent =
    charactersTotal.toString();
};

const renderShortWordsTotal = (shortWordsTotal: number): void => {
  document.querySelector(".short-words-count")!.textContent =
    shortWordsTotal.toString();
};

const renderShortWordsList = (shortWords: string): void => {
  shortWordsContainer.querySelector(".short-words")!.textContent = shortWords;
};

const renderPalindromes = (palindromes: string): void => {
  palindromesContainer.querySelector(".palindromes")!.textContent = palindromes;
};

const renderForbiddenWords = (forbiddenWords: string): void => {
  forbiddenContainer.querySelector(".censured-text")!.textContent =
    forbiddenWords;
};

const renderReversedWords = (reversedWords: string): void => {
  reversedWordsContainer.querySelector(".reversed-words-list")!.textContent =
    reversedWords;
};

const renderReversedText = (reversedText: string): void => {
  reversedTextContainer.querySelector(".reversed-text-list")!.textContent =
    reversedText;
};

const renderCamelCase = (camelCaseText: string): void => {
  camelCaseContainer.querySelector(".camel-case-text")!.textContent =
    camelCaseText;
};

const renderKebabCase = (kebabCaseText: string): void => {
  kebabCaseContainer.querySelector(".kebab-case-text")!.textContent =
    kebabCaseText;
};

const renderSnakeCase = (snakeCaseText: string): void => {
  snakeCaseContainer.querySelector(".snake-case-text")!.textContent =
    snakeCaseText;
};

const listenForbiddenWordsChanges = (text: string): void => {
  forbiddenContainer
    .querySelector("input")!
    .addEventListener("input", (event) => {
      // The variable forbiddenWords contains the words entered by the user in the input, already splitted
      const forbiddenWords = (event.target as HTMLInputElement).value.split(
        /,\s*/
      );

      renderForbiddenWords(hideForbiddenWords(text, forbiddenWords));
    });
};

const listenFrequenciesChanges = (text: string): void => {
  frequenciesContainer
    .querySelectorAll("input")
    .forEach((frequencyInput, index) => {
      frequencyInput.addEventListener("input", (event) => {
        // The variable word contains the text entered by the user in the input
        const word = (event.target as HTMLInputElement).value;

        const frequency = getRepeatedWordCount(text, word);

        frequenciesContainer.querySelector(
          `.word-${index + 1}-frequency`
        )!.textContent = frequency.toString();
      });
    });
};

export const analyzeText = (text: string): void => {
  // Keep this two calls
  listenFrequenciesChanges(text);
  listenForbiddenWordsChanges(text);

  renderParagraphsTotal(getParagraphsTotal(text));
  renderWordsTotal(getWordsTotal(text));
  renderCharactersTotal(getCharacterCount(text));
  renderShortWordsTotal(getShortWordsCount(text));
  renderShortWordsList(getWordsList(getShortWords(text)));
  renderReversedText(getReverdedText(text));
  renderCamelCase(getCamelCase(text));
};
