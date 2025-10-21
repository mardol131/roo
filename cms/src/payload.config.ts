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
dotenv.config()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data }) => {
        return `http://localhost:3000/${data.pageSlug}`
      },
      collections: ['pages'],
    },
  },
  collections: [Users, Posts, Listings, SubListings, Places, Categories, Pages, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
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
