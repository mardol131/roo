import { Block } from 'payload'
import { buttonsField, getOverlayField, imageField } from '../_global/fields'

import { textsField } from '../_blocks/textBlock'

const CardBlock: Block = {
  slug: 'CardBlock',
  labels: { singular: 'Karta', plural: 'Karty' },
  fields: [imageField, textsField, buttonsField],
}

export const CardsSectionBlock: Block = {
  slug: 'CardsSection',
  labels: { singular: 'Karty s textem a obrázkem', plural: 'Karty s textem a obrázkem' },
  fields: [
    textsField,
    { name: 'iconsTextCards', type: 'blocks', blocks: [CardBlock] },
    getOverlayField(),
  ],
}
