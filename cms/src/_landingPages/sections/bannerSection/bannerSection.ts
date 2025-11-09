import { TextBlock } from '@/_landingPages/components/textBlock'
import { Block } from 'payload'

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
