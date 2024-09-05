"use client"
import { signOut, useSession } from "next-auth/react";
import { Pacifico } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400", // Définir le poids de la police, 400 pour normal
});

export const Navbar = () => {
  const router = useRouter();
  const [isLog,setIsLog]=useState(false);
  const logoutFct=()=>{
    signOut();
  }
  const {data:session,status}=useSession();


useEffect(()=>{
  if(status==="unauthenticated")
  {
    router.replace("/login")
  }else{
    if(session?.user)
      {
        setIsLog(true)
      }
  }

},[session])
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          href="/"
          className={pacifico.className + " btn btn-ghost  text-xl "}
        >
          Kay Ti Mo
        </a>
      </div>
      <div className="flex-1">
        <div className=" hidden lg:block w-full menu menu-horizontal">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/activities/all">Toutes les Activités</a>
            </li>
            <li>
              <a href="/account">Mon Compte</a>
            </li>
            <li>
                 {!isLog? <a href="/login">Se connecter</a>:
                  <button onClick={()=>logoutFct()} className="btn btn-error">Déconnexion</button>}
                </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li className="mr-4 lg:hidden block">
            <details>
              <summary>Menu</summary>
              <ul className="p-2">
                <li>
                  <a href="/activities/all">Toutes les Activités</a>
                </li>
                <li>
                  <a href="/account">Mon Compte</a>
                </li>
                <li>
                 {!isLog? <a href="/login">Mon Compte</a>:
                  <button onClick={()=>logoutFct()} className="btn btn-error">Déconnexion</button>}
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
