import React, { useEffect, useState } from "react"

import {
  collection,
  addDoc,
  query,
  getDocs,
  Timestamp,
} from "firebase/firestore"
import { db } from "../../utils/firebaseapp"

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

const getDocuments = async () => {
  const q = query(collection(db, "Test"))

  const res: any = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => res.push(doc.data()))

  return res as TestDoc[]
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

  useEffect(() => {
    const loadDocs = async () => {
      const docs = await getDocuments()
      setDocuments(docs)
      setLoading(false)
    }
    loadDocs()
  }, [])

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-center text-xl font-bold'>This is the Home Page</h1>
      <div>
        <p className='py-5'>Example env variable (VITE_EXAMPLE_ENV):</p>
        <p>&quot;{ENV_VAR}&quot;</p>
      </div>
      <div>
        <h1 className='py-5 text-lg font-bold'>Firebase Firestore Test</h1>
        <button
          className='rounded-xl bg-emerald-500 p-3 text-white'
          onClick={createDocument}
        >
          Create Document
        </button>

        <p className='pt-5'>Documents:</p>
        <ul className='list-disc space-y-2 pl-6 pt-4'>
          {loading
            ? [...Array(5).keys()].map(i => (
                <li key={i}>
                  <span className='inline-block h-4 w-60 animate-pulse rounded bg-slate-200'></span>
                </li>
              ))
            : documents.map((doc, i) => (
                <li key={i}>
                  <Document {...doc} />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
