import { Block } from 'payload'
import {
  buttonsField,
  getImageField,
  getOverlayField,
  imageField,
  overlayField,
} from '../_global/fields'
import { getTextsField, TextBlock, textsField } from '../_blocks/textBlock'
import { widgetsField } from '../_blocks/widgetsBlocks'

export const TextSectionBlock: Block = {
  slug: 'TextSection',
  labels: { singular: 'Textová sekce', plural: 'Textové sekce' },
  fields: [
    getTextsField(),
    buttonsField,
    getOverlayField('innerOverlay', 'Vnitřní overlay'),
    getOverlayField('outerOverlay', 'Vnější overlay'),
  ],
}
