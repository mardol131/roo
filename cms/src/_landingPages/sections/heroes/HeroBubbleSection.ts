import { Block } from 'payload'
import { textsField } from '../_blocks/textBlock'
import { buttonsField, getOverlayField } from '../_global/fields'

export const HeroBubbleSectionBlock: Block = {
  slug: 'HeroBubbleSection',
  labels: { singular: 'Hero v bublině', plural: 'Hero v bublině' },
  fields: [textsField, buttonsField, getOverlayField('innerOverlay')],
}
