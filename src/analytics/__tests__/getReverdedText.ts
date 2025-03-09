import { getRevertedWords } from "../index.js";

const testName = "getRevertedWords function";

const test1 = (): void => {
  const text = "Què passa nen estic content";
  const getRevertedTextExpectedResult = "èuQ assap nen citse tnetnoc";
  const test = getRevertedWords(text) === getRevertedTextExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getRevertedTextExpectedResult}
👀 Actual result: ${getRevertedWords(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = "";
  const getRevertedTextExpectedResult = "";
  const test = getRevertedWords(text) === getRevertedTextExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getRevertedTextExpectedResult}
👀 Actual result: ${getRevertedWords(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetRevertedText = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
