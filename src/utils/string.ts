/**
 * @description This function takes in a list of classes and returns a string of classes
 * @param {string[]} classes
 * @returns {string}
 */
export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
