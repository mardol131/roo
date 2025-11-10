import { buttonsField } from '@/_landingPages/components/button'
import { getOverlayField } from '@/_landingPages/components/overlay'
import { textsField } from '@/_landingPages/components/text'
import { Block } from 'payload'

export const HeroBubbleSectionBlock: Block = {
  slug: 'HeroBubbleSection',
  labels: { singular: 'Hero v bublině', plural: 'Hero v bublině' },
  fields: [textsField, buttonsField, getOverlayField('innerOverlay')],
}
