import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients, textColor } from '@roo/shared/design/colors'
import { Block, Field } from 'payload'

import { roundingList } from '@roo/shared/design/rounding'
import { buttonSize, buttonType } from '@roo/shared/design/button'

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
    { name: 'size', type: 'select', options: getOptionsFromObject(buttonSize) },
    { name: 'rounding', type: 'select', options: getOptionsFromObject(roundingList) },
    { name: 'className', type: 'text' },
    { name: 'type', type: 'select', options: getOptionsFromObject(buttonType) },
    { name: 'link', type: 'text' },
    GTField,
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
          { name: 'size', type: 'select', options: getOptionsFromObject(buttonSize) },
          { name: 'rounding', type: 'select', options: getOptionsFromObject(roundingList) },
          { name: 'className', type: 'text' },
          { name: 'type', type: 'select', options: getOptionsFromObject(buttonType) },
          { name: 'link', type: 'text' },
          GTField,
        ],
      },
    ],
  }

  return field
}
