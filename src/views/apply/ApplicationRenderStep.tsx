import React, { isValidElement, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAppState } from "../../hooks/useAppState"
import { StepButtons } from "../../components/StepButtons"
import ComboboxInput from "../../components/inputs/ComboboxInput"
import TextInput from "../../components/inputs/TextInput"
import RadioInput from "../../components/inputs/RadioInput"
import TextareaInput from "../../components/inputs/TextareaInput"
import {
  FormTemplate,
  createDefaultStateFromFields,
  createSchemaFromFields,
  getFieldsFromStep,
  isCombo,
  isInput,
  isLinkBox,
  isRadio,
  isText,
  isTextInput,
  isTextareaInput,
} from "../../utils/hackerapplication"
import LinkBox from "../../components/LinkBox"

interface StepProps {
  step: FormTemplate

  section: string
  sectionSchema: z.ZodObject<any, any>

  isFirstStep: boolean
  isLastStep: boolean
  navForward: (data: any) => void
  navBackward: () => void
}

const ApplicationRenderStep = ({
  step,

  section,
  sectionSchema,

  isFirstStep,
  isLastStep,
  navForward,
  navBackward,
}: StepProps) => {
  // Get default form state
  const [appState] = useAppState()

  // Construct Schema
  const fields = getFieldsFromStep(step)
  const StepSchema = createSchemaFromFields(sectionSchema, fields)
  type StepSchema = z.infer<typeof StepSchema>

  // Get default values from appState
  const defaultValues = createDefaultStateFromFields(section, appState, fields)

  // Validation/state with react-hook-form
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<StepSchema>({
    defaultValues,
    resolver: zodResolver(StepSchema),
  })

  // State for ComboboxInput queries
  const [state, setState] = useState({})

  return (
    <form
      className='flex h-full grow flex-col justify-between gap-10'
      onSubmit={handleSubmit(data => {
        navForward(data)
        setState({})
      })}
    >
      <div className='flex h-full grow flex-col items-stretch justify-center gap-10 md:items-center md:justify-start'>
        {step.map((block, i) => (
          <div
            className='flex w-full flex-col items-stretch justify-center sm:items-center'
            key={i}
          >
            {block.map((blockElement, j) => {
              // Text
              if (isText(blockElement)) {
                const { text, type } = blockElement
                if (type && type === "title") {
                  return (
                    <h1
                      key={"" + i + j}
                      className='pb-2 text-center font-title text-xl md:text-2xl lg:text-4xl'
                    >
                      {text}
                    </h1>
                  )
                }
                if (type && type === "disclaimer") {
                  return (
                    <p
                      key={"" + i + j}
                      className='max-w-md self-center text-center font-subtext text-xs'
                    >
                      {text}
                    </p>
                  )
                }
                return (
                  <p
                    key={"" + i + j}
                    className='max-w-xl pb-5 text-center font-subtext'
                  >
                    {text}
                  </p>
                )
              }
              // Link Box
              if (isLinkBox(blockElement)) {
                const { link, name } = blockElement
                return <LinkBox key={"" + i + j} text={name} to={link} />
              }
              // Input
              if (isInput(blockElement)) {
                const error = (errors as any)[blockElement.field]
                  ? ((errors as any)[blockElement.field]?.message as string)
                  : undefined

                if (isTextInput(blockElement)) {
                  const { field, Icon, additionalInputProps } = blockElement
                  return (
                    <TextInput
                      key={"" + i + j}
                      Icon={Icon}
                      inputProps={{
                        ...register(
                          field as never,
                          // input type number
                          additionalInputProps &&
                            additionalInputProps.type === "number" && {
                              valueAsNumber: true,
                            }
                        ),
                        ...additionalInputProps,
                      }}
                      error={error}
                    />
                  )
                }
                if (isCombo(blockElement)) {
                  const { field, options } = blockElement
                  return (
                    <ComboboxInput
                      key={"" + i + j}
                      query={state[field as keyof typeof state] || ""}
                      setQuery={val => setState({ ...state, [field]: val })}
                      name={field}
                      options={options}
                      control={control}
                      error={error}
                    />
                  )
                }
                if (isRadio(blockElement)) {
                  const { field, ...rest } = blockElement
                  return (
                    <RadioInput
                      key={"" + i + j}
                      name={field}
                      // defaultValue={
                      //   defaultValues[field as keyof StepSchema] || ""
                      // }
                      control={control}
                      error={error}
                      {...rest}
                    />
                  )
                }
                if (isTextareaInput(blockElement)) {
                  const { field, ...rest } = blockElement
                  return (
                    <TextareaInput
                      key={"textarea" + i + j}
                      inputProps={{ ...register(field as never) }}
                      error={error}
                      characterCount={watch(field as never)?.length}
                      {...rest}
                    />
                  )
                }

                console.error("RenderStep: Invalid form element")
              }
              // JSX
              if (isValidElement(blockElement)) {
                return blockElement
              }

              console.error("RenderStep: Invalid block")
            })}
          </div>
        ))}
      </div>

      <StepButtons
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        navBackward={() => {
          setState({})
          navBackward()
        }}
      />
    </form>
  )
}

export default ApplicationRenderStep
