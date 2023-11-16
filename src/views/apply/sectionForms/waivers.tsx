import React from "react"
import { FormTemplate } from "../../../utils/hackerapplication"

export const waiversSteps: FormTemplate[] = [
  // Step 1
  [
    [
      {
        text: "Code of Conduct Data Sharing Terms & Conditions",
        type: "title",
      },
    ],
    [
      <div
        key='waiver_step_mlh'
        className='max-w-md space-y-5 rounded-3xl bg-white/10 p-5 text-center text-sm ring-2 ring-inset ring-white/10'
      >
        <h2 className='font-title'>MLH Code of Conduct</h2>
        <p className='text-center font-subtext text-xs'>
          I have read and agree to the MLH Code of Conduct{" "}
          <a
            href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
            target='_blank'
            rel='noreferrer'
            className='text-blue-button'
          >
            https://static.mlh.io/docs/mlh-code-of-conduct.pdf
          </a>
        </p>
      </div>,
    ],
    [{ inputType: "radio", field: "mlh_code_conduct", options: ["Yes"] }],
  ],

  // Step 2
  [
    [
      {
        text: "Code of Conduct, Data Sharing, and Terms & Conditions",
        type: "title",
      },
    ],
    [
      <div
        key='waiver_step_mlh'
        className='max-w-md space-y-5 rounded-3xl bg-white/10 p-5 text-center text-sm ring-2 ring-inset ring-white/10'
      >
        <p className='text-center font-subtext text-xs'>
          I authorize CruzHacks to share my application/registration information
          with Major League Hacking for event administration, ranking, and MLH
          administration in-line with the MLH Privacy Policy (
          <a
            href='https://mlh.io/privacy'
            target='_blank'
            rel='noreferrer'
            className='text-blue-button'
          >
            https://mlh.io/privacy
          </a>
          ). I further agree to the terms of both the MLH Contest Terms and
          Conditions (
          <a
            href='https://github.com/MLH/mlh-policies/blob/main/contest-terms.md'
            target='_blank'
            rel='noreferrer'
            className='text-blue-button'
          >
            https://github.com/MLH/mlh-policies/blob/main/contest-terms.md
          </a>
          ) and the MLH Privacy Policy (
          <a
            href='https://mlh.io/privacy'
            target='_blank'
            rel='noreferrer'
            className='text-blue-button'
          >
            https://mlh.io/privacy
          </a>
          ).
        </p>
      </div>,
    ],
    [{ inputType: "radio", field: "mlh_data_sharing", options: ["Yes"] }],
  ],

  // Step 3
  [
    [
      {
        text: "CruzHacks 2024 Participation & Release Agreement",
        type: "title",
      },
    ],
    [
      {
        text: "To participate in CruzHacks 2024, you must agree to our Participation and Release Agreement",
      },
      {
        link: "https://docs.google.com/document/d/1298VyEqrSIvbzM3U8nvLQsLtY78Vi2mbndr3d5w0UKk/edit?usp=sharing",
        name: "Participation and Release Agreement",
      },
    ],
    [
      {
        inputType: "radio",
        field: "cruzhacks_conduct",
        options: [
          "I have read and agree to the CruzHacks 2024 Participation and Release Agreement",
        ],
      },
    ],
  ],

  // Step 4
  [
    [
      {
        text: "Communication from MLH",
        type: "title",
      },
    ],
    [
      <p
        key='waiver_step_mlh'
        className='max-w-md space-y-5 rounded-3xl bg-white/10 p-5 text-center font-subtext text-sm ring-2 ring-inset ring-white/10'
      >
        I authorize MLH to send me an email where I can further opt into the MLH
        Hacker, Events, or Organizer Newsletters and other communications from
        MLH.
      </p>,
    ],
    [{ inputType: "radio", field: "comm_from_mlh", options: ["Yes"] }],
  ],

  // Step 5
  [
    [{ text: "Communication from CruzHacks", type: "title" }],
    [
      {
        text: "I authorize the Organizers of CruzHacks 2024 to send me updates and information regarding CruzHacks 2024 and future CruzHacks events.",
      },
      { inputType: "radio", field: "comm_from_cruzhacks", options: ["Yes"] },
    ],
  ],

  // Step 6
  [
    [{ text: "CruzHacks 2024 COVID Safety Policy", type: "title" }],
    [
      {
        text: "To participate in CruzHacks 2024, you must agree to our COVID Safety Policy",
      },
      {
        link: "https://docs.google.com/document/d/1aq7xN3c8t8AWS-yDBcvqu4EMYmw0025HAoCFuOVld7c/edit?usp=sharing",
        name: "COVID Safety Policy",
      },
    ],
    [
      {
        inputType: "radio",
        field: "covid_safety",
        options: ["I have read and agree to the CruzHacks 2024 Safety Policy"],
      },
    ],
  ],

  // Step 7
  [
    [{ text: "Parent Release and Consent Form", type: "title" }],
    [
      {
        text: "If you are a minor (under 18), please fill out the CruzHacks 2024 Parental Release and Consent Form.",
      },
      { link: "https://forms.gle/uttfNsfpx2BNpEVs8", name: "Form" },
    ],
    [
      {
        text: "Applications for minors will not be reviewed if we do not find a corresponding Parental Release and Consent Form.",
      },
      {
        inputType: "radio",
        field: "parental_consent",
        options: [
          "I am not a minor",
          "Yes, I will visit the link above and fill out the form",
        ],
      },
    ],
  ],
]
