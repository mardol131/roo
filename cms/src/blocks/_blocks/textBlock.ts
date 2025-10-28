import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block, Field } from 'payload'

import { fontWeight, textColor, textLevels } from '../types/textTypes'
import { getImageField } from '../_global/fields'

export const TextBlock: Block = {
  slug: 'TextBlock',
  fields: [
    { name: 'level', type: 'select', options: getOptionsFromObject(textLevels) },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: getOptionsFromObject(textColor),
    },
    { name: 'text', type: 'text', required: true },
    { name: 'className', type: 'text' },
    { name: 'fontWeight', type: 'select', options: getOptionsFromObject(fontWeight) },
  ],
}

export const ImageBlock: Block = {
  slug: 'imageBlock',
  fields: [getImageField()],
}

export const textsField: Field = { name: 'texts', type: 'blocks', blocks: [TextBlock] }

export function getTextsField(name?: string, required?: boolean) {
  const field: Field = {
    label: 'Texty',
    type: 'collapsible',
    fields: [{ name: name || 'texts', type: 'blocks', blocks: [TextBlock, ImageBlock] }],
    admin: { initCollapsed: true },
    required: required || false,
  }
  return field
}
