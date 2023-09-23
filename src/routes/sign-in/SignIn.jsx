import React from "react"
import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/Firebase"

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup()
  const userDocRef = await createUserDocFromAuth(user)
  console.log(userDocRef)
}

export default function SignIn() {
  return (
    <div>
      SignIn
      <button onClick={logGoogleUser}>Signin With Google</button>
    </div>
  )
}
