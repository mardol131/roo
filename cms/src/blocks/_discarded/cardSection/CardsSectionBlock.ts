import { Block } from 'payload'
import { CardSectionCardBlock } from './CardSectionCardBlock'

import { headingField, overlayField } from '../global/fields'

export const CardsSectionBlock: Block = {
  slug: 'cardssection',
  fields: [
    headingField,
    {
      name: 'cards',
      type: 'blocks',
      required: true,
      blocks: [CardSectionCardBlock],
    },
    overlayField,
  ],
}
