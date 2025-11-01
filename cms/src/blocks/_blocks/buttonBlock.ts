import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients } from '@roo/shared/design/colors'
import { Block, Field } from 'payload'
import { textColor } from '../types/textTypes'
import { buttonSizeList, buttonTypeList } from '@roo/shared/design/button'
import { roundingList } from '@roo/shared/design/rounding'

export const GTField: Field = {
  label: 'Google Tag Event',
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
    { name: 'rounding', type: 'select', options: getOptionsFromObject(roundingList) },
    { name: 'className', type: 'text' },
    { name: 'type', type: 'select', options: getOptionsFromObject(buttonTypeList) },
    { name: 'link', type: 'text' },
    GTField,
  ],
}
