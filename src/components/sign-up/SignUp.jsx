import React from "react"
import { useState } from "react"
import { createAuthUserWithEmailAndPass, createUserDocFromAuth } from "../../utils/firebase/Firebase"
import FormInput from "../form-input/FormInput"
import Button from "../button/Button"
import "./SignUp.scss"

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export default function SignUp() {
  const [formValues, setFormValues] = useState(defaultFormValues)
  const { displayName, email, password, confirmPassword } = formValues

  const resetFormValues = () => {
    setFormValues(defaultFormValues)
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) return

    try {
      const { user } = await createAuthUserWithEmailAndPass(email, password)
      await createUserDocFromAuth(user, { displayName })
      resetFormValues()
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form action="" onSubmit={formSubmit}>
        <FormInput label="Display Name" inputOptions={{ type: "text", name: "displayName", id: "", required: true, value: displayName, onChange: handleChange }} />

        <FormInput label="Email" inputOptions={{ type: "email", name: "Email", id: "", required: true, value: email, onChange: handleChange }} />

        <FormInput label="Password" inputOptions={{ type: "password", name: "password", id: "", required: true, value: password, onChange: handleChange }} />

        <FormInput label="Confirm Password" inputOptions={{ type: "password", name: "confirmPassword", id: "", required: true, value: confirmPassword, onChange: handleChange }} />

        <Button child="Sign up" type="submit" />
      </form>
    </div>
  )
}
