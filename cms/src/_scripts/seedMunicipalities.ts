import { createSlug } from '@roo/shared/functions/data-manipulation/createSlug'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parseStringPromise } from 'xml2js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const run = async () => {
  const xmlContent = fs.readFileSync(path.resolve(__dirname, '../_data/municipalities.xml'), 'utf8')

  // Použití JSDOM pro parsování XML v Node.js prostředí
  const result = await parseStringPromise(xmlContent, {
    explicitArray: false, // přestanou vznikat zbytečné pole
    mergeAttrs: true, // atributy se spojí přímo do objektu
  })

  const municipalities: {
    Kod: string
    Nazev: string
    StatusKod: string
    PouKod: string
    PouNazev: string
    OrpKod: string
    OrpNazev: string
    VuscKod: string
    VuscNazev: string
  }[] = result.VdpExportPrvku.PrvkyObec.Zaznamy.Obec

  const BATCH_SIZE = 100

  for (let i = 0; i < municipalities.length; i += BATCH_SIZE) {
    const batch = municipalities.slice(i, i + BATCH_SIZE)

    await Promise.all(
      batch.map((municipality) =>
        axios
          .post(
            'http://localhost:3001/api/municipalities',
            {
              code: Number(municipality.Kod),
              name: municipality.Nazev,
              slug: createSlug(municipality.Nazev),
              statusCode: municipality.StatusKod,
              pouCode: Number(municipality.PouKod),
              pouName: municipality.PouNazev,
              orpCode: Number(municipality.OrpKod),
              orpName: municipality.OrpNazev,
              region: municipality.VuscNazev,
              regionCode: Number(municipality.VuscKod),
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          .catch((err) =>
            console.error('Failed for', municipality.Nazev, err.response?.data || err.message),
          ),
      ),
    )

    console.log(`Batch ${i / BATCH_SIZE + 1} done`)
  }
}

run()
