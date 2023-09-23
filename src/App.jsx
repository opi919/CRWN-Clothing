import Home from "./routes/home/Home"
import Navigation from "./routes/navigation/Navigation"
import SignIn from "./routes/sign-in/SignIn"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
