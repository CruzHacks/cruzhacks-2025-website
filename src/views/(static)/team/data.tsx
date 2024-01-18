import AjayBhatia from "../../../assets/organizers/Ajay Bhatia.jpg"
import AmberYuan from "../../../assets/organizers/Amber Yuan.jpg"
import AnnaJansson from "../../../assets/organizers/Anna Jansson.jpg"
import AudreyOstrom from "../../../assets/organizers/Audrey Ostrom.jpg"
import CarmenPadilla from "../../../assets/organizers/Carmen Padilla.jpg"
import ChrisHein from "../../../assets/organizers/Chris Hein.jpg"
import EdmunXu from "../../../assets/organizers/Edmund Xu.jpg"
import FrannyTrinidad from "../../../assets/organizers/Franny Trinidad.jpg"
import GloRamos from "../../../assets/organizers/Glo Ramos.jpg"
import JuliaYsabel from "../../../assets/organizers/Julia Ysabel.jpg"
import LiaFung from "../../../assets/organizers/Lia Fung.jpg"
import MaddisonLobo from "../../../assets/organizers/Maddison Lobo.jpg"
import MiaGallardo from "../../../assets/organizers/Mia Gallardo.jpg"
import OliverPearce from "../../../assets/organizers/Oliver Pearce.jpg"
import RiaChockalingam from "../../../assets/organizers/Ria Chockalingam.jpg"
import RussellElliot from "../../../assets/organizers/Russell Elliot.jpg"
import SohineeSaha from "../../../assets/organizers/Sohinee Saha.jpg"
import SophieHan from "../../../assets/organizers/Sophie Han.jpg"
import ZackTraczyk from "../../../assets/organizers/Zack Traczyk.jpg"

export const boardOfDirectors = [
  "Doug Erickson",
  "Nathan Westrup",
  "Amanda Rotella",
  "Suz Howells",
  "Mansi Saini",
  "Nada Miljkovic",
]

export const advisors = [
  "Alexi Sevastopoulos",
  "Dr. Ebonée Williams",
  "Mark Adams",
]

export type Organizer = {
  name: string
  role: string
  linkedIn?: string
  image?: string
}

export const organizers: Organizer[] = [
  {
    name: "Glomarie Ramos",
    role: "Co-President",
    image: GloRamos,
    linkedIn: "https://www.linkedin.com/in/glomarie-hazel-ramos/",
  },
  {
    name: "Lia Fung",
    role: "Co-President",
    image: LiaFung,
    linkedIn: "https://www.linkedin.com/in/liafung/",
  },

  // Design
  {
    name: "Ria Chockalingam",
    role: "Design Director",
    image: RiaChockalingam,
    linkedIn: "https://www.linkedin.com/in/ria-c-4b35351b1/",
  },
  {
    name: "Chris Hein",
    role: "Design",
    image: ChrisHein,
    linkedIn: "https://www.linkedin.com/in/christopher-hein-4982b7216/",
  },

  // Engineering
  {
    name: "Zack Traczyk",
    role: "Engineering Director",
    image: ZackTraczyk,
    linkedIn: "http://www.linkedin.com/in/zack-traczyk",
  },
  {
    name: "Ajay Bhatia",
    role: "Engineering",
    image: AjayBhatia,
    linkedIn: "https://www.linkedin.com/in/aj-bhatia/",
  },
  {
    name: "Russell Elliott",
    role: "Engineering",
    image: RussellElliot,
    linkedIn: "https://www.linkedin.com/in/russell-elliott-2001/",
  },
  {
    name: "Sophie Han",
    role: "Engineering",
    image: SophieHan,
    linkedIn: "https://www.linkedin.com/in/sophie-han-10347324a/",
  },

  // Logistics
  {
    name: "Mia Gallardo",
    role: "Logistics Director",
    image: MiaGallardo,
    linkedIn: "https://www.linkedin.com/in/mia-gallardo-9b05ba215/",
  },
  {
    name: "Amber Yuan",
    role: "Logistics",
    image: AmberYuan,
    linkedIn: "https://www.linkedin.com/in/amberyuan3/",
  },
  {
    name: "Anna Jansson",
    role: "Logistics",
    image: AnnaJansson,
    linkedIn: "https://www.linkedin.com/in/anna-c-jansson",
  },
  {
    name: "Audrey Ostrom",
    role: "Logistics",
    image: AudreyOstrom,
    linkedIn: "https://www.linkedin.com/in/audrey-ostrom/",
  },
  {
    name: "Carmen Padilla",
    role: "Logistics",
    image: CarmenPadilla,
    linkedIn: "https://www.linkedin.com/in/carmen-padilla-556815250",
  },
  {
    name: "Edmund Xu",
    role: "Logistics",
    image: EdmunXu,
    linkedIn: "https://www.linkedin.com/in/edmund-xu-22087623a/",
  },

  // Marketing
  {
    name: "Franny Trinidad",
    role: "Marketing Director",
    linkedIn: "https://www.linkedin.com/in/francesca-trinidad-3a8532210/",
    image: FrannyTrinidad,
  },
  {
    name: "Julia Ilada",
    role: "Marketing",
    image: JuliaYsabel,
    linkedIn: "https://www.linkedin.com/in/jules-ysabel-965221285/",
  },
  {
    name: "Maddison Lobo",
    role: "Marketing",
    image: MaddisonLobo,
    linkedIn: "https://www.linkedin.com/in/maddison-lobo-007998285",
  },

  // Sponsorship
  {
    name: "Sohinee Saha",
    role: "Sponsorship Director",
    image: SohineeSaha,
    linkedIn: "http://www.linkedin.com/in/%20sohinee-tiffany-saha",
  },
  {
    name: "Oliver Pearce",
    role: "Sponsorship",
    image: OliverPearce,
    linkedIn: "https://www.linkedin.com/in/oliverjpearce/",
  },
]
