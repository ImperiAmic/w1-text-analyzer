export const getParagraphsTotal = (text: string): number => {
  const noSpacesText = text.replaceAll(" ", "");
  const splittedNoSpacesText = noSpacesText.split("\n\n");
  const filteredSplittedNoSpacesText = splittedNoSpacesText.filter(
    (text) => text !== "" && text !== "\n"
  );

  return filteredSplittedNoSpacesText.length;
};
