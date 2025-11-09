import { Block } from 'payload'
import { buttonsField, getOverlayField, imageField, overlayField } from '../_global/fields'

import { textsField } from '../_blocks/textBlock'

const IconsTextCardBlock: Block = {
  slug: 'IconsTextSection',
  labels: { singular: 'Ikona s textem', plural: 'Ikona s textem' },
  fields: [
    imageField,
    textsField,
    buttonsField,
    { name: 'isCard', type: 'select', options: ['true', 'false'] },
    overlayField,
  ],
}

export const IconsTextSectionBlock: Block = {
  slug: 'IconsTextSection',
  labels: { singular: 'Karty s textem a obrázkem', plural: 'Karty s textem a obrázkem' },
  fields: [
    textsField,
    { name: 'iconsTextCards', type: 'blocks', blocks: [IconsTextCardBlock] },
    getOverlayField(),
  ],
}
