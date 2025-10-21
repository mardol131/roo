import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block, Field } from 'payload'

import { fontWeight, textColor, textLevels } from '../types/textTypes'

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

export const textsField: Field = { name: 'texts', type: 'blocks', blocks: [TextBlock] }

export function getTextsField(name: string) {
  const field: Field = {
    label: 'Texty',
    type: 'collapsible',
    fields: [{ name: name, type: 'blocks', blocks: [TextBlock] }],
    admin: { initCollapsed: true },
  }
  return field
}
