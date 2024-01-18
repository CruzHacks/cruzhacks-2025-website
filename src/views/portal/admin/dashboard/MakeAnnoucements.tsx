import { push, ref, set } from "firebase/database"
import { serverTimestamp } from "firebase/firestore"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { rtdb } from "../../../../utils/firebaseapp"
import TextareaInput from "../../../../components/inputs/TextareaInput"
import Announcements from "../../../../components/Announcements"

const MakeAnnoucements = () => {
  const [notifyBody, setNotifyBody] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNotifyBody(e.target.value)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (notifyBody === "") {
      toast.error("An announcement must have a body... 😑")
      return
    }

    const newData = {
      title: "",
      body: notifyBody,
      date: serverTimestamp(),
    }

    const announcementsRef = ref(rtdb, "announcements")
    const newReference = push(announcementsRef)

    set(newReference, newData)
      .then(() => {
        console.log("Data added to announcements successfully!")
        toast.success("Successfully Delivered Announcement 😎")
        setNotifyBody("")
      })
      .catch(error => {
        console.error("Error adding data to announcements:", error)
        toast.error("Unable to deliver message, please try again. 🤬")
      })
  }

  return (
    <div className='flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-stretch'>
      <div className='w-full max-w-2xl flex-1 space-y-5 rounded-3xl bg-[#4659FF]/10 p-5 md:p-10 lg:max-w-none'>
        <div>
          <h2 className='font-title text-xl'>Create Announcement</h2>
          <p className='font-subtext text-sm text-white/70'>
            Remember when making an announcement here to put it in the Discord
            as well.
          </p>
        </div>
        <TextareaInput
          inputProps={{
            placeholder: "What do you want to announce?",
            value: notifyBody,
            onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleChange(e),
          }}
          showCount={false}
        />
        <button
          className='-mt-5 flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 font-subtext text-2xl leading-6 text-blue-imperial shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <Announcements />
    </div>
  )
}

export default MakeAnnoucements
