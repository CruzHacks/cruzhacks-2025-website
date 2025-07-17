import React from "react"

// Import SVG assets here, assuming they are saved in an assets folder
import Shell2013 from "../../../../assets/PageDividers/shell-2013.svg"
import Shell2014 from "../../../../assets/PageDividers/shell-2014.svg"
import Shell2017 from "../../../../assets/PageDividers/shell-2017.svg"
import Shell2018 from "../../../../assets/PageDividers/shell-2018.svg"
import Shell2021 from "../../../../assets/PageDividers/shell-2021.svg"
import Shell2025 from "../../../../assets/PageDividers/shell-2025.svg"
import Shell2026 from "../../../../assets/PageDividers/shell-2026.svg"
import Stat1 from "../../../../assets/PageDividers/stat-1.svg"
import Stat2 from "../../../../assets/PageDividers/stat-2.svg"
import Stat3 from "../../../../assets/PageDividers/stat-3.svg"
import Stat4 from "../../../../assets/PageDividers/stat-4.svg"
import Stat5 from "../../../../assets/PageDividers/stat-5.svg"
import Waves from "../../../../assets/PageDividers/waves.svg"
import winner1 from "../../../../assets/2025winners/SatChat.png"
import winner2 from "../../../../assets/2025winners/Mirror.png"
import winner3 from "../../../../assets/2025winners/Minesweep.png"
import winner4 from "../../../../assets/2025winners/ShopShadow.png"

