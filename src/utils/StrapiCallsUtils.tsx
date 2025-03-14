"use server";

const BASE_URL = process.env.BASE_URL;

export const getTestimonials = async (selectedLanguage: string | null) => {
  const url = selectedLanguage
    ? `${BASE_URL}/api/testimonials?locale=${selectedLanguage}`
    : null;

  if (!url) {
    throw new Error("No provided selectedLanguage for fetching testimonials");
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching testimonials: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    throw error;
  }
};

export async function getMainValuesData(lang: string) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/key-values?lang=${lang}`,
    {
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch values");
  return res.json();
}
