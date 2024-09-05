import { ButtonTheme } from "./ButtonTheme";

export const FilterCard = ({params}) => {
    const {actitype} = params;
  const sectionElement = [
    { acti: "Tous", imgsrc: "../image/nightlife.png", indx: 100 },
    { acti: "Activité Nocturne", imgsrc: "../image/nightlife.png", indx: 1 },
    { acti: "Restaurant", imgsrc: "../image/restaurant.png", indx: 2 },
    { acti: "Plages", imgsrc: "../image/hiking.png", indx: 3 },
    { acti: "Shopping", imgsrc: "../image/shopping.png", indx: 4 },
    { acti: "Activité Atypique", imgsrc: "../image/insolite.png", indx: 5 },
  ];

  return (
    <section className="flex flex-col m-4">
      <h2 className="text-xl font-bold">Filtre</h2>
      <div className="flex flex-wrap gap-2 items-center w-full">
        {sectionElement.map((e, index) => {
          return (
            <ButtonTheme
              key={index}
              acti={e.acti}
              indx={e.indx}
              initActiv={
                String(e.indx) === String(actitype ? actitype : 9999) ? true : false
              }
            />
          );
        })}
      </div>
    </section>
  );
};
