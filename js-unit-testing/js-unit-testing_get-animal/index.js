export function getAnimal(animals) {
  if (animals === "cats") {
    return `I totally love cats!`;
  }
  if (typeof animals === "string") {
    return `I like ${animals}!`;
  }
  if (typeof animals === "undefined") {
    return `I do not like animals at all!`;
  }
}
