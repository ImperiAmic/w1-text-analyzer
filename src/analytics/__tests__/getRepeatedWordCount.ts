import { getRepeatedWordCount } from "../index.js";

const testName = "getRepeatedWordCount function";

const test1 = (): void => {
  const text = "Què pasa neng neng neng";
  const word = "neng";
  const getWordCountExpectedResult = 3;
  const test = getRepeatedWordCount(text, word) === getWordCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getWordCountExpectedResult}
👀 Actual result: ${getRepeatedWordCount(text, word)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = `Què pasa neng
neng neng`;
  const word = "neng";
  const getWordCountExpectedResult = 3;
  const test = getRepeatedWordCount(text, word) === getWordCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getWordCountExpectedResult}
👀 Actual result: ${getRepeatedWordCount(text, word)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test3 = (): void => {
  const text = "Què pasa";
  const word = "neng";
  const getWordCountExpectedResult = 0;
  const test = getRepeatedWordCount(text, word) === getWordCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getWordCountExpectedResult}
👀 Actual result: ${getRepeatedWordCount(text, word)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetRepeatedWordCount = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  test3();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
