import MainValuesCardsClient from "./MainValuesCardsClient";
import { getMainValuesData } from "@/utils/StrapiCallsUtils";
import { cookies } from "next/headers";

export default async function MainValuesCardsServer() {
  const selectedLanguage =
    ((await cookies()).get("selectedLanguage")?.value as string) || "fr";

  const data = await getMainValuesData(selectedLanguage);

  return <MainValuesCardsClient initialData={data.data} />;
}