const Beach: React.FC = () => {
  return (
    <div className='relative bg-yellow-gradient font-body text-black'>
      {/* Sponsor Us Section */}
      <div className='mx-auto mb-8 max-w-5xl px-4 text-center'>
        <h1 className='mb-24 font-heading text-5xl font-bold text-sponsor_dark_orange md:text-7xl'>
          SPONSOR US!
        </h1>
        <h2 className='mb-4 font-heading text-3xl text-sponsor_light_orange md:text-5xl'>
          OUR MISSION
        </h2>
        <p className='mx-auto max-w-3xl font-subtext text-lg leading-relaxed tracking-wide text-sponsor_medium_orange md:text-xl'>
          CruzHacks is a non-profit, student-run annual hackathon at UC Santa
          Cruz. As one of the largest collegiate hackathons in California, we
          welcome hundreds of college and high school students every year.
          Backed with support from Major League Hacking (MLH), this year&apos;s
          event will take place from
          <span className='font-bold'> January 16th - 18th</span> at UC Santa
          Cruz!
        </p>
        <p className='mx-auto mt-4 max-w-3xl font-subtext text-lg leading-relaxed tracking-wide text-sponsor_medium_orange md:text-xl'>
          CruzHacks empowers students to explore, collaborate, and create. With
          a commitment to diversity, equity, and inclusion, we hope to inspire
          the next generation of innovators who will drive positive change and
          make a lasting impact.
        </p>
      </div>

      {/* History of CruzHacks Section */}
      <div className='py-10 text-center'>
        <h2 className='mb-4 font-heading text-4xl text-sponsor_light_orange md:text-5xl'>
          HISTORY OF CRUZHACKS
        </h2>
        <div className='mx-auto grid max-w-4xl grid-cols-2 place-items-center gap-6 md:grid-cols-3 md:gap-10'>
          <div className='w-36 text-center md:w-52'>
            <img src={Shell2013} alt='2013' className='mx-auto' />
          </div>
          <div className='w-36 text-center md:w-52'>
            <img src={Shell2014} alt='2014' className='mx-auto' />
          </div>
          <div className='w-36 text-center md:w-52'>
            <img src={Shell2017} alt='2017' className='mx-auto' />
          </div>
          <div className='w-36 text-center md:w-52'>
            <img src={Shell2018} alt='2018' className='mx-auto' />
          </div>
          <div className='w-36 text-center md:w-52'>
            <img src={Shell2021} alt='2021' className='mx-auto' />
          </div>
          <div className='w-36 text-center md:w-52'>
            <img src={Shell2025} alt='2025' className='mx-auto' />
          </div>
          <div></div>
          <div className='w-36 text-center md:w-52'>
            <img src={Shell2026} alt='2026' className='mx-auto' />
          </div>
        </div>
      </div>

      {/* CruzHacks 2024 Statistics Section */}
      <div className='mx-auto max-w-5xl px-4 py-10 text-center'>
        <h2 className='mb-10 font-heading text-4xl text-sponsor_light_orange md:text-5xl'>
          CRUZHACKS 2025 STATISTICS
        </h2>
        <div className='grid grid-cols-2 gap-3 font-subtext font-medium sm:grid-cols-3 md:gap-4 lg:grid-cols-5'>
          <div className='mx-auto w-28 text-center md:w-40'>
            <img src={Stat1} alt='800+ Applications' className='mx-auto' />
            <p className='mt-2 text-base text-deep_orange md:text-xl'>
              Applications
            </p>
          </div>
          <div className='mx-auto w-28 text-center md:w-40'>
            <img src={Stat2} alt='65+ Projects Submitted' className='mx-auto' />
            <p className='mt-2 text-base text-deep_orange md:text-xl'>
              Projects Submitted
            </p>
          </div>
          <div className='mx-auto w-28 text-center md:w-40'>
            <img src={Stat3} alt='13% Non-UCSC Hackers' className='mx-auto' />
            <p className='mt-2 text-base text-deep_orange md:text-xl'>
              Non-UCSC Hackers
            </p>
          </div>
          <div className='mx-auto w-28 text-center md:w-40'>
            <img src={Stat4} alt='67% First-Time Hackers' className='mx-auto' />
            <p className='mt-2 text-base text-deep_orange md:text-xl'>
              First-Time Hackers
            </p>
          </div>
          <div className='mx-auto w-28 text-center md:w-40'>
            <img
              src={Stat5}
              alt='23% Female/Non-Binary Hackers'
              className='mx-auto'
            />
            <p className='mt-2 text-base text-deep_orange md:text-xl'>
              Female/Non-Binary Hackers
            </p>
          </div>
        </div>
      </div>

      {/* past projects */}
      <div className='mx-auto max-w-5xl px-4 py-10 text-center'>
        <h2 className='mb-10 font-heading text-4xl text-sponsor_dark_orange md:text-6xl'>
          PROJECTS MADE POSSIBLE BY YOU
        </h2>
        <a href='https://cruzhacks-2025.devpost.com/'>
          <h1 className='mb-10 font-heading text-3xl text-sponsor_light_orange hover:text-medium_orange md:text-4xl'>
            DEVPOST - CRUZHACKS2025 WINNERS
          </h1>
        </a>

        {/* POST 1 */}
        <div className='grid grid-cols-2 gap-3 font-subtext font-medium sm:grid-cols-2 md:gap-28 lg:-ml-16 lg:mt-12 lg:grid-cols-4'>
          <div className='mx-auto w-40 bg-sponsor_light_orange p-3 text-center md:w-64'>
            <a href='https://devpost.com/software/satchat'>
              <img
                src={winner1}
                alt="SatChat - Health Hacks Winner '25"
                className='mx-auto'
              />
              <p className='mt-5 text-base text-dark_orange hover:text-deep_orange md:text-2xl'>
                <b>SatChat</b>
              </p>
            </a>
            <p className='mb-4 text-deep_orange'>Health Hacks</p>
            <p className='text-[#FFFFFF] lg:text-xl'>
              Access AI in dire situations with satellite connection.
            </p>
          </div>

          {/* POST 2 */}
          <div className='mx-auto w-40 bg-sponsor_light_orange p-3 text-center md:w-64'>
            <a href='https://devpost.com/software/mirror-yo9mcb?_gl=1*1gahrs0*_gcl_au*NTMzMzYyMzI3LjE3NTIwMDQ0MTA.*_ga*OTI2MDMxMzM4LjE3NTIwMDQ0MTA.*_ga_0YHJK3Y10M*czE3NTI2NTk5MTIkbzIkZzEkdDE3NTI2NjAzNTMkajU3JGwwJGgwn'>
              <img
                src={winner2}
                alt="Mirror - President's Pick Winner '25"
                className='mx-auto'
              />
              <p className='mt-5 text-base text-dark_orange hover:text-deep_orange md:text-2xl'>
                {" "}
                <b>Mirror</b>
              </p>
            </a>
            <p className='mb-4 text-deep_orange'>President&apos;s Pick</p>
            <p className='text-[#FFFFFF] lg:text-xl'>
              A mobile app which democratizes access to personalized beauty and
              health advice.
            </p>
          </div>

          <div className='mx-auto w-40 bg-sponsor_light_orange p-3 text-center md:w-64'>
            <a href='https://devpost.com/software/minesweep?_gl=1*c7kaa3*_gcl_au*NTMzMzYyMzI3LjE3NTIwMDQ0MTA.*_ga*OTI2MDMxMzM4LjE3NTIwMDQ0MTA.*_ga_0YHJK3Y10M*czE3NTI2NTk5MTIkbzIkZzEkdDE3NTI2NjA2NjkkajYwJGwwJGgw'>
              <img
                src={winner3}
                alt="Minesweep - Most Ambitious Winner '25"
                className='mx-auto'
              />
              <p className='mt-5 text-base text-dark_orange hover:text-deep_orange md:text-2xl'>
                <b>Minesweep</b>
              </p>
            </a>
            <p className='mb-4 text-deep_orange'>Most Ambitious</p>
            <p className='text-[#FFFFFF] lg:text-xl'>
              An navigation system used to promote safe mobility and prevent
              activity in areas with reported explosion cases.
            </p>
          </div>

          <div className='mx-auto w-40 bg-sponsor_light_orange p-3 text-center md:w-64'>
            <a href='https://devpost.com/software/shopshadow?_gl=1*yu7v5h*_gcl_au*NTMzMzYyMzI3LjE3NTIwMDQ0MTA.*_ga*OTI2MDMxMzM4LjE3NTIwMDQ0MTA.*_ga_0YHJK3Y10M*czE3NTI3MTg5NTUkbzMkZzEkdDE3NTI3MTkxODEkajMyJGwwJGgw'>
              <img
                src={winner4}
                alt="ShopShadow - Best AI Hack '25"
                className='mx-auto'
              />
              <p className='mt-5 text-base text-dark_orange hover:text-deep_orange md:text-2xl'>
                <b>ShopShadow</b>
              </p>
            </a>

            <p className='mb-4 text-deep_orange'>Best AI Hack</p>
            <p className='text-[#FFFFFF] lg:text-xl'>
              An AI powered smart shopping cart that scans items and bills them
              directly.
            </p>
          </div>
        </div>
      </div>
      <img src={Waves} alt='Waves illustration' className='w-screen' />
    </div>
  )
}

export default Beach
