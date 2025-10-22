// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/users'
import { Posts } from './collections/posts'
import { Listings } from './collections/listings'
import { SubListings } from './collections/subListings'
import { Places } from './collections/places'
import { Categories } from './collections/categories'
import { Pages } from './collections/pages'
import dotenv from 'dotenv'
import { Media } from './collections/media'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if (process.env.VERCEL !== '1') {
  const rootEnvPath = path.resolve(__dirname, '../../.env')
  dotenv.config({ path: rootEnvPath })
  console.log('🔹 ENV načteno z rootu')
} else {
  console.warn('⚠️ Root .env nebyl nalezen')
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(__dirname),
    },
    livePreview: {
      url: ({ data }) => {
        return `${process.env.WEBSITE}/${data.pageSlug}`
      },
      collections: ['pages'],
    },
  },
  collections: [Users, Posts, Listings, SubListings, Places, Categories, Pages, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  cors: {
    origins: ['http://localhost:3000'],
  },
})
