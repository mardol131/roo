import { getImageField } from '@/_landingPages/components/image'
import { getTextsField } from '@/_landingPages/components/text'
import { ACL } from '@/functions/ACL'
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    getImageField({ name: 'image', label: 'Náhledový obrázek stránky', sidebar: true }),
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
      defaultValue: false,
    },
    { name: 'author', type: 'relationship', relationTo: 'admins', admin: { position: 'sidebar' } },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'blog-tags',
      admin: { position: 'sidebar' },
      hasMany: true,
    },
    {
      name: 'placeholder',
      type: 'ui',
      admin: {
        components: {
          Cell: '@/cells/PagesPlaceholder',
        },
      },
    },
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      label: 'Meta description',
      name: 'description',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      label: 'Slug',
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
      unique: true,
    },

    {
      label: 'Canonical',
      name: 'canonical',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      label: 'OG',
      type: 'collapsible',
      admin: {
        initCollapsed: true,
        position: 'sidebar',
      },
      fields: [
        {
          label: 'OG',
          name: 'og',
          type: 'group',
          fields: [
            {
              label: 'og:title',
              name: 'og:title',
              type: 'text',
            },
            {
              label: 'og:description',
              name: 'og:description',
              type: 'text',
            },
            {
              label: 'og:image',
              name: 'og:image',
              type: 'text',
            },
            {
              label: 'og:url',
              name: 'og:url',
              type: 'text',
            },
            {
              label: 'og:type',
              name: 'og:type',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      label: 'Twitter',
      type: 'collapsible',
      admin: {
        initCollapsed: true,
        position: 'sidebar',
      },
      fields: [
        {
          label: 'Twitter',
          name: 'twitter',
          type: 'group',
          fields: [
            {
              label: 'twitter:title',
              name: 'twitter:title',
              type: 'text',
            },
            {
              label: 'twitter:description',
              name: 'twitter:description',
              type: 'text',
            },
            {
              label: 'twitter:image',
              name: 'twitter:image',
              type: 'text',
            },
            {
              label: 'twitter:card',
              name: 'twitter:card',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      label: 'JSON-LD',
      name: 'JSON_LD',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'excerpt',
      type: 'text',
      required: true,
    },
    getTextsField(),
  ],
  access: {
    read: () => true,
    create: ACL({ roles: ['admin'] }),
    delete: ACL({ roles: ['admin'] }),
    update: ACL({ roles: ['admin'] }),
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.title) {
          data.slug = data.title
            .normalize('NFD') // rozdělí písmena a diakritiku (např. č -> c + ̌)
            .replace(/[\u0300-\u036f]/g, '') // odstraní diakritiku
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // nahradí mezery a nealfanumerické znaky pomlčkou
            .replace(/(^-|-$)+/g, '') // odstraní pomlčky na začátku a konci

          data.canonical = `${process.env.NEXT_PUBLIC_WEBSITE}/blog/${data.slug}`
          if (!data.description) {
            data.description = data.title
          }
        }

        return data
      },
    ],
  },
}
