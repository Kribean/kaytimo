"use client"
// pages/account.js
 
import { useSearchParams } from 'next/navigation'
import { ButtonTheme } from '@/components/ButtonTheme';
import { CardActivity } from '@/components/CardActivity';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';

const ActivitiesPage = () => {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('query')
  console.log(search,"koooooo")
  const sectionElement = [
    {acti:'Activité Nocturne',imgsrc:"../image/nightlife.png",indx:1},
    {acti:'Restaurant',imgsrc:"../image/restaurant.png",indx:2},
    {acti:'Plages',imgsrc:"../image/hiking.png",indx:3},
    {acti:'Shopping',imgsrc:"../image/shopping.png",indx:4},
    {acti:'Activité Atypique',imgsrc:"../image/insolite.png",indx:5}]

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
    sectionElement.map((e,index)=>{return <ButtonTheme key={index} acti={e.acti} indx={e.indx}/>})
  }
  </div>


</section>
<section className='flex flex-wrap gap-4'>
<CardActivity/>
<CardActivity/>
<CardActivity/>
</section>
<Footer/>
    </div>
  );
};

export default ActivitiesPage;
