


import { useState } from "react";
import { api } from "../api/api";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await api.post("/login", formData)
            
            const data = response.data

            if(response.status != 201 && response.status != 200) {
                toast.error(response.data.message || "Something went wrong, please try again!")
            }

            toast.success(response.data.message)
            navigate("/")

            setFormData({
                email: "",
                password: ""
            })

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
                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} className="w-full border border-amber-50 focus:border-amber-200 focus:outline-none p-[10px] rounded-xl"/>
             </div>

             <div className="flex flex-col gap-[5px] items-center md:flex-row">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} className="w-full border border-amber-50 focus:border-amber-200 focus:outline-none p-[10px] rounded-xl"/>
             </div>

             <input type="submit" value="Login" className="p-[10px] bg-blue-700 hover:bg-blue-500 text-white rounded-xl w-1/4" />
          </motion.form>
          </AnimatePresence>


        </main>
    )
}