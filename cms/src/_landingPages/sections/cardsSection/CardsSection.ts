import { buttonsField } from '@/_landingPages/components/button'
import { getImageField } from '@/_landingPages/components/image'
import { getOverlayField } from '@/_landingPages/components/overlay'
import { textsField } from '@/_landingPages/components/text'
import { Block } from 'payload'

const CardBlock: Block = {
  slug: 'CardBlock',
  labels: { singular: 'Karta', plural: 'Karty' },
  fields: [getImageField({}), textsField, buttonsField],
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
