import { CardHome } from "./CardHome"

export const ContainerHome = ()=>{
    const sectionElement = [
        {acti:'Activité Nocturne',imgsrc:"../image/nightlife.png"},
        {acti:'Restaurant',imgsrc:"../image/restaurant.png"},
        {acti:'Plages',imgsrc:"../image/hiking.png"},
        {acti:'Shopping',imgsrc:"../image/shopping.png"},
        {acti:'Activité Atypique',imgsrc:"../image/insolite.png"}]
    return(
<div className="flex flex-col items-center justify-center bg-[#e5af4f] py-4 w-full min-h-screen">
<h2 className="text-4xl font-bold m-4">Activités</h2>
<div className="flex flex-wrap gap-4 items-center justify-center ">
            {
                sectionElement.map((e)=>{
                    return(<CardHome title={e.acti} imgsrc={e.imgsrc}/>)
                    
                })
            }

        </div>
</div>
    )
}