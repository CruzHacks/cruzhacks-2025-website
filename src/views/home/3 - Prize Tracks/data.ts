/* eslint-disable max-len */
import { HeroIcon } from "../../../utils/types"
import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BeakerIcon,
  GlobeAmericasIcon,
  HeartIcon,
  HomeIcon,
  RectangleGroupIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline"

export type PrizeTrack = {
  Icon: HeroIcon
  color: string
  title: string
  blurb: string
}

// NOTE: Due to tailwindcss's JIT mode, we can't use dynamic classes for background hover colors
export const TechCaresTracks: PrizeTrack[] = [
  {
    Icon: GlobeAmericasIcon,
    color: "hover:bg-blue-button/80",
    title: "SUSTAINABILITY",
    blurb:
      "This category is dedicated to supporting sustainability and conservation efforts. How can we live harmoniously with our planet?",
  },
  {
    Icon: HeartIcon,
    color: "hover:bg-pink/80",
    title: "Health",
    blurb:
      "This category aspires to address healthcare disparities. How do we support mental & physical well-being with accessible services?",
  },
  {
    Icon: ScaleIcon,
    color: "hover:bg-orange/80",
    title: "Justice",
    blurb:
      "This category aims to drive innovation for civil liberty and social justice. How can we uphold truth & order in a (mis)information age?",
  },
  {
    Icon: AcademicCapIcon,
    color: "hover:bg-purple/80",
    title: "Education",
    blurb:
      "This track encourages students to create apps that have a substantial impact on fostering a more effective and stimulating learning environment, or that look to connect with people from the worlds of education, technology, and the fusion of the two.",
  },
]

export const CategoryTracks: PrizeTrack[] = [
  {
    Icon: ArrowTrendingUpIcon,
    title: "Beginner",
    color: "hover:bg-turquoise/50",
    blurb:
      "Hackathons are meant for everyone, especially our first-timers! We've created a prize category to reward teams composed of all first-time hackers.",
  },
  {
    Icon: BeakerIcon,
    title: "New Technologies",
    color: "hover:bg-purple-han/50",
    blurb:
      "Create a project using some of the newest technologies, such as AI/ML, AR/VR, or decentralized technology.",
  },
  {
    Icon: RectangleGroupIcon,
    title: "UI/UX",
    color: "hover:bg-blue-chinese/80",
    blurb:
      "Have a new paradigm for interaction design? Create a project that has an awesome user experience!",
  },
  {
    Icon: HomeIcon,
    title: "SlugHacks",
    color: "hover:bg-orange/70",
    blurb: "Create something that benefits the UC Santa Cruz campus community!",
  },
]
