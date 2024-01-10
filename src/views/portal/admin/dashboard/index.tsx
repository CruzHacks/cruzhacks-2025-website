import React from "react"
import { ReChartsArray, Statistics } from "../../../../utils/types"
import useStatistics from "../../../../hooks/useStatistics"
import {
  LineChart,
  BarChart,
  PieChart,
  SimpleTable,
} from "../../../../components/Charts"

const DashboardAdmin = () => {
  const { isError, isLoading, error, data: statistics } = useStatistics()

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='font-title text-xl'>Dashboard</h1>

      {isLoading && (
        <div className='flex h-60 justify-center'>
          <div
            role='status'
            className='flex w-full items-center justify-center'
          >
            <svg
              aria-hidden='true'
              className='h-20 w-20 animate-spin fill-white text-blue-imperial/30'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}

      {isError && (
        <div className='flex min-h-full w-full flex-col items-center justify-center p-10'>
          <p className='font-subtext leading-8 text-error'>
            Error while fetching statistics:
          </p>
          <p className='break-all font-subtext leading-8 text-error'>
            {error.message}
          </p>
        </div>
      )}

      {!isError && !isLoading && statistics && (
        <div className='space-y-10'>
          <SubmissionsBreakdown submissions={statistics.submissions} />
          <DemographicsIdentityBreakdown
            demographics={statistics.demographics}
          />
          <DemographicsEducationBreakdown
            demographics={statistics.demographics}
          />
          <LogisticsBreakdown logistics={statistics.logistics} />
          <ReferalBreakdown referral={statistics.referral} />
        </div>
      )}
    </div>
  )
}

