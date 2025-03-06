import { getCamelCase } from "../index.js";

const test1 = (): void => {
  const text = "Què pasa neng estic content";
  const getCamelCaseExpectedResult = "quèPasaNengEsticContent";
  const test = getCamelCase(text) === getCamelCaseExpectedResult;

  console.log(`Testing - getCamelCase
📝 Test: "${text}"
🤔 Expected result: ${getCamelCaseExpectedResult}
👀 Actual result: ${getCamelCase(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = "";
  const getCamelCaseExpectedResult = "";
  const test = getCamelCase(text) === getCamelCaseExpectedResult;

  console.log(`Testing - getCamelCase
📝 Test: "${text}"
🤔 Expected result: ${getCamelCaseExpectedResult}
👀 Actual result: ${getCamelCase(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetCamelCase = (): void => {
  test1();
  test2();
};
