import test from "node:test";
import { getWordsTotal } from "../index.js";

const test1 = (): void => {
  const text = "Què passa nen estic content";
  const wordsExpectedResult = 5;
  const test = getWordsTotal(text) === wordsExpectedResult;

  console.log(`Testing - getWordsTotal
📝 Test: "${text}"
🤔 Expected result: ${wordsExpectedResult}
👀 Actual result: ${getWordsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = `Què passa nen
  estic content
  
  les elits culturals

  som nosaltres també`;
  const wordsExpectedResult = 11;
  const test = getWordsTotal(text) === wordsExpectedResult;

  console.log(`Testing - getWordsTotal
📝 Test: "${text}"
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

  console.log(`Testing - getWordsTotal
📝 Test: "${text}"
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

  console.log(`Testing - getWordsTotal
📝 Test: "${text}"
🤔 Expected result: ${wordsExpectedResult}
👀 Actual result: ${getWordsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetWordsTotal = (): void => {
  test1();
  test2();
  test3();
  test4();
};
