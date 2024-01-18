import React, { useState, useEffect } from "react"
import { ref, onValue } from "firebase/database"
import { rtdb } from "../utils/firebaseapp"

export type Announcement = {
  body: string
  date: string
  title: string
}

const convertDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString("default", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  })
}

const convertTime = (date: string) => {
  const d = new Date(date)
  return d.toLocaleTimeString("default", { hour: "numeric", minute: "2-digit" })
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [live, setLive] = useState(false)

  useEffect(() => {
    const dbRef = ref(rtdb, "announcements")

    // Listen for changes in the 'announcements' node
    onValue(dbRef, snapshot => {
      const announcementsData = snapshot.val()
      if (announcementsData) {
        const announcementsArray = Object.keys(announcementsData).map(key => {
          return announcementsData[key]
        })
        announcementsArray.sort((a, b) => b.date - a.date)
        setAnnouncements(announcementsArray)
      } else {
        setAnnouncements([])
      }
    })

    return () => {
      onValue(dbRef, () => {})
    }
  }, [])

  // Update live indicator
  useEffect(() => {
    const connectedRef = ref(rtdb, ".info/connected")
    return onValue(connectedRef, snap => {
      if (snap.val() === true) {
        setLive(true)
      } else {
        setLive(false)
      }
    })
  }, [])

  return (
    <div className='w-full max-w-2xl space-y-3 rounded-3xl bg-[#4659FF]/10 p-5 md:p-10'>
      <h1 className='flex items-center gap-3 pb-3 pt-10 font-title text-xl font-bold uppercase md:gap-5 md:pt-0 md:text-2xl'>
        <div
          className={
            "h-4 w-4 rounded-full shadow-md md:h-7 md:w-7 " +
            (live ? "bg-[#82D06F] " : "bg-[#ff5050]")
          }
        >
          <div
            className={
              "h-4 w-4 animate-ping rounded-full shadow-md md:h-7 md:w-7 " +
              (live ? "bg-[#8fe27a8f] " : "bg-[#ff7a7a8c]")
            }
          ></div>
        </div>
        Live Now
      </h1>

      {announcements && announcements.length > 0 ? (
        <ul className='flex h-80 grow flex-col gap-5 overflow-y-scroll rounded py-5 md:bg-[#D9D9D91A] md:p-10'>
          {announcements.map((announcement: Announcement, key: number) => {
            return (
              <li className='border-b border-[#D7D7D7]' key={key}>
                <p className='text-[#61A564]'>
                  {convertTime(announcement.date)}
                </p>
                <p className='py-2 md:p-5 md:px-10'>{announcement.body}</p>
                <p className='float-right text-[#A1A1A1]'>
                  {convertDate(announcement.date)}
                </p>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className='flex h-80 flex-col items-center justify-center rounded py-5 md:bg-[#D9D9D91A] md:p-10'>
          <p className='text-center'>No Announcements yet, stay tuned!</p>
        </div>
      )}
    </div>
  )
}

export default Announcements
