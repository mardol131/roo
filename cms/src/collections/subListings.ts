import type { CollectionConfig } from 'payload'

export const SubListings: CollectionConfig = {
  slug: 'sub-listings',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'startingPrice',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'Listing',
      type: 'relationship',
      relationTo: 'listings',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImage',
      type: 'text',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
  ],
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        // pokud slug není vyplněný, vygeneruj ho z title
        if (data?.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // nahradí mezery a speciální znaky
            .replace(/(^-|-$)+/g, '') // odstraní přebytečné pomlčky na začátku/konci

          return data
        }
      },
    ],
  },
}
