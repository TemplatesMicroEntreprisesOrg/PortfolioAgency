"use client";

import useSWR from "swr";
import { getMainValuesData } from "@/utils/StrapiCallsUtils";
import MainValueCard from "../MainValueCard/MainValueCard";
import { useLanguage } from "@/context/LanguageContext";

interface MainValuesProps {
  id: number;
  Value: string;
  Label: string;
  iconName: "check" | "star" | "work";
}

const fetcher = async (lang: string) => {
  const { data } = await getMainValuesData(lang);
  return data;
};

export default function MainValuesCardsClient({
  initialData,
}: {
  initialData: MainValuesProps[];
}) {
  const { selectedLanguage } = useLanguage();

  const { data } = useSWR(selectedLanguage, fetcher, {
    fallbackData: initialData, // Utiliser les données initiales au premier rendu
  });

  return (
    <div className="mainValuesCards">
      {data?.map((value: MainValuesProps) => (
        <MainValueCard
          key={value.id}
          label={value.Label}
          value={value.Value}
          icon={value.iconName}
        />
      ))}
    </div>
  );
}
