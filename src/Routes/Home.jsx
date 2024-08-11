import { getAuth, signOut } from "firebase/auth"

const Home = () => {
    const auth = getAuth()

    async function handleLogOut () {
        try{
            await signOut(auth)
            alert('Logged Out Successfully')
        }
        catch(error){
            alert('Attempt to Log Out FAILED')
        }
    }

  return (
    <main>
       <h1> This is Home Page</h1>
       <button onClick={() => handleLogOut()} className=" py-2 px-6 border rounded-lg mt-2
        hover:bg-red-700 hover:text-white duration-300">Log Out</button>
    </main>
  )
}

export default Home