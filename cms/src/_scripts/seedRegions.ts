import { createSlug } from '@roo/shared/functions/data-manipulation/createSlug'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parseStringPromise } from 'xml2js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const run = async () => {
  const xmlContent = fs.readFileSync(path.resolve(__dirname, '../_data/regions.xml'), 'utf8')

  // Použití JSDOM pro parsování XML v Node.js prostředí
  const result = await parseStringPromise(xmlContent, {
    explicitArray: false, // přestanou vznikat zbytečné pole
    mergeAttrs: true, // atributy se spojí přímo do objektu
  })

  const regions: { Kod: string; Nazev: string; RegionKod: string; RegionNazev: string }[] =
    result.VdpExportPrvku.PrvkyVusc.Zaznamy.Vusc

  regions.forEach(async (region) => {
    await axios.post(
      `http://localhost:3001/api/regions`,
      {
        code: new Number(region.Kod),
        name: region.Nazev,
        slug: createSlug(region.Nazev),
        countryPart: region.RegionNazev,
        countryPartCode: new Number(region.RegionKod),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    console.log(`Region ${region.Nazev} zpracován.`)
  })
}

run()
