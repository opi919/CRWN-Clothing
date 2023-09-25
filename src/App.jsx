import Home from "./routes/home/Home"
import Navigation from "./routes/navigation/Navigation"
import Authentication from "./routes/authentication/Authentication"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
