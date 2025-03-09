import { getWordsTotal } from "../index.js";

const testName = "getWordsTotal function";

const test1 = (): void => {
  const text = "Què passa nen estic content";
  const wordsExpectedResult = 5;
  const test = getWordsTotal(text) === wordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${wordsExpectedResult}
👀 Actual result: ${getWordsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = `Què passa nen! 

Estic content...
 les elits      culturals
 
SOM nosaltres.També!`;
  const wordsExpectedResult = 11;
  const test = getWordsTotal(text) === wordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${wordsExpectedResult}
👀 Actual result: ${getWordsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test3 = (): void => {
  const text = `
  
  
  `;
  const wordsExpectedResult = 0;
  const test = getWordsTotal(text) === wordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${wordsExpectedResult}
👀 Actual result: ${getWordsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test4 = (): void => {
  const text = `



`;
  const wordsExpectedResult = 0;
  const test = getWordsTotal(text) === wordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${wordsExpectedResult}
👀 Actual result: ${getWordsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test5 = (): void => {
  const text = "";
  const wordsExpectedResult = 0;
  const test = getWordsTotal(text) === wordsExpectedResult;

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${wordsExpectedResult}
👀 Actual result: ${getWordsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetWordsTotal = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  test3();
  test4();
  test5();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
