import SignUp from "../../components/sign-up/SignUp"
import SignIn from "../../components/sign-in/SignIn"
import "./Authentication.scss"

export default function Authentication() {
  return (
    <>
      <div className="authentication-container">
        <SignIn />
        <SignUp />
      </div>
    </>
  )
}
