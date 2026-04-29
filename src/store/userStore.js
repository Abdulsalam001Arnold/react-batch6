

import { create } from "zustand";
import { api } from "../api/api.js";

export const userStore = create((set) => ({
    user: null,
    isLoggedIn: false,


    signup: async ({username, email, password}) => {
        try{
        const response = await api.post("/post-user", {
            username,
            email,
            password
        })

        set({user: response.data.data, isLoggedIn: true})
        }catch(err) {
            console.log(err)
        }
    },

    login: async (email, password) => {
        try{
        const response = await api.post("/login", {
            email,
            password
        })

        set({user: response.data.data, isLoggedIn: true})
        }catch(err) {
            console.log(err)
        }
    },

    logOut: () => {
        set({user: null, isLoggedIn: false})
    },

    setUser: (user) => set({user, isLoggedIn: !!user})
}))