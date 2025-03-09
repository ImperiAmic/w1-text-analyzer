import { getCharacterCount } from "../index.js";

const testName = "getCharacterCount function";

const test1 = (): void => {
  const text = "Què passa";
  const getCharacterCountExpectedResult = 8;
  const test = getCharacterCount(text) === getCharacterCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getCharacterCountExpectedResult}
👀 Actual result: ${getCharacterCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = `Què passa
nen`;
  const getCharacterCountExpectedResult = 12;
  const test = getCharacterCount(text) === getCharacterCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getCharacterCountExpectedResult}
👀 Actual result: ${getCharacterCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test3 = (): void => {
  const text = `Què passa

  nen`;
  const getCharacterCountExpectedResult = 13;
  const test = getCharacterCount(text) === getCharacterCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getCharacterCountExpectedResult}
👀 Actual result: ${getCharacterCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test4 = (): void => {
  const text = "   ";
  const getCharacterCountExpectedResult = 0;
  const test = getCharacterCount(text) === getCharacterCountExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getCharacterCountExpectedResult}
👀 Actual result: ${getCharacterCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetCharacterCount = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  test3();
  test4();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
