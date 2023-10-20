export async function useInventory() {
  const data = await queryContent<{ body: InventoryPart }>("/inventory").findOne();

  return { data };
}
