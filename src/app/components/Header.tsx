'use client'
import { FaSignInAlt } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import ActiveLink from "./ActiveLInk";
export default function Header(){
    return (
    <header>
        <div>Wubante</div>
        <div className="flex items-center gap-6">
        <ActiveLink href="/sign-in"><FaSignInAlt/> Sign In</ActiveLink>
        <ActiveLink href="/sign-up"><TiUserAdd /> Sign Up</ActiveLink>
        </div>
    </header>)
}