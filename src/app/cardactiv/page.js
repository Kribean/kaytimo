import { NavbarAdmin } from '@/components/NavbarAdmin';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function CardActivList() {
  const cardActivs = await prisma.cardActiv.findMany();

  return (
<div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
<NavbarAdmin relativLink={"/cardactiv"}/>
  <h1 className="text-2xl font-bold mb-6 text-center">Liste des CardActiv</h1>
  <ul className="space-y-4">
    {cardActivs.map((card) => (
      <li key={card.id} className="border-b pb-2">
        <Link href={`/cardactiv/${card.id}`} className="text-lg text-blue-600 hover:underline">
          {card.name_fr}
        </Link>
      </li>
    ))}
  </ul>
  <div className="mt-6 text-center">
    <Link href="/cardactiv/new" className="btn btn-primary">
      Créer un nouveau CardActiv
    </Link>
  </div>
</div>

  );
}
