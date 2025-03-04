export const paragraphCount = (text: string): number => {
  if (text === "" || text === " ") {
    return 0;
  }

  const trimmedText = text.trim();

  if (trimmedText === "") {
    return 0;
  }

  const lineFeed = "\n\n";

  const splittedText = text.split(lineFeed);

  const splittedTextCount = splittedText.length;

  return splittedTextCount;
};
