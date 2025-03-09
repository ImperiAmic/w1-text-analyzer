import { hideForbiddenWords } from "../index.js";

const testName = "hideForbiddenWords function";

const test1 = (): void => {
  const text = "Hola marrec què fas";
  const hiddenWords = ["marrec"];
  const hideWordsExpectedResult = "Hola * què fas";
  const test =
    hideForbiddenWords(text, hiddenWords) === hideWordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${hideWordsExpectedResult}
👀 Actual result: ${hideForbiddenWords(text, hiddenWords)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = "Hola marrec què fas";
  const hiddenWords = ["marrec", "què"];
  const hideWordsExpectedResult = "Hola * * fas";
  const test =
    hideForbiddenWords(text, hiddenWords) === hideWordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${hideWordsExpectedResult}
👀 Actual result: ${hideForbiddenWords(text, hiddenWords)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test3 = (): void => {
  const text = "";
  const hiddenWords = ["marrec", "què"];
  const hideWordsExpectedResult = "";
  const test =
    hideForbiddenWords(text, hiddenWords) === hideWordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${hideWordsExpectedResult}
👀 Actual result: ${hideForbiddenWords(text, hiddenWords)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testHideWords = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  test3();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
