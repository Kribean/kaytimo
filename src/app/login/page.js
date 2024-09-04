"use client"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link";

 const Login = ()=>{
    const {data:session}=useSession();
    const handleLogin=()=>{
        signIn("google",{ callbackUrl: "/" })
    

    }
    return(
        <div className="flex flex-col min-h-screen bg-base-200 justify-center items-center">
            
          {!session?.user? <>
            <h1 className="text-6xl font-extrabold">Kay Ti Mo</h1>
            <p>Bienvenue sur Kay Ti Mo, pour voir toutes les activités que nous vous recommandons, veuillez vous connecter</p>
        <div className='flex flex-col w-full justify-center items-center pt-[200px] gap-4'>  
            <button className="btn btn-success" onClick={()=>{handleLogin()}}>Login with Google</button>
            </div>
           </>:<>
           <h1 className="text-6xl font-extrabold">Kay Ti Mo</h1>
            <p>Vous êtes déjà connecté, cliquer sue le bouton ci dessous pour rejoindre notre page d'accueil</p>
        <div className='flex flex-col w-full justify-center items-center pt-[200px] gap-4'>  
            <Link className="btn btn-success" href={"/"}>Accueil</Link>
            </div>
           </> }

            
            </div>
    )
}

export default Login;