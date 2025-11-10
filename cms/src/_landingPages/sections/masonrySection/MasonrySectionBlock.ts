import { Block } from 'payload'
import { MasonryBubbleBlock, MasonryBubbleImageBlock } from './MasonryBubbleBlock'
import { getTextsField } from '@/_landingPages/components/text'
import { overlayField } from '@/_landingPages/components/overlay'
import { buttonsField } from '@/_landingPages/components/button'

export const MasonrySectionBlock: Block = {
  slug: 'MasonrySection',
  labels: { singular: 'Masonry sekce', plural: 'Masonry sekce' },
  fields: [
    getTextsField('textsTop'),
    getTextsField('textsBottom'),
    {
      name: 'bubbles',
      type: 'blocks',
      blocks: [MasonryBubbleBlock, MasonryBubbleImageBlock],
      required: true,
    },
    overlayField,
    buttonsField,
  ],
}
