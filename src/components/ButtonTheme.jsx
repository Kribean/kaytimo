"use client";

import { useState } from "react";
import data from "../../public/data/data.json"
export const ButtonTheme = ({ acti, indx,dataAct,setDataAct,initActiv }) => {
  const [isActive, setIsActive] = useState(initActiv);
  console.log("helloBooo :",indx,"initActiv : ",initActiv)
  const changeTab = ()=>{
    console.log("hello :",indx,"initActiv : ",initActiv)

    if(isActive)
    {
      setDataAct(dataAct.filter((e)=>{return (e.index!==indx)}))
    }else{
      const dataAlt =  data?.activities.filter((e)=>{return (e.index===indx)});
      console.log(dataAlt,"opoppp",dataAct)
      setDataAct([...dataAct,...dataAlt])
    }
    setIsActive(!isActive);
  }

  return (
    <button
      className={(isActive ? "btn-neutral" : "btn-ghost") + " btn btn-sm"}
      onClick={() => {
        changeTab()
      }}
    >
      {acti}
    </button>
  );
};
