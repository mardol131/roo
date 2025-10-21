import { withPayload } from '@payloadcms/next/withPayload'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// changing env file to monorepo env in development
if (process.env.VERCEL !== '1') {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const rootEnvPath = path.resolve(__dirname, '../.env')
  dotenv.config({ path: rootEnvPath })
  console.log('🔹 ENV načteno z rootu')
} else {
  console.warn('⚠️ Root .env nebyl nalezen')
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
