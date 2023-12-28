import { ApplicationSchema } from "./types"

/**
 * Join an array of strings with a space (for use with tailwind classes)
 * @param {string[]} classes
 * @returns {string}
 */
export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

/**
 * Check if a value is a string
 * @param {any} value an object to check if it is a string
 * @returns {boolean} true if value is a string, false otherwise
 */
export const isString = (value: any): value is string =>
  typeof value === "string"

/**
 * Convert an array of application submissions to a csv string
 * @param {ApplicationSchema} applications array of application submissions
 * @returns csv string
 */
export const objectToCSV = (applications: ApplicationSchema[]) => {
  const headers = [
    "email",
    "fullname",
    "status",
    "_submitted",
  ] as (keyof ApplicationSchema)[]

  const csvRows = []
  csvRows.push("Email,Full Name,Status,Time Submitted")

  for (const row of applications) {
    const values = headers.map(header => {
      let val = row[header] ?? ""
      if (header === "_submitted") {
        val = val.toDate().toLocaleString()
      }

      const escaped = ("" + val).replace(/"/g, '\\"')
      return `"${escaped}"`
    })
    csvRows.push(values.join(","))
  }

  return csvRows.join("\n")
}

/**
 * Add a timestamp to a filename
 * @param {string} filename name of the file to download
 * @returns {string} filename with current timestamp appended
 */
export const timestampFilename = (filename: string, ext: string): string => {
  const currentDate = new Date()

  // Format the date and time components
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, "0") // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0")
  const hours = String(currentDate.getHours()).padStart(2, "0")
  const minutes = String(currentDate.getMinutes()).padStart(2, "0")
  const seconds = String(currentDate.getSeconds()).padStart(2, "0")

  return `${filename}_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.${ext}`
}
