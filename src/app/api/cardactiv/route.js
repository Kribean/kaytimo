import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const {searchParams} = new URL(req.url);
    const actiType = searchParams.get("acti-type")
    // Récupérer tous les enregistrements de CardActiv
    const cardActivs = await prisma.cardActiv.findMany({
      where:{...(actiType && actiType!=="null" && actiType!=="" && actiType!=="all") && {type_acti:String(actiType)}}
    });
    return NextResponse.json(cardActivs,{status:200})
    
  } catch (error) {
    const {searchParams} = new URL(req.url);
    const actiType = searchParams.get("acti-type")
    return NextResponse.json({ error: actiType },{status:500})
    
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const newCardActiv = await prisma.cardActiv.create({
      data: {
        type_acti:"sdfs",
        name_fr: body.name_fr,
        imgSrc: body.imgSrc,
        approxDistance: parseFloat(body.approxDistance),
        approxTime: parseFloat(body.approxTime),
        carRequired: body.carRequired,
        targetAudience: body.targetAudience, // Sérialiser en JSON si vous utilisez une chaîne pour le stockage
        suitableFor: body.suitableFor,       // Sérialiser en JSON si vous utilisez une chaîne pour le stockage
        description: body.description,
      },
    });

    console.log(newCardActiv, " :panam");  // Correction ici

    return new Response(JSON.stringify(newCardActiv), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur lors de la création de CardActiv:', error);  // Ajout d'un log d'erreur plus détaillé

    return new Response(JSON.stringify({ error: 'Erreur lors de la création de CardActiv.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, ...data } = body;

    const updatedCardActiv = await prisma.cardActiv.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        targetAudience: JSON.stringify(data.targetAudience), // Sérialiser en JSON si vous utilisez une chaîne pour le stockage
        suitableFor: JSON.stringify(data.suitableFor),       // Sérialiser en JSON si vous utilisez une chaîne pour le stockage
      },
    });

    return new Response(JSON.stringify(updatedCardActiv), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erreur lors de la mise à jour de CardActiv.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const deletedCardActiv = await prisma.cardActiv.delete({
      where: { id: parseInt(id) },
    });

    return new Response(JSON.stringify(deletedCardActiv), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erreur lors de la suppression de CardActiv.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
