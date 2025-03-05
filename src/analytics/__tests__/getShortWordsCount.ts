import { getShortWordsCount } from "../index.js";

const test1 = (): void => {
  const text = "Què passa nen";
  const getShortWordsCountExpectedResult = 1;
  const test = getShortWordsCount(text) === getShortWordsCountExpectedResult;

  console.log(`Testing - getShortWordsCount
📝 Test: "${text}"
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
estic content`;
  const getShortWordsCountExpectedResult = 3;
  const test = getShortWordsCount(text) === getShortWordsCountExpectedResult;

  console.log(`Testing - getShortWordsCount
📝 Test: "${text}"
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
  const getShortWordsCountExpectedResult = 3;
  const test = getShortWordsCount(text) === getShortWordsCountExpectedResult;

  console.log(`Testing - getShortWordsCount
📝 Test: "${text}"
🤔 Expected result: ${getShortWordsCountExpectedResult}
👀 Actual result: ${getShortWordsCount(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetShortWordsCount = (): void => {
  test1();
  test2();
  test3();
};
