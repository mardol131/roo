import { buttonsField } from '@/_landingPages/components/button'
import { getOverlayField } from '@/_landingPages/components/overlay'
import { TextBlock } from '@/_landingPages/components/text'
import { widgetsField } from '@/_landingPages/components/widgets'
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
