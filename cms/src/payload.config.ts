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
import { Pages } from './collections/pages'
import dotenv from 'dotenv'
import { Media } from './collections/media'
import { Admins } from './collections/admins'
import { BlogTags } from './collections/blogTags'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { Companies } from './collections/companies'
import { Countries } from './collections/countries'
import { Regions } from './collections/regions'
import { Districts } from './collections/districts'
import { Municipalities } from './collections/municipalities'

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
        if (collectionConfig?.slug === 'pages') {
          return `${process.env.NEXT_PUBLIC_WEBSITE}/stranky/${data.slug}`
        }
        return `${process.env.NEXT_PUBLIC_WEBSITE}/${data.slug}`
      },
      collections: ['pages'],
    },
  },
  upload: {
    limits: { fileSize: 1000 * 1000 * 10 },
  },
  email: nodemailerAdapter({
    defaultFromAddress: process.env.ROO_EMAIL || 'roo@rooevent.com',
    defaultFromName: 'Roo',
    transportOptions: {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  }),
  collections: [
    Users,
    Posts,
    Listings,
    Companies,
    Pages,
    Media,
    Admins,
    BlogTags,
    Countries,
    Regions,
    Districts,
    Municipalities,
  ],
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
