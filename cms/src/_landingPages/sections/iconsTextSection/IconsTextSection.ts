import { buttonsField } from '@/_landingPages/components/button'
import { getImageField } from '@/_landingPages/components/image'
import { getOverlayField, overlayField } from '@/_landingPages/components/overlay'
import { textsField } from '@/_landingPages/components/text'
import { Block } from 'payload'

const IconsTextCardBlock: Block = {
  slug: 'IconsTextSection',
  labels: { singular: 'Ikona s textem', plural: 'Ikona s textem' },
  fields: [
    getImageField(),
    textsField,
    buttonsField,
    { name: 'isCard', type: 'checkbox' },
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
