'use client';  // Utilisez cette directive pour les composants React dans l'espace "app" de Next.js 13+

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NavbarAdmin } from '@/components/NavbarAdmin';

export default function NewCardActiv() {
  const sectionElement = [
    { acti: 'Activité Nocturne', imgsrc: "../image/nightlife.png", indx: 1 },
    { acti: 'Restaurant', imgsrc: "../image/restaurant.png", indx: 2 },
    { acti: 'Plages', imgsrc: "../image/hiking.png", indx: 3 },
    { acti: 'Shopping', imgsrc: "../image/shopping.png", indx: 4 },
    { acti: 'Activité Atypique', imgsrc: "../image/insolite.png", indx: 5 }
  ];
  const router = useRouter();
  const [formData, setFormData] = useState({
    name_fr: '',
    imgSrc: '',
    approxDistance: '',
    approxTime: '',
    carRequired: false,
    targetAudience: '',
    suitableFor: '',
    description: '',
    type_acti: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/cardactiv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imgSrc:"../image/insolite.png",
          targetAudience:formData.targetAudience.split(',').map(str => str.trim()) ,  // Convertit la chaîne en tableau
          suitableFor:formData.suitableFor.split(',').map(str => str.trim()) ,  // Convertit la chaîne en tableau
        }),
      });

      if (res.ok) {
        router.push('/cardactiv');
      } else {
        console.error('Failed to create CardActiv');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg">
    <NavbarAdmin relativLink={"/cardactiv"}/>
    <h1 className="text-2xl font-bold mb-6 text-center">Create New CardActiv</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-4">
          <label htmlFor="type_acti" className="block text-sm font-medium text-gray-700">Type d'activité:</label>
          <select
            id="type_acti"
            name="type_acti"
            value={formData.type_acti}
            onChange={handleChange}
            required
            className="input input-bordered w-full mt-1"
          >
            <option value="" disabled>Choisir un type d'activité</option>
            {sectionElement.map((item, index) => (
              <option key={index} value={item.indx}>
                {item.acti}
              </option>
            ))}
          </select>
        </div>
      <div className="mb-4">
        <label htmlFor="name_fr" className="block text-sm font-medium text-gray-700">Titre:</label>
        <input
          type="text"
          id="name_fr"
          name="name_fr"
          value={formData.name_fr}
          onChange={handleChange}
          required
          className="input input-bordered w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imgSrc" className="block text-sm font-medium text-gray-700">Image Source URL:</label>
        <input
          type="text"
          id="imgSrc"
          name="imgSrc"
          value={formData.imgSrc}
          onChange={handleChange}
          required
          className="input input-bordered w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="approxDistance" className="block text-sm font-medium text-gray-700">Distance approximative en km:</label>
        <input
          type="number"
          id="approxDistance"
          name="approxDistance"
          value={formData.approxDistance}
          onChange={handleChange}
          required
          className="input input-bordered w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="approxTime" className="block text-sm font-medium text-gray-700">Durée pour y arriver en heure depuis l'appartement:</label>
        <input
          type="number"
          id="approxTime"
          name="approxTime"
          value={formData.approxTime}
          onChange={handleChange}
          required
          className="input input-bordered w-full mt-1"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="carRequired" className="block text-sm font-medium text-gray-700 mr-2">Besoin d'une voiture pour accéder:</label>
        <input
          type="checkbox"
          id="carRequired"
          name="carRequired"
          checked={formData.carRequired}
          onChange={handleChange}
          className="checkbox checkbox-primary"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Audience ciblée (mettre une virgule entre chaque type d'audience):</label>
        <input
          type="text"
          id="targetAudience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          required
          className="input input-bordered w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="suitableFor" className="block text-sm font-medium text-gray-700">Adaptée pour (mettre une virgule entre chaque item):</label>
        <input
          type="text"
          id="suitableFor"
          name="suitableFor"
          value={formData.suitableFor}
          onChange={handleChange}
          required
          className="input input-bordered w-full mt-1"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="textarea textarea-bordered w-full mt-1"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">Create CardActiv</button>
    </form>
  </div>
  
  );
}
