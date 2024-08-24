"use client"

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ButtonTheme } from '@/components/ButtonTheme';
import { CardActivity } from '@/components/CardActivity';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import data from "../../../public/data/data.json"

const ActivitiesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar/>
      <div className='flex flex-col w-full justify-center items-center pt-[200px]'>
        <h1 className='text-5xl font-bold'>Les activités</h1>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ActivitiesContent />
      </Suspense>

      <Footer/>
    </div>
  );
};

const ActivitiesContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('query');
  console.log(search, "koooooo");
  const [dataAct,setDataAct]=useState([]);
  const [tabIndxRemov,setTabIndxRemov]=useState([])

  const sectionElement = [
    { acti: 'Activité Nocturne', imgsrc: "../image/nightlife.png", indx: 1 },
    { acti: 'Restaurant', imgsrc: "../image/restaurant.png", indx: 2 },
    { acti: 'Plages', imgsrc: "../image/hiking.png", indx: 3 },
    { acti: 'Shopping', imgsrc: "../image/shopping.png", indx: 4 },
    { acti: 'Activité Atypique', imgsrc: "../image/insolite.png", indx: 5 }
  ];

  useEffect(()=>{
    setDataAct(data);
if(search){
  const dataFilter = data?.activities.filter((e)=>{return e.index===parseInt(search)});
  setDataAct(dataFilter)
}
  },[])


  return (
    <>
      <section className='flex flex-col m-4'>
        <h2 className='text-xl font-bold'>Filtre</h2>
        <div className='flex flex-wrap gap-2 items-center w-full'>
          {sectionElement.map((e, index) => {
            return <ButtonTheme key={index} acti={e.acti} indx={e.indx} setDataAct={setDataAct} dataAct={dataAct} initActiv={e.indx===parseInt(search?search:9999)?true:false} />
          }
            
          )}
        </div>
      </section>

      <section className='flex flex-wrap gap-4 min-h-screen justify-center items-center m-4 '>
{
  dataAct?.map((activity,index)=>{
    return <CardActivity       
    key={index}
    name_fr={activity.name_fr}
    imgSrc={activity.imgSrc}
    approxDistance={activity?.details.approx_distance}
    approxTime={activity?.details.approx_time}
    carRequired={activity?.details.car_required}
    targetAudience={activity.target_audience}
    suitableFor={activity?.details.suitable_for}
    description={activity?.details.description}
  />

  })
}
      </section>
    </>
  );
};

export default ActivitiesPage;
