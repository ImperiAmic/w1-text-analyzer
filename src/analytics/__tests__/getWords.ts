import { getWordsList } from "../index.js";

const testName = "getWordsList function";

const test1 = (): void => {
  const text = ["Què", "passa", "neng"];
  const getWordsExpectedResult = "Què,passa,neng";
  const test = getWordsList(text) === getWordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getWordsExpectedResult}
👀 Actual result: ${getWordsList(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = ["Què", "", "neng"];
  const getWordsExpectedResult = "Què,,neng";
  const test = getWordsList(text) === getWordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getWordsExpectedResult}
👀 Actual result: ${getWordsList(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetWords = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
