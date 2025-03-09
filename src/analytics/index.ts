const specialCharacterReplacedBySpaceText = (text: string): string => {
  return text.replaceAll(/[^A-Za-zÀ-ú\s\d]/g, " ");
};

export const getParagraphsTotal = (text: string): number => {
  const noSpacesText = text.replaceAll(" ", "");
  const splittedNoSpacesText = noSpacesText.split("\n\n");
  const filteredSplittedNoSpacesText = splittedNoSpacesText.filter(
    (text) => text !== "" && text !== "\n"
  );

  return filteredSplittedNoSpacesText.length;
};

export const getWordsTotal = (text: string): number => {
  const cleanText = specialCharacterReplacedBySpaceText(text);
  const withoutPharagraphsCleanText = cleanText.replaceAll("\n", " ");
  const splittedText = withoutPharagraphsCleanText.split(" ");
  const words = splittedText.filter((word) => word !== "");
  return words.length;
};

export const getCharacterCount = (text: string): number => {
  const noSpacesText = text.replaceAll(" ", "");
  return noSpacesText.length;
};

export const getShortWordsCount = (text: string, maxLength = 4): number => {
  const words = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "")
    .filter((word) => word.length < maxLength);
  return words.length;
};

export const getShortWords = (text: string, maxLength = 4): string[] => {
  const words = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "")
    .filter((word) => word.length < maxLength);

  return words;
};

export const getWordsList = (shortWords: string[]): string => {
  const listedShortWords = shortWords.toString();
  return listedShortWords;
};

export const getRepeatedWordCount = (
  text: string,
  repeatedWord: string
): number => {
  const words = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "");
  const filteredWords = words.filter((word) => word === repeatedWord);
  return filteredWords.length;
};

export const getReverdedWords = (text: string): string => {
  const words = text.split(" ");
  const wordsCharacters: string[] = words.map((word) =>
    word.split("").reverse().join("")
  );
  const wordsReversed = wordsCharacters.join(" ");

  return wordsReversed;
};

export const hideForbiddenWords = (
  text: string,
  hiddenWords: string[]
): string => {
  const words = text.split(" ");
  const hiddenText: string[] = [];

  words.forEach((word) => {
    if (hiddenWords.some((hiddenWord) => hiddenWord === word)) {
      hiddenText.push("*");
    } else {
      hiddenText.push(word);
    }
  });

  return hiddenText.join(" ");
};

export const getCamelCase = (text: string): string => {
  const words = text.split(" ");
  const toLowerCaseFirstWord = words.shift()?.toLowerCase();

  const followingWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  const joinedFollowingWords = followingWords.join("");

  const camelCaseText = toLowerCaseFirstWord + joinedFollowingWords;

  return camelCaseText;
};
