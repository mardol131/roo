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
import { resendAdapter } from '@payloadcms/email-resend'
import { Admins } from './collections/admins'

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
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(__dirname),
    },
    livePreview: {
      url: ({ data, collectionConfig }) => {
        console.log('preview', collectionConfig)
        if (collectionConfig?.slug === 'pages') {
          return `${process.env.NEXT_PUBLIC_WEBSITE}/stranky/${data.pageSlug}`
        }
        return `${process.env.NEXT_PUBLIC_WEBSITE}/${data.pageSlug}`
      },
      collections: ['pages'],
    },
  },
  email: resendAdapter({
    defaultFromAddress: 'roo-admin@rooevent.com',
    defaultFromName: 'Roo Admin',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  collections: [Users, Posts, Listings, SubListings, Places, Categories, Pages, Media, Admins],
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
    origins: [
      process.env.NEXT_PUBLIC_WEBSITE!,
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:8080',
    ],
  },
})
