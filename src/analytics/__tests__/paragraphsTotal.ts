import { getParagraphsTotal } from "../index.js";

const test1 = (): void => {
  const text = `Què passa nen

estic content
les elits culturals
      

      som nosaltres

també`;
  const paragraphsExpectedResult = 4;
  const test = getParagraphsTotal(text) === paragraphsExpectedResult;

  console.log(`Testing - getParagraphsTotal
📝 Test: "${text}"
🤔 Expected result: ${paragraphsExpectedResult}
👀 Actual result: ${getParagraphsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test2 = (): void => {
  const text = "Hola nen";
  const paragraphsExpectedResult = 1;
  const test = getParagraphsTotal(text) === paragraphsExpectedResult;

  console.log(`Testing - getParagraphsTotal
📝 Test: "${text}"
🤔 Expected result: ${paragraphsExpectedResult}
👀 Actual result: ${getParagraphsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test3 = (): void => {
  const text = "";
  const paragraphsExpectedResult = 0;
  const test = getParagraphsTotal(text) === paragraphsExpectedResult;

  console.log(`Testing - getParagraphsTotal
📝 Test: "${text}"
🤔 Expected result: ${paragraphsExpectedResult}
👀 Actual result: ${getParagraphsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test4 = (): void => {
  const text = " ";
  const paragraphsExpectedResult = 0;
  const test = getParagraphsTotal(text) === paragraphsExpectedResult;

  console.log(`Testing - getParagraphsTotal
📝 Test: "${text}"
🤔 Expected result: ${paragraphsExpectedResult}
👀 Actual result: ${getParagraphsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

const test5 = (): void => {
  const text = `
  
  
  
  `;
  const paragraphsExpectedResult = 0;
  const test = getParagraphsTotal(text) === paragraphsExpectedResult;

  console.log(`Testing - getParagraphsTotal
📝 Test: "${text}"
🤔 Expected result: ${paragraphsExpectedResult}
👀 Actual result: ${getParagraphsTotal(text)}`);

  if (test) {
    console.log(`Test is OK ✅\n`);
  } else {
    console.log(`Test is KO ❌\n`);
  }
};

export const testGetParagraphsTotal = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
};
