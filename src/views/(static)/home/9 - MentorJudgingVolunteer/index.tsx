import React from "react"
import BeachDivider from "../../../../assets/PageDividers/beachdivider1.svg"
import { Link } from "react-router-dom"
import Starfish1 from "../../../../assets/illustrations/Starfish1.svg"
import Starfish2 from "../../../../assets/illustrations/Starfish2.svg"

const MentorJudgeVolunteerBlurb = ({ id }: { id?: string }) => {
  return (
    <div>
        <div className='flex w-full  bg-beach_yellow '>
            <div className='absolute -mt-28' id={id}></div>
            
            <div className='justify-between items-center'>
                <h1 className='font-heading text-4xl uppercase text-center md:text-center md:text-5xl text-sponsor_dark_orange '>
                    Help Innovators Shine
                </h1>
                <div className="flex flex-col justify-center align-middle items-center mt-10">

                    <p className=' font-subtext max-w-4xl mx-20 text-lg text-center lg:text-xl text-sponsor_light_orange'>
                    Want to make a lasting impact at CruzHacks? Apply today to be a mentor, judge, or volunteer! Your expertise, feedback, and support are essential in helping us create an unforgettable experience for our hackers. By joining us, you&apos;ll play a key role in shaping the next generation of innovators and ensuring that each year&apos;s hackathon is bigger and better than the last. We truly appreciate your contribution to making CruzHacks a success!                            </p>
                    
                    
                    <div className="flex flex-col md:flex-row justify-center pt-16 mx-10 md:mx-48 gap-16">
                        <div className='flex flex-col gap-4 bg-[#8C88A5] px-8 py-4 rounded-3xl '>
                            <h1 className="font-subtext text-[#FFFFFF] text-lg md:text-2xl"><b>Mentor</b></h1>
                            <p className="text-[#FFFFFF]">Help guide hackers and provide insights on how to approach coding, design, or problem-solving issues. Mentors encourage creativity, and help hackers stay on track to achieving their project goals!</p>

                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLScH6THyJBAObDLq4eHSpeOXL2I788mbpyE7OYFkpopzXzVwcA/viewform" 
                                className="flex justify-center items-center px-6 py-2 border-2 my-4 border-[#FFFFFF] hover:bg-off_white/30">
                                
                                <p className="text-[#FFFFFF] text-lg"><b>APPLY</b></p>
                            </a>
                        </div>
                        <div className='flex flex-col gap-4 bg-[#EF9A87] px-8 py-4 rounded-3xl'>
                            <h1 className="font-subtext text-[#FFFFFF] text-lg md:text-2xl "><b>Judge</b></h1>
                            <p className="text-[#FFFFFF]">Evaluate teams based on functionality, creativity, and impact, and identify projects that best align with this year&apos;s prize tracks. Judges provide constructive feedback, helping hackers grow and learn</p>
                            
                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLScH6THyJBAObDLq4eHSpeOXL2I788mbpyE7OYFkpopzXzVwcA/viewform" 
                                className="flex justify-center items-center px-6 py-2 border-2 my-4 border-[#FFFFFF] hover:bg-off_white/30">
                                
                                <p className="text-[#FFFFFF] text-lg"><b>APPLY</b></p>
                            </a>
                        </div>
                        <div className='flex flex-col gap-4 bg-[# ] px-8 py-4 rounded-3xl'>
                            <h1 className="font-subtext text-[#FFFFFF] text-lg md:text-2xl"><b>Volunteer</b></h1>
                            <p className="text-[#FFFFFF]">Ensures the event runs smoothly by helping with operations, supplies and supporting participants. Help out day-of and setup to ensure hackers have a seemless experience</p>
                            
                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdesWqrObNNAgVfymbURV5rNWHLPfF52Uwhgfo3h1BR-I-tTA/viewform?usp=sf_link" 
                                className="flex justify-center items-center px-6 py-2 border-2 my-4 border-[#FFFFFF] hover:bg-off_white/30">
                                
                                <p className="text-[#FFFFFF] text-lg"><b>APPLY</b></p>
                            </a>
                        </div>
                    </div>
                </div>
                <img src={BeachDivider} alt='' className="w-screen mb-12"/>
            </div>
        </div>
    </div>
  )
}

export default MentorJudgeVolunteerBlurb
