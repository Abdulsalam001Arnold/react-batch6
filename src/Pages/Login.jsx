


import { useState } from "react";
import { api } from "../api/api";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore.js";
export default function LoginPage() {
    const navigate = useNavigate()
    const {login} = userStore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await login(email, password)
            toast.success("Login successful")
            navigate("/")
            setEmail("")
            setPassword("")

        } catch (err) {
            toast.error(err)
            throw new Error(err.message)
        }

    }

    return(
        <main className="w-full h-screen flex flex-col items-center justify-center">
          <ToastContainer/>

          <AnimatePresence>
          <motion.form action="POST" onSubmit={handleSubmit} className="w-1/2 border border-gray-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[10px]"
          initial={{ opacity: 0, y: -10}}
          animate={{ opacity: 1, y: 0}}
          transition={{duration: 0.9, ease: "easeInOut", stiffness: 700, bounce: 0.5}}
          >
          <h1 className="text-2xl font-bold text-center">
             Login to your account.
          </h1>
             <div className="flex flex-col gap-[5px] items-center md:flex-row">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full border border-amber-50 focus:border-amber-200 focus:outline-none p-[10px] rounded-xl"/>
             </div>

             <div className="flex flex-col gap-[5px] items-center md:flex-row">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} className="w-full border border-amber-50 focus:border-amber-200 focus:outline-none p-[10px] rounded-xl"/>
             </div>

             <input type="submit" value="Login" className="p-[10px] bg-blue-700 hover:bg-blue-500 text-white rounded-xl w-1/4" />
          </motion.form>
          </AnimatePresence>


        </main>
    )
}