import { ReactElement } from "react"
import toast from "react-hot-toast"
import { ZodObject, z } from "zod"
import { HeroIcon } from "./types"
import { useLocation } from "react-router-dom"

/**
 * Utility types for the Hacker Application.
 */

type Text = {
  text: string
  type?: "title" | "body" | "disclaimer"
}

type LinkBox = {
  link: string
  name: string
}

type TextInput = {
  inputType: "text"
  field: string
  Icon?: HeroIcon
  additionalInputProps?: any
}

type TextareaInput = {
  inputType: "textarea"

  rows?: number
  showCount?: boolean
  maxLength?: number

  field: string
}

type RadioInput = {
  inputType: "radio"

  options: string[]
  other?: boolean
  arrange?: "vertical" | "vertical-inline"

  field: string
}

type ComboboxInput = {
  inputType: "combo"
  field: string
  options: string[]
}

type FormInput = TextInput | TextareaInput | RadioInput | ComboboxInput
type FormBlockElement = Text | LinkBox | FormInput | ReactElement<any, any>
type FormBlock = FormBlockElement[]
export type FormTemplate = FormBlock[]

/**
 * Check if a block element is text.
 * @param blockElement a block is an array of block elements (text, input, jsx)
 * @returns true if the block element is text
 */
export const isText = (
  blockElement: FormBlockElement
): blockElement is Text => {
  return (blockElement as any as Text).text !== undefined
}

/**
 * Check if a block element is a link box
 * @param blockElement a block is an array of block elements (text, input, jsx)
 * @returns true if the block element is a link box
 */
export const isLinkBox = (
  blockElement: FormBlockElement
): blockElement is LinkBox => {
  return (blockElement as any as LinkBox).link !== undefined
}

/**
 * Check if a block element is an input
 * @param blockElement a block is an array of block elements (text, input, jsx)
 * @returns true if the block element is an input
 */
export const isInput = (
  blockElement: FormBlockElement
): blockElement is FormInput => {
  return (blockElement as any as FormInput).inputType !== undefined
}

/**
 * Check if a block element is a text input
 * @param blockElement a block is an array of block elements (text, input, jsx)
 * @returns true if the block element is a text input
 */
export const isTextInput = (
  blockElement: FormBlockElement
): blockElement is TextInput => {
  return isInput(blockElement) && blockElement.inputType == "text"
}

/**
 * Check if a block element is a textarea input
 * @param blockElement a block is an array of block elements (text, input, jsx)
 * @returns true if the block element is a textarea input
 */
export const isTextareaInput = (
  blockElement: FormBlockElement
): blockElement is TextareaInput => {
  return isInput(blockElement) && blockElement.inputType == "textarea"
}

/**
 * Check if a block element is a radio input
 * @param blockElement a block is an array of block elements (text, input, jsx)
 * @returns true if the block element is a radio input
 */
export const isRadio = (
  blockElement: FormBlockElement
): blockElement is RadioInput => {
  return isInput(blockElement) && blockElement.inputType == "radio"
}

/**
 * Check if a block element is a combobox input
 * @param blockElement a block is an array of block elements (text, input, jsx)
 * @returns true if the block element is a combobox input
 */
export const isCombo = (
  blockElement: FormBlockElement
): blockElement is ComboboxInput => {
  return isInput(blockElement) && blockElement.inputType == "combo"
}

/**
 * Get the Hacker Application field names from a given step
 * @param step a Hacker Application section step
 * @returns an array of field names from the step
 */
export const getFieldsFromStep = (step: FormTemplate) => {
  const fields = []

  for (const block of step) {
    for (const blockElement of block) {
      if (isInput(blockElement)) {
        fields.push(blockElement.field)
      }
    }
  }

  return fields
}

/**
 * Get the Hacker Application field names from a given schema
 * @param schema a zod schema for a Hacker Application section
 * @returns an array of field names from the schema
 */
export const getFieldsFromSchema = (schema: z.AnyZodObject) => {
  if (!(schema instanceof ZodObject)) {
    return []
  }
  return schema.shape.keys()
}

/**
 * Creates an object schema from a list of fields and a section schema
 * @param sectionSchema a zod schema for a Hacker Application section to pull validation from
 * @param fields feilds to include in the schema
 * @returns a zod object schema with only the fields specified
 */
export const createSchemaFromFields = (
  sectionSchema: z.AnyZodObject,
  fields: string[]
) => {
  const stepSchema = fields.reduce((acc, field) => {
    if (!(field in sectionSchema.shape))
      console.error(
        `Could not construct step schema: field "${field}" not found in section schema "${JSON.stringify(
          sectionSchema.shape,
          // getFieldsFromSchema(sectionSchema),
          null,
          2
        )}"`
      )

    return {
      ...acc,
      [field]: sectionSchema.shape[field as keyof typeof sectionSchema],
    }
  }, {})

  return z.object(stepSchema)
}

export const createDefaultStateFromFields = (
  section: string,
  appState: any,
  fields: string[]
) => {
  if (!appState || !(section in appState)) {
    return {}
  }

  const sectionData = appState[section]

  const defaultState = fields.reduce((acc, field) => {
    if (!(field in sectionData)) return acc

    return {
      ...acc,
      [field]: sectionData[field],
    }
  }, {})

  return defaultState
}

/**
 * Merge data into the app state for a given section
 * @param section a Hacker Application section
 * @param data data to merge into the app state
 * @param appState the global state of the Hacker Application (fields)
 * @returns the new app state with the data merged into the section
 */
export const mergeAppState = (section: string, data: any, appState: any) => {
  const sectionData =
    appState && appState[section]
      ? { [section]: { ...appState[section], ...data } }
      : { [section]: data }

  return { ...appState, ...sectionData }
}

/**
 * Notify the user of validation errors using react-hot-toast
 * @param err an error object
 * @returns nothing, but displays a toast with the error messages
 */
export const notifyValidationErrors = (err: any) => {
  console.error(err)
  if (err instanceof z.ZodError) {
    err.issues.forEach(issue => {
      toast.error(
        issue.message === "Required"
          ? `Field "${issue.path}" is required.`
          : issue.message
      )
    })
    return
  }
  if (err instanceof Error) {
    toast.error(JSON.stringify(err.message))
    return
  }
  toast.error(JSON.stringify(err))
}

/**
 * Get the current section of the application from the url
 * @returns The current section of the application
 */
export const getCurrentSection = () => {
  const location = useLocation()
  const slugSplit = location.pathname.split("/")
  return slugSplit[slugSplit.length - 1]
}

/**
 * Check if a section is valid according to its schema
 * @param schema validation schema
 * @param data section data to validate
 * @returns returns true if the section data is valid, false otherwise
 */
export const isSectionValid = (schema: z.AnyZodObject, data: any) => {
  const res = schema.safeParse(data)
  return res.success
}
