import React from "react"
import { useState } from "react"
import { signInWithGooglePopup, signInAuthUserWithEmailAndPass } from "../../utils/firebase/Firebase"
import FormInput from "../form-input/FormInput"
import Button from "../button/Button"
import "./SignIn.scss"

const defaultFormValues = {
  email: "",
  password: "",
}

export default function SignIn() {
  const [formValues, setFormValues] = useState(defaultFormValues)
  const { email, password } = formValues

  const resetFormValues = () => {
    setFormValues(defaultFormValues)
  }

  const formSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPass(email, password)
      console.log(response)
      resetFormValues()
    } catch (err) {
      alert(err.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocFromAuth(user)
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form action="" onSubmit={formSubmit}>
        <FormInput label="Email" inputOptions={{ type: "email", name: "email", required: true, value: email, onChange: handleChange }} />

        <FormInput label="Password" inputOptions={{ type: "password", name: "password", required: true, value: password, onChange: handleChange }} />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}
