import { Block, Field } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  fields: [getImageField()],
}

export const imageField: Field = {
  label: 'Obrázek',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'image',
      type: 'group',
      fields: [
        { name: 'imageUpload', type: 'upload', relationTo: 'media' },
        { name: 'alt', type: 'text', admin: { readOnly: true } },
        { name: 'src', type: 'text', admin: { readOnly: true } },
      ],
      hooks: {
        beforeChange: [
          async ({ value, originalDoc, req }) => {
            if (!value?.imageUpload) return value

            if (value?.imageUpload === originalDoc.imageUpload) {
              return value
            }
            // // 1️⃣ Získáš data nahraného obrázku z kolekce `media`
            const media = await req.payload.findByID({
              collection: 'media',
              id: value.imageUpload,
            })

            console.log(media)

            // 2️⃣ Lokální cesta nebo URL (záleží na tvém Payload storage adapteru)
            const localUrl = media?.url || media?.filename
            if (!localUrl) return value

            console.log(localUrl)

            // 3️⃣ Uploadni na CDN (např. Cloudinary, Bunny, S3...)
            // const cdnUrl = await uploadToCdn(localUrl)

            // 4️⃣ Vrať aktualizovanou hodnotu groupy
            return {
              ...value,
              src: media.filename,
              alt: media.alt,
            }
          },
        ],
      },
    },
  ],
}

export function getImageField(name?: string, label?: string) {
  const imageField: Field = {
    label: label || 'Obrázek',
    type: 'collapsible',
    admin: { initCollapsed: true },
    fields: [
      {
        name: name ? name : 'image',
        type: 'group',
        fields: [
          { name: 'imageUpload', type: 'upload', relationTo: 'media' },
          { name: 'alt', type: 'text', admin: { readOnly: true } },
          { name: 'src', type: 'text', admin: { readOnly: true } },
          { name: 'rounded', type: 'select', options: ['true', 'false'] },
          { name: 'shadow', type: 'select', options: ['true', 'false'] },
        ],
        hooks: {
          beforeChange: [
            async ({ value, originalDoc, req }) => {
              if (!value?.imageUpload) return { ...value, src: '', alt: '' }

              if (value?.imageUpload === originalDoc.imageUpload) {
                return value
              }
              // // 1️⃣ Získáš data nahraného obrázku z kolekce `media`
              const media = await req.payload.findByID({
                collection: 'media',
                id: value.imageUpload,
              })

              // 2️⃣ Lokální cesta nebo URL (záleží na tvém Payload storage adapteru)
              const localUrl = media?.url || media?.filename
              if (!localUrl) return value

              // 3️⃣ Uploadni na CDN (např. Cloudinary, Bunny, S3...)
              // const cdnUrl = await uploadToCdn(localUrl)

              // 4️⃣ Vrať aktualizovanou hodnotu groupy
              return {
                ...value,
                src: media.filename,
                alt: media.alt,
              }
            },
          ],
        },
      },
    ],
  }

  return imageField
}
