import React from "react";

export const capitalFirstLetter = (word: string) => {
  const firstChar = word.slice(0, 1).toUpperCase();
  const allCharsExcept1st = word.slice(1);
  return firstChar + allCharsExcept1st;
};

export const highlightText = (
  text: string | undefined,
  highlightColor: string,
  highlightedWords?: string[],
) => {
  if (!text) return null;
  if (!highlightedWords || highlightedWords.length === 0) return text;

  // Escape special regex characters
  const escapedWords = highlightedWords.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );

  const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");

  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isHighlighted = highlightedWords.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    );

    return (
      <span key={index} className={isHighlighted ? highlightColor : ""}>
        {part}
      </span>
    );
  });
};
