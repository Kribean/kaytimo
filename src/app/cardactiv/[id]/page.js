import { NavbarAdmin } from '@/components/NavbarAdmin';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function CardActivDetail({ params }) {
  const { id } = params;
  
  // Assurez-vous que l'ID est bien converti en entier
  const cardActiv = await prisma.cardActiv.findUnique({
    where: { id: parseInt(id) },  // parseInt avec base 10 pour s'assurer que l'ID est bien un entier
  });

  if (!cardActiv) {
    return (
      <div>
        <h1>CardActiv non trouvé</h1>
      </div>
    );
  }

  return (
<div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
<NavbarAdmin relativLink={"../../cardactiv"}/>
  <h1 className="text-3xl font-bold mb-6 text-center">Détails du CardActiv</h1>
  <div className="space-y-4">
    <p className="text-lg">
      <strong className="font-semibold">Nom:</strong> {cardActiv.name_fr}
    </p>
    <p className="text-lg">
      <strong className="font-semibold">Image:</strong>
      <img 
        src={cardActiv.imgSrc} 
        alt={cardActiv.name_fr} 
        className="mt-2 rounded-md shadow-lg max-w-full h-auto"
      />
    </p>
    <p className="text-lg">
      <strong className="font-semibold">Distance approximative:</strong> {cardActiv.approxDistance} km
    </p>
    <p className="text-lg">
      <strong className="font-semibold">Temps approximatif:</strong> {cardActiv.approxTime} minutes
    </p>
    <p className="text-lg">
      <strong className="font-semibold">Voiture requise:</strong> {cardActiv.carRequired ? 'Oui' : 'Non'}
    </p>
    <p className="text-lg">
      <strong className="font-semibold">Description:</strong> {cardActiv.description}
    </p>
  </div>
</div>

  );
}
