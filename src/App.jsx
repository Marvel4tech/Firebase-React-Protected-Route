import { Route, Router, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import Signin from "./Routes/Signin"
import Signup from "./Routes/Signup"
import { AuthContext } from "./context/AuthContext"
import { Protected } from "./Routes/Protected"

function App() {

  return (
    <main className=" container">
      <h1 className=" text-3xl font-bold text-center py-10">Firebase React Protected Route</h1>
      <AuthContext>
        <Routes>
          <Route path="/" element={<Protected> <Home /> </Protected>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthContext>
    </main>
  )
}

export default App
