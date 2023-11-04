# CruzHacks 2024 - Main Site

CruzHacks 2024 main site built with React, Typescript, Tailwind,and hosted with firebase.

# Available Scripts

- `yarn start` starts a development server
- `yarn build` creates a production build
- `yarn preview` preview the production build
- `yarn lint:ts` runs the linter for all typescript files
- `yarn lint:css` runs the linter for all scss files
- `yarn format` runs the prettier formatter for all typescript files

# Firestore Schema

_NOTE: The following schema is for quick reference and not strictly enforced, double check [the backend schema file to see a more updated version](https://github.com/CruzHacks/cruzhacks-2024-backend/blob/development/functions/src/utils/schema.ts) and keep in mind that the Firestore is inherently unstructured_

#### Auth Related Collections

- user_roles/:email
  - role: "applicant" | "hacker" | "judge" | "admin"
  - \_last_committed: Firestore Timestamp

#### Application Related Collections

- applications/:email
  - first_name: string
  - last_name: string
  - phone_number: string
  - age: number
  - country: string
  - school: string
  - education_level: string
  - graduation_year: string (optional)
  - highest_education_level: string (optional)
  - ucsc_college_affiliation: string (optional)
  - area_of_study: string
  - first_hackathon: boolean
  - ethnic_background: string[]
  - sexual_orientation: string
  - underepresented_group: boolean (optional)
