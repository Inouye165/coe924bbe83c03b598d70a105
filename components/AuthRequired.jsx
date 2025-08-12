import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

export default function AuthRequired() {
    const { user } = useAuth()
    
    if (!user) {
        return (
            <Navigate 
                to="/login" 
                state={{message: "You must log in first"}} 
            />
        )
    }
    return <Outlet />
}