"use client"

import { PrismaClient } from '@prisma/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { NavbarAdmin } from '@/components/NavbarAdmin';

const prisma = new PrismaClient();

export default async function EditCardActiv({ params }) {
  const { id } = params;
  const cardActiv = await prisma.cardActiv.findUnique({ where: { id: parseInt(id) } });

  const [formData, setFormData] = useState({
    name_fr: cardActiv.name_fr,
    imgSrc: cardActiv.imgSrc,
    approxDistance: cardActiv.approxDistance,
    approxTime: cardActiv.approxTime,
    carRequired: cardActiv.carRequired,
    targetAudience: JSON.parse(cardActiv.targetAudience),
    suitableFor: JSON.parse(cardActiv.suitableFor),
    description: cardActiv.description,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/cardactiv`, {
      method: 'PUT',
      body: JSON.stringify({ id: cardActiv.id, ...formData }),
      headers: { 'Content-Type': 'application/json' },
    });
    router.push(`/cardactiv/${cardActiv.id}`);
  };

  return (
    <div className='w-full'>
      <NavbarAdmin relativLink={"../.."}/>
      <h1>Éditer CardActiv</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" name="name_fr" value={formData.name_fr} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="text" name="imgSrc" value={formData.imgSrc} onChange={handleChange} />
        </label>
        <label>
          Distance approximative:
          <input type="number" name="approxDistance" value={formData.approxDistance} onChange={handleChange} />
        </label>
        <label>
          Temps approximatif:
          <input type="number" name="approxTime" value={formData.approxTime} onChange={handleChange} />
        </label>
        <label>
          Voiture requise:
          <input type="checkbox" name="carRequired" checked={formData.carRequired} onChange={handleChange} />
        </label>
        <label>
          Audience cible:
          <input type="text" name="targetAudience" value={formData.targetAudience.join(', ')} onChange={(e) => handleChange({ target: { name: 'targetAudience', value: e.target.value.split(', ').map(v => v.trim()) } })} />
        </label>
        <label>
          Convient pour:
          <input type="text" name="suitableFor" value={formData.suitableFor.join(', ')} onChange={(e) => handleChange({ target: { name: 'suitableFor', value: e.target.value.split(', ').map(v => v.trim()) } })} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Sauvegarder</button>
      </form>
      <Link href={`/cardactiv/${cardActiv.id}`}>Retour</Link>
    </div>
  );
}
