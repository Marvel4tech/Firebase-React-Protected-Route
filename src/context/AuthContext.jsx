import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Context = createContext()

export function AuthContext({ children }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const auth = getAuth()

    useEffect(() => {
        let unsubscribe;
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            if(currentUser) {
                setUser(currentUser)
            } else{
                setUser(null)
            }
        })

        return () => {
            if(unsubscribe) unsubscribe()
        }

    }, [])

    return (
        <Context.Provider value={{ user, setUser, loading }}>
           {
            !loading && children
           }
        </Context.Provider>
    )

}