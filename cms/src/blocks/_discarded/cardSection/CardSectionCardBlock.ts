import { textColor } from '@/design/colors'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { iconsListString } from '@/icons/iconsList'
import { Block } from 'payload'
import { textAlign } from '@/design/orientation'

export const CardSectionCardBlock: Block = {
  slug: 'cardsectioncard',
  fields: [
    { name: 'align', type: 'select', options: getOptionsFromObject(textAlign) },
    {
      name: 'icon',
      type: 'select',
      options: getOptionsFromObject(iconsListString),
    },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: getOptionsFromObject(textColor),
    },
    {
      name: 'href',
      type: 'text',
    },
  ],
}
