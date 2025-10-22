import { PayloadPublicCollectionsType } from "@/app/_types/collections";

export async function getPublicCollectionData(
  collection: PayloadPublicCollectionsType
) {
  try {
    const response = await fetch(`${process.env.CMS_URL}/api/${collection}`, {
      method: "GET",
      mode: "cors",
    });

    const json = await response.json();

    return json;
  } catch (err) {
    console.log(err);
  }
}
