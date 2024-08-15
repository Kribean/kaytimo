export const CardHome = ({title,imgsrc}) => {
    
  return (
<div className="flex flex-col w-[400px] shadow-xl h-[200px] items-center justify-center "
        style={{
            backgroundImage: `url(${imgsrc})`,
            backgroundPosition: "center", // Centrer l'image
            backgroundSize: "cover", // Ajuster l'image pour couvrir l'élément
            backgroundRepeat: "no-repeat", // Empêcher la répétition de l'image,
            backgroundColor: "hsla(240, 100%, 50%, 0.5)"
            //backgroundSize: "contain",
          }}>
            <div className="w-full h-full  flex flex-col justify-center items-center">
            <h2 className="card-title text-white font-bold">{title}</h2> 
            </div>
  
</div>
  );
};
