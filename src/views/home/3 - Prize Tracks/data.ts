import Sustainability from "../../../assets/tracks/Sustainability.svg"
import Health from "../../../assets/tracks/Health.svg"
import Justice from "../../../assets/tracks/Justice.svg"
import Education from "../../../assets/tracks/Education.svg"
import Beginner from "../../../assets/tracks/Beginner.svg"
import AI from "../../../assets/tracks/AI.svg"
import UIUX from "../../../assets/tracks/UIUX.svg"
import Slug from "../../../assets/tracks/Slug.svg"

export type PrizeTrack = {
  icon: string
  title: string
  blurb: string
}

// NOTE: Due to tailwindcss's JIT mode, we can't use dynamic classes for background hover colors
export const TechCaresTracks: PrizeTrack[] = [
  {
    icon: Sustainability,
    title: "SUSTAINABILITY",
    blurb:
      "This category is dedicated to supporting sustainability and conservation efforts. How can we live harmoniously with our planet?",
  },
  {
    icon: Health,
    title: "Health",
    blurb:
      "This category aspires to address healthcare disparities. How do we support mental & physical well-being with accessible services?",
  },
  {
    icon: Justice,
    title: "Justice",
    blurb:
      "This category aims to drive innovation for civil liberty and social justice. How can we uphold truth & order in a (mis)information age?",
  },
  {
    icon: Education,
    title: "Education",
    blurb:
      "This track encourages students to create apps that have a substantial impact on fostering a more effective and stimulating learning environment.",
  },
]

export const CategoryTracks: PrizeTrack[] = [
  {
    icon: Beginner,
    title: "Beginner",
    blurb:
      "Hackathons are meant for everyone, especially our first-timers! We've created a prize category to reward teams composed of all first-time hackers.",
  },
  {
    icon: AI,
    title: "AI",
    blurb:
      "We're looking for projects that use AI/ML to solve a problem in a unique way!",
  },
  {
    icon: UIUX,
    title: "UI/UX",
    blurb:
      "Have a new paradigm for interaction design? Create a project that has an awesome user experience!",
  },
  {
    icon: Slug,
    title: "SlugHacks",
    blurb: "Create something that benefits the UC Santa Cruz campus community!",
  },
]
