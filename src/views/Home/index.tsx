import React, { useEffect, useState } from "react"
import { collection, addDoc, Timestamp, onSnapshot } from "firebase/firestore"
import { db } from "../../utils/firebaseapp"
import { useAuth } from "../../contexts/auth"
import { checkRoleSynced } from "../../utils/functionsApi"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const ENV_VAR = import.meta.env.VITE_EXAMPLE_ENV_VAR || ""

type TestDoc = {
  name: string
  time: Timestamp
}

const createDocument = async () => {
  console.log("Creating document...")

  return await addDoc(collection(db, "Test"), {
    name: "New Document",
    time: Timestamp.fromDate(new Date()),
  })
}

const Document = ({ name, time }: TestDoc) => {
  const time_str =
    time && time.seconds && time.nanoseconds
      ? time.toDate().toLocaleString()
      : "Invalid date"

  return (
    <p>
      {name} <i>posted at {time_str}</i>
    </p>
  )
}

const Home = () => {
  const [documents, setDocuments] = useState<TestDoc[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [roleCheck, setRoleCheck] = useState<string>("")

  const {
    auth: { user },
  } = useAuth()

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Test"), snapshot => {
      setDocuments(
        snapshot.docs.map(doc => ({ ...(doc.data() as TestDoc), id: doc.id }))
      )
    })
    setLoading(false)
    return unsubscribe
  }, [])

  useEffect(() => {
    const loadRole = async () => {
      if (!user) return

      const rolesData = await checkRoleSynced(user)

      if ("message" in rolesData) {
        console.error(rolesData)
        return
      }

      if (rolesData.synced) {
        setRoleCheck("Synced!")
        return
      }

      setRoleCheck(JSON.stringify(rolesData))
    }

    if (user) loadRole()
  }, [user])

  return (
    <>
      <Navbar />
      <div className='flex min-h-screen flex-col gap-10 p-10'>
        <h1 className='text-center font-title text-4xl font-bold uppercase'>
          This is the Home Page
        </h1>
        <div>
          <p className='py-5'>Example env variable (VITE_EXAMPLE_ENV):</p>
          <p>&quot;{ENV_VAR}&quot;</p>
        </div>
        <div>
          <h1 className='py-5 text-lg font-bold'>Firebase Firestore Test</h1>
          <button
            className='bg-emerald-500 rounded-xl p-3 text-white'
            onClick={createDocument}
          >
            Create Document
          </button>

          <p className='pt-5'>Documents:</p>
          <ul className='list-disc space-y-2 pl-6 pt-4'>
            {loading
              ? [...Array(5).keys()].map(i => (
                  <li key={i}>
                    <span className='bg-slate-200 inline-block h-4 w-60 animate-pulse rounded'></span>
                  </li>
                ))
              : documents.map((doc, i) => (
                  <li key={i}>
                    <Document {...doc} />
                  </li>
                ))}
          </ul>
        </div>
        <div>
          <p>User Role Sync Check:</p>
          <p>{roleCheck}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
