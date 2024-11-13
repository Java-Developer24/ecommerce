import { About } from "@/app/about"
import { Contact } from "@/app/contact"
import { LandingPage } from "@/app/landing-page"
import { Login } from "@/app/login"
import { Products } from "@/app/products"

export default function Page() {
  return(<> 
  <LandingPage />
           <Products/>
           <Login/>
           <About/>
           <Contact/>
           </>)
    

}