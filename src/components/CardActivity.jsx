export const CardActivity = ({ name_fr, imgSrc, approxDistance, approxTime, carRequired, targetAudience, suitableFor, description }) => {
    
    console.log(targetAudience, suitableFor)
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={imgSrc} alt={name_fr} className="rounded-t-lg w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name_fr}</h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span><strong>Distance:</strong> {approxDistance} km</span>
                    <span><strong>Temps pour y aller:</strong> {approxTime} heure</span>
                    <span><strong>Besoin d'une voiture:</strong> {carRequired ? 'Oui' : 'Non'}</span>
                    <span><strong>Target Audience:</strong> {targetAudience?.join(', ')}</span>
                    <span><strong>Suitable For:</strong> {suitableFor?.join(', ')}</span>
                </div>
            </div>
        </div>
    )
}
