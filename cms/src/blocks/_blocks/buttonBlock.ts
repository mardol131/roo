import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { iconsListString } from '@/icons/iconsList'
import { Block } from 'payload'
import { textAlign } from '@/design/orientation'
import { getRichTextField } from '../_global/fields'
import { fontWeight, textColor, textLevels } from '../types/textTypes'
import { colorsAndGradients } from '@/design/colors'
import { buttonSizeList, buttonType, rounding } from '../types/buttonTypes'

export const ButtonBlock: Block = {
  slug: 'ButtonBlock',
  fields: [
    { name: 'text', type: 'text', required: true },
    { name: 'textColor', type: 'select', options: getOptionsFromObject(textColor) },
    {
      name: 'bgColor',
      type: 'select',
      options: getOptionsFromObject(colorsAndGradients),
    },
    { name: 'size', type: 'select', options: getOptionsFromObject(buttonSizeList) },
    { name: 'rounding', type: 'select', options: getOptionsFromObject(rounding) },
    { name: 'className', type: 'text' },
    { name: 'type', type: 'select', options: getOptionsFromObject(buttonType) },
    { name: 'link', type: 'text' },
  ],
}
