import { Block } from 'payload'
import { buttonsField, getOverlayField, overlayField } from '../_global/fields'
import { TextBlock } from '../_blocks/textBlock'
import { widgetsField } from '../_blocks/widgetsBlocks'

export const BannerSectionBlock: Block = {
  slug: 'BannerSection',
  labels: { singular: 'Banner', plural: 'Bannery' },
  fields: [
    { name: 'texts', type: 'blocks', blocks: [TextBlock] },
    getOverlayField(),
    buttonsField,
    widgetsField,
  ],
}
