export function applyNameCapitalizationStrategy(name: string): string {
  const trimmedName = name.trim();
  let formattedName = "";

  if (containsSpace(trimmedName)) {
    formattedName = trimmedName
      .split(" ")
      .map((n) => capitalizeFirstLetter(n))
      .join(" ");
  } else if (containsHyphen(trimmedName)) {
    formattedName = trimmedName
      .split("-")
      .map((n) => capitalizeFirstLetter(n))
      .join("-");
  } else {
    formattedName = capitalizeFirstLetter(trimmedName);
  }

  return formattedName;
}

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function containsSpace(name: string): boolean {
  return /^[a-zA-Z]+\s[a-zA-Z]+$/.test(name);
}

function containsHyphen(name: string): boolean {
  return /^[a-zA-Z]+-[a-zA-Z]+$/.test(name);
}

export function trimAndLowercaseText(text: string): string {
  return text.trim().toLowerCase();
}
