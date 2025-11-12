import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients } from '@roo/shared/design/colors'
import { Field } from 'payload'
import { getImageField } from './image'

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
          getImageField({}),
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
