import { useState } from "react"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleSignIn(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Successful')
            navigate('/')
        })
        .catch(() => {
            alert('Incorrect Details')
        })
        
    }

  return (
    <main>
        <h1 className=" font-semibold">Welcome, Sign in to your account</h1>
        <form className=" space-x-2" onSubmit={handleSignIn}>
            <input className=" border py-2 rounded-lg px-6" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className=" border py-2 rounded-lg px-6" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className=" button1">Log in</button>
        </form>
    </main>
  )
}

export default Signin