import { FormTemplate } from "../../../utils/hackerapplication"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

export const socialsSteps: FormTemplate[] = [
  // Step 1
  [
    [{ text: "Get Connected!", type: "title" }],
    [
      {
        text: "Do you consent to sharing your resume and/or contact information with current and future CruzHacks sponsors?",
      },
      {
        // TODO: Resume Drop Form
        link: "https://forms.gle/aKYMP4zifmYtWCmH6",
        name: "Resume Drop Form",
      },
    ],
    [
      {
        inputType: "radio",
        field: "resume_drop_form",
        options: ["Yes, and I will fill out the resume drop form", "No"],
      },
    ],
  ],

  // Step 2
  [
    [{ text: "Get Connected!", type: "title" }],
    [{ text: "LinkedIn" }, { inputType: "text", field: "linkedin" }],
    [{ text: "Github" }, { inputType: "text", field: "github" }],
    [{ text: "Discord" }, { inputType: "text", field: "discord" }],

    [
      { text: "How did you hear about CruzHacks?" },
      {
        text: "This question is for statistical purposes only.",
        type: "disclaimer",
      },
      // TODO: What should these fields be ?
      {
        inputType: "combo",
        field: "cruzhacks_referral",
        options: [
          "CruzHacks Instagram",
          "CruzHacks Facebook",
          "CruzHacks Twitter",
          "CruzHacks Discord",
          "CruzHacks Reddit",
          "CruzHacks Email/Mailing List",
          "Another Org's Email/Mailing List",
          "Other UCSC Org's Social Media",
          "UCSC Campus/College Social Media",
          "Physical Flyers on Campus",
          "Banners on UCSC Loop Buses",
          "UCSC Barn Sign",
          "CruzHacks Pre-Hackathon Workshops",
          "CruzHacks Tabling (Cornucopia or other event)",
          "Baskin Engineering Newsletter",
          "Major League Hacking (MLH)",
          "Word-of-mouth/From a friend",
          "Don't Remember",
        ],
      },
    ],
  ],

  // Step 3
  [
    [{ text: "Get Connected!", type: "title" }],
    [
      {
        text: "If you were referred by a friend, what email did they use to apply?",
      },
      {
        inputType: "text",
        Icon: EnvelopeIcon,
        field: "cruzhacks_refferal_email",
      },
    ],
  ],

  // Step 4
  [
    [{ text: "Get Connected!", type: "title" }],
    [
      {
        text: "Were you referred by one of our partner organizations? If so, which one?",
      },
      {
        text: "If you don't know what a CruzHacks Partner Organization is, don't worry about this - you can leave this blank.",
        type: "disclaimer",
      },
      {
        inputType: "textarea",
        rows: 3,
        maxLength: 200,
        field: "cruzhacks_refferal_organization",
      },
    ],
    [
      { text: "Is there anything else you would like us to know?" },
      { inputType: "textarea", rows: 5, field: "anything_else" },
    ],
  ],
]
