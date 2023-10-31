import React from "react"
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../utils/firebaseapp"

const email = "cookies951@gmail.com"
const password = "password"

const createAccount = async () => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log("User created", userCredential.user)
    })
    .catch(error => {
      console.error(error)
    })
}

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <button
        className='rounded-xl bg-indigo-500 px-5 py-2'
        onClick={createAccount}
      >
        Create User
      </button>
    </div>
  )
}

export default Signup
