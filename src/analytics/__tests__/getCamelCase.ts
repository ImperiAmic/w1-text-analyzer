import { getCamelCase } from "../index.js";

const testName = "getCamelCase function";

const test1 = (): void => {
  const text = "Què pasa neng estic content";
  const getCamelCaseExpectedResult = "quèPasaNengEsticContent";
  const test = getCamelCase(text) === getCamelCaseExpectedResult;

  console.log(`📝 Test: "${text}"
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

  console.log(`📝 Test: "${text}"
🤔 Expected result: ${getCamelCaseExpectedResult}
👀 Actual result: ${getCamelCase(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetCamelCase = (): void => {
  console.log(`👋👋 NEW TEST 👋👋
--> ${testName} <--\n`);
  test1();
  test2();
  console.log(`-->${testName} <--
🔚🔚 END OF TEST 🔚🔚\n`);
};
