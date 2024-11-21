import React from 'react';

// Import SVG assets here, assuming they are saved in an assets folder
import Shell2013 from '../../../../assets/PageDividers/shell-2013.svg';
import Shell2014 from '../../../../assets/PageDividers/shell-2014.svg';
import Shell2017 from '../../../../assets/PageDividers/shell-2017.svg';
import Shell2018 from '../../../../assets/PageDividers/shell-2018.svg';
import Shell2021 from '../../../../assets/PageDividers/shell-2021.svg';
import Shell2025 from '../../../../assets/PageDividers/shell-2025.svg';
import Stat1 from '../../../../assets/PageDividers/stat-1.svg';
import Stat2 from '../../../../assets/PageDividers/stat-2.svg';
import Stat3 from '../../../../assets/PageDividers/stat-3.svg';
import Stat4 from '../../../../assets/PageDividers/stat-4.svg';
import Stat5 from '../../../../assets/PageDividers/stat-5.svg';
import Waves from '../../../../assets/PageDividers/waves.svg';

const Beach: React.FC = () => {
  return (
    <div className="relative bg-yellow-gradient text-black font-body -gap-1">
      {/* Sponsor Us Section */}
      <div className="text-center mb-8 max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-sponsor_dark_orange mb-24">SPONSOR US!</h1>
        <h2 className="text-3xl md:text-5xl font-heading text-sponsor_light_orange mb-4">OUR MISSION</h2>
        <p className="text-lg md:text-xl leading-relaxed font-subtext max-w-3xl mx-auto text-sponsor_medium_orange tracking-wide">
          CruzHacks is a non-profit, student-run annual hackathon at UC Santa Cruz. As one of
          the largest collegiate hackathons in California, we welcome hundreds of college and high school students
          every year. Backed with support from Major League Hacking (MLH), this year's event will take place from
          <span className="font-bold"> January 18th - 20th</span> at UC Santa Cruz!
        </p>
        <p className="text-lg md:text-xl leading-relaxed font-subtext max-w-3xl mx-auto mt-4 text-sponsor_medium_orange tracking-wide">
          CruzHacks empowers students to explore, collaborate, and create. With a commitment to diversity, equity,
          and inclusion, we hope to inspire the next generation of innovators who will drive positive change and make a
          lasting impact.
        </p>
      </div>

      {/* History of CruzHacks Section */}
      <div className="py-10 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-sponsor_light_orange mb-4">HISTORY OF CRUZHACKS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto place-items-center">
          <div className="text-center w-36 md:w-52">
            <img src={Shell2013} alt="2013" className="mx-auto" />
          </div>
          <div className="text-center w-36 md:w-52">
            <img src={Shell2014} alt="2014" className="mx-auto" />
          </div>
          <div className="text-center w-36 md:w-52">
            <img src={Shell2017} alt="2017" className="mx-auto" />
          </div>
          <div className="text-center w-36 md:w-52">
            <img src={Shell2018} alt="2018" className="mx-auto" />
          </div>
          <div className="text-center w-36 md:w-52">
            <img src={Shell2021} alt="2021" className="mx-auto" />
          </div>
          <div className="text-center w-36 md:w-52">
            <img src={Shell2025} alt="2025" className="mx-auto" />
          </div>
        </div>
      </div>

      {/* CruzHacks 2024 Statistics Section */}
      <div className="py-10 text-center max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading text-sponsor_light_orange mb-10">CRUZHACKS 2024 STATISTICS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 font-subtext font-medium">
          <div className="text-center w-28 md:w-40 mx-auto">
            <img src={Stat1} alt="700+ Applications" className="mx-auto" />
            <p className="text-deep_orange mt-2 text-base md:text-xl">Applications</p>
          </div>
          <div className="text-center w-28 md:w-40 mx-auto">
            <img src={Stat2} alt="80+ Projects Submitted" className="mx-auto" />
            <p className="text-deep_orange mt-2 text-base md:text-xl">Projects Submitted</p>
          </div>
          <div className="text-center w-28 md:w-40 mx-auto">
            <img src={Stat3} alt="37% Non-UCSC Hackers" className="mx-auto" />
            <p className="text-deep_orange mt-2 text-base md:text-xl">Non-UCSC Hackers</p>
          </div>
          <div className="text-center w-28 md:w-40 mx-auto">
            <img src={Stat4} alt="40% First-Time Hackers" className="mx-auto" />
            <p className="text-deep_orange mt-2 text-base md:text-xl">First-Time Hackers</p>
          </div>
          <div className="text-center w-28 md:w-40 mx-auto">
            <img src={Stat5} alt="23% Female/Non-Binary Hackers" className="mx-auto" />
            <p className="text-deep_orange mt-2 text-base md:text-xl">Female/Non-Binary Hackers</p>
          </div>
        </div>
      </div>
      <img src={Waves} alt="Waves illustration" className='w-scree' />
    </div>
  );
};

export default Beach;
