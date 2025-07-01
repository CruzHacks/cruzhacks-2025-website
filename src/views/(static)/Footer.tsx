import React from "react"
import { socials } from "../../utils/socials"

const Footer: React.FC = () => {
  return (
    <footer className='flex items-center justify-center bg-ocean_medium_light_blue'>
      <div className='flex w-full max-w-7xl items-center justify-between p-5 px-10 text-sm text-white'>
        {/* Quick Looks hidden on Medium Screen Size*/}
        <div className='hidden grow gap-3 lg:flex'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:contact@cruzhacks.com'
          >
            Contact Us
          </a>
          <span>|</span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          >
            Code of Conduct
          </a>
          <span>|</span>
          <a
            target='_blank'
            href='https://docs.google.com/document/d/e/2PACX-1vRpuRz1HdQNinOPhP45YKZ2byY79aFhZSlbZOwjMuPx7BC4NxL-KWo4Dr1NXrQG-dy66IZMz40yzq8O/pub'
            rel='noopener noreferrer'
          >
            Participant Agreement
          </a>
        </div>

        <div className='flex grow flex-col items-center justify-between gap-5 md:flex-row'>
          <div className='flex flex-col items-center gap-2 text-center md:flex-row md:items-start md:text-left md:gap-5'>
            <p>This group is open to all students consistent with state and federal law, the UC Nondiscrimination Statement and the Nondiscrimination Policy Statement for University of California Publications Regarding Student-Related Matters.</p>
            <p>CRUZHACKS © 2025</p>
          </div>
          <div className='flex justify-end gap-5'>
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                target='_blank'
                rel='noopener noreferrer'
                href={url}
              >
                <img src={icon} alt={`${name} Icon`} className='h-8 w-auto' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
