import { Block } from 'payload'
import { buttonsField, getOverlayField, headingField, imageField } from '../_global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients, textColor } from '@/design/colors'
import { textsField } from '../_blocks/textBlock'

export const HeroBubbleSectionBlock: Block = {
  slug: 'HeroBubbleSection',
  labels: { singular: 'Hero v bublině', plural: 'Hero v bublině' },
  fields: [textsField, buttonsField, getOverlayField('innerOverlay')],
}
