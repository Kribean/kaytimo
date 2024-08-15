// pages/account.js
import { CardActivity } from '@/components/CardActivity';
import { Navbar } from '@/components/Navbar';
import React from 'react';

const ActivitiesPage = () => {
  const sectionElement = [
    {acti:'Activité Nocturne',imgsrc:"../image/nightlife.png"},
    {acti:'Restaurant',imgsrc:"../image/restaurant.png"},
    {acti:'Plages',imgsrc:"../image/hiking.png"},
    {acti:'Shopping',imgsrc:"../image/shopping.png"},
    {acti:'Activité Atypique',imgsrc:"../image/insolite.png"}]

  return (
    <div className=" flex flex-col min-h-screen bg-base-200">
<Navbar/>
<div className='flex flex-col w-full justify-center items-center pt-[200px]'>
<h1 className='text-5xl font-bold'>Les activités</h1>
</div>
<section className='flex flex-col m-4'>
  <h2 className='text-xl font-bold'>Filtre</h2>
  <div className='flex flex-wrap gap-2 items-center w-full'>
  {
    sectionElement.map((e,index)=>{return <button key={index} className="btn btn-sm btn-active btn-neutral">{e.acti}</button>})
  }
  </div>


</section>
<section className='flex flex-wrap gap-4'>
<CardActivity/>
<CardActivity/>
<CardActivity/>
</section>
    </div>
  );
};

export default ActivitiesPage;
