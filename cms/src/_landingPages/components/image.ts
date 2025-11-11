import { Block, Field } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  fields: [getImageField()],
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
          { name: 'rounded', type: 'checkbox' },
          { name: 'shadow', type: 'checkbox' },
          { name: 'squared', type: 'checkbox' },
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
