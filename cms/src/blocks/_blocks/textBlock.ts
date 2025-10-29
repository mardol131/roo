import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block, Field } from 'payload'

import { getImageField } from '../_global/fields'
import { textColor } from '@roo/shared/design/colors'
import { fontType, fontWeight, TextLevels } from '@roo/shared/design/texts'

export const TextBlock: Block = {
  slug: 'TextBlock',
  fields: [
    { name: 'level', type: 'select', options: getOptionsFromObject(TextLevels) },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: getOptionsFromObject(textColor),
    },
    { name: 'text', type: 'text', required: true },
    { name: 'className', type: 'text' },
    { name: 'fontWeight', type: 'select', options: getOptionsFromObject(fontWeight) },
    { name: 'font', type: 'select', options: getOptionsFromObject(fontType) },
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
