import { paragraphsTotal } from "../index.js";

const test1 = (): void => {
  const text = `Hola nen

què tal`;
  const expectedResult = 2;

  console.log(`Texto a testear:
${text}
Expected result:
${expectedResult}
Actual result:`);

  if (paragraphsTotal(text) === expectedResult) {
    console.log(`${paragraphsTotal(text)} OK ✅\n`);
  } else {
    console.log(`${paragraphsTotal(text)} KO ❌\n`);
  }
};
test1();

const test2 = (): void => {
  const text = "Hola nen";
  const expectedResult = 1;

  console.log(`Texto a testear:
${text}
Expected result:
${expectedResult}
Actual result:`);

  if (paragraphsTotal(text) === expectedResult) {
    console.log(`${paragraphsTotal(text)} OK ✅\n`);
  } else {
    console.log(`${paragraphsTotal(text)} KO ❌\n`);
  }
};
test2();

const test3 = (): void => {
  const text = "";
  const expectedResult = 0;

  console.log(`Texto a testear:
${text}
Expected result:
${expectedResult}
Actual result:`);

  if (paragraphsTotal(text) === expectedResult) {
    console.log(`${paragraphsTotal(text)} OK ✅\n`);
  } else {
    console.log(`${paragraphsTotal(text)} KO ❌\n`);
  }
};
test3();

const test4 = (): void => {
  const text = " ";
  const expectedResult = 0;

  console.log(`Texto a testear:
${text}
Expected result:
${expectedResult}
Actual result:`);

  if (paragraphsTotal(text) === expectedResult) {
    console.log(`${paragraphsTotal(text)} OK ✅\n`);
  } else {
    console.log(`${paragraphsTotal(text)} KO ❌\n`);
  }
};
test4();

const test5 = (): void => {
  const text = `
  
  
  
  `;
  const expectedResult = 0;

  console.log(`Texto a testear:
${text}
Expected result:
${expectedResult}
Actual result:`);

  if (paragraphsTotal(text) === expectedResult) {
    console.log(`${paragraphsTotal(text)} OK ✅\n`);
  } else {
    console.log(`${paragraphsTotal(text)} KO ❌\n`);
  }
};
test5();
