"use client"
import { CardActivity } from "@/components/CardActivity";
import { useActivities } from "../../hooks/useActivities";

const ContainerActivities = ({ params }) => {
  const { actitype } = params;
  const { data, isFetching, error, isLoading } = useActivities(actitype); // Utiliser slug pour fetch les données

  console.log(data,"faya bun")
  if(isFetching) return <p>Fetching</p>
  if(error) return <p>error</p>


  return (
      <section className="flex flex-wrap gap-4 min-h-screen justify-center items-center m-4 ">
        {isLoading ? (
          <>iiiii</>
        ) : (
          <>
            {data?.map((activity, index) => {
              const {
                type_acti,
                name_fr,
                imgSrc,
                approxDistance,
                approxTime,
                carRequired,
                targetAudience,
                suitableFor,
                description,
              } = activity;
              return (
                <CardActivity
                  key={index}
                  type_acti={type_acti}
                  name_fr={name_fr}
                  imgSrc={imgSrc || "../image/insolite.png"}
                  approxDistance={approxDistance}
                  approxTime={approxTime}
                  carRequired={carRequired}
                  targetAudience={targetAudience}
                  suitableFor={suitableFor}
                  description={description}
                />
              );
            })}
          </>
        )}
      </section>

  );
};

export default ContainerActivities;
