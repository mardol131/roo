import { Block } from 'payload'
import { getTextsField } from '../_blocks/textBlock'
import { buttonsField, overlayField } from '../_global/fields'
import { MasonryBubbleBlock, MasonryBubbleImageBlock } from './MasonryBubbleBlock'

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
