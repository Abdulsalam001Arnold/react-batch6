

import { useState } from "react";
import { api } from "../api/api";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupPage() {


    return(
        <main className="w-full h-screen flex flex-col items-center justify-center">
          <ToastContainer/>

          <AnimatePresence>
          <motion.form action="POST" className="w-1/2 border border-gray-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[10px]"
          initial={{ opacity: 0, y: -10}}
          animate={{ opacity: 1, y: 0}}
          transition={{duration: 0.9, ease: "easeInOut", stiffness: 700, bounce: 0.5}}
          >
          <h1 className="text-2xl font-bold text-center">
             Create a new account.
          </h1>
             <div className="flex flex-col items-center gap-[5px] md:flex-row">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" className="w-full border border-amber-50 focus:border-amber-200 focus:outline-none p-[10px] rounded-xl"/>
             </div>

             <div className="flex flex-col gap-[5px] items-center md:flex-row">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" className="w-full border border-amber-50 focus:border-amber-200 focus:outline-none p-[10px] rounded-xl"/>
             </div>

             <div className="flex flex-col gap-[5px] items-center md:flex-row">
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" className="w-full border border-amber-50 focus:border-amber-200 focus:outline-none p-[10px] rounded-xl"/>
             </div>

             <input type="submit" value="Sign-up" className="p-[10px] bg-blue-700 hover:bg-blue-500 text-white rounded-xl w-1/4" />
          </motion.form>
          </AnimatePresence>


        </main>
    )
}