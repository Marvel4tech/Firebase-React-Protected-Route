import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignUp(e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Registration Successful')
        })
        .catch(() => {
            alert('Failed Registration')
        })
        
    }

  return (
    <main>
        <h1 className=" font-semibold">Create Your Account</h1>
        <form className=" space-x-2" onSubmit={handleSignUp}>
            <input className=" border py-2 rounded-lg px-6" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className=" border py-2 rounded-lg px-6" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className=" button2">Sign Up</button>
        </form>
    </main>
  )
}

export default Signup