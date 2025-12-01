export function createSlug(input: string): string {
  return input
    .normalize("NFD") // rozdělí písmena a diakritiku (např. č -> c + ̌)
    .replace(/[\u0300-\u036f]/g, "") // odstraní diakritiku
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // nahradí mezery a nealfanumerické znaky pomlčkou
    .replace(/(^-|-$)+/g, ""); // odstraní pomlčky na začátku a konci
}
