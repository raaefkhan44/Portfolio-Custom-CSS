import Link from "next/link"
import "../style/navbar.css"

export default function Navbar(){
  return (
    <div className="navbar-box">
      <h1><Link href="/">Portfolio</Link></h1>  
      
      <ul >
        <li ><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/project">Project</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    
    </div>
  )
}
