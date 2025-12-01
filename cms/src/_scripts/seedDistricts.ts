import { createSlug } from '@roo/shared/functions/data-manipulation/createSlug'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parseStringPromise } from 'xml2js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const run = async () => {
  const xmlContent = fs.readFileSync(path.resolve(__dirname, '../_data/districts.xml'), 'utf8')

  // Použití JSDOM pro parsování XML v Node.js prostředí
  const result = await parseStringPromise(xmlContent, {
    explicitArray: false, // přestanou vznikat zbytečné pole
    mergeAttrs: true, // atributy se spojí přímo do objektu
  })

  const districts: { Kod: string; Nazev: string; VuscKod: string; VuscNazev: string }[] =
    result.VdpExportPrvku.PrvkyOkres.Zaznamy.Okres

  console.log(districts)

  districts.forEach(async (district) => {
    await axios.post(
      `http://localhost:3001/api/districts`,
      {
        code: new Number(district.Kod),
        name: district.Nazev,
        slug: createSlug(district.Nazev),
        region: district.VuscNazev,
        regionCode: new Number(district.VuscKod),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    console.log(`District ${district.Nazev} zpracován.`)
  })
}

run()
