import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block, Field } from 'payload'

import { getImageField } from '../../blocks/_global/fields'
import { textColor } from '@roo/shared/design/colors'
import { font, fontWeight, textTag, TextTag } from '@roo/shared/design/texts'

export const TextBlock: Block = {
  slug: 'TextBlock',
  fields: [
    { name: 'tag', type: 'select', options: getOptionsFromObject(textTag) },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: getOptionsFromObject(textColor),
    },
    { name: 'text', type: 'text', required: true },
    { name: 'className', type: 'text' },
    { name: 'fontWeight', type: 'select', options: getOptionsFromObject(fontWeight) },
    { name: 'font', type: 'select', options: getOptionsFromObject(font) },
  ],
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
