import { getReverdedText } from "../index.js";

const test1 = (): void => {
  const text = "Què passa nen estic content";
  const getRevertedTextExpectedResult = "èuQ assap nen citse tnetnoc";
  const test = getReverdedText(text) === getRevertedTextExpectedResult;

  console.log(`Testing - getReverdedText
📝 Test: "${text}"
🤔 Expected result: ${getRevertedTextExpectedResult}
👀 Actual result: ${getReverdedText(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = "";
  const getRevertedTextExpectedResult = "";
  const test = getReverdedText(text) === getRevertedTextExpectedResult;

  console.log(`Testing - getReverdedText
📝 Test: "${text}"
🤔 Expected result: ${getRevertedTextExpectedResult}
👀 Actual result: ${getReverdedText(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetRevertedText = (): void => {
  test1();
  test2();
};
