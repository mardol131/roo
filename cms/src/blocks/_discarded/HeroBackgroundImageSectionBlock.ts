import { Block } from 'payload'
import { headingField } from '../_global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients, textColor } from '@/design/colors'

export const HeroBackgroundImageSectionBlock: Block = {
  slug: 'herobackgroundimage',
  fields: [
    headingField,
    {
      name: 'text',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'color', type: 'select', options: getOptionsFromObject(textColor) },
      ],
      required: true,
    },
    { name: 'image', type: 'text', required: true },
    { name: 'bgColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
  ],
}
