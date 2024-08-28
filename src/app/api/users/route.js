// src/app/api/users/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (id) {
    // Récupérer un seul enregistrement
    const cardActiv = await prisma.cardActiv.findUnique({ where: { id: parseInt(id) } });
    if (cardActiv) {
      return new Response(JSON.stringify(cardActiv), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'CardActiv not found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    // Récupérer tous les enregistrements
    const cardActivs = await prisma.cardActiv.findMany();
    return new Response(JSON.stringify(cardActivs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


export async function POST(request) {
  try {
    const { name, email, age } = await request.json();
    // Validation des données
    if (!name || !email || isNaN(age)) {
      return new Response(
        JSON.stringify({ error: "Données manquantes ou invalides." }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    const newUser = await prisma.user.create({
      data: { name, email, age: parseInt(age) },
    });
    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur POST:', error); // Ajout de journalisation
    return new Response(
      JSON.stringify({ error: "L'utilisateur n'a pas pu être créé." }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
