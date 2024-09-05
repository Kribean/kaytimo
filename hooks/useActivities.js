"use client"
import { useQuery } from "@tanstack/react-query";

const getActivities = async (slug) => {
  try {

    const response = await fetch(`/api/cardactiv?acti-type=${slug}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch activities: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error; // Relancer l'erreur pour qu'elle soit capturée par useQuery
  }
};

export const useActivities = (slug) => {
  return useQuery({
    queryKey: ["activities", slug],
    queryFn: ()=>getActivities(slug),
  });
};
