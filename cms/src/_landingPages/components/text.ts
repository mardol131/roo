import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block, Field } from 'payload'

import { textColor } from '@roo/shared/design/colors'
import { font, fontSize, fontWeight, textTag } from '@roo/shared/design/texts'
import { ImageBlock } from './image'

export const TextBlock: Block = {
  slug: 'TextBlock',
  fields: [
    {
      name: 'tag',
      type: 'select',
      options: getOptionsFromObject(textTag),
      required: true,
      defaultValue: 'p',
    },
    { name: 'text', type: 'textarea', required: true },
    {
      name: 'size',
      type: 'select',
      options: getOptionsFromObject(fontSize),
      defaultValue: 'bodyXl',
    },
    { name: 'fontWeight', type: 'select', options: getOptionsFromObject(fontWeight) },
    { name: 'font', type: 'select', options: getOptionsFromObject(font) },
    {
      name: 'color',
      type: 'select',
      options: getOptionsFromObject(textColor),
    },
    { name: 'className', type: 'text' },
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
