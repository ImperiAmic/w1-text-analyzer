export const getParagraphsTotal = (text: string): number => {
  const noSpacesText = text.replaceAll(" ", "");
  const splittedNoSpacesText = noSpacesText.split("\n\n");
  const filteredSplittedNoSpacesText = splittedNoSpacesText.filter(
    (text) => text !== "" && text !== "\n"
  );

  return filteredSplittedNoSpacesText.length;
};

export const getWordsTotal = (text: string): number => {
  const noParagraphText = text.replaceAll("\n", "");
  const splittedText = noParagraphText.split(" ");
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