const SubmissionsBreakdown = ({
  submissions,
}: {
  submissions: {
    per_day: ReChartsArray
    total: number
    accepted: number
    rejected: number
    approvalRate: number
  }
}) => {
  if (!submissions) return null

  let total_submissions = 0

  const total_submissions_over_time = submissions.per_day.map(entry => {
    return {
      name: entry.name,
      value: (total_submissions += entry.value),
    }
  })

  return (
    <div className='rounded-3xl bg-[#4659FF]/10 p-10 md:space-y-10'>
      <h2 className='font-title text-xl uppercase underline'>Submissions</h2>

      <div className='flex items-center justify-center'>
        <div className='flex w-full max-w-5xl flex-col items-center justify-center lg:flex-row'>
          <LineChart
            data={total_submissions_over_time}
            title='Total Applications Over Time'
            label='total apps'
          />
          <div className='flex flex-col items-center gap-2 p-10'>
            <p className='w-full rounded-lg bg-blue-imperial px-10 py-5 text-center font-subtext text-xl font-bold text-gold ring-2 ring-inset ring-white/10'>
              {submissions.total} Total Submissions
            </p>
            <div className='flex w-full items-center justify-center gap-2'>
              <p className='grow rounded-lg bg-blue-imperial p-5 text-center font-subtext text-xs font-bold text-pink ring-2 ring-inset ring-white/10'>
                {submissions.accepted} Accepted
              </p>
              <p className='grow rounded-lg bg-blue-imperial p-5 text-center font-subtext text-xs font-bold text-turquoise ring-2 ring-inset ring-white/10'>
                {submissions.rejected} Rejected
              </p>
            </div>
            <div className='flex w-full grow items-center justify-center rounded-lg bg-blue-imperial ring-2 ring-inset ring-white/10'>
              <PieChart
                data={[
                  { name: "Accepted", value: submissions.accepted },
                  { name: "Rejected", value: submissions.rejected },
                ]}
                width={310}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DemographicsIdentityBreakdown = ({
  demographics,
}: {
  demographics: Statistics["demographics"]
}) => {
  if (!demographics) return null

  return (
    <div className='space-y-10 rounded-3xl bg-[#4659FF]/10 p-10 md:space-y-20'>
      <h2 className='font-title text-xl uppercase underline'>
        Demographics - Identity
      </h2>

      <div className='space-y-10'>
        <div className='flex w-full flex-wrap justify-center gap-10 lg:gap-0'>
          <PieChart
            data={demographics.age}
            title='Age Groups'
            label='years old'
          />
          <PieChart
            data={demographics.age_range_18_to_25}
            title='Ages 18 - 25 Breakdown'
            label='years old'
          />
        </div>
        <div className='flex w-full flex-wrap justify-center gap-10 lg:gap-0'>
          <PieChart
            data={demographics.sexual_orientation}
            title='Sexual Orientation'
          />
          <div className='flex flex-col items-center'>
            <h3 className='font-title capitalize'>Gender Expression</h3>
            <div className='flex flex-wrap gap-10 md:flex-nowrap md:gap-0'>
              <PieChart data={demographics.gender_identity_one} />
              <PieChart data={demographics.gender_identity_two} />
            </div>
          </div>
        </div>

        <div className='flex w-full flex-col items-center justify-center lg:flex-row'>
          <div className='h-[40rem] w-full max-w-5xl py-10'>
            <BarChart
              data={demographics.ethnic_background}
              title='Ethnic Background'
            />
          </div>
          <PieChart
            data={demographics.underepresented_group}
            title='Underrepresented Group'
          />
        </div>
      </div>
    </div>
  )
}

const DemographicsEducationBreakdown = ({
  demographics,
}: {
  demographics: Statistics["demographics"]
}) => {
  if (!demographics) return null

  return (
    <div className='space-y-20 rounded-3xl bg-[#4659FF]/10 p-10'>
      <h2 className='font-title text-xl uppercase underline'>
        Demographics - Education
      </h2>

      <div className='space-y-10'>
        <div className='flex w-full flex-wrap justify-center gap-10 lg:gap-0'>
          <PieChart
            data={demographics.ucsc_vs_non_ucsc}
            title='UCSC vs Non-UCSC'
          />
          <PieChart
            data={demographics.ucsc_college_affiliation}
            title='UCSC College Affiliation'
          />
        </div>

        <div className='flex w-full flex-wrap justify-center gap-10 lg:gap-0'>
          <PieChart data={demographics.year_in_school} title='Year in School' />
          <PieChart
            data={demographics.graduation_year}
            title='Graduation Year'
          />
        </div>

        <div className='flex w-full flex-wrap justify-center gap-10 lg:gap-0'>
          <PieChart
            title='Area of Study'
            data={demographics.area_of_study_cs_ce_gd_other}
          />
          <PieChart
            data={demographics.hackathon_experience}
            title='Hackathon Experience'
          />
          <PieChart
            data={demographics.first_cruzhacks}
            title='First CruzHacks'
          />
        </div>
      </div>
    </div>
  )
}
const LogisticsBreakdown = ({
  logistics,
}: {
  logistics: Statistics["logistics"]
}) => {
  if (!logistics) return null

  return (
    <div className='space-y-10 rounded-3xl bg-[#4659FF]/10 p-10'>
      <h2 className='font-title text-xl uppercase underline'>Logistics</h2>

      <div className='flex flex-col items-start justify-center gap-10 md:flex-row'>
        <SimpleTable
          title='T-Shirt Sizes'
          fields={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
          data={logistics.tshirt_size}
          otherData={logistics.other_tshirt_size}
        />
        <SimpleTable
          title='Dietary Restrictions'
          fields={[
            "Gluten-Free",
            "Vegan",
            "Vegetarian",
            "No Beef",
            "No Pork",
            "Peanut Allergies",
            "Lactose Intolerant",
            "None",
          ]}
          data={logistics.dietary_restrictions}
          otherData={logistics.other_dietary_restrictions}
        />
      </div>

      <div className='space-y-20 lg:space-y-10'>
        <div className='flex w-full flex-wrap justify-center gap-10 lg:gap-0'>
          <PieChart
            data={logistics.need_travel_reimbursement}
            title='Need Travel Reimbursement'
          />
          <PieChart
            data={logistics.need_charter_bus}
            title='Need Charter Bus'
          />
          <PieChart
            data={logistics.need_campus_parking_permit}
            title='Need Parking Permit'
          />
        </div>

        <PieChart
          data={logistics.attendence_possible_wo_reimbursement}
          title='Will Attend Without Reimbursement'
        />
      </div>
    </div>
  )
}

const ReferalBreakdown = ({
  referral,
}: {
  referral: { [key: string]: ReChartsArray }
}) => {
  if (!referral) return null

  return (
    <div className='space-y-10 rounded-3xl bg-[#4659FF]/10 p-10'>
      <h2 className='font-title text-xl uppercase underline'>Referral</h2>

      <div className='flex items-center justify-center'>
        <div className='h-[40rem] w-full'>
          <BarChart data={referral.cruzhacks_referral} />
        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin
