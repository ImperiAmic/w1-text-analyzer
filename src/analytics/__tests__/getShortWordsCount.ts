import { getShortWordsCount } from "../index.js";

const testName = "getShortWordsCount function";

const test1 = (): void => {
  const text = "Què passa nen";
  const getShortWordsCountExpectedResult = 2;
  const test = getShortWordsCount(text) === getShortWordsCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getShortWordsCountExpectedResult}
👀 Actual result: ${getShortWordsCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = `Què passa nen
estic content hola`;
  const getShortWordsCountExpectedResult = 3;
  const test = getShortWordsCount(text) === getShortWordsCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getShortWordsCountExpectedResult}
👀 Actual result: ${getShortWordsCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test3 = (): void => {
  const text = `Què passa nen
estic
     content`;
  const getShortWordsCountExpectedResult = 2;
  const test = getShortWordsCount(text) === getShortWordsCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getShortWordsCountExpectedResult}
👀 Actual result: ${getShortWordsCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test4 = (): void => {
  const text = `Quèee
passa
neeng`;
  const getShortWordsCountExpectedResult = 0;
  const test = getShortWordsCount(text) === getShortWordsCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getShortWordsCountExpectedResult}
👀 Actual result: ${getShortWordsCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetShortWordsCount = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  test3();
  test4();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
