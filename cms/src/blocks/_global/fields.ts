import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { buttonSizeList, buttonTypeList } from '@roo/shared/design/button'
import { colorsAndGradients, textColor } from '@roo/shared/design/colors'
import { roundingList } from '@roo/shared/design/rounding'
import { Field } from 'payload'
import { ButtonBlock } from '../_blocks/buttonBlock'

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

export const overlayField: Field = {
  label: 'Pozadí sekce',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'overlay',
      type: 'group',
      fields: [
        { name: 'overlayColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
        { name: 'image', type: 'text' },
      ],
    },
  ],
}

export function getOverlayField(name?: string, label?: string) {
  const field: Field = {
    label: label || 'Pozadí sekce',
    type: 'collapsible',
    admin: { initCollapsed: true },
    fields: [
      {
        name: name || 'overlay',
        type: 'group',
        fields: [
          {
            name: 'overlayColor',
            type: 'select',
            options: getOptionsFromObject(colorsAndGradients),
          },
          {
            name: 'overlayClassname',
            type: 'text',
          },
          imageField,
          {
            label: 'Nápověda',
            type: 'collapsible',
            admin: { initCollapsed: true },
            fields: [
              {
                name: 'advice',
                type: 'json',
                admin: { readOnly: true },
                defaultValue: () => {
                  return {
                    Nápověda: 'V classname používáš Tailwind. Pochopíš to z kódu.',
                    simple: 'bg-red',
                    gradienty: 'bg-linear-<stupně natočení> from-red-500 via-blue-500 to-green-500',
                    ourColors: 'from-red-500 via-blue-500 to-green-500',
                    transparency:
                      'Za barvu dát /<číslo>, vyjadřuje procento. Takže třeba via-blue-500/40 nebo bg-black/20',
                  }
                },
                access: {
                  read: () => false,
                  update: () => false,
                },
              },
            ],
          },
        ],
      },
    ],
  }
  return field
}

export const GTField: Field = {
  label: 'Google Tag',
  name: 'GT',
  type: 'group',
  fields: [
    {
      name: 'event',
      type: 'text',
    },
    { name: 'value', type: 'text' },
  ],
}

export const buttonsField: Field = {
  label: 'Tlačítka',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'buttons',
      type: 'blocks',
      blocks: [ButtonBlock],
    },
  ],
}

export function getButtonField(name?: string, admin?: string, required?: boolean) {
  const field: Field = {
    label: admin || 'Tlačítko',
    type: 'collapsible',
    admin: { initCollapsed: true },
    fields: [
      {
        name: name || 'button',
        type: 'group',
        fields: [
          { name: 'text', type: 'text', required: required },
          { name: 'textColor', type: 'select', options: getOptionsFromObject(textColor) },
          {
            name: 'bgColor',
            type: 'select',
            options: getOptionsFromObject(colorsAndGradients),
          },
          { name: 'size', type: 'select', options: getOptionsFromObject(buttonSizeList) },
          { name: 'rounding', type: 'select', options: getOptionsFromObject(roundingList) },
          { name: 'className', type: 'text' },
          { name: 'type', type: 'select', options: getOptionsFromObject(buttonTypeList) },
          { name: 'link', type: 'text' },
          GTField,
        ],
      },
    ],
  }

  return field
}

export const columnField: Field = {
  name: 'column',
  type: 'group',
  fields: [
    { name: 'start', type: 'number', required: true },
    { name: 'end', type: 'number', required: true },
  ],
}

export const rowField: Field = {
  name: 'row',
  type: 'group',
  fields: [
    { name: 'start', type: 'number', required: true },
    { name: 'end', type: 'number', required: true },
  ],
}
