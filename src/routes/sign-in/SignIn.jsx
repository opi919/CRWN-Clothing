import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/Firebase"
import SignUp from "../../components/sign-up/SignUp"

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup()
  const userDocRef = await createUserDocFromAuth(user)
}

export default function SignIn() {
  return (
    <>
      <div>
        SignIn
        <button onClick={logGoogleUser}>Signin With Google Popup</button>
      </div>
      <SignUp />
    </>
  )
}
