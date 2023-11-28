/**
 * This function takes in a list of classes and returns a string of classes
 * @param {string[]} classes
 * @returns {string}
 */
export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

/**
 * A function that checks if a value is a string
 * @param {any} value an object to check if it is a string
 * @returns {boolean} true if value is a string, false otherwise
 */
export const isString = (value: any): value is string =>
  typeof value === "string"
